import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei'; // カメラの操作をサポートするコンポーネント
import Classroom from './Classroom'; // 教室のコンポーネントをインポート
import TeacherRobot from './TeacherRobot';
// それぞれの環境設定を行う 
const CanvasComponent: React.FC = () => {
  return (
    <Canvas>
      {/* 環境光を追加 */}
      <ambientLight intensity={0.5} />
      {/* 指向性光を追加 */}
      <directionalLight position={[0, 10, 5]} intensity={1.5} />
      {/* 教室コンポーネントを描画 */}
      <Classroom />
      <TeacherRobot position={[0, 0, 0]} />
      {/* カメラ操作のためのOrbitControls */}
      <OrbitControls />
    </Canvas>
  );
};

export default CanvasComponent;
