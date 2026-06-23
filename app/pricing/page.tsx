"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

const individualPlans = [
  {
    name: "Free",
    price: "$0",
    tag: "Explore",
    desc: "For learners who want to test the platform before upgrading.",
    features: [
      "Selected learning worlds",
      "Limited AI instructor help",
      "Basic lessons and quizzes",
      "Basic notes",
      "Basic progress tracking",
      "Limited recall practice",
      "No certificates",
      "No portfolio builder",
    ],
  },
  {
    name: "Learner Plus",
    price: "$29",
    tag: "Build consistency",
    desc: "For students and self-learners who want stronger daily learning support.",
    stripePlan: "learner_plus",
    features: [
      "More AI instructor sessions",
      "Personalized learning paths",
      "Study planner",
      "Homework and concept support",
      "Unlimited notes",
      "Progress dashboard",
      "Active recall system",
      "Weak-area detection",
    ],
  },
  {
    name: "Mastery",
    price: "$79",
    tag: "Most Popular",
    desc: "For serious learners who want mastery, proof of skill, and long-term progress.",
    popular: true,
    stripePlan: "mastery",
    features: [
      "Unlimited AI learning sessions",
      "Advanced AI instructor memory",
      "Adaptive difficulty engine",
      "Certificates unlocked",
      "Portfolio builder",
      "Project-based learning",
      "Skill verification",
      "Advanced assessments",
      "Personalized recommendations",
    ],
  },
  {
    name: "Career Pro",
    price: "$149",
    tag: "Career outcomes",
    desc: "For learners focused on job readiness, interviews, projects, and professional growth.",
    stripePlan: "career_pro",
    features: [
      "Career roadmap builder",
      "Resume and profile builder",
      "Interview simulations",
      "Career skills assessments",
      "Employer-ready portfolio",
      "Project verification",
      "AI career mentor",
      "Advanced analytics",
      "Priority support",
    ],
  },
];

const schoolPlans = [
  {
    name: "Classroom AI",
    price: "$499",
    tag: "For teachers",
    desc: "For teachers or small classrooms that need AI lesson support and student progress tools.",
    stripePlan: "classroom_ai",
    features: [
      "AI classroom assistant",
      "Up to 1 classroom",
      "Student tutoring support",
      "Lesson plan generation",
      "Homework and quiz generation",
      "Student progress insights",
      "Teacher dashboard",
      "Classroom reports",
    ],
  },
  {
    name: "School OS",
    price: "$2,000",
    tag: "School subscription",
    desc: "For schools that want AI instructors supporting classrooms, teachers, and administrators.",
    featured: true,
    stripePlan: "school_os",
    features: [
      "Multiple classroom support",
      "Teacher command center",
      "School-wide analytics",
      "Student weakness detection",
      "Intervention plans",
      "Certificates and portfolios",
      "Parent-ready reports",
      "Curriculum support tools",
      "Admin dashboard",
      "Priority implementation support",
    ],
  },
  {
    name: "District / Government",
    price: "Custom",
    tag: "Large scale",
    desc: "For districts, private school networks, government programs, and enterprise learning systems.",
    features: [
      "Multi-school deployment",
      "District-wide analytics",
      "Standards-aligned reporting",
      "Custom curriculum mapping",
      "Bulk student accounts",
      "Teacher training workflows",
      "Security support",
      "Dedicated success support",
      "Custom integrations",
    ],
  },
];

const outcomePillars = [
  ["Learn", "AI instructors explain concepts clearly."],
  ["Practice", "Recall, quizzes, and exercises build retention."],
  ["Prove Mastery", "Certificates and assessments show progress."],
  ["Build Portfolio", "Projects and achievements create proof of skill."],
  ["Scale Learning", "Teacher and school tools support classrooms."],
];

