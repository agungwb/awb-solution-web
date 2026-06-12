import { useState } from 'react';
import logoAwb from './assets/logo-awb/logo-awb-color-small.png'; //
import { 
  Cpu, 
  Layers, 
  Zap, 
  MapPin, 
  MessageSquare, 
  Phone, 
  ArrowRight, 
  Menu, 
  X,
  Play,
  Database,
  Bot,
  Send,
  Sparkles,
  User,
  GitPullRequest,
  Terminal,
  Network,
  ShieldCheck,
  Link,
  BarChart3,
  Activity
} from 'lucide-react';

// --- DATA KONTEN DUA BAHASA (EN / ID) ---
const content = {
  en: {
    navServices: "Services",
    navWorkflow: "Workflow",
    navAgents: "AI Agents",
    navWorkforce: "AI Workforce",
    navFeatures: "Features",
    navContact: "Contact",
    heroBadge: "The Future of Business Efficiency",
    heroTitle: "Leverage your business with AI & Automation",
    heroSubtitle: "Transform complex operational workflows into seamless, automated intelligence. ",
    heroSubtitle2: "AWB Solution helps you build custom AI systems that scale your business with AI and automation.",
    ctaPrimary: "Consult via WhatsApp",
    ctaSecondary: "Explore Solutions",
    statClients: "Enterprise Partners",
    statEfficiency: "Efficiency Boost",
    statAccuracy: "Automation Accuracy",
    servicesTitle: "Futuristic Solutions for Scale",
    servicesSub: "We architect a step-by-step intelligence pipeline tailored to evolve your current business.",
    service1Title: "Workflow Automation",
    service1Desc: "Eliminate repetitive daily manual tasks. We build robust pipelines that connect and synchronize your legacy systems with modern cloud infrastructure seamlessly.",
    service2Title: "AI Integration",
    service2Desc: "Inject autonomous intelligence. Deploy Large Language Models and custom neural networks tailored to reason, decide, and automate your internal operations.",
    service3Title: "Exponential Efficiency",
    service3Desc: "Reap the compound rewards. By linking automated data pipelines with neural agents, your company cuts latency by 40%, slashes overhead costs, and scales output at infinite speed.",
    workflowTitle: "Sophisticated Orchestration",
    workflowSub: "An abstract look at how our automated neural pipelines ingest, process, and execute enterprise tasks with zero friction.",
    agentTitle: "Deploy Intelligent Autonomous Agents to Outpace the Market",
    agentSub: "Integrate specialized AI bots into your workforce. From executing complex data multi-tasks to handling real-time customer negotiations—our agents work 24/7 with human-level reasoning.",
    agentCta: "Hire an AI Agent",
    workforceTitle: "Create your own AI agents to be your dedicated digital employees",
    workforceSub: "Scale your organization without human resource overhead. AWB Solution engineers bespoke AI employees equipped with granular, industry-specific skills tailored directly to your operational bottlenecks.",
    workforcePoint1: "Custom-trained on your internal company knowledge base.",
    workforcePoint2: "Equipped with specialized APIs to execute cross-platform tasks.",
    workforcePoint3: "Seamless integration into your current organizational chart.",
    featuresTitle: "Why Engineering Leaders Choose AWB",
    feature1: "Enterprise-Grade Security",
    feature1Sub: "We implement advanced encryption and isolated data environments to ensure your proprietary information remains confidential.",
    feature2: "Seamless API Integration",
    feature2Sub: "Our solutions bridge the gap between your legacy software and modern AI modules without disrupting daily operations.",
    feature3: "Scalable Architecture",
    feature3Sub: "Built on cloud-native technologies that grow effortlessly alongside your business demands and increasing workloads.",
    feature4: "24/7 Intelligent Monitoring",
    feature4Sub: "Continuous automated oversight that proactively detects anomalies and maintains system health without human intervention.",
    footerTitle: "Ready to accelerate your infrastructure?",
    footerSub: "Let's discuss how we can integrate automation into your current business ecosystem.",
    address: "Address",
  },
  id: {
    navServices: "Layanan",
    navWorkflow: "Alur Kerja",
    navAgents: "AI Agent",
    navWorkforce: "Tenaga Kerja AI",
    navFeatures: "Fitur",
    navContact: "Kontak",
    heroBadge: "Masa Depan Efisiensi Bisnis",
    heroTitle: "Leverage your business with AI & Automation",
    heroSubtitle: "Transformasikan alur kerja operasional yang kompleks menjadi kecerdasan otomatis yang mulus.",
    heroSubtitle2: "AWB Solution membantu Anda membangun sistem AI kustom yang menskalakan bisnis Anda dengan AI dan otomatisasi.",
    ctaPrimary: "Konsultasi via WhatsApp",
    ctaSecondary: "Pelajari Solusi",
    statClients: "Mitra Perusahaan",
    statEfficiency: "Peningkatan Efisiensi",
    statAccuracy: "Akurasi Otomatisasi",
    servicesTitle: "Solusi Futuristik untuk Skala Besar",
    servicesSub: "Kami merancang pipeline kecerdasan bertahap yang disesuaikan untuk merevolusi bisnis Anda saat ini.",
    service1Title: "Otomatisasi Alur Kerja",
    service1Desc: "Eliminasi tugas manual harian yang berulang. Kami membangun pipeline kokoh yang menghubungkan dan menyinkronkan sistem lama Anda dengan infrastruktur cloud secara mulus.",
    service2Title: "Integrasi AI",
    service2Desc: "Suntikkan kecerdasan otonom. Terapkan Large Language Models dan jaringan saraf tiruan kustom yang dirancang untuk bernalar, mengambil keputusan, dan mengotomatiskan operasional internal Anda.",
    service3Title: "Efisiensi Bisnis Eksponensial",
    service3Desc: "Nikmati hasil pelipatgandaan aset. Dengan menghubungkan pipeline data otomatis bersama neural agents, perusahaan Anda memangkas latensi kerja hingga 40%, meminimalkan biaya overhead, dan melipatgandakan output dengan kecepatan tak terbatas.", 
    workflowTitle: "Orkestrasi Canggih",
    workflowSub: "Gambaran abstrak bagaimana pipeline neural otomatis kami menerima, memproses, dan mengeksekusi tugas perusahaan tanpa hambatan.",
    agentTitle: "Employ AI Agent Bot to make your business more efficient",
    agentSub: "Integrasikan bot AI terspesialisasi ke dalam tim operasional Anda. Mulai dari mengeksekusi multi-tugas data yang kompleks hingga negosiasi pelanggan waktu nyata—agent kami bekerja 24/7 dengan penalaran setingkat manusia.",
    agentCta: "Terapkan AI Agent Sekarang",
    workforceTitle: "Bangun digital employee Anda sendiri dengan AI Agent terspesialisasi",
    workforceSub: "Tingkatkan kapasitas organisasi Anda tanpa beban overhead operasional yang tinggi. AWB Solution merancang AI employee kustom yang dibekali keahlian spesifik untuk menyelesaikan setiap hambatan kerja di perusahaan Anda.",
    workforcePoint1: "Dilatih khusus menggunakan basis pengetahuan internal perusahaan Anda.",
    workforcePoint2: "Dibekali API khusus untuk mengeksekusi tugas lintas platform.",
    workforcePoint3: "Integrasi mulus ke dalam struktur hierarki tim Anda saat ini.",
    featuresTitle: "Mengapa Para Pemimpin Bisnis Memilih AWB",
    feature1: "Keamanan Kelas Perusahaan",
    feature1Sub: "Kami menerapkan enkripsi tingkat lanjut dan lingkungan data terisolasi untuk memastikan informasi rahasia Anda tetap terjaga.",
    feature2: "Integrasi API yang Mulus",
    feature2Sub: "Solusi kami menjembatani perangkat lunak lama Anda dengan modul AI modern tanpa mengganggu operasional harian.",
    feature3: "Arsitektur yang Dapat Diskalakan",
    feature3Sub: "Dibangun di atas teknologi cloud-native yang tumbuh dengan mudah seiring dengan tuntutan bisnis dan beban kerja Anda.",
    feature4: "Pemantauan Cerdas 24/7",
    feature4Sub: "Pengawasan otomatis berkelanjutan yang secara proaktif mendeteksi anomali dan menjaga kesehatan sistem tanpa campur tangan manusia.",
    footerTitle: "Siap mempercepat infrastruktur Anda?",
    footerSub: "Mari diskusikan bagaimana kami dapat mengintegrasikan otomatisasi ke dalam ekosistem bisnis Anda saat ini.",
    address: "Alamat",
  }
};

