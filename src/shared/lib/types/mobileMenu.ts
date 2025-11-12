export interface NavigationItem {
  label: string;
  sectionId: string;
}

export interface MobileMenuProps {
  navigationItems: NavigationItem[];
  onClose: () => void;
  onLogoClick: () => void;
  onNavigateProjects: () => void;
  onNavigateToSection: (sectionId: string) => void;
}

export interface MobileMenuButtonProps {
  isOpen: boolean;
  onToggle: () => void;
}

