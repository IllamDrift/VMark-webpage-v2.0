
import React, { useState, useEffect, useRef, ChangeEvent } from 'react';
import { createRoot } from 'react-dom/client';
import { 
  Shield, 
  Users, 
  Building2, 
  Briefcase, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  ArrowRight, 
  MessageSquare,
  Phone,
  Menu,
  X,
  Zap,
  Star,
  HardHat,
  Award,
  Upload,
  Camera,
  Target,
  Plus,
  ChevronLeft,
  ChevronRight,
  Trash2
} from 'lucide-react';

/**
 * PROFESSIONAL V-SHIELD LOGO (Original Branding)
 */
const VMARK_ORIGINAL_LOGO = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIgdmlld0JveD0iMCAwIDUwMCA1MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0yNTAgMjVMMTkwIDU1VjIyNUMxOTAgMjg1IDIzMCAzODAgMjUwIDQxNUMyNzAgMzgwIDMxMCAyODUgMzEwIDIyNVY1NUwyNTAgMjVaIiBmaWxsPSIjRkY2QjM1Ii8+CjxwYXRoIGQ9Ik0yMTUgMTc1TDI1MCAyNzVMMjg1IDE3NSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIzMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0yNTAgMzhMMjAwIDY0VjIyNUMyMDAgMjgxIDIzNyAzNzAgMjUwIDQwNEMyNjMgMzcwIDMwMCAyODEgMzAwIDIyNVY2NEwyNTAgMzhaIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjEwIiBzdHJva2Utb3BhY2l0eT0iMC4zIi8+Cjwvc3ZnPg==";

const INITIAL_ASSETS = {
  logo: VMARK_ORIGINAL_LOGO,
  heroImage: "https://images.unsplash.com/photo-1590233649605-f37c38661642?auto=format&fit=crop&q=80&w=800",
  gallery: [
    { id: '1', url: "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&q=80&w=1200", title: "Elite Guard Training" },
    { id: '2', url: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1200", title: "Facility Maintenance" },
    { id: '3', url: "https://images.unsplash.com/photo-1521791136064-7986c2923216?auto=format&fit=crop&q=80&w=1200", title: "Corporate Protocol" },
    { id: '4', url: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1200", title: "Industrial Oversight" },
    { id: '5', url: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200", title: "Advanced Operations" },
    { id: '6', url: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1200", title: "Client Support" },
  ]
};

const TAMIL_NADU_CITIES = ['Salem', 'Coimbatore', 'Hosur', 'Erode', 'Namakkal', 'Karur', 'Chennai', 'Madurai', 'Trichy'];

const styles = {
  glass: "backdrop-blur-xl bg-white/5 border border-white/10",
  orangeBtn: "px-6 py-3 rounded-xl bg-[#FF6B35] hover:bg-[#e85a2a] text-white font-bold transition-all duration-300 shadow-[0_4px_20px_rgba(255,107,53,0.3)] hover:scale-105 active:scale-95 flex items-center justify-center gap-2",
  navyCard: "p-6 rounded-2xl bg-[#0A1128]/80 border border-white/10 hover:border-[#FF6B35]/50 transition-all duration-500 group relative overflow-hidden",
  metricText: "text-3xl font-black text-white tracking-tighter",
  sectionHeading: "text-3xl md:text-5xl font-bold text-white mb-6 leading-tight",
};

const Lightbox = ({ images, currentIndex, onClose, onPrev, onNext }: { 
  images: any[], 
  currentIndex: number | null, 
  onClose: () => void, 
  onPrev: () => void, 
  onNext: () => void 
}) => {
  if (currentIndex === null || !images[currentIndex]) return null;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose, onNext, onPrev]);

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 backdrop-blur-xl animate-in fade-in duration-300">
      <button 
        onClick={onClose} 
        className="absolute top-8 right-8 p-3 bg-white/5 hover:bg-white/10 rounded-full text-white transition-all z-[210] border border-white/10"
      >
        <X size={32} />
      </button>

      <button onClick={onPrev} className="absolute left-4 md:left-8 p-4 bg-white/5 hover:bg-white/10 rounded-full text-white transition-all z-[210] border border-white/10 hover:scale-110 active:scale-90">
        <ChevronLeft size={36} />
      </button>

      <button onClick={onNext} className="absolute right-4 md:right-8 p-4 bg-white/5 hover:bg-white/10 rounded-full text-white transition-all z-[210] border border-white/10 hover:scale-110 active:scale-90">
        <ChevronRight size={36} />
      </button>

      <div className="relative max-w-[90vw] max-h-[85vh] flex flex-col items-center gap-6">
        <img src={images[currentIndex].url} alt={images[currentIndex].title} className="max-w-full max-h-[80vh] object-contain rounded-xl shadow-2xl animate-in zoom-in duration-500 select-none" />
        <div className="text-center">
          <h4 className="text-xl font-bold text-white mb-1">{images[currentIndex].title}</h4>
          <p className="text-sm text-[#FF6B35] font-bold uppercase tracking-widest">Visual {currentIndex + 1} of {images.length}</p>
        </div>
      </div>
    </div>
  );
};

const NumberTicker = ({ value, suffix = "" }: { value: number, suffix?: string }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 2000;
    const increment = Math.ceil(end / (duration / 16));
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [value]);
  return <span className={styles.metricText}>{count.toLocaleString()}{suffix}</span>;
};

