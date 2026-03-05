import React, { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  PresentationControls,
  Environment,
  ContactShadows,
  Stars,
} from "@react-three/drei";
import {
  EffectComposer,
  Bloom,
  ChromaticAberration,
} from "@react-three/postprocessing";
import { useTheme } from "../../hooks/useTheme";
import * as THREE from "three";

const MATRIX = [
  [0, 0, 1, 0, 0],
  [0, 1, 1, 1, 0],
  [1, 1, 0, 1, 1],
  [1, 1, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [0, 1, 0, 1, 0],
];

const InteractiveVoxel: React.FC<{
  position: [number, number, number];
  color: string;
  isRandomlySpinning?: boolean;
}> = ({ position, color, isRandomlySpinning = false }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [isHoverSpinning, setIsHoverSpinning] = useState(false);
  const rotationVelocity = useRef(0);

  const isSpinning = isHoverSpinning || isRandomlySpinning;

  useFrame((_, delta) => {
    if (meshRef.current) {
      if (isSpinning) {
        rotationVelocity.current = Math.min(
          rotationVelocity.current + delta * 20,
          25,
        );
      } else {
        rotationVelocity.current = Math.max(
          rotationVelocity.current - delta * 15,
          0,
        );
      }

      if (rotationVelocity.current > 0) {
        meshRef.current.rotation.x += rotationVelocity.current * delta;
        meshRef.current.rotation.y += rotationVelocity.current * delta;
      } else if (!isSpinning) {
        meshRef.current.rotation.x = THREE.MathUtils.lerp(
          meshRef.current.rotation.x,
          0,
          0.1,
        );
        meshRef.current.rotation.y = THREE.MathUtils.lerp(
          meshRef.current.rotation.y,
          0,
          0.1,
        );
      }
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      onClick={(e) => {
        e.stopPropagation();
        setIsHoverSpinning(true);
        setTimeout(() => setIsHoverSpinning(false), 500);
      }}
      onPointerOver={(e) => {
        e.stopPropagation();
        document.body.style.cursor = "pointer";
      }}
      onPointerOut={() => {
        document.body.style.cursor = "grab";
      }}
    >
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshPhysicalMaterial
        color={color}
        roughness={0.15}
        metalness={0.7}
        clearcoat={1}
        clearcoatRoughness={0.1}
        iridescence={1}
        iridescenceIOR={1.5}
        iridescenceThicknessRange={[100, 400]}
      />
    </mesh>
  );
};

const VoxelGroup: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  const { theme } = useTheme();

  // Voxel Logic
  const voxels = useMemo(() => {
    const coords: { x: number; y: number; z: number; color: string }[] = [];
    const offsetX = -1.25;
    const offsetY = 1.5;

    const c1 = new THREE.Color(theme === "light" ? "#6b21a8" : "#2e1065");
    const c2 = new THREE.Color(theme === "light" ? "#d946ef" : "#e879f9");

    MATRIX.forEach((row, y) => {
      row.forEach((val, x) => {
        if (val === 1) {
          const yPos = -(y * 0.55) + offsetY;
          const t = Math.max(0, Math.min(1, (yPos + 1.25) / 2.75));
          const color = c1.clone().lerp(c2, t).getStyle();

          coords.push({
            x: x * 0.55 + offsetX,
            y: yPos,
            z: 0,
            color,
          });
        }
      });
    });
    return coords;
  }, [theme]);

  // Floating debris logic
  // Using generic type for debris items
  type DebrisItem = {
    position: [number, number, number];
    speed: number;
    yOffset: number;
  };
  const [debris, setDebris] = useState<DebrisItem[]>([]);

  useEffect(() => {
    const newDebris = Array.from({ length: 6 }).map(() => ({
      position: [
        Math.random() * 6 - 3,
        Math.random() * 6 - 3,
        Math.random() * 2 - 1,
      ] as [number, number, number],
      speed: Math.random() * 0.02,
      yOffset: Math.random() * 100,
    }));
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDebris(newDebris);
  }, []);

  useFrame(({ clock, pointer }) => {
    if (groupRef.current) {
      const time = clock.getElapsedTime();

      // Floating animation
      groupRef.current.position.y = Math.sin(time * 0.3) * 0.05;

      // Mouse interaction
      const { x, y } = pointer;
      groupRef.current.rotation.y +=
        (x * 0.5 - groupRef.current.rotation.y) * 0.05;
      groupRef.current.rotation.x +=
        (-y * 0.5 - groupRef.current.rotation.x) * 0.05;
      groupRef.current.rotation.z = Math.sin(time * 0.2) * 0.05;
    }
  });

  // Random spinning logic
  const [spinningVoxelIndex, setSpinningVoxelIndex] = useState<number | null>(
    null,
  );

  useEffect(() => {
    if (voxels.length === 0) return;

    let timeoutId: ReturnType<typeof setTimeout>;

    const triggerRandomSpin = () => {
      // Pick a random voxel
      const randomIndex = Math.floor(Math.random() * voxels.length);
      setSpinningVoxelIndex(randomIndex);

      // Stop spinning after 500ms (same duration as click)
      setTimeout(() => {
        setSpinningVoxelIndex(null);
      }, 500);

      // Schedule next spin between 10s and 20s
      const nextDelay = 10000 + Math.random() * 10000;
      timeoutId = setTimeout(triggerRandomSpin, nextDelay);
    };

    // Initial trigger
    const initialDelay = 10000 + Math.random() * 10000;
    timeoutId = setTimeout(triggerRandomSpin, initialDelay);

    return () => clearTimeout(timeoutId);
  }, [voxels.length]);

  return (
    <group ref={groupRef} scale={0.65}>
      {voxels.map((pos, i) => (
        <InteractiveVoxel
          key={`voxel-${i}`}
          position={[pos.x, pos.y, pos.z]}
          color={pos.color}
          isRandomlySpinning={spinningVoxelIndex === i}
        />
      ))}

      {debris.map((d, i) => {
        const t = Math.max(0, Math.min(1, (d.position[1] + 3) / 6));
        const c1 = new THREE.Color(theme === "light" ? "#6b21a8" : "#2e1065");
        const c2 = new THREE.Color(theme === "light" ? "#d946ef" : "#e879f9");
        const dColor = c1.lerp(c2, t).getStyle();

        return (
          <Debris
            key={`debris-${i}`}
            initialPos={d.position}
            yOffset={d.yOffset}
            color={dColor}
          />
        );
      })}
    </group>
  );
};

const Debris: React.FC<{
  initialPos: [number, number, number];
  yOffset: number;
  color: string;
}> = ({ initialPos, yOffset, color }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [isAccelerated, setIsAccelerated] = useState(false);

  useFrame(({ clock }, delta) => {
    if (meshRef.current) {
      const time = clock.getElapsedTime();
      meshRef.current.position.y =
        initialPos[1] + Math.sin(time + yOffset) * 0.05;

      if (isAccelerated) {
        meshRef.current.rotation.x += 10 * delta;
        meshRef.current.rotation.y += 10 * delta;
      } else {
        meshRef.current.rotation.x += 0.02;
      }
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={initialPos}
      onClick={(e) => {
        e.stopPropagation();
        setIsAccelerated(true);
        setTimeout(() => setIsAccelerated(false), 500);
      }}
      onPointerOver={(e) => {
        e.stopPropagation();
        document.body.style.cursor = "pointer";
      }}
      onPointerOut={() => {
        document.body.style.cursor = "grab";
      }}
    >
      <octahedronGeometry args={[0.2, 0]} />
      <meshPhysicalMaterial
        color={color}
        roughness={0.1}
        metalness={0.8}
        emissive={color}
        emissiveIntensity={2.0}
        iridescence={1}
        iridescenceIOR={1.5}
      />
    </mesh>
  );
};

// Fallback UI for when WebGL is unavailable or crashes
const FallbackDisplay = ({ message }: { message: string }) => (
  <div className="w-full h-full flex items-center justify-center bg-accent/5 border-2 border-dashed border-accent/20 rounded-lg">
    <div className="text-center p-4">
      <div className="text-2xl mb-2 text-accent">⚠️</div>
      <span className="font-mono text-xs text-accent">{message}</span>
    </div>
  </div>
);

// Error Boundary to catch Canvas crashes
interface ErrorBoundaryProps {
  fallback: React.ReactNode;
  children: React.ReactNode;
}
interface ErrorBoundaryState {
  hasError: boolean;
}

class WebGLErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(_error: unknown) {
    return { hasError: true };
  }
  componentDidCatch(error: unknown, errorInfo: React.ErrorInfo) {
    console.warn("WebGL Context Error caught by boundary:", error, errorInfo);
  }
  render() {
    if (this.state.hasError) return this.props.fallback;
    return this.props.children;
  }
}

const Scene: React.FC = () => {
  // Use lazy state initialization for feature detection
  const [isSupported] = useState(() => {
    try {
      const canvas = document.createElement("canvas");
      return !!(
        canvas.getContext("webgl") || canvas.getContext("experimental-webgl")
      );
    } catch (_e) {
      return false;
    }
  });

  const [sceneX, setSceneX] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updatePosition = () => {
      setSceneX(window.innerWidth >= 768 ? 4 : 0);
      setIsMobile(window.innerWidth < 768);
    };
    updatePosition();
    window.addEventListener("resize", updatePosition);
    return () => window.removeEventListener("resize", updatePosition);
  }, []);

  if (!isSupported) {
    return <FallbackDisplay message="[GRAPHICS_MODULE_OFFLINE]" />;
  }

  if (isMobile) {
    return null;
  }

  return (
    <WebGLErrorBoundary
      fallback={<FallbackDisplay message="[RENDER_SYS_FAILURE]" />}
    >
      <Canvas
        camera={{ position: [0, 0, 11], fov: 45 }}
        className="w-full h-full cursor-grab active:cursor-grabbing"
        dpr={[1, 2]}
        gl={{ powerPreference: "high-performance", antialias: false }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 10, 5]} intensity={1.5} />
        <pointLight
          position={[-10, -10, -10]}
          intensity={1}
          color="#ec4899"
          distance={20}
        />

        <Environment preset="city" />

        <group position={[sceneX, 0, 0]}>
          <PresentationControls
            global
            rotation={[0, 0, 0]}
            polar={[-Math.PI / 3, Math.PI / 3]}
            azimuth={[-Math.PI / 1.4, Math.PI / 2]}
          >
            <Float
              speed={1}
              rotationIntensity={0.5}
              floatIntensity={0.5}
              floatingRange={[-0.05, 0.05]}
            >
              <VoxelGroup />
            </Float>
          </PresentationControls>

          <ContactShadows
            position={[0, -3.5, 0]}
            opacity={0.4}
            scale={20}
            blur={2}
            far={4.5}
            resolution={256}
            frames={1}
          />
        </group>

        <Stars
          radius={50}
          depth={50}
          count={1000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />

        <EffectComposer>
          <Bloom
            luminanceThreshold={0.5}
            luminanceSmoothing={0.9}
            intensity={0.4}
          />
          <ChromaticAberration offset={new THREE.Vector2(0.001, 0.001)} />
        </EffectComposer>
      </Canvas>
    </WebGLErrorBoundary>
  );
};

export default Scene;
