/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronRight, 
  Menu, 
  X, 
  Globe, 
  UserCheck, 
  GraduationCap, 
  Coins, 
  Phone, 
  Mail, 
  MapPin,
  ArrowUpRight,
  Plus,
  Minus
} from 'lucide-react';
import { translations, Language } from './constants';

const icons = {
  UserCheck: <UserCheck className="w-6 h-6" />,
  GraduationCap: <GraduationCap className="w-6 h-6" />,
  Coins: <Coins className="w-6 h-6" />,
};

export default function App() {
  const [lang, setLang] = useState<Language>('tc');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const [activeSection, setActiveSection] = useState('home');

  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: t.nav.home, id: 'home' },
    { label: t.nav.immigration.label, id: 'immigration', sub: t.nav.immigration.sub },
    { label: t.nav.education, id: 'education' },
    { label: t.nav.investment.label, id: 'investment', sub: t.nav.investment.sub },
    { label: t.nav.corporate.label, id: 'corporate', sub: t.nav.corporate.sub },
    { label: t.nav.overseas.label, id: 'overseas', sub: t.nav.overseas.sub },
    { label: t.nav.news, id: 'news' },
  ];

  return (
    <div id="home" className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="/logo.png" 
              alt="今日智聯 Neolink Logo" 
              className="h-10 w-auto"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <div key={item.id} className="relative group">
                <a 
                  href={`#${item.id}`}
                  onClick={() => setActiveSection(item.id)}
                  className={`text-sm font-semibold transition-all flex items-center gap-1 py-2 ${
                    activeSection === item.id ? 'text-indigo-600' : 'text-slate-600 hover:text-indigo-600'
                  }`}
                >
                  {item.label}
                  {item.sub && <ChevronRight className="w-3 h-3 rotate-90 opacity-40" />}
                </a>
                
                {/* Dropdown Menu */}
                {item.sub && (
                  <div className="absolute top-full left-0 mt-1 w-72 bg-white rounded-2xl shadow-2xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all translate-y-2 group-hover:translate-y-0 py-3 z-50">
                    {item.sub.map((subItem, idx) => (
                      <div key={idx} className="relative group/sub">
                        {typeof subItem === 'string' ? (
                          <a 
                            href="#" 
                            className="block px-6 py-2.5 text-sm text-slate-600 hover:text-indigo-600 hover:bg-slate-50 transition-colors font-medium"
                          >
                            {subItem}
                          </a>
                        ) : (
                          <>
                            <div className="flex items-center justify-between px-6 py-2.5 text-sm text-slate-600 hover:text-indigo-600 hover:bg-slate-50 transition-colors font-medium cursor-pointer">
                              <span>{subItem.label}</span>
                              <ChevronRight className="w-3 h-3" />
                            </div>
                            {/* 3rd Level Menu */}
                            <div className="absolute left-full top-0 ml-1 w-56 bg-white rounded-2xl shadow-2xl border border-slate-100 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all translate-x-2 group-hover/sub:translate-x-0 py-3">
                              {subItem.sub?.map((deepItem, dIdx) => (
                                <a 
                                  key={dIdx}
                                  href="#" 
                                  className="block px-6 py-2.5 text-sm text-slate-600 hover:text-indigo-600 hover:bg-slate-50 transition-colors font-medium"
                                >
                                  {typeof deepItem === 'string' ? deepItem : deepItem.label}
                                </a>
                              ))}
                            </div>
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* Highlight Indicator */}
                {activeSection === item.id && (
                  <motion.div 
                    layoutId="activeIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-indigo-600 rounded-full"
                  />
                )}
              </div>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <div className="relative group cursor-pointer">
              <div className="flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">
                <Globe className="w-4 h-4" />
                <span>{lang.toUpperCase()}</span>
              </div>
              <div className="absolute right-0 top-full mt-2 w-32 bg-white rounded-xl shadow-xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all py-2 scale-95 group-hover:scale-100">
                {(['tc', 'en', 'sc'] as Language[]).map((l) => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-slate-50 transition-colors ${lang === l ? 'text-indigo-600 font-bold' : 'text-slate-600'}`}
                  >
                    {l === 'tc' ? '繁體中文' : l === 'en' ? 'English' : '简体中文'}
                  </button>
                ))}
              </div>
            </div>
            <button className="bg-indigo-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-indigo-700 transition-all hover:shadow-lg active:scale-95">
              {t.nav.cta}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2 text-slate-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
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
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <div key={item.id} className="border-b border-slate-100 pb-2">
                  <a 
                    href={`#${item.id}`}
                    onClick={() => { setActiveSection(item.id); if(!item.sub) setIsMenuOpen(false); }}
                    className={`text-xl font-bold block py-2 ${activeSection === item.id ? 'text-indigo-600' : 'text-slate-900'}`}
                  >
                    {item.label}
                  </a>
                  {item.sub && (
                    <div className="pl-4 pb-2 flex flex-col gap-2 mt-1">
                      {item.sub.map((subItem, idx) => (
                        <div key={idx}>
                          {typeof subItem === 'string' ? (
                            <a 
                              href="#"
                              onClick={() => setIsMenuOpen(false)}
                              className="text-sm text-slate-500 font-medium py-1 block"
                            >
                              {subItem}
                            </a>
                          ) : (
                            <div className="flex flex-col gap-2">
                              <span className="text-sm text-slate-800 font-bold py-1 block border-l-2 border-indigo-200 pl-2">
                                {subItem.label}
                              </span>
                              <div className="pl-4 flex flex-col gap-2 border-l border-slate-100 ml-1">
                                {subItem.sub?.map((deepItem, dIdx) => (
                                  <a 
                                    key={dIdx}
                                    href="#"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-xs text-slate-400 font-medium py-1"
                                  >
                                    {typeof deepItem === 'string' ? deepItem : deepItem.label}
                                  </a>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="flex flex-wrap gap-4 pt-4">
                 {(['tc', 'en', 'sc'] as Language[]).map((l) => (
                  <button
                    key={l}
                    onClick={() => { setLang(l); setIsMenuOpen(false); }}
                    className={`px-4 py-2 rounded-lg border ${lang === l ? 'bg-indigo-600 text-white' : 'bg-slate-50 text-slate-600'}`}
                  >
                    {l === 'tc' ? '繁體' : l === 'en' ? 'EN' : '简体'}
                  </button>
                ))}
              </div>
              <button className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold text-lg mt-4 shadow-lg shadow-indigo-200">
                {t.nav.cta}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Hero Section */}
        <section className="relative pt-40 pb-24 overflow-hidden">
          {/* Background Decorations & Images */}
          <div className="absolute inset-0 -z-20 overflow-hidden">
             <img 
              src="https://images.unsplash.com/photo-1506351466238-e0279ef9471e?auto=format&fit=crop&q=80&w=2000" 
              alt="Hong Kong Skyline" 
              className="w-full h-full object-cover opacity-[0.03] scale-105"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-50/50 via-white to-white"></div>
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 -left-20 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl"></div>

          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 text-indigo-700 text-sm font-semibold mb-8 border border-indigo-100"
              >
                <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></div>
                {t.hero.badge}
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-tight mb-8"
              >
                {t.hero.title}
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-slate-600 leading-relaxed max-w-2xl mb-12"
              >
                {t.hero.description}
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
              >
                <button className="w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white rounded-full font-bold shadow-xl shadow-indigo-100 hover:bg-indigo-700 transition-all hover:-translate-y-1 active:scale-95 group flex items-center justify-center gap-2">
                  {t.hero.ctaPrimary}
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-full font-bold hover:bg-slate-50 transition-all active:scale-95">
                  {t.hero.ctaSecondary}
                </button>
              </motion.div>
            </div>

            {/* Hero Stats */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 p-8 bg-white/40 backdrop-blur-md rounded-3xl border border-white/60 shadow-2xl shadow-indigo-50"
            >
              {t.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center justify-center text-center border-slate-100 md:border-r last:border-r-0">
                  <span className="text-4xl font-extrabold text-indigo-600 mb-2">{stat.value}</span>
                  <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 bg-white relative">
          <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-slate-50 to-transparent"></div>
          <div className="max-w-7xl mx-auto px-6 relative">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-indigo-600 font-bold uppercase tracking-widest text-sm mb-4">Core Businesses</h2>
                <h3 className="text-4xl font-extrabold text-slate-900 tracking-tight">{t.nav.services}</h3>
              </div>
              <p className="text-slate-500 max-w-sm">香港本土全新服務品牌「今日智聯」，數十年海外服務經驗，無中間商全鏈路服務。</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {t.services.map((service, idx) => {
                const serviceImages = [
                  "https://images.unsplash.com/photo-1454165833767-027ff33026b8?auto=format&fit=crop&q=80&w=400",
                  "https://images.unsplash.com/photo-1523050335392-93851179ae09?auto=format&fit=crop&q=80&w=400",
                  "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=400"
                ];
                return (
                  <motion.div 
                    key={service.id}
                    whileHover={{ y: -8 }}
                    className="overflow-hidden rounded-[2.5rem] bg-slate-50 hover:bg-white transition-all shadow-sm hover:shadow-2xl hover:shadow-indigo-100 group border border-transparent hover:border-indigo-100"
                  >
                    <div className="h-48 overflow-hidden relative">
                      <img 
                        src={serviceImages[idx]} 
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-slate-900/10"></div>
                      <div className="absolute top-6 left-6 w-12 h-12 bg-white rounded-xl flex items-center justify-center text-indigo-600 shadow-lg group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                        {icons[service.icon as keyof typeof icons]}
                      </div>
                    </div>
                    <div className="p-10">
                      <h4 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h4>
                      <p className="text-slate-600 leading-relaxed mb-8">{service.desc}</p>
                      <div className="flex items-center gap-2 text-indigo-600 font-bold group/btn">
                        <span>{service.hook}</span>
                        <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 bg-slate-900 text-white overflow-hidden relative">
          {/* Subtle patterns */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,_rgba(var(--color-indigo-500),_0.15),_transparent)]"></div>
          </div>

          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <h2 className="text-indigo-400 font-bold uppercase tracking-widest text-sm mb-6">About Us</h2>
              <h3 className="text-5xl font-extrabold mb-8 leading-tight tracking-tight">{t.about.title}</h3>
              <p className="text-indigo-100/70 text-lg leading-relaxed mb-12">
                {t.about.content}
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="bg-white/5 p-6 rounded-3xl border border-white/10">
                  <div className="text-indigo-400 font-bold text-3xl mb-1">一手資源</div>
                  <div className="text-sm text-indigo-100/50">打破信息壁壘</div>
                </div>
                <div className="bg-white/5 p-6 rounded-3xl border border-white/10">
                  <div className="text-indigo-400 font-bold text-3xl mb-1">全程陪跑</div>
                  <div className="text-sm text-indigo-100/50">本地團隊對接</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="rounded-[3rem] overflow-hidden shadow-2xl relative aspect-[4/3] group">
                 <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000" 
                  alt="Modern Office" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-indigo-900/20 mix-blend-overlay"></div>
              </div>
              <div className="absolute -bottom-8 -left-8 bg-indigo-600 p-8 rounded-3xl shadow-xl hidden md:block max-w-[200px]">
                <div className="text-sm font-bold opacity-80 uppercase mb-2">Since 2016</div>
                <div className="text-xl font-bold">10+ Years Excellence</div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Cases */}
        <section id="news" className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-indigo-600 font-bold uppercase tracking-widest text-sm mb-4">Track Record</h2>
              <h3 className="text-4xl font-extrabold text-slate-900 mb-6">{lang === 'en' ? 'Success Stories' : '成功案例'}</h3>
              <p className="text-slate-500">已累計為2000+組客戶完成海外一站式需求解決方案，經驗深厚。</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {t.cases.map((item, idx) => {
                const caseImages = [
                  "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=400",
                  "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=400",
                  "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=400"
                ];
                return (
                  <div 
                    key={idx}
                    className="bg-white rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group overflow-hidden"
                  >
                    <div className="h-40 overflow-hidden relative">
                      <img 
                        src={caseImages[idx]} 
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-indigo-900/10"></div>
                      <span className="absolute top-4 left-4 px-3 py-1 rounded-lg bg-white/90 backdrop-blur-md text-indigo-600 text-xs font-bold shadow-sm">
                        {item.tag}
                      </span>
                    </div>
                    <div className="p-8">
                      <h4 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors uppercase tracking-tight">{item.title}</h4>
                      <p className="text-slate-600 mb-6 text-sm line-clamp-2">{item.desc}</p>
                      <div className="flex items-center gap-2 text-slate-400 font-medium text-sm group-hover:text-indigo-600 transition-colors">
                        <span>{lang === 'en' ? 'View Details' : '查看詳情'}</span>
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* News and Announcements */}
        <section id="news-list" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-indigo-600 font-bold uppercase tracking-widest text-sm mb-4">Latest Updates</h2>
                <h3 className="text-4xl font-extrabold text-slate-900 tracking-tight">{t.nav.news}</h3>
              </div>
              <a href="#" className="text-indigo-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
                {lang === 'en' ? 'View All News' : '查看所有新聞'}
                <ChevronRight className="w-5 h-5" />
              </a>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {t.news.map((item, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-6 p-6 rounded-3xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100 group cursor-pointer"
                >
                  <div className="hidden sm:flex flex-col items-center justify-center min-w-[80px] h-20 bg-slate-50 rounded-2xl border border-slate-100 group-hover:bg-white transition-colors">
                    <span className="text-sm font-bold text-slate-400">{item.date.split('-')[1]}月</span>
                    <span className="text-2xl font-black text-indigo-600">{item.date.split('-')[2]}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-2 py-0.5 rounded bg-indigo-50 text-indigo-600 text-[10px] font-bold uppercase tracking-wider">
                        {item.category}
                      </span>
                      <span className="sm:hidden text-xs text-slate-400 font-medium">{item.date}</span>
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors line-clamp-2">
                      {item.title}
                    </h4>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
               <h2 className="text-indigo-600 font-bold uppercase tracking-widest text-sm mb-4">Support</h2>
               <h3 className="text-4xl font-extrabold text-slate-900">常見問題 FAQ</h3>
            </div>

            <div className="space-y-4">
              {t.faq.map((item, idx) => (
                <div 
                  key={idx} 
                  className="border border-slate-100 rounded-2xl overflow-hidden bg-slate-50/50"
                >
                  <button 
                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
                  >
                    <span className="font-bold text-slate-900">{item.q}</span>
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-indigo-600 shadow-sm">
                      {activeFaq === idx ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>
                  <AnimatePresence>
                    {activeFaq === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                          {item.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section id="contact" className="py-24 px-6">
          <motion.div 
            whileInView={{ scale: [0.95, 1], opacity: [0, 1] }}
            className="max-w-7xl mx-auto bg-indigo-600 rounded-[3.5rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl shadow-indigo-200"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-400/20 rounded-full -ml-48 -mb-48 blur-3xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tight">準備好啟程香港了嗎？</h3>
              <p className="text-xl md:text-2xl text-indigo-100 mb-12 max-w-3xl mx-auto font-medium">
                立刻領取您的專屬海外方案，解鎖無中間商高性價比服務。本土團隊全程陪護，您的成功是我們唯一的標準。
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <button className="w-full sm:w-auto px-10 py-5 bg-white text-indigo-600 rounded-full font-bold text-lg hover:bg-slate-50 hover:shadow-xl transition-all hover:-translate-y-1 active:scale-95">
                   {t.nav.cta}
                </button>
                <div className="flex items-center gap-6">
                  <a href="#" className="flex items-center gap-2 text-indigo-50 font-bold hover:text-white transition-colors">
                    <Phone className="w-5 h-5" />
                    <span>WhatsApp</span>
                  </a>
                  <a href="#" className="flex items-center gap-2 text-indigo-50 font-bold hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                    <span>Email</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-100 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-8">
                <img 
                  src="/logo.png" 
                  alt="今日智聯 Neolink Logo" 
                  className="h-10 w-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-slate-500 mb-8 max-w-xs">
                數十載經驗積累，致力於打破信息壁壘。一站式高品質香港服務。
              </p>
              <div className="flex gap-4">
                {['Facebook', 'LinkedIn', 'Instagram', 'Twitter'].map(social => (
                  <div key={social} className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 transition-all cursor-pointer">
                    <span className="sr-only">{social}</span>
                    <Globe className="w-5 h-5" />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h5 className="font-bold text-slate-900 mb-8">{lang === 'en' ? 'Services' : '產品與服務'}</h5>
              <ul className="space-y-4">
                <li><a href="#" className="text-slate-500 hover:text-indigo-600 transition-colors">香港高才A類</a></li>
                <li><a href="#" className="text-slate-500 hover:text-indigo-600 transition-colors">進修移民方案</a></li>
                <li><a href="#" className="text-slate-500 hover:text-indigo-600 transition-colors">新投資計劃</a></li>
                <li><a href="#" className="text-slate-500 hover:text-indigo-600 transition-colors">企業海外出海</a></li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold text-slate-900 mb-8">{lang === 'en' ? 'Company' : '公司信息'}</h5>
              <ul className="space-y-4">
                <li><a href="#" className="text-slate-500 hover:text-indigo-600 transition-colors">關於我們</a></li>
                <li><a href="#" className="text-slate-500 hover:text-indigo-600 transition-colors">成功案例</a></li>
                <li><a href="#" className="text-slate-500 hover:text-indigo-600 transition-colors">聯絡我們</a></li>
                <li><a href="#" className="text-slate-500 hover:text-indigo-600 transition-colors">隱私政策</a></li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold text-slate-900 mb-8">{lang === 'en' ? 'Contact' : '聯絡方式'}</h5>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <MapPin className="w-5 h-5 text-indigo-600 shrink-0" />
                  <span className="text-sm text-slate-600 leading-relaxed">{t.footer.address}</span>
                </div>
                <div className="flex gap-4">
                  <Phone className="w-5 h-5 text-indigo-600 shrink-0" />
                  <span className="text-sm text-slate-600 leading-relaxed font-bold">{t.footer.phone}</span>
                </div>
                <div className="flex gap-4">
                  <Mail className="w-5 h-5 text-indigo-600 shrink-0" />
                  <span className="text-sm text-slate-600 leading-relaxed">{t.footer.email}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400 font-medium">
              <span className="px-2 py-1 bg-slate-50 rounded border border-slate-100">{t.footer.brn}</span>
              <span className="px-2 py-1 bg-slate-50 rounded border border-slate-100">{t.footer.crn}</span>
            </div>
            <div className="text-sm text-slate-400 font-medium text-center md:text-right">
              <p>{t.footer.copyright}</p>
              <div className="mt-2 flex items-center justify-center md:justify-end gap-6 underline underline-offset-4 decoration-slate-200">
                <a href="#" className="hover:text-slate-600">Privacy Policy</a>
                <a href="#" className="hover:text-slate-600">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

