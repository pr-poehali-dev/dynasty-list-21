import { Link, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg gradient-primary flex items-center justify-center">
            <Icon name="Crown" size={20} className="text-white" />
          </div>
          <span className="text-lg font-bold gradient-text">21 Династия</span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          <Link to="/">
            <Button
              variant={isActive("/") ? "secondary" : "ghost"}
              size="sm"
              className="gap-2"
            >
              <Icon name="Home" size={16} />
              Главная
            </Button>
          </Link>
          <Link to="/profile">
            <Button
              variant={isActive("/profile") ? "secondary" : "ghost"}
              size="sm"
              className="gap-2"
            >
              <Icon name="User" size={16} />
              Профиль
            </Button>
          </Link>
        </div>

        <div className="flex md:hidden items-center gap-2">
          <Link to="/">
            <Button variant={isActive("/") ? "secondary" : "ghost"} size="icon" className="h-9 w-9">
              <Icon name="Home" size={18} />
            </Button>
          </Link>
          <Link to="/profile">
            <Button variant={isActive("/profile") ? "secondary" : "ghost"} size="icon" className="h-9 w-9">
              <Icon name="User" size={18} />
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
