import { Menu, X } from "lucide-react";
import React, { useEffect } from "react";
import { createPortal } from "react-dom";

type MobileMenuProps = {
  navigationItems: { label: string; sectionId: string }[];
  onClose: () => void;
  onLogoClick: () => void;
  onNavigateProjects: () => void;
  onNavigateToSection: (sectionId: string) => void;
};

export const MobileMenu: React.FC<MobileMenuProps> = ({
  navigationItems,
  onClose,
  onLogoClick,
  onNavigateProjects,
  onNavigateToSection,
}) => {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  return createPortal(
    <div className="fixed inset-0 z-[1000] h-screen bg-white/95 backdrop-blur-md flex flex-col overflow-hidden">
      {/* Top bar */}
      <div className="relative flex justify-between items-center px-4 py-4 border-b border-gray-200/60 shadow-sm">
        {/* Subtle gradient accent */}
        <div className="pointer-events-none absolute -top-16 -left-24 w-56 h-56 bg-gradient-to-br from-[#b76ec7]/15 to-[#8e24aa]/10 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -right-24 w-56 h-56 bg-gradient-to-br from-[#8e24aa]/12 to-[#b76ec7]/8 rounded-full blur-3xl" />

        <button
          onClick={onLogoClick}
          className="flex items-center space-x-2 hover:scale-[1.02] transition-all duration-300 relative z-10"
        >
          <span className="text-xl md:text-2xl bg-gradient-to-r from-[#8e24aa] to-[#b76ec7] bg-clip-text text-transparent logo-font">bagsTack</span>
        </button>
        <button
          onClick={onClose}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors relative z-10"
          aria-label="Закрыть меню"
        >
          <X className="h-6 w-6" />
        </button>
      </div>

      {/* Nav list */}
      <nav className="relative flex-1 flex flex-col justify-center items-center gap-6 px-6">
        <div className="w-full max-w-xs space-y-10">
          {navigationItems.map((item) => (
            <button
              key={item.sectionId}
              onClick={() => {
                onNavigateToSection(item.sectionId);
                onClose();
              }}
              className="w-full text-base md:text-lg px-4 py-2.5 rounded-full bg-gradient-to-r from-[#b76ec7]/10 to-[#8e24aa]/10 text-[#8e24aa] border border-[#b76ec7]/20 shadow-sm"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* CTAs */}
        <div className="mt-8 flex flex-col gap-3 w-full max-w-sm">
          <button
            onClick={() => {
              onNavigateProjects();
              onClose();
            }}
            className="block w-full h-12 px-4 text-center bg-gradient-to-r from-[#b76ec7] to-[#8e24aa] text-white rounded-full hover:from-[#8e24aa] hover:to-[#b76ec7] transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#b76ec7]/25 hover:scale-105"
          >
            Наши проекты
          </button>
          <a
            href="https://t.me/sxdddddddddd"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full h-12 px-4 text-center leading-[48px] bg-white text-gray-800 border-2 border-gray-200 rounded-full hover:border-[#b76ec7] hover:bg-gradient-to-r hover:from-[#b76ec7]/5 hover:to-[#8e24aa]/5 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
            onClick={onClose}
          >
            Связаться
          </a>
        </div>

        {/* Footer note */}
        <div className="absolute bottom-4 text-xs text-gray-400">© bagsTack</div>
      </nav>
    </div>,
    document.body
  );
};

type MobileMenuButtonProps = {
  isOpen: boolean;
  onToggle: () => void;
};

export const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({ isOpen, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className="sm:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
      aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
      aria-expanded={isOpen}
    >
      {isOpen ? (
        <X className="h-6 w-6" />
      ) : (
        <Menu className="h-6 w-6" />
      )}
    </button>
  );
};


