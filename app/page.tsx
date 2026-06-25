"use client";

import Link from "next/link";

const learningWorlds = [
  ["💼", "Career Skills", "Leadership, communication, entrepreneurship, and job-ready skills."],
  ["🎓", "School Help", "Math, science, writing, homework help, and study support."],
  ["🌍", "General Knowledge", "History, technology, communication, culture, life skills, and real-world knowledge."],
  ["🧠", "Brain Development", "Focus, memory, habits, discipline, and cognitive performance."],
  ["📖", "Book Intelligence", "Summaries, notes, quizzes, and learning paths from any book."],
];

const instructors = [
  ["Lena", "Medical Instructor", "Healthcare basics, medical terminology, patient care concepts, and clinical learning support.", "/instructors/lena.jpg"],
  ["Alex", "Software Engineer", "Coding, full stack development, databases, debugging, and software project guidance.", "/instructors/alex.jpg"],
  ["Arin", "Finance Instructor", "Money management, business finance, investing basics, budgeting, and financial decision-making.", "/instructors/arin.jpg"],
  ["Hannah", "Nurse Instructor", "Nursing fundamentals, patient support, care routines, safety, and healthcare readiness.", "/instructors/hannah.jpg"],
];

const platformFeatures = [
  ["Guided Learning Paths", "Move through lessons in a clear order instead of guessing what to study next."],
  ["AI Instructor Support", "Get explanations, guided practice, corrections, and next-step recommendations."],
  ["Progress Tracking", "Track learning activity, completed lessons, certificates, projects, and portfolio growth."],
  ["Practice Systems", "Use quizzes, review prompts, and recall practice to strengthen understanding."],
  ["Project Builder", "Create practical work that can later support your portfolio or career profile."],
  ["Certificates", "Earn visible proof of progress as lessons and assessments are completed."],
  ["Career Readiness", "Prepare for interviews, resumes, workplace skills, and professional growth."],
  ["School Tools", "Future classroom dashboards, teacher tools, and school-wide progress analytics."],
];

const careerCategories = [
  ["Software & Technology", "Full stack development, coding fundamentals, product building, and technical problem solving."],
  ["Healthcare Readiness", "Medical terminology, patient support, care routines, and healthcare learning foundations."],
  ["Finance & Business", "Budgeting, business finance, money decisions, entrepreneurship, and leadership."],
  ["School Success", "Math, science, writing, reading, studying, homework support, and academic confidence."],
  ["Personal Development", "Memory, focus, habits, discipline, reasoning, and learning performance."],
  ["Book-Based Learning", "Turn books into notes, summaries, quizzes, lessons, and study paths."],
];

const learningSteps = [
  ["01", "Choose a learning world", "Pick the area you want to improve first."],
  ["02", "Follow a structured path", "Move through lessons in order with a clear next step."],
  ["03", "Practice with guidance", "Use exercises, quizzes, notes, and instructor feedback."],
  ["04", "Build proof of progress", "Create projects, certificates, and portfolio-ready achievements over time."],
];

const outcomes = [
  ["For learners", "Stay organized, learn in order, and build practical skills without jumping between random content."],
  ["For career builders", "Create projects, improve confidence, and prepare for job-ready communication."],
  ["For schools", "Future classroom tools can support teachers, students, and administrators with better visibility."],
  ["For employers", "Learners can eventually show projects, certificates, portfolios, and measurable skill progress."],
];

const faqItems = [
  ["Is GAHN AI only for students?", "No. It is for students, self-learners, career builders, parents, and eventually schools."],
  ["Are the AI instructors video avatars?", "The MVP starts with structured AI instruction. Video avatars can be added later when the platform has revenue."],
  ["What should I learn first?", "Start with the learning world that matches your current goal. Career Skills and School Help are good first paths."],
  ["Will certificates be real?", "Certificates are planned as the platform grows into lessons, assessments, projects, and proof of progress."],
  ["Can this support classrooms later?", "Yes. The long-term plan includes teacher dashboards, classroom tools, analytics, and student support."],
];

