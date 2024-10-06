import React from 'react';
import { Text } from '@react-three/drei';

const EditorText: React.FC<{ text: string, position: [number, number, number] }> = ({ text, position }) => {
  return (
    <Text position={position} fontSize={0.2} color="black">
      {text}
    </Text>
  );
};

export default EditorText;

