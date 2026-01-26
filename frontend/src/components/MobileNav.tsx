import type {NavLink} from '@/types/common';
import {Button} from './ul/Button';
import {useLanguage} from '@/context/LanguageContext';


const MobileNav = ({navLinks, setIsMobileMenuOpen}: { 
  navLinks: NavLink[]; 
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const {language, setLanguage, t} = useLanguage();

  return (
    <div className="md:hidden fixed inset-0 bg-background/95 backdrop-blur-md z-40">
      <div className="flex flex-col items-center justify-top h-full gap-8 mt-12">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="font-mono text-lg text-muted-foreground hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span className="text-primary">{link.name}</span>
          </a>
        ))}
        
        {/* Selector de idioma en móvil */}
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value as 'es' | 'en')}
          className="font-mono text-sm bg-background text-foreground border border-border rounded px-3 py-1 hover:border-primary transition-colors cursor-pointer"
        >
          <option value="es">ES</option>
          <option value="en">EN</option>
        </select>

        <a target="_blank" href="/Curriculum-V6.pdf">
          <Button variant="outline" className="font-mono border-primary text-primary hover:bg-primary/10 mt-4">
            {t.nav.resume}
          </Button>
        </a>
      </div>
    </div>
  );
};

export default MobileNav;