import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface HeaderProps {
  currentPage: "home" | "profile";
  onNavigate: (page: "home" | "profile") => void;
}

const Header = ({ currentPage, onNavigate }: HeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border/50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <button onClick={() => onNavigate("home")} className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-lg gradient-primary flex items-center justify-center">
            <Icon name="Crown" size={18} className="text-white" />
          </div>
          <span className="text-lg font-bold gradient-text">21 Династия</span>
        </button>

        <nav className="hidden md:flex items-center gap-1">
          <Button
            variant={currentPage === "home" ? "secondary" : "ghost"}
            size="sm"
            onClick={() => onNavigate("home")}
            className="gap-2"
          >
            <Icon name="Home" size={16} />
            Главная
          </Button>
          <Button
            variant={currentPage === "profile" ? "secondary" : "ghost"}
            size="sm"
            onClick={() => onNavigate("profile")}
            className="gap-2"
          >
            <Icon name="User" size={16} />
            Профиль
          </Button>
        </nav>

        <div className="flex items-center gap-3">
          <Button size="sm" className="hidden md:flex gradient-primary text-white border-0 hover:opacity-90">
            Начать обучение
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={20} />
          </Button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl animate-slide-up">
          <div className="container mx-auto px-4 py-3 flex flex-col gap-1">
            <Button
              variant={currentPage === "home" ? "secondary" : "ghost"}
              className="justify-start gap-2"
              onClick={() => { onNavigate("home"); setMenuOpen(false); }}
            >
              <Icon name="Home" size={16} />
              Главная
            </Button>
            <Button
              variant={currentPage === "profile" ? "secondary" : "ghost"}
              className="justify-start gap-2"
              onClick={() => { onNavigate("profile"); setMenuOpen(false); }}
            >
              <Icon name="User" size={16} />
              Профиль
            </Button>
            <Button className="gradient-primary text-white border-0 mt-1">
              Начать обучение
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
