type SkillChipProps = {
  label: string;
};

export default function SkillChipLight({ label }: SkillChipProps) {
  return (
    <span className="relative inline-block group shrink-0 font-sans">
      {/* SHADOW LAYER - Solid Black */}
      <span className="absolute inset-0 bg-black translate-x-[3px] translate-y-[3px] group-hover:translate-x-[1px] group-hover:translate-y-[1px] transition-all duration-75" />
      
      {/* MAIN CHIP */}
      <span className="relative z-10 block border-2 border-black bg-white px-3 py-1 text-[10px] md:text-xs font-black uppercase tracking-widest text-black group-hover:bg-violet-600 group-hover:text-white transition-all duration-75 cursor-default">
        {label}
      </span>
    </span>
  );
}