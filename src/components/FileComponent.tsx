import FileIcon from "./SVG/File";

interface Iprops {
  filename: string;
}

const FileComponent = ({ filename }: Iprops) => {
  return (
    <div className="flex items-center">
      <span className="mr-2">
        <FileIcon />
      </span>
      <span>{filename}</span>
    </div>
  );
};

export default FileComponent;
