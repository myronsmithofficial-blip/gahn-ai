import Link from "next/link";

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

const setupCards = [
  ["Choose AI Instructor", "Select your main private learning instructor."],
  ["Choose Learning Path", "Pick a world before lessons appear."],
  ["Upcoming Features", "Certificates, portfolio, projects, and community."],
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#f6f9ff] text-[#061633] [zoom:0.82]">
      <div className="grid min-h-screen grid-cols-[245px_1fr_320px]">
        <aside className="bg-[#02122b] p-5 text-white">
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

          <nav className="mt-8 space-y-1.5">
            {navItems.map(([icon, item], index) => (
              <Link
                href="/in-progress"
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

        <section className="min-w-0 p-5">
          <div className="flex items-center justify-between gap-5">
            <input
              placeholder="Search for skills, topics, careers..."
              className="h-12 w-full max-w-xl rounded-xl border border-slate-200 bg-white px-5 text-sm shadow-sm outline-none"
            />

            <div className="flex shrink-0 items-center gap-4">
              <span className="rounded-full bg-white px-5 py-3 text-sm font-bold shadow-sm">
                🔥 0 Day Streak
              </span>
              <span className="text-xl">🔔</span>
              <span className="text-xl">💬</span>

              <div className="flex items-center gap-3 rounded-full bg-white px-4 py-2 shadow-sm">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-[#071f4d] text-sm font-black text-white">
                  MS
                </div>
                <div>
                  <p className="text-sm font-black">Myron Smith</p>
                  <p className="text-xs text-slate-500">Free Plan</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-7">
            <h2 className="text-3xl font-black">Welcome back, Myron 👋</h2>
            <p className="mt-1 text-sm text-slate-600">
              Choose a learning world, select an AI instructor, and begin your first session.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-4 gap-4">
            {stats.map(([icon, number, label]) => (
              <div key={label} className="rounded-2xl bg-white p-5 shadow-sm">
                <div className="text-3xl">{icon}</div>
                <p className="mt-2 text-2xl font-black">{number}</p>
                <p className="text-sm text-slate-500">{label}</p>
              </div>
            ))}
          </div>

          <h3 className="mt-6 text-xl font-black">Choose Your Learning World</h3>

          <div className="mt-4 grid grid-cols-5 gap-4">
            {worlds.map(([title, text, image]) => (
              <Link
                href="/in-progress"
                key={title}
                className="overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <img
                  src={image}
                  alt={title}
                  className="h-[105px] w-full object-cover object-top"
                />

                <div className="p-4">
                  <h4 className="text-[15px] font-black uppercase leading-tight">
                    {title}
                  </h4>

                  <p className="mt-2 h-[48px] text-xs leading-5 text-slate-600">
                    {text}
                  </p>

                  <div className="mt-3 inline-block rounded-lg bg-[#071f4d] px-4 py-2 text-xs font-bold text-white">
                    Explore →
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <h3 className="mt-6 text-xl font-black">Start Your Setup</h3>

          <div className="mt-4 grid grid-cols-3 gap-4">
            {setupCards.map(([title, text]) => (
              <div key={title} className="rounded-2xl bg-white p-5 shadow-sm">
                <h3 className="font-black">{title}</h3>
                <p className="mt-2 min-h-[44px] text-sm leading-6 text-slate-600">
                  {text}
                </p>

                <Link
                  href="/in-progress"
                  className="mt-4 inline-flex rounded-lg bg-[#071f4d] px-4 py-2 text-xs font-bold text-white"
                >
                  Start →
                </Link>
              </div>
            ))}
          </div>

          <h3 className="mt-6 text-xl font-black">Continue Learning</h3>

          <div className="mt-4 rounded-2xl bg-white p-6 shadow-sm">
            <div className="grid place-items-center rounded-2xl border border-dashed border-slate-300 p-10 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-3xl">
                📚
              </div>

              <h4 className="mt-4 text-xl font-black">No Courses Started Yet</h4>

              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-600">
                Choose a learning world above and start your first lesson.
                Your active courses will appear here automatically.
              </p>

              <Link
                href="/in-progress"
                className="mt-5 inline-flex rounded-xl bg-[#071f4d] px-6 py-3 text-sm font-bold text-white"
              >
                Explore Learning Worlds
              </Link>
            </div>
          </div>
        </section>

        <aside className="space-y-4 p-5">
          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <h3 className="font-black">AI Instructor</h3>
              <Link href="/in-progress" className="text-sm text-blue-600">
                View All
              </Link>
            </div>

            <div className="mt-4 grid h-48 place-items-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 text-center">
              <div>
                <div className="text-4xl">🤖</div>
                <p className="mt-3 font-black">No Instructor Selected</p>
                <p className="mx-auto mt-2 max-w-[220px] text-sm text-slate-500">
                  Choose your main AI instructor for private learning.
                </p>
              </div>
            </div>

            <Link
              href="/in-progress"
              className="mt-4 block rounded-xl bg-[#071f4d] px-5 py-3 text-center text-sm font-bold text-white"
            >
              Choose Instructor
            </Link>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <h3 className="font-black">Learning Path</h3>
            <div className="mt-4 rounded-2xl border border-dashed border-slate-300 p-5 text-center text-sm text-slate-500">
              No learning path selected yet.
            </div>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <h3 className="font-black">Today&apos;s Schedule</h3>
            <div className="mt-4 rounded-2xl border border-dashed border-slate-300 p-5 text-center text-sm text-slate-500">
              No lessons scheduled yet.
            </div>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <h3 className="font-black">Your Progress</h3>
            <div className="mx-auto mt-5 grid h-28 w-28 place-items-center rounded-full border-[12px] border-slate-200 text-2xl font-black">
              0%
            </div>
            <p className="mt-4 text-center text-sm text-slate-500">
              Progress begins after your first completed lesson.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <h3 className="font-black">Community</h3>
            <div className="mt-4 rounded-2xl border border-dashed border-slate-300 p-5 text-center text-sm text-slate-500">
              Community activity will appear here after launch.
            </div>

            <Link
              href="/in-progress"
              className="mt-4 block rounded-xl bg-[#071f4d] px-5 py-3 text-center text-sm font-bold text-white"
            >
              Open Community
            </Link>
          </div>
        </aside>
      </div>
    </main>
  );
}