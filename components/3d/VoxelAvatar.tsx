import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useTheme } from '../../contexts/ThemeContext';
import * as THREE from 'three';
import { useMousePosition } from '../../hooks/useMousePosition';

// Add type declarations for R3F elements to resolve JSX.IntrinsicElements errors
// We augment both the 'react' module (for React 18+) and the global namespace to ensure coverage.
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      group: any;
      mesh: any;
      boxGeometry: any;
      meshStandardMaterial: any;
      ambientLight: any;
      directionalLight: any;
      pointLight: any;
    }
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      group: any;
      mesh: any;
      boxGeometry: any;
      meshStandardMaterial: any;
      ambientLight: any;
      directionalLight: any;
      pointLight: any;
    }
  }
}

const MATRIX = [
  [0,0,1,0,0],
  [0,1,1,1,0],
  [1,1,0,1,1],
  [1,1,1,1,1],
  [1,0,1,0,1],
  [0,1,0,1,0]
];

const VoxelGroup: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  const { theme } = useTheme();
  const mouse = useMousePosition();
  
  // Voxel Logic
  const voxels = useMemo(() => {
    const coords: { x: number; y: number; z: number }[] = [];
    const offsetX = -1.25;
    const offsetY = 1.5;
    
    MATRIX.forEach((row, y) => {
      row.forEach((val, x) => {
        if (val === 1) {
          coords.push({
             x: (x * 0.55) + offsetX, 
             y: -(y * 0.55) + offsetY, 
             z: 0 
          });
        }
      });
    });
    return coords;
  }, []);

  // Floating debris logic
  const debris = useMemo(() => {
    return Array.from({ length: 6 }).map(() => ({
      position: [
        (Math.random() * 6) - 3,
        (Math.random() * 6) - 3,
        (Math.random() * 2) - 1
      ] as [number, number, number],
      speed: Math.random() * 0.02,
      yOffset: Math.random() * 100
    }));
  }, []);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      const time = clock.getElapsedTime();
      
      // Floating animation
      groupRef.current.position.y = Math.sin(time * 0.5) * 0.2;
      
      // Mouse interaction
      groupRef.current.rotation.y += (mouse.x * 0.5 - groupRef.current.rotation.y) * 0.05;
      groupRef.current.rotation.x += (-mouse.y * 0.5 - groupRef.current.rotation.x) * 0.05;
      groupRef.current.rotation.z = Math.sin(time * 0.2) * 0.05;
      
      // Animate debris (children from index > voxels.length)
      // Note: In R3F, we are rendering mapped arrays, so we can't easily iterate children directly 
      // the same way unless we use refs for each debris. 
      // Simplified: We will animate the group, but individual debris animation 
      // needs state or separate components for optimal React patterns.
      // For simplicity in this port, we'll keep debris static relative to the group 
      // or implement a simple wiggle in a separate component if needed.
    }
  });

  const color = theme === 'light' ? '#6366f1' : '#818cf8';

  return (
    <group ref={groupRef}>
      {voxels.map((pos, i) => (
        <mesh key={`voxel-${i}`} position={[pos.x, pos.y, pos.z]}>
          <boxGeometry args={[0.5, 0.5, 0.5]} />
          <meshStandardMaterial color={color} roughness={0.4} metalness={0.6} />
        </mesh>
      ))}
      
      {debris.map((d, i) => (
         <Debris key={`debris-${i}`} initialPos={d.position} yOffset={d.yOffset} color={color} />
      ))}
    </group>
  );
};

const Debris: React.FC<{ initialPos: [number, number, number], yOffset: number, color: string }> = ({ initialPos, yOffset, color }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      const time = clock.getElapsedTime();
      meshRef.current.position.y = initialPos[1] + Math.sin(time + yOffset) * 0.2;
      meshRef.current.rotation.x += 0.02;
    }
  });

  return (
    <mesh ref={meshRef} position={initialPos}>
      <boxGeometry args={[0.2, 0.2, 0.2]} />
      <meshStandardMaterial color={color} roughness={0.4} metalness={0.6} />
    </mesh>
  );
};

const Scene: React.FC = () => {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 45 }} className="w-full h-full">
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[0, 0, 2]} intensity={2} color="#ec4899" distance={10} />
      <VoxelGroup />
    </Canvas>
  );
};

export default Scene;