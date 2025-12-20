import type {NavLink} from '@/types/common';


const MobileNav = ({navLinks, setIsMobileMenuOpen}: { 
  navLinks: NavLink[]; 
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="md:hidden fixed left-0 right-0 bottom-0 top-8 bg-background/95 backdrop-blur-md z-40">
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
        <button className="font-mono border-primary text-primary hover:bg-primary/10 mt-4">
              Resume
        </button>
      </div>
    </div>
  );
};

export default MobileNav;