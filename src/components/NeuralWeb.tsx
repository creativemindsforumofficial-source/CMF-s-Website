import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

export default function NeuralWeb() {
  const ref = useRef<THREE.Points>(null);
  
  // Generate particles resembling a neural web / phoenix embers
  const { positions, colorValues } = useMemo(() => {
    const count = 1500;
    const positions = new Float32Array(count * 3);
    const colorValues = new Float32Array(count * 3);
    
    // Phoenix accent colors: Gold/Amber (#FFCC00) and lighter yellow
    const colorA = new THREE.Color('#FFCC00');
    const colorB = new THREE.Color('#FFE066');
    const colorTemp = new THREE.Color();

    for (let i = 0; i < count; i++) {
      // Sphere distribution
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(Math.random() * 2 - 1);
      const r = 8 + Math.random() * 4;
      
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);

      // Random color gradient mix
      colorTemp.lerpColors(colorA, colorB, Math.random());
      colorValues[i * 3] = colorTemp.r;
      colorValues[i * 3 + 1] = colorTemp.g;
      colorValues[i * 3 + 2] = colorTemp.b;
    }
    return { positions, colorValues };
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta * 0.05;
      ref.current.rotation.y -= delta * 0.075;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 8]}>
      <Points ref={ref} positions={positions} colors={colorValues} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          vertexColors
          size={0.06}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          opacity={0.8}
        />
      </Points>
    </group>
  );
}
