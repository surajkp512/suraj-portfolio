"use client";

import { useState } from "react";

const categories = [
  {
    label: "Languages",
    icon: "⌨",
    techs: ["Python", "JavaScript", "HTML", "CSS"],
  },
  {
    label: "Frameworks",
    icon: "⚙",
    techs: ["Django", "DRF", "React"],
  },
  {
    label: "Databases",
    icon: "🗄",
    techs: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
  },
  {
    label: "Messaging",
    icon: "📡",
    techs: ["RabbitMQ", "Celery"],
  },
  {
    label: "DevOps",
    icon: "🛠",
    techs: ["Docker", "Git", "Linux", "Postman"],
  },
];

export default function TechStackMobile() {
  const [active, setActive] = useState(null);
  const activeCategory = active !== null ? categories[active] : null;

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold text-green-400 font-mono">
        Tech Stack
      </h2>

      {/* Keyboard Buttons */}
      <div className="grid grid-cols-2 gap-4">
        {categories.map((cat, i) => (
          <button
            key={cat.label}
            onClick={() => setActive(active === i ? null : i)}
            className={`
              keycap
              h-14
              px-4
              font-mono
              text-sm
              flex items-center justify-center gap-2
              ${active === i ? "text-green-400 border-green-400" : "text-zinc-200"}
              ${cat.label === "DevOps" ? "col-span-2" : ""}
            `}
          >
            {cat.icon} {cat.label}
          </button>
        ))}
      </div>

      {/* Terminal */}
      <div className="bg-black/80 border border-green-500/30 rounded-xl font-mono">
        <div className="px-4 py-2 border-b border-green-500/20 text-xs text-green-400/60">
          ~/portfolio/stack
        </div>

        <div className="p-4 space-y-3 min-h-[120px]">
          {activeCategory ? (
            <>
              <div className="text-green-400 text-sm">
                ❯ ls ./{activeCategory.label.toLowerCase()}/
              </div>

              {activeCategory.techs.map((tech, i) => (
                <div key={tech} className="flex gap-3 text-sm">
                  <span className="text-green-400/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-green-400/30">─</span>
                  <span>{activeCategory.icon}</span>
                  <span className="flex-1">{tech}</span>
                  <span className="text-green-400/30">.tech</span>
                </div>
              ))}

              <div className="flex gap-2">
                <span className="text-green-400">❯</span>
                <span className="w-2 h-4 bg-green-400 animate-pulse"></span>
              </div>
            </>
          ) : (
            <>
              <div className="text-green-400/40 text-sm">
                # select a category
              </div>

              <div className="flex gap-2">
                <span className="text-green-400">❯</span>
                <span className="w-2 h-4 bg-green-400 animate-pulse"></span>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}