import React from "react";

interface TextHeaderProps {
  children: string;
}

const TextHeader: React.FC<TextHeaderProps> = ({ children }) => {
  return (
    <p className="text-9xl font-NOTO font-extrabold text-center py-2 text-white mobile:text-4xl">
      {children}
    </p>
  );
};

export default TextHeader;
