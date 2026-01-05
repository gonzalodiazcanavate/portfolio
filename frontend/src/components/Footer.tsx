import {Github, Linkedin, Mail} from 'lucide-react';
import {useLanguage} from '@/context/LanguageContext';

const Footer = () => {
  const {t} = useLanguage();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container px-6">
        <div className="flex flex-col items-center gap-4">
          {/* Links */}
          <div className="flex gap-6">
            <a
              href="https://github.com/gonzalodiazcanavate"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/gonzalo-díaz-cañavate-5884912aa"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:gonzalodiazca@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Mail"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Creditos */}
          <p className="font-mono text-sm text-muted-foreground">
            {t.footer.designedBy}{' '}
            <a href="https://github.com/gonzalodiazcanavate" className="text-primary hover:underline">
              Gonzalo Díaz
            </a>
          </p>
          <p className="font-mono text-xs text-muted-foreground/60">
            © {new Date().getFullYear()} {t.footer.allRights}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;