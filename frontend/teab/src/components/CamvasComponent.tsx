import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Classroom from './Classroom';
import TeacherRobot from './TeacherRobot'; 
import EditorPlane from './EditorPlane';
import EditorText from './EditorText'; 

const CanvasComponent: React.FC = () => {
  const editorContent = 'sibagaki'; // 編集テキスト

  return (
    <Canvas>
      {/* 環境光 */}
      <ambientLight intensity={0.5} />
      {/* 指向性光 */}
      <directionalLight position={[0, 10, 5]} intensity={1.5} />
      
      {/* 教室の描画 */}
      <Classroom editorContent={editorContent} />
      
      {/* 教師ロボットの描画 */}
      <TeacherRobot position={[0, 0, 0]} />
      
      {/* エディタ平面の追加 */}
      <EditorPlane position={[0, 0.5, -2]} /> {/* エディタの位置を調整 */}
      <EditorText text={editorContent} position={[0, 1, -2]} /> {/* テキストの位置を調整 */}
      
      {/* カメラ操作 */}
      <OrbitControls />
    </Canvas>
  );
};

export default CanvasComponent;

