import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Volume2,
  VolumeX,
  Moon,
  Sun,
  Menu,
  X,
  Github,
  Linkedin,
  FileText,
} from "lucide-react";
import { useTheme } from "../../hooks/useTheme";
import { useSound } from "../../hooks/useSound";
import Button from "../ui/Button";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onHover: () => void;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const NavLink: React.FC<NavLinkProps> = ({
  href,
  children,
  onHover,
  onClick,
}) => (
  <a
    href={href}
    className="font-mono text-sm relative p-1 group hover:text-accent"
    onMouseEnter={onHover}
    onClick={onClick}
  >
    {children}
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
  </a>
);

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { isEnabled, toggleSound, playSound } = useSound();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (e: React.MouseEvent<HTMLElement>, href: string) => {
    e.preventDefault();
    playSound("select");
    setIsMobileMenuOpen(false);

    if (location.pathname === "/") {
      const id = href.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        // Optional: Update URL hash without jumping
        window.history.pushState(null, "", href);
      }
    } else {
      navigate("/" + href);
    }
  };

  const handleHover = () => playSound("hover");

  return (
    <header className="fixed top-0 w-full z-50 py-5 bg-background/90 backdrop-blur-md border-b border-border transition-colors duration-300">
      <div className="max-w-[1100px] mx-auto px-5">
        <nav
          className="flex justify-between items-center"
          role="navigation"
          aria-label="Main Navigation"
        >
          {/* Logo */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              if (location.pathname !== "/") navigate("/");
              else window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="font-pixel text-sm md:text-base text-accent drop-shadow-[2px_2px_0_var(--accent-secondary)]"
            onMouseEnter={() => playSound("powerup")}
          >
            JIM_BENNETT_DEV
          </a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-4 lg:gap-8 items-center list-none ml-2 lg:ml-0 flex-1 justify-center">
            <li className="text-xs lg:text-sm">
              <NavLink
                href="#quests"
                onHover={handleHover}
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) =>
                  handleNavClick(e, "#quests")
                }
              >
                Quests (Work)
              </NavLink>
            </li>
            <li className="text-xs lg:text-sm">
              <NavLink
                href="#levels"
                onHover={handleHover}
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) =>
                  handleNavClick(e, "#levels")
                }
              >
                Levels (Projects)
              </NavLink>
            </li>
            <li className="text-xs lg:text-sm">
              <NavLink
                href="#reviews"
                onHover={handleHover}
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) =>
                  handleNavClick(e, "#reviews")
                }
              >
                Reputation (Reviews)
              </NavLink>
            </li>
            <li className="text-xs lg:text-sm">
              <NavLink
                href="#contact"
                onHover={handleHover}
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) =>
                  handleNavClick(e, "#contact")
                }
              >
                Co-op (Contact)
              </NavLink>
            </li>
          </ul>

          {/* Controls */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2 mr-2 border-r border-border pr-3">
              <a
                href="https://github.com/resonantdoghouse"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-text-muted hover:text-accent transition-colors"
                aria-label="GitHub Profile"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/jim-bennett/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-text-muted hover:text-accent transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="/assets/Jim_Bennett_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-text-muted hover:text-accent transition-colors"
                aria-label="Download Resume (PDF)"
              >
                <FileText size={18} />
              </a>
            </div>

            <Button
              variant="icon"
              onClick={toggleSound}
              aria-label={isEnabled ? "Mute Sound" : "Enable Sound"}
            >
              {isEnabled ? <Volume2 size={18} /> : <VolumeX size={18} />}
            </Button>

            <Button
              variant="icon"
              onClick={() => {
                const newTheme = theme === "dark" ? "light" : "dark";
                toggleTheme();
                playSound(newTheme === "light" ? "powerup" : "synth");
              }}
              aria-label={
                theme === "dark"
                  ? "Switch to Light Mode"
                  : "Switch to Dark Mode"
              }
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </Button>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <Button
                variant="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </Button>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Nav Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-border p-5 flex flex-col gap-4 shadow-lg animate-in slide-in-from-top-2">
          <NavLink
            href="#quests"
            onHover={handleHover}
            onClick={(e: React.MouseEvent<HTMLAnchorElement>) =>
              handleNavClick(e, "#quests")
            }
          >
            Quests (Work)
          </NavLink>
          <NavLink
            href="#levels"
            onHover={handleHover}
            onClick={(e: React.MouseEvent<HTMLAnchorElement>) =>
              handleNavClick(e, "#levels")
            }
          >
            Levels (Projects)
          </NavLink>
          <NavLink
            href="#reviews"
            onHover={handleHover}
            onClick={(e: React.MouseEvent<HTMLAnchorElement>) =>
              handleNavClick(e, "#reviews")
            }
          >
            Reputation (Reviews)
          </NavLink>
          <NavLink
            href="#contact"
            onHover={handleHover}
            onClick={(e: React.MouseEvent<HTMLAnchorElement>) =>
              handleNavClick(e, "#contact")
            }
          >
            Co-op (Contact)
          </NavLink>
          <div className="flex gap-4 pt-4 mt-2 border-t border-border justify-center">
            <a
              href="https://github.com/resonantdoghouse"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-text-muted hover:text-accent transition-colors"
              aria-label="GitHub Profile"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/jim-bennett/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-text-muted hover:text-accent transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="/assets/Jim_Bennett_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-text-muted hover:text-accent transition-colors"
              aria-label="Download Resume (PDF)"
            >
              <FileText size={24} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
