import {Mail, MapPin, Send} from 'lucide-react';
import {Button} from '@/components/ul/Button';
import {useLanguage} from '@/context/LanguageContext';

const Contact = () => {
  const {t} = useLanguage();

  return (
    <section id="contact" className="py-24 bg-secondary/30 relative">
      <div className="container px-6">
        <div className="max-w-2xl mx-auto text-center">
          {/* Cabecera de la sección */}
          <p className="font-mono text-primary mb-4">{t.contact.whatsNext}</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{t.contact.getInTouch}</h2>
          <p className="text-muted-foreground text-lg mb-12 leading-relaxed">
            {t.contact.description}
          </p>

          {/* Información de contacto */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="flex items-center gap-3 text-muted-foreground">
              <Mail className="w-5 h-5 text-primary" />
              <span>gonzalodiazca@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <MapPin className="w-5 h-5 text-primary" />
              <span>Fuente Álamo de Murcia, Spain</span>
            </div>
          </div>

          {/* Botón de Telegram */}
          <a href="https://t.me/gonzalodiazca?text=Hola,%20vengo%20de%20tu%20portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="font-mono glow hover:glow-strong transition-shadow cursor-pointer">
              <Send className="w-4 h-4 mr-2" />
              {t.contact.sayHello}
            </Button>
          </a>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
