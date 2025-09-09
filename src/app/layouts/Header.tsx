export const Header = () => {
    return (
        <header className="sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b z-50">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            </div>
            <span className="text-xl font-semibold">bagsTack</span>
          </div>
  
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Преимущества
            </button>
            <button 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Калькулятор
            </button>
            <button 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Технологии
            </button>
            <button 

              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Команда
            </button>
            <button 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              FAQ
            </button>
          </nav>
  
          <div className="hidden md:flex items-center space-x-4">
            <button 

            >
              Связаться
            </button>
            <button>
              Рассчитать стоимость
            </button>
          </div>
  
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
          >

          </button>
        </div>
  
        {/* Mobile Navigation */}
        
      </header>
    )
}