import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface Iprops {
  content?: string;
}

const FileSyntaxHighlighter = ({ content }: Iprops) => {
  return (
    <SyntaxHighlighter
      language="javascript"
      style={atomOneDark}
      customStyle={{
        backgroundColor: "transparent",
        width: "100%",
        maxHeight: "100vh",
        overflow: "auto",
        fontSize: "1.5rem",
      }}
      showLineNumbers
    >
      {String(content)}
    </SyntaxHighlighter>
  );
};

export default FileSyntaxHighlighter;