const ServiceCard = ({ icon: Icon, title, price, description }: any) => (
  <div className={styles.navyCard}>
    <div className="absolute top-0 right-0 w-24 h-24 bg-[#FF6B35]/5 blur-3xl rounded-full group-hover:bg-[#FF6B35]/20 transition-all duration-500" />
    <div className="p-3 bg-[#FF6B35]/10 rounded-xl text-[#FF6B35] w-fit mb-4 group-hover:rotate-12 transition-transform">
      <Icon size={28} />
    </div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-gray-400 text-sm mb-4 line-clamp-2">{description}</p>
    <div className="flex justify-between items-center pt-4 border-t border-white/5">
      <div className="text-xs font-bold uppercase tracking-widest text-gray-500">Starting from</div>
      <div className="text-[#FF6B35] font-bold">₹{price}<span className="text-[10px] text-gray-500">/mo</span></div>
    </div>
  </div>
);

const CareersModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={onClose} />
      <div className="relative w-full max-w-2xl bg-[#0A1128] border border-white/10 rounded-3xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300">
        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-3xl font-bold text-white">Join the VMaRK Elite</h2>
              <p className="text-gray-400">Build your career with India's most trusted security firm.</p>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full"><X className="text-white" /></button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {[
              { role: "Security Guards", spots: "50+ Openings", pay: "₹15K-25K", icon: Shield },
              { role: "Supervisors", spots: "10+ Openings", pay: "₹25K-45K", icon: Users },
              { role: "Facility Staff", spots: "30+ Openings", pay: "₹12K-30K", icon: HardHat },
              { role: "Corporate Roles", spots: "Hiring", pay: "₹20K-60K", icon: Briefcase },
            ].map((job, i) => (
              <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-[#FF6B35]/50 transition-colors cursor-pointer group">
                <div className="flex items-center gap-3 mb-2">
                  <job.icon size={20} className="text-[#FF6B35]" />
                  <span className="font-bold text-white group-hover:text-[#FF6B35] transition-colors">{job.role}</span>
                </div>
                <div className="flex justify-between text-xs font-medium text-gray-500">
                  <span className="text-green-400">{job.spots}</span>
                  <span>{job.pay}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="p-6 rounded-2xl bg-[#FF6B35]/10 border border-[#FF6B35]/20 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <div className="font-bold text-white">200+ Hours FREE Training</div>
              <div className="text-sm text-[#FF6B35]">Certifications provided upon completion</div>
            </div>
            <button className={styles.orangeBtn}>Apply via WhatsApp</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const VMarkApp = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isCareerOpen, setIsCareerOpen] = useState(false);
  const [logo, setLogo] = useState<string | null>(INITIAL_ASSETS.logo);
  const [heroImage, setHeroImage] = useState<string>(INITIAL_ASSETS.heroImage);
  const [gallery, setGallery] = useState(INITIAL_ASSETS.gallery);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const logoInputRef = useRef<HTMLInputElement>(null);
  const heroInputRef = useRef<HTMLInputElement>(null);
  const galleryInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const processFile = (file: File): Promise<string> => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.readAsDataURL(file);
    });
  };

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>, type: 'logo' | 'hero' | 'gallery') => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    if (type === 'logo') {
      const result = await processFile(files[0]);
      setLogo(result);
    } else if (type === 'hero') {
      const result = await processFile(files[0]);
      setHeroImage(result);
    } else if (type === 'gallery') {
      const newItems = await Promise.all(
        Array.from(files).map(async (f) => ({
          id: Math.random().toString(36).substr(2, 9),
          url: await processFile(f),
          title: "Custom Mission Asset"
        }))
      );
      setGallery(prev => [...prev, ...newItems]);
    }
    e.target.value = '';
  };

  const removeGalleryItem = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setGallery(prev => prev.filter(item => item.id !== id));
  };

  const services = [
    { icon: Shield, title: "Security Guards", price: "15,000", description: "Elite protection for commercial and residential sectors." },
    { icon: Building2, title: "Facility Mgmt", price: "25,000", description: "End-to-end property upkeep and technical operations." },
    { icon: HardHat, title: "Housekeeping", price: "12,000", description: "Premium sanitation and cleaning solutions for offices." },
    { icon: Users, title: "Pantry Services", price: "10,000", description: "Professional refreshment and catering staff management." },
    { icon: Briefcase, title: "Office Staff", price: "16,000", description: "Trained front-desk and administrative support personnel." },
    { icon: Target, title: "Event Security", price: "20,000", description: "Specialized crowd control and VIP protection for events." },
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-white font-sans selection:bg-[#FF6B35] selection:text-white">
      <input type="file" ref={logoInputRef} onChange={(e) => handleFileChange(e, 'logo')} className="hidden" accept="image/*" />
      <input type="file" ref={heroInputRef} onChange={(e) => handleFileChange(e, 'hero')} className="hidden" accept="image/*" />
      <input type="file" ref={galleryInputRef} onChange={(e) => handleFileChange(e, 'gallery')} className="hidden" accept="image/*" multiple />

      <div className="bg-[#FF6B35] py-2 overflow-hidden whitespace-nowrap z-[100] relative">
        <div className="flex items-center gap-12 animate-marquee-fast">
          {[...Array(4)].map((_, i) => (
            <React.Fragment key={i}>
              {TAMIL_NADU_CITIES.map(city => (
                <div key={city} className="flex items-center gap-2 text-white font-black uppercase text-[10px] tracking-widest">
                  <MapPin size={12} fill="white" /> Now in {city}
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>

      <nav className={`fixed top-[32px] w-full z-50 transition-all duration-300 ${scrolled ? 'py-3 bg-[#0A1128]/80 backdrop-blur-xl border-b border-white/5 top-0' : 'py-6 bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3 group cursor-pointer" onClick={() => logoInputRef.current?.click()}>
            <div className="w-12 h-12 bg-[#FF6B35]/10 rounded-xl flex items-center justify-center shadow-lg overflow-hidden border border-white/10 group-hover:border-[#FF6B35]/50 transition-all">
              {logo ? <img src={logo} alt="VMaRK" className="w-full h-full object-contain p-1.5" /> : <Shield className="text-[#FF6B35]" size={28} />}
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tighter uppercase leading-none block group-hover:text-[#FF6B35] transition-colors">VMaRK</span>
              <span className="text-[9px] font-bold text-gray-400 uppercase tracking-[0.05em] mt-0.5">Security and Facility Management</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-10">
            {['Services', 'About', 'Gallery', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-semibold text-gray-400 hover:text-[#FF6B35] transition-colors">{item}</a>
            ))}
            <button onClick={() => setIsCareerOpen(true)} className="flex items-center gap-2 text-[#FF6B35] font-bold hover:bg-[#FF6B35]/10 px-4 py-2 rounded-lg transition-all"><Briefcase size={18} /> Careers</button>
            <button className={styles.orangeBtn}>Get A Quote</button>
          </div>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>{isMenuOpen ? <X size={28} /> : <Menu size={28} />}</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-52 pb-20 px-6 overflow-hidden">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-[#FF6B35]/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-[#FF6B35] mb-8 tracking-widest uppercase"><Award size={14} /> PSARA Licensed & ISO Certified</div>
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[1.1]">India's Most <span className="text-[#FF6B35]">Trusted</span> Security Partner.</h1>
            <p className="text-lg text-gray-400 mb-10 max-w-xl leading-relaxed">We provide world-class security and facility management for the visionary enterprise. Built on 12+ years of expertise and powered by 2,800+ elite personnel.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className={styles.orangeBtn}>Hire VMaRK Professionals <ArrowRight size={20} /></button>
              <button onClick={() => setIsCareerOpen(true)} className="px-6 py-3 rounded-xl border border-white/10 hover:bg-white/5 font-bold transition-all flex items-center justify-center gap-2"><Users size={20} /> Join Our Force</button>
            </div>
            <div className="mt-12 flex items-center gap-8 border-t border-white/5 pt-8">
              <div><NumberTicker value={500} suffix="+" /><p className="text-xs font-bold text-gray-500 uppercase tracking-widest mt-1">Clients Served</p></div>
              <div className="w-px h-12 bg-white/10" />
              <div><NumberTicker value={2847} /><p className="text-xs font-bold text-gray-500 uppercase tracking-widest mt-1">Active Personnel</p></div>
              <div className="w-px h-12 bg-white/10" />
              <div><NumberTicker value={98} suffix="%" /><p className="text-xs font-bold text-gray-500 uppercase tracking-widest mt-1">Retention Rate</p></div>
            </div>
          </div>
          <div className="relative group lg:block hidden">
            <div className="absolute inset-0 bg-[#FF6B35]/20 rounded-full blur-[100px] animate-pulse group-hover:bg-[#FF6B35]/30 transition-all" />
            <div className="relative z-10 bg-gradient-to-br from-white/10 to-transparent p-1 rounded-[40px] border border-white/10 overflow-hidden shadow-2xl">
              <div className="relative overflow-hidden cursor-pointer" onClick={() => heroInputRef.current?.click()}>
                <img src={heroImage} alt="Security Professional" className="rounded-[38px] w-full h-[600px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity backdrop-blur-sm">
                  <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-full flex items-center gap-2 font-bold border border-white/20 text-white"><Upload size={18} /> Replace Hero Image</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl"><h2 className={styles.sectionHeading}>Comprehensive Protection <br />for Every Vertical.</h2><p className="text-gray-400">Scalable security and facility solutions tailored for manufacturing, corporate, retail, and industrial hubs.</p></div>
            <button className="text-[#FF6B35] font-bold flex items-center gap-2 hover:gap-4 transition-all">View All 12+ Services <ArrowRight size={20} /></button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{services.map((s, i) => <ServiceCard key={i} {...s} />)}</div>
        </div>
      </section>

      {/* Comparison Section - Matches Provided Image */}
      <section id="why-vmark" className="py-32 px-6 bg-[#fcfcfc] text-[#1a1a1a]">
        <div className="max-w-7xl mx-auto text-center mb-16 relative">
          <h2 className="text-4xl md:text-6xl font-black text-[#0A1128] mb-4">Why Businesses Choose VMARK Over Others</h2>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-6 relative">
          {/* Card: Unreliable Agencies */}
          <div className="bg-white rounded-[32px] p-10 shadow-sm border border-gray-100 flex flex-col items-start transition-transform hover:scale-[1.02]">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-4xl">❌</span>
              <h3 className="text-2xl font-bold text-[#0A1128]">Unreliable Agencies</h3>
            </div>
            <ul className="space-y-6 w-full">
              {[
                "Untrained guards with minimal skills",
                "Poor communication and delayed responses",
                "Hidden costs and unclear billing",
                "No background verification",
                "Inconsistent service quality"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 group">
                  <span className="text-gray-300 mt-1">→</span>
                  <span className="text-gray-600 font-medium group-hover:text-gray-900 transition-colors">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card: VMARK Solution (Highlighted) */}
          <div className="bg-[#FF6B35] rounded-[32px] p-10 shadow-2xl shadow-[#FF6B35]/20 flex flex-col items-start relative z-10 transition-transform hover:scale-[1.05]">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-4xl text-white">✔️</span>
              <h3 className="text-2xl font-bold text-white">VMARK Solution</h3>
            </div>
            <ul className="space-y-6 w-full">
              {[
                "200+ hours professional training",
                "Real-time app with live updates",
                "100% transparent pricing",
                "Police-verified background checks",
                "Guaranteed service standards"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 group">
                  <span className="text-white/60 mt-1">✔️</span>
                  <span className="text-white font-bold group-hover:text-white/90 transition-colors">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card: Your Benefit */}
          <div className="bg-white rounded-[32px] p-10 shadow-sm border border-gray-100 flex flex-col items-start transition-transform hover:scale-[1.02]">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-4xl">🎯</span>
              <h3 className="text-2xl font-bold text-[#0A1128]">Your Benefit</h3>
            </div>
            <ul className="space-y-6 w-full">
              {[
                "Zero security incidents",
                "Instant emergency response",
                "Save up to 30% on costs",
                "Complete peace of mind",
                "Measurable ROI"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 group">
                  <span className="text-gray-300 mt-1">→</span>
                  <span className="text-gray-600 font-medium group-hover:text-gray-900 transition-colors">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Live Viewing Widget */}
          <div className="absolute -bottom-16 right-0 md:right-4 bg-white px-5 py-3 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-sm font-bold text-[#0A1128]">23 people viewing this page</span>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 px-6 bg-[#030712]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16"><h2 className={styles.sectionHeading}>Mission Readiness</h2><p className="text-gray-400">Visual evidence of our rigorous training and operational excellence.</p></div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {gallery.map((img, i) => (
              <div key={img.id} onClick={() => setLightboxIndex(i)} className={`relative rounded-2xl overflow-hidden group aspect-square cursor-zoom-in border border-white/5 ${i === 0 ? 'md:col-span-2 md:row-span-2 aspect-auto' : ''}`}>
                <img src={img.url} alt={img.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                  <h4 className="text-white font-bold translate-y-2 group-hover:translate-y-0 transition-transform">{img.title}</h4>
                  <p className="text-xs text-[#FF6B35] font-bold uppercase tracking-widest mt-1 opacity-0 group-hover:opacity-100 transition-opacity delay-75">View Operations</p>
                </div>
                <button onClick={(e) => removeGalleryItem(img.id, e)} className="absolute top-4 right-4 p-2 bg-red-500/20 hover:bg-red-500 backdrop-blur-md rounded-lg text-white opacity-0 group-hover:opacity-100 transition-all border border-white/10 z-20"><Trash2 size={16} /></button>
              </div>
            ))}
            <div onClick={() => galleryInputRef.current?.click()} className="border-2 border-dashed border-white/10 rounded-2xl flex flex-col items-center justify-center hover:border-[#FF6B35]/50 transition-colors cursor-pointer group bg-white/5 min-h-[200px]"><div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-3 group-hover:bg-[#FF6B35]/20 transition-all"><Plus size={32} className="text-gray-600 group-hover:text-[#FF6B35] transition-transform group-hover:rotate-90" /></div><span className="text-xs font-bold text-gray-500 group-hover:text-white uppercase tracking-widest">Add System Pix</span></div>
          </div>
        </div>
      </section>

      {/* Lightbox Implementation */}
      <Lightbox images={gallery} currentIndex={lightboxIndex} onClose={() => setLightboxIndex(null)} onNext={() => setLightboxIndex((lightboxIndex! + 1) % gallery.length)} onPrev={() => setLightboxIndex((lightboxIndex! - 1 + gallery.length) % gallery.length)} />

      {/* Compliance Section */}
      <section className="py-24 px-6 bg-[#030712]">
        <div className="max-w-7xl mx-auto bg-[#0A1128] rounded-[40px] overflow-hidden border border-white/5 shadow-2xl relative p-12 lg:p-20">
          <div className="text-center">
            <div className="w-24 h-24 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center mx-auto mb-6 border border-white/20"><Shield size={48} className="text-white" /></div>
            <h3 className="text-5xl font-black text-white mb-4">₹1 Crore+</h3>
            <p className="text-white/80 font-bold uppercase tracking-widest text-sm">Insurance Coverage</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {['PSARA Licensed', 'ISO 9001:2015', 'ESI/PF Compliant'].map(tag => <span key={tag} className="px-4 py-2 bg-white/10 rounded-lg text-white font-bold text-xs uppercase border border-white/10">{tag}</span>)}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 border-t border-white/5 bg-[#030712]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <h2 className="text-4xl font-bold mb-6 text-white">Connect with <br />Our Command Center</h2>
            <p className="text-gray-400 mb-8 leading-relaxed">Discuss your security requirements with our expert consultants. We provide customized deployment plans within 24 hours.</p>
            <div className="space-y-4">{TAMIL_NADU_CITIES.slice(0, 6).map(city => (<div key={city} className="flex items-center gap-3 text-gray-400 group cursor-default"><MapPin size={18} className="group-hover:text-[#FF6B35] transition-colors" /><span className="font-semibold group-hover:text-white transition-colors">{city} Regional Hub</span></div>))}</div>
          </div>
          <div className="lg:col-span-2">
            <div className="bg-white/5 border border-white/10 rounded-[32px] p-8 md:p-12 relative overflow-hidden group">
              <form className="grid md:grid-cols-2 gap-6 relative z-10">
                <div className="space-y-2"><label className="text-xs font-bold uppercase tracking-widest text-gray-500">Full Name</label><input type="text" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:border-[#FF6B35] focus:outline-none transition-all placeholder:text-gray-700 text-white" placeholder="John Doe" /></div>
                <div className="space-y-2"><label className="text-xs font-bold uppercase tracking-widest text-gray-500">Business Email</label><input type="email" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:border-[#FF6B35] focus:outline-none transition-all placeholder:text-gray-700 text-white" placeholder="john@company.com" /></div>
                <div className="space-y-2 md:col-span-2"><label className="text-xs font-bold uppercase tracking-widest text-gray-500">Service Required</label><select className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:border-[#FF6B35] focus:outline-none transition-all appearance-none text-gray-400">{services.map(s => <option key={s.title}>{s.title}</option>)}</select></div>
                <div className="space-y-2 md:col-span-2"><label className="text-xs font-bold uppercase tracking-widest text-gray-500">How can we help?</label><textarea rows={4} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:border-[#FF6B35] focus:outline-none transition-all placeholder:text-gray-700 text-white" placeholder="Your requirements..." /></div>
                <button className={`${styles.orangeBtn} md:col-span-2 py-4`}>Submit Inquiry</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 z-[80] flex flex-col gap-4">
        <button onClick={() => window.open('https://wa.me/91XXXXXXXXXX', '_blank')} className="w-14 h-14 bg-[#06D6A0] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all animate-bounce"><MessageSquare className="text-white" fill="currentColor" /></button>
        <button onClick={() => window.location.href = 'tel:+91XXXXXXXXXX'} className="w-14 h-14 bg-[#FF6B35] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all"><Phone className="text-white" /></button>
      </div>

      <CareersModal isOpen={isCareerOpen} onClose={() => setIsCareerOpen(false)} />

      <footer className="py-12 border-t border-white/10 bg-[#030712]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1">
              <div className="flex items-center gap-3 mb-6 opacity-80 group cursor-pointer" onClick={() => logoInputRef.current?.click()}>
                <div className="w-10 h-10 bg-[#FF6B35]/20 rounded-lg flex items-center justify-center overflow-hidden border border-white/10">{logo ? <img src={logo} className="w-full h-full object-contain p-1" /> : <Shield size={18} className="text-white" />}</div>
                <div className="flex flex-col"><span className="font-black uppercase tracking-tighter text-white">VMaRK</span><span className="text-[7px] font-bold text-gray-500 uppercase tracking-widest leading-tight">Security and Facility Management</span></div>
              </div>
            </div>
            <div><h4 className="font-bold text-white mb-6 uppercase text-xs tracking-widest">Solutions</h4><ul className="space-y-4 text-sm text-gray-500">{services.slice(0, 4).map(s => <li key={s.title}><a href="#" className="hover:text-white transition-colors">{s.title}</a></li>)}</ul></div>
            <div><h4 className="font-bold text-white mb-6 uppercase text-xs tracking-widest">Company</h4><ul className="space-y-4 text-sm text-gray-500"><li><a href="#" className="hover:text-white transition-colors">About VMaRK</a></li><li><button onClick={() => setIsCareerOpen(true)} className="hover:text-white transition-colors font-semibold">Careers</button></li></ul></div>
            <div><h4 className="font-bold text-white mb-6 uppercase text-xs tracking-widest">Compliance</h4><div className="flex flex-wrap gap-2">{['ISO Certified', 'PSARA Approved'].map(tag => <span key={tag} className="px-3 py-1 bg-white/5 border border-white/5 rounded text-[10px] font-bold text-gray-400 uppercase tracking-tighter">{tag}</span>)}</div></div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4"><p className="text-[10px] text-gray-600 font-bold uppercase tracking-widest">© 2024 VMaRK Security & Facility Management. Protective Excellence.</p></div>
        </div>
      </footer>
    </div>
  );
};

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<VMarkApp />);
}
