interface TextHeaderSmallProps {
  children: string;
}

const TextHeaerSmall: React.FC<TextHeaderSmallProps> = ({ children }) => {
  return (
    <p className="text-9xl font-NOTO font-medium text-center text-white">
      {children}
    </p>
  );
};

export default TextHeaerSmall;
