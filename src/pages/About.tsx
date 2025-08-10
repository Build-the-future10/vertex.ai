import { Helmet } from "react-helmet-async";
import NeumorphicCard from "@/components/NeumorphicCard";
import { Github, Linkedin, Globe } from "lucide-react";

export default function About() {
  return (
    <>
      <Helmet>
        <title>Vertex — About</title>
        <meta name="description" content="Learn about the origins of Vertex and the founding team." />
        <link rel="canonical" href={typeof window!== 'undefined' ? window.location.href : '/about'} />
      </Helmet>

      <section className="max-w-4xl">
        <h1 className="text-3xl font-semibold mb-4">About</h1>
        <p className="opacity-90 text-base md:text-lg">
          Vertex began as an Oakridge 2025 Codefest idea — three classmates building a seamless AI study workspace. We study at the same school and crafted Vertex to bring planning, notes, flashcards, quizzes, and AI help into one elegant experience.
        </p>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <NeumorphicCard className="p-6 text-center" title="Ryan Gomez" info="Co‑founder">
            <div className="flex items-center justify-center gap-3 mt-4">
              <a href="#" aria-label="Ryan on GitHub" className="neu-button px-2 py-2"><Github className="h-4 w-4" /></a>
              <a href="#" aria-label="Ryan on LinkedIn" className="neu-button px-2 py-2"><Linkedin className="h-4 w-4" /></a>
              <a href="#" aria-label="Ryan website" className="neu-button px-2 py-2"><Globe className="h-4 w-4" /></a>
            </div>
          </NeumorphicCard>
          <NeumorphicCard className="p-6 text-center" title="Pratyush Vel SHankar" info="Co‑founder">
            <div className="flex items-center justify-center gap-3 mt-4">
              <a href="#" aria-label="Pratyush on GitHub" className="neu-button px-2 py-2"><Github className="h-4 w-4" /></a>
              <a href="#" aria-label="Pratyush on LinkedIn" className="neu-button px-2 py-2"><Linkedin className="h-4 w-4" /></a>
              <a href="#" aria-label="Pratyush website" className="neu-button px-2 py-2"><Globe className="h-4 w-4" /></a>
            </div>
          </NeumorphicCard>
          <NeumorphicCard className="p-6 text-center" title="RItayush Dey" info="Co‑founder">
            <div className="flex items-center justify-center gap-3 mt-4">
              <a href="#" aria-label="RItayush on GitHub" className="neu-button px-2 py-2"><Github className="h-4 w-4" /></a>
              <a href="#" aria-label="RItayush on LinkedIn" className="neu-button px-2 py-2"><Linkedin className="h-4 w-4" /></a>
              <a href="#" aria-label="RItayush website" className="neu-button px-2 py-2"><Globe className="h-4 w-4" /></a>
            </div>
          </NeumorphicCard>
        </div>
      </section>
    </>
  );
}

