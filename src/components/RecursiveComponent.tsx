import { useState } from "react";
import type { IFile } from "../interfaces";
import RightArrow from "./SVG/RightArrow";
import BottomArrow from "./SVG/BottomArrow";
import RenderFileIcon from "./RenderFileIcon";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTabId, setOpenedFiles } from "../app/features/fileTreeSlice";
import type { RootState } from "../app/store";
import { doesFileObjExist } from "../utils/functions";

interface Iprops {
  fileTree: IFile;
}

const RecursiveComponent = ({ fileTree }: Iprops) => {
  const { id, isFolder, name, children } = fileTree;
  const dispatch = useDispatch();
  const { openedFiles } = useSelector((state: RootState) => state.Tree);

  // ** STATES
  const [isOpen, setIsOpen] = useState(true);

  // ** HANDLERS
  const toggle = () => setIsOpen((prev) => !prev);
  const onFileClicked = () => {
    const exists = doesFileObjExist(openedFiles, id);
    if (exists) return;
    dispatch(setOpenedFiles([...openedFiles, fileTree]));
    dispatch(setActiveTabId(id));
  };

  return (
    <div className="mb-2 ml-2 cursor-pointer">
      <div onClick={toggle} className="flex items-center mb-1 select-none">
        {isFolder ? (
          <div className="flex items-center">
            <span className="mr-1">
              {isOpen ? <BottomArrow /> : <RightArrow />}
            </span>

            <RenderFileIcon
              filename={name}
              isFolder={isFolder}
              isOpen={isOpen}
            />
            <span className="ml-1">{name}</span>
          </div>
        ) : (
          <div className="flex items-center ml-2" onClick={onFileClicked}>
            <RenderFileIcon filename={name} />
            <span className="ml-2">{name}</span>
          </div>
        )}
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
