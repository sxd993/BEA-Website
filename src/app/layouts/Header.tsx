import { MobileMenu, MobileMenuButton } from "./MobileMenu";
import { useHeader } from "../../shared/hooks/useHeader";
import { navigationItems, TELEGRAM_LINK, PROJECTS_PATH } from "../../shared/lib/headerData";

export const Header = () => {
  const {
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    handleLogoClick,
    navigate,
    scrollToSection,
  } = useHeader();

  return (
    <header className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-lg shadow-gray-200/20 z-50 transition-all duration-300">
      <div className="container mx-auto px-4 py-4 sm:py-6 flex items-center justify-between sm:justify-center xl:justify-between gap-4 sm:gap-6 sm:flex-wrap xl:flex-nowrap">
        {/* Логотип */}
        <button
          onClick={handleLogoClick}
          className="flex items-center space-x-2 hover:scale-105 transition-all duration-300 sm:order-1 sm:basis-full sm:justify-center sm:mx-auto xl:order-none xl:basis-auto group"
        >
          <span className="text-xl md:text-2xl bg-gradient-to-r from-[#8e24aa] to-[#b76ec7] bg-clip-text text-transparent hover:from-[#b76ec7] hover:to-[#8e24aa] transition-all duration-300 logo-font group-hover:drop-shadow-lg">bagsTack</span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex items-center gap-6 sm:order-3 sm:w-full sm:justify-center xl:order-none xl:flex-1 xl:justify-center">
          {navigationItems.map((item) => (
            <button
              key={item.sectionId}
              onClick={() => scrollToSection(item.sectionId)}
              className="text-gray-600 hover:text-[#8e24aa] transition-all duration-300 relative group px-3 py-2 rounded-lg"
            >
              {item.label}
              <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#b76ec7] to-[#8e24aa] transition-all duration-300 group-hover:w-full rounded-full"></span>
            </button>
          ))}
        </nav>

        {/* Desktop CTA Buttons */}
        <div className="hidden sm:flex items-center gap-3 sm:gap-4 sm:order-2 sm:w-full sm:justify-center xl:order-none xl:w-auto xl:justify-start">
          <button
            onClick={() => navigate(PROJECTS_PATH)}
            className="inline-flex items-center justify-center h-10 min-w-[140px] px-5 text-base bg-gradient-to-r from-[#b76ec7] to-[#8e24aa] text-white rounded-full hover:from-[#8e24aa] hover:to-[#b76ec7] transition-all duration-300 whitespace-nowrap shadow-lg hover:shadow-xl hover:shadow-[#b76ec7]/25 hover:scale-105"
          >
            Наши проекты
          </button>
          <a
            href={TELEGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-10 min-w-[140px] px-5 text-base bg-white text-gray-800 border-2 border-gray-200 rounded-full hover:border-[#b76ec7] hover:bg-gradient-to-r hover:from-[#b76ec7]/5 hover:to-[#8e24aa]/5 transition-all duration-300 whitespace-nowrap shadow-md hover:shadow-lg hover:scale-105"
          >
            Связаться
          </a>
        </div>

        {/* Mobile Menu Button */}
        <MobileMenuButton
          isOpen={isMobileMenuOpen}
          onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        />
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <MobileMenu
          navigationItems={navigationItems}
          onClose={() => setIsMobileMenuOpen(false)}
          onLogoClick={handleLogoClick}
          onNavigateProjects={() => navigate(PROJECTS_PATH)}
          onNavigateToSection={scrollToSection}
        />
      )}

    </header>
  );
};