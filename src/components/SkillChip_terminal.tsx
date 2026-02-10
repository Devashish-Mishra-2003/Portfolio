type SkillChipProps = {
  label: string;
};

export default function SkillChipTerminal({ label }: SkillChipProps) {
  return (
    <span className="relative inline-block group shrink-0 font-mono">
      {/* GLOW LAYER */}
      <span className="absolute inset-0 bg-green-500/10 translate-x-[2px] translate-y-[2px] group-hover:bg-green-500/20 transition-all duration-75" />
      
      {/* MAIN CHIP */}
      <span className="relative z-10 block border border-green-500/30 bg-black px-3 py-1 text-[10px] md:text-xs font-bold uppercase tracking-wider text-green-500/80 group-hover:text-green-400 group-hover:border-green-400 transition-all duration-75 cursor-default">
        {label}
      </span>
    </span>
  );
}