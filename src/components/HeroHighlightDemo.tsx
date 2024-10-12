"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import Button from "./Button";

export function HeroHighlightDemo() {
  return (
    
    <HeroHighlight>
        <div className="high">
            <Button />
        </div>

      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-white dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        An Amazing Backrgound Library, Crafted
        is a{" "}
        <Highlight className="text-black dark:text-white">
          Just for you!
        </Highlight>
      </motion.h1>
      <div className="cta">
      </div>
    </HeroHighlight>
  );
}
