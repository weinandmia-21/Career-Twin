type UploadDropzoneProps = {
  onClick: () => void;
  onDrop: (file: File) => void;
  inputRef: React.RefObject<HTMLInputElement | null>;
};

export default function UploadDropzone({
  onClick,
  onDrop,
  inputRef,
}: UploadDropzoneProps) {
  return (
    <div
      onClick={onClick}
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => {
        e.preventDefault();

        const file = e.dataTransfer.files[0];

        if (file) {
          onDrop(file);
        }
      }}
      className="cursor-pointer rounded-3xl border-2 border-dashed border-cyan-400/40 bg-slate-900/70 p-20 text-center transition hover:border-cyan-400 hover:bg-slate-900"
    >
      <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-cyan-400/10 text-5xl">
        ⬆
      </div>

      <h2 className="text-4xl font-bold text-white">
        Upload Your Resume
      </h2>

      <p className="mt-5 text-lg text-slate-400">
        Drag & drop your resume or click to browse.
      </p>

      <p className="mt-3 text-slate-500">
        PDF
      </p>

      <input
        ref={inputRef}
        type="file"
        accept=".pdf"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];

          if (file) {
            onDrop(file);
          }
        }}
      />
    </div>
  );
}