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

import logoBest from './assets/logos/SiglaBestColor.png';
import logoIasiBest from './assets/logos/BestIasiSince200.png'
import proveitLogo from './assets/logos/proveitLogo.png';
import coursesLogo from './assets/logos/coursesLogo.png';
import bisLogo from './assets/logos/sigla_bis.png';

// Memories
import teamPhoto from './assets/gallery/poza_izvor.jpg';
import aniversarePhoto from './assets/gallery/aniversare.jpg';
import proveitPhoto from './assets/gallery/proveit_beneficii.jpg';
import secretSantaPhoto from './assets/gallery/secret_santa.jpg';
import recrutariPhoto from './assets/gallery/recrutari.jpg';
import festudiesPhoto from './assets/gallery/festudies.jpg';
import paxiPhoto from './assets/gallery/paxi.jpg';
import piatraNeamtPhoto from './assets/gallery/piatraNeamt.jpg';


// Board pictures
import presidentPicture from './assets/board/dani.webp';
import tresurerPicture from './assets/board/xenia.webp';
import secretaryPicture from './assets/board/radu.webp';
import vphrPicture from './assets/board/radu.webp';
import vpprPicture from './assets/board/anonymous.jpg';

// Department pictures
import prPFP from './assets/departament/pretzel.jpg';
import hrPFP from './assets/departament/castor.jpg';
import itPFP from './assets/departament/grigore.jpg';
import frPFP from './assets/departament/leo.jpg';

