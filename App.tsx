import React, { useState, useEffect } from 'react';
import {
  GraduationCap,
  Atom,
  FlaskConical,
  Mail,
  Facebook,
  Instagram,
  Quote,
  Printer,
  Download,
  ChevronRight,
  Calendar,
  MapPin,
  Check,
  X,
  Award,
  Sparkles,
  Rocket,
  Microscope,
  Menu,
  HeartHandshake,
  Headphones,
  Languages,
  Activity,
  Music,
  Users,
  Presentation
} from 'lucide-react';

import studentPortrait from '@/src/assets/images/1791967150627.jpg';

interface PortfolioItem {
  id: string;
  title: string;
  category: 'academic' | 'activity' | 'volunteer';
  categoryLabel: string;
  year: string;
  institution: string;
  description: string;
  fullDetail: string;
  learningOutcomes: string[];
  iconType: 'rocket' | 'microscope' | 'flask' | 'presentation' | 'volunteer' | 'sports';
}

const portfolioData: PortfolioItem[] = [
  {
    id: 'water-rocket',
    title: 'ตัวแทนแข่งขันจรวดขวดน้ำ สัปดาห์วิทยาศาสตร์แห่งชาติ',
    category: 'academic',
    categoryLabel: 'ด้านวิชาการ',
    year: '2567',
    institution: 'คณะวิทยาศาสตร์ มหาวิทยาลัยขอนแก่น',
    description: 'ตัวแทนโรงเรียนโนนสูงพิทยาคาร เข้าร่วมการแข่งขันจรวดขวดน้ำ ในงานสัปดาห์วิทยาศาสตร์แห่งชาติ ส่วนภูมิภาค',
    fullDetail: 'ได้รับคัดเลือกเป็นตัวแทนโรงเรียนโนนสูงพิทยาคาร เข้าร่วมการแข่งขันจรวดขวดน้ำ ระดับมัธยมศึกษา ในงานสัปดาห์วิทยาศาสตร์แห่งชาติ ส่วนภูมิภาค ประจำปี 2567 ณ มหาวิทยาลัยขอนแก่น ได้ประยุกต์ใช้หลักการฟิสิกส์ แรงดัน อากาศพลศาสตร์ และการทำงานร่วมกันเป็นทีมในการคำนวณและปรับแต่งจรวดขวดน้ำให้เข้าเป้าหมายอย่างแม่นยำ',
    learningOutcomes: ['การคำนวณแรงดันและมุมยิง', 'การวางแผนและการทำงานร่วมกันเป็นทีม', 'การแก้ไขปัญหาเฉพาะหน้าในสถานการณ์จริง'],
    iconType: 'rocket'
  },
  {
    id: 'science-solving',
    title: 'การแข่งขันกระบวนการแก้ปัญหาทางวิทยาศาสตร์',
    category: 'academic',
    categoryLabel: 'ด้านวิชาการ',
    year: '2568',
    institution: 'คณะวิทยาศาสตร์ มหาวิทยาลัยขอนแก่น',
    description: 'เข้าร่วมการแข่งขันกระบวนการแก้ปัญหาทางวิทยาศาสตร์ ระดับมัธยมศึกษาตอนปลาย',
    fullDetail: 'เข้าร่วมการแข่งขันกระบวนการแก้ปัญหาทางวิทยาศาสตร์ ระดับมัธยมศึกษาตอนปลาย ในงานสัปดาห์วิทยาศาสตร์แห่งชาติ ส่วนภูมิภาค ณ คณะวิทยาศาสตร์ มหาวิทยาลัยขอนแก่น ฝึกฝนกระบวนการคิดวิเคราะห์อย่างเป็นวิทยาศาสตร์ การตั้งสมมติฐาน ออกแบบการทดลอง และสรุปผลข้อมูลเชิงประจักษ์',
    learningOutcomes: ['กระบวนการคิดวิเคราะห์เชิงระบบ', 'การออกแบบการทดลองเพื่อทดสอบสมมติฐาน', 'การตีความข้อมูลและสรุปผลทางวิทยาศาสตร์'],
    iconType: 'microscope'
  },
  {
    id: 'rainbow-density',
    title: 'กิจกรรมทดลอง ความหนาแน่นของสาร (น้ำหวานสายรุ้ง)',
    category: 'activity',
    categoryLabel: 'ด้านกิจกรรม',
    year: '2567',
    institution: 'กลุ่มสาระการเรียนรู้วิทยาศาสตร์ โรงเรียนโนนสูงพิทยาคาร',
    description: 'กิจกรรมปฏิบัติการเคมีเพื่อศึกษาความหนาแน่นและการแบ่งชั้นสารละลาย',
    fullDetail: 'เข้าร่วมกิจกรรมการทดลองความฉลาดรู้เฉพาะด้าน (เคมี) หัวข้อ ความหนาแน่นของสาร โดยการสร้างน้ำหวานสายรุ้ง ซึ่งเป็นการแบ่งชั้นของน้ำหวานตามค่าความหนาแน่นและความเข้มข้นที่แตกต่างกัน ช่วยให้เข้าใจหลักการทางเคมีเรื่องความเข้มข้น สารละลาย และอันตรกิริยาระหว่างโมเลกุลในเชิงประจักษ์',
    learningOutcomes: ['ความเข้าใจเชิงลึกเรื่องความหนาแน่นและความเข้มข้น', 'ทักษะการตวงและเตรียมสารละลายในห้องปฏิบัติการ', 'การสังเกตและบันทึกผลการทดลอง'],
    iconType: 'flask'
  },
  {
    id: 'polymer-teaching',
    title: 'ผู้สอนและถ่ายทอดความรู้ การเกิดปฏิกิริยาพอลิเมอร์',
    category: 'activity',
    categoryLabel: 'ด้านกิจกรรม',
    year: '2567',
    institution: 'โรงเรียนโนนสูงพิทยาคาร',
    description: 'ถ่ายทอดความรู้เคมีเรื่องโครงสร้างและการเกิดพอลิเมอร์ให้แก่เพื่อนร่วมชั้น',
    fullDetail: 'ได้รับหน้าที่เป็นผู้สอนและถ่ายทอดความรู้ทางด้าน "การเกิดปฏิกิริยาพอลิเมอร์" แก่เพื่อนนักเรียนภายในชั้น โดยใช้สื่อมัลติมีเดียและแบบจำลองโครงสร้างโมเลกุล เพื่อสร้างบรรยากาศการเรียนรู้ที่มีส่วนร่วม และอธิบายความแตกต่างระหว่างปฏิกิริยาพอลิเมอไรเซชันแบบควบแน่นและแบบเติม',
    learningOutcomes: ['ทักษะการสื่อสารและถ่ายทอดเนื้อหาวิชาการให้เข้าใจง่าย', 'การสร้างสื่อการเรียนรู้เชิงสร้างสรรค์', 'ความเข้าใจลึกซึ้งในโครงสร้างพอลิเมอร์'],
    iconType: 'presentation'
  },
  {
    id: 'community-volunteer',
    title: 'กิจกรรมจิตอาสาพัฒนาสิ่งแวดล้อมและโรงเรียน',
    category: 'volunteer',
    categoryLabel: 'ด้านจิตอาสา',
    year: '2567',
    institution: 'โรงเรียนโนนสูงพิทยาคาร และชุมชนโนนสูง',
    description: 'ร่วมปลูกต้นไม้ ปรับปรุงภูมิทัศน์ และคัดแยกขยะเพื่อสิ่งแวดล้อมที่ยั่งยืน',
    fullDetail: 'เข้าร่วมกิจกรรมจิตอาสาบำเพ็ญประโยชน์ร่วมกับคณะครูและเพื่อนนักเรียน ในการปรับปรุงภูมิทัศน์โรงเรียน ปลูกต้นไม้เพิ่มพื้นที่สีเขียว และเป็นแกนนำในการรณรงค์คัดแยกขยะประเภทพลาสติกและสารเคมีอันตรายภายในสถานศึกษา เพื่อสร้างจิตสำนึกรักษ์สิ่งแวดล้อมอย่างยั่งยืน',
    learningOutcomes: ['จิตสาธารณะและความรับผิดชอบต่อส่วนรวม', 'ความตระหนักด้านมลพิษและการจัดการขยะเคมี/พลาสติก', 'การทำงานร่วมกับคนในชุมชน'],
    iconType: 'volunteer'
  },
  {
    id: 'sports-day',
    title: 'นักกีฬาบาสเกตบอลตัวแทนระดับชั้น การแข่งขันกีฬาภายใน',
    category: 'activity',
    categoryLabel: 'ด้านกิจกรรม',
    year: '2567',
    institution: 'โรงเรียนโนนสูงพิทยาคาร',
    description: 'ตัวแทนนักกีฬาบาสเกตบอล เสริมสร้างสุขภาพ ความมีน้ำใจนักกีฬา และการทำงานเป็นทีม',
    fullDetail: 'ได้รับคัดเลือกเป็นตัวแทนนักกีฬาบาสเกตบอลประจำระดับชั้น ในการแข่งขันมหกรรมกีฬาภายในโรงเรียนโนนสูงพิทยาคาร ได้ฝึกซ้อมระเบียบวินัย การวางแผนกลยุทธ์ร่วมกับเพื่อนร่วมทีม และส่งเสริมสุขภาพพลานามัยที่แข็งแรงพร้อมสำหรับการศึกษา',
    learningOutcomes: ['การมีน้ำใจนักกีฬา รู้แพ้ รู้ชนะ รู้อภัย', 'สุขภาพร่างกายที่แข็งแรงและความอดทน', 'การวางกลยุทธ์และการสื่อสารในสนาม'],
    iconType: 'sports'
  }
];

