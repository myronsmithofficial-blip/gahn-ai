import Link from "next/link";

const features = [
  ["AI-Powered Instructors", "Learn from adaptive AI instructors built around your goals."],
  ["Real Skills Real Results", "Gain practical skills you can apply in real-world scenarios."],
  ["Proven Learning Methods", "Use recall, practice, feedback, and review to learn faster."],
  ["Secure & Private By Design", "Your account and learning data stay protected."],
  ["Your Future Starts Here", "Build confidence, portfolio proof, and career readiness."],
];

const trustLogos = ["Google", "Microsoft", "AWS", "NVIDIA", "OpenAI"];

function WaveLines() {
  return (
    <svg
      className="pointer-events-none absolute bottom-[65px] left-0 z-[2] h-[300px] w-full opacity-75"
      viewBox="0 0 1440 300"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {Array.from({ length: 16 }).map((_, i) => (
        <path
          key={i}
          d={`M0 ${210 + i * 7} C 250 ${120 + i * 4}, 470 ${120 + i * 4}, 650 ${205 + i * 3} C 840 ${295 + i * 3}, 1100 ${295 + i * 3}, 1440 ${190 + i * 7}`}
          stroke="#93c5fd"
          strokeWidth="1"
          opacity={0.38 - i * 0.012}
          fill="none"
        />
      ))}
    </svg>
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

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#061633]">
      <section className="relative overflow-hidden bg-[#02122b] px-4 pt-4 text-white [zoom:0.82]">
        <nav className="relative z-20 mx-auto flex max-w-7xl items-center justify-between rounded-2xl bg-white px-5 py-3 text-[#061633] shadow-[0_20px_60px_rgba(0,0,0,0.22)]">
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
              className="hidden rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold sm:block"
            >
              Log In
            </Link>
            <Link
              href="/login"
              className="rounded-xl bg-[#071f4d] px-5 py-2 text-sm font-semibold text-white shadow-lg"
            >
              Get Started →
            </Link>
          </div>
        </nav>

        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_34%,rgba(25,78,185,0.20),transparent_40%),radial-gradient(circle_at_18%_65%,rgba(17,52,122,0.16),transparent_35%),radial-gradient(circle_at_85%_65%,rgba(17,52,122,0.16),transparent_35%)]" />

        <WaveLines />

        <div className="relative z-10 mx-auto max-w-6xl pb-20 pt-10 text-center">
          <div className="mx-auto mb-6 inline-flex rounded-full border border-white/15 bg-[#102b5a] px-5 py-2 text-sm font-medium backdrop-blur">
            ✦ AI-Powered Learning Built For Your Future
          </div>

          <h1 className="mx-auto max-w-3xl text-4xl font-black leading-[1.02] tracking-[-0.04em] lg:text-5xl xl:text-[4.2rem]">
            Learn Smarter.
            <br />
            <span className="bg-gradient-to-r from-[#8faee8] via-[#3f6ecf] to-[#0d4fc7] bg-clip-text text-transparent">
              Achieve More.
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-blue-50/85">
            GAHN AI uses advanced AI instructors, proven learning methods, and
            personalized learning paths to help you learn more effectively than
            traditional education.
          </p>

          <Link
            href="/login"
            className="mt-9 inline-flex rounded-2xl border border-blue-300/40 bg-[#0b2f6d] px-12 py-4 text-xl font-black shadow-[0_0_30px_rgba(11,47,109,0.35)] transition hover:bg-[#12438f]"
          >
            Enter System →
          </Link>

          <div className="mt-8 flex flex-wrap justify-center gap-5 text-sm text-blue-50/90">
            <span>✓ AI-Powered Instructors</span>
            <span>✓ Real Skills, Real Results</span>
            <span>✓ Proven Learning Methods</span>
            <span>✓ Secure & Private</span>
          </div>
        </div>

        <WhiteDip />
      </section>

      <section className="relative bg-white px-5 pb-16 pt-8">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-base font-bold text-[#061633]">
            Trusted by learners worldwide
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-10 text-2xl font-black text-slate-400">
            {trustLogos.map((logo) => (
              <span key={logo}>{logo}</span>
            ))}
          </div>

          <div id="features" className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {features.map(([title, text], index) => (
              <div
                key={title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_12px_40px_rgba(2,6,23,0.06)] transition hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(2,6,23,0.1)]"
              >
                <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-blue-50 text-2xl text-blue-700">
                  {["✦", "▥", "◌", "⌂", "↗"][index]}
                </div>
                <h3 className="text-lg font-black leading-tight">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}