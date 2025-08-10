import { Helmet } from "react-helmet-async";
import NeumorphicCard from "@/components/NeumorphicCard";

export default function PaperMaker() {
  return (
    <>
      <Helmet>
        <title>Vertex — IB/IGCSE Paper Maker</title>
        <meta name="description" content="Generate IB/IGCSE-style practice papers from topics (UI placeholder)." />
        <link rel="canonical" href={typeof window!== 'undefined' ? window.location.href : '/paper-maker'} />
      </Helmet>

      <div className="grid md:grid-cols-2 gap-6">
        <NeumorphicCard className="p-6 min-h-64" title="Paper Settings" info="Choose board, subject, level and topics.">
          <div className="grid gap-4 mt-2">
            <div className="grid grid-cols-2 gap-3">
              <div className="neu-input"><select className="neu-input-el" aria-label="Board"><option>IB</option><option>IGCSE</option></select></div>
              <div className="neu-input"><select className="neu-input-el" aria-label="Level"><option>SL / Core</option><option>HL / Extended</option></select></div>
            </div>
            <div className="neu-input"><input className="neu-input-el" placeholder="Subject (e.g., Mathematics)" aria-label="Subject" /></div>
            <div className="neu-input"><input className="neu-input-el" placeholder="Topics (comma separated)" aria-label="Topics" /></div>
            <div className="grid grid-cols-2 gap-3">
              <div className="neu-input"><input className="neu-input-el" type="number" min={1} max={50} placeholder="# Questions" aria-label="Number of questions" /></div>
              <div className="neu-input"><select className="neu-input-el" aria-label="Format"><option>Mixed</option><option>Short answer</option><option>Structured</option></select></div>
            </div>
            <button className="neu-button py-3">Generate (placeholder)</button>
          </div>
        </NeumorphicCard>

        <NeumorphicCard className="p-6 min-h-64" title="Preview" info="Your generated paper preview will appear here.">
          <p className="opacity-70">Preview placeholder. Export options (PDF/Print) coming later.</p>
        </NeumorphicCard>
      </div>
    </>
  );
}
