import { fileMeta, type SectionId } from "@/lib/fileMeta";

export default function StatusBar({ activeTab }: { activeTab: SectionId | null }) {
  const lang = activeTab ? fileMeta[activeTab].lang : "";
  return (
    <div className="flex items-center justify-between bg-vsc-blue px-3.5 text-[11.5px] text-white">
      <div className="flex gap-3.5">
        <span>⎇ main</span>
        <span>↑1 ↓3</span>
      </div>
      <div className="flex gap-3.5">
        <button className="text-white">⌨ Terminal</button>
        <span>{lang}</span>
        <span>UTF-8</span>
        <span>Prettier</span>
      </div>
    </div>
  );
}
