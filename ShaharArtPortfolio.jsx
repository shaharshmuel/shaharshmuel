import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, MonitorPlay, PenTool, Globe2, Layers3, MessageCircle, CheckCircle2 } from "lucide-react";

const works = [
  {
    title: "Brand Identity",
    tag: "זהות מותגית",
    text: "הופכים חזון לשפה חזותית מדויקת: לוגו, טיפוגרפיה, צבעים, קונספט ומערכת גרפית שמרגישה כמו מותג אמיתי.",
  },
  {
    title: "Creative 360",
    tag: "מעטפת קריאייטיב",
    text: "כל מה שהעסק צריך תחת קורת גג אחת: אסטרטגיה ויזואלית, עיצוב, דיגיטל, פרינט ונראות שמדברת באותה שפה.",
  },
  {
    title: "Video Art",
    tag: "וידיאו ארט ואנימציה",
    text: "קריאייטיב בתנועה למסכים, אירועים, מועדונים, קמפיינים ומותגים שרוצים להרגיש חיים, בועטים וזכירים.",
  },
  {
    title: "Print Production",
    tag: "פרינט והפקה",
    text: "ליווי מלא מהקונספט ועד הביצוע בשטח: שילוט, ביתנים, אריזות, טקסטיל והכנה מקצועית לדפוס.",
  },
];

const services = [
  "עיצוב וזהות מותגית",
  "מעטפת קריאייטיב 360",
  "אתרים ודפי נחיתה",
  "ניהול נוכחות דיגיטלית",
  "וידיאו ארט ואנימציה",
  "פרינט, שילוט והפקה",
];

const process = [
  "שיחה ראשונה והבנת החזון",
  "פיצוח קונספט ואסטרטגיה ויזואלית",
  "בניית שפה גרפית מדויקת",
  "הכנה לדיגיטל, פרינט והוצאה לאור",
];

