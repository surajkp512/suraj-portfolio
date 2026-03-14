"use client";

import { useEffect, useState } from "react";
import TechStackDesktop from "./TechStackDesktop";
import TechStackMobile from "./TechStackMobile";

export default function TechStack() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();

    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return isMobile ? <TechStackMobile /> : <TechStackDesktop />;
}