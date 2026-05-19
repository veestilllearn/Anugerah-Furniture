import { useState, type DetailedHTMLProps } from "react";
import { PROJECTORY_CATALOG } from "../../constants/Data";

/* eslint-disable @typescript-eslint/no-namespace */
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": DetailedHTMLProps<
        HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        src?: string;
        ar?: boolean;
        "ar-modes"?: string;
        "camera-controls"?: boolean;
        "auto-rotate"?: boolean;
        "shadow-intensity"?: string;
        "environment-image"?: string;
        exposure?: string;
        [key: string]: unknown;
      };
    }
  }
}

interface ProjectoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectoryModal({
  isOpen,
  onClose,
}: ProjectoryModalProps) {
  const [activeItem, setActiveItem] = useState(PROJECTORY_CATALOG[0]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 md:p-8">
      <div className="relative w-full max-w-7xl h-full max-h-[85vh] bg-[#1C1C1C] border border-gray-700 rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-[0_35px_35px_rgba(0,0,0,0.6)] animate-fade-in-up">
        {/* Tombol (X) */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 md:left-4 md:right-auto z-10 bg-black/40 hover:bg-white text-gray-300 hover:text-black w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-300 backdrop-blur-md border border-gray-600 hover:border-white"
          aria-label="Close modal"
        >
          ✕
        </button>

        {/* (3D VIEWER) */}
        <div className="flex-1 bg-linear-to-b from-[#2A2A2A] to-[#121212] relative flex items-center justify-center">
          <model-viewer
            src={activeItem.modelSrc}
            ar
            ar-modes="webxr scene-viewer quick-look"
            camera-controls
            auto-rotate
            shadow-intensity="1.5"
            environment-image="neutral"
            exposure="1.2"
            style={{ width: "100%", height: "100%" }}
          >
            {/* Tombol AR */}
            <button
              slot="ar-button"
              className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-[#D9D9D9] text-gray-900 px-10 py-3.5 rounded-full text-xs font-semibold tracking-[0.2em] hover:bg-white transition shadow-lg"
            >
              VIEW IN YOUR ROOM
            </button>
          </model-viewer>
        </div>

        {/* KATALOG KECIL */}
        <div className="w-full md:w-87.5 bg-[#171717] border-t md:border-t-0 md:border-l border-gray-700 flex flex-col h-1/3 md:h-full">
          {/* Header Katalog */}
          <div className="p-6 border-b border-gray-800">
            <h3
              className="text-2xl tracking-wider text-white"
              style={{ fontFamily: "'Gasoek One', sans-serif" }}
            >
              CATALOG
            </h3>
            <p className="text-xs text-gray-400 mt-1.5 font-light tracking-wide">
              Select an item to interact in 3D
            </p>
          </div>

          {/* Area List Barang (Scrollable) */}
          <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-4 custom-scrollbar">
            {PROJECTORY_CATALOG.map((item) => {
              const isActive = activeItem.id === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => setActiveItem(item)}
                  className={`flex items-center gap-4 p-3.5 rounded-xl border text-left transition-all duration-300 group ${
                    isActive
                      ? "border-white bg-[#222222] shadow-[0_0_15px_rgba(255,255,255,0.05)]"
                      : "border-transparent hover:border-gray-600 hover:bg-[#222222]"
                  }`}
                >
                  {/* Gambar Thumbnail */}
                  <div
                    className={`w-16 h-16 rounded-lg overflow-hidden shrink-0 flex items-center justify-center transition-colors ${isActive ? "bg-[#D9D9D9]" : "bg-[#EAEAEA] group-hover:bg-[#D9D9D9]"}`}
                  >
                    <img
                      src={item.thumbnail}
                      alt={item.name}
                      className="max-w-full max-h-full object-contain p-1.5 mix-blend-multiply"
                    />
                  </div>

                  {/* Teks Info */}
                  <div>
                    <p
                      className={`text-[10px] font-bold uppercase tracking-widest ${isActive ? "text-gray-300" : "text-gray-500"}`}
                    >
                      {item.category}
                    </p>
                    <p
                      className={`text-sm font-semibold mt-1 transition-colors ${isActive ? "text-white" : "text-gray-300 group-hover:text-white"}`}
                    >
                      {item.name}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
