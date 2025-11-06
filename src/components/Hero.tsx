import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  // const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 2;
  }, []);

  useGSAP(() => {
    gsap.to("#monitor", {
      scale: 1.6,
      y: 1000,
      // rotation: 360,
      opacity: 0,
      ease: "none",

      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        // end: "end top",
        scrub: true,
      },
    });
  }, []);

  return (
    <section id="hero">
      <div>
        <h1 className="w-[1200px] text-center">
          Системы диспетчеризации, мониторинга и управления для коммунальной
          инфраструктуры
        </h1>
        {/* <h2
          style={{ fontSize: 72 }}
          className="mx-auto  font-bold wrap-break-words sm:text-3xl md:text-4xl truncate bg-linear-to-r from-cyan-200 to-cyan-600 bg-clip-text text-transparent"
        >
          Умные решения для котельных и водохозяйственных объектов
        </h2> */}
        {/* <img src="/title.png" alt="MacBook Title" /> */}
        <img src="./hero-text.png" alt="MacBook Title" />
      </div>
      {/* 
      <video
        ref={videoRef}
        src="/videos/schema-land.m4v"
        autoPlay
        muted
        playsInline
      /> */}
      <img
        id="monitor"
        className="absolute opacity-40"
        src="./display-schema.svg"
        width={1200}
        // style={{ transform: "rotate(10deg)" }}
        alt="Монитор"
      />
      <div className="lg:flex flex-row gap-6">
        <button>Запросить демо</button>
        <button>Скачать презентацию</button>
      </div>
    </section>
  );
};

export default Hero;