export default function App() {
  const [lang, setLang] = useState<'en' | 'id'>('en');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = content[lang];

  const whatsappUrl = "https://wa.me/628118169222?text=Halo%20AWB%20Solution,%20saya%20tertarik%20untuk%20berkonsultasi%20mengenai%20solusi%20AI%20dan%20Automation.";

  return (
    <div className="min-h-screen bg-[#02040a] text-slate-100 font-sans selection:bg-cyan-500 selection:text-black relative">
      
      {/* --- CYBER ANIMATIONS & SMOOTH SCROLL EFFECT --- */}
      <style>{`
        html {
          scroll-behavior: smooth;
        }
        @keyframes moveLineHorizontal {
          0% { left: -100%; opacity: 0; }
          10% { opacity: 0.8; }
          90% { opacity: 0.8; }
          100% { left: 100%; opacity: 0; }
        }
        @keyframes moveLineVertical {
          0% { top: -100%; opacity: 0; }
          10% { opacity: 0.7; }
          90% { opacity: 0.7; }
          100% { top: 100%; opacity: 0; }
        }
        @keyframes pulseEye {
          0%, 100% { transform: scaleX(1); opacity: 0.9; filter: drop-shadow(0 0 4px #22d3ee); }
          50% { transform: scaleX(1.3); opacity: 1; filter: drop-shadow(0 0 12px #22d3ee); }
        }
        @keyframes dashMove {
          to { stroke-dashoffset: -20; }
        }
        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }
        .cyber-grid {
          background-image: 
            linear-gradient(to right, rgba(37, 99, 235, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(37, 99, 235, 0.05) 1px, transparent 1px);
          background-size: 60px 60px;
        }
        .moving-line-h-bold {
          animation: moveLineHorizontal 6s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          filter: drop-shadow(0 0 6px rgba(34, 211, 238, 0.8));
        }
        .moving-line-v-bold {
          animation: moveLineVertical 8s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          filter: drop-shadow(0 0 6px rgba(59, 130, 246, 0.8));
        }
        .pulse-glow {
          box-shadow: 0 0 30px rgba(34, 211, 238, 0.25);
        }
        .robot-eye-glow {
          animation: pulseEye 3s ease-in-out infinite;
        }
        .animated-dash-line {
          stroke-dasharray: 6, 4;
          animation: dashMove 2s linear infinite;
        }
        .typewriter-text {
          overflow: hidden;
          white-space: nowrap;
          border-right: 2px solid #22d3ee;
          animation: typing 3s steps(40, end), blink-caret .75s step-end infinite;
        }
        @keyframes blink-caret {
          from, to { border-color: transparent }
          50% { border-color: #22d3ee; }
        }
      `}</style>

      {/* --- BACKGROUND ANIMATION LAYER --- */}
      <div className="absolute top-0 left-0 w-full h-[1000px] pointer-events-none overflow-hidden z-0">
        <div className="absolute inset-0 cyber-grid" />
        <div className="moving-line-h-bold absolute top-1/4 left-0 w-72 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
        <div className="moving-line-h-bold absolute top-3/4 left-0 w-96 h-[1.5px] bg-gradient-to-r from-transparent via-blue-500 to-transparent" style={{ animationDelay: '2.5s', animationDuration: '7s' }} />
        <div className="moving-line-v-bold absolute top-0 left-1/4 w-[1.5px] h-72 bg-gradient-to-b from-transparent via-blue-500 to-transparent" style={{ animationDelay: '0.8s' }} />
        <div className="moving-line-v-bold absolute top-0 left-2/3 w-[1.5px] h-96 bg-gradient-to-b from-transparent via-cyan-400 to-transparent" style={{ animationDelay: '4s', animationDuration: '9s' }} />
        <div className="absolute top-[-10%] left-1/4 w-[650px] h-[650px] bg-blue-600/10 rounded-full blur-[140px] animate-pulse duration-[7000ms]" />
      </div>

      {/* --- NAVBAR --- */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#02040a]/70 border-b border-slate-900 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          <div className="flex items-center space-x-2 group cursor-pointer">
            {/* <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-400 flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-transform duration-300 group-hover:rotate-12">
              <Cpu className="w-5 h-5 text-white" />
            </div> */}
            <span className="text-xl font-bold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
            <img 
              src={logoAwb} 
              alt="Logo AWB Solution" 
              className="w-16 h-auto inline-block mr-2 opacity-85" // w-32 artinya width: 8rem atau 128px. h-auto menjaga proporsi rasio gambar
            /> 
            <span className="text-cyan-400 font-medium text-sm tracking-widest inline sm:inline sm:ml-1">SOLUTION</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#services" className="text-sm font-medium text-slate-400 hover:text-cyan-400 transition-colors">{t.navServices}</a>
            <a href="#workflow" className="text-sm font-medium text-slate-400 hover:text-cyan-400 transition-colors">{t.navWorkflow}</a>
            <a href="#agents" className="text-sm font-medium text-slate-400 hover:text-cyan-400 transition-colors">{t.navAgents}</a>
            <a href="#workforce" className="text-sm font-medium text-slate-400 hover:text-cyan-400 transition-colors">{t.navWorkforce}</a>
            <a href="#features" className="text-sm font-medium text-slate-400 hover:text-cyan-400 transition-colors">{t.navFeatures}</a>
            <a href="#contact" className="text-sm font-medium text-slate-400 hover:text-cyan-400 transition-colors">{t.navContact}</a>
          </div>

          {/* Language & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex bg-slate-900/90 rounded-lg p-1 border border-slate-800">
              <button onClick={() => setLang('en')} className={`px-3 py-1 text-xs font-semibold rounded-md transition-all ${lang === 'en' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'}`}>EN</button>
              <button onClick={() => setLang('id')} className={`px-3 py-1 text-xs font-semibold rounded-md transition-all ${lang === 'id' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'}`}>ID</button>
            </div>
            
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center space-x-2 bg-transparent border border-slate-700 hover:border-emerald-500 text-slate-300 hover:text-white px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1) hover:bg-emerald-600 shadow-[0_0_15px_transparent] hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400 transition-colors duration-300" />
              <span>Contact Us</span>
            </a>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center space-x-3">
            <button onClick={() => setLang(lang === 'en' ? 'id' : 'en')} className="p-2 text-xs font-bold bg-slate-900 border border-slate-800 rounded-lg text-cyan-400">{lang.toUpperCase()}</button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-slate-400 hover:text-white">{mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}</button>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 md:pt-32 md:pb-36 flex flex-col items-center text-center z-10">
        <div className="inline-flex items-center space-x-2 bg-blue-950/30 border border-blue-500/20 px-4 py-1.5 rounded-full mb-8">
          <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
          <span className="text-xs font-semibold tracking-wider text-cyan-300 uppercase">{t.heroBadge}</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight max-w-5xl leading-[1.12] mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
            Leverage your business with 
          </span>
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 filter drop-shadow-[0_2px_30px_rgba(34,211,238,0.15)]">
            AI & Automation
          </span>
        </h1>

        <p className="text-base sm:text-xl text-slate-400 max-w-3xl mb-0 leading-relaxed">
          {t.heroSubtitle}
        </p>
        <p className="text-base sm:text-xl text-slate-400 max-w-3xl mb-12 leading-relaxed">
          {t.heroSubtitle2}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white px-8 py-4 rounded-xl font-bold text-base transition-all duration-300 transform hover:-translate-y-1 shadow-[0_10px_25px_rgba(16,185,129,0.2)]"
            >
            <MessageSquare className="w-5 h-5 text-white" />
            <span>{t.ctaPrimary}</span>
          </a>
          <a href="#services" className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-slate-900/60 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300">
            <span>{t.ctaSecondary}</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* --- 1. SERVICES SECTION --- */}
      {/* --- SERVICES PIPELINE SECTION (STORY-DRIVEN) --- */}
      <section id="services" className="py-24 bg-[#010308] border-y border-slate-950 relative overflow-hidden">
        
        {/* Efek Garis Aliran Energi Latar Belakang (Desktop) */}
        <div className="absolute inset-0 pointer-events-none opacity-20 hidden lg:block">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <path d="M 100 280 L 1100 280" fill="none" stroke="#22d3ee" strokeWidth="1" strokeDasharray="8 6" className="animated-dash-line" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header Section */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center space-x-2 bg-blue-950/40 border border-blue-500/20 px-3 py-1 rounded-md mb-4">
              <Network className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-xs font-mono font-bold tracking-wider text-cyan-300 uppercase">The Transformation Arc</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
              {t.servicesTitle}
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              {t.servicesSub}
            </p>
          </div>

          {/* Pipeline Grid Wrapper */}
          <div className="flex flex-col lg:flex-row items-stretch justify-between gap-8 relative">
            
            {/* STEP 1: WORKFLOW AUTOMATION */}
            <div className="flex-1 group bg-[#030612]/60 border border-slate-900 hover:border-blue-500/40 p-8 rounded-2xl transition-all duration-300 relative flex flex-col justify-between">
              <div className="absolute top-4 right-4 text-xs font-mono font-bold text-slate-700 group-hover:text-blue-500 transition-colors">01 / BASE</div>
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center mb-6 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {t.service1Title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {t.service1Desc}
                </p>
              </div>
              
              <div className="mt-4 pt-4 border-t border-slate-900/60 flex items-center justify-between text-xs font-mono text-slate-500">
                <span>STATUS: DEPLOYABLE</span>
                <ArrowRight className="w-4 h-4 text-blue-500 animate-pulse hidden lg:block transform translate-x-4 group-hover:translate-x-6 transition-transform" />
              </div>
            </div>

            {/* INDIKATOR PANAH MOBILE (Card 1 -> Card 2) */}
            <div className="flex lg:hidden justify-center my-1 text-blue-500 animate-bounce">
              <ArrowRight className="w-6 h-6 rotate-90" />
            </div>

            {/* STEP 2: AI INTEGRATION */}
            <div className="flex-1 group bg-[#030612]/60 border-2 border-cyan-500/30 hover:border-cyan-400 p-8 rounded-2xl transition-all duration-300 relative flex flex-col justify-between shadow-[0_0_20px_rgba(34,211,238,0.05)]">
              <div className="absolute top-4 right-4 text-xs font-mono font-bold text-cyan-500 animate-pulse">02 / CORE</div>
              <div>
                <div className="w-12 h-12 rounded-xl bg-cyan-600/10 border border-cyan-500/20 flex items-center justify-center mb-6 text-cyan-400 group-hover:bg-cyan-600 group-hover:text-white transition-all duration-300">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-cyan-300">
                  {t.service2Title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {t.service2Desc}
                </p>
              </div>
              
              <div className="mt-4 pt-4 border-t border-slate-900/60 flex items-center justify-between text-xs font-mono text-cyan-400">
                <span>PROCESSING LAYERS</span>
                <ArrowRight className="w-4 h-4 text-emerald-500 animate-pulse hidden lg:block transform translate-x-4 group-hover:translate-x-6 transition-transform" />
              </div>
            </div>

            {/* INDIKATOR PANAH MOBILE (Card 2 -> Card 3) */}
            <div className="flex lg:hidden justify-center my-1 text-cyan-400 animate-bounce">
              <ArrowRight className="w-6 h-6 rotate-90" />
            </div>

            {/* STEP 3: BUSINESS EFFICIENCY */}
            <div className="flex-1 group bg-gradient-to-b from-slate-900 to-emerald-950/20 border border-slate-900 hover:border-emerald-500/40 p-8 rounded-2xl transition-all duration-300 relative flex flex-col justify-between">
              <div className="absolute top-4 right-4 text-xs font-mono font-bold text-slate-700 group-hover:text-emerald-400 transition-colors">03 / ULTIMATE GOAL</div>
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-600/10 border border-emerald-500/20 flex items-center justify-center mb-6 text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                  {t.service3Title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {t.service3Desc}
                </p>
              </div>
              
              <div className="mt-4 pt-4 border-t border-slate-900/60 flex items-center justify-between text-xs font-mono text-emerald-400">
                <span>RESULT: ACCELERATED</span>
                <Sparkles className="w-4 h-4 text-emerald-400 animate-spin" style={{ animationDuration: '4s' }} />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- 2. SOPHISTICATED ORCHESTRATION WORKFLOW --- */}
      <section id="workflow" className="py-24 bg-[#010307] border-b border-slate-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">{t.workflowTitle}</h2>
            <p className="text-slate-400 text-base sm:text-lg">{t.workflowSub}</p>
          </div>

          <div className="relative border border-slate-800/80 bg-[#030611]/40 rounded-3xl p-6 md:p-12 overflow-x-auto min-w-full backdrop-blur-sm">
            <div className="absolute inset-0 pointer-events-none hidden lg:block">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <path d="M 160 140 Q 260 140, 310 140" fill="none" stroke="rgba(37, 99, 235, 0.25)" strokeWidth="2" strokeDasharray="4 4" />
                <path d="M 470 140 Q 580 140, 630 140" fill="none" stroke="url(#cyan-glow-grad)" strokeWidth="3" className="animate-pulse" />
                <path d="M 810 140 Q 900 140, 970 140" fill="none" stroke="rgba(16, 185, 129, 0.25)" strokeWidth="2" strokeDasharray="4 4" />
                <defs>
                  <linearGradient id="cyan-glow-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#2563eb" />
                    <stop offset="50%" stopColor="#22d3ee" />
                    <stop offset="100%" stopColor="#10b981" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-4 relative z-10">

            
              <div className="w-64 bg-slate-900/90 border border-slate-800 rounded-2xl p-5 flex items-center space-x-4 relative group hover:border-slate-700 transition-all">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0">
                  <Play className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <div className="text-xs font-mono text-blue-400 tracking-wider uppercase font-bold">Trigger</div>
                  <div className="text-sm font-semibold text-white mt-0.5">Webhook Ingestion</div>
                  <div className="text-xs text-slate-500 mt-1">Real-time ERP Data Event</div>
                </div>
              </div>

              <div className="w-64 bg-slate-900/90 border border-slate-800 rounded-2xl p-5 flex items-center space-x-4 relative group hover:border-slate-700 transition-all">
                <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 shrink-0">
                  <Database className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-500 tracking-wider uppercase font-bold">Data Filter</div>
                  <div className="text-sm font-semibold text-white mt-0.5">Payload Parser</div>
                  <div className="text-xs text-slate-500 mt-1">Sanitize & Classify Data</div>
                </div>
              </div>

              <div className="w-72 bg-gradient-to-b from-slate-900 to-blue-950/40 border-2 border-cyan-500 rounded-2xl p-6 flex items-center space-x-4 relative pulse-glow group">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white shrink-0 shadow-[0_0_15px_rgba(34,211,238,0.5)]">
                  <Bot className="w-6 h-6 animate-bounce" style={{ animationDuration: '3s' }} />
                </div>
                <div>
                  <div className="inline-block px-2 py-0.5 bg-cyan-500/10 text-cyan-400 rounded text-[10px] font-mono uppercase font-extrabold tracking-widest animate-pulse">
                    AWB Core AI Agent
                  </div>
                  <div className="text-base font-bold text-white mt-1">Neural Decision Link</div>
                  <div className="text-xs text-slate-300 mt-0.5 font-mono">Autonomous Reasoning...</div>
                </div>
              </div>

              <div className="w-64 bg-slate-900/90 border border-slate-800 rounded-2xl p-5 flex items-center space-x-4 relative group hover:border-slate-700 transition-all">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
                  <Send className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-emerald-400 tracking-wider uppercase font-bold">Execution</div>
                  <div className="text-sm font-semibold text-white mt-0.5">Action dispatcher</div>
                  <div className="text-xs text-slate-500 mt-1">Execute Scale Action</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. AI AGENT BOT SECTION --- */}
      <section id="agents" className="py-16 sm:py-24 bg-[#02050b] border-b border-slate-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Layout Container Utama: 
            - Flex Column untuk Mobile (agar bisa pakai fitur order-1, order-2, dst)
            - Grid 12 Column untuk Desktop (agar rapi bersisian)
          */}
          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-0 lg:gap-12 lg:items-center">
            
            {/* Text Content Wrapper 
              Trik 'contents': Di mobile dia transparan secara struktur, 
              jadi anak-anaknya bisa di-reorder langsung bareng si Robot.
            */}
            <div className="contents lg:block lg:col-span-7 lg:space-y-6">
              
              {/* 1. BADGE & JUDUL (Tampil Paling Atas) */}
              <div className="order-1 space-y-4 lg:space-y-6">
                <div className="inline-flex items-center space-x-2 bg-emerald-950/40 border border-emerald-500/30 px-3 py-1 rounded-md">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-[10px] sm:text-xs font-mono font-bold tracking-wider text-emerald-300 uppercase">
                    Autonomous Systems
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                  {t.agentTitle}
                </h2>
              </div>

              {/* 3. PENJELASAN / PEMAPARAN (Di bawah Robot pas Mobile) */}
              <div className="order-3 mt-4 lg:mt-0">
                <p className="text-slate-400 text-sm sm:text-lg leading-relaxed max-w-2xl">
                  {t.agentSub}
                </p>
              </div>

              {/* 4. BUTTON (Tampil Paling Bawah pas Mobile) */}
              <div className="order-4 mt-6 lg:mt-0">
                {/* Di layar HP dibikin full-width biar gampang diklik (w-full), di desktop balik normal */}
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex justify-center sm:inline-flex w-full sm:w-auto items-center space-x-2.5 bg-slate-900 hover:bg-slate-800 text-cyan-400 border border-slate-800 hover:border-cyan-500/50 px-6 py-3.5 rounded-xl font-bold text-sm transition-all duration-300">
                  <Bot className="w-4 h-4" />
                  <span>{t.agentCta}</span>
                </a>
              </div>

            </div>

            {/* 2. GAMBAR ROBOT (Tampil di Tengah pas Mobile, Kanan pas Desktop) */}
            <div className="order-2 lg:col-span-5 flex justify-center py-8 lg:py-0">
              {/* Container diperkecil khusus mobile (w-64 h-72), balik besar di layar sm/lg */}
              <div className="relative w-64 h-72 sm:w-80 sm:h-96 bg-[#04091c]/60 border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col items-center justify-center shadow-2xl backdrop-blur-md group overflow-hidden">
                <div className="absolute -inset-px bg-gradient-to-b from-cyan-500/10 to-transparent rounded-3xl pointer-events-none" />
                
                {/* transform scale-90 dipakai biar skala robot mengecil rapi tanpa ngerusak elemen div dalamnya */}
                <div className="w-40 h-48 relative flex flex-col items-center transition-transform duration-500 group-hover:scale-105 transform scale-90 sm:scale-100">
                  <div className="w-28 h-24 bg-gradient-to-b from-slate-800 to-slate-950 border-2 border-slate-700 rounded-2xl relative flex flex-col items-center justify-center shadow-inner">
                    <div className="absolute left-[-6px] top-4 w-2 h-12 bg-slate-700 border border-slate-600 rounded" />
                    <div className="absolute right-[-6px] top-4 w-2 h-12 bg-slate-700 border border-slate-600 rounded" />
                    <div className="w-22 h-6 bg-[#050c1e] border border-slate-800 rounded-md flex items-center justify-center overflow-hidden relative">
                      <div className="robot-eye-glow w-16 h-1 bg-cyan-400 rounded-full shadow-[0_0_10px_#22d3ee]" />
                    </div>
                  </div>
                  <div className="w-10 h-4 bg-slate-900 border-x border-slate-700" />
                  <div className="w-36 h-20 bg-gradient-to-b from-slate-900 to-slate-950 border-2 border-slate-800 rounded-t-xl rounded-b-md p-3 relative">
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-blue-950 border border-blue-500/40 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- 4. AI WORKFORCE HIERARCHY --- */}
      <section id="workforce" className="py-16 sm:py-24 bg-[#010306] border-b border-slate-950/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Container Layout: Flex-col (Mobile) atau Grid (Desktop) */}
          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">

            {/* TEXT WRAPPER (Judul & Pemaparan) 
                lg:order-2 bikin teks ini pindah ke KANAN saat di layar Desktop 
            */}
            <div className="contents lg:block lg:col-span-6 lg:order-2">
              
              {/* 1. BADGE & JUDUL (Order 1 di Mobile) */}
              <div className="order-1 space-y-4 lg:space-y-6">
                <div className="inline-flex items-center space-x-2 bg-blue-950/40 border border-blue-500/30 px-3 py-1 rounded-md">
                  <GitPullRequest className="w-3.5 h-3.5 text-blue-400" />
                  <span className="text-[10px] sm:text-xs font-mono font-bold tracking-wider text-blue-300 uppercase">Scale Multiplication</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                  {t.workforceTitle}
                </h2>
              </div>

              {/* 3. PEMAPARAN (Order 3 di Mobile, Muncrat ke Bawah Grafik) */}
              <div className="order-3 mt-4 lg:mt-6 space-y-4 lg:space-y-6">
                <p className="text-slate-400 text-sm sm:text-lg leading-relaxed">
                  {t.workforceSub}
                </p>
                <div className="space-y-3 pt-2">
                  {[t.workforcePoint1, t.workforcePoint2, t.workforcePoint3].map((point, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                      <span className="text-sm sm:text-base text-slate-300 font-medium">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* 2. GRAFIK (Order 2 di Mobile, Tengah-tengah) 
                lg:order-1 bikin grafik ini pindah ke KIRI saat di layar Desktop
            */}
            <div className="order-2 lg:order-1 lg:col-span-6 w-full flex justify-center py-4 lg:py-0">
              
              {/* Kotak Wrapper Luar - Tingginya nyesuain HP vs Desktop biar ga kepotong */}
              <div className="relative w-full max-w-lg bg-[#030714]/60 border border-slate-800 rounded-3xl h-[260px] sm:h-[340px] lg:h-[420px] flex items-center justify-center overflow-hidden backdrop-blur-sm shadow-2xl">
                
                {/* KANVAS SKALA FIX (Pusat presisi) - Mengecil di HP (scale-[0.55]), membesar di Desktop (scale-100) */}
                <div className="relative w-[500px] shrink-0 h-[350px] scale-[0.55] sm:scale-[0.80] lg:scale-95 xl:scale-100 origin-center transition-transform duration-300">
                  {/* Layer 1: Garis SVG (viewBox presisi ngikutin ukuran kanvas 500x350) */}
                  <div className="absolute inset-0 pointer-events-none">
                    <svg viewBox="0 0 500 350" className="w-full h-full overflow-visible" xmlns="http://www.w3.org/2000/svg">
                      {/* Garis Kiri (CEO -> Agent 1) */}
                      <path d="M 250 90 Q 80 150, 80 240" fill="none" stroke="#2563eb" strokeWidth="2" className="animated-dash-line" />
                      {/* Garis Tengah (CEO -> Agent 2) */}
                      <path d="M 250 90 L 250 240" fill="none" stroke="#22d3ee" strokeWidth="2" className="animated-dash-line" />
                      {/* Garis Kanan (CEO -> Agent 3) */}
                      <path d="M 250 90 Q 420 150, 420 240" fill="none" stroke="#2563eb" strokeWidth="2" className="animated-dash-line" />
                    </svg>
                  </div>

                  {/* Layer 2: Node CEO (Tengah Atas) */}
                  <div className="absolute top-[30px] left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-cyan-500 p-0.5 rounded-2xl shadow-[0_0_25px_rgba(37,99,235,0.4)] z-10">
                    <div className="bg-slate-950 px-6 py-3 rounded-[14px] flex items-center space-x-3 w-48">
                      <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                        <User className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-500 font-mono">COMMAND_NODE</div>
                        <div className="text-sm font-bold text-white leading-tight">CEO / Leader</div>
                      </div>
                    </div>
                  </div>

                  {/* Layer 3: Agent Nodes (Bawah) */}
                  {/* Agent 1 (Kiri) - Pake 16% */}
                  <div className="absolute top-[240px] left-[16%] -translate-x-1/2 bg-slate-900/90 border border-slate-800 rounded-xl p-3 w-36 flex flex-col items-center text-center z-10">
                    <Database className="w-4 h-4 text-blue-400 mb-2" />
                    <div className="text-[10px] font-mono text-blue-400 font-bold uppercase">AI Agent 01</div>
                    <div className="text-xs font-bold text-slate-200 mt-0.5">Data Analyst</div>
                  </div>

                  {/* Agent 2 (Tengah) - Pake 1/2 */}
                  <div className="absolute top-[240px] left-1/2 -translate-x-1/2 bg-slate-900/90 border-2 border-cyan-500 rounded-xl p-3 w-40 flex flex-col items-center text-center z-10 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                    <Terminal className="w-4 h-4 text-cyan-400 mb-2 animate-pulse" />
                    <div className="text-[10px] font-mono text-cyan-400 font-bold uppercase">AI Agent 02</div>
                    <div className="text-xs font-bold text-white mt-0.5">Ops Automator</div>
                  </div>

                  {/* Agent 3 (Kanan) - Pake 84% */}
                  <div className="absolute top-[240px] left-[84%] -translate-x-1/2 bg-slate-900/90 border border-slate-800 rounded-xl p-3 w-36 flex flex-col items-center text-center z-10">
                    <Network className="w-4 h-4 text-blue-400 mb-2" />
                    <div className="text-[10px] font-mono text-blue-400 font-bold uppercase">AI Agent 03</div>
                    <div className="text-xs font-bold text-slate-200 mt-0.5">DevOps Link</div>
                  </div>

                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* --- 5. UPDATED FEATURES SECTION --- */}
      <section id="features" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Why AWB with Sub-explanations */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-10">
              {t.featuresTitle}
            </h2>
            <div className="space-y-6">
              {[
                { title: t.feature1, sub: t.feature1Sub, icon: <ShieldCheck className="w-5 h-5" /> },
                { title: t.feature2, sub: t.feature2Sub, icon: <Link className="w-5 h-5" /> },
                { title: t.feature3, sub: t.feature3Sub, icon: <BarChart3 className="w-5 h-5" /> },
                { title: t.feature4, sub: t.feature4Sub, icon: <Activity className="w-5 h-5" /> }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-all shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-slate-100 font-bold text-lg group-hover:text-cyan-400 transition-colors">{item.title}</h3>
                    <p className="text-slate-400 text-sm mt-1 leading-relaxed">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* LARGE TERMINAL WINDOW SIMULATION */}
          <div className="relative bg-gradient-to-tr from-slate-950 to-[#050e26] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden group">
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-slate-800 bg-slate-900/50">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500/30" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/30" />
                <div className="w-3 h-3 rounded-full bg-green-500/30" />
                <span className="text-[11px] font-mono text-slate-500 ml-4">awb_neural_deploy.sh — 80x45</span>
              </div>
              <Terminal className="w-4 h-4 text-slate-700" />
            </div>

            {/* Terminal Body - Height increased as requested */}
            <div className="p-6 h-[480px] font-mono text-xs sm:text-sm overflow-y-auto custom-scrollbar">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="text-emerald-500 font-bold">$</span>
                  <span className="text-slate-100 italic">openclaw --deploy-agent workflow_v4.yaml</span>
                </div>
                <div className="text-slate-500 mt-4"># Initializing Neural Core...</div>
                <div className="text-blue-400">[SYSTEM] Connecting to company_knowledge_base... <span className="text-white">DONE</span></div>
                <div className="text-blue-400">[SYSTEM] Fetching operational memory layers... <span className="text-white">74.2 GB LOADED</span></div>
                <div className="text-blue-400">[SYSTEM] Authenticating secure API bridge... <span className="text-white">ENCRYPTED</span></div>
                
                <div className="pt-4 text-slate-500 italic">// Starting Autonomous Reasoning Loop</div>
                <div className="flex space-x-2">
                  <span className="text-cyan-400">[REASONER]</span>
                  <span className="text-slate-300">Goal: Optimize logistics route efficiency.</span>
                </div>
                <div className="flex space-x-2">
                  <span className="text-cyan-400">[REASONER]</span>
                  <span className="text-slate-300">Analyzing 14,000+ data points...</span>
                </div>
                <div className="flex space-x-2">
                  <span className="text-cyan-400">[REASONER]</span>
                  <span className="text-emerald-400">Strategy identified: Predictive congestion rerouting.</span>
                </div>

                <div className="pt-6 flex flex-col space-y-1">
                  <div className="text-slate-500">--- Registering tools... [gmail, slack, erp_manager]</div>
                  <div className="text-slate-500">--- Establishing sandbox environment...</div>
                  <div className="text-slate-500">--- Warming up inference engine...</div>
                </div>

                <div className="pt-8">
                  <div className="typewriter-text text-cyan-400 font-bold tracking-widest uppercase">
                    Initializing AI Agent ...
                  </div>
                </div>
                
                <div className="pt-4 text-slate-700">
                  [ 2026-06-06 11:35:42 ] _
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- FOOTER & CONTACT SECTION --- */}
      <footer id="contact" className="bg-[#010206] border-t border-slate-950 pt-20 pb-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-950/20 to-slate-900/40 border border-blue-900/30 rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto mb-16 relative overflow-hidden">
            <h3 className="text-2xl sm:text-4xl font-bold text-white mb-4">{t.footerTitle}</h3>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto mb-8">{t.footerSub}</p>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-3 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white px-8 py-4 rounded-xl font-bold text-base transition-all duration-300 transform hover:-translate-y-1 shadow-[0_10px_25px_rgba(16,185,129,0.2)]">
              <Phone className="w-5 h-5 fill-current animate-bounce" />
              <span>{t.ctaPrimary}</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start pt-8 border-t border-slate-900 text-sm text-slate-400">
            <div>
              <div className="flex items-center space-x-2 text-white font-bold tracking-wider mb-3">
                <Cpu className="w-4 h-4 text-cyan-400" />
                <span>AWB SOLUTION</span>
              </div>
              <p className="max-w-sm text-slate-500 leading-relaxed">Next-generation Automation & Artificial Intelligence integrations for modern enterprises.</p>
            </div>
            <div className="space-y-3 font-medium md:justify-self-end">
              <div className="flex items-start space-x-2.5 max-w-md">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span><strong className="text-slate-300">{t.address}:</strong> Kode Creative Hub, Jl Margonda Raya No 1, Depok, Jawa Barat.</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>+62 811-8169-222</span>
              </div>
            </div>
          </div>
          <div className="text-center text-xs text-slate-600 mt-12 pt-6 border-t border-slate-950">
            &copy; {new Date().getFullYear()} AWB Solution. All engineering rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}