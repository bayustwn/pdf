import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import DropZone from "@/components/ui/DropZone";
import Badge from "@/components/ui/Badge";

const TOOLS = [
  { label: "Edit Text", color: "bg-blue-500" },
  { label: "Add Images", color: "bg-emerald-500" },
  { label: "Draw & Sign", color: "bg-violet-500" },
  { label: "Annotate", color: "bg-amber-500" },
  { label: "Manage Pages", color: "bg-rose-500" },
  { label: "Secure", color: "bg-cyan-500" },
];

export default function HomePage() {
  const navigate = useNavigate();

  const handleFileAccepted = useCallback(
    (file: File | File[]) => {
      const pdfFile = Array.isArray(file) ? file[0]! : file;
      const url = URL.createObjectURL(pdfFile);
      navigate("/editor", { state: { fileUrl: url, fileName: pdfFile.name } });
    },
    [navigate],
  );

  return (
    <div className="flex flex-col items-center">
      <section className="w-full max-w-2xl mx-auto px-4 pt-20 pb-10 text-center sm:px-6">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight">
          Edit PDF files online
        </h1>
        <p className="mt-3 text-gray-500 dark:text-gray-400 text-base max-w-md mx-auto">
          Free, private, and runs entirely in your browser. No upload to any server.
        </p>
      </section>

      <section className="w-full px-4 pb-12 sm:px-6">
        <DropZone onFileAccepted={handleFileAccepted} />
      </section>

      <section className="w-full max-w-lg mx-auto px-4 pb-20 sm:px-6">
        <div className="flex flex-wrap justify-center gap-2">
          {TOOLS.map((tool) => (
            <Badge key={tool.label} label={tool.label} color={tool.color} />
          ))}
        </div>
      </section>

      <footer className="w-full border-t border-gray-200 py-6 text-center dark:border-gray-800">
        <p className="text-xs text-gray-400 dark:text-gray-600">
          myPDF &mdash; Files stay on your device
        </p>
      </footer>
    </div>
  );
}
