import type { FileMetaEntry } from "@/lib/fileMeta";

export default function SectionPlaceholder({ meta }: { meta: FileMetaEntry }) {
  return (
    <div className="text-vsc-muted">
      <div className="mb-6 text-sm" style={{ color: "var(--vsc-comment)" }}>
        {"// " + meta.name + " — content coming in step 2"}
      </div>
      <h2 className="text-vsc-white text-2xl font-extrabold">{meta.name}</h2>
    </div>
  );
}
