import { ACCEPTED_FILE_TYPES, MAX_FILE_SIZE_BYTES, MAX_FILE_SIZE_MB } from "./constants";

interface ValidationResult {
  valid: boolean;
  error: string | null;
}

export function validatePdfFile(file: File): ValidationResult {
  if (!file) {
    return { valid: false, error: "No file selected" };
  }

  if (!ACCEPTED_FILE_TYPES.includes(file.type)) {
    return { valid: false, error: "Only PDF files are accepted" };
  }

  if (file.size > MAX_FILE_SIZE_BYTES) {
    return { valid: false, error: `File size exceeds ${MAX_FILE_SIZE_MB}MB limit` };
  }

  return { valid: true, error: null };
}

export function formatFileSize(bytes: number): string {
  if (bytes === 0) return "0 B";
  const units = ["B", "KB", "MB", "GB"];
  const index = Math.floor(Math.log(bytes) / Math.log(1024));
  const size = (bytes / Math.pow(1024, index)).toFixed(1);
  return `${size} ${units[index]}`;
}
