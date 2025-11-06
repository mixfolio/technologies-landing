import { useGSAP } from "@gsap/react";
import { useMediaQuery } from "react-responsive";
import gsap from "gsap";

const Showcase = () => {
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  useGSAP(() => {
    if (!isTablet) {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: "#showcase",
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true,
        },
      });

      timeline
        .to("#schema", { opacity: 1 })
        .to(".mask img", { transform: "scale(1.2)" })
        .to(".content", { opacity: 1, y: 0, ease: "power1.in" });
    }
  }, [isTablet]);

  return (
    <section id="showcase" style={{ paddingTop: 64 }}>
      <div className="media">
        {/* <video src="/videos/game.mp4" loop muted autoPlay playsInline /> */}
        <video
          style={{ opacity: 0 }}
          id="schema"
          src="./videos/client-2.m4v"
          loop
          muted
          autoPlay
          playsInline
        />
        <div className="mask">
          <img src="./mask-logo-3.svg" style={{ width: "100%" }} />
        </div>
      </div>

      <div className="content">
        <div className="wrapper">
          <div className="lg:max-w-4xl">
            <h2>О компании</h2>

            <div className="space-y-5 mt-7 pe-10">
              <p>
                Мы автоматизируем инженерные объекты: котельные, водозаборы,
                насосные станции, КНС и другие узлы коммунальной инфраструктуры.
              </p>
              <p>
                Наши решения позволяют в реальном времени контролировать
                состояние оборудования, оптимизировать энергопотребление и
                повышать надёжность систем.
              </p>

              <p className="text-primary">Узнать о нас больше</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
