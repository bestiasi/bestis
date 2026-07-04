/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Globe, 
  Menu, 
  X, 
  ArrowRight, 
  FileText, 
  GraduationCap, 
  HandCoins,
  Users, 
  Mail, 
  Instagram, 
  Facebook, 
  Linkedin,
  Play,
  Music2,
  ChevronDown,
  Calendar,
  HelpCircle,
  CheckCircle2,
  Award,
  Download,
  Send,
  ArrowLeft,
  Building2,
  Quote
} from 'lucide-react';

import { translations, Language } from './translations';

import logoBest from './assets/SiglaBestColor.png';
import logoIasiBest from './assets/BestIasiSince200.png'
import proveitLogo from './assets/proveitLogo.png';
import coursesLogo from './assets/coursesLogo.png';
import bisLogo from './assets/bisLogo.png';

export default function App() {
  const [lang, setLang] = useState<Language>('ro');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [currentRoute, setCurrentRoute] = useState<string>('home');

  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (
        hash === '' || 
        hash === '#/' || 
        hash === '#' || 
        hash.startsWith('#about') || 
        hash.startsWith('#projects') || 
        hash.startsWith('#board') || 
        hash.startsWith('#departments') || 
        hash.startsWith('#roadmap') || 
        hash.startsWith('#impact') || 
        hash.startsWith('#contact')
      ) {
        setCurrentRoute('home');
        if (hash.startsWith('#') && hash.length > 1) {
          const id = hash.slice(1);
          const el = document.getElementById(id);
          if (el) {
            setTimeout(() => {
              el.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }
        }
      } else if (hash === '#/burse' || hash === '#/scholarships') {
        setCurrentRoute('scholarships');
        window.scrollTo(0, 0);
      } else if (hash === '#/parteneri-strategici' || hash === '#/partners-strategic') {
        setCurrentRoute('partners-strategic');
        window.scrollTo(0, 0);
      } else if (hash === '#/parteneri-anuali' || hash === '#/partners-annual') {
        setCurrentRoute('partners-annual');
        window.scrollTo(0, 0);
      } else if (hash === '#/raport-activitate' || hash === '#/report') {
        setCurrentRoute('report');
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Run once on mount
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [lang]);

  const toggleLang = () => setLang(prev => prev === 'ro' ? 'en' : 'ro');

  return (
    <div className="min-h-screen bg-best-black selection:bg-best-yellow selection:text-best-black text-white">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-best-black/90 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div 
            className="flex items-center gap-3 group cursor-pointer" 
            onClick={() => {
              if (currentRoute === 'home') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                window.location.hash = '';
              } else {
                window.location.hash = '#/';
              }
            }}
          >
            {/* Logo BEST */}
            <img 
              src={logoBest} 
              alt="BEST Iasi Logo" 
              className="w-40 object-contain transition-transform group-hover:scale-105 pr-10" 
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm font-medium uppercase tracking-widest hover:text-best-yellow transition-colors">{t.nav.about}</a>
            <a href="#projects" className="text-sm font-medium uppercase tracking-widest hover:text-best-yellow transition-colors">{t.nav.projects}</a>
            <a href={lang === 'ro' ? '#/burse' : '#/scholarships'} className="text-sm font-medium uppercase tracking-widest hover:text-best-yellow transition-colors">{t.nav.scholarships}</a>
            
            {/* Partners Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setActiveDropdown('partners')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 text-sm font-medium uppercase tracking-widest hover:text-best-yellow transition-colors outline-none cursor-pointer">
                {t.nav.partners} <ChevronDown className="w-4 h-4" />
              </button>
              <AnimatePresence>
                {activeDropdown === 'partners' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full right-0 mt-2 w-56 bg-best-dark border border-white/10 p-2 shadow-2xl"
                  >
                    {['strategic', 'annual'].map((key) => {
                      const hash = key === 'strategic' 
                        ? (lang === 'ro' ? '#/parteneri-strategici' : '#/partners-strategic')
                        : (lang === 'ro' ? '#/parteneri-anuali' : '#/partners-annual');
                      return (
                        <a 
                          key={key} 
                          href={hash} 
                          className="block px-4 py-3 text-xs uppercase font-bold tracking-widest hover:bg-best-yellow hover:text-best-black transition-all"
                        >
                          {(t.partners as any)[key]}
                        </a>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a href={lang === 'ro' ? '#/raport-activitate' : '#/report'} className="text-sm font-medium uppercase tracking-widest hover:text-best-yellow transition-colors">{t.nav.report}</a>
            <a href="#contact" className="text-sm font-medium uppercase tracking-widest hover:text-best-yellow transition-colors">{t.nav.contact}</a>
            
            <button 
              onClick={toggleLang}
              className="flex items-center gap-2 p-2 hover:bg-white/10 rounded-full transition-colors"
              aria-label="Toggle language"
            >
              <Globe className="w-4 h-4 text-best-yellow" />
              <span className="text-sm font-bold uppercase">{lang === 'ro' ? 'EN' : 'RO'}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-white" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-best-black pt-24 px-6 md:hidden overflow-y-auto"
          >
            <div className="flex flex-col gap-6">
              <a href="#about" className="text-3xl font-display font-bold uppercase" onClick={() => setIsMenuOpen(false)}>
                {t.nav.about}
              </a>
              <a href="#projects" className="text-3xl font-display font-bold uppercase" onClick={() => setIsMenuOpen(false)}>
                {t.nav.projects}
              </a>
              <a href={lang === 'ro' ? '#/burse' : '#/scholarships'} className="text-3xl font-display font-bold uppercase" onClick={() => setIsMenuOpen(false)}>
                {t.nav.scholarships}
              </a>
              <a href={lang === 'ro' ? '#/parteneri-strategici' : '#/partners-strategic'} className="text-3xl font-display font-bold uppercase" onClick={() => setIsMenuOpen(false)}>
                {t.partners.strategic}
              </a>
              <a href={lang === 'ro' ? '#/parteneri-anuali' : '#/partners-annual'} className="text-3xl font-display font-bold uppercase" onClick={() => setIsMenuOpen(false)}>
                {t.partners.annual}
              </a>
              <a href={lang === 'ro' ? '#/raport-activitate' : '#/report'} className="text-3xl font-display font-bold uppercase" onClick={() => setIsMenuOpen(false)}>
                {t.nav.report}
              </a>
              <a href="#contact" className="text-3xl font-display font-bold uppercase" onClick={() => setIsMenuOpen(false)}>
                {t.nav.contact}
              </a>
              <button 
                onClick={() => { toggleLang(); setIsMenuOpen(false); }}
                className="flex items-center gap-4 text-2xl font-display font-bold uppercase text-best-yellow mt-4"
              >
                <Globe className="w-6 h-6" />
                {lang === 'ro' ? 'English' : 'Română'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content Areas based on currentRoute */}
      <AnimatePresence mode="wait">
        {currentRoute === 'home' && (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
              <div className="absolute top-1/4 -right-20 w-96 h-96 bg-best-yellow/10 rounded-full blur-[100px]" />
              <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-white/5 rounded-full blur-[100px]" />
              
              <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <span className="inline-block px-3 py-1 bg-best-yellow text-best-black font-bold text-xs uppercase tracking-widest mb-6">
                      EST. 2000
                    </span>
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold leading-[0.9] tracking-tighter mb-8 bg-gradient-to-r from-white to-white/50 bg-clip-text text-transparent">
                      {t.hero.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-white/60 max-w-2xl font-light mb-12">
                      {t.hero.subtitle}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button onClick={() => window.open("https://recrutari.bestis.ro", "_blank")} className="group px-8 py-4 bg-best-yellow text-best-black font-display font-bold text-lg uppercase tracking-tight flex items-center justify-center gap-3 hover:bg-white transition-all transform hover:-translate-y-1">
                        {t.hero.cta}
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </button>
                      <a href="#about" className="px-8 py-4 border border-white/20 hover:border-white transition-colors font-display font-bold text-lg uppercase tracking-tight text-center">
                        {t.nav.about}
                      </a>
                    </div>
                  </motion.div>
                </div>
              </div>

              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                <ChevronDown className="w-8 h-8 opacity-30" />
              </div>
            </section>

            {/* About Us Section */}
            <section id="about" className="py-24 relative">
              <div className="container mx-auto px-6">
                <h2 className="text-5xl md:text-8xl font-display font-bold uppercase mb-16 tracking-tighter">
                  {t.about.title}
                </h2>
                <div className="grid md:grid-cols-2 gap-12">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-8 border border-white/10 bg-white/5"
                  >
                    <h3 className="text-2xl font-display font-bold text-best-yellow mb-4 uppercase">
                      {t.about.historyTitle}
                    </h3>
                    <p className="text-white/60 leading-relaxed italic">
                      {t.about.historyText}
                    </p>
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="p-8 border border-white/10 hover:border-best-yellow/30 transition-colors"
                  >
                    <h3 className="text-2xl font-display font-bold text-best-yellow mb-4 uppercase">
                      {t.about.boardHistoryTitle}
                    </h3>
                    <p className="text-white/60 leading-relaxed">
                      {t.about.boardHistoryText}
                    </p>
                  </motion.div>
                </div>
              </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-24 border-t border-white/10 bg-best-dark/50">
              <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                  <div>
                    <span className="text-best-yellow font-bold uppercase tracking-widest text-xs mb-4 block">Impact & Events</span>
                    <h2 className="text-5xl md:text-7xl font-display font-bold uppercase leading-none">
                      {t.projects.title}
                    </h2>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { id: 'courses', data: t.projects.courses, color: 'bg-best-yellow', link: 'https://www.best.eu.org/courses/welcome.jsp', image: coursesLogo },
                    { id: 'symposium', data: t.projects.symposium, color: 'bg-best-yellow', link: 'https://symposium.bestis.ro/', image: bisLogo},
                    { id: 'proveit', data: t.projects.proveit, color: 'bg-best-yellow', link: 'https://proveit.bestis.ro/', image: proveitLogo},
                  ].map((proj, i) => (
                    <motion.div
                      key={proj.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="group relative h-[400px] bg-best-black border border-white/5 overflow-hidden p-8 flex flex-col justify-end"
                    >
                      <img 
                        src={proj.image} 
                        alt={proj.data.name} 
                        // w-72 face imaginea mult mai mare. mx-auto o centrează, mb-auto o împinge sus.
                        className="w-72 mx-auto object-contain transition-transform group-hover:scale-105 mb-auto"
                        style={{
                          // Primul gradient (orizontal): Transparent -> Clar (5%) -> Clar (95%) -> Transparent
                          WebkitMaskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent), linear-gradient(to bottom, transparent, black 5%, black 95%, transparent)',
                          maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent), linear-gradient(to bottom, transparent, black 5%, black 95%, transparent)',
                          
                          // Asta forțează cele două gradiente să se intersecteze, creând o mască clară în mijloc și blurată doar pe perimetru
                          WebkitMaskComposite: 'source-in',
                          maskComposite: 'intersect',
                        }}
                      />
                      <div className={`absolute top-0 right-0 w-32 h-32 ${proj.color} opacity-10 group-hover:opacity-20 transition-opacity blur-3xl`} />
                      <div className={`w-8 h-1 mb-8 ${proj.color}`} />
                      <h3 className="text-2xl font-display font-bold mb-4 uppercase tracking-tight">
                        {proj.data.name}
                      </h3>
                      <p className="text-sm text-white/50 leading-relaxed group-hover:text-white/80 transition-colors">
                        {proj.data.desc}
                      </p>
                      <a target="_blank" rel="noopener noreferrer" href={proj.link}>
                        <div className="mt-8 flex items-center gap-2 text-xs font-bold text-best-yellow uppercase tracking-widest opacity-100 md:opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 cursor-pointer">
                          Learn more <ArrowRight className="w-3 h-3" />
                        </div>
                      </a>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* Departments Section */}
            <section id="departments" className="py-24 bg-best-black relative">
              <div className="container mx-auto px-6">
                <div className="flex flex-col items-center text-center mb-16">
                  <h2 className="text-5xl md:text-7xl font-display font-bold uppercase mb-6 tracking-tighter">
                    {t.departments.title}
                  </h2>
                  <div className="w-24 h-2 bg-best-yellow" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                    { id: 'pr', data: t.departments.pr, icon: Globe },
                    { id: 'hr', data: t.departments.hr, icon: Users },
                    { id: 'it', data: t.departments.it, icon: FileText },
                    { id: 'fr', data: t.departments.fr, icon: Mail },
                  ].map((dept, i) => (
                    <motion.div
                      key={dept.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="group border border-white/5 bg-best-dark/50 hover:bg-best-yellow transition-all duration-500 overflow-hidden"
                    >
                      {/* Image Slot */}
                      <div className="aspect-video bg-white/5 grayscale group-hover:grayscale-0 transition-all overflow-hidden relative">
                        <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-40">
                          <dept.icon className="w-12 h-12 text-white group-hover:text-best-black" />
                        </div>
                        <img 
                          src={`https://images.unsplash.com/photo-${dept.id === 'it' ? '1517694712202-14dd9538aa97' : dept.id === 'pr' ? '1557804506-669a67965ba0' : dept.id === 'hr' ? '1521737711867-e3b97375f902' : '1553729459-efe14ef6055d'}?auto=format&fit=crop&q=80&w=800`} 
                          alt={dept.data.name}
                          className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      
                      <div className="p-8">
                        <div className="mb-6 inline-block p-4 bg-best-black group-hover:bg-white transition-colors">
                          <dept.icon className="w-8 h-8 text-best-yellow group-hover:text-best-black" />
                        </div>
                        <h3 className="text-xl font-display font-bold mb-4 uppercase group-hover:text-best-black transition-colors">
                          {dept.data.name}
                        </h3>
                        <p className="text-sm text-white/50 leading-relaxed group-hover:text-black/70 transition-colors">
                          {dept.data.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* The Board Section */}
            <section id="board" className="py-24 bg-best-dark">
              <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
                  <div>
                    <span className="text-best-yellow font-bold uppercase tracking-widest text-xs mb-4 block">Leadership</span>
                    <h2 className="text-5xl md:text-7xl font-display font-bold uppercase leading-none">
                      {(t as any).board.title}
                    </h2>
                  </div>
                </div>

                {/* Board Members Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-24">
                  {[
                    { role: t.board.role.president, name: 'Nicu' },
                    { role: t.board.role.tresurer, name: 'Tibi' },
                    { role: t.board.role.secretary, name: 'Grigore' },
                    { role: 'VP HR', name: 'Urmeaza de pus' },
                    { role: 'VP PR', name: 'poze mai sus' },
                  ].map((member, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="group"
                    >
                      <div className="aspect-[3/4] bg-white/5 border border-white/10 mb-4 overflow-hidden relative">
                        <img 
                          src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${member.name}`} 
                          alt={member.name}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all scale-110 group-hover:scale-100"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-best-yellow/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <h4 className="font-display font-bold uppercase text-best-yellow text-sm leading-tight">{member.role}</h4>
                      <p className="text-white font-bold">{member.name}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Our Gallery */}
                <div>
                  <h3 className="text-2xl font-display font-bold uppercase border-l-4 border-best-yellow pl-4 mb-12">
                    {(t as any).board.gallery}
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                      <motion.div
                        key={item}
                        whileHover={{ scale: 1.02 }}
                        className="aspect-square bg-white/5 overflow-hidden filter grayscale hover:grayscale-0 transition-all cursor-crosshair border border-white/10"
                      >
                        <img 
                          src={`https://images.unsplash.com/photo-${1500000000000 + item * 1000}?auto=format&fit=crop&q=80&w=800`} 
                          alt="Gallery item"
                          className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity"
                          referrerPolicy="no-referrer"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Roadmap Section */}
            <section id="roadmap" className="py-32 relative bg-best-black overflow-hidden border-t border-white/5">
              <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white rounded-full animate-pulse" />
              </div>
              
              <div className="container mx-auto px-6 relative">
                <div className="text-center mb-32">
                  <h2 className="text-5xl md:text-8xl font-display font-black uppercase tracking-tighter mb-4 italic">
                    {(t as any).roadmap?.title}
                  </h2>
                  <div className="w-24 h-2 bg-best-yellow mx-auto" />
                </div>

                <div className="relative max-w-4xl mx-auto">
                  {/* Roadmap Line */}
                  <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/20 -translate-x-1/2 hidden md:block" />

                  <div className="space-y-40">
                    {[
                      { type: 'mission', data: (t as any).roadmap?.mission, icon: ArrowRight },
                      { type: 'vision', data: (t as any).roadmap?.vision, icon: Globe },
                      { type: 'values', data: (t as any).roadmap?.values, icon: Users },
                    ].map((item, i) => (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "circOut" }}
                        className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-16 group`}
                      >
                        <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                          <div className="p-10 border border-white/5 bg-white/5 backdrop-blur-sm group-hover:bg-best-yellow group-hover:text-best-black transition-all duration-500 transform group-hover:-translate-y-2">
                            <h3 className="text-3xl font-display font-black uppercase mb-6 italic group-hover:text-best-black text-best-yellow">
                              {item.data?.split(':')[0]}
                            </h3>
                            <p className="text-2xl font-light italic leading-relaxed">
                              {item.data?.split(':')[1]}
                            </p>
                          </div>
                        </div>
                        
                        <div className="relative z-10 w-24 h-24 bg-best-black border-4 border-best-yellow rounded-full flex items-center justify-center text-best-yellow group-hover:bg-best-yellow group-hover:text-best-black transition-all duration-500 transform group-hover:rotate-[360deg]">
                          <item.icon className="w-12 h-12" />
                        </div>

                        <div className="flex-1" />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Impact Section */}
            <section id="impact" className="py-16 bg-best-yellow text-best-black overflow-hidden relative border-y border-best-black">
              <div className="container mx-auto px-0 relative z-10">
                <div className="max-w-4xl mb-16">
                  <h2 className="text-7xl md:text-9xl font-display font-black uppercase tracking-tighter mb-8 italic leading-[0.8]">
                    {(t as any).impact?.title}
                  </h2>
                  <p className="text-4xl font-light italic uppercase tracking-tight max-w-2xl text-best-black/80">
                    {(t as any).impact?.subtitle}
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-0 bg-best-black border border-best-black">
                  {[
                    { id: 'students', data: (t as any).impact?.students, icon: GraduationCap },
                    { id: 'university', data: (t as any).impact?.university, icon: Globe },
                    { id: 'partners', data: (t as any).impact?.partners, icon: Users },
                  ].map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.6 }}
                      className="bg-best-black text-white p-10 group hover:bg-white hover:text-best-black transition-all duration-700 min-h-[500px] flex flex-col justify-between"
                    >
                      <div>
                        <item.icon className= "w-20 h-20 text-best-yellow mb-20 group-hover:scale-125 transition-transform duration-500 origin-left" />
                        <h3 className="text-5xl font-display font-black uppercase mb-10 italic tracking-tighter leading-none group-hover:text-best-black">
                          {item.data?.title}
                        </h3>
                      </div>
                      <p className="text-2xl opacity-60 font-light italic leading-relaxed group-hover:opacity-100 transition-opacity">
                        {item.data?.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>

              </div>
            </section>

            {/* Formular 3.5% */}
            <section id="donationform" className="py-24 bg-best-dark relative overflow-hidden">
              <div className="container mx-auto px-6">
                {/* Schimbat grid-ul pentru a genera matricea 2x2 direct */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-5 items-stretch">
                  
                  {/* 1. STÂNGA SUS: Iconița (Rămâne neschimbată ca aspect) */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative aspect-square md:aspect-video bg-best-yellow flex items-center justify-center"
                  >
                    <HandCoins className="w-32 h-32 text-best-black" />
                    <div className="absolute top-4 left-4 text-best-black font-display font-bold text-xl uppercase">Donation</div>
                  </motion.div>

                  {/* 2. DREAPTA SUS: Titlul și Bullet Points */}
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col justify-center"
                  >
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 uppercase leading-none text-white">
                      {t.donationform.title}
                    </h2>
                  </motion.div>

                  {/* 3. STÂNGA JOS: Textul descriptiv */}
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <p className="text-lg md:text-xl text-white/70 leading-relaxed font-light">
                      {t.donationform.desc}
                    </p>
                  </motion.div>

                  {/* 4. DREAPTA JOS: Butonul CTA mare (Simetric cu iconița din stânga sus) */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="flex"
                  >
                    <a 
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://redirectioneaza.ro/best-iasi/" 
                      className="w-full aspect-square md:aspect-video bg-best-yellow hover:bg-white text-best-black flex flex-col items-center justify-center gap-4 transition-colors duration-300 group p-6 text-center"
                    >
                      <span className="font-display font-bold text-xl md:text-2xl uppercase tracking-widest">
                        {t.donationform.apply}
                      </span>
                      <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform duration-300" />
                    </a>
                  </motion.div>

                </div>
              </div>
            </section>

          </motion.div>
        )}

        {currentRoute === 'scholarships' && (
          <motion.div
            key="scholarships"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <ScholarshipsPage t={t} lang={lang} />
          </motion.div>
        )}

        {currentRoute === 'partners-strategic' && (
          <motion.div
            key="partners-strategic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <StrategicPartnersPage t={t} lang={lang} />
          </motion.div>
        )}

        {currentRoute === 'partners-annual' && (
          <motion.div
            key="partners-annual"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <AnnualPartnersPage t={t} lang={lang} />
          </motion.div>
        )}

        {currentRoute === 'report' && (
          <motion.div
            key="report"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <ReportPage t={t} lang={lang} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-best-yellow">
        <div className="container mx-auto px-6 text-best-black">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-5xl md:text-7xl font-display font-bold uppercase leading-none mb-12">
                {lang == 'ro' ? (<>Intra in<br/>Contact</>) : (<>Get in<br/>touch</>)}
              </h2>
              <div className="space-y-8">
                <a 
                  href="mailto:contact@bestis.ro"
                  className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-best-black flex items-center justify-center text-white">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs uppercase font-bold tracking-widest opacity-60">Email</div>
                    <div className="text-xs font-bold">contact@bestis.ro</div>
                  </div>
                </a>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-best-black flex items-center justify-center text-white">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs uppercase font-bold tracking-widest opacity-60">Address</div>
                    <div className="text-xs font-bold">Cămin T19, Aleea Profesor Gheorghe Alexa, Iași</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-best-black text-white p-10 flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-display font-bold mb-6">{lang == 'ro' ? 'Conectează-te cu noi' : 'Connect with us'}</h3>
                <p className="text-white/60 mb-10 max-w-sm">
                  { lang == 'ro' ?
                    'Urmărește-ne pe rețelele sociale pentru noutăți în timp real despre proiecte, evenimente și burse.' :
                    'Follow us on social media for real-time updates on projects, events, and scholarships.'
                  }
                </p>
                <div className="flex gap-6 mb-12">
                  <a target="_blank" href="https://www.instagram.com/bestiasi" className="p-3 bg-white/10 hover:bg-best-yellow hover:text-best-black transition-all">
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a target="_blank" href="https://www.facebook.com/bestiasi" className="p-3 bg-white/10 hover:bg-best-yellow hover:text-best-black transition-all">
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a target="_blank" href="https://www.linkedin.com/company/best-iasi" className="p-3 bg-white/10 hover:bg-best-yellow hover:text-best-black transition-all">
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a target="_blank" href="https://www.youtube.com/@BESTIasi" className="p-3 bg-white/10 hover:bg-best-yellow hover:text-best-black transition-all">
                    <Play className="w-6 h-6" />
                  </a>
                  <a target="_blank" href="https://www.tiktok.com/@best.iasi" className="p-3 bg-white/10 hover:bg-best-yellow hover:text-best-black transition-all">
                    <Music2 className="w-6 h-6" />
                  </a>
                </div>
              </div>
              <p className="text-xs uppercase tracking-widest font-bold opacity-30">
                BEST IASI - LOCAL BEST GROUP
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <img 
              src={logoIasiBest} 
              alt="BEST Iasi Logo" 
              className="w-40 object-contain transition-transform group-hover:scale-105 pr-0" 
            />
          <p className="text-sm text-white/40">
            {t.footer.rights}
          </p>
          <div className="flex gap-8 text-xs uppercase font-bold tracking-widest opacity-40">
            <a href="#" className="hover:opacity-100 transition-opacity">GDPR</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ScholarshipsPage({ t, lang }: { t: any; lang: string }) {
  const s = t.scholarships;
  const [formData, setFormData] = useState({ name: '', email: '', faculty: '', year: '1', motivation: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [hasActiveScholarships, setHasActiveScholarships] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', faculty: '', year: '1', motivation: '' });
    }, 4000);
  };

  return (
    <div className="pt-32 pb-24 text-white">
      {/* NOU: Butonul de test/previzualizare */}
      <div className="container mx-auto px-6 mb-8 flex justify-end">
        <button 
          onClick={() => setHasActiveScholarships(!hasActiveScholarships)}
          className="px-4 py-2 bg-white/10 hover:bg-best-yellow hover:text-best-black text-xs uppercase font-bold tracking-widest transition-all border border-white/20 rounded"
        >
          {hasActiveScholarships 
            ? (lang === 'ro' ? 'Vezi varianta actuala (In curand) | Butonul nu va fi aici cand site-ul va fi lansat' : 'See current version (Coming soon) | This button won\'t be here when the site will be launched')
            : (lang === 'ro' ? 'Previzualizeaza pagina completa | Butonul nu va fi aici cand site-ul va fi lansat' : 'Preview full page | This button won\'t be here when the site will be launched')
          }
        </button>
      </div>
      {/* Page Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-best-yellow/5 rounded-full blur-[120px]" />
        <div className="container mx-auto px-6 relative z-10">
          <a href="#/" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-white/50 hover:text-best-yellow transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> {lang === 'ro' ? 'Înapoi la Acasă' : 'Back to Home'}
          </a>
          <h1 className="text-5xl md:text-8xl font-display font-black uppercase tracking-tighter mb-6 leading-none">
            {s.title}
          </h1>
          <p className="text-xl md:text-2xl text-white/60 max-w-3xl font-light">
            {s.description}
          </p>
        </div>
      </section>

      {!hasActiveScholarships ? (
        <section className="py-24 border-t border-white/5">
          <div className="container mx-auto px-6 text-center max-w-2xl">
            <div className="inline-block p-4 bg-best-yellow/10 text-best-yellow rounded-full mb-6 animate-pulse">
              <Calendar className="w-12 h-12" />
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold uppercase mb-4 tracking-tight">
              {lang === 'ro' ? 'Bursele BEST urmează în curând!' : 'BEST Scholarships are coming soon!'}
            </h2>
            <p className="text-white/60 text-lg font-light leading-relaxed mb-8">
              {lang === 'ro' 
                ? 'În acest moment nu avem sesiuni de burse active. Lucrăm intens la detalii, iar platforma de înscrieri se va deschide în perioada următoare. Apasă pe butonul de previzualizare de mai sus pentru a vedea cum va arăta pagina când dăm startul!'
                : 'There are currently no active scholarship sessions. We are working hard on the details, and the application platform will open soon. Click the preview button above to see what the page will look like when we launch!'}
            </p>
          </div>
        </section>
      ) : (
      <>
      {/* Criteria & Info */}
      <section className="py-16 border-t border-white/5 bg-best-dark/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-display font-bold uppercase mb-12 tracking-tight text-best-yellow italic">
            {s.criteriaTitle}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {s.criteria.map((item: string, i: number) => (
              <div key={i} className="p-8 bg-white/5 border border-white/10 hover:border-best-yellow/35 transition-all group duration-300 rounded-lg backdrop-blur-sm">
                <div className="w-12 h-12 rounded-full bg-best-yellow/10 flex items-center justify-center text-best-yellow mb-6 group-hover:bg-best-yellow group-hover:text-best-black transition-colors duration-300">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <p className="text-white/80 leading-relaxed font-light text-sm">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline / Calendar */}
      <section className="py-20 border-t border-white/5">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-display font-bold uppercase mb-16 tracking-tight text-center italic">
            {s.calendarTitle}
          </h2>
          <div className="max-w-3xl mx-auto relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />
            
            <div className="space-y-12">
              {s.calendar.map((item: any, i: number) => (
                <div key={i} className={`flex flex-col md:flex-row items-start ${i % 2 === 0 ? 'md:flex-row-reverse' : ''} relative`}>
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-best-yellow rounded-full -translate-x-1/2 border-4 border-best-black z-10" />
                  
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                    <div className={`p-6 bg-white/5 border border-white/5 rounded-lg group hover:border-best-yellow/30 transition-all duration-300 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <span className="inline-block px-3 py-1 bg-best-yellow/15 text-best-yellow font-bold text-xs uppercase tracking-wider mb-3 rounded">
                        {item.date}
                      </span>
                      <p className="text-white/80 leading-relaxed text-sm font-light">
                        {item.step}
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:block w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 border-t border-white/5 bg-best-dark/20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-display font-bold uppercase mb-16 tracking-tight text-center italic">
            {s.faqTitle}
          </h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {s.faq.map((item: any, i: number) => (
              <div key={i} className="p-8 bg-white/5 border border-white/5 hover:border-best-yellow/20 hover:bg-white/10 transition-all rounded-lg duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <HelpCircle className="w-6 h-6 text-best-yellow shrink-0 mt-1" />
                  <h3 className="font-display font-bold text-lg text-white">
                    {item.q}
                  </h3>
                </div>
                <p className="text-white/60 leading-relaxed text-sm pl-10 font-light">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto p-10 bg-white/5 border border-white/10 rounded-2xl relative overflow-hidden backdrop-blur-md">
            <div className="absolute top-0 right-0 w-64 h-64 bg-best-yellow/5 rounded-full blur-[80px]" />
            <h2 className="text-3xl font-display font-bold uppercase mb-8 tracking-tight text-center text-best-yellow italic">
              {s.formTitle}
            </h2>

            {formSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 border border-best-yellow bg-best-yellow/10 text-center rounded-lg"
              >
                <Award className="w-16 h-16 text-best-yellow mx-auto mb-4 animate-bounce" />
                <p className="text-xl font-bold text-white mb-2">{s.formSuccess}</p>
                <p className="text-sm text-white/60">{lang === 'ro' ? 'Vă vom contacta în curând pentru confirmarea detaliilor.' : 'We will contact you shortly to confirm the details.'}</p>
              </motion.div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6 relative z-10">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-bold text-white/50 mb-2">{s.formName}</label>
                  <input 
                    type="text" 
                    required 
                    value={formData.name}
                    onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full bg-best-black border border-white/10 p-4 focus:border-best-yellow focus:outline-none transition-colors text-white" 
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-bold text-white/50 mb-2">{s.formEmail}</label>
                    <input 
                      type="email" 
                      required 
                      value={formData.email}
                      onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full bg-best-black border border-white/10 p-4 focus:border-best-yellow focus:outline-none transition-colors text-white" 
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-bold text-white/50 mb-2">{s.formFaculty}</label>
                    <input 
                      type="text" 
                      required 
                      value={formData.faculty}
                      onChange={e => setFormData(prev => ({ ...prev, faculty: e.target.value }))}
                      className="w-full bg-best-black border border-white/10 p-4 focus:border-best-yellow focus:outline-none transition-colors text-white" 
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider font-bold text-white/50 mb-2">{s.formYear}</label>
                  <select 
                    value={formData.year}
                    onChange={e => setFormData(prev => ({ ...prev, year: e.target.value }))}
                    className="w-full bg-best-black border border-white/10 p-4 focus:border-best-yellow focus:outline-none transition-colors text-white"
                  >
                    <option value="1">{lang === 'ro' ? 'Anul I' : 'Year I'}</option>
                    <option value="2">{lang === 'ro' ? 'Anul II' : 'Year II'}</option>
                    <option value="3">{lang === 'ro' ? 'Anul III' : 'Year III'}</option>
                    <option value="4">{lang === 'ro' ? 'Anul IV' : 'Year IV'}</option>
                    <option value="5">{lang === 'ro' ? 'Master / Doctorat' : 'Master / PhD'}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider font-bold text-white/50 mb-2">{s.formMotivation}</label>
                  <textarea 
                    rows={4} 
                    required 
                    value={formData.motivation}
                    onChange={e => setFormData(prev => ({ ...prev, motivation: e.target.value }))}
                    className="w-full bg-best-black border border-white/10 p-4 focus:border-best-yellow focus:outline-none transition-colors text-white resize-none" 
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full py-4 bg-best-yellow text-best-black font-display font-bold uppercase tracking-widest hover:bg-white transition-colors flex items-center justify-center gap-3 cursor-pointer"
                >
                  {s.formSubmit} <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
      </>
      )}
    </div>
  );
}

function StrategicPartnersPage({ t, lang }: { t: any; lang: string }) {
  const sp = t.partnersStrategic;
  return (
    <div className="pt-32 pb-24 text-white">
      {/* Page Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-best-yellow/5 rounded-full blur-[120px]" />
        <div className="container mx-auto px-6 relative z-10">
          <a href="#/" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-white/50 hover:text-best-yellow transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> {lang === 'ro' ? 'Înapoi la Acasă' : 'Back to Home'}
          </a>
          <h1 className="text-5xl md:text-8xl font-display font-black uppercase tracking-tighter mb-6 leading-none">
            {sp.title}
          </h1>
          <p className="text-xl md:text-2xl text-white/60 max-w-3xl font-light">
            {sp.intro}
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 border-t border-white/5 bg-best-dark/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-display font-bold uppercase mb-12 tracking-tight text-center text-best-yellow italic">
            {sp.benefitsTitle}
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {sp.benefits.map((benefit: string, i: number) => (
              <div key={i} className="p-8 bg-white/5 border border-white/5 hover:border-best-yellow/30 transition-all rounded-lg flex gap-6 group duration-300">
                <div className="w-12 h-12 bg-best-yellow/10 rounded-lg flex items-center justify-center text-best-yellow shrink-0 group-hover:bg-best-yellow group-hover:text-best-black transition-colors duration-300">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg mb-2 text-white/90">{lang == 'ro' ? 'Beneficiu' : 'Benefit' } {i + 1}</h3>
                  <p className="text-white/60 leading-relaxed text-sm font-light">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Partners Grid */}
      <section className="py-16 border-t border-white/5">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-display font-bold uppercase mb-12 tracking-tight text-center text-best-yellow italic">
            {sp.currentTitle}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto items-center">
            {['Companie1', 'Companie2', 'Companie3', 'Companie4'].map((partner, i) => (
              <div key={i} className="h-40 bg-white/5 border border-white/5 hover:border-best-yellow/30 transition-all flex flex-col justify-center items-center rounded-lg p-6 group duration-300 cursor-pointer">
                <Building2 className="w-12 h-12 text-white/20 group-hover:text-best-yellow transition-colors mb-3" />
                <div className="text-lg font-display font-bold uppercase italic tracking-wider text-white/60 group-hover:text-white transition-colors">
                  {partner}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 border-t border-white/5 bg-best-dark/20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto p-12 border border-white/10 bg-white/5 text-center rounded-2xl relative overflow-hidden backdrop-blur-sm">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-best-yellow/5 rounded-full blur-[100px] pointer-events-none" />
            <h2 className="text-3xl md:text-5xl font-display font-bold uppercase mb-6 tracking-tight text-white">
              {sp.ctaTitle}
            </h2>
            <p className="text-white/60 leading-relaxed mb-8 max-w-xl mx-auto font-light">
              {sp.ctaText}
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-3 px-8 py-4 bg-best-yellow text-best-black font-display font-bold uppercase tracking-wider hover:bg-white transition-colors cursor-pointer"
            >
              {sp.ctaButton} <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

function AnnualPartnersPage({ t, lang }: { t: any; lang: string }) {
  const ap = t.partnersAnnual;
  return (
    <div className="pt-32 pb-24 text-white">
      {/* Page Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-best-yellow/5 rounded-full blur-[120px]" />
        <div className="container mx-auto px-6 relative z-10">
          <a href="#/" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-white/50 hover:text-best-yellow transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> {lang === 'ro' ? 'Înapoi la Acasă' : 'Back to Home'}
          </a>
          <h1 className="text-5xl md:text-8xl font-display font-black uppercase tracking-tighter mb-6 leading-none">
            {ap.title}
          </h1>
          <p className="text-xl md:text-2xl text-white/60 max-w-3xl font-light">
            {ap.intro}
          </p>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-16 border-t border-white/5 bg-best-dark/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-display font-bold uppercase mb-12 tracking-tight text-center text-best-yellow italic">
            {ap.packagesTitle}
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {ap.packages.map((pkg: any, i: number) => {
              const borderStyles = i === 0 
                ? 'border-best-yellow/30 hover:border-best-yellow bg-best-yellow/5' 
                : i === 1 
                ? 'border-white/10 hover:border-white/30 bg-white/5' 
                : 'border-white/5 hover:border-white/15 bg-white/5';
              return (
                <div key={i} className={`p-8 border ${borderStyles} transition-all rounded-lg flex flex-col justify-between group duration-300`}>
                  <div>
                    <span className={`inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider mb-6 rounded ${i === 0 ? 'bg-best-yellow text-best-black' : 'bg-white/10 text-white'}`}>
                      {pkg.name}
                    </span>
                    <p className="text-white/70 leading-relaxed text-sm mb-8 font-light">
                      {pkg.desc}
                    </p>
                  </div>
                  <div className="border-t border-white/10 pt-6 mt-auto">
                    <span className="text-xs uppercase font-bold tracking-widest text-white/40 group-hover:text-best-yellow transition-colors duration-300">
                      {lang === 'ro' ? 'Beneficii Event' : 'Event Benefits'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Annual Partners Grid */}
      <section className="py-16 border-t border-white/5">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-display font-bold uppercase mb-12 tracking-tight text-center text-best-yellow italic">
            {ap.currentTitle}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto items-center">
            {['Companie1', 'Companie2', 'Companie3', 'Companie4'].map((partner, i) => (
              <div key={i} className="h-32 bg-white/5 border border-white/5 hover:border-best-yellow/20 transition-all flex flex-col justify-center items-center rounded-lg p-6 group duration-300 cursor-pointer">
                <div className="text-lg font-display font-bold uppercase italic tracking-wider text-white/40 group-hover:text-white transition-colors duration-300">
                  {partner}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function ReportPage({ t, lang }: { t: any; lang: string }) {
  const rp = t.report;
  return (
    <div className="pt-32 pb-24 text-white">
      {/* Page Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-best-yellow/5 rounded-full blur-[120px]" />
        <div className="container mx-auto px-6 relative z-10">
          <a href="#/" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-white/50 hover:text-best-yellow transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> {lang === 'ro' ? 'Înapoi la Acasă' : 'Back to Home'}
          </a>
          <h1 className="text-5xl md:text-8xl font-display font-black uppercase tracking-tighter mb-6 leading-none">
            {rp.fullTitle}
          </h1>
          <p className="text-xl md:text-2xl text-white/60 max-w-3xl font-light">
            {rp.intro}
          </p>
        </div>
      </section>

      {/* Stats Dashboard */}
      <section className="py-16 border-t border-white/5 bg-best-dark/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-display font-bold uppercase mb-12 tracking-tight text-center text-best-yellow italic">
            {rp.statsTitle}
          </h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {rp.stats.map((stat: any, i: number) => (
              <div key={i} className="p-8 bg-best-black border border-white/10 hover:border-best-yellow/40 transition-colors duration-300 text-center rounded-lg">
                <div className="text-5xl font-display font-black text-best-yellow mb-3 italic tracking-tight">{stat.value}</div>
                <div className="text-xs uppercase tracking-widest text-white/50">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Call to Action */}
      <section className="py-16 border-t border-white/5 bg-best-dark/20">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto p-12 bg-white/5 border border-white/10 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8 backdrop-blur-sm">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white/5 rounded-xl flex items-center justify-center text-best-yellow">
                <FileText className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl uppercase mb-1">BEST Iași Report PDF</h3>
                <p className="text-xs text-white/40 uppercase tracking-wider">{lang === 'ro' ? 'Dimensiune: ~4.2 MB | Română & Engleză' : 'Size: ~4.2 MB | Romanian & English'}</p>
              </div>
            </div>
            <button className="group px-8 py-4 bg-white text-best-black font-display font-bold text-lg uppercase tracking-tight flex items-center justify-center gap-3 hover:bg-best-yellow transition-all cursor-pointer">
              <Download className="w-5 h-5" />
              {rp.download}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
