import ProjectSlider from "@/components/ProjectSlider";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16 space-y-20">

      {/* HERO */}
      <section className="space-y-6 border border-green-500 p-8 rounded-xl shadow-[0_0_20px_rgba(0,255,0,0.3)]">

        <h1 className="text-5xl font-bold text-green-400">
          Suraj Kumar Parida
        </h1>

        <p className="text-green-300">
          Backend Engineer • Python • Django • Systems
        </p>

        <p className="text-green-500">
          Building scalable APIs, automation pipelines and backend systems.
        </p>

        <div className="flex gap-4 pt-4">
          <a className="border border-green-500 px-4 py-2 rounded hover:bg-green-500 hover:text-black transition">
            GitHub
          </a>

          <a className="border border-green-500 px-4 py-2 rounded hover:bg-green-500 hover:text-black transition">
            LinkedIn
          </a>
        </div>

      </section>

      {/* ABOUT */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">About</h2>

        <p className="text-gray-700 max-w-3xl">
          Backend-focused developer experienced in designing scalable
          systems using Python and Django. I specialize in building
          REST APIs, asynchronous systems using RabbitMQ and Celery,
          and optimizing backend services for production workloads.
        </p>
      </section>

      {/* EXPERIENCE */}
      <section className="space-y-3 bg-zinc-900/60 border border-zinc-800 rounded-xl p-8 backdrop-blur">
        <h2 className="text-2xl font-semibold text-zinc-100 tracking-tight">Experience</h2>

        {/* DJUBO */}
        <div className="space-y-2">
          <h3 className="font-semibold text-lg">
            DJUBO — Associate Engineer
          </h3>

          <p className="text-sm text-gray-500">
            May 2024 – April 2025
          </p>

          <ul className="list-disc ml-6 text-gray-700 space-y-1">
            <li>Improved 4 Django backend services for hotel management systems</li>
            <li>Built 10+ high-availability REST APIs using Django REST Framework</li>
            <li>Implemented asynchronous report generation with Celery and RabbitMQ</li>
            <li>Automated data workflows reducing manual processing time</li>
            <li>Resolved critical MySQL billing data issues in production systems</li>
          </ul>
        </div>

        {/* TRADING PLATFORM */}
        <div className="space-y-2">
          <h3 className="font-semibold text-lg">
            Automated Trading Platform — Freelance
          </h3>

          <p className="text-sm text-gray-500">
            Feb 2026 – Present
          </p>

          <ul className="list-disc ml-6 text-gray-700 space-y-1">
            <li>Developed an automated trading platform for two private clients to execute small trades based on technical indicators and fundamental signals.</li>
            <li>Built a Django backend for trade execution, portfolio tracking, and strategy management.</li>
            <li>Integrated broker APIs for automated order placement and real-time trade monitoring.</li>
          </ul>
        </div>

      </section>

      {/* PROJECTS */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Projects</h2>

        <ProjectSlider />
      </section>

      {/* TECH STACK */}
      <section className="space-y-3 bg-zinc-900/60 border border-zinc-800 rounded-xl p-8 backdrop-blur">
        <h2 className="text-2xl font-semibold">Tech Stack</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-gray-700">

          <div>
            <h4 className="font-semibold mb-2">Backend</h4>
            <ul className="space-y-1">
              <li>Python</li>
              <li>Django</li>
              <li>REST APIs</li>
              <li>RabbitMQ</li>
              <li>Redis</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Frontend</h4>
            <ul className="space-y-1">
              <li>JavaScript</li>
              <li>React</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Databases</h4>
            <ul className="space-y-1">
              <li>PostgreSQL</li>
              <li>MySQL</li>
              <li>MongoDB</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Tools</h4>
            <ul className="space-y-1">
              <li>Git</li>
              <li>Linux</li>
              <li>Docker</li>
              <li>Postman</li>
            </ul>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section className="space-y-3 bg-zinc-900/60 border border-zinc-800 rounded-xl p-8 backdrop-blur">
        <h2 className="text-2xl font-semibold">Contact</h2>

        <p className="text-gray-700">
          Email: dev.surajkp@gmail.com
        </p>

        <p className="text-gray-700">
          LinkedIn: linkedin.com/in/parida-suraj
        </p>
      </section>

    </main>
  );
}