export default function App() {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'academic' | 'activity' | 'volunteer'>('all');
  const [activeModalItem, setActiveModalItem] = useState<PortfolioItem | null>(null);
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [portraitError, setPortraitError] = useState(false);

  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveModalItem(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2500);
  };

  const downloadHtmlExport = async () => {
    try {
      const response = await fetch('/portfolio.html');
      const text = await response.text();
      const blob = new Blob([text], { type: 'text/html;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'index.html';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      setCopiedText('ไฟล์ index.html เรียบร้อยแล้ว');
    } catch {
      window.open('/portfolio.html', '_blank');
    }
  };

  const filteredItems = selectedFilter === 'all'
    ? portfolioData
    : portfolioData.filter(item => item.category === selectedFilter);

  const renderIcon = (type: PortfolioItem['iconType']) => {
    switch (type) {
      case 'rocket':
        return <Rocket className="w-5 h-5 text-teal-600" />;
      case 'microscope':
        return <Microscope className="w-5 h-5 text-teal-600" />;
      case 'flask':
        return <FlaskConical className="w-5 h-5 text-teal-600" />;
      case 'presentation':
        return <Presentation className="w-5 h-5 text-teal-600" />;
      case 'volunteer':
        return <HeartHandshake className="w-5 h-5 text-teal-600" />;
      case 'sports':
        return <Activity className="w-5 h-5 text-teal-600" />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Toast Notification */}
      {copiedText && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-slate-900 text-white px-4 py-2.5 rounded-xl shadow-xl text-xs font-medium animate-bounce border border-slate-700">
          <Check className="w-4 h-4 text-emerald-400" />
          <span>คัดลอก {copiedText} เรียบร้อยแล้ว</span>
        </div>
      )}

      {/* TOP BAR CONTRACT: 3 Zones (Brand — Nav Links — 1 Primary Action) */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8 h-16">
            {/* Zone 1: Brand title wordmark, single line */}
            <a href="#about" className="text-base font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center font-bold text-sm shadow-sm group-hover:bg-teal-700 transition-colors">
                T
              </div>
              <span className="font-semibold text-slate-900">ทินกร พันแสน</span>
              <span className="text-slate-400 font-normal hidden sm:inline">· Portfolio</span>
            </a>

            {/* Zone 2: Concise single-line text navigation links */}
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
              <a href="#about" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">
                ประวัติส่วนตัว
              </a>
              <a href="#education" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">
                การศึกษา & ผลการเรียน
              </a>
              <a href="#skills" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">
                ทักษะ & งานอดิเรก
              </a>
              <a href="#portfolio" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">
                กิจกรรม & ผลงาน
              </a>
            </nav>

            {/* Zone 3: Actions */}
            <div className="flex items-center gap-2.5 shrink-0">
              <button
                onClick={downloadHtmlExport}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-xs"
                title="ดาวน์โหลดไฟล์ index.html สำหรับเปิดใช้งานได้ทุกที่"
              >
                <Download className="w-3.5 h-3.5 text-teal-600" />
                <span>ดาวน์โหลด index.html</span>
              </button>

              <button
                onClick={() => window.print()}
                className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 text-xs font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-sm"
              >
                <Printer className="w-3.5 h-3.5 text-teal-400" />
                <span>พิมพ์ / บันทึก PDF</span>
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-slate-600 hover:text-slate-900 rounded-lg"
                aria-label="เมนูหลัก"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-slate-200 bg-white/95 px-4 pt-2 pb-5 space-y-1 shadow-lg">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 rounded-lg"
            >
              ประวัติส่วนตัว
            </a>
            <a
              href="#education"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 rounded-lg"
            >
              การศึกษา & ผลการเรียน
            </a>
            <a
              href="#skills"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 rounded-lg"
            >
              ทักษะ & งานอดิเรก
            </a>
            <a
              href="#portfolio"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 rounded-lg"
            >
              กิจกรรม & ผลงาน
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                downloadHtmlExport();
              }}
              className="w-full mt-2 flex items-center justify-center gap-2 px-3 py-2.5 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg"
            >
              <Download className="w-3.5 h-3.5 text-teal-600" />
              <span>ดาวน์โหลด index.html</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                window.print();
              }}
              className="w-full mt-1.5 flex items-center justify-center gap-2 px-3 py-2.5 text-xs font-medium text-white bg-slate-900 rounded-lg"
            >
              <Printer className="w-3.5 h-3.5 text-teal-400" />
              <span>พิมพ์ / บันทึก PDF</span>
            </button>
          </div>
        )}
      </header>

      {/* SECTION 1: PROFILE / HERO */}
      <section id="about" className="pt-28 pb-16 md:pt-36 md:pb-20 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Metadata kicker without static pills */}
          <div className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-4">
            <span className="text-teal-700 font-semibold">แฟ้มสะสมผลงาน (PORTFOLIO)</span>
            <span aria-hidden="true">·</span>
            <span>โครงการ MOU </span>
            <span aria-hidden="true">·</span>
            <span>ปีการศึกษา 2568</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Student Image Box */}
            <div className="md:col-span-5 flex flex-col items-center">
              <div className="relative group w-60 sm:w-64 rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-white">
                {!portraitError ? (
                  <img
                    src={studentPortrait}
                    alt="นายทินกร พันแสน (สตางค์)"
                    className="w-full h-80 object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    onError={() => setPortraitError(true)}
                  />
                ) : (
                  <div className="w-full h-80 bg-gradient-to-br from-slate-800 to-slate-900 flex flex-col items-center justify-center text-white p-6 text-center">
                    <GraduationCap className="w-16 h-16 text-teal-400 mb-3" />
                    <div className="font-bold text-lg">นายทินกร พันแสน</div>
                    <div className="text-xs text-slate-300 mt-1">วิทยาลัยสาธารณสุขสิรินธร ขอนแก่น</div>
                  </div>
                )}
                <div className="p-4 bg-slate-900 text-white text-center">
                  <div className="font-bold text-sm tracking-wide">นายทินกร พันแสน</div>
                  <div className="text-xs text-slate-300 mt-0.5">วิทยาลัยสาธารณสุขสิรินธร ขอนแก่น</div>
                </div>
              </div>
            </div>

            {/* Profile Information Details */}
            <div className="md:col-span-7 space-y-4 text-left">
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
                  นายทินกร พันแสน <span className="text-slate-500 font-normal text-2xl sm:text-3xl">(สตางค์)</span>
                </h1>
                <p className="text-sm sm:text-base text-slate-600 mt-2">
                  วันเกิด: 16 กรกฎาคม 2551 (อายุ 18 ปี)
                </p>
              </div>

              {/* Education Goal Box */}
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-3">
                <div className="p-2.5 bg-teal-50 text-teal-700 rounded-lg mt-0.5">
                  <Atom className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">เป้าหมายการศึกษา</span>
                  <h2 className="text-base font-bold text-slate-900">คณะสาธารณสุขศาสตร์และสหเวชศาสตร์ หลักสูตรสาธารณสุขศาสตรบัณฑิต สาขาวิชาสาธารณสุขชุมชน</h2>
                  <p className="text-xs text-slate-500 mt-0.5">วิทยาลัยสาธารณสุขสิรินธร จังหวัดขอนแก่น</p>
                </div>
              </div>

              {/* Personal Motto */}
              <div className="p-4 rounded-xl bg-slate-900 text-slate-100 shadow-sm flex items-center gap-3">
                <Quote className="w-5 h-5 text-amber-400 shrink-0" />
                <div>
                  <div className="text-xs text-slate-400">คติประจำใจ</div>
                  <div className="text-base font-bold text-amber-400 tracking-wide">"Job's not finished"</div>
                </div>
              </div>

              {/* Contact actions with quick copy feedback */}
              <div className="pt-2 flex flex-wrap gap-2.5 text-xs">
                <button
                  onClick={() => copyToClipboard('monstang0123@gmail.com', 'อีเมล')}
                  className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors shadow-sm"
                  title="คลิกเพื่อคัดลอกอีเมล"
                >
                  <Mail className="w-4 h-4 text-red-500" />
                  <span className="font-medium">monstang0123@gmail.com</span>
                </button>
                <button
                  onClick={() => copyToClipboard('Thinakon Phansean', 'ชื่อ Facebook')}
                  className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors shadow-sm"
                  title="คลิกเพื่อคัดลอก"
                >
                  <Facebook className="w-4 h-4 text-blue-600" />
                  <span className="font-medium">Thinakon Phansean</span>
                </button>
                <button
                  onClick={() => copyToClipboard('athingkxh', 'Instagram Handle')}
                  className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors shadow-sm"
                  title="คลิกเพื่อคัดลอก"
                >
                  <Instagram className="w-4 h-4 text-pink-600" />
                  <span className="font-medium">athingkxh</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: ACADEMIC BACKGROUND & GRADES */}
      <section id="education" className="py-16 md:py-20 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest block mb-1">
              Academic Background
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              ประวัติการศึกษา & ผลการเรียน
            </h2>
            <div className="w-12 h-1 bg-slate-800 mx-auto mt-3 rounded-full" />
          </div>

          {/* Top GPAX Highlight Card */}
          <div className="bg-slate-900 rounded-2xl p-6 sm:p-8 text-white shadow-lg mb-10 flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-800">
            <div className="space-y-1.5 text-center md:text-left">
              <div className="text-xs text-slate-400 flex items-center justify-center md:justify-start gap-1.5">
                <GraduationCap className="w-4 h-4 text-teal-400" />
                <span>ระดับมัธยมศึกษาตอนปลาย · แผนการเรียนวิทยาศาสตร์-คณิตศาสตร์</span>
              </div>
              <h3 className="text-2xl font-bold">โรงเรียนโนนสูงพิทยาคาร</h3>
              <p className="text-slate-300 text-xs sm:text-sm">
                ตำบลโนนสูง อำเภอเมืองอุดรธานี จังหวัดอุดรธานี
              </p>
            </div>

            <div className="flex items-center gap-4 bg-white/5 px-6 py-4 rounded-xl border border-white/10 text-center">
              <div>
                <span className="text-xs uppercase text-slate-300 font-medium block">
                  ผลการเรียนเฉลี่ยรวม
                </span>
                <span className="text-4xl sm:text-5xl font-black text-amber-400 font-mono tracking-tight tabular-nums">
                  3.77
                </span>
                <span className="text-xs text-slate-400 block mt-0.5">
                  GPAX (62.0 หน่วยกิต)
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Timeline */}
            <div className="lg:col-span-5 space-y-4">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-teal-700" />
                <span>เส้นทางการศึกษา</span>
              </h3>

              <div className="relative pl-6 border-l-2 border-slate-200 space-y-6">
                <div className="relative">
                  <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-slate-900 border-2 border-white shadow-sm" />
                  <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                    <span className="text-xs font-semibold text-teal-700">มัธยมศึกษาตอนปลาย</span>
                    <h4 className="font-bold text-slate-800 text-sm mt-0.5">โรงเรียนโนนสูงพิทยาคาร</h4>
                    <p className="text-xs text-slate-500">อ.เมืองอุดรธานี จ.อุดรธานี</p>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-slate-400 border-2 border-white" />
                  <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                    <span className="text-xs font-semibold text-slate-500">มัธยมศึกษาตอนต้น</span>
                    <h4 className="font-bold text-slate-800 text-sm mt-0.5">โรงเรียนพันธกิจวิทยา</h4>
                    <p className="text-xs text-slate-500">อ.เมืองอุดรธานี จ.อุดรธานี</p>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-slate-300 border-2 border-white" />
                  <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                    <span className="text-xs font-semibold text-slate-500">ประถมศึกษา</span>
                    <h4 className="font-bold text-slate-800 text-sm mt-0.5">โรงเรียนพันธกิจวิทยา</h4>
                    <p className="text-xs text-slate-500">อ.เมืองอุดรธานี จ.อุดรธานี</p>
                  </div>
                </div>
              </div>
            </div>

            {/* GPA Breakdown */}
            <div className="lg:col-span-7 space-y-4">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Award className="w-4 h-4 text-teal-700" />
                <span>ผลการเรียนแยกตามกลุ่มสาระฯ</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Science highlight */}
                <div className="p-4 rounded-xl bg-white border-2 border-teal-700 shadow-sm flex justify-between items-center col-span-1 sm:col-span-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-teal-700 text-white flex items-center justify-center">
                      <Atom className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">วิทยาศาสตร์และเทคโนโลยี</h4>
                      <span className="text-xs text-slate-500">24.0 หน่วยกิต</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-black text-teal-800 font-mono tabular-nums">3.70</span>
                    <span className="text-[11px] text-slate-400 block">GPA</span>
                  </div>
                </div>

                {/* Math */}
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm flex justify-between items-center">
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">คณิตศาสตร์</h4>
                    <span className="text-xs text-slate-500">12.0 หน่วยกิต</span>
                  </div>
                  <span className="text-xl font-bold text-slate-900 font-mono tabular-nums">3.87</span>
                </div>

                {/* Social */}
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm flex justify-between items-center">
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">สังคมศึกษา ศาสนาฯ</h4>
                    <span className="text-xs text-slate-500">7.0 หน่วยกิต</span>
                  </div>
                  <span className="text-xl font-bold text-slate-900 font-mono tabular-nums">3.92</span>
                </div>

                {/* Health & PE */}
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm flex justify-between items-center">
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">สุขศึกษาและพลศึกษา</h4>
                    <span className="text-xs text-slate-500">2.0 หน่วยกิต</span>
                  </div>
                  <span className="text-xl font-bold text-slate-900 font-mono tabular-nums">3.87</span>
                </div>

                {/* Thai */}
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm flex justify-between items-center">
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">ภาษาไทย</h4>
                    <span className="text-xs text-slate-500">4.0 หน่วยกิต</span>
                  </div>
                  <span className="text-xl font-bold text-slate-900 font-mono tabular-nums">3.62</span>
                </div>

                {/* Foreign Languages */}
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm flex justify-between items-center sm:col-span-2">
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">ภาษาต่างประเทศ (ภาษาอังกฤษ)</h4>
                    <span className="text-xs text-slate-500">6.0 หน่วยกิต</span>
                  </div>
                  <span className="text-xl font-bold text-slate-900 font-mono tabular-nums">3.58</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: SKILLS & HOBBIES */}
      <section id="skills" className="py-16 md:py-20 px-4 bg-white border-t border-slate-200">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest block mb-1">
              Skills & Interests
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              ทักษะความสามารถพิเศษ & งานอดิเรก
            </h2>
            <div className="w-12 h-1 bg-slate-800 mx-auto mt-3 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Special Competencies */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center shadow-sm">
                  <Sparkles className="w-5 h-5 text-teal-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">ความสามารถพิเศษ</h3>
                  <p className="text-xs text-slate-500">Special Competencies</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-start gap-3 shadow-xs">
                  <div className="p-1.5 bg-slate-100 rounded-md text-slate-700 mt-0.5">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">ทักษะการวางแผนการทำงาน</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      วางเป้าหมายและจัดลำดับความสำคัญของกิจกรรมอย่างมีประสิทธิภาพ
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-start gap-3 shadow-xs">
                  <div className="p-1.5 bg-slate-100 rounded-md text-slate-700 mt-0.5">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">ทักษะการจัดการอย่างเป็นระบบ</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      การประสานงานและบริหารจัดการทรัพยากรอย่างรอบคอบ มีโครงสร้างที่ชัดเจน
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-start gap-3 shadow-xs">
                  <div className="p-1.5 bg-slate-100 rounded-md text-slate-700 mt-0.5">
                    <Presentation className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">ทักษะการทำสื่อการสอน</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      สรุปเนื้อหาวิชาการเคมีและวิทยาศาสตร์เพื่อถ่ายทอดให้เข้าใจง่าย
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hobbies */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center shadow-sm">
                  <Activity className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">งานอดิเรก</h3>
                  <p className="text-xs text-slate-500">Hobbies & Personal Interests</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3.5">
                <div className="p-4 bg-white rounded-xl border border-slate-200 text-center space-y-2 shadow-xs">
                  <div className="w-9 h-9 rounded-lg bg-purple-50 text-purple-700 mx-auto flex items-center justify-center">
                    <Headphones className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-slate-800 text-xs sm:text-sm">ฟัง Podcast</h4>
                  <p className="text-[11px] text-slate-500">เปิดรับความรู้และแนวคิดใหม่</p>
                </div>

                <div className="p-4 bg-white rounded-xl border border-slate-200 text-center space-y-2 shadow-xs">
                  <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-700 mx-auto flex items-center justify-center">
                    <Languages className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-slate-800 text-xs sm:text-sm">ท่องศัพท์ English</h4>
                  <p className="text-[11px] text-slate-500">พัฒนาคลังคำศัพท์วิชาการ</p>
                </div>

                <div className="p-4 bg-white rounded-xl border border-slate-200 text-center space-y-2 shadow-xs">
                  <div className="w-9 h-9 rounded-lg bg-orange-50 text-orange-700 mx-auto flex items-center justify-center">
                    <Activity className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-slate-800 text-xs sm:text-sm">เล่นบาสเกตบอล</h4>
                  <p className="text-[11px] text-slate-500">ออกกำลังกายและฝึกการทำงานเป็นทีม</p>
                </div>

                <div className="p-4 bg-white rounded-xl border border-slate-200 text-center space-y-2 shadow-xs">
                  <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-700 mx-auto flex items-center justify-center">
                    <Music className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-slate-800 text-xs sm:text-sm">เล่นกีต้าร์</h4>
                  <p className="text-[11px] text-slate-500">ผ่อนคลายและสร้างสมาธิ</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: ACTIVITIES & HONORS (FILTERABLE + MODAL LIGHTBOX) */}
      <section id="portfolio" className="py-16 md:py-20 px-4 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest block mb-1">
              Activities & Achievements
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              กิจกรรม และผลงานเกียรติบัตร
            </h2>
            <div className="w-12 h-1 bg-slate-800 mx-auto mt-3 rounded-full" />
          </div>

          {/* Interactive Filter Tabs (Segmented Buttons) */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8 p-1.5 bg-slate-200/70 rounded-xl max-w-fit mx-auto">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors ${
                selectedFilter === 'all'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              ทั้งหมด ({portfolioData.length})
            </button>
            <button
              onClick={() => setSelectedFilter('academic')}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors ${
                selectedFilter === 'academic'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              ด้านวิชาการ (2)
            </button>
            <button
              onClick={() => setSelectedFilter('activity')}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors ${
                selectedFilter === 'activity'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              ด้านกิจกรรม (3)
            </button>
            <button
              onClick={() => setSelectedFilter('volunteer')}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors ${
                selectedFilter === 'volunteer'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              ด้านจิตอาสา (1)
            </button>
          </div>

          {/* Portfolio Grid Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveModalItem(item)}
                className="group bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  {/* Card Header Surface */}
                  <div className="h-40 bg-gradient-to-br from-slate-900 to-slate-800 p-5 flex flex-col justify-between text-white relative">
                    {/* Metadata line without pill */}
                    <div className="flex items-center justify-between text-xs text-slate-300">
                      <span className="text-teal-400 font-semibold">{item.categoryLabel}</span>
                      <span>ปี {item.year}</span>
                    </div>

                    <div>
                      <div className="p-2 rounded-lg bg-white/10 w-fit mb-2 backdrop-blur-xs">
                        {renderIcon(item.iconType)}
                      </div>
                      <h4 className="font-bold text-sm sm:text-base leading-snug line-clamp-2">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-300 mt-1 line-clamp-1">{item.institution}</p>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 space-y-2">
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-4 pt-1 flex items-center justify-between text-xs text-teal-700 font-semibold border-t border-slate-100 mt-2">
                  <span>ดูรายละเอียดกิจกรรม</span>
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL / LIGHTBOX VIEWER */}
      {activeModalItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs"
          onClick={() => setActiveModalItem(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-lg w-full border border-slate-200 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-slate-900 text-white p-6 relative">
              <button
                onClick={() => setActiveModalItem(null)}
                className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-white rounded-lg bg-slate-800"
                aria-label="ปิดหน้าต่าง"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-xs text-teal-400 font-medium mb-1">
                {activeModalItem.categoryLabel} · ประจำปี {activeModalItem.year}
              </div>
              <h3 className="text-lg font-bold leading-tight pr-6">
                {activeModalItem.title}
              </h3>
              <p className="text-xs text-slate-300 mt-1 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                <span>{activeModalItem.institution}</span>
              </p>
            </div>

            <div className="p-6 space-y-5">
              <div>
                <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-1.5">
                  รายละเอียดกิจกรรม
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {activeModalItem.fullDetail}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-2">
                  ทักษะและผลลัพธ์ที่ได้รับ
                </h4>
                <ul className="space-y-1.5">
                  {activeModalItem.learningOutcomes.map((outcome, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <Check className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 border-t border-slate-200 flex justify-end">
                <button
                  onClick={() => setActiveModalItem(null)}
                  className="px-4 py-2 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
                >
                  ปิด
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="bg-white border-t border-slate-200 py-10 px-4">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            <span className="font-semibold text-slate-800">นายทินกร พันแสน (สตางค์)</span>
            <span className="mx-2">·</span>
            <span>วิทยาลัยสาธารณสุขสิรินธร ขอนแก่น</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="mailto:monstang0123@gmail.com"
              className="hover:text-slate-900 transition-colors"
            >
              monstang0123@gmail.com
            </a>
            <span aria-hidden="true">·</span>
            <span>วิทยาลัยสาธารณสุขสิรินธร จังหวัดขอนแก่น</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
