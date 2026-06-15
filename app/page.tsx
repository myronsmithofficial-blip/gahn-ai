"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const features = [
  ["AI-Powered Instructors", "Adaptive AI instructors built around each learner."],
  ["Real Skills Real Results", "Learn skills that can be applied in school, career, and life."],
  ["Proven Learning Methods", "Practice, recall, feedback, and review built into the system."],
  ["Secure & Private By Design", "User accounts and learning data stay protected."],
  ["Your Future Starts Here", "Build confidence, progress, and career readiness."],
];

const trustLogos = ["Google", "Microsoft", "AWS", "NVIDIA", "OpenAI"];

const instructors = [
  ["Nova", "Python & Data Science", "Coding, logic, data analysis, and AI fundamentals."],
  ["Arin", "Business & Leadership", "Strategy, entrepreneurship, leadership, and career growth."],
  ["Lena", "Math & Science", "Complex subjects explained clearly with examples and practice."],
  ["Kai", "General Knowledge", "Life skills, technology, communication, and decision making."],
];

const worlds = [
  ["Career Skills", "Learn business, coding, AI, communication, and professional skills."],
  ["School Help", "Get guided support for math, science, reading, writing, and studying."],
  ["Brain Development", "Improve memory, focus, discipline, reasoning, and learning habits."],
  ["Book Intelligence", "Turn books into lessons, summaries, quizzes, and learning paths."],
];

const steps = [
  ["01", "Choose A Learning World", "Pick the subject or skill area you want to improve."],
  ["02", "Set Your Goal", "Tell GAHN AI what you want to learn and why it matters."],
  ["03", "Learn With AI Instructors", "AI instructors explain, question, correct, and guide you."],
  ["04", "Practice And Recall", "Use exercises, quizzes, and active recall to remember more."],
  ["05", "Track Progress", "Save notes, achievements, completed lessons, and skill growth."],
  ["06", "Build Real Skills", "Move from learning to projects, certificates, and career readiness."],
];

function WaveLines() {
  return (
    <motion.svg
      className="pointer-events-none absolute bottom-[65px] left-0 z-[2] h-[300px] w-full opacity-75"
      viewBox="0 0 1440 300"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
      animate={{ x: [0, -28, 0] }}
      transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
    >
      {Array.from({ length: 16 }).map((_, i) => (
        <path
          key={i}
          d={`M0 ${210 + i * 7} C 250 ${120 + i * 4}, 470 ${
            120 + i * 4
          }, 650 ${205 + i * 3} C 840 ${295 + i * 3}, 1100 ${
            295 + i * 3
          }, 1440 ${190 + i * 7}`}
          stroke="#93c5fd"
          strokeWidth="1"
          opacity={0.38 - i * 0.012}
          fill="none"
        />
      ))}
    </motion.svg>
  );
}

function WhiteDip() {
  return (
    <svg
      className="absolute bottom-[-1px] left-0 z-10 h-[155px] w-full"
      viewBox="0 0 1440 155"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M0 58 C 360 130, 1080 130, 1440 58 L1440 155 L0 155 Z"
        fill="white"
      />
    </svg>
  );
}

function SectionIntro({
  eyebrow,
  title,
  text,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  text: string;
  dark?: boolean;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mb-12 text-center"
    >
      <p
        className={`text-sm font-bold uppercase tracking-widest ${
          dark ? "text-blue-300" : "text-blue-600"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-3 text-4xl font-black tracking-tight md:text-5xl ${
          dark ? "text-white" : "text-[#061633]"
        }`}
      >
        {title}
      </h2>
      <p
        className={`mx-auto mt-4 max-w-2xl text-lg ${
          dark ? "text-blue-100/75" : "text-slate-600"
        }`}
      >
        {text}
      </p>
    </motion.div>
  );
}

function RevealCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      transition={{ duration: 0.55, ease: "easeOut" }}
      whileHover={{ y: -10, scale: 1.015 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#061633] [zoom:0.68]">
      <section className="relative overflow-hidden bg-[#02122b] px-4 pt-4 text-white">
        <motion.nav
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="relative z-20 mx-auto flex max-w-7xl items-center justify-between rounded-2xl bg-white px-5 py-3 text-[#061633] shadow-[0_20px_60px_rgba(0,0,0,0.22)]"
        >
          <Link href="/" className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-full border border-blue-200 bg-blue-50 text-xl text-blue-600">
              ✦
            </div>
            <div>
              <p className="text-xl font-black tracking-tight">GAHN AI</p>
              <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-slate-500">
                Global AI Human Helper Network
              </p>
            </div>
          </Link>

          <div className="hidden items-center gap-6 text-sm font-semibold md:flex">
            <a href="#features">Features</a>
            <a href="#instructors">AI Instructors</a>
            <a href="#worlds">Learning Worlds</a>
            <a href="#pricing">Pricing</a>
            <a href="#about">About Us</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="flex shrink-0 gap-2">
            <Link
              href="/login"
              className="hidden rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold transition hover:-translate-y-0.5 hover:bg-slate-50 sm:block"
            >
              Log In
            </Link>
            <Link
              href="/login"
              className="rounded-xl bg-[#071f4d] px-5 py-2 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#0b2f6d]"
            >
              Get Started →
            </Link>
          </div>
        </motion.nav>

        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_34%,rgba(25,78,185,0.20),transparent_40%),radial-gradient(circle_at_18%_65%,rgba(17,52,122,0.16),transparent_35%),radial-gradient(circle_at_85%_65%,rgba(17,52,122,0.16),transparent_35%)]" />

        <WaveLines />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="relative z-10 mx-auto max-w-6xl pb-20 pt-10 text-center"
        >
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="mx-auto mb-6 inline-flex rounded-full border border-white/15 bg-[#102b5a] px-5 py-2 text-sm font-medium backdrop-blur"
          >
            ✦ AI-Powered Learning Built For Your Future
          </motion.div>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="mx-auto max-w-3xl text-4xl font-black leading-[1.02] tracking-[-0.04em] lg:text-5xl xl:text-[4.2rem]"
          >
            Learn Smarter.
            <br />
            <span className="bg-gradient-to-r from-[#8faee8] via-[#3f6ecf] to-[#0d4fc7] bg-clip-text text-transparent">
              Achieve More.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="mx-auto mt-5 max-w-2xl text-base leading-7 text-blue-50/85"
          >
            GAHN AI uses advanced AI instructors, proven learning methods, and
            personalized learning paths to help you learn more effectively than
            traditional education.
          </motion.p>

          <motion.div variants={fadeUp} transition={{ duration: 0.65, ease: "easeOut" }}>
            <Link
              href="/login"
              className="mt-9 inline-flex rounded-2xl border border-blue-300/40 bg-[#0b2f6d] px-12 py-4 text-xl font-black shadow-[0_0_30px_rgba(11,47,109,0.35)] transition hover:-translate-y-1 hover:bg-[#12438f] hover:shadow-[0_0_42px_rgba(11,47,109,0.5)]"
            >
              Enter System →
            </Link>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="mt-8 flex flex-wrap justify-center gap-5 text-sm text-blue-50/90"
          >
            <span>✓ AI-Powered Instructors</span>
            <span>✓ Real Skills, Real Results</span>
            <span>✓ Proven Learning Methods</span>
            <span>✓ Secure & Private</span>
          </motion.div>
        </motion.div>

        <WhiteDip />
      </section>

      <section id="features" className="relative bg-white px-5 pb-16 pt-8">
        <div className="mx-auto max-w-7xl text-center">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55 }}
            className="text-base font-bold text-[#061633]"
          >
            Trusted by learners worldwide
          </motion.p>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mt-7 flex flex-wrap items-center justify-center gap-10 text-2xl font-black text-slate-400"
          >
            {trustLogos.map((logo) => (
              <motion.span key={logo} variants={fadeUp}>
                {logo}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.18 }}
            className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5"
          >
            {features.map(([title, text], index) => (
              <RevealCard
                key={title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_12px_40px_rgba(2,6,23,0.06)] transition hover:border-blue-200 hover:shadow-[0_24px_70px_rgba(2,6,23,0.14)]"
              >
                <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-blue-50 text-2xl text-blue-700">
                  {["✦", "▥", "◌", "⌂", "↗"][index]}
                </div>
                <h3 className="text-lg font-black leading-tight">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
              </RevealCard>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="instructors" className="bg-[#02122b] px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            dark
            eyebrow="AI Instructor Preview"
            title="Meet Your AI Instructors"
            text="Realistic AI instructors built to explain, challenge, correct, and adapt to each learner."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.18 }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
            {instructors.map(([name, role, desc]) => (
              <RevealCard
                key={name}
                className="overflow-hidden rounded-3xl border border-blue-400/20 bg-white/5 shadow-2xl backdrop-blur transition hover:border-blue-300/40 hover:bg-white/[0.07]"
              >
                <div className="relative grid h-72 place-items-center bg-gradient-to-br from-[#102b5a] via-[#142d63] to-[#07152f]">
                  <div className="grid h-28 w-28 place-items-center rounded-full border border-blue-300/30 bg-blue-400/10 text-5xl">
                    ✦
                  </div>
                  <div className="absolute bottom-4 left-4 rounded-full bg-black/60 px-3 py-1 text-xs">
                    <span className="mr-2 inline-block h-2 w-2 rounded-full bg-green-400" />
                    Online
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold">{name}</h3>
                  <p className="mt-1 text-sm font-semibold text-blue-300">
                    {role} Instructor
                  </p>
                  <p className="mt-4 text-sm leading-6 text-blue-100/75">{desc}</p>
                </div>
              </RevealCard>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="worlds" className="bg-white px-6 py-20 text-[#061633]">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Learning Worlds"
            title="Choose What You Want To Master"
            text="GAHN AI is designed around learning worlds that guide users into the right path."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.18 }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
            {worlds.map(([title, text]) => (
              <RevealCard
                key={title}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:border-blue-200 hover:shadow-xl"
              >
                <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-blue-50 text-2xl text-blue-700">
                  ◇
                </div>
                <h3 className="text-2xl font-black">{title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{text}</p>
              </RevealCard>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-[#f6f9ff] px-6 py-20 text-[#061633]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2"
        >
          <motion.div variants={fadeUp} transition={{ duration: 0.6 }}>
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Product Preview
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              A Learning Dashboard Built Around You
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Users will be able to see lessons, AI instructor guidance, progress, notes, assessments, achievements, and learning paths in one clean dashboard.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              The goal is to make learning feel structured, personal, and easier to follow than searching through random videos or courses.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.65 }}
            whileHover={{ y: -10, scale: 1.01 }}
            className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-2xl"
          >
            <div className="rounded-[1.5rem] bg-[#02122b] p-6 text-white">
              <div className="mb-6 flex items-center justify-between">
                <p className="font-black">Learning Dashboard</p>
                <span className="rounded-full bg-blue-500/20 px-3 py-1 text-xs text-blue-200">
                  Active
                </span>
              </div>
              <div className="grid gap-4">
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-sm text-blue-200">Current Path</p>
                  <p className="mt-1 text-xl font-black">Python Foundations</p>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl bg-white/10 p-4">
                    <p className="text-sm text-blue-200">Progress</p>
                    <p className="mt-1 text-2xl font-black">42%</p>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-4">
                    <p className="text-sm text-blue-200">Instructor</p>
                    <p className="mt-1 text-2xl font-black">Nova</p>
                  </div>
                </div>
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-sm text-blue-200">Next Lesson</p>
                  <p className="mt-1 font-bold">Variables, logic, and practice questions</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section className="bg-white px-6 py-20 text-[#061633]">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="How It Works"
            title="From Learning To Real Skill"
            text="GAHN AI is built to move users from curiosity to understanding, practice, progress, and real skill development."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.18 }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {steps.map(([step, title, desc]) => (
              <RevealCard
                key={step}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:border-blue-200 hover:shadow-xl"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-lg font-black text-blue-700">
                  {step}
                </div>
                <h3 className="text-2xl font-bold">{title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{desc}</p>
              </RevealCard>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-[#02122b] px-6 py-20 text-white">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3"
        >
          <motion.div variants={fadeUp} className="lg:col-span-1">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-300">
              Why Different
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-tight">
              Not Just Another Course Website
            </h2>
          </motion.div>

          <motion.div variants={staggerContainer} className="grid gap-5 lg:col-span-2">
            {[
              ["Traditional platforms give content.", "Most platforms give videos, courses, or notes and leave users to figure out the rest."],
              ["GAHN AI gives guidance.", "GAHN AI is designed to guide users with AI instructors, learning paths, feedback, practice, and progress tracking."],
              ["The platform adapts to the learner.", "Instead of everyone learning the same way, GAHN AI is built around each user's goals, weaknesses, pace, and interests."],
            ].map(([title, text]) => (
              <RevealCard
                key={title}
                className="rounded-3xl border border-blue-300/20 bg-white/5 p-7 transition hover:border-blue-300/40 hover:bg-white/[0.07]"
              >
                <h3 className="text-2xl font-black">{title}</h3>
                <p className="mt-3 leading-7 text-blue-100/75">{text}</p>
              </RevealCard>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <section id="pricing" className="bg-white px-6 py-20 text-[#061633]">
        <div className="mx-auto max-w-5xl text-center">
          <SectionIntro
            eyebrow="Pricing"
            title="Start Learning Smarter"
            text="GAHN AI is currently in early development. Join early to follow the platform and get access when the first learning experience is ready."
          />

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -10, scale: 1.015 }}
            className="mx-auto mt-10 max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-xl"
          >
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Early Access
            </p>
            <h3 className="mt-3 text-4xl font-black">Coming Soon</h3>
            <p className="mt-4 leading-7 text-slate-600">
              AI instructors, personalized learning paths, progress tracking, learning worlds, and future avatar based lessons.
            </p>
            <Link
              href="/login"
              className="mt-8 inline-flex w-full justify-center rounded-2xl bg-[#071f4d] px-6 py-4 text-lg font-black text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#0b2f6d]"
            >
              Join Early Access →
            </Link>
          </motion.div>
        </div>
      </section>

      <section id="about" className="bg-[#f6f9ff] px-6 py-20 text-[#061633]">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Founder Vision
          </p>
          <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
            Built For The Future Of Education
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            GAHN AI is being built around the belief that AI can make education more personal, accessible, and effective. Instead of forcing every learner into the same system, GAHN AI aims to create a system that adapts to each learner.
          </p>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            The long term vision is to create a global network of AI instructors that can help people learn skills, build confidence, and prepare for the future.
          </p>
        </motion.div>
      </section>

      <section id="contact" className="bg-[#02122b] px-6 py-16 text-white">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left"
        >
          <div>
            <h2 className="text-3xl font-black">Ready to enter GAHN AI?</h2>
            <p className="mt-2 text-blue-100/75">
              Join early and follow the future of AI powered learning.
            </p>
          </div>
          <Link
            href="/login"
            className="rounded-2xl bg-white px-8 py-4 font-black text-[#061633] transition hover:-translate-y-1 hover:bg-blue-50"
          >
            Get Started →
          </Link>
        </motion.div>
      </section>

      <footer className="bg-[#010b1c] px-6 py-8 text-center text-sm text-blue-100/60">
        © 2026 GAHN AI. Global AI Human Helper Network.
      </footer>
    </main>
  );
}
