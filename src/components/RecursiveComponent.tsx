import type { IFile } from "../interfaces";
import FileIcon from "./SVG/File";
import RightArrowIcon from "./SVG/RightArrow";

interface Iprops {
  fileTree: IFile;
}

const RecursiveComponent = ({ fileTree }: Iprops) => {
  return (
    <div className="mb-2 ml-2 cursor-pointer">
      <div className="flex items-center mb-1">
        <RightArrowIcon />
        <span className="mr-2">
          <FileIcon />
        </span>
        <span>{fileTree.name}</span>
      </div>

      {fileTree.children &&
        fileTree.children.map((file, idx) => (
          <RecursiveComponent fileTree={file} key={idx} />
        ))}
    </div>
  );
};

export default RecursiveComponent;