// Strategic Partners Logos
import ffffLogo from './assets/logos/strategici/friendsForFriends.svg';
import fdscLogo from './assets/logos/strategici/fdsc.png';
import brdLogo from './assets/logos/strategici/brd.jpg';
import fermadorLogo from './assets/logos/strategici/fermador.svg';
import ammaLogo from './assets/logos/strategici/amma.webp';

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
      } else if (hash == '#/proiecte' || hash == '#/all-projects') {
        setCurrentRoute('all-projects');
        window.scrollTo(0, 0);
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

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
            <a href={lang === 'ro' ? '#/proiecte' : '#/all-projects'} className="text-sm font-medium uppercase tracking-widest hover:text-best-yellow transition-colors">{t.nav.projects}</a>
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
              <a href={lang === 'ro' ? '#/proiecte' : '#/all-projects'} className="text-3xl font-display font-bold uppercase" onClick={() => setIsMenuOpen(false)}>
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
            <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-best-black">
                {/* Existing Background Ambient Glows */}
                <div className="absolute top-1/4 -right-20 w-96 h-96 bg-best-yellow/10 rounded-full blur-[100px] pointer-events-none z-0" />
                <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-white/5 rounded-full blur-[100px] pointer-events-none z-0" />

                {/* NEW: Blended Team Image (Right Side Bleed) */}
                <motion.div 
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="absolute top-0 right-0 w-full lg:w-7/12 h-full z-0 pointer-events-none overflow-hidden"
                >
                  {/* The Team Photo */}
                  <img
                    src={teamPhoto} // Replace with your image path
                    alt="BEST Team Members"
                    className="w-full h-full object-cover object-center opacity-40 lg:opacity-60 filter contrast-125"
                  />

                  {/* 1. Left-to-Right Gradient: Fades the left edge of the photo into the text */}
                  <div className="absolute inset-0 bg-gradient-to-r from-best-black via-best-black/60 to-transparent" />
                  
                  {/* 2. Bottom-to-Top Gradient: Fades the bottom into the next section */}
                  <div className="absolute inset-0 bg-gradient-to-t from-best-black via-transparent to-black/40" />

                  {/* 3. Top Fade: Softens the top edge near the navbar */}
                  <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-best-black to-transparent" />
                  
                </motion.div>

                {/* Content Container (z-10 ensures text sits above the blended image) */}
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
                      
                      {/* Added a subtle drop shadow to the text for extra legibility over the image */}
                      <h1 className="text-5xl md:text-6xl lg:text-8xl font-display font-bold leading-[0.9] tracking-tighter mb-8 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent drop-shadow-sm">
                        {t.hero.title}
                      </h1>
                      
                      <p className="text-xl md:text-2xl text-white/70 max-w-2xl font-light mb-12 drop-shadow-md">
                        {t.hero.subtitle}
                      </p>
                      
                      {/* Buton cu formular de preinscrieri sau cu site recrutari \/   */}
                      <div className="flex flex-col sm:flex-row gap-4">
                        <button 
                          onClick={() => window.open("https://docs.google.com/forms/d/1kMr0argoZSAAjltphzLk_hNpeHvUkD7X5DZEW51YrXw/viewform?usp=drivesdk&edit_requested=true", "_blank")} 
                          className="group px-8 py-4 bg-best-yellow text-best-black font-display font-bold text-lg uppercase tracking-tight flex items-center justify-center gap-3 hover:bg-white transition-all transform hover:-translate-y-1 shadow-lg"
                        >
                          {t.hero.cta}
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <a 
                          href="#about" 
                          className="px-8 py-4 border border-white/20 hover:border-white transition-colors font-display font-bold text-lg uppercase tracking-tight text-center backdrop-blur-sm bg-black/20"
                        >
                          {t.nav.about}
                        </a>
                      </div>
                    </motion.div>
                  </div>
                </div>

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-10">
                  <ChevronDown className="w-8 h-8 opacity-30" />
                </div>
              </section>

            {/* About Us Section */}
            <section id="about" className="py-24 relative">
              <div className="container mx-auto px-6">
                <h2 className="text-4xl md:text-7xl font-display font-bold uppercase mb-16 tracking-tighter">
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
                    <h2 className="text-4xl md:text-7xl font-display font-bold uppercase leading-none">
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
                          {lang === 'ro' ? 'Află detalii' : 'Learn more'} <ArrowRight className="w-3 h-3" />
                        </div>
                      </a>
                    </motion.div>
                  ))}
                </div>

                {/* BUTON: Afla mai multe */}
                <a
                  href={lang === 'ro' ? '#/proiecte' : '#/all-projects'}
                  className="group md:w-51 mt-5 px-6 py-3 border border-best-yellow/40 hover:border-best-yellow text-best-yellow font-display font-bold text-xs uppercase tracking-widest transition-all flex items-center gap-3 hover:bg-best-yellow hover:text-best-black"
                >
                  {lang === 'ro' ? 'Vezi toate proiectele' : 'See all projects'}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

              </div>
            </section>

            {/* Departments Section */}
            <section id="departments" className="py-24 bg-best-black relative">
              <div className="container mx-auto px-6">
                <div className="flex flex-col items-center text-center mb-16">
                  <h2 className="text-4xl md:text-7xl font-display font-bold uppercase mb-6 tracking-tighter">
                    {t.departments.title}
                  </h2>
                  <div className="w-24 h-2 bg-best-yellow" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                    { id: 'pr', data: t.departments.pr, icon: Globe     ,source: prPFP  },
                    { id: 'hr', data: t.departments.hr, icon: Users     ,source: hrPFP  },
                    { id: 'it', data: t.departments.it, icon: FileText  ,source: itPFP  },
                    { id: 'fr', data: t.departments.fr, icon: Mail      ,source: frPFP  },
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
                        </div>
                        <img 
                          src={dept.source} 
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
                    <h2 className="text-4xl md:text-7xl font-display font-bold uppercase leading-none">
                      {(t as any).board.title}
                    </h2>
                  </div>
                </div>

                {/* Board Members Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-24">
                  {[
                    { role: t.board.role.president, name: 'Daniel Diaconu', source: presidentPicture  },
                    { role: t.board.role.tresurer,  name: 'Xenia Miron',    source: tresurerPicture   },
                    { role: t.board.role.secretary, name: 'Stefan Radu',    source: secretaryPicture  },
                    { role: 'VP HR',                name: 'Stefan Radu',    source: vphrPicture       },
                    { role: 'VP PR',                name: 'Anonymous',      source: vpprPicture       },
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
                          src={member.source} 
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

                {/* Memories / Gallery Section */}
                <div>
                  <h3 className="text-4xl font-display font-bold uppercase border-l-4 border-best-yellow pl-4 mb-12">
                    {(t as any).board.gallery}
                  </h3>

                  {/* Grid-ul de poze */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { id: 1, source: teamPhoto},
                      { id: 2, source: aniversarePhoto},
                      { id: 3, source: paxiPhoto},
                      { id: 4, source: festudiesPhoto},
                      { id: 5, source: piatraNeamtPhoto},
                      { id: 6, source: recrutariPhoto},
                      { id: 7, source: proveitPhoto},
                      { id: 8, source: secretSantaPhoto},
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.02 }}
                        onClick={() => setSelectedImage(item.source)} // <-- Deschide imaginea la click
                        className="aspect-square bg-white/5 overflow-hidden filter grayscale hover:grayscale-0 transition-all cursor-zoom-in border border-white/10"
                      >
                        <img 
                          src={item.source} 
                          alt="Gallery item"
                          className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity"
                          referrerPolicy="no-referrer"
                        />
                      </motion.div>
                    ))}
                  </div>

                  {/* MODAL / LIGHTBOX (Apare doar când selectedImage nu este null) */}
                  <AnimatePresence>
                    {selectedImage && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)} // <-- Închide modalul la click ÎN AFARĂ
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-10 cursor-pointer"
                      >
                        {/* Butonul X - Poziționat în STÂNGA SUS */}
                        <button
                          onClick={() => setSelectedImage(null)} // <-- Închide modalul la click pe X
                          className="absolute top-6 left-6 z-10 p-3 bg-white/10 hover:bg-best-yellow hover:text-best-black rounded-full transition-all text-white cursor-pointer"
                          aria-label="Închide"
                        >
                          <X className="w-6 h-6" />
                        </button>

                        {/* Containerul Imaginii Mărite */}
                        <motion.div
                          initial={{ scale: 0.85, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0.85, opacity: 0 }}
                          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                          onClick={(e) => e.stopPropagation()} // <-- ÎMPIEDICĂ închiderea când dai click direct pe POZĂ
                          className="relative max-w-5xl max-h-[85vh] overflow-hidden border border-white/20 shadow-2xl cursor-default"
                        >
                          <img
                            src={selectedImage}
                            alt="Expanded Memory"
                            className="w-full h-full object-contain max-h-[85vh]"
                          />
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
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

                  <div className="space-y-20">
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

            {/* Core Pillar Section */}
            <section id="impact" className="py-16 bg-best-yellow text-best-black overflow-hidden relative border-y border-best-black">
              <div className="container mx-auto px-0 relative z-10">
                <div className="max-w-4xl mb-16 ml-5 mr-5">
                  <h2 className="text-5xl md:text-9xl font-display font-black uppercase tracking-tighter mb-8 italic leading-[0.8]">
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
                        <item.icon className= "w-20 h-20 text-best-yellow mb-10 group-hover:scale-125 transition-transform duration-500 origin-left" />
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

        {currentRoute === 'all-projects' && (
          <motion.div
            key="partners-strategic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <ProjectsPage t={t} lang={lang} />
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
      <section id="contact" className="py-16 bg-best-yellow overflow-hidden">
        <div className="container mx-auto px-6 md:px-50 text-best-black max-w-full">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            <div>
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold uppercase leading-none mb-12">
                {lang == 'ro' ? (<>Intra in<br/>Contact</>) : (<>Get in<br/>touch</>)}
              </h2>
              <div className="space-y-8">
                <a 
                  href="mailto:contact@bestis.ro"
                  className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-best-black flex items-center justify-center text-white shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs uppercase font-bold tracking-widest opacity-60">Email</div>
                    <div className="text-xs font-bold truncate">contact@bestis.ro</div>
                  </div>
                </a>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-best-black flex items-center justify-center text-white shrink-0">
                    <Users className="w-6 h-6" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs uppercase font-bold tracking-widest opacity-60">Address</div>
                    <div className="text-xs font-bold" onClick={() => window.open("https://maps.app.goo.gl/vwdRt9koSKjnvqhx6", "_blank")}>Cămin T19, Aleea Profesor Gheorghe Alexa, Iași</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Schimbat p-10 în p-6 pe mobil, p-10 pe desktop */}
            <div className="bg-best-black text-white p-6 md:p-10 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl md:text-3xl font-display font-bold mb-6">
                  {lang == 'ro' ? 'Conectează-te cu noi' : 'Connect with us'}
                </h3>
                <p className="text-white/60 mb-8 max-w-sm text-sm">
                  { lang == 'ro' ?
                    'Urmărește-ne pe rețelele sociale pentru noutăți în timp real despre proiecte, evenimente și burse.' :
                    'Follow us on social media for real-time updates on projects, events, and scholarships.'
                  }
                </p>

                {/* Corectat: flex-wrap și gap-3 pe mobil ca să nu spargă ecranul */}
                <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 mb-8">
                  <a target="_blank" href="https://www.instagram.com/bestiasi" className="p-3 bg-white/10 hover:bg-best-yellow hover:text-best-black transition-all">
                    <Instagram className="w-5 h-5 md:w-6 md:h-6" />
                  </a>
                  <a target="_blank" href="https://www.facebook.com/bestiasi" className="p-3 bg-white/10 hover:bg-best-yellow hover:text-best-black transition-all">
                    <Facebook className="w-5 h-5 md:w-6 md:h-6" />
                  </a>
                  <a target="_blank" href="https://www.linkedin.com/company/best-iasi" className="p-3 bg-white/10 hover:bg-best-yellow hover:text-best-black transition-all">
                    <Linkedin className="w-5 h-5 md:w-6 md:h-6" />
                  </a>
                  <a target="_blank" href="https://www.youtube.com/@BESTIasi" className="p-3 bg-white/10 hover:bg-best-yellow hover:text-best-black transition-all">
                    <Play className="w-5 h-5 md:w-6 md:h-6" />
                  </a>
                  <a target="_blank" href="https://www.tiktok.com/@best.iasi" className="p-3 bg-white/10 hover:bg-best-yellow hover:text-best-black transition-all">
                    <Music2 className="w-5 h-5 md:w-6 md:h-6" />
                  </a>
                </div>
              </div>
              <p className="text-[10px] md:text-xs uppercase tracking-widest font-bold opacity-30 mt-4">
                BEST IASI - LOCAL BEST GROUP
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 items-center gap-6 text-center">
          
          {/* LOGO */}
          <div className="flex justify-center md:justify-start">
            <img 
              src={logoIasiBest} 
              alt="BEST Iasi Logo" 
              className="w-40 object-contain transition-transform group-hover:scale-105" 
            />
          </div>

          {/* RIGHTS LOGO */}
          <p className="text-sm text-white/40">
            {t.footer.rights}
          </p>

          {/* GDPR */}
          <div className="flex justify-center md:justify-end gap-8 text-xs uppercase font-bold tracking-widest opacity-40">
            <a 
              href="https://docs.google.com/document/d/1UUIE_xTX4uwiUZ25O6p1tQD59dmHHb0Y3DKPbrUdNcA/edit?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-100 transition-opacity"
            >
              GDPR
            </a>
          </div>

        </div>
      </footer>
    </div>
  );
}

