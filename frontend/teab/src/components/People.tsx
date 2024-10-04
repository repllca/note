import React from 'react';
import { Mesh } from 'three';

// interfaceで必要な情報を書く
interface PeopleProps {
  position: [number, number, number];
}

const People: React.FC<PeopleProps> = ({ position }) => {
  return (
    <mesh position={position}>
      {/* 頭部 */}
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial color="peachpuff" />

      {/* 体 */}
      <mesh position={[0, -1, 0]}>
        <boxGeometry args={[1, 2, 0.5]} />
        <meshStandardMaterial color="lightblue" />
      </mesh>
    </mesh>
  );
};

export default People;