export default function ShaharArtPortfolio() {
  return (
    <main className="min-h-screen bg-[#050806] text-white overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-120px] right-[-120px] w-[420px] h-[420px] bg-emerald-400/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-160px] left-[-120px] w-[460px] h-[460px] bg-lime-300/10 blur-[140px] rounded-full" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(20,255,130,0.08),transparent_35%)]" />
      </div>

      <section className="relative max-w-7xl mx-auto px-6 py-8">
        <nav className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl px-5 py-4 shadow-2xl shadow-emerald-500/5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-emerald-300 to-lime-400 flex items-center justify-center text-black font-black tracking-tight">
              S
            </div>
            <div>
              <p className="text-sm font-semibold tracking-[0.22em] uppercase">STUDIO SHAHARART</p>
              <p className="text-xs text-white/50">מעטפת קריאייטיב 360</p>
            </div>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-2.5 text-sm font-semibold hover:bg-emerald-200 transition">
            דברו איתנו
            <MessageCircle size={16} />
          </a>
        </nav>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center pt-20 pb-16">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-300/10 px-4 py-2 text-emerald-200 text-sm mb-7">
              <Sparkles size={16} />
              מיתוג, דיגיטל, בינה מלאכותית, פרינט ווידיאו ארט
            </div>
            <h1 className="text-5xl md:text-7xl font-black leading-[0.95] tracking-tight max-w-4xl">
              מעטפת קריאייטיב 360
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-lime-300 to-white">
                לעסקים שרוצים להוביל.
              </span>
            </h1>
            <p className="mt-7 text-lg md:text-xl text-white/70 leading-8 max-w-2xl">
              STUDIO SHAHARART לוקח את החזון שלכם והופך אותו לעולם ויזואלי שלם: מיתוג, אתרים, דיגיטל, וידיאו ארט, פרינט וניהול קריאייטיב שמחברים בין אסתטיקה גבוהה לתוצאות בשטח.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-4">
              <a href="#works" className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-300 text-black px-7 py-4 font-bold hover:bg-lime-200 transition shadow-2xl shadow-emerald-400/20">
                לראות עבודות
                <ArrowUpRight size={18} />
              </a>
              <a href="#services" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-7 py-4 font-bold text-white hover:bg-white/10 transition">
                מה אנחנו עושים
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.1 }} className="relative">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] backdrop-blur-xl p-4 shadow-2xl shadow-emerald-500/10">
              <div className="rounded-[1.5rem] bg-black/50 border border-white/10 overflow-hidden">
                <div className="flex items-center gap-2 px-5 py-4 border-b border-white/10">
                  <span className="w-3 h-3 rounded-full bg-red-400" />
                  <span className="w-3 h-3 rounded-full bg-yellow-300" />
                  <span className="w-3 h-3 rounded-full bg-emerald-300" />
                  <span className="text-xs text-white/35 ml-auto">portfolio preview</span>
                </div>
                <div className="p-6 space-y-5">
                  <div className="h-44 rounded-3xl bg-gradient-to-br from-emerald-300/30 via-white/10 to-black border border-emerald-300/20 flex items-end p-6">
                    <div>
                      <p className="text-xs tracking-[0.3em] uppercase text-emerald-100">CREATIVE 360</p>
                      <p className="text-3xl font-black mt-2">Turning Vision Into Reality</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-32 rounded-3xl bg-white/[0.06] border border-white/10 p-5">
                      <PenTool className="text-emerald-300" />
                      <p className="font-bold mt-5">Logo</p>
                    </div>
                    <div className="h-32 rounded-3xl bg-white/[0.06] border border-white/10 p-5">
                      <MonitorPlay className="text-lime-300" />
                      <p className="font-bold mt-5">Video Art</p>
                    </div>
                  </div>
                  <div className="h-20 rounded-3xl bg-emerald-300 text-black flex items-center justify-between px-6 font-black">
                    SHAHARART
                    <ArrowUpRight />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="services" className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 items-start">
          <div>
            <p className="text-emerald-300 font-bold tracking-[0.25em] uppercase text-sm">SERVICES</p>
            <h2 className="mt-4 text-4xl md:text-5xl font-black leading-tight">כל מה שהמותג צריך תחת קורת גג אחת.</h2>
            <p className="mt-5 text-white/60 leading-8">הסטודיו נולד מתוך צורך ברור: לתת לעסקים מעטפת אמיתית, מסודרת ומדויקת, בלי להתפזר בין חמישה ספקים שונים. כאן הכל קורה בסינרגיה אחת.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <div key={service} className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 flex items-center gap-4 hover:border-emerald-300/40 transition">
                <div className="w-10 h-10 rounded-2xl bg-emerald-300/15 text-emerald-300 flex items-center justify-center font-black">{index + 1}</div>
                <p className="font-bold">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="works" className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <p className="text-emerald-300 font-bold tracking-[0.25em] uppercase text-sm">SELECTED WORK</p>
            <h2 className="mt-4 text-4xl md:text-5xl font-black">תיק עבודות שמראה חשיבה, לא רק עיצוב.</h2>
          </div>
          <p className="text-white/55 max-w-md leading-7">אזור שמיועד להציג עבודות אמיתיות מתוך האתר הקיים: מיתוגים, פוסטים, מוקאפ מחשב, וידיאו ארט, פרינט, קמפיינים ופרויקטים למסכים.</p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
          {works.map((work, index) => (
            <motion.article key={work.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.08 }} className="group rounded-[2rem] border border-white/10 bg-white/[0.04] overflow-hidden hover:border-emerald-300/50 transition">
              <div className="h-56 bg-gradient-to-br from-white/10 via-emerald-300/10 to-black relative p-5 flex items-end">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(circle_at_top,rgba(88,255,165,0.28),transparent_55%)]" />
                <span className="relative rounded-full bg-black/45 border border-white/10 px-4 py-2 text-sm text-emerald-100">{work.tag}</span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-black">{work.title}</h3>
                <p className="mt-3 text-white/60 leading-7">{work.text}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="rounded-[2rem] border border-emerald-300/20 bg-emerald-300/[0.06] p-8 md:p-12">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 items-center">
            <div>
              <p className="text-emerald-300 font-bold tracking-[0.25em] uppercase text-sm">PROCESS</p>
              <h2 className="mt-4 text-4xl md:text-5xl font-black leading-tight">מהרעיון הגולמי ועד מותג שנראה כמו אייקון.</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {process.map((item) => (
                <div key={item} className="rounded-3xl bg-black/30 border border-white/10 p-5 flex gap-4 items-start">
                  <CheckCircle2 className="text-emerald-300 shrink-0" />
                  <p className="font-bold leading-7">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="relative max-w-7xl mx-auto px-6 py-16 pb-24">
        <div className="grid lg:grid-cols-3 gap-5">
          <div className="lg:col-span-2 rounded-[2rem] bg-white text-black p-8 md:p-12">
            <p className="font-bold tracking-[0.25em] uppercase text-sm text-emerald-700">LET'S BUILD</p>
            <h2 className="mt-4 text-4xl md:text-6xl font-black leading-tight">מוכנים לקחת את המותג מעבר לגבולות המוכרים?</h2>
            <p className="mt-5 text-black/65 text-lg leading-8 max-w-2xl">ספרו לנו על הפרויקט, העסק והחזון שלכם. נחזור אליכם עם כיוון ברור ונבנה יחד שפה ויזואלית שמרגישה מדויקת, זכירה ומובילה בתחומה.</p>
            <a href="https://wa.me/972000000000" className="mt-8 inline-flex items-center gap-2 rounded-full bg-black text-white px-7 py-4 font-bold hover:bg-emerald-800 transition">
              שליחת הודעה בוואטסאפ
              <MessageCircle size={18} />
            </a>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 flex flex-col justify-between min-h-[320px]">
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <Layers3 className="text-emerald-300" />
                <p className="font-bold">מיתוג מלא לעסקים</p>
              </div>
              <div className="flex items-center gap-3">
                <Globe2 className="text-emerald-300" />
                <p className="font-bold">אתרים, פרסום ודיגיטל</p>
              </div>
              <div className="flex items-center gap-3">
                <MonitorPlay className="text-emerald-300" />
                <p className="font-bold">וידיאו ארט למסכים</p>
              </div>
            </div>
            <div className="pt-8 border-t border-white/10">
              <p className="text-3xl font-black">STUDIO SHAHARART</p>
              <p className="mt-2 text-white/50">הופכים חזון למציאות</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
