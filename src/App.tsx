import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Check, 
  Star, 
  ShieldCheck, 
  Heart, 
  Sparkles, 
  Clock, 
  MapPin, 
  Instagram, 
  X,
  MessageCircle
} from 'lucide-react';

// --- Data & Assets ---

const DATA = {
  name: "Dra. Marina Freitas",
  role: "Harmonização Facial & Estética Avançada",
  city: "Pouso Alegre - MG",
  whatsappLink: "https://api.whatsapp.com/send?phone=5535999663756&text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta!",
  instagramLink: "https://www.instagram.com/marinacfreitas_/",
  heroImage: "https://i.imgur.com/LbbMmns.png",
  aboutImage: "https://i.imgur.com/nKYNYoL.png",
  beforeAfterImages: [
    "https://i.imgur.com/vb1lcmJ.png",
    "https://i.imgur.com/4S0Sk5b.png",
    "https://i.imgur.com/c998KjH.png",
    "https://i.imgur.com/h7hFse0.png",
    "https://i.imgur.com/gydqc3f.png",
    "https://i.imgur.com/mdVLdnM.png",
    "https://i.imgur.com/Bs0tFMb.png"
  ],
  feedbackImages: [
    "https://i.imgur.com/jJzfWg2.png",
    "https://i.imgur.com/1kWkzTO.png",
    "https://i.imgur.com/lgosLTF.png",
    "https://i.imgur.com/uw64P2U.png",
    "https://i.imgur.com/THxtaQ4.png",
    "https://i.imgur.com/N9vj2mY.png",
    "https://i.imgur.com/TGlh6uh.png"
  ]
};

// --- Components ---

