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

const fileListContainerStyle: React.CSSProperties = {
  transition: 'all 0.3s ease-in-out',
  maxHeight: '300px',
  overflowY: 'auto',
  msOverflowStyle: 'none',
  scrollbarWidth: 'none',
};

const fileItemStyle = {
  animation: 'slideIn 0.3s ease-out forwards',
};

const keyframesStyle = `
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideOut {
    from {
      opacity: 1;
      transform: translateY(0);
      max-height: 50px;
    }
    to {
      opacity: 0;
      transform: translateY(-20px);
      max-height: 0;
      margin: 0;
      padding: 0;
    }
  }
`;

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
    const element = document.getElementById(`file-${fileToRemove.name}`);
    if (element) {
      element.style.animation = 'slideOut 0.3s ease-out forwards';
      setTimeout(() => {
        removeFileExternal(fileToRemove);
      }, 280);
    }
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
      <style>
        {keyframesStyle}
        {`
          .file-list-container::-webkit-scrollbar {
            display: none;
          }
          .file-list-container {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>
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
      <aside 
        className="file-list-container"
        style={fileListContainerStyle}
      >
        <ul className="space-y-2">
          {fileListExternal.map((file) => (
            <li
              id={`file-${file.name}`}
              key={file.name}
              style={fileItemStyle}
              className="flex items-center p-2 bg-gray-100 rounded 
                         hover:bg-gray-200 transition-all duration-200"
            >
              <span className="flex-1 truncate">{file.name}</span>
              <button
                onClick={() => removeFile(file)}
                style={{
                  backgroundColor: AppMainColor,
                }}
                className="ml-2.5 px-2 py-1 text-white rounded
                           transition-all duration-200 ease-in-out
                           hover:scale-110 active:scale-95
                           focus:outline-none focus:ring-2 focus:ring-offset-2"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}

export default FileInput;
