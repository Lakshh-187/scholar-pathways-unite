import React from "react";
import { Button } from "@/components/ui/button";
import { Linkedin } from "lucide-react";
import { Helmet } from "react-helmet";

const UICSSDialogue: React.FC = () => {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Lakshay Choudhary',
    jobTitle: 'Indian Program Lead, UICSS',
    affiliation: {
      '@type': 'Organization',
      name: 'Uniford Foundation',
    },
    sameAs: [
      'https://www.linkedin.com/in/lakshh187/'
    ],
  };

  return (
    <section id="dialogue" className="relative py-16 md:py-24 bg-muted/40">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
      </Helmet>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 px-4 items-center">
        {/* Quote & CTA */}
        <div className="lg:col-span-7 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Dialogue — Program Lead Message</h2>
          <blockquote className="relative rounded-xl border bg-card p-6 shadow-lg">
            <span className="absolute left-0 top-0 h-full w-1 rounded-l-xl bg-primary/40" />
            <p className="text-lg leading-relaxed">
              “A safe school is not just about locked gates or security drills — it’s about giving every child the courage to dream without fear. At Uniford, we believe safety is the foundation on which all learning stands.”
            </p>
            <footer className="mt-4 text-sm text-muted-foreground">
              – Lakshay Choudhary, Indian Program Lead, UICSS
            </footer>
          </blockquote>
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/lakshh187/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Lakshay Choudhary on LinkedIn"
            >
              <Button variant="outline" className="px-5">
                <Linkedin className="mr-2" /> Connect on LinkedIn
              </Button>
            </a>
          </div>
        </div>

        {/* Image collage */}
        <div className="lg:col-span-5">
          <div className="relative grid grid-cols-3 gap-4">
            <img
              src="/lovable-uploads/a8ba3d0d-5673-469e-9ca5-ac2acaf279a4.png"
              alt="Lakshay Choudhary — Program Lead UICSS"
              loading="lazy"
              className="col-span-2 h-56 md:h-72 w-full object-cover rounded-2xl shadow-xl"
            />
            <div className="relative col-span-1">
              <img
                src="/lovable-uploads/12e0d927-7467-47ca-a0f5-cc9461f77ee8.png"
                alt="United Nations SDGs badge"
                loading="lazy"
                className="h-56 md:h-72 w-full object-contain rounded-2xl bg-card shadow-lg"
              />
              <img
                src="/lovable-uploads/91162f53-55de-48bf-b2f0-bf0d7a1ddb2a.png"
                alt="Uniford programs and initiatives mosaic"
                loading="lazy"
                className="absolute -bottom-5 -left-5 h-20 w-28 object-cover rounded-lg border bg-background shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UICSSDialogue;