function PlanCard({ plan, school = false }: { plan: any; school?: boolean }) {
  const [loading, setLoading] = useState(false);
  const highlighted = plan.popular || plan.featured;

  async function handleCheckout() {
    if (!plan.stripePlan) {
      window.location.href = plan.price === "Custom" ? "/in-progress" : "/signup";
      return;
    }

    setLoading(true);

    const res = await fetch("/api/stripe/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ plan: plan.stripePlan }),
    });

    const data = await res.json();

    if (data.url) {
      window.location.href = data.url;
      return;
    }

    setLoading(false);
    alert("Could not start checkout. Please try again.");
  }

  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className={`relative flex min-h-[640px] flex-col rounded border p-7 shadow-sm ${
        highlighted
          ? "border-[#071f4d] bg-white shadow-xl"
          : "border-slate-200 bg-white"
      }`}
    >
      {highlighted && (
        <div className="absolute -top-4 left-6 rounded bg-[#071f4d] px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-white">
          {plan.popular ? "Most Popular" : "School Subscription"}
        </div>
      )}

      <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">
        {plan.tag}
      </p>

      <h2 className="mt-5 text-3xl font-black text-[#061633]">{plan.name}</h2>

      <div className="mt-5 flex items-end gap-1">
        <span className="text-5xl font-black tracking-tight text-[#061633]">
          {plan.price}
        </span>
        {plan.price !== "Custom" && <span className="mb-2 text-slate-500">/mo</span>}
      </div>

      <p className="mt-5 min-h-[96px] text-sm leading-6 text-slate-600">
        {plan.desc}
      </p>

      <div className="my-6 h-px bg-slate-200" />

      <ul className="space-y-4 text-sm text-slate-700">
        {plan.features.map((feature: string) => (
          <li key={feature} className="flex gap-3">
            <span className="font-black text-[#071f4d]">✓</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={handleCheckout}
        disabled={loading}
        className={`mt-auto block rounded px-5 py-4 text-center text-sm font-black uppercase tracking-[0.14em] transition disabled:cursor-not-allowed disabled:opacity-60 ${
          highlighted
            ? "bg-[#071f4d] text-white hover:bg-[#0b2f6d]"
            : "border border-slate-300 bg-slate-50 text-[#061633] hover:bg-white"
        }`}
      >
        {loading
          ? "Loading..."
          : plan.price === "Custom"
          ? "Request Access"
          : school
          ? `Choose ${plan.name}`
          : `Start ${plan.name}`}
      </button>
    </motion.div>
  );
}

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white text-[#061633]">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/" className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-slate-50 text-[#071f4d]">
              ✦
            </div>
            <div>
              <p className="text-xl font-black tracking-tight">GAHN AI</p>
              <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-slate-500">
                Global AI Human Helper Network
              </p>
            </div>
          </Link>

          <div className="hidden items-center gap-8 text-sm font-black uppercase tracking-[0.12em] md:flex">
            <Link href="/">Home</Link>
            <Link href="/#programs">Programs</Link>
            <Link href="/#platform">Platform</Link>
            <Link href="/#instructors">Instructors</Link>
            <Link href="/#schools">Schools</Link>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="rounded border border-slate-300 px-5 py-3 text-sm font-black uppercase tracking-[0.12em]"
            >
              Log In
            </Link>
            <Link
              href="/signup"
              className="rounded bg-[#071f4d] px-6 py-3 text-sm font-black uppercase tracking-[0.12em] text-white"
            >
              Sign Up
            </Link>
          </div>
        </nav>
      </header>

      <section className="border-b border-slate-200 bg-[#f5f7fb] px-6 py-24">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-5xl text-center"
        >
          <p className="text-xs font-black uppercase tracking-[0.24em] text-[#071f4d]">
            Pricing built around outcomes
          </p>

          <h1 className="mt-5 text-5xl font-black tracking-tight md:text-7xl">
            Plans for learners, teachers, and schools.
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-slate-700">
            Start as an individual learner, grow into mastery, or bring structured
            AI learning support into a classroom or school system.
          </p>
        </motion.div>
      </section>

      <section className="px-6 py-20">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.6 }}
          className="mx-auto grid max-w-7xl gap-4 md:grid-cols-5"
        >
          {outcomePillars.map(([title, text]) => (
            <div
              key={title}
              className="rounded border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-xl font-black">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
            </div>
          ))}
        </motion.div>
      </section>

      <section className="border-t border-slate-200 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#071f4d]">
              Individual learners
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-tight">
              Plans for students, self-learners, and career builders.
            </h2>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
              These plans help learners move from basic exploration into daily
              consistency, mastery, certificates, portfolios, and career readiness.
            </p>
          </div>

          <motion.div
            initial="hidden"
            animate="show"
            transition={{ staggerChildren: 0.08 }}
            className="grid items-stretch gap-6 xl:grid-cols-4"
          >
            {individualPlans.map((plan) => (
              <PlanCard key={plan.name} plan={plan} />
            ))}
          </motion.div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-[#f5f7fb] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#071f4d]">
              Schools, teachers, districts
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-tight">
              Classroom support built to scale.
            </h2>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
              These plans are for education organizations that need AI tutoring,
              teacher support, student analytics, intervention tools, and
              measurable academic progress.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            transition={{ staggerChildren: 0.08 }}
            className="grid items-stretch gap-6 lg:grid-cols-3"
          >
            {schoolPlans.map((plan) => (
              <PlanCard key={plan.name} plan={plan} school />
            ))}
          </motion.div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[420px_1fr]">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#071f4d]">
              Why pricing matters
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-tight">
              The platform is priced around learning outcomes.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {[
              [
                "For individual learners",
                "Paid plans unlock deeper guidance, stronger practice, memory, certificates, portfolios, and career readiness.",
              ],
              [
                "For schools",
                "School plans are built around teacher time savings, classroom visibility, student support, and scalable learning analytics.",
              ],
              [
                "For growth",
                "The platform can start simple and expand into advanced student dashboards, teacher tools, and district-level reporting.",
              ],
              [
                "For real proof",
                "Certificates, projects, skill verification, and portfolios help turn learning into visible progress.",
              ],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded border border-slate-200 bg-white p-7 shadow-sm"
              >
                <h3 className="text-2xl font-black">{title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-[#f5f7fb] px-6 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[1fr_360px]">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#071f4d]">
              Get started
            </p>
            <h2 className="mt-3 text-4xl font-black">
              Create your account and choose your first learning path.
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              New users sign up first. Returning users log in and continue from
              the dashboard.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <Link
              href="/signup"
              className="rounded bg-[#071f4d] px-8 py-4 text-center text-sm font-black uppercase tracking-[0.14em] text-white"
            >
              Sign Up
            </Link>
            <Link
              href="/login"
              className="rounded border border-slate-300 bg-white px-8 py-4 text-center text-sm font-black uppercase tracking-[0.14em]"
            >
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