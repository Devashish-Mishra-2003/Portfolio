type SkillChipProps = {
  label: string;
};

export default function SkillChip({ label }: SkillChipProps) {
  return (
    <span className="relative inline-block group shrink-0">
      {/* SHADOW LAYER
          Reduced to 2px for a subtler Neo-Brutalist look 
      */}
      <span
        className="
          absolute inset-0 bg-white
          translate-x-[2px] translate-y-[2px]
          group-active:opacity-0
          transition-all duration-75
        "
      />
      
      {/* MAIN CHIP 
          Reduced px-3 and py-1 for a smaller, tighter width
      */}
      <span
        className="
          relative z-10 block
          border border-white bg-black
          px-3 py-1
          text-[10px] md:text-xs
          font-black uppercase tracking-widest text-white
          group-active:translate-x-[2px] group-active:translate-y-[2px]
          transition-all duration-75
          cursor-default
        "
      >
        {label}
      </span>
    </span>
  );
}