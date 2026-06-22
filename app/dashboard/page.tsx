"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

const navItems = [
  ["🏠", "Dashboard"],
  ["💼", "Career Skills"],
  ["🎓", "School Help"],
  ["🧠", "Brain Development"],
  ["🌍", "General Knowledge"],
  ["📚", "Book Intelligence"],
  ["🤖", "AI Instructors"],
  ["📝", "My Notes"],
  ["🏆", "Certificates"],
  ["🗂️", "Portfolio"],
  ["📊", "Progress"],
  ["👥", "Community"],
];

const worlds = [
  ["Career Skills", "Build real skills. Get job ready.", "/learning/career.png"],
  ["School Help", "Master your subjects. Excel in school.", "/learning/school.png"],
  ["Brain Development", "Train your brain. Upgrade your mind.", "/learning/braindevelopment.png"],
  ["General Knowledge", "Learn life skills. Grow every day.", "/learning/knowledge.png"],
  ["Book Intelligence", "Learn from books. Remember more.", "/learning/book.png"],
];

const stats = [
  ["🔥", "0", "Day Streak"],
  ["📘", "0", "Courses in Progress"],
  ["🏆", "0", "Certificates Earned"],
  ["⭕", "0%", "Overall Progress"],
];

const coursePlaceholders = [
  ["🐍", "Python Programming", "Career Skills"],
  ["🧮", "Math Fundamentals", "School Help"],
  ["🧠", "Memory & Focus", "Brain Development"],
  ["📚", "Book Notes", "Book Intelligence"],
];

