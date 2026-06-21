"use client";

import Link from "next/link";

const worlds = [
  ["Career Skills", "Business, leadership, entrepreneurship, communication, and job-ready skills.", "/learning/career.png"],
  ["School Help", "Math, science, writing, reading, study support, and guided homework help.", "/learning/school.png"],
  ["Brain Development", "Memory, focus, discipline, reasoning, habits, and learning performance.", "/learning/braindevelopment.png"],
  ["Book Intelligence", "Turn books into summaries, lessons, quizzes, notes, and study paths.", "/learning/book.png"],
];

const generalKnowledge = [
  "General Knowledge",
  "History, technology, communication, culture, life skills, current events, and real-world knowledge.",
  "/learning/knowledge.png",
];

const instructors = [
  ["Nova", "Python & Data Science", "Programming, data analysis, logic, and AI fundamentals.", "/instructors/nova.jpg"],
  ["Arin", "Business & Leadership", "Strategy, entrepreneurship, leadership, and career growth.", "/instructors/arin.jpg"],
  ["Lena", "Math & Science", "Clear explanations, examples, practice, and problem solving.", "/instructors/lena.jpg"],
  ["Kai", "General Knowledge", "Life skills, technology, communication, and decision making.", "/instructors/kai.jpg"],
];

const steps = [
  ["01", "Create your account", "Sign up, create your profile, and enter your dashboard."],
  ["02", "Choose a learning world", "Pick the area you want to improve first."],
  ["03", "Learn with AI instructors", "Get explanations, practice, corrections, and feedback."],
  ["04", "Track your growth", "Save notes, complete lessons, build skills, and unlock progress."],
];

const roadmap = [
  ["Stage 1", "Student dashboard, learning worlds, AI instructors, notes, and guided lessons."],
  ["Stage 2", "Certificates, portfolios, projects, assessments, and career-ready profiles."],
  ["Stage 3", "Teacher dashboards, classroom tools, school accounts, and advanced analytics."],
];

