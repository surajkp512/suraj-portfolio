"use client";

import ProjectSlider from "@/components/ProjectSlider";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <main className="mx-auto px-6 py-16 space-y-20 max-w-[1300px]">
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
          <a
            href="https://github.com/surajkp512"
            target="_blank"
            rel="noreferrer"
            className="border border-green-500 px-4 py-2 rounded hover:bg-green-500 hover:text-black transition"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/parida-suraj"
            target="_blank"
            rel="noreferrer"
            className="border border-green-500 px-4 py-2 rounded hover:bg-green-500 hover:text-black transition"
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">About</h2>

        <p className="text-gray-300 max-w-3xl">
          Backend-focused developer experienced in designing scalable systems
          using Python and Django. I specialize in building REST APIs,
          asynchronous systems using RabbitMQ and Celery, and optimizing backend
          services for production workloads.
        </p>
      </section>

      {/* EXPERIENCE */}
      <section className="space-y-3 bg-zinc-900/60 border border-zinc-800 rounded-xl p-8 backdrop-blur">
        <h2 className="text-2xl font-semibold text-zinc-100 tracking-tight">
          Experience
        </h2>

        <div className="space-y-2">
          <h3 className="font-semibold text-lg text-zinc-100">
            DJUBO — Associate Engineer
          </h3>

          <p className="text-sm text-gray-500">May 2024 – April 2025</p>

          <ul className="list-disc ml-6 text-gray-300 space-y-1">
            <li>
              Improved 4 Django backend services for hotel management systems
            </li>
            <li>
              Built 10+ high-availability REST APIs using Django REST Framework
            </li>
            <li>
              Implemented asynchronous report generation with Celery and
              RabbitMQ
            </li>
            <li>Automated data workflows reducing manual processing time</li>
            <li>
              Resolved critical MySQL billing data issues in production systems
            </li>
          </ul>
        </div>

        <div className="space-y-2 pt-4">
          <h3 className="font-semibold text-lg text-zinc-100">
            Automated Trading Platform — Freelance
          </h3>

          <p className="text-sm text-gray-500">Feb 2026 – Present</p>

          <ul className="list-disc ml-6 text-gray-300 space-y-1">
            <li>
              Developed an automated trading platform for two private clients.
            </li>
            <li>
              Built Django backend for trade execution and portfolio tracking.
            </li>
            <li>Integrated broker APIs for automated order placement.</li>
          </ul>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <ProjectSlider />
      </section>

      {/* TECH STACK */}

      <TechStack />

      {/* CONTACT */}
      <section className="space-y-3 bg-zinc-900/60 border border-zinc-800 rounded-xl p-8 backdrop-blur">
        <h2 className="text-2xl font-semibold">Contact</h2>

        <p className="text-gray-300">Email: dev.surajkp@gmail.com</p>

        <p className="text-gray-300">LinkedIn: linkedin.com/in/parida-suraj</p>
      </section>
    </main>
  );
}
