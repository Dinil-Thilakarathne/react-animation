import { motion, useAnimate, stagger } from "framer-motion";
import { useState, useEffect } from "react";

function App() {
  const [active, setActive] = useState(false);
  const [scope, animate] = useAnimate();

  useEffect(() => {
    console.log(active);
  }, [active]);

  useEffect(() => {
    if (active) {
      const enterAnimation = async () => {
        await animate(
          scope.current,
          { clipPath: "inset(0 0 0% 0)" },
          { duration: 1, ease: [0.98, -0.02, 0.41, 0.89] },
        );
        await animate(
          ".hidden-word",
          { y: [100, 0] },
          { duration: 0.7, delay: stagger(0.1) },
        );
      };
      enterAnimation();
    } else {
      const exitAnimation = async () => {
        await animate(
          ".hidden-word",
          { y: [0, 100] },
          { duration: 0.5, delay: stagger(0.1) },
        );
        await animate(
          scope.current,
          { clipPath: "inset(0 0 100% 0)" },
          { duration: 0.7, ease: [0.98, -0.02, 0.41, 0.89] },
        );
      };
      exitAnimation();
    }
  }, [active]);

  const navLinks = [
    {
      link: "./",
      title: "Home",
    },
    {
      link: "./about",
      title: "About",
    },
    {
      link: "./projects",
      title: "Projects",
    },
    {
      link: "./contact",
      title: "Contact",
    },
  ];

  const socialLinks = [
    {
      name: "Email",
      link: "mailto:sonacode44@gmail.com",
      tag: "sonacode44@gmail.com",
    },
    {
      name: "Github",
      link: "https://github.com/dinil-thilakarathne",
      tag: "@dinil-thilakarathne",
    },
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/in/dinil-thilakarathne/",
      tag: "@dinil-thilakarathne",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-slate-800">
      <div className={"flex w-full flex-col justify-between *:px-8"}>
        <div className="flex h-[100px] w-full items-center justify-end bg-white">
          <button
            className="rounded-xl border border-black px-4 py-2"
            onClick={() => {
              setActive(!active);
            }}
          >
            Menu
          </button>
        </div>
        <motion.div
          className="bg-white-300 flex h-[calc(90vh-100px)] items-end justify-between overflow-hidden rounded-b-3xl bg-white py-8"
          initial={{ clipPath: "inset(0 0 100% 0)" }}
          ref={scope}
        >
          <menu className="flex flex-col gap-y-6">
            {navLinks.map((link) => {
              return (
                <a
                  href={link.link}
                  key={link.title}
                  className="overflow-hidden text-8xl uppercase"
                >
                  <span className="bubble-text hidden-word block translate-y-[100%]">
                    <Word>{link.title}</Word>
                  </span>
                </a>
              );
            })}
          </menu>
          <menu className="flex flex-col gap-y-4">
            {socialLinks.map((link) => {
              return (
                <a href={link.link} key={link.name} className="overflow-hidden">
                  <span className="hidden-word flex translate-y-[100%] justify-between gap-x-8">
                    <span>{link.name}</span>
                    <span>{link.tag}</span>
                  </span>
                </a>
              );
            })}
          </menu>
        </motion.div>
      </div>
    </div>
  );
}

export default App;

const Word = ({ children }) => {
  let words = children.split("");
  return words.map((word, index) => {
    return (
      <span key={index} className="split-char">
        {word}
      </span>
    );
  });
};
