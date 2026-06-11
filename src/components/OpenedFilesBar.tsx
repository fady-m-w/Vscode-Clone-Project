import { useSelector } from "react-redux";
import type { RootState } from "../app/store";
import OpenedFilesBarTab from "./OpenedFilesBarTab";
import FileSyntaxHighlighter from "./FileSyntaxHighlighter";

// interface Iprops {}

const OpenedFilesBar = () => {
  const { openedFiles, clickedFile } = useSelector(
    (state: RootState) => state.Tree,
  );
  return (
    <div>
      <div className="flex items-center border-b border-b-[#ffffff1f]">
        {openedFiles.map((file) => (
          <OpenedFilesBarTab key={file.id} file={file} />
        ))}
      </div>
      <FileSyntaxHighlighter content={clickedFile.filecontent} />
    </div>
  );
};

export default OpenedFilesBar;
