import React from "react";
import { CheckCircle2 } from "lucide-react";

const lines = [
  "Comprehensive Safety Toolkit – policies, checklists & templates",
  "Compliance & Helpline Support – direct access to safety experts",
  "National Recognition – stand out as a certified safe school",
];

const UICSSBenefitsStrip: React.FC = () => {
  return (
    <section className="bg-unifor-blue/10 py-6">
      <div className="container mx-auto px-4">
        <ul className="grid md:grid-cols-3 gap-4 text-unifor-dark">
          {lines.map((l) => (
            <li key={l} className="flex items-start gap-2">
              <CheckCircle2 className="text-unifor-blue mt-0.5" />
              <span className="text-sm md:text-base">{l}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default UICSSBenefitsStrip;
