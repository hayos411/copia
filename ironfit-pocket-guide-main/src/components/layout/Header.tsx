import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Search, Dumbbell, LogOut, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { user, signOut } = useAuth();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/workout", label: "Meu Treino" },
    { path: "/exercises", label: "Exercícios" },
    { path: "/knowledge", label: "Métodos" },
    { path: "/about", label: "Sobre" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 font-bold text-xl group">
          <div className="p-2 rounded-lg bg-gradient-hero group-hover:scale-110 transition-transform">
            <Dumbbell className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="bg-gradient-hero bg-clip-text text-transparent">IronFit</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                isActive(link.path)
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent/5"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {user ? (
            <>
              <Button variant="ghost" size="icon" className="hidden md:flex">
                <User className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={signOut}
                className="hidden md:flex items-center gap-2"
              >
                <LogOut className="h-4 w-4" />
                Sair
              </Button>
            </>
          ) : (
            <Button variant="default" size="sm" asChild className="hidden md:flex">
              <Link to="/auth">Entrar</Link>
            </Button>
          )}
          
          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur">
          <nav className="container mx-auto flex flex-col p-4 gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`px-4 py-3 rounded-lg font-medium transition-all ${
                  isActive(link.path)
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
            {user ? (
              <Button 
                variant="ghost" 
                onClick={() => {
                  signOut();
                  setIsMenuOpen(false);
                }}
                className="justify-start"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Sair
              </Button>
            ) : (
              <Button variant="default" asChild>
                <Link to="/auth" onClick={() => setIsMenuOpen(false)}>Entrar</Link>
              </Button>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};
