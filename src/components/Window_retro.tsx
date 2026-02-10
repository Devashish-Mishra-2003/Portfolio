type WindowProps = {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  isActive: boolean;
  onFocus: () => void;
};

export default function WindowRetro({ 
  title, 
  children, 
  isOpen, 
  onClose, 
  isActive, 
  onFocus 
}: WindowProps) {
  if (!isOpen) return null;

  return (
    <div 
      onClick={onFocus}
      className={`
        absolute top-10 left-1/2 -translate-x-1/2 w-[95%] max-w-3xl 
        border-2 border-[#0050E6] bg-[#ECE9D8] rounded-t-lg overflow-hidden
        shadow-[4px_4px_20px_rgba(0,0,0,0.5)]
        ${isActive ? 'z-[500]' : 'z-[10]'}
      `}
    >
      {/* XP Title Bar */}
      <div className={`
        p-1.5 flex justify-between items-center px-3 select-none
        ${isActive 
          ? 'bg-gradient-to-r from-[#0058E6] via-[#3E88E5] to-[#0058E6]' 
          : 'bg-gradient-to-r from-[#7a96df] via-[#9eb1e9] to-[#7a96df]'}
      `}>
        <div className="flex items-center gap-2">
          {/* Decorative Window Icon */}
          <div className="w-4 h-4 bg-white/20 rounded-sm" />
          <span className="text-white font-bold text-xs tracking-wide drop-shadow-md">
            {title}
          </span>
        </div>
        
        {/* Control Buttons */}
        <div className="flex gap-1">
          <button className="w-5 h-5 bg-[#3E88E5] border border-white text-white text-xs font-bold shadow-sm hover:brightness-110 active:shadow-inner">_</button>
          <button className="w-5 h-5 bg-[#3E88E5] border border-white text-white text-xs font-bold shadow-sm hover:brightness-110 active:shadow-inner">□</button>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }} 
            className="w-5 h-5 bg-gradient-to-b from-[#E22E1A] to-[#A21D0D] border border-white text-white text-xs font-bold shadow-sm hover:brightness-125 active:shadow-inner"
          >
            X
          </button>
        </div>
      </div>
      
      {/* Main Container Area */}
      <div className="bg-white m-[2px] border border-[#919B9C] flex flex-col">
        
        {/* Explorer Toolbar Menu */}
        <div className="bg-[#ECE9D8] border-b border-[#919B9C] px-2 py-0.5 flex gap-4 text-[11px] text-black">
          <span className="hover:bg-[#316AC5] hover:text-white px-1 cursor-default">File</span>
          <span className="hover:bg-[#316AC5] hover:text-white px-1 cursor-default">Edit</span>
          <span className="hover:bg-[#316AC5] hover:text-white px-1 cursor-default">View</span>
          <span className="hover:bg-[#316AC5] hover:text-white px-1 cursor-default">Favorites</span>
          <span className="hover:bg-[#316AC5] hover:text-white px-1 cursor-default">Tools</span>
          <span className="hover:bg-[#316AC5] hover:text-white px-1 cursor-default">Help</span>
        </div>

        {/* Address Bar Area */}
        <div className="bg-[#ECE9D8] border-b border-[#D2D2D2] px-2 py-1.5 flex items-center gap-2">
          <span className="text-[11px] text-[#716F64]">Address</span>
          <div className="flex-grow bg-white border border-[#7F9DB9] px-2 py-0.5 text-[11px] truncate">
            {title.replace('.doc', '').replace('.auth', '')}
          </div>
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 bg-[#42B12F] rounded-full border border-black/20" />
            <span className="text-[11px]">Go</span>
          </div>
        </div>

        {/* Actual Content Wrapper */}
        <div className="p-6 overflow-y-auto max-h-[65vh] scrollbar-thin scrollbar-thumb-gray-400">
          {children}
        </div>
      </div>

      {/* Status Bar */}
      <div className="bg-[#ECE9D8] border-t border-[#919B9C] px-2 py-1 flex justify-between items-center text-[10px] text-black">
        <div className="flex gap-4">
          <span>{children ? '1 object(s) selected' : '0 objects'}</span>
        </div>
        <div className="border-l border-[#919B9C] pl-2 flex items-center gap-1">
          <span className="w-3 h-3 bg-blue-600 rounded-sm" />
          <span>Local Intranet</span>
        </div>
      </div>
    </div>
  );
}