import { upload } from "./endpoints";

interface UploadResponse {
  message: string;
  files: {
    cancelletionFile?: Array<{
      filename: string;
      path: string;
      size: number;
      mimetype: string;
    }>;
    bookingFiles?: Array<{
      filename: string;
      path: string;
      size: number;
      mimetype: string;
    }>;
  };
}

export async function UploadFiles(
  cancelletionFile: File[],
  bookingFiles: File[]
): Promise<UploadResponse> {
  const formData = new FormData();

  cancelletionFile.forEach((file) => {
    formData.append("cancelletionFile", file);
  });

  bookingFiles.forEach((file) => {
    formData.append("bookingFiles", file);
  });

  try {
    const response = await fetch(upload, {
      method: "POST",
      headers: {},
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data as UploadResponse;
  } catch (error) {
    console.error("file upload error:", error);
    throw error;
  }
}
