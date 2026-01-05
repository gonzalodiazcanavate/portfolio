import {useState, useEffect} from 'react';
import {X, Menu} from 'lucide-react';
import type {NavLink} from '@/types/common';
import {Button} from './ul/Button';
import MobileNav from './MobileNav';
import {useLanguage} from '@/context/LanguageContext';


const Navbar = () => {
  const {language, setLanguage, t} = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks: NavLink[] = [
    {name: t.nav.about, href: '/#about'},
    {name: t.nav.skills, href: '/#skills'},
    {name: t.nav.projects, href: '/#projects'},
    {name: t.nav.contact, href: '/#contact'},
  ];

  // Efecto en el borde inferior del header al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-background/90 backdrop-blur-md border-b border-border' : ''
        }`}
      >
        <nav className="container px-6 py-2 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="font-mono text-2xl font-bold group">
            <span className="text-primary">&lt;</span>
            AC
            <span className="text-primary">/&gt;</span>
          </a>

          {/* Menu Escritorio */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <span className="text-primary">{link.name}</span>
              </a>
            ))}
            
            {/* Selector de idioma */}
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as 'es' | 'en')}
              className="font-mono text-sm bg-background text-foreground border border-border rounded px-3 py-1 hover:border-primary transition-colors cursor-pointer"
            >
              <option value="es">ES</option>
              <option value="en">EN</option>
            </select>

            <a target="_blank" href="/Curriculum-V3.pdf">
              <Button variant="outline" size="sm" className="font-mono border-primary text-primary hover:bg-primary/10 cursor-pointer">
                {t.nav.resume}
              </Button>
            </a>
          </div>

          {/* Botón menu desplegable */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            { /* Si el menu está abierto, icono X, si está cerrado tres barras horizontales */
              isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />
            }
          </button>
        </nav>

      </header>
      {/* Menu desplegable para móbiles */}
      {isMobileMenuOpen && (
        <MobileNav navLinks={navLinks} setIsMobileMenuOpen={setIsMobileMenuOpen} />
      )}
    </>
    
  );
};

export default Navbar;
