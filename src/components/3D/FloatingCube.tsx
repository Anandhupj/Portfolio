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

  const color = theme === 'dark' ? '#22d3ee' : '#0ea5e9'; // cyan/light blue

  return (
    <mesh ref={meshRef} scale={1.5} >
      <boxGeometry args={[1, 1, 1]} />
      <ambientLight intensity={0.8} />
<pointLight position={[0, 1, 1]} intensity={2} />

      <meshStandardMaterial
        color={color}
        metalness={0.6}
        roughness={0.1}
       
        opacity={1}
      />
      <mesh scale={1.01}>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial
          color={color}
          opacity={0.1}
          wireframe
        />
      </mesh>
    </mesh>
  );
};

export default FloatingCube;