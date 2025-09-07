import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Mail, Linkedin, Instagram, Clapperboard, Calendar } from 'lucide-react';

const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 16 16"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
  </svg>
);


const socialLinks = [
  { icon: Instagram, href: 'https://www.instagram.com/_fastfilms_?utm_source=ig_web_button_share_sheet&igsh=YWMxZ2U2OXZ1b2ps', label: 'Instagram' },
  { icon: Linkedin, href: 'https://www.linkedin.com/company/fastfilmsoficial/?viewAsMember=true', label: 'LinkedIn' },
];

const contactActions = [
  { icon: WhatsAppIcon, label: 'WhatsApp', href: `https://wa.me/5531972208560?text=${encodeURIComponent('Olá! Vi seu cartão de visitas e gostaria de saber mais.')}` },
  { icon: Mail, label: 'Email', href: 'mailto:fastfilmsoficial@gmail.com' },
  { icon: Clapperboard, label: 'Portfolio', href: 'https://fastfilmsoficial.com.br/portfolio' },
];

const SparkleIcon = () => (
    <svg className="sparkle" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.187 8.096L15 5.25L15.813 8.096C16.0231 8.83114 16.4171 9.50062 16.9577 10.0413C17.4984 10.5819 18.1679 10.9759 18.903 11.186L21.75 12L18.904 12.813C18.1689 13.0231 17.4994 13.4171 16.9587 13.9577C16.4181 14.4984 16.0241 15.1679 15.814 15.903L15 18.75L14.187 15.904C13.9769 15.1689 13.5829 14.4994 13.0423 13.9587C12.5016 13.4181 11.8321 13.0241 11.097 12.814L8.25 12L11.096 11.187C11.8311 10.9769 12.5006 10.5829 13.0413 10.0423C13.5819 9.50162 13.9759 8.83214 14.186 8.097L14.187 8.096Z" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M6 14.25L5.741 15.285C5.59267 15.8785 5.28579 16.4206 4.85319 16.8532C4.42059 17.2858 3.87853 17.5927 3.285 17.741L2.25 18L3.285 18.259C3.87853 18.4073 4.42059 18.7142 4.85319 19.1468C5.28579 19.5794 5.59267 20.1215 5.741 20.715L6 21.75L6.259 20.715C6.40725 20.1216 6.71398 19.5796 7.14639 19.147C7.5788 18.7144 8.12065 18.4075 8.714 18.259L9.75 18L8.714 17.741C8.12065 17.5925 7.5788 17.2856 7.14639 16.853C6.71398 16.4204 6.40725 15.8784 6.259 15.285L6 14.25Z" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M6.5 4L6.303 4.5915C6.24777 4.75718 6.15472 4.90774 6.03123 5.03123C5.90774 5.15472 5.75718 5.24777 5.5915 5.303L5 5.5L5.5915 5.697C5.75718 5.75223 5.90774 5.84528 6.03123 5.96877C6.15472 6.09226 6.24777 6.24282 6.303 6.4085L6.5 7L6.697 6.4085C6.75223 6.24282 6.84528 6.09226 6.96877 5.96877C7.09226 5.84528 7.24282 5.75223 7.4085 5.697L8 5.5L7.4085 5.303C7.24282 5.24777 7.09226 5.15472 6.96877 5.03123C6.84528 4.90774 6.75223 4.75718 6.697 4.5915L6.5 4Z" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
);

const Particle = () => (
    <svg className="particle" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.937 3.846L7.75 1L8.563 3.846C8.77313 4.58114 9.1671 5.25062 9.70774 5.79126C10.2484 6.3319 10.9179 6.72587 11.653 6.936L14.5 7.75L11.654 8.563C10.9189 8.77313 10.2494 9.1671 9.70874 9.70774C9.1681 10.2484 8.77413 10.9179 8.564 11.653L7.75 14.5L6.937 11.654C6.72687 10.9189 6.3329 10.2494 5.79226 9.70874C5.25162 9.1681 4.58214 8.77413 3.847 8.564L1 7.75L3.846 6.937C4.58114 6.72687 5.25062 6.3329 5.79126 5.79226C6.3319 5.25162 6.72587 4.58214 6.936 3.847L6.937 3.846Z" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
);

export default function VirtualCard() {
  return (
    <Card 
      className="w-full max-w-lg mx-auto shadow-2xl rounded-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-500"
      style={{ backgroundColor: '#0a0a0a' }}
    >
      <div className="relative h-48 bg-gradient-to-br from-accent to-[hsl(var(--primary)_/_0.3)]">
        <Image
          src="/index/cartao/wallpaper.png"
          alt="Abstract background"
          fill
          style={{ objectFit: 'cover' }}
          className="opacity-70"
          data-ai-hint="abstract background"
        />
      </div>
      <CardContent className="p-6 text-center -mt-20">
        <Avatar className="w-36 h-36 mx-auto border-4 border-card shadow-lg">
          <AvatarImage src="/index/cartao/logo.png" data-ai-hint="company logo" />
          <AvatarFallback>FF</AvatarFallback>
        </Avatar>
        <h1 className="text-3xl font-bold mt-4 font-montserrat text-foreground">
          FastFilms
        </h1>
        <p className="text-accent-foreground font-medium">Produtora Audiovisual</p>
        <p className="text-muted-foreground mt-2 italic">Cada momento merece um bom take!</p>
        
        <Separator className="my-6" />

        <div className="flex justify-center my-6">
          <Image
            src="/index/cartao/SITE FF QRCODE.svg"
            alt="QR Code"
            width={150}
            height={150}
            className="rounded-lg [filter:drop-shadow(0_4px_6px_hsl(var(--primary)))]"
            data-ai-hint="qr code"
          />
        </div>

        <div className="contact-actions">
          {contactActions.map(action => (
            <a key={action.label} href={action.href} target="_blank" rel="noopener noreferrer">
              <action.icon />
              <span>{action.label}</span>
            </a>
          ))}
        </div>

        <div className="button-container mt-6">
          {socialLinks.map(social => (
            <a 
              key={social.label} 
              href={social.href} 
              aria-label={social.label} 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-button"
            >
              <social.icon className="w-5 h-5 btn-svg" />
            </a>
          ))}
        </div>

        <Separator className="my-6" />

        <div className="flex justify-center">
             <a href="https://calendly.com/fastfilmsoficial" target="_blank" rel="noopener noreferrer" className="sp">
                <button className="sparkle-button">
                    <span className="spark"></span>
                    <span className="backdrop"></span>
                    <Calendar className="sparkle" style={{ inlineSize: '1.25em', translate: '-25% -5%' }} />
                    <span className="text">Marque uma reunião!</span>
                </button>
                <div className="bodydrop"></div>
                <span aria-hidden="true" className="particle-pen">
                    {Array.from({ length: 20 }).map((_, i) => <Particle key={i} />)}
                </span>
            </a>
        </div>
      </CardContent>
    </Card>
  );
}