function ProjectsPage({ t, lang }: { t: any; lang: string }) {
  const [activeTab, setActiveTab] = useState('all');

  // Datele proiectelor integrate direct în componentă
  const projectsData = [
    // --- EVENTS External ---
    {
      id: 'courses',
      category: 'external',
      name: t?.projects?.courses?.name || 'BEST Seasonal Courses',
      desc: t?.projects?.courses?.desc || (lang === 'ro' ? 'Cursuri academice de vară și iarnă organizate în peste 80 de universități din Europa.' : 'Seasonal academic courses organized across Europe for technology students.'),
      color: 'bg-best-yellow',
      link: 'https://www.best.eu.org/courses/welcome.jsp',
      image: coursesLogo
    },
    {
      id: 'symposium',
      category: 'external',
      name: t?.projects?.symposium?.name || 'BEST Innovation Symposium',
      desc: t?.projects?.symposium?.desc || (lang === 'ro' ? 'Simpozion educațional dedicat inovației, aducând studenții și companiile la aceeași masă.' : 'Educational symposium bringing students and companies together for tech innovation.'),
      color: 'bg-best-yellow',
      link: 'https://symposium.bestis.ro/',
      image: bisLogo
    },
    {
      id: 'proveit',
      category: 'external',
      name: t?.projects?.proveit?.name || 'Prove IT',
      desc: t?.projects?.proveit?.desc || (lang === 'ro' ? 'Concurs intensiv de programare și dezvoltare software creat pentru studenții pasionați.' : 'Intensive software development and competitive programming contest.'),
      color: 'bg-best-yellow',
      link: 'https://proveit.bestis.ro/',
      image: proveitLogo
    },
    {
      id: 'recrutari',
      category: 'external',
      name: 'Recrutari',
      desc: t?.projects?.proveit?.desc || (lang === 'ro' ? 'Concurs intensiv de programare și dezvoltare software creat pentru studenții pasionați.' : 'Intensive software development and competitive programming contest.'),
      color: 'bg-best-yellow',
      link: 'https://recrutari.bestis.ro/',
      image: proveitLogo
    },

    // --- EVENTS Internal ---
    {
      id: 'mw',
      category: 'internal',
      name: 'Motivational Weekend',
      desc: lang === 'ro' 
        ? 'Sesiuni de formare internă axate pe Public Speaking, Project Management, Soft Skills și Leadership.' 
        : 'Internal training sessions focused on soft skills, public speaking, and project management.',
      color: 'bg-blue-500',
      link: '',
      image: logoBest
    },
    {
      id: 'aniversare',
      category: 'internal',
      name: 'Aniversare Interna',
      desc: lang === 'ro'
        ? 'Schimburi culturale internaționale de o săptămână cu alte grupuri locale BEST din Europa.'
        : 'One-week international cultural exchanges with other Local BEST Groups across Europe.',
      color: 'bg-emerald-500',
      link: '',
      image: logoBest
    },
    {
      id: 'rm',
      category: 'internal',
      name: 'Regional Meeting',
      desc: lang === 'ro'
        ? 'Schimburi culturale internaționale de o săptămână cu alte grupuri locale BEST din Europa.'
        : 'One-week international cultural exchanges with other Local BEST Groups across Europe.',
      color: 'bg-emerald-500',
      link: '',
      image: logoBest
    },

    // --- ARCHIVE (Evenimente vechi / Trecute) ---
    {
      id: 'ebec',
      category: 'archive',
      name: 'eBEC',
      desc: lang === 'ro'
        ? 'European BEST Engineering Competition — faza locală a celei mai mari competiții inginerești din Europa.'
        : 'European BEST Engineering Competition — local round of the European engineering contest.',
      color: 'bg-purple-500',
      link: '',
      image: logoBest
    },
    {
      id: 'ibec',
      category: 'archive',
      name: 'iBEC',
      desc: lang === 'ro'
        ? 'Ediții anterioare de maratoane de codare de 24 de ore organizate de grupul nostru local.'
        : 'Past editions of 24-hour coding marathons organized by our local group.',
      color: 'bg-orange-500',
      link: '',
      image: logoBest
    },
    {
      id: 'summer',
      category: 'archive',
      name: 'Summer Course',
      desc: lang === 'ro'
        ? 'Ediții anterioare de maratoane de codare de 24 de ore organizate de grupul nostru local.'
        : 'Past editions of 24-hour coding marathons organized by our local group.',
      color: 'bg-orange-500',
      link: '',
      image: logoBest
    },
    {
      id: 'jobshop',
      category: 'archive',
      name: 'JobShop',
      desc: lang === 'ro'
        ? 'Ediții anterioare de maratoane de codare de 24 de ore organizate de grupul nostru local.'
        : 'Past editions of 24-hour coding marathons organized by our local group.',
      color: 'bg-orange-500',
      link: '',
      image: logoBest
    },
    {
      id: 'cafenea',
      category: 'archive',
      name: 'Cafeneaua Inginerilor',
      desc: lang === 'ro'
        ? 'Ediții anterioare de maratoane de codare de 24 de ore organizate de grupul nostru local.'
        : 'Past editions of 24-hour coding marathons organized by our local group.',
      color: 'bg-orange-500',
      link: '',
      image: logoBest
    },
    {
      id: 'engage',
      category: 'archive',
      name: 'Engage',
      desc: lang === 'ro'
        ? 'Ediții anterioare de maratoane de codare de 24 de ore organizate de grupul nostru local.'
        : 'Past editions of 24-hour coding marathons organized by our local group.',
      color: 'bg-orange-500',
      link: '',
      image: logoBest
    }
  ];

  const categories = [
    { id: 'all', label: lang === 'ro' ? 'Toate' : 'All' },
    { id: 'external', label: lang === 'ro' ? 'Evenimente Externe' : 'External Events' },
    { id: 'internal', label: lang === 'ro' ? 'Evenimente Interne' : 'Internal Events' },
    { id: 'archive', label: lang === 'ro' ? 'Arhivă' : 'Archive' },
  ];

  const filteredProjects = activeTab === 'all' 
    ? projectsData 
    : projectsData.filter(p => p.category === activeTab);

  return (
    <div className="pt-32 pb-24 text-white">
      {/* Page Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-best-yellow/5 rounded-full blur-[120px]" />
        <div className="container mx-auto px-6 relative z-10">
          <a 
            href="#/" 
            className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-white/50 hover:text-best-yellow transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> 
            {lang === 'ro' ? 'Înapoi la Acasă' : 'Back to Home'}
          </a>
          <h1 className="text-5xl md:text-8xl font-display font-black uppercase tracking-tighter mb-6 leading-none">
            {lang === 'ro' ? 'Toate Proiectele' : 'All Projects'}
          </h1>
          <p className="text-xl md:text-2xl text-white/60 max-w-3xl font-light">
            {lang === 'ro'
              ? 'Descoperă toate inițiativele noastre: de la proiecte cu tradiție, la evenimente interne și arhiva activităților BEST Iași.'
              : 'Discover all our initiatives: from main flagship projects to internal events and full historical archives.'}
          </p>
        </div>
      </section>

      {/* Grid & Tabs Section */}
      <section className="py-12 border-t border-white/5">
        <div className="container mx-auto px-6">
          
          {/* Categorii / Meniu Tab-uri */}
          <div className="flex flex-wrap gap-3 mb-12 border-b border-white/10 pb-6">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-5 py-2.5 text-xs font-bold uppercase tracking-widest transition-all cursor-pointer ${
                  activeTab === cat.id
                    ? 'bg-best-yellow text-best-black'
                    : 'bg-white/5 hover:bg-white/10 text-white/70'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid Proiecte Animat */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredProjects.map((proj) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={proj.id}
                  className="group relative h-[420px] bg-best-black border border-white/5 overflow-hidden p-8 flex flex-col justify-end"
                >
                  {/* Badge Categorie */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 bg-white/10 text-white/80 backdrop-blur-sm">
                      {categories.find(c => c.id === proj.category)?.label || proj.category}
                    </span>
                  </div>

                  <img 
                    src={proj.image} 
                    alt={proj.name} 
                    className="w-64 mx-auto object-contain transition-transform group-hover:scale-105 mb-auto pt-8"
                    style={{
                      WebkitMaskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent), linear-gradient(to bottom, transparent, black 5%, black 95%, transparent)',
                      maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent), linear-gradient(to bottom, transparent, black 5%, black 95%, transparent)',
                      WebkitMaskComposite: 'source-in',
                      maskComposite: 'intersect',
                    }}
                  />

                  <div className={`absolute top-0 right-0 w-32 h-32 ${proj.color || 'bg-best-yellow'} opacity-10 group-hover:opacity-20 transition-opacity blur-3xl`} />
                  <div className={`w-8 h-1 mb-6 ${proj.color || 'bg-best-yellow'}`} />

                  <h3 className="text-2xl font-display font-bold mb-3 uppercase tracking-tight">
                    {proj.name}
                  </h3>
                  
                  <p className="text-sm text-white/50 leading-relaxed group-hover:text-white/80 transition-colors line-clamp-3">
                    {proj.desc}
                  </p>

                  {proj.link ? (
                    <a target="_blank" rel="noopener noreferrer" href={proj.link}>
                      <div className="mt-6 flex items-center gap-2 text-xs font-bold text-best-yellow uppercase tracking-widest cursor-pointer group-hover:translate-x-1 transition-transform">
                        {lang === 'ro' ? 'Află detalii' : 'Learn more'} <ArrowRight className="w-3 h-3" />
                      </div>
                    </a>
                  ) : (
                    <div className="mt-6 h-4" />
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>
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


        <section className="py-24 border-t border-white/5">
          <div className="container mx-auto px-6 text-center max-w-2xl">
            <div className="inline-block p-4 bg-best-yellow/10 text-best-yellow rounded-full mb-6 animate-pulse">
              <Calendar className="w-12 h-12" />
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold uppercase mb-4 tracking-tight">
              {lang === 'ro' ? 'Bursele BEST urmează în curând!' : 'BEST Scholarships are coming soon!'}
            </h2>
            <p className="text-white/60 text-lg font-light leading-relaxed mb-8">
              {lang === 'ro' ? s.inwork : s.inwork}
            </p>
          </div>
        </section>
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

      {/* Strategic Partners Grid */}
      <section className="py-16 border-t border-white/5">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-display font-bold uppercase mb-12 tracking-tight text-center text-best-yellow italic">
            {sp.currentTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-center">
            {[
              { name: 'Fundatia Friends for Friends', source: ffffLogo, link: 'https://www.ffff.ro/'},
              { name: 'Fundatia pentru Dezvoltarea Societatii Civile', source: fdscLogo, link: lang === 'ro' ? 'https://www.fdsc.ro/' : 'https://www.fdsc.ro/en/home/'},
              { name: 'BRD - Groupe Société Générale', source: brdLogo, link: lang === 'ro' ? 'https://www.brd.ro/' : 'https://www.brd.ro/en'},
              { name: 'Fermador', source: fermadorLogo, link: lang === 'ro' ? 'https://www.fermador.ro/' : 'https://www.fermador.ro/?lang=en'},
              { name: 'Amma Group', source: ammaLogo, link: 'https://www.amma-group.com/'}
            ].map((partner, i) => (
              <div key={i} className="h-50 md:h-80 bg-white/5 border border-white/5 hover:border-best-yellow/30 transition-all flex flex-col justify-center items-center rounded-lg p-6 group duration-300 cursor-pointer">
                <img
                  onClick={() => window.open(partner.link, "_blank")} 
                  src={partner.source}
                  alt={partner.name}
                  className="w-full  object-cover rounded-lg"
                  style={{
                    maskImage: `
                      linear-gradient(to right, transparent, black 15%, black 85%, transparent),
                      linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)
                    `,
                    WebkitMaskImage: `
                      linear-gradient(to right, transparent, black 5%, black 95%, transparent),
                      linear-gradient(to bottom, transparent, black 5%, black 95%, transparent)
                    `,
                    maskComposite: 'intersect',
                    WebkitMaskComposite: 'source-in', // Compatibilitate pentru Safari / Chrome mai vechi
                  }}
                >
                </img>
              </div>
            ))}
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

      {/* Annual Partners Grid */}
      <section className="py-16 border-t border-white/5">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-display font-bold uppercase mb-12 tracking-tight text-center text-best-yellow italic">
            {ap.currentTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-4xl mx-auto items-center">
            {[
              { name: 'BRD – Groupe Société Générale', source: brdLogo, link: lang === 'ro' ? 'https://www.brd.ro/' : 'https://www.brd.ro/en'}
            ].map((partner, i) => (
              <div key={i} className="h-50 md:h-130 bg-white/5 border border-white/5 hover:border-best-yellow/20 transition-all flex flex-col justify-center items-center rounded-lg p-6 group duration-300 cursor-pointer">
                <div className="text-lg font-display font-bold uppercase italic tracking-wider text-white/40 group-hover:text-white transition-colors duration-300">
                  <img
                  onClick={() => window.open(partner.link, "_blank")} 
                  src={partner.source}
                  alt={partner.name}
                  className="w-full  object-cover rounded-lg"
                  style={{
                    maskImage: `
                      linear-gradient(to right, transparent, black 15%, black 85%, transparent),
                      linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)
                    `,
                    WebkitMaskImage: `
                      linear-gradient(to right, transparent, black 5%, black 95%, transparent),
                      linear-gradient(to bottom, transparent, black 5%, black 95%, transparent)
                    `,
                    maskComposite: 'intersect',
                    WebkitMaskComposite: 'source-in', // Compatibilitate pentru Safari / Chrome mai vechi
                  }}
                >
                </img>
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
