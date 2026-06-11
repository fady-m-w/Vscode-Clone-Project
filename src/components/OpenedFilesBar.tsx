import { useSelector } from "react-redux";
import type { RootState } from "../app/store";
import OpenedFilesBarTab from "./OpenedFilesBarTab";

// interface Iprops {}

const OpenedFilesBar = () => {
  const { openedFiles, clickedFile } = useSelector(
    (state: RootState) => state.Tree,
  );
  return (
    <div>
      <div className="flex items-center">
        {openedFiles.map((file) => (
          <OpenedFilesBarTab key={file.id} file={file} />
        ))}
      </div>
      {clickedFile.filecontent}
    </div>
  );
};

export default OpenedFilesBar;
