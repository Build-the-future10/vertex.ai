import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";

export default function Home() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/main", { replace: true });
  }, [isAuthenticated, navigate]);
  return (
    <>
      <Helmet>
        <title>Vertex — AI Study Toolkit | Home</title>
        <meta name="description" content="Vertex is a modern AI-powered study toolkit with planner, chatbot, notes, flashcards and quizzes." />
        <link rel="canonical" href={typeof window!== 'undefined' ? window.location.href : '/'} />
      </Helmet>

      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden neu-hero px-6 py-14 md:py-20 rounded-3xl"
      >
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight mb-4">The only study tool you need</h1>
          <p className="text-lg opacity-90 mb-8 max-w-2xl">All-in-one AI toolkit for students—planner, notes, flashcards, quizzes, chatbot, and more in one elegant workspace.</p>
          <div className="flex gap-4 flex-wrap">
            <Link to="/main" className="neu-button px-6 py-3 text-base">Get Started</Link>
            <Link to="/about" className="neu-button subtle px-6 py-3 text-base">Learn more</Link>
          </div>
        </div>

        <img src="/lovable-uploads/64fbacd2-bdac-437f-aae4-b7a1751cd8f6.png" alt="Books illustration" loading="lazy" className="absolute -bottom-6 left-0 w-64 md:w-96 opacity-70 pointer-events-none" />
        <img src="/lovable-uploads/4ad3dbf0-06b3-4925-92ca-5ba6b3c5173a.png" alt="Leaves illustration" loading="lazy" className="absolute -right-6 -bottom-8 w-48 md:w-72 opacity-70 pointer-events-none" />
      </motion.section>

      <section className="mt-10 max-w-3xl">
        <p className="opacity-90 text-base md:text-lg">
          Vertex unifies planning, note-taking, flashcards, quizzes, AI chat, and more into one elegant workspace. Designed for focus and flow, it’s fast, minimal, and ready for your study routine.
        </p>
        <blockquote className="mt-6 border-l-4 pl-4 italic opacity-90">“The only tool you'll ever need.”</blockquote>
      </section>
    </>
  );
}
