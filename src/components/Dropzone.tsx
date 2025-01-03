import React, { useMemo, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { AppMainColor } from "../Static";

const baseStyle: React.CSSProperties = {
  flex: 1,
  display: "flex",
  flexDirection: "column" as const,
  alignItems: "center",
  padding: "20px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#eeeeee",
  borderStyle: "dashed",
  backgroundColor: "white",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out",
  cursor: "pointer",
};

const focusedStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};
interface FileInputProps {
    acceptedFileTypes: string;
    bottomInfo: string;
    fileListExternal: File[];
    uploadFile: (files: File[]) => void;
    removeFileExternal: (file: File) => void;
}
function FileInput({acceptedFileTypes, bottomInfo,fileListExternal,uploadFile,removeFileExternal}:FileInputProps) {

  const onDrop = useCallback((acceptedFiles: File[]) => {
    uploadFile(acceptedFiles);
  }, [uploadFile]);

  const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } =
    useDropzone({
      accept: { [acceptedFileTypes]: [] },
      maxFiles: 5,
      onDrop,
    });

  const removeFile = (fileToRemove: File) => {
    removeFileExternal(fileToRemove);
  };

  

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject]
  );

  return (
    <div className="container">
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <p>Drag files here or click in this area.</p>
        <p>Max. 5 files</p>
      </div>
      <div className="w-full flex flex-col items-start justify-center mt-1">
        <span className="text-sm text-gray-500 text-[11px] sm:text-[12px]">
          {bottomInfo}
        </span>
      </div>
      <aside>
        <ul>{fileListExternal.map((file) => (
          <li
          key={file.name}
          className="flex items-center mb-2 p-2 bg-gray-100 rounded 
                     opacity-100 transform transition-all duration-300 ease-in-out
                     animate-fade-in"
        >
          <span className="flex-1">{file.name}</span>
          <button
            onClick={() => removeFile(file)}
            style={{
              backgroundColor: AppMainColor,
            }}
            className={`ml-2.5 px-2 py-1 text-white rounded
                       transition-transform duration-200 ease-in-out
                       hover:scale-110 active:scale-95`}
          >
            ✕
          </button>
        </li>
        ))}</ul>
      </aside>
    </div>
  );
}

export default FileInput;
