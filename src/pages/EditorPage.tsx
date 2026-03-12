import { useLocation, Navigate } from "react-router-dom";
import { FileText } from "lucide-react";

interface EditorLocationState {
  fileUrl: string;
  fileName: string;
}

export default function EditorPage() {
  const location = useLocation();
  const state = location.state as EditorLocationState | null;

  if (!state?.fileUrl) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="flex h-[calc(100vh-3.5rem)] items-center justify-center">
      <div className="text-center">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-gray-500 mb-3 dark:bg-gray-800 dark:text-gray-400">
          <FileText size={24} />
        </div>
        <h2 className="text-base font-medium">{state.fileName}</h2>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Loading editor...</p>
      </div>
    </div>
  );
}
