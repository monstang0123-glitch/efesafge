const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

const base64File = path.join(__dirname, '..', 'src', 'assets', 'images', 'portrait_base64.txt');
let portraitData = '';
if (fs.existsSync(base64File)) {
  portraitData = fs.readFileSync(base64File, 'utf8').trim();
} else {
  const imgPath = path.join(__dirname, '..', 'src', 'assets', 'images', '1791967150627.jpg');
  if (fs.existsSync(imgPath)) {
    const b64 = fs.readFileSync(imgPath).toString('base64');
    portraitData = 'data:image/jpeg;base64,' + b64;
  }
}

const html = `<!DOCTYPE html>
<html lang="th" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Academic Portfolio | นายทินกร พันแสน (สตางค์)</title>
    <meta name="description" content="แฟ้มสะสมผลงาน (Portfolio) นายทินกร พันแสน โครงการ MOU คณะสาธารณสุขศาสตร์และสหเวชศาสตร์ วิทยาลัยสาธารณสุขสิรินธร ขอนแก่น">
    <meta property="og:title" content="Academic Portfolio | นายทินกร พันแสน (สตางค์)">
    <meta property="og:description" content="แฟ้มสะสมผลงาน (Portfolio) นายทินกร พันแสน">

    <!-- Google Fonts: Prompt & Inter -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Prompt:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet">

    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Prompt', 'Inter', 'sans-serif'],
                    }
                }
            }
        }
    </script>

    <!-- FontAwesome Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

    <style>
        body { font-family: 'Prompt', 'Inter', sans-serif; background-color: #f8fafc; color: #1e293b; }
        @media print {
            nav, .no-print, button { display: none !important; }
            body { background-color: white !important; color: black !important; }
        }
    </style>
</head>
<body class="antialiased selection:bg-slate-900 selection:text-white">

    <!-- Toast Notification -->
    <div id="toast" class="fixed bottom-6 right-6 z-50 hidden flex items-center gap-2 bg-slate-900 text-white px-4 py-2.5 rounded-xl shadow-xl text-xs font-medium border border-slate-700 transition-all">
        <i class="fa-solid fa-check text-emerald-400"></i>
        <span id="toast-msg">คัดลอกเรียบร้อยแล้ว</span>
    </div>

    <!-- Header Navigation -->
    <header class="fixed top-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between gap-8 h-16">
                <a href="#about" class="text-base font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 flex items-center gap-2.5 group">
                    <div class="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center font-bold text-sm shadow-sm group-hover:bg-teal-700 transition-colors">
                        T
                    </div>
                    <span class="font-semibold text-slate-900">ทินกร พันแสน</span>
                    <span class="text-slate-400 font-normal hidden sm:inline">· Portfolio</span>
                </a>

                <nav class="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
                    <a href="#about" class="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">ประวัติส่วนตัว</a>
                    <a href="#education" class="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">การศึกษา & ผลการเรียน</a>
                    <a href="#skills" class="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">ทักษะ & งานอดิเรก</a>
                    <a href="#portfolio" class="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">กิจกรรม & ผลงาน</a>
                </nav>

                <div class="flex items-center gap-3 shrink-0">
                    <button onclick="window.print()" class="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 text-xs font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-sm">
                        <i class="fa-solid fa-print text-teal-400"></i>
                        <span>พิมพ์ / บันทึก PDF</span>
                    </button>
                    <button id="mobile-menu-btn" class="md:hidden p-2 text-slate-600 hover:text-slate-900 rounded-lg">
                        <i class="fa-solid fa-bars text-lg"></i>
                    </button>
                </div>
            </div>
        </div>

        <!-- Mobile Drawer -->
        <div id="mobile-menu" class="hidden md:hidden border-b border-slate-200 bg-white/95 px-4 pt-2 pb-5 space-y-1 shadow-lg">
            <a href="#about" class="mobile-link block px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 rounded-lg">ประวัติส่วนตัว</a>
            <a href="#education" class="mobile-link block px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 rounded-lg">การศึกษา & ผลการเรียน</a>
            <a href="#skills" class="mobile-link block px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 rounded-lg">ทักษะ & งานอดิเรก</a>
            <a href="#portfolio" class="mobile-link block px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 rounded-lg">กิจกรรม & ผลงาน</a>
            <button onclick="window.print()" class="w-full mt-2 flex items-center justify-center gap-2 px-3 py-2.5 text-xs font-medium text-white bg-slate-900 rounded-lg">
                <i class="fa-solid fa-print text-teal-400"></i>
                <span>พิมพ์ / บันทึก PDF</span>
            </button>
        </div>
    </header>

    <!-- SECTION 1: PROFILE / HERO -->
    <section id="about" class="pt-28 pb-16 md:pt-36 md:pb-20 px-4">
        <div class="max-w-5xl mx-auto">
            <div class="flex items-center gap-2 text-xs font-medium text-slate-500 mb-4">
                <span class="text-teal-700 font-semibold">แฟ้มสะสมผลงาน (PORTFOLIO)</span>
                <span aria-hidden="true">·</span>
                <span>โครงการ MOU</span>
                <span aria-hidden="true">·</span>
                <span>ปีการศึกษา 2568</span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <!-- Student Image Box -->
                <div class="md:col-span-5 flex flex-col items-center">
                    <div class="relative group w-60 sm:w-64 rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-white">
                        <img src="${portraitData}" alt="นายทินกร พันแสน (สตางค์)" class="w-full h-80 object-cover object-top transition-transform duration-500 group-hover:scale-105">
                        <div class="p-4 bg-slate-900 text-white text-center">
                            <div class="font-bold text-sm tracking-wide">นายทินกร พันแสน</div>
                            <div class="text-xs text-slate-300 mt-0.5">วิทยาลัยสาธารณสุขสิรินธร ขอนแก่น</div>
                        </div>
                    </div>
                </div>

                <!-- Profile Information Details -->
                <div class="md:col-span-7 space-y-4 text-left">
                    <div>
                        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
                            นายทินกร พันแสน <span class="text-slate-500 font-normal text-2xl sm:text-3xl">(สตางค์)</span>
                        </h1>
                        <p class="text-sm sm:text-base text-slate-600 mt-2">
                            วันเกิด: 16 กรกฎาคม 2551 (อายุ 18 ปี)
                        </p>
                    </div>

                    <!-- Education Goal Box -->
                    <div class="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-3">
                        <div class="p-2.5 bg-teal-50 text-teal-700 rounded-lg mt-0.5">
                            <i class="fa-solid fa-notes-medical text-lg"></i>
                        </div>
                        <div>
                            <span class="text-xs font-semibold text-slate-400 uppercase tracking-wider block">เป้าหมายการศึกษา</span>
                            <h2 class="text-base font-bold text-slate-900">คณะสาธารณสุขศาสตร์และสหเวชศาสตร์ หลักสูตรสาธารณสุขศาสตรบัณฑิต สาขาวิชาสาธารณสุขชุมชน</h2>
                            <p class="text-xs text-slate-500 mt-0.5">วิทยาลัยสาธารณสุขสิรินธร จังหวัดขอนแก่น</p>
                        </div>
                    </div>

                    <!-- Personal Motto -->
                    <div class="p-4 rounded-xl bg-slate-900 text-slate-100 shadow-sm flex items-center gap-3">
                        <i class="fa-solid fa-quote-left text-amber-400 text-lg shrink-0"></i>
                        <div>
                            <div class="text-xs text-slate-400">คติประจำใจ</div>
                            <div class="text-base font-bold text-amber-400 tracking-wide">"Job's not finished"</div>
                        </div>
                    </div>

                    <!-- Contact Actions -->
                    <div class="pt-2 flex flex-wrap gap-2.5 text-xs">
                        <button onclick="copyText('monstang0123@gmail.com', 'อีเมล')" class="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors shadow-sm">
                            <i class="fa-regular fa-envelope text-red-500"></i>
                            <span class="font-medium">monstang0123@gmail.com</span>
                        </button>
                        <button onclick="copyText('Thinakon Phansean', 'ชื่อ Facebook')" class="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors shadow-sm">
                            <i class="fa-brands fa-facebook text-blue-600"></i>
                            <span class="font-medium">Thinakon Phansean</span>
                        </button>
                        <button onclick="copyText('athingkxh', 'Instagram Handle')" class="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors shadow-sm">
                            <i class="fa-brands fa-instagram text-pink-600"></i>
                            <span class="font-medium">athingkxh</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- SECTION 2: ACADEMIC BACKGROUND & GRADES -->
    <section id="education" class="py-16 md:py-20 px-4 bg-slate-50">
        <div class="max-w-5xl mx-auto">
            <div class="text-center mb-10">
                <span class="text-xs font-semibold text-slate-500 uppercase tracking-widest block mb-1">Academic Background</span>
                <h2 class="text-2xl sm:text-3xl font-bold text-slate-900">ประวัติการศึกษา & ผลการเรียน</h2>
                <div class="w-12 h-1 bg-slate-800 mx-auto mt-3 rounded-full"></div>
            </div>

            <!-- Top GPAX Card -->
            <div class="bg-slate-900 rounded-2xl p-6 sm:p-8 text-white shadow-lg mb-10 flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-800">
                <div class="space-y-1.5 text-center md:text-left">
                    <div class="text-xs text-slate-400 flex items-center justify-center md:justify-start gap-1.5">
                        <i class="fa-solid fa-graduation-cap text-teal-400"></i>
                        <span>ระดับมัธยมศึกษาตอนปลาย · แผนการเรียนวิทยาศาสตร์-คณิตศาสตร์</span>
                    </div>
                    <h3 class="text-2xl font-bold">โรงเรียนโนนสูงพิทยาคาร</h3>
                    <p class="text-slate-300 text-xs sm:text-sm">ตำบลโนนสูง อำเภอเมืองอุดรธานี จังหวัดอุดรธานี</p>
                </div>

                <div class="flex items-center gap-4 bg-white/5 px-6 py-4 rounded-xl border border-white/10 text-center">
                    <div>
                        <span class="text-xs uppercase text-slate-300 font-medium block">ผลการเรียนเฉลี่ยรวม</span>
                        <span class="text-4xl sm:text-5xl font-black text-amber-400 font-mono tracking-tight">3.77</span>
                        <span class="text-xs text-slate-400 block mt-0.5">GPAX (62.0 หน่วยกิต)</span>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <!-- Timeline -->
                <div class="lg:col-span-5 space-y-4">
                    <h3 class="text-base font-bold text-slate-900 flex items-center gap-2">
                        <i class="fa-regular fa-calendar-check text-teal-700"></i>
                        <span>เส้นทางการศึกษา</span>
                    </h3>

                    <div class="relative pl-6 border-l-2 border-slate-200 space-y-6">
                        <div class="relative">
                            <div class="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-slate-900 border-2 border-white shadow-sm"></div>
                            <div class="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                                <span class="text-xs font-semibold text-teal-700">มัธยมศึกษาตอนปลาย</span>
                                <h4 class="font-bold text-slate-800 text-sm mt-0.5">โรงเรียนโนนสูงพิทยาคาร</h4>
                                <p class="text-xs text-slate-500">อ.เมืองอุดรธานี จ.อุดรธานี</p>
                            </div>
                        </div>

                        <div class="relative">
                            <div class="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-slate-400 border-2 border-white"></div>
                            <div class="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                                <span class="text-xs font-semibold text-slate-500">มัธยมศึกษาตอนต้น</span>
                                <h4 class="font-bold text-slate-800 text-sm mt-0.5">โรงเรียนพันธกิจวิทยา</h4>
                                <p class="text-xs text-slate-500">อ.เมืองอุดรธานี จ.อุดรธานี</p>
                            </div>
                        </div>

                        <div class="relative">
                            <div class="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-slate-300 border-2 border-white"></div>
                            <div class="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                                <span class="text-xs font-semibold text-slate-500">ประถมศึกษา</span>
                                <h4 class="font-bold text-slate-800 text-sm mt-0.5">โรงเรียนพันธกิจวิทยา</h4>
                                <p class="text-xs text-slate-500">อ.เมืองอุดรธานี จ.อุดรธานี</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- GPA Breakdown -->
                <div class="lg:col-span-7 space-y-4">
                    <h3 class="text-base font-bold text-slate-900 flex items-center gap-2">
                        <i class="fa-solid fa-chart-simple text-teal-700"></i>
                        <span>ผลการเรียนแยกตามกลุ่มสาระฯ</span>
                    </h3>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div class="p-4 rounded-xl bg-white border-2 border-teal-700 shadow-sm flex justify-between items-center col-span-1 sm:col-span-2">
                            <div class="flex items-center gap-3">
                                <div class="w-10 h-10 rounded-lg bg-teal-700 text-white flex items-center justify-center">
                                    <i class="fa-solid fa-flask-vial text-lg"></i>
                                </div>
                                <div>
                                    <h4 class="font-bold text-slate-900 text-sm">วิทยาศาสตร์และเทคโนโลยี</h4>
                                    <span class="text-xs text-slate-500">24.0 หน่วยกิต</span>
                                </div>
                            </div>
                            <div class="text-right">
                                <span class="text-2xl font-black text-teal-800 font-mono">3.70</span>
                                <span class="text-[11px] text-slate-400 block">GPA</span>
                            </div>
                        </div>

                        <div class="p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm flex justify-between items-center">
                            <div>
                                <h4 class="font-bold text-slate-800 text-sm">คณิตศาสตร์</h4>
                                <span class="text-xs text-slate-500">12.0 หน่วยกิต</span>
                            </div>
                            <span class="text-xl font-bold text-slate-900 font-mono">3.87</span>
                        </div>

                        <div class="p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm flex justify-between items-center">
                            <div>
                                <h4 class="font-bold text-slate-800 text-sm">สังคมศึกษา ศาสนาฯ</h4>
                                <span class="text-xs text-slate-500">7.0 หน่วยกิต</span>
                            </div>
                            <span class="text-xl font-bold text-slate-900 font-mono">3.92</span>
                        </div>

                        <div class="p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm flex justify-between items-center">
                            <div>
                                <h4 class="font-bold text-slate-800 text-sm">สุขศึกษาและพลศึกษา</h4>
                                <span class="text-xs text-slate-500">2.0 หน่วยกิต</span>
                            </div>
                            <span class="text-xl font-bold text-slate-900 font-mono">3.87</span>
                        </div>

                        <div class="p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm flex justify-between items-center">
                            <div>
                                <h4 class="font-bold text-slate-800 text-sm">ภาษาไทย</h4>
                                <span class="text-xs text-slate-500">4.0 หน่วยกิต</span>
                            </div>
                            <span class="text-xl font-bold text-slate-900 font-mono">3.62</span>
                        </div>

                        <div class="p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm flex justify-between items-center sm:col-span-2">
                            <div>
                                <h4 class="font-bold text-slate-800 text-sm">ภาษาต่างประเทศ (ภาษาอังกฤษ)</h4>
                                <span class="text-xs text-slate-500">6.0 หน่วยกิต</span>
                            </div>
                            <span class="text-xl font-bold text-slate-900 font-mono">3.58</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- SECTION 3: SKILLS & HOBBIES -->
    <section id="skills" class="py-16 md:py-20 px-4 bg-white border-t border-slate-200">
        <div class="max-w-5xl mx-auto">
            <div class="text-center mb-10">
                <span class="text-xs font-semibold text-slate-500 uppercase tracking-widest block mb-1">Skills & Interests</span>
                <h2 class="text-2xl sm:text-3xl font-bold text-slate-900">ทักษะความสามารถพิเศษ & งานอดิเรก</h2>
                <div class="w-12 h-1 bg-slate-800 mx-auto mt-3 rounded-full"></div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <!-- Competencies -->
                <div class="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-sm">
                    <div class="flex items-center gap-3 mb-5">
                        <div class="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center shadow-sm">
                            <i class="fa-solid fa-wand-magic-sparkles text-teal-400"></i>
                        </div>
                        <div>
                            <h3 class="text-lg font-bold text-slate-900">ความสามารถพิเศษ</h3>
                            <p class="text-xs text-slate-500">Special Competencies</p>
                        </div>
                    </div>

                    <div class="space-y-3">
                        <div class="p-3.5 rounded-xl bg-white border border-slate-200 flex items-start gap-3 shadow-xs">
                            <div class="p-1.5 bg-slate-100 rounded-md text-slate-700 mt-0.5">
                                <i class="fa-regular fa-calendar-check text-sm"></i>
                            </div>
                            <div>
                                <h4 class="font-bold text-slate-900 text-sm">ทักษะการวางแผนการทำงาน</h4>
                                <p class="text-xs text-slate-600 mt-0.5">วางเป้าหมายและจัดลำดับความสำคัญของกิจกรรมอย่างมีประสิทธิภาพ</p>
                            </div>
                        </div>

                        <div class="p-3.5 rounded-xl bg-white border border-slate-200 flex items-start gap-3 shadow-xs">
                            <div class="p-1.5 bg-slate-100 rounded-md text-slate-700 mt-0.5">
                                <i class="fa-solid fa-users text-sm"></i>
                            </div>
                            <div>
                                <h4 class="font-bold text-slate-900 text-sm">ทักษะการจัดการอย่างเป็นระบบ</h4>
                                <p class="text-xs text-slate-600 mt-0.5">การประสานงานและบริหารจัดการทรัพยากรอย่างรอบคอบ มีโครงสร้างที่ชัดเจน</p>
                            </div>
                        </div>

                        <div class="p-3.5 rounded-xl bg-white border border-slate-200 flex items-start gap-3 shadow-xs">
                            <div class="p-1.5 bg-slate-100 rounded-md text-slate-700 mt-0.5">
                                <i class="fa-solid fa-chalkboard-user text-sm"></i>
                            </div>
                            <div>
                                <h4 class="font-bold text-slate-900 text-sm">ทักษะการทำสื่อการสอน</h4>
                                <p class="text-xs text-slate-600 mt-0.5">สรุปเนื้อหาวิชาการเคมีและวิทยาศาสตร์เพื่อถ่ายทอดให้เข้าใจง่าย</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Hobbies -->
                <div class="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-sm">
                    <div class="flex items-center gap-3 mb-5">
                        <div class="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center shadow-sm">
                            <i class="fa-solid fa-heart text-amber-400"></i>
                        </div>
                        <div>
                            <h3 class="text-lg font-bold text-slate-900">งานอดิเรก</h3>
                            <p class="text-xs text-slate-500">Hobbies & Personal Interests</p>
                        </div>
                    </div>

                    <div class="grid grid-cols-2 gap-3.5">
                        <div class="p-4 bg-white rounded-xl border border-slate-200 text-center space-y-2 shadow-xs">
                            <div class="w-9 h-9 rounded-lg bg-purple-50 text-purple-700 mx-auto flex items-center justify-center">
                                <i class="fa-solid fa-podcast"></i>
                            </div>
                            <h4 class="font-bold text-slate-800 text-xs sm:text-sm">ฟัง Podcast</h4>
                            <p class="text-[11px] text-slate-500">เปิดรับความรู้และแนวคิดใหม่</p>
                        </div>

                        <div class="p-4 bg-white rounded-xl border border-slate-200 text-center space-y-2 shadow-xs">
                            <div class="w-9 h-9 rounded-lg bg-blue-50 text-blue-700 mx-auto flex items-center justify-center">
                                <i class="fa-solid fa-language"></i>
                            </div>
                            <h4 class="font-bold text-slate-800 text-xs sm:text-sm">ท่องศัพท์ English</h4>
                            <p class="text-[11px] text-slate-500">พัฒนาคลังคำศัพท์วิชาการ</p>
                        </div>

                        <div class="p-4 bg-white rounded-xl border border-slate-200 text-center space-y-2 shadow-xs">
                            <div class="w-9 h-9 rounded-lg bg-orange-50 text-orange-700 mx-auto flex items-center justify-center">
                                <i class="fa-solid fa-basketball"></i>
                            </div>
                            <h4 class="font-bold text-slate-800 text-xs sm:text-sm">เล่นบาสเกตบอล</h4>
                            <p class="text-[11px] text-slate-500">ออกกำลังกายและทีมเวิร์ก</p>
                        </div>

                        <div class="p-4 bg-white rounded-xl border border-slate-200 text-center space-y-2 shadow-xs">
                            <div class="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-700 mx-auto flex items-center justify-center">
                                <i class="fa-solid fa-guitar"></i>
                            </div>
                            <h4 class="font-bold text-slate-800 text-xs sm:text-sm">เล่นกีต้าร์</h4>
                            <p class="text-[11px] text-slate-500">ผ่อนคลายและสร้างสมาธิ</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- SECTION 4: ACTIVITIES & HONORS -->
    <section id="portfolio" class="py-16 md:py-20 px-4 bg-slate-50 border-t border-slate-200">
        <div class="max-w-6xl mx-auto">
            <div class="text-center mb-8">
                <span class="text-xs font-semibold text-slate-500 uppercase tracking-widest block mb-1">Activities & Achievements</span>
                <h2 class="text-2xl sm:text-3xl font-bold text-slate-900">กิจกรรม และผลงานเกียรติบัตร</h2>
                <div class="w-12 h-1 bg-slate-800 mx-auto mt-3 rounded-full"></div>
            </div>

            <!-- Filter Buttons -->
            <div class="flex flex-wrap items-center justify-center gap-2 mb-8 p-1.5 bg-slate-200/70 rounded-xl max-w-fit mx-auto">
                <button onclick="filterPortfolio('all')" class="filter-btn active px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors bg-slate-900 text-white shadow-sm" data-cat="all">
                    ทั้งหมด (6)
                </button>
                <button onclick="filterPortfolio('academic')" class="filter-btn px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors text-slate-700 hover:text-slate-900" data-cat="academic">
                    ด้านวิชาการ (2)
                </button>
                <button onclick="filterPortfolio('activity')" class="filter-btn px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors text-slate-700 hover:text-slate-900" data-cat="activity">
                    ด้านกิจกรรม (3)
                </button>
                <button onclick="filterPortfolio('volunteer')" class="filter-btn px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors text-slate-700 hover:text-slate-900" data-cat="volunteer">
                    ด้านจิตอาสา (1)
                </button>
            </div>

            <!-- Grid Items -->
            <div id="portfolio-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                <!-- Item 1 -->
                <div class="portfolio-card group bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col justify-between" data-category="academic" onclick="openModal(0)">
                    <div>
                        <div class="h-40 bg-gradient-to-br from-slate-900 to-slate-800 p-5 flex flex-col justify-between text-white relative">
                            <div class="flex items-center justify-between text-xs text-slate-300">
                                <span class="text-teal-400 font-semibold">ด้านวิชาการ</span>
                                <span>ปี 2567</span>
                            </div>
                            <div>
                                <div class="p-2 rounded-lg bg-white/10 w-fit mb-2 backdrop-blur-xs">
                                    <i class="fa-solid fa-rocket text-teal-400"></i>
                                </div>
                                <h4 class="font-bold text-sm sm:text-base leading-snug line-clamp-2">ตัวแทนแข่งขันจรวดขวดน้ำ สัปดาห์วิทยาศาสตร์แห่งชาติ</h4>
                                <p class="text-xs text-slate-300 mt-1 line-clamp-1">คณะวิทยาศาสตร์ มหาวิทยาลัยขอนแก่น</p>
                            </div>
                        </div>
                        <div class="p-5 space-y-2">
                            <p class="text-xs text-slate-600 leading-relaxed line-clamp-3">ตัวแทนโรงเรียนโนนสูงพิทยาคาร เข้าร่วมการแข่งขันจรวดขวดน้ำ ในงานสัปดาห์วิทยาศาสตร์แห่งชาติ ส่วนภูมิภาค</p>
                        </div>
                    </div>
                    <div class="px-5 pb-4 pt-1 flex items-center justify-between text-xs text-teal-700 font-semibold border-t border-slate-100 mt-2">
                        <span>ดูรายละเอียดกิจกรรม</span>
                        <i class="fa-solid fa-chevron-right text-[10px] group-hover:translate-x-1 transition-transform"></i>
                    </div>
                </div>

                <!-- Item 2 -->
                <div class="portfolio-card group bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col justify-between" data-category="academic" onclick="openModal(1)">
                    <div>
                        <div class="h-40 bg-gradient-to-br from-slate-900 to-slate-800 p-5 flex flex-col justify-between text-white relative">
                            <div class="flex items-center justify-between text-xs text-slate-300">
                                <span class="text-teal-400 font-semibold">ด้านวิชาการ</span>
                                <span>ปี 2568</span>
                            </div>
                            <div>
                                <div class="p-2 rounded-lg bg-white/10 w-fit mb-2 backdrop-blur-xs">
                                    <i class="fa-solid fa-microscope text-teal-400"></i>
                                </div>
                                <h4 class="font-bold text-sm sm:text-base leading-snug line-clamp-2">การแข่งขันกระบวนการแก้ปัญหาทางวิทยาศาสตร์</h4>
                                <p class="text-xs text-slate-300 mt-1 line-clamp-1">คณะวิทยาศาสตร์ มหาวิทยาลัยขอนแก่น</p>
                            </div>
                        </div>
                        <div class="p-5 space-y-2">
                            <p class="text-xs text-slate-600 leading-relaxed line-clamp-3">เข้าร่วมการแข่งขันกระบวนการแก้ปัญหาทางวิทยาศาสตร์ ระดับมัธยมศึกษาตอนปลาย</p>
                        </div>
                    </div>
                    <div class="px-5 pb-4 pt-1 flex items-center justify-between text-xs text-teal-700 font-semibold border-t border-slate-100 mt-2">
                        <span>ดูรายละเอียดกิจกรรม</span>
                        <i class="fa-solid fa-chevron-right text-[10px] group-hover:translate-x-1 transition-transform"></i>
                    </div>
                </div>

                <!-- Item 3 -->
                <div class="portfolio-card group bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col justify-between" data-category="activity" onclick="openModal(2)">
                    <div>
                        <div class="h-40 bg-gradient-to-br from-slate-900 to-slate-800 p-5 flex flex-col justify-between text-white relative">
                            <div class="flex items-center justify-between text-xs text-slate-300">
                                <span class="text-teal-400 font-semibold">ด้านกิจกรรม</span>
                                <span>ปี 2567</span>
                            </div>
                            <div>
                                <div class="p-2 rounded-lg bg-white/10 w-fit mb-2 backdrop-blur-xs">
                                    <i class="fa-solid fa-flask-vial text-teal-400"></i>
                                </div>
                                <h4 class="font-bold text-sm sm:text-base leading-snug line-clamp-2">กิจกรรมทดลอง ความหนาแน่นของสาร (น้ำหวานสายรุ้ง)</h4>
                                <p class="text-xs text-slate-300 mt-1 line-clamp-1">กลุ่มสาระการเรียนรู้วิทยาศาสตร์ โรงเรียนโนนสูงพิทยาคาร</p>
                            </div>
                        </div>
                        <div class="p-5 space-y-2">
                            <p class="text-xs text-slate-600 leading-relaxed line-clamp-3">กิจกรรมปฏิบัติการเคมีเพื่อศึกษาความหนาแน่นและการแบ่งชั้นสารละลาย</p>
                        </div>
                    </div>
                    <div class="px-5 pb-4 pt-1 flex items-center justify-between text-xs text-teal-700 font-semibold border-t border-slate-100 mt-2">
                        <span>ดูรายละเอียดกิจกรรม</span>
                        <i class="fa-solid fa-chevron-right text-[10px] group-hover:translate-x-1 transition-transform"></i>
                    </div>
                </div>

                <!-- Item 4 -->
                <div class="portfolio-card group bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col justify-between" data-category="activity" onclick="openModal(3)">
                    <div>
                        <div class="h-40 bg-gradient-to-br from-slate-900 to-slate-800 p-5 flex flex-col justify-between text-white relative">
                            <div class="flex items-center justify-between text-xs text-slate-300">
                                <span class="text-teal-400 font-semibold">ด้านกิจกรรม</span>
                                <span>ปี 2567</span>
                            </div>
                            <div>
                                <div class="p-2 rounded-lg bg-white/10 w-fit mb-2 backdrop-blur-xs">
                                    <i class="fa-solid fa-chalkboard-user text-teal-400"></i>
                                </div>
                                <h4 class="font-bold text-sm sm:text-base leading-snug line-clamp-2">ผู้สอนและถ่ายทอดความรู้ การเกิดปฏิกิริยาพอลิเมอร์</h4>
                                <p class="text-xs text-slate-300 mt-1 line-clamp-1">โรงเรียนโนนสูงพิทยาคาร</p>
                            </div>
                        </div>
                        <div class="p-5 space-y-2">
                            <p class="text-xs text-slate-600 leading-relaxed line-clamp-3">ถ่ายทอดความรู้เคมีเรื่องโครงสร้างและการเกิดพอลิเมอร์ให้แก่เพื่อนร่วมชั้น</p>
                        </div>
                    </div>
                    <div class="px-5 pb-4 pt-1 flex items-center justify-between text-xs text-teal-700 font-semibold border-t border-slate-100 mt-2">
                        <span>ดูรายละเอียดกิจกรรม</span>
                        <i class="fa-solid fa-chevron-right text-[10px] group-hover:translate-x-1 transition-transform"></i>
                    </div>
                </div>

                <!-- Item 5 -->
                <div class="portfolio-card group bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col justify-between" data-category="volunteer" onclick="openModal(4)">
                    <div>
                        <div class="h-40 bg-gradient-to-br from-slate-900 to-slate-800 p-5 flex flex-col justify-between text-white relative">
                            <div class="flex items-center justify-between text-xs text-slate-300">
                                <span class="text-teal-400 font-semibold">ด้านจิตอาสา</span>
                                <span>ปี 2567</span>
                            </div>
                            <div>
                                <div class="p-2 rounded-lg bg-white/10 w-fit mb-2 backdrop-blur-xs">
                                    <i class="fa-solid fa-hand-holding-heart text-teal-400"></i>
                                </div>
                                <h4 class="font-bold text-sm sm:text-base leading-snug line-clamp-2">กิจกรรมจิตอาสาพัฒนาสิ่งแวดล้อมและโรงเรียน</h4>
                                <p class="text-xs text-slate-300 mt-1 line-clamp-1">โรงเรียนโนนสูงพิทยาคาร และชุมชนโนนสูง</p>
                            </div>
                        </div>
                        <div class="p-5 space-y-2">
                            <p class="text-xs text-slate-600 leading-relaxed line-clamp-3">ร่วมปลูกต้นไม้ ปรับปรุงภูมิทัศน์ และคัดแยกขยะเพื่อสิ่งแวดล้อมที่ยั่งยืน</p>
                        </div>
                    </div>
                    <div class="px-5 pb-4 pt-1 flex items-center justify-between text-xs text-teal-700 font-semibold border-t border-slate-100 mt-2">
                        <span>ดูรายละเอียดกิจกรรม</span>
                        <i class="fa-solid fa-chevron-right text-[10px] group-hover:translate-x-1 transition-transform"></i>
                    </div>
                </div>

                <!-- Item 6 -->
                <div class="portfolio-card group bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col justify-between" data-category="activity" onclick="openModal(5)">
                    <div>
                        <div class="h-40 bg-gradient-to-br from-slate-900 to-slate-800 p-5 flex flex-col justify-between text-white relative">
                            <div class="flex items-center justify-between text-xs text-slate-300">
                                <span class="text-teal-400 font-semibold">ด้านกิจกรรม</span>
                                <span>ปี 2567</span>
                            </div>
                            <div>
                                <div class="p-2 rounded-lg bg-white/10 w-fit mb-2 backdrop-blur-xs">
                                    <i class="fa-solid fa-basketball text-teal-400"></i>
                                </div>
                                <h4 class="font-bold text-sm sm:text-base leading-snug line-clamp-2">นักกีฬาบาสเกตบอลตัวแทนระดับชั้น การแข่งขันกีฬาภายใน</h4>
                                <p class="text-xs text-slate-300 mt-1 line-clamp-1">โรงเรียนโนนสูงพิทยาคาร</p>
                            </div>
                        </div>
                        <div class="p-5 space-y-2">
                            <p class="text-xs text-slate-600 leading-relaxed line-clamp-3">ตัวแทนนักกีฬาบาสเกตบอล เสริมสร้างสุขภาพ ความมีน้ำใจนักกีฬา และการทำงานเป็นทีม</p>
                        </div>
                    </div>
                    <div class="px-5 pb-4 pt-1 flex items-center justify-between text-xs text-teal-700 font-semibold border-t border-slate-100 mt-2">
                        <span>ดูรายละเอียดกิจกรรม</span>
                        <i class="fa-solid fa-chevron-right text-[10px] group-hover:translate-x-1 transition-transform"></i>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- Detail Modal -->
    <div id="modal" class="fixed inset-0 z-50 hidden flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs" onclick="closeModal()">
        <div class="bg-white rounded-2xl max-w-lg w-full border border-slate-200 shadow-2xl overflow-hidden" onclick="event.stopPropagation()">
            <div class="bg-slate-900 text-white p-6 relative">
                <button onclick="closeModal()" class="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-white rounded-lg bg-slate-800">
                    <i class="fa-solid fa-xmark text-lg"></i>
                </button>
                <div id="m-category" class="text-xs text-teal-400 font-medium mb-1"></div>
                <h3 id="m-title" class="text-lg font-bold leading-tight pr-6"></h3>
                <p id="m-inst" class="text-xs text-slate-300 mt-1 flex items-center gap-1.5"></p>
            </div>
            <div class="p-6 space-y-5">
                <div>
                    <h4 class="text-xs font-bold uppercase text-slate-400 tracking-wider mb-1.5">รายละเอียดกิจกรรม</h4>
                    <p id="m-detail" class="text-sm text-slate-700 leading-relaxed"></p>
                </div>
                <div>
                    <h4 class="text-xs font-bold uppercase text-slate-400 tracking-wider mb-2">ทักษะและผลลัพธ์ที่ได้รับ</h4>
                    <ul id="m-outcomes" class="space-y-1.5 text-xs text-slate-700"></ul>
                </div>
                <div class="pt-2 border-t border-slate-200 flex justify-end">
                    <button onclick="closeModal()" class="px-4 py-2 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors">ปิด</button>
                </div>
            </div>
        </div>
    </div>

    <!-- FOOTER -->
    <footer class="bg-white border-t border-slate-200 py-10 px-4">
        <div class="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <div>
                <span class="font-semibold text-slate-800">นายทินกร พันแสน (สตางค์)</span>
                <span class="mx-2">·</span>
                <span>วิทยาลัยสาธารณสุขสิรินธร ขอนแก่น</span>
            </div>
            <div class="flex items-center gap-4">
                <a href="mailto:monstang0123@gmail.com" class="hover:text-slate-900 transition-colors">monstang0123@gmail.com</a>
                <span aria-hidden="true">·</span>
                <span>วิทยาลัยสาธารณสุขสิรินธร จังหวัดขอนแก่น</span>
            </div>
        </div>
    </footer>

    <!-- Interactive Scripts -->
    <script>
        const activities = [
            {
                title: 'ตัวแทนแข่งขันจรวดขวดน้ำ สัปดาห์วิทยาศาสตร์แห่งชาติ',
                category: 'ด้านวิชาการ · ประจำปี 2567',
                institution: 'คณะวิทยาศาสตร์ มหาวิทยาลัยขอนแก่น',
                detail: 'ได้รับคัดเลือกเป็นตัวแทนโรงเรียนโนนสูงพิทยาคาร เข้าร่วมการแข่งขันจรวดขวดน้ำ ระดับมัธยมศึกษา ในงานสัปดาห์วิทยาศาสตร์แห่งชาติ ส่วนภูมิภาค ประจำปี 2567 ณ มหาวิทยาลัยขอนแก่น ได้ประยุกต์ใช้หลักการฟิสิกส์ แรงดัน อากาศพลศาสตร์ และการทำงานร่วมกันเป็นทีมในการคำนวณและปรับแต่งจรวดขวดน้ำให้เข้าเป้าหมายอย่างแม่นยำ',
                outcomes: ['การคำนวณแรงดันและมุมยิง', 'การวางแผนและการทำงานร่วมกันเป็นทีม', 'การแก้ไขปัญหาเฉพาะหน้าในสถานการณ์จริง']
            },
            {
                title: 'การแข่งขันกระบวนการแก้ปัญหาทางวิทยาศาสตร์',
                category: 'ด้านวิชาการ · ประจำปี 2568',
                institution: 'คณะวิทยาศาสตร์ มหาวิทยาลัยขอนแก่น',
                detail: 'เข้าร่วมการแข่งขันกระบวนการแก้ปัญหาทางวิทยาศาสตร์ ระดับมัธยมศึกษาตอนปลาย ในงานสัปดาห์วิทยาศาสตร์แห่งชาติ ส่วนภูมิภาค ณ คณะวิทยาศาสตร์ มหาวิทยาลัยขอนแก่น ฝึกฝนกระบวนการคิดวิเคราะห์อย่างเป็นวิทยาศาสตร์ การตั้งสมมติฐาน ออกแบบการทดลอง และสรุปผลข้อมูลเชิงประจักษ์',
                outcomes: ['กระบวนการคิดวิเคราะห์เชิงระบบ', 'การออกแบบการทดลองเพื่อทดสอบสมมติฐาน', 'การตีความข้อมูลและสรุปผลทางวิทยาศาสตร์']
            },
            {
                title: 'กิจกรรมทดลอง ความหนาแน่นของสาร (น้ำหวานสายรุ้ง)',
                category: 'ด้านกิจกรรม · ประจำปี 2567',
                institution: 'กลุ่มสาระการเรียนรู้วิทยาศาสตร์ โรงเรียนโนนสูงพิทยาคาร',
                detail: 'เข้าร่วมกิจกรรมการทดลองความฉลาดรู้เฉพาะด้าน (เคมี) หัวข้อ ความหนาแน่นของสาร โดยการสร้างน้ำหวานสายรุ้ง ซึ่งเป็นการแบ่งชั้นของน้ำหวานตามค่าความหนาแน่นและความเข้มข้นที่แตกต่างกัน ช่วยให้เข้าใจหลักการทางเคมีเรื่องความเข้มข้น สารละลาย และอันตรกิริยาระหว่างโมเลกุลในเชิงประจักษ์',
                outcomes: ['ความเข้าใจเชิงลึกเรื่องความหนาแน่นและความเข้มข้น', 'ทักษะการตวงและเตรียมสารละลายในห้องปฏิบัติการ', 'การสังเกตและบันทึกผลการทดลอง']
            },
            {
                title: 'ผู้สอนและถ่ายทอดความรู้ การเกิดปฏิกิริยาพอลิเมอร์',
                category: 'ด้านกิจกรรม · ประจำปี 2567',
                institution: 'โรงเรียนโนนสูงพิทยาคาร',
                detail: 'ได้รับหน้าที่เป็นผู้สอนและถ่ายทอดความรู้ทางด้าน "การเกิดปฏิกิริยาพอลิเมอร์" แก่เพื่อนนักเรียนภายในชั้น โดยใช้สื่อมัลติมีเดียและแบบจำลองโครงสร้างโมเลกุล เพื่อสร้างบรรยากาศการเรียนรู้ที่มีส่วนร่วม และอธิบายความแตกต่างระหว่างปฏิกิริยาพอลิเมอไรเซชันแบบควบแน่นและแบบเติม',
                outcomes: ['ทักษะการสื่อสารและถ่ายทอดเนื้อหาวิชาการให้เข้าใจง่าย', 'การสร้างสื่อการเรียนรู้เชิงสร้างสรรค์', 'ความเข้าใจลึกซึ้งในโครงสร้างพอลิเมอร์']
            },
            {
                title: 'กิจกรรมจิตอาสาพัฒนาสิ่งแวดล้อมและโรงเรียน',
                category: 'ด้านจิตอาสา · ประจำปี 2567',
                institution: 'โรงเรียนโนนสูงพิทยาคาร และชุมชนโนนสูง',
                detail: 'เข้าร่วมกิจกรรมจิตอาสาบำเพ็ญประโยชน์ร่วมกับคณะครูและเพื่อนนักเรียน ในการปรับปรุงภูมิทัศน์โรงเรียน ปลูกต้นไม้เพิ่มพื้นที่สีเขียว และเป็นแกนนำในการรณรงค์คัดแยกขยะประเภทพลาสติกและสารเคมีอันตรายภายในสถานศึกษา เพื่อสร้างจิตสำนึกรักษ์สิ่งแวดล้อมอย่างยั่งยืน',
                outcomes: ['จิตสาธารณะและความรับผิดชอบต่อส่วนรวม', 'ความตระหนักด้านมลพิษและการจัดการขยะเคมี/พลาสติก', 'การทำงานร่วมกับคนในชุมชน']
            },
            {
                title: 'นักกีฬาบาสเกตบอลตัวแทนระดับชั้น การแข่งขันกีฬาภายใน',
                category: 'ด้านกิจกรรม · ประจำปี 2567',
                institution: 'โรงเรียนโนนสูงพิทยาคาร',
                detail: 'ได้รับคัดเลือกเป็นตัวแทนนักกีฬาบาสเกตบอลประจำระดับชั้น ในการแข่งขันมหกรรมกีฬาภายในโรงเรียนโนนสูงพิทยาคาร ได้ฝึกซ้อมระเบียบวินัย การวางแผนกลยุทธ์ร่วมกับเพื่อนร่วมทีม และส่งเสริมสุขภาพพลานามัยที่แข็งแรงพร้อมสำหรับการศึกษา',
                outcomes: ['การมีน้ำใจนักกีฬา รู้แพ้ รู้ชนะ รู้อภัย', 'สุขภาพร่างกายที่แข็งแรงและความอดทน', 'การวางกลยุทธ์และการสื่อสารในสนาม']
            }
        ];

        function openModal(idx) {
            const item = activities[idx];
            document.getElementById('m-category').textContent = item.category;
            document.getElementById('m-title').textContent = item.title;
            document.getElementById('m-inst').innerHTML = '<i class="fa-solid fa-location-dot text-teal-400"></i> ' + item.institution;
            document.getElementById('m-detail').textContent = item.detail;
            const ul = document.getElementById('m-outcomes');
            ul.innerHTML = '';
            item.outcomes.forEach(out => {
                const li = document.createElement('li');
                li.className = 'flex items-start gap-2';
                li.innerHTML = '<i class="fa-solid fa-check text-teal-600 mt-0.5"></i> <span>' + out + '</span>';
                ul.appendChild(li);
            });
            document.getElementById('modal').classList.remove('hidden');
        }

        function closeModal() {
            document.getElementById('modal').classList.add('hidden');
        }

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeModal();
        });

        function filterPortfolio(cat) {
            document.querySelectorAll('.filter-btn').forEach(btn => {
                if (btn.dataset.cat === cat) {
                    btn.className = 'filter-btn active px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors bg-slate-900 text-white shadow-sm';
                } else {
                    btn.className = 'filter-btn px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors text-slate-700 hover:text-slate-900';
                }
            });

            document.querySelectorAll('.portfolio-card').forEach(card => {
                if (cat === 'all' || card.dataset.category === cat) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        }

        function copyText(txt, label) {
            navigator.clipboard.writeText(txt);
            const toast = document.getElementById('toast');
            document.getElementById('toast-msg').textContent = 'คัดลอก ' + label + ' เรียบร้อยแล้ว';
            toast.classList.remove('hidden');
            setTimeout(() => {
                toast.classList.add('hidden');
            }, 2500);
        }

        // Mobile menu toggle
        const menuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
        document.querySelectorAll('.mobile-link').forEach(link => {
            link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
        });
    </script>
</body>
</html>
`;

fs.writeFileSync(path.join(publicDir, 'portfolio.html'), html, 'utf8');
console.log('Successfully wrote portfolio.html');
