"use client";

import { useEffect, useRef, useState } from "react";

const categories = [
  {
    label: "Languages",
    icon: "⌨",
    techs: ["Python", "JavaScript", "HTML", "CSS"],
    angle: 0,
  },
  {
    label: "Frameworks",
    icon: "⚙",
    techs: ["Django", "DRF", "React"],
    angle: 72,
  },
  {
    label: "Databases",
    icon: "🗄",
    techs: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
    angle: 144,
  },
  { label: "Messaging", icon: "📡", techs: ["RabbitMQ", "Celery"], angle: 216 },
  {
    label: "DevOps",
    icon: "🛠",
    techs: ["Docker", "Git", "Linux", "Postman"],
    angle: 288,
  },
];

const ORBIT_R = 220;

function toRad(deg) {
  return (deg - 90) * (Math.PI / 180);
}

function orbitalPos(angle, r) {
  return {
    x: Math.cos(toRad(angle)) * r,
    y: Math.sin(toRad(angle)) * r,
  };
}

export default function TechStack() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const activeCategory = active !== null ? categories[active] : null;

  return (
    <section ref={sectionRef} style={{ padding: "48px 0 64px" }}>
      {/* Heading */}
      <div
        style={{
          marginBottom: "48px",
          opacity: visible ? 1 : 0,
          transform: visible ? "none" : "translateY(16px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}
      >
        <p
          style={{
            fontFamily: "monospace",
            fontSize: "11px",
            letterSpacing: "0.22em",
            color: "#4ade80",
            opacity: 0.6,
            textTransform: "uppercase",
            marginBottom: "6px",
            margin: "0 0 6px",
          }}
        ></p>
        <h2
          style={{
            fontSize: "28px",
            fontWeight: 700,
            color: "#4ade80",
            fontFamily: "monospace",
            margin: 0,
          }}
        >
          Tech Stack
        </h2>
      </div>

      {/* Radial Canvas */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          opacity: visible ? 1 : 0,
          transform: visible ? "scale(1)" : "scale(0.88)",
          transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
          flexWrap: "wrap",
          gap: "32px",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "600px",
            height: "600px",
            flexShrink: 0,
          }}
        >
          {/* Orbit rings */}
          {[ORBIT_R, ORBIT_R * 0.58].map((r, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: r * 2,
                height: r * 2,
                marginLeft: -r,
                marginTop: -r,
                borderRadius: "50%",
                border: "1px solid rgba(74,222,128,0.09)",
                pointerEvents: "none",
              }}
            />
          ))}

          {/* Spoke lines via SVG */}
          <svg
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              overflow: "visible",
              pointerEvents: "none",
            }}
          >
            {categories.map((cat, i) => {
              const pos = orbitalPos(cat.angle, ORBIT_R);
              const isActive = active === i;
              return (
                <line
                  key={i}
                  x1="300"
                  y1="300"
                  x2={300 + pos.x}
                  y2={300 + pos.y}
                  stroke={isActive ? "#4ade80" : "rgba(74,222,128,0.14)"}
                  strokeWidth={isActive ? 1.5 : 1}
                  strokeDasharray={isActive ? "none" : "4 5"}
                  style={{ transition: "stroke 0.3s, stroke-width 0.3s" }}
                />
              );
            })}
          </svg>

          {/* Center hub */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 110,
              height: 110,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(74,222,128,0.15) 0%, rgba(16,16,20,0.95) 70%)",
              border: "1.5px solid rgba(74,222,128,0.5)",
              boxShadow:
                "0 0 28px rgba(74,222,128,0.18), inset 0 0 16px rgba(74,222,128,0.07)",
              display: "flex",
              flexDirection: "row",
              flexWrap: "nowrap", 
              alignItems: "center",
              justifyContent: "center",
              gap: "48px",
              zIndex: 10,
            }}
          >
            <span
              style={{
                fontSize: "12px",
                fontFamily: "monospace",
                color: "#4ade80",
                opacity: 0.65,
                letterSpacing: "0.1em",
              }}
            >
              STACK
            </span>
            <span style={{ fontSize: "26px", marginTop: "4px" }}>⬡</span>
          </div>

          {/* Category nodes */}
          {categories.map((cat, i) => {
            const pos = orbitalPos(cat.angle, ORBIT_R);
            const isActive = active === i;
            return (
              <button
                key={i}
                onClick={() => setActive(active === i ? null : i)}
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: `translate(calc(-50% + ${pos.x}px), calc(-50% + ${pos.y}px))`,
                  width: 115,
                  height: 115,
                  borderRadius: "50%",
                  background: isActive
                    ? "radial-gradient(circle, rgba(74,222,128,0.22) 0%, rgba(20,20,24,0.97) 70%)"
                    : "rgba(22,22,26,0.92)",
                  border: `1.5px solid ${isActive ? "rgba(74,222,128,0.75)" : "rgba(74,222,128,0.22)"}`,
                  boxShadow: isActive
                    ? "0 0 22px rgba(74,222,128,0.3)"
                    : "none",
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "3px",
                  zIndex: 5,
                  transition: "all 0.28s ease",
                  backdropFilter: "blur(6px)",
                  padding: 0,
                  outline: "none",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = "rgba(74,222,128,0.55)";
                    e.currentTarget.style.boxShadow =
                      "0 0 14px rgba(74,222,128,0.18)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = "rgba(74,222,128,0.22)";
                    e.currentTarget.style.boxShadow = "none";
                  }
                }}
              >
                <span style={{ fontSize: "28px", lineHeight: 1 }}>
                  {cat.icon}
                </span>
                <span
                  style={{
                    fontSize: "12px",
                    fontFamily: "monospace",
                    fontWeight: 700,
                    color: isActive ? "#4ade80" : "#a1a1aa",
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    transition: "color 0.28s",
                    lineHeight: 1,
                    marginTop: "5px",
                  }}
                >
                  {cat.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Terminal Panel — same size as orbital canvas */}
        <div
          style={{
            width: "520px",
            height: "520px",
            flexShrink: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {/* Terminal window */}
          <div
            style={{
              background: "rgba(10,12,10,0.97)",
              border: "1px solid rgba(74,222,128,0.2)",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow:
                "0 0 40px rgba(74,222,128,0.06), inset 0 0 60px rgba(0,0,0,0.4)",
              fontFamily: "'Fira Code', 'JetBrains Mono', monospace",
            }}
          >
            {/* Terminal title bar */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                padding: "10px 16px",
                background: "rgba(74,222,128,0.05)",
                borderBottom: "1px solid rgba(74,222,128,0.1)",
              }}
            >
              {["#ff5f57", "#febc2e", "#28c840"].map((c, i) => (
                <span
                  key={i}
                  style={{
                    width: 11,
                    height: 11,
                    borderRadius: "50%",
                    background: c,
                    opacity: 0.8,
                    display: "inline-block",
                  }}
                />
              ))}
              <span
                style={{
                  marginLeft: "10px",
                  fontSize: "11px",
                  color: "rgba(74,222,128,0.4)",
                  letterSpacing: "0.1em",
                }}
              >
                ~/portfolio/stack
              </span>
            </div>

            {/* Terminal body */}
            <div style={{ padding: "24px 28px", minHeight: "340px" }}>
              {activeCategory ? (
                <div key={activeCategory.label}>
                  {/* Command line */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      marginBottom: "20px",
                    }}
                  >
                    <span style={{ color: "#4ade80", fontSize: "14px" }}>
                      ❯
                    </span>
                    <span
                      style={{
                        color: "#4ade80",
                        fontSize: "14px",
                        fontWeight: 700,
                      }}
                    >
                      ls ./{activeCategory.label.toLowerCase()}/
                    </span>
                  </div>

                  {/* Output lines */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "0px",
                    }}
                  >
                    {activeCategory.techs.map((tech, ti) => (
                      <div
                        key={tech}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "14px",
                          padding: "10px 0",
                          borderBottom: "1px solid rgba(74,222,128,0.06)",
                          animation: `fadeSlideIn 0.3s ease ${ti * 0.08}s both`,
                        }}
                      >
                        <span
                          style={{
                            color: "rgba(74,222,128,0.35)",
                            fontSize: "13px",
                            minWidth: "20px",
                          }}
                        >
                          {String(ti + 1).padStart(2, "0")}
                        </span>
                        <span
                          style={{
                            color: "rgba(74,222,128,0.25)",
                            fontSize: "13px",
                          }}
                        >
                          ─
                        </span>
                        <span style={{ fontSize: "16px" }}>
                          {activeCategory.icon}
                        </span>
                        <span
                          style={{
                            fontSize: "17px",
                            color: "#e4e4e7",
                            fontWeight: 500,
                            letterSpacing: "0.02em",
                            flex: 1,
                          }}
                        >
                          {tech}
                        </span>
                        <span
                          style={{
                            color: "rgba(74,222,128,0.3)",
                            fontSize: "12px",
                          }}
                        >
                          .tech
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Prompt after list */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      marginTop: "20px",
                    }}
                  >
                    <span style={{ color: "#4ade80", fontSize: "14px" }}>
                      ❯
                    </span>
                    <span
                      style={{
                        display: "inline-block",
                        width: "9px",
                        height: "18px",
                        background: "rgba(74,222,128,0.6)",
                        animation: "blink 1.1s step-end infinite",
                        borderRadius: "1px",
                      }}
                    />
                  </div>
                </div>
              ) : (
                <div>
                  {/* Idle terminal */}
                  <div style={{ marginBottom: "10px" }}>
                    <span
                      style={{
                        color: "rgba(74,222,128,0.4)",
                        fontSize: "13px",
                      }}
                    >
                      # select a node to inspect
                    </span>
                  </div>
                  <div style={{ marginBottom: "6px" }}>
                    <span style={{ color: "#4ade80", fontSize: "14px" }}>
                      ❯{" "}
                    </span>
                    <span
                      style={{
                        color: "rgba(74,222,128,0.5)",
                        fontSize: "14px",
                      }}
                    >
                      ls ./stack/
                    </span>
                  </div>
                  <div style={{ paddingLeft: "20px", marginBottom: "18px" }}>
                    {categories.map((cat, i) => (
                      <div
                        key={i}
                        style={{
                          fontSize: "14px",
                          color: "rgba(74,222,128,0.25)",
                          lineHeight: "1.9",
                          letterSpacing: "0.03em",
                        }}
                      >
                        {cat.icon} {cat.label.toLowerCase()}/
                      </div>
                    ))}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <span style={{ color: "#4ade80", fontSize: "14px" }}>
                      ❯
                    </span>
                    <span
                      style={{
                        display: "inline-block",
                        width: "9px",
                        height: "18px",
                        background: "rgba(74,222,128,0.5)",
                        animation: "blink 1.1s step-end infinite",
                        borderRadius: "1px",
                      }}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateX(-8px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
      `}</style>
    </section>
  );
}
