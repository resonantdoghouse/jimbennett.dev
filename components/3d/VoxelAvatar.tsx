import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useTheme } from '../../contexts/ThemeContext';
import * as THREE from 'three';
import { useMousePosition } from '../../hooks/useMousePosition';

// Fix for missing JSX types for React Three Fiber elements
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

// Fallback UI for when WebGL is unavailable or crashes
const FallbackDisplay = ({ message }: { message: string }) => (
  <div className="w-full h-full flex items-center justify-center bg-accent/5 border-2 border-dashed border-accent/20 rounded-lg">
    <div className="text-center p-4">
      <div className="text-2xl mb-2 text-accent">⚠️</div>
      <span className="font-mono text-xs text-accent">
        {message}
      </span>
    </div>
  </div>
);

// Error Boundary to catch Canvas crashes
class WebGLErrorBoundary extends React.Component<{fallback: React.ReactNode, children: React.ReactNode}, {hasError: boolean}> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }
  componentDidCatch(error: any, errorInfo: any) {
    console.warn("WebGL Context Error caught by boundary:", error);
  }
  render() {
    if (this.state.hasError) return this.props.fallback;
    return this.props.children;
  }
}

const Scene: React.FC = () => {
  const [isSupported, setIsSupported] = useState(true);

  useEffect(() => {
    // Proactive check for WebGL support
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setIsSupported(false);
      }
    } catch (e) {
      setIsSupported(false);
    }
  }, []);

  if (!isSupported) {
    return <FallbackDisplay message="[GRAPHICS_MODULE_OFFLINE]" />;
  }

  return (
    <WebGLErrorBoundary fallback={<FallbackDisplay message="[RENDER_SYS_FAILURE]" />}>
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }} className="w-full h-full">
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[0, 0, 2]} intensity={2} color="#ec4899" distance={10} />
        <VoxelGroup />
      </Canvas>
    </WebGLErrorBoundary>
  );
};

export default Scene;