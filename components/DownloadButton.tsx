"use client";
import React from "react";
import H from "./H";
import { FaDownload } from "react-icons/fa6";

interface DownloadButtonProps {
  fileUrl: string;
  fileName: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({
  fileUrl,
  fileName,
}) => {
  const handleDownload = async () => {
    try {
      const response = await fetch(fileUrl);
      const blob = await response.blob();
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(link.href);
    } catch (error) {
      console.error("Download failed:", error);
      alert("Failed to download file.");
    }
  };

  return (
    <div className="mb-3">
      <H variant="assets">Assets</H>
      <button
        onClick={handleDownload}
        className="px-4 py-2 border rounded-md transition flex items-center gap-2"
      >
        Download {fileName.endsWith(".zip") ? "ZIP" : "GLB"}
        <FaDownload />
      </button>
    </div>
  );
};

export default DownloadButton;
