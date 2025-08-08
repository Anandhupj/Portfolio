import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Suspense } from 'react';
import FloatingCube from './FloatingCube';

interface Scene3DProps {
  children?: React.ReactNode;
  enableControls?: boolean;
}

const Scene3D: React.FC<Scene3DProps> = ({ children, enableControls = false }) => {
  return (
    <Canvas className="absolute inset-0">
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#3b82f6" />
      
      <Suspense fallback={null}>
        {children || <FloatingCube />}
      </Suspense>
      
      
      {enableControls && (
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      )}
    </Canvas>
  );
};

export default Scene3D;