export default function DashboardPage() {
  const router = useRouter();

  const [fullName, setFullName] = useState("Learner");
  const [initials, setInitials] = useState("AI");
  const [avatarUrl, setAvatarUrl] = useState("");

  useEffect(() => {
    async function loadUserProfile() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        router.push("/login");
        return;
      }

      const { data: profile } = await supabase
        .from("profiles")
        .select("full_name, avatar_url")
        .eq("id", user.id)
        .single();

      const name =
        profile?.full_name ||
        user.user_metadata?.full_name ||
        user.user_metadata?.name ||
        user.email ||
        "Learner";

      const image =
        profile?.avatar_url ||
        user.user_metadata?.avatar_url ||
        user.user_metadata?.picture ||
        "";

      setFullName(name);
      setAvatarUrl(image);

      const generatedInitials = String(name)
        .split(" ")
        .filter(Boolean)
        .map((word: string) => word[0])
        .join("")
        .slice(0, 2)
        .toUpperCase();

      setInitials(generatedInitials || "AI");
    }

    loadUserProfile();
  }, [router]);

  async function handleLogout() {
    await supabase.auth.signOut();
    router.push("/login");
    router.refresh();
  }

  return (
    <main className="min-h-screen bg-[#f4f7fb] text-[#061633]">
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-[230px_minmax(0,1fr)_280px]">
        <aside className="bg-[#02122b] p-4 text-white lg:p-5">
          <div className="flex items-center gap-3">
            <img
              src="/logo/brain.png"
              alt="GAHN AI"
              className="h-11 w-11 rounded-full bg-white object-contain p-1"
            />
            <div>
              <h1 className="text-xl font-black">GAHN AI</h1>
              <p className="text-[8px] font-bold uppercase tracking-[0.16em] text-blue-200/70">
                Global AI Human Helper Network
              </p>
            </div>
          </div>

          <nav className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:mt-8 lg:block lg:space-y-1.5">
            {navItems.map(([icon, item], index) => (
              <Link
                href={index === 0 ? "/dashboard" : "/in-progress"}
                key={item}
                className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-bold ${
                  index === 0
                    ? "bg-white text-[#061633]"
                    : "text-blue-100 hover:bg-white/10"
                }`}
              >
                <span>{icon}</span>
                {item}
              </Link>
            ))}
          </nav>

          <div className="mt-7 rounded-2xl border border-blue-300/20 bg-[#061633] p-5 text-center shadow-xl">
            <div className="text-4xl">👑</div>
            <h3 className="mt-3 text-xl font-black">Mastery Plan</h3>
            <p className="mt-2 text-sm leading-6 text-blue-100/70">
              Unlock certificates, portfolio, advanced instructors, and career tools.
            </p>
            <Link
              href="/in-progress"
              className="mt-5 block rounded-xl bg-white px-4 py-3 text-sm font-black text-[#061633]"
            >
              Upgrade Now
            </Link>
          </div>
        </aside>

        <section className="min-w-0 p-4 sm:p-5">
          <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
            <div className="relative w-full max-w-xl">
              <input
                placeholder="Search for skills, topics, careers..."
                className="h-12 w-full rounded-xl border border-slate-200 bg-white px-5 pr-12 text-sm shadow-sm outline-none"
              />
              <span className="absolute right-4 top-3 text-slate-400">⌕</span>
            </div>

            <div className="flex w-full flex-wrap items-center gap-3 xl:w-auto xl:shrink-0">
              <span className="rounded-full bg-white px-5 py-3 text-sm font-bold shadow-sm">
                🔥 0 Day Streak
              </span>
              <span className="text-xl">🔔</span>
              <span className="text-xl">💬</span>

              <div className="flex items-center gap-3 rounded-full bg-white px-4 py-2 shadow-sm">
                {avatarUrl ? (
                  <img
                    src={avatarUrl}
                    alt={fullName}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                ) : (
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-[#071f4d] text-sm font-black text-white">
                    {initials}
                  </div>
                )}

                <div>
                  <p className="text-sm font-black">{fullName}</p>
                  <p className="text-xs text-slate-500">Free Plan</p>
                </div>

                <Link href="/profile" className="text-sm font-black text-slate-500">
                  ˅
                </Link>
              </div>

              <button
                onClick={handleLogout}
                className="rounded-xl bg-red-500 px-4 py-2 text-sm font-bold text-white hover:bg-red-600"
              >
                Logout
              </button>
            </div>
          </div>

          <div className="mt-7">
            <h2 className="text-3xl font-black">Welcome back, {fullName} 👋</h2>
            <p className="mt-1 text-sm text-slate-600">
              Continue your learning journey. The future is built by what you learn today.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map(([icon, number, label]) => (
              <div key={label} className="rounded-2xl bg-white p-5 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-blue-50 text-2xl">
                    {icon}
                  </div>
                  <div>
                    <p className="text-2xl font-black">{number}</p>
                    <p className="text-xs font-bold text-slate-500">{label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h3 className="mt-6 text-xl font-black">Choose Your Learning World</h3>

          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-5">
            {worlds.map(([title, text, image]) => (
              <Link
                href="/in-progress"
                key={title}
                className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <img
                  src={image}
                  alt={title}
                  className="h-[150px] w-full object-cover object-top xl:h-[78px]"
                />
                <div className="p-4">
                  <h4 className="min-h-[32px] text-[12px] font-black uppercase leading-tight">
                    {title}
                  </h4>
                  <p className="mt-1 min-h-[36px] text-[11px] leading-4 text-slate-600">
                    {text}
                  </p>
                  <div className="mt-3 inline-block rounded-lg bg-[#071f4d] px-3 py-2 text-[11px] font-bold text-white">
                    Explore →
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-between">
            <h3 className="text-xl font-black">Continue Learning</h3>
            <Link href="/in-progress" className="text-sm font-bold text-blue-600">
              View All
            </Link>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {coursePlaceholders.map(([icon, title, category]) => (
              <div key={title} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-blue-50 text-2xl">
                  {icon}
                </div>
                <h4 className="mt-3 min-h-[32px] text-[12px] font-black">{title}</h4>
                <p className="text-xs text-slate-500">{category}</p>
                <div className="mt-4 h-2 rounded-full bg-slate-200">
                  <div className="h-2 w-0 rounded-full bg-[#071f4d]" />
                </div>
                <p className="mt-2 text-xs font-bold text-slate-500">0% started</p>
                <Link
                  href="/in-progress"
                  className="mt-3 block rounded-lg border border-slate-200 px-4 py-2 text-center text-xs font-bold"
                >
                  Start
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 xl:grid-cols-2">
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <h3 className="font-black">Learning Overview</h3>
                <span className="text-xs font-bold text-slate-400">This Week</span>
              </div>
              <div className="mt-5 grid h-44 place-items-center rounded-xl border border-dashed border-slate-300 bg-slate-50 text-center">
                <div>
                  <p className="font-black">No learning data yet</p>
                  <p className="mt-1 text-sm text-slate-500">
                    Activity appears after your first lesson.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <h3 className="font-black">AI Recommendations</h3>
                <Link href="/in-progress" className="text-sm text-blue-600">
                  View All
                </Link>
              </div>

              <div className="mt-4 space-y-3">
                {[
                  ["Review Spaced Repetition Cards", "Strengthen long-term memory"],
                  ["Practice Coding Challenge", "Build real problem-solving skill"],
                  ["Watch System Design Basics", "Recommended next lesson"],
                ].map(([title, text]) => (
                  <div key={title} className="flex items-center justify-between rounded-xl border border-slate-200 p-3">
                    <div>
                      <p className="text-sm font-black">{title}</p>
                      <p className="text-xs text-slate-500">{text}</p>
                    </div>
                    <Link href="/in-progress" className="rounded-lg bg-slate-100 px-3 py-2 text-xs font-bold">
                      Start
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <aside className="grid gap-4 p-4 sm:grid-cols-2 lg:block lg:space-y-4 lg:p-5">
          <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
            <div className="flex items-center justify-between p-5">
              <h3 className="font-black">AI Instructor</h3>
              <Link href="/in-progress" className="text-sm text-blue-600">
                View All
              </Link>
            </div>

            <div className="mx-5 rounded-2xl bg-[#071f4d] p-4 text-white">
              <div className="h-40 overflow-hidden rounded-xl bg-white/10">
                <img
                  src="/learning/braindevelopment.png"
                  alt="AI Instructor"
                  className="h-full w-full object-cover object-top opacity-90"
                />
              </div>
              <div className="mt-4">
                <p className="text-xs font-bold text-green-300">● Online</p>
                <p className="mt-2 text-sm leading-6">
                  Hi {fullName}. Your AI instructor is ready when you choose one.
                </p>
              </div>
              <Link
                href="/in-progress"
                className="mt-4 block rounded-xl bg-blue-600 px-5 py-3 text-center text-sm font-bold text-white"
              >
                Choose Instructor
              </Link>
            </div>
            <div className="h-5" />
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <h3 className="font-black">Today&apos;s Schedule</h3>
            <div className="mt-4 rounded-xl border border-dashed border-slate-300 bg-slate-50 p-5 text-center text-sm text-slate-500">
              No lessons scheduled yet.
            </div>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <h3 className="font-black">Your Progress</h3>
            <div className="mx-auto mt-5 grid h-32 w-32 place-items-center rounded-full border-[14px] border-slate-200 text-2xl font-black">
              0%
            </div>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <h3 className="font-black">Community Feed</h3>
            <div className="mt-4 rounded-xl border border-dashed border-slate-300 bg-slate-50 p-5 text-center text-sm text-slate-500">
              Community activity appears after launch.
            </div>
          </div>
        </aside>
      </div>

      <footer className="grid grid-cols-1 gap-4 bg-[#02122b] px-5 py-5 text-white sm:grid-cols-2 xl:grid-cols-4">
        {[
          ["✦", "AI Powered Learning", "Personalized for you"],
          ["⚗", "Proven Learning Methods", "Science backed results"],
          ["🏫", "Real World Outcomes", "Skills, certificates, portfolios"],
          ["🌍", "Global Community", "Learn. Share. Grow."],
        ].map(([icon, title, text]) => (
          <div key={title} className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/10">
              {icon}
            </div>
            <div>
              <p className="text-sm font-black">{title}</p>
              <p className="text-xs text-blue-100/60">{text}</p>
            </div>
          </div>
        ))}
      </footer>
    </main>
  );
}