const Button = ({ children, href, variant = 'primary', className = '', ...props }: any) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 rounded-full text-sm uppercase tracking-widest font-medium transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants = {
    primary: "bg-gold-500 text-white hover:bg-gold-600 shadow-lg hover:shadow-gold-500/30 focus:ring-gold-500",
    outline: "border border-gold-500 text-gold-600 hover:bg-gold-50 focus:ring-gold-500",
    whatsapp: "bg-[#25D366] text-white hover:bg-[#128C7E] shadow-lg hover:shadow-green-500/30 focus:ring-green-500"
  };

  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`${baseStyles} ${variants[variant as keyof typeof variants]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
};

const SectionHeading = ({ title, subtitle, centered = true }: { title: string, subtitle?: string, centered?: boolean }) => (
  <div className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}>
    {subtitle && (
      <motion.span 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="block text-gold-600 text-xs font-bold tracking-[0.2em] uppercase mb-3"
      >
        {subtitle}
      </motion.span>
    )}
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="text-3xl md:text-4xl lg:text-5xl font-serif text-nude-900 leading-tight"
    >
      {title}
    </motion.h2>
    <div className={`h-1 w-20 bg-gold-400 mt-6 ${centered ? 'mx-auto' : ''}`} />
  </div>
);

const Lightbox = ({ image, onClose }: { image: string | null, onClose: () => void }) => {
  if (!image) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
        onClick={onClose}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
        >
          <X size={32} />
        </button>
        <motion.img 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          src={image} 
          alt="Zoom" 
          className="max-h-[90vh] max-w-full rounded-lg shadow-2xl object-contain"
          onClick={(e) => e.stopPropagation()}
        />
      </motion.div>
    </AnimatePresence>
  );
};

// --- Main App ---

export default function App() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-nude-50 overflow-x-hidden selection:bg-gold-200 selection:text-nude-900">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center pt-20 pb-20 lg:pt-0 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-nude-100 to-transparent -z-10" />
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-gold-200/20 rounded-full blur-3xl -z-10" />
        
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Text Content */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <div className="inline-block px-3 py-1 mb-6 border border-gold-300 rounded-full bg-white/50 backdrop-blur-sm">
                <span className="text-xs font-bold tracking-widest text-gold-700 uppercase">
                  Harmonização Facial & Estética
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-nude-900 leading-[1.1] mb-6">
                Eu sou a <br/>
                <span className="text-gold-600 italic">Dra. Marina Freitas</span>
              </h1>
              
              <p className="text-lg md:text-xl text-nude-800 font-light leading-relaxed mb-8 max-w-lg">
                Realço sua beleza com técnicas seguras, naturais e personalizadas. 
                Um toque sutil para revelar a sua melhor versão.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <Button href={DATA.whatsappLink} variant="whatsapp" className="w-full sm:w-auto group">
                  <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Agendar Avaliação
                </Button>
                <p className="text-xs text-nude-800/70 font-medium uppercase tracking-wide mt-2 sm:mt-0 sm:ml-4">
                  • Atendimento exclusivo <br className="hidden sm:block"/>
                  • Vagas limitadas
                </p>
              </div>
            </motion.div>

            {/* Hero Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 lg:order-2 relative"
            >
              <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-20" />
                <img 
                  src={DATA.heroImage} 
                  alt={DATA.name} 
                  className="w-full h-auto object-cover aspect-[3/4] lg:aspect-[4/5]"
                />
                <div className="absolute bottom-6 left-6 z-30 text-white">
                  <p className="font-serif text-2xl italic">Naturalidade</p>
                  <p className="text-xs tracking-widest uppercase opacity-90">É a nossa assinatura</p>
                </div>
              </div>
              
              {/* Decorative elements behind image */}
              <div className="absolute -bottom-6 -right-6 w-full h-full border border-gold-300 rounded-[2rem] -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. QUEM SOU EU */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src={DATA.aboutImage} 
                  alt="Dra. Marina atendendo" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="lg:col-span-7">
              <SectionHeading 
                title="Sua beleza, respeitada e valorizada." 
                subtitle="Quem sou eu" 
                centered={false} 
              />
              
              <div className="space-y-6 text-nude-800 leading-relaxed">
                <p>
                  Olá! Sou a Dra. Marina Freitas. Meu trabalho não é sobre transformar você em outra pessoa, 
                  mas sim sobre <strong className="text-gold-700 font-medium">revelar a sofisticação que já existe em seus traços.</strong>
                </p>
                <p>
                  Acredito que a verdadeira harmonização facial acontece quando olhamos no espelho e nos reconhecemos, 
                  mas com um brilho novo, mais descansado e confiante.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 mt-10">
                {[
                  "Atendimento Individualizado",
                  "Planejamento Personalizado",
                  "Foco em Naturalidade",
                  "Técnicas Avançadas",
                  "Segurança Total",
                  "Ética Profissional"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gold-100 flex items-center justify-center text-gold-600">
                      <Check size={14} />
                    </div>
                    <span className="text-sm font-medium text-nude-900">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. RESULTADOS REAIS */}
      <section className="py-24 bg-nude-50">
        <div className="container mx-auto px-6 lg:px-12">
          <SectionHeading 
            title="Resultados que falam por si" 
            subtitle="Antes e Depois" 
          />
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {DATA.beforeAfterImages.map((img, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
                onClick={() => setLightboxImage(img)}
              >
                <img 
                  src={img} 
                  alt={`Resultado ${idx + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all duration-300 bg-white/90 backdrop-blur rounded-full p-3 text-gold-600">
                    <Sparkles size={20} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <p className="text-center text-xs text-nude-800/60 mt-8 italic">
            * Resultados podem variar de pessoa para pessoa. As imagens são de pacientes reais autorizados.
          </p>
          
          <div className="mt-12 text-center">
            <Button href={DATA.instagramLink} variant="outline">
              Ver mais casos no Instagram
            </Button>
          </div>
        </div>
      </section>

      {/* 3.5. FEEDBACKS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <SectionHeading 
            title="O que dizem nossas pacientes" 
            subtitle="" 
            centered={true}
          />
          
          <div className="flex overflow-x-auto space-x-6 pb-8 snap-x snap-mandatory scrollbar-hide">
            {DATA.feedbackImages.map((img, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="min-w-[300px] md:min-w-[350px] snap-center rounded-2xl overflow-hidden shadow-lg border border-nude-100 cursor-pointer hover:shadow-xl transition-all duration-300"
                onClick={() => setLightboxImage(img)}
              >
                <img 
                  src={img} 
                  alt={`Depoimento ${idx + 1}`} 
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center mt-4 text-nude-400">
             <span className="text-sm">Arraste para o lado para ver mais</span>
          </div>
        </div>
      </section>

      {/* 4. POR QUE CONFIAR */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-300 to-transparent" />
        
        <div className="container mx-auto px-6 lg:px-12">
          <SectionHeading 
            title="Excelência em cada detalhe" 
            subtitle="Diferenciais" 
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <ShieldCheck size={28} />,
                title: "Segurança em 1º Lugar",
                desc: "Procedimentos realizados com rigorosos protocolos de segurança e produtos de alta qualidade."
              },
              {
                icon: <Star size={28} />,
                title: "Avaliação Honesta",
                desc: "Análise detalhada do seu rosto para indicar apenas o que realmente vai te valorizar."
              },
              {
                icon: <Heart size={28} />,
                title: "Resultados Naturais",
                desc: "Fujo de exageros. O foco é a elegância e a sutileza, mantendo sua identidade."
              },
              {
                icon: <Sparkles size={28} />,
                title: "Tecnologia de Ponta",
                desc: "Equipamentos modernos e técnicas atualizadas constantemente em congressos."
              },
              {
                icon: <MessageCircle size={28} />,
                title: "Atendimento Humanizado",
                desc: "Você é ouvida com atenção. Suas queixas e desejos são a base do nosso planejamento."
              },
              {
                icon: <Clock size={28} />,
                title: "Pós-procedimento",
                desc: "Acompanhamento próximo para garantir sua tranquilidade e a melhor recuperação."
              }
            ].map((card, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-2xl bg-nude-50 border border-nude-100 hover:border-gold-200 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center text-gold-600 mb-6 group-hover:bg-gold-500 group-hover:text-white transition-colors duration-300">
                  {card.icon}
                </div>
                <h3 className="text-xl font-serif text-nude-900 mb-3">{card.title}</h3>
                <p className="text-sm text-nude-800 leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA INTERMEDIÁRIO */}
      <section className="py-20 bg-nude-900 text-nude-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">
            Busca resultados naturais e segurança?
          </h2>
          <p className="text-lg text-nude-200 mb-10 max-w-2xl mx-auto font-light">
            Sua avaliação é o primeiro passo para a sua melhor versão. 
            Converse diretamente comigo e tire suas dúvidas.
          </p>
          <Button href={DATA.whatsappLink} variant="whatsapp" className="px-10 py-5 text-base">
            <MessageCircle className="w-6 h-6 mr-3" />
            Quero uma Avaliação Gratuita
          </Button>
          <p className="mt-4 text-xs text-nude-400 uppercase tracking-widest">Sem compromisso</p>
        </div>
      </section>

      {/* 6. COMO FUNCIONA */}
      <section className="py-24 bg-nude-50">
        <div className="container mx-auto px-6 lg:px-12">
          <SectionHeading 
            title="Sua jornada de beleza" 
            subtitle="Passo a Passo" 
          />
          
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gold-200 -z-10" />
            
            {[
              { step: "01", title: "Contato", desc: "Você envia uma mensagem no WhatsApp." },
              { step: "02", title: "Agendamento", desc: "Encontramos o melhor horário para você." },
              { step: "03", title: "Planejamento", desc: "Analiso seu caso e traçamos o plano ideal." }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="flex flex-col items-center text-center bg-white p-8 rounded-2xl shadow-sm md:bg-transparent md:shadow-none md:p-0"
              >
                <div className="w-24 h-24 rounded-full bg-white border-4 border-gold-100 flex items-center justify-center text-3xl font-serif font-bold text-gold-500 mb-6 shadow-sm z-10">
                  {item.step}
                </div>
                <h3 className="text-xl font-medium text-nude-900 mb-3">{item.title}</h3>
                <p className="text-nude-800 text-sm max-w-xs">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA FINAL */}
      <section className="py-24 bg-gradient-to-br from-gold-100 to-nude-100 relative">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto bg-white/60 backdrop-blur-md p-10 md:p-16 rounded-[3rem] shadow-xl border border-white"
          >
            <h2 className="text-3xl md:text-5xl font-serif text-nude-900 mb-6 leading-tight">
              Você merece se sentir ainda mais confiante.
            </h2>
            <p className="text-lg text-nude-800 mb-10">
              Não deixe para depois a autoestima que você pode ter hoje.
            </p>
            <Button href={DATA.whatsappLink} variant="primary" className="w-full sm:w-auto text-lg px-12 py-5 shadow-gold-500/40">
              Agendar Avaliação Gratuita
            </Button>
          </motion.div>
        </div>
      </section>

      {/* 9. FOOTER */}
      <footer className="bg-nude-900 text-nude-200 py-12 border-t border-nude-800">
        <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-serif text-gold-400 mb-2">{DATA.name}</h3>
            <p className="text-sm opacity-80">{DATA.role}</p>
          </div>
          
          <div className="flex items-center gap-6">
            <a 
              href={DATA.instagramLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-nude-800 flex items-center justify-center hover:bg-gold-600 hover:text-white transition-all duration-300"
            >
              <Instagram size={20} />
            </a>
            <a 
              href={DATA.whatsappLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-nude-800 flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-all duration-300"
            >
              <MessageCircle size={20} />
            </a>
          </div>

          <div className="text-center md:text-right text-xs opacity-50">
            <div className="flex items-center justify-center md:justify-end gap-2 mb-1">
              <MapPin size={12} />
              <span>{DATA.city}</span>
            </div>
            <p>&copy; {new Date().getFullYear()} Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Lightbox Component */}
      <Lightbox image={lightboxImage} onClose={() => setLightboxImage(null)} />
      
      {/* Floating WhatsApp Button (Mobile Only) */}
      <motion.a
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        href={DATA.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-2xl md:hidden hover:scale-110 transition-transform"
      >
        <MessageCircle size={28} />
      </motion.a>

    </div>
  );
}
