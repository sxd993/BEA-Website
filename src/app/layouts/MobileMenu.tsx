import { Menu, X } from "lucide-react";
import React from "react";

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
  return (
    <div className="fixed inset-0 z-50 bg-white flex flex-col">
      <div className="flex justify-between items-center px-4 py-4 border-b border-gray-200">
        <button
          onClick={onLogoClick}
          className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
        >
          <span className="text-xl logo-font">bagsTack</span>
        </button>
        <button
          onClick={onClose}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          aria-label="Закрыть меню"
        >
          <X className="h-6 w-6" />
        </button>
      </div>

      <nav className="flex-1 flex flex-col justify-center items-center gap-6">
        {navigationItems.map((item) => (
          <button
            key={item.sectionId}
            onClick={() => {
              onNavigateToSection(item.sectionId);
              onClose();
            }}
            className="text-xl text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            {item.label}
          </button>
        ))}

        <div className="mt-8 flex flex-col gap-4 w-2/3">
          <a
            href="https://t.me/sxdddddddddd"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full px-4 py-3 text-center text-foreground border border-border rounded-lg hover:bg-[#b76ec7] hover:text-white hover:border-[#b76ec7] transition-all duration-300"
            onClick={onClose}
          >
            Связаться
          </a>
          <button
            onClick={() => {
              onNavigateProjects();
              onClose();
            }}
            className="block w-full px-4 py-3 text-center bg-[#b76ec7] text-white rounded-lg hover:bg-[#b76ec7]/80 transition-colors duration-200"
          >
            Наши проекты
          </button>
        </div>
      </nav>
    </div>
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


