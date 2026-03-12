import { Upload } from "lucide-react";
import { useFileUpload } from "@/hooks/useFileUpload";
import { ACCEPTED_EXTENSIONS, MAX_FILE_SIZE_MB } from "@/utils/constants";

interface DropZoneProps {
  onFileAccepted: (file: File | File[]) => void;
  multiple?: boolean;
}

export default function DropZone({ onFileAccepted, multiple = false }: DropZoneProps) {
  const {
    isDragging,
    error,
    inputRef,
    dragHandlers,
    handleInputChange,
    openFilePicker,
    clearError,
  } = useFileUpload({ onFileAccepted, multiple });

  return (
    <div className="w-full max-w-lg mx-auto">
      <div
        {...dragHandlers}
        onClick={openFilePicker}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && openFilePicker()}
        className={`
          group relative flex flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed p-10
          cursor-pointer transition-all duration-200
          ${
            isDragging
              ? "border-red-400 bg-red-50 dark:border-red-500 dark:bg-red-500/10"
              : "border-gray-300 bg-gray-50 hover:border-gray-400 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-900 dark:hover:border-gray-600 dark:hover:bg-gray-800/50"
          }
        `}
      >
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-xl transition-colors ${
            isDragging
              ? "bg-red-100 text-red-500 dark:bg-red-500/20 dark:text-red-400"
              : "bg-gray-200 text-gray-500 group-hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-400 dark:group-hover:bg-gray-700"
          }`}
        >
          <Upload size={24} />
        </div>

        <div className="text-center">
          <p className="text-sm font-medium text-gray-700 dark:text-gray-200">
            {isDragging ? "Drop your file here" : "Drop your PDF here, or"}{" "}
            {!isDragging && <span className="text-red-500 dark:text-red-400">browse</span>}
          </p>
          <p className="mt-1 text-xs text-gray-500 dark:text-gray-500">
            PDF files up to {MAX_FILE_SIZE_MB}MB
          </p>
        </div>

        <input
          ref={inputRef}
          type="file"
          accept={ACCEPTED_EXTENSIONS.join(",")}
          multiple={multiple}
          onChange={handleInputChange}
          className="hidden"
        />
      </div>

      {error && (
        <div className="mt-3 flex items-center gap-2 rounded-lg bg-red-50 border border-red-200 px-3 py-2 text-xs text-red-600 dark:bg-red-500/10 dark:border-red-500/20 dark:text-red-400">
          <span>{error}</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              clearError();
            }}
            className="ml-auto opacity-60 hover:opacity-100"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
}