function SectionIntro({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <div className="mx-auto mb-14 max-w-3xl text-center">
      <p className="text-xs font-black uppercase tracking-[0.24em] text-blue-700">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-4xl font-black tracking-tight text-[#061633] md:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-lg leading-8 text-slate-600">{text}</p>
    </div>
  );
}

function ProgramCard({
  title,
  text,
  image,
}: {
  title: string;
  text: string;
  image: string;
}) {
  return (
    <div className="overflow-hidden rounded border border-slate-200 bg-white shadow-sm">
      <img src={image} alt={title} className="h-72 w-full object-cover object-top" />

      <div className="p-7">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-700">
          Program
        </p>
        <h3 className="mt-3 text-2xl font-black">{title}</h3>
        <p className="mt-3 leading-7 text-slate-600">{text}</p>

        <Link
          href="/signup"
          className="mt-6 block rounded border border-slate-300 bg-slate-50 px-5 py-4 text-center text-xs font-black uppercase tracking-[0.14em]"
        >
          Start {title}
        </Link>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#061633] [zoom:0.75]">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/" className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-full border border-blue-200 bg-blue-50">
              <img src="/logo/brain.png" alt="GAHN AI" className="h-7 w-7 object-contain" />
            </div>
            <div>
              <p className="text-xl font-black tracking-tight">GAHN AI</p>
              <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-slate-500">
                Global AI Human Helper Network
              </p>
            </div>
          </Link>

          <div className="hidden items-center gap-8 text-sm font-black uppercase tracking-[0.12em] md:flex">
            <a href="#programs">Programs</a>
            <a href="#platform">Platform</a>
            <a href="#instructors">Instructors</a>
            <a href="#schools">Schools</a>
            <Link href="/pricing">Pricing</Link>
          </div>

          <div className="flex items-center gap-3">
            <Link href="/login" className="rounded border border-slate-300 px-5 py-3 text-sm font-black uppercase tracking-[0.12em]">
              Log In
            </Link>
            <Link href="/signup" className="rounded bg-[#071f4d] px-6 py-3 text-sm font-black uppercase tracking-[0.12em] text-white">
              Sign Up
            </Link>
          </div>
        </nav>
      </header>

      <section className="relative overflow-hidden border-b border-slate-200 bg-[#f5f7fb]">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,31,77,0.04)_1px,transparent_1px),linear-gradient(rgba(7,31,77,0.04)_1px,transparent_1px)] bg-[size:54px_54px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-[1fr_460px]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-blue-700">
              AI learning platform
            </p>
            <h1 className="mt-5 max-w-3xl text-5xl font-black leading-[1.02] tracking-tight md:text-7xl">
              Learn faster with structured AI instruction.
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-9 text-slate-700">
              A serious learning platform for students, self-learners, and future classrooms. Choose a learning world, work with AI instructors, and build real skills with guided practice.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="/signup" className="rounded bg-[#071f4d] px-8 py-4 text-sm font-black uppercase tracking-[0.12em] text-white">
                Start Learning
              </Link>
              <a href="#platform" className="rounded border border-slate-300 bg-white px-8 py-4 text-sm font-black uppercase tracking-[0.12em]">
                See How It Works
              </a>
            </div>
          </div>

          <div className="rounded bg-white p-6 shadow-2xl">
            <h2 className="text-2xl font-black">Ready to take your next step?</h2>
            <p className="mt-3 text-slate-600">Create your account and choose your first learning world.</p>

            <div className="mt-6 space-y-4">
              <select className="w-full rounded border border-slate-300 px-4 py-4">
                <option>Select your learning world...</option>
                <option>Career Skills</option>
                <option>School Help</option>
                <option>Brain Development</option>
                <option>General Knowledge</option>
                <option>Book Intelligence</option>
              </select>

              <Link href="/signup" className="block rounded bg-[#071f4d] px-5 py-4 text-center text-sm font-black uppercase tracking-[0.14em] text-white">
                Create Account
              </Link>
            </div>

            <div className="mt-8 border-t pt-6">
              <p className="font-black">Platform starts with:</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li>✓ Learning dashboard</li>
                <li>✓ AI instructor previews</li>
                <li>✓ Lessons, notes, and progress</li>
                <li>✓ Certificates and portfolios planned</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="programs" className="px-6 py-24">
        <SectionIntro
          eyebrow="Learning worlds"
          title="Choose the path that matches your goal."
          text="Each world is designed around a different learning problem: school support, career skills, personal growth, general knowledge, or book intelligence."
        />

        <div className="mx-auto grid max-w-5xl gap-7 md:grid-cols-2">
          {worlds.map(([title, text, image]) => (
            <ProgramCard key={title} title={title} text={text} image={image} />
          ))}
        </div>

        <div className="mx-auto mt-8 max-w-md">
          <ProgramCard title={generalKnowledge[0]} text={generalKnowledge[1]} image={generalKnowledge[2]} />
        </div>
      </section>

      <section id="platform" className="bg-[#f5f7fb] px-6 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-blue-700">
              Platform preview
            </p>
            <h2 className="mt-3 text-5xl font-black tracking-tight">
              A dashboard built around learning action.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              The dashboard is where users choose learning worlds, meet AI instructors, continue lessons, track progress, save notes, and build a skill portfolio over time.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Start with a clean dashboard after signup.",
                "Choose a learning world before lessons appear.",
                "Progress stays at zero until the user actually starts.",
                "Future upgrades add certificates, portfolios, and classroom tools.",
              ].map((item) => (
                <div key={item} className="flex gap-3">
                  <span className="font-black text-blue-700">✓</span>
                  <p className="text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded border border-slate-200 bg-white p-5 shadow-2xl">
            <div className="rounded border border-slate-200 bg-[#f8fafc] p-5">
              <div className="flex items-center justify-between border-b pb-4">
                <p className="font-black">Learning Dashboard</p>
                <span className="rounded bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
                  New account
                </span>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-4">
                {["0 Day Streak", "0 Courses", "0 Certificates", "0% Progress"].map((item) => (
                  <div key={item} className="rounded bg-white p-4 shadow-sm">
                    <p className="text-sm font-black">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded bg-white p-5 shadow-sm">
                <p className="font-black">Continue Learning</p>
                <p className="mt-2 text-sm text-slate-500">No courses started yet.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="instructors" className="px-6 py-24">
        <SectionIntro
          eyebrow="AI instructors"
          title="Specialized instructors for different learning needs."
          text="Each instructor represents a different learning category and will later connect to lessons, practice, memory, and feedback."
        />

        <div className="mx-auto grid max-w-7xl gap-7 md:grid-cols-2 lg:grid-cols-4">
          {instructors.map(([name, role, desc, image]) => (
            <div key={name} className="overflow-hidden rounded border border-slate-200 bg-white shadow-sm">
              <img src={image} alt={name} className="h-72 w-full object-cover object-top" />
              <div className="p-6">
                <h3 className="text-2xl font-black">{name}</h3>
                <p className="mt-1 text-sm font-black text-blue-700">{role}</p>
                <p className="mt-4 leading-7 text-slate-600">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="schools" className="bg-[#f5f7fb] px-6 py-24">
        <SectionIntro
          eyebrow="Schools and classrooms"
          title="Built to expand from individual learners to classrooms."
          text="The long-term platform vision includes teacher dashboards, classroom analytics, student support, and school-level accounts."
        />

        <div className="mx-auto grid max-w-6xl gap-7 md:grid-cols-3">
          {[
            ["Teacher dashboard", "Teachers track student progress, lesson activity, and learning gaps."],
            ["Classroom AI support", "Students receive explanations and practice without waiting for one-on-one help."],
            ["School analytics", "Schools can review progress, usage, skills, and outcomes across classrooms."],
          ].map(([title, text]) => (
            <div key={title} className="rounded border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-black">{title}</h3>
              <p className="mt-4 leading-7 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-24">
        <SectionIntro
          eyebrow="How it works"
          title="From signup to skill growth."
          text="The platform starts simple: create an account, choose a world, learn with instructors, and build progress over time."
        />

        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-4">
          {steps.map(([num, title, text]) => (
            <div key={num} className="rounded border border-slate-200 bg-white p-7 shadow-sm">
              <p className="text-sm font-black text-blue-700">{num}</p>
              <h3 className="mt-4 text-xl font-black">{title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#f5f7fb] px-6 py-24">
        <SectionIntro
          eyebrow="Expansion roadmap"
          title="A serious platform built in stages."
          text="The goal is to build the right foundation and expand with users, revenue, and demand."
        />

        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {roadmap.map(([stage, text]) => (
            <div key={stage} className="rounded border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-blue-700">{stage}</p>
              <p className="mt-4 leading-7 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 rounded border border-slate-200 bg-white p-10 shadow-sm lg:grid-cols-[1fr_360px]">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-blue-700">
              Get started
            </p>
            <h2 className="mt-3 text-4xl font-black">
              Start with signup, then continue into your dashboard.
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              New users create an account first. Returning users log in with their email and continue from the dashboard.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <Link href="/signup" className="rounded bg-[#071f4d] px-8 py-4 text-center text-sm font-black uppercase tracking-[0.14em] text-white">
              Sign Up
            </Link>
            <Link href="/login" className="rounded border border-slate-300 px-8 py-4 text-center text-sm font-black uppercase tracking-[0.14em]">
              Log In
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row">
          <div>
            <p className="text-2xl font-black">GAHN AI</p>
            <p className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
              Global AI Human Helper Network
            </p>
          </div>

          <p className="text-sm text-slate-500">
            © 2026 GAHN AI. Built for AI-powered learning.
          </p>
        </div>
      </footer>
    </main>
  );
}