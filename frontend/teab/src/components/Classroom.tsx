import React from 'react';
import { Mesh } from 'three';

const Classroom: React.FC<{ editorContent: string }> = ({ editorContent }) => {
  const renderDesk = (position: [number, number, number]) => (
    <mesh position={position}>
      <boxGeometry args={[1.5, 0.1, 1]} />
      <meshStandardMaterial color="brown" />
    </mesh>
  );

  const renderChair = (position: [number, number, number]) => (
    <mesh position={position}>
      <boxGeometry args={[0.5, 0.1, 0.5]} />
      <meshStandardMaterial color="darkblue" />
    </mesh>
  );

  return (
    <>
      {/* 教室の床 */}
      <mesh position={[0, -0.1, 0]}>
        <boxGeometry args={[10, 0.1, 10]} />
        <meshStandardMaterial color="lightgray" />
      </mesh>

      {/* 机の配置 */}
      {renderDesk([-3, 0, -2])}
      {renderDesk([-3, 0, 0])}
      {renderDesk([-3, 0, 2])}
      {renderDesk([3, 0, -2])}
      {renderDesk([3, 0, 0])}
      {renderDesk([3, 0, 2])}

      {/* 椅子の配置 */}
      {renderChair([-3, 0, -2.5])}
      {renderChair([-3, 0, 0.5])}
      {renderChair([-3, 0, 2.5])}
      {renderChair([3, 0, -2.5])}
      {renderChair([3, 0, 0.5])}
      {renderChair([3, 0, 2.5])}

      {/* 教壇 */}
      <mesh position={[0, 0, 4]}>
        <boxGeometry args={[2, 0.5, 1]} />
        <meshStandardMaterial color="saddlebrown" />
      </mesh>

      {/* プロジェクター */}
      <mesh position={[0, 1, 4]}>
        <boxGeometry args={[0.5, 0.3, 0.5]} />
        <meshStandardMaterial color="black" />
      </mesh>
    </>
  );
};

export default Classroom;



