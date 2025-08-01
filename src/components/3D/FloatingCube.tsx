import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';
import { useTheme } from '@/contexts/ThemeContext';

const FloatingCube = () => {
  const meshRef = useRef<Mesh>(null);
  const { theme } = useTheme();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.5;
      meshRef.current.rotation.y += delta * 0.3;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.3;
    }
  });

  const color = theme === 'dark' ? '#a855f7' : '#8b5cf6';

  return (
    <mesh ref={meshRef} scale={1.5}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        color={color}
        metalness={0.7}
        roughness={0.2}
        transparent
        opacity={0.8}
      />
      <mesh scale={1.01}>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.1}
          wireframe
        />
      </mesh>
    </mesh>
  );
};

export default FloatingCube;