"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Mousewheel } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";

export default function ProjectSlider() {

  const projects = [
    {
      title: "Algorithmic Trading Bot",
      description: "Automated trading platform with portfolio analytics",
      link: "/projects/atb"
    },
    {
      title: "Cart Price History Scraper",
      description: "Tracks product prices and builds historical insights",
      link: "#"
    },
    {
      title: "Market Insights Dashboard",
      description: "Real-time market data analytics dashboard",
      link: "#"
    }
  ];

  const loopProjects = [...projects, ...projects];

  return (
    <div className="w-full py-12">

      <Swiper
        effect="coverflow"
        centeredSlides={true}
        slidesPerView={"auto"}
        grabCursor={true}
        spaceBetween={60}

        loop={true}

        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}

        mousewheel={{
          forceToAxis: true,
          releaseOnEdges: false,
          sensitivity: 1
        }}

        speed={900}

        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 180,
          modifier: 2.5,
          slideShadows: false
        }}

        modules={[EffectCoverflow, Autoplay, Mousewheel]}

        className="max-w-4xl mx-auto"
      >

        {loopProjects.map((project, i) => (
          <SwiperSlide key={i} style={{ width: "320px" }}>

            <div className="border border-zinc-800 bg-zinc-900 p-6 rounded-xl hover:border-emerald-400 transition duration-300 h-[220px] flex flex-col justify-between">

              <div>
                <h3 className="text-xl font-semibold text-zinc-100">
                  {project.title}
                </h3>

                <p className="text-zinc-400 mt-3">
                  {project.description}
                </p>
              </div>

              <a
                href={project.link}
                className="text-emerald-400 text-sm mt-4"
              >
                View Project →
              </a>

            </div>

          </SwiperSlide>
        ))}

      </Swiper>

    </div>
  );
}