const footerLinks = {
  Programs: ["Career Skills", "School Help", "General Knowledge", "Brain Development", "Book Intelligence"],
  Platform: ["How It Works", "AI Tutors", "Projects", "Certificates", "Pricing"],
  Schools: ["For Teachers", "For Schools", "Classroom Tools", "Analytics", "Resources"],
  Company: ["About Us", "Careers", "Blog", "Help Center", "Contact"],
};

function ButtonLink({
  href,
  children,
  dark = false,
}: {
  href: string;
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`group relative overflow-hidden rounded-lg px-8 py-4 text-center text-sm font-black transition duration-300 hover:-translate-y-1 hover:shadow-xl ${
        dark
          ? "bg-[#071f4d] text-white hover:bg-[#0b2f6d]"
          : "bg-blue-600 text-white hover:bg-blue-700"
      }`}
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-y-0 -left-1/2 w-1/2 skew-x-[-20deg] bg-white/20 transition-all duration-700 group-hover:left-[120%]" />
    </Link>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen scroll-smooth bg-white text-[#061633] lg:[zoom:0.68]">
      <header className="sticky top-0 z-50 bg-[#020b24] text-white shadow-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">
          <Link href="/" className="flex items-center gap-4">
            <img src="/logo/favicon.png" alt="GAHN AI" className="h-14 w-14 rounded-full object-cover" />
            <div>
              <p className="text-2xl font-black">GAHN AI</p>
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-blue-100/70">
                Global AI Human Helper Network
              </p>
            </div>
          </Link>

          <div className="hidden items-center gap-10 text-sm font-bold lg:flex">
            <Link href="/">Home</Link>
            <a href="#programs">Programs</a>
            <a href="#platform">Platform</a>
            <a href="#instructors">Instructors</a>
            <a href="#schools">Schools</a>
            <Link href="/pricing">Pricing</Link>
            <a href="#about">About</a>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/login" className="rounded-lg border border-white/20 px-7 py-3 text-sm font-black transition hover:bg-white/10">
              Log In
            </Link>
            <ButtonLink href="/signup">Sign Up</ButtonLink>
          </div>
        </nav>
      </header>

      <section className="px-10 pt-10">
        <div className="mx-auto grid max-w-[1650px] items-center gap-12 overflow-hidden rounded-[2rem] bg-[#03143b] p-14 text-white shadow-2xl lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-blue-300">
              AI-powered learning platform
            </p>

            <h1 className="mt-5 text-6xl font-black leading-[1.05] tracking-tight">
              Learn smarter.
              <br />
              Master faster.
              <br />
              <span className="text-blue-500">Build your future.</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-blue-100/80">
              GAHN AI combines structured instruction, adaptive learning support,
              and real-world projects to help learners build useful skills.
            </p>

            <div className="mt-9 flex gap-5">
              <ButtonLink href="/signup">Start Learning Free →</ButtonLink>
              <Link href="#programs" className="rounded-lg border border-white/25 px-8 py-4 text-sm font-black transition hover:-translate-y-1 hover:bg-white/10">
                Explore Programs
              </Link>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-3 gap-5">
              {[
                ["🤖", "AI Tutors", "Always here to help"],
                ["🎯", "Personalized", "Built for you"],
                ["🏆", "Career Ready", "Projects & certificates"],
              ].map(([icon, title, text]) => (
                <div key={title} className="flex gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-blue-500/20">{icon}</div>
                  <div>
                    <p className="text-sm font-black">{title}</p>
                    <p className="text-xs text-blue-100/60">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[560px] overflow-hidden rounded-3xl bg-[#061633]">
            <img
              src="/learning/school.png"
              alt="Student learning with laptop"
              className="h-full min-h-[560px] w-full rounded-3xl object-contain object-center"
            />
          </div>
        </div>
      </section>

      <section className="px-10 py-8">
        <div className="mx-auto flex max-w-[1650px] items-center justify-between gap-10 rounded-2xl border border-slate-200 bg-white px-10 py-7 shadow-sm">
          <p className="max-w-[230px] text-sm font-bold leading-6 text-slate-500">
            Trusted by learners from top organizations
          </p>
          {["Google", "IBM", "Microsoft", "Stanford University", "Meta", "amazon"].map((company) => (
            <p key={company} className="text-center text-xl font-black text-slate-500">
              {company}
            </p>
          ))}
        </div>
      </section>

      <section id="programs" className="scroll-mt-40 px-10 py-20">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-700">
            Explore learning worlds
          </p>
          <h2 className="mt-4 text-4xl font-black">Choose a path. Start your journey.</h2>

          <div className="mt-12 grid gap-5 lg:grid-cols-5">
            {learningWorlds.map(([icon, title, text]) => (
              <div key={title} className="flex min-h-[310px] flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
                <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-[#061633] text-4xl text-white">
                  {icon}
                </div>
                <h3 className="mt-6 min-h-[56px] text-xl font-black">{title}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{text}</p>
                <Link href="/signup" className="mt-6 inline-block text-sm font-black text-blue-700">
                  Explore →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="platform" className="scroll-mt-40 px-10 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-2xl bg-[#03143b] p-10 text-white shadow-2xl">
            <h2 className="text-4xl font-black">AI learning built around you</h2>
            <ul className="mt-8 space-y-5 text-blue-100">
              {[
                "Adaptive AI tutors that teach your way",
                "Structured lessons with real progress",
                "Projects that build real-world skills",
                "Certificates and portfolio to showcase",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-blue-400">●</span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-2xl bg-white/10 p-6">
              <p className="font-black">Learning Path Preview</p>
              <p className="mt-3 text-blue-100">Choose a world, start a lesson, practice, and save your work.</p>
              <div className="mt-4 h-2 rounded-full bg-white/20">
                <div className="h-2 w-[60%] rounded-full bg-blue-400" />
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-700">
              Why GAHN AI?
            </p>
            <h2 className="mt-4 text-5xl font-black leading-tight">
              More than courses.
              <br />
              A complete learning ecosystem.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              GAHN AI gives learners the structure, support, and tools needed to move from confusion to progress.
            </p>
            <div className="mt-8">
              <ButtonLink href="#features" dark>See Platform Features</ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="scroll-mt-40 bg-[#f5f7fb] px-10 py-20">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-700">Platform features</p>
          <h2 className="mt-4 text-4xl font-black">Everything works together.</h2>

          <div className="mt-10 grid gap-6 lg:grid-cols-4">
            {platformFeatures.map(([title, text]) => (
              <div key={title} className="rounded-2xl border border-slate-200 bg-white p-7 text-left shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
                <h3 className="text-2xl font-black">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-10 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-700">Career categories</p>
            <h2 className="mt-4 text-4xl font-black">Learn skills for school, work, and life.</h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {careerCategories.map(([title, text]) => (
              <div key={title} className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
                <h3 className="text-2xl font-black">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{text}</p>
                <Link href="/signup" className="mt-6 inline-block text-sm font-black text-blue-700">
                  View Category →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f5f7fb] px-10 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-700">Learning process</p>
            <h2 className="mt-4 text-4xl font-black">From signup to skill growth.</h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-4">
            {learningSteps.map(([step, title, text]) => (
              <div key={step} className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                <p className="text-sm font-black text-blue-700">{step}</p>
                <h3 className="mt-4 text-2xl font-black">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="instructors" className="scroll-mt-40 px-10 py-20">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-700">
            Meet AI instructors
          </p>
          <h2 className="mt-4 text-4xl font-black">
            Learn from specialized AI instructors.
          </h2>

          <div className="mt-10 grid gap-5 lg:grid-cols-4">
            {instructors.map(([name, role, text, image]) => (
              <div key={name} className="overflow-hidden rounded-2xl border border-slate-200 bg-white text-left shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
                <div className="h-[360px] w-full bg-white p-4">
                  <img src={image} alt={name} className="mx-auto h-full w-full object-contain object-center" />
                </div>
                <div className="p-7">
                  <h3 className="text-2xl font-black">{name}</h3>
                  <p className="mt-2 text-sm font-black text-blue-700">{role}</p>
                  <p className="mt-4 min-h-[72px] text-sm leading-6 text-slate-600">
                    {text}
                  </p>
                  <Link href="/signup" className="mt-5 inline-block text-sm font-black text-blue-700">
                    View Profile →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f5f7fb] px-10 py-20">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-700">Outcomes</p>
          <h2 className="mt-4 text-4xl font-black">Build evidence of skill, not just course history.</h2>

          <div className="mt-10 grid gap-6 lg:grid-cols-4">
            {outcomes.map(([title, text]) => (
              <div key={title} className="rounded-2xl border border-slate-200 bg-white p-8 text-left shadow-sm">
                <h3 className="text-2xl font-black">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="schools" className="scroll-mt-40 px-10 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 rounded-2xl bg-[#03143b] p-12 text-white shadow-2xl lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-300">Schools and classrooms</p>
            <h2 className="mt-4 text-4xl font-black leading-tight">
              Built for individual learners now. Designed to scale into classrooms later.
            </h2>
            <p className="mt-6 text-lg leading-8 text-blue-100/80">
              GAHN AI can grow into teacher dashboards, student analytics, classroom progress tracking, and school-wide learning support.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {[
              ["Teacher Tools", "Help teachers organize lessons, progress, and support."],
              ["Student Insights", "See learning activity, progress, and skill growth."],
              ["Classroom Support", "Give students structured help outside normal class time."],
            ].map(([title, text]) => (
              <div key={title} className="rounded-2xl bg-white/10 p-6">
                <h3 className="text-xl font-black">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-blue-100/75">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-10 py-8">
        <div className="mx-auto grid max-w-7xl gap-6 rounded-2xl bg-[#03143b] p-8 text-white shadow-2xl md:grid-cols-4">
          {[
            ["👥", "Early Access", "Learner Community"],
            ["🎓", "Structured", "Learning Paths"],
            ["🏅", "Planned", "Certificates"],
            ["📈", "Built For", "Long-Term Growth"],
          ].map(([icon, stat, label]) => (
            <div key={label} className="flex items-center justify-center gap-5 border-white/10 md:border-r last:border-r-0">
              <span className="text-4xl">{icon}</span>
              <div>
                <p className="text-3xl font-black">{stat}</p>
                <p className="text-sm text-blue-100/70">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#f5f7fb] px-10 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-700">FAQ</p>
            <h2 className="mt-4 text-4xl font-black">Questions before you start.</h2>
          </div>

          <div className="mt-10 space-y-4">
            {faqItems.map(([question, answer]) => (
              <details key={question} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <summary className="cursor-pointer text-xl font-black">{question}</summary>
                <p className="mt-4 leading-7 text-slate-600">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="px-10 py-12">
        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-slate-200 bg-blue-50 p-10 shadow-sm">
          <div className="flex items-center gap-6">
            <img src="/logo/favicon.png" alt="GAHN AI" className="h-16 w-16 rounded-full object-cover" />
            <div>
              <h2 className="text-2xl font-black">Ready to start your learning journey?</h2>
              <p className="mt-2 text-slate-600">Create your account, choose a learning world, and start building progress.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <ButtonLink href="/signup">Get Started Free</ButtonLink>
            <Link href="/pricing" className="rounded-lg border border-blue-300 bg-white px-8 py-4 text-sm font-black text-blue-700 transition hover:-translate-y-1 hover:shadow-lg">
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      <footer id="about" className="scroll-mt-40 bg-[#020b24] px-10 py-14 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-4">
              <img src="/logo/favicon.logo" alt="GAHN AI" className="h-12 w-12 rounded-full object-cover" />
              <div>
                <p className="text-2xl font-black">GAHN AI</p>
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-blue-100/60">
                  Global AI Human Helper Network
                </p>
              </div>
            </div>
            <p className="mt-6 max-w-sm leading-8 text-blue-100/70">
              Empowering learners worldwide with AI-driven education, real-world skills, and career-ready outcomes.
            </p>
          </div>

          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h3 className="font-black">{group}</h3>
              <div className="mt-5 space-y-3">
                {links.map((link) => (
                  <p key={link} className="text-sm text-blue-100/70">{link}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-12 flex max-w-7xl justify-between border-t border-white/10 pt-6 text-sm text-blue-100/60">
          <p>© 2026 GAHN AI. All rights reserved.</p>
          <div className="flex gap-8">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
          </div>
        </div>
      </footer>
    </main>
  );
}