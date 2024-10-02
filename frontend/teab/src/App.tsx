import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Box = () => {
  const meshRef = useRef<THREE.Mesh>(null); // THREE.Meshの型を指定

  // アニメーションを追加するためのフレームごとの処理
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01; // X軸の回転
      meshRef.current.rotation.y += 0.01; // Y軸の回転
    }
  });

  return (
    <mesh ref={meshRef}> {/* meshにrefを設定 */}
      <boxGeometry args={[1, 1, 1]} /> {/* ジオメトリの指定 */}
      <meshStandardMaterial color="orange" /> {/* マテリアルの指定 */}
    </mesh>
  );
};

const App = () => (
  <Canvas>
    <ambientLight intensity={0.5} />
    <directionalLight position={[0, 10, 5]} intensity={1.5} />
    <Box /> {/* Boxコンポーネントを追加 */}
  </Canvas>
);

export default App;


