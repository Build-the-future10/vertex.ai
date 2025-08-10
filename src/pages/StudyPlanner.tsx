import { Helmet } from "react-helmet-async";
import NeumorphicCard from "@/components/NeumorphicCard";

export default function StudyPlanner() {
  return (
    <>
      <Helmet>
        <title>Vertex — Study Planner</title>
        <meta name="description" content="Organize your study plan and schedule." />
        <link rel="canonical" href={typeof window!== 'undefined' ? window.location.href : '/planner'} />
      </Helmet>
      <div className="grid md:grid-cols-2 gap-6">
        <NeumorphicCard className="p-6 h-72" title="Calendar" info="Plan sessions and track deadlines.">Calendar placeholder</NeumorphicCard>
        <NeumorphicCard className="p-6 h-72" title="Upcoming" info="Your next tasks at a glance.">Upcoming sessions placeholder</NeumorphicCard>
      </div>
    </>
  );
}
