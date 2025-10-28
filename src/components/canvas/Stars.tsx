import { useState, useRef, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import { random } from "maath";
import { TypedArray } from "three";
import * as THREE from "three";

const Stars = (props: any) => {
  const ref = useRef<THREE.Points>();
  const [sphere] = useState<TypedArray>(() =>
    random.inSphere(new Float32Array(5001), { radius: 1.2 })
  );

  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  const [loaded, setLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const mobile =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        ) || window.innerWidth < 768;
      setIsMobile(mobile);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // 🧩 On mobile, just show static gradient instead of 3D stars
  if (isMobile) {
    return (
      <div
        className="absolute inset-0 z-[-1] w-full h-full"
        style={{
          background:
            "radial-gradient(circle at center, #2b1d52 0%, #120a2e 100%)",
        }}
      />
    );
  }

  return (
    <div className="absolute inset-0 z-[-1] h-auto w-full pointer-events-none">
      {!loaded && (
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgb(21 16 48 / 1)" }}
        />
      )}

      <Canvas
        camera={{ position: [0, 0, 1] }}
        dpr={[1, 1.5]} // reduces GPU load
        gl={{ antialias: true, powerPreference: "low-power" }}
        onCreated={() => setLoaded(true)}
      >
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
