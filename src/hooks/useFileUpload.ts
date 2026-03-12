import { useState, useCallback, useRef, type DragEvent, type ChangeEvent } from "react";
import { validatePdfFile } from "@/utils/file";

interface UseFileUploadOptions {
  onFileAccepted: (files: File | File[]) => void;
  multiple?: boolean;
}

interface UseFileUploadReturn {
  isDragging: boolean;
  error: string | null;
  inputRef: React.RefObject<HTMLInputElement | null>;
  dragHandlers: {
    onDragEnter: (e: DragEvent) => void;
    onDragLeave: (e: DragEvent) => void;
    onDragOver: (e: DragEvent) => void;
    onDrop: (e: DragEvent) => void;
  };
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  openFilePicker: () => void;
  clearError: () => void;
}

export function useFileUpload({
  onFileAccepted,
  multiple = false,
}: UseFileUploadOptions): UseFileUploadReturn {
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const dragCounter = useRef(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const processFiles = useCallback(
    (fileList: FileList) => {
      setError(null);
      const files = Array.from(fileList);

      if (!multiple && files.length > 1) {
        setError("Please upload only one file");
        return;
      }

      for (const file of files) {
        const result = validatePdfFile(file);
        if (!result.valid) {
          setError(result.error);
          return;
        }
      }

      onFileAccepted(multiple ? files : files[0]!);
    },
    [onFileAccepted, multiple],
  );

  const handleDragEnter = useCallback((e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dragCounter.current += 1;
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dragCounter.current -= 1;
    if (dragCounter.current === 0) {
      setIsDragging(false);
    }
  }, []);

  const handleDragOver = useCallback((e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDrop = useCallback(
    (e: DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      dragCounter.current = 0;
      setIsDragging(false);
      processFiles(e.dataTransfer.files);
    },
    [processFiles],
  );

  const handleInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        processFiles(e.target.files);
      }
      if (inputRef.current) {
        inputRef.current.value = "";
      }
    },
    [processFiles],
  );

  const openFilePicker = useCallback(() => {
    inputRef.current?.click();
  }, []);

  return {
    isDragging,
    error,
    inputRef,
    dragHandlers: {
      onDragEnter: handleDragEnter,
      onDragLeave: handleDragLeave,
      onDragOver: handleDragOver,
      onDrop: handleDrop,
    },
    handleInputChange,
    openFilePicker,
    clearError: () => setError(null),
  };
}
