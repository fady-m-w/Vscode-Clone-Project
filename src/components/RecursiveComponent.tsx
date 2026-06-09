import { useState } from "react";
import type { IFile } from "../interfaces";
import FileIcon from "./SVG/File";
import RightArrow from "./SVG/RightArrow";
import BottomArrow from "./SVG/BottomArrow";
import FolderIcon from "./SVG/Folder";

interface Iprops {
  fileTree: IFile;
}

const RecursiveComponent = ({
  fileTree: { isFolder, name, children },
}: Iprops) => {
  // ** STATES
  const [isOpen, setIsOpen] = useState(false);

  // ** HANDLERS
  const toggle = () => setIsOpen((prev) => !prev);

  return (
    <div className="mb-2 ml-2 cursor-pointer">
      <div onClick={toggle} className="flex items-center mb-1 select-none">
        {isFolder ? (
          <div className="flex items-center">
            {isOpen ? <BottomArrow /> : <RightArrow />}
            <FolderIcon />
          </div>
        ) : (
          <span className="mr-2">
            <FileIcon />
          </span>
        )}
        <span>{name}</span>
      </div>

      {children &&
        isOpen &&
        children.map((file, idx) => (
          <RecursiveComponent fileTree={file} key={idx} />
        ))}
    </div>
  );
};

export default RecursiveComponent;
