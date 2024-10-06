import React from 'react';
import { Mesh } from 'three';

const EditorPlane: React.FC<{ position: [number, number, number] }> = ({ position }) => {
  return (
    <mesh position={position}>
      <planeGeometry args={[4, 3]} />
      <meshStandardMaterial color="white" />
    </mesh>
  );
};

export default EditorPlane;

