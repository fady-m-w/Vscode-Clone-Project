import { useDispatch, useSelector } from "react-redux";
import type { IFile } from "../interfaces";
import RenderFileIcon from "./RenderFileIcon";
import CloseIcon from "./SVG/CloseIcon";
import { setClickedFile, setOpenedFiles } from "../app/features/fileTreeSlice";
import type { RootState } from "../app/store";

interface Iprops {
  file: IFile;
}

const OpenedFilesBarTab = ({ file }: Iprops) => {
  const dispatch = useDispatch();
  const {
    openedFiles,
    clickedFile: { activeTabId },
  } = useSelector((state: RootState) => state.Tree);

  // ** HANDLRES
  const onClick = () => {
    const { id, name, content } = file;
    dispatch(
      setClickedFile({ filename: name, filecontent: content, activeTabId: id }),
    );
  };

  const onRemove = (selectedId: string) => {
    const filtered = openedFiles.filter((file) => file.id !== selectedId);
    const lastTab = filtered[filtered.length - 1];

    if (!lastTab) {
      dispatch(setOpenedFiles([]));
      dispatch(
        setClickedFile({
          activeTabId: null,
          filecontent: "",
          filename: "",
        }),
      );
      return;
    }

    const { name, content, id } = lastTab;
    dispatch(setOpenedFiles(filtered));
    dispatch(
      setClickedFile({
        activeTabId: id,
        filecontent: content,
        filename: name,
      }),
    );
  };

  return (
    <div
      className={`max-w-3xl flex items-center p-2 border-t-4 ${
        file.id === activeTabId ? "border-[#cf6ccf]" : "border-transparent"
      }`}
      onClick={onClick}
    >
      <RenderFileIcon filename={file.name} />
      <span className="cursor-pointer duration-300 flex justify-center items-center w-fit mx-2 p-1 rounded-md">
        {file.name}
      </span>
      <span
        className="cursor-pointer hover:bg-[#64646473] duration-300 flex justify-center items-center w-fit mr-2 p-1 rounded-md"
        onClick={(e) => {
          e.stopPropagation();
          onRemove(file.id);
        }}
      >
        <CloseIcon />
      </span>
    </div>
  );
};

export default OpenedFilesBarTab;
