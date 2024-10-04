import React from 'react';
import People from './People';

interface TeacherRobotProps {
  position: [number, number, number];
}

const TeacherRobot: React.FC<TeacherRobotProps> = ({ position }) => {
  return (
    <>
      <People position={position} />
      {/* 教師ロボット用の装飾やアイテム */}
      <mesh position={[position[0], position[1] + 1, position[2]]}>
        <boxGeometry args={[0.3, 0.3, 0.3]} />
        <meshStandardMaterial color="gray" />
      </mesh>
    </>
  );
};

export default TeacherRobot;
