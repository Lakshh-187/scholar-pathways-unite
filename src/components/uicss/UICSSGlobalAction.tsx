import React from "react";

const UICSSGlobalAction: React.FC = () => {
  return (
    <section id="global-action" className="relative overflow-hidden bg-gradient-to-b from-accent/10 to-background py-16 md:py-24">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 px-4 items-center">
        {/* Image collage */}
        <div className="order-2 lg:order-1 lg:col-span-5">
          <div className="relative grid grid-cols-2 gap-4">
            <img
              src="/lovable-uploads/12e0d927-7467-47ca-a0f5-cc9461f77ee8.png"
              alt="United Nations Sustainable Development Goals – child safety and inclusive education"
              loading="lazy"
              className="col-span-2 h-48 md:h-64 w-full object-contain rounded-xl bg-card shadow-xl"
            />
            <img
              src="/lovable-uploads/0b9db09c-eb16-414e-a2d7-117b6f514879.png"
              alt="Uniford Lead the Change Initiative"
              loading="lazy"
              className="h-36 md:h-40 w-full object-contain rounded-xl bg-card shadow-lg"
            />
            <img
              src="/lovable-uploads/b9961f6a-0380-4621-bae1-1258a852c51a.png"
              alt="Certification and recognition for safe schooling"
              loading="lazy"
              className="h-36 md:h-40 w-full object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>

        {/* Content */}
        <article className="order-1 lg:order-2 lg:col-span-7 space-y-6">
          <header>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              From Awareness to Global Action
            </h2>
            <p className="mt-2 text-muted-foreground">
              The Uniford International Council for School Safety (UICSS) is a non-profit initiative of the Uniford Foundation, dedicated to building a worldwide community for safe and inclusive education.
            </p>
          </header>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="rounded-xl border bg-card p-5 shadow-sm">
              <p className="text-3xl font-extrabold">🌏 1.2B+</p>
              <p className="text-sm text-muted-foreground">Learners needing safer schools</p>
            </div>
            <div className="rounded-xl border bg-card p-5 shadow-sm">
              <p className="text-3xl font-extrabold">60%+</p>
              <p className="text-sm text-muted-foreground">Educators untrained in protection protocols</p>
            </div>
            <div className="rounded-xl border bg-card p-5 shadow-sm">
              <p className="text-3xl font-extrabold">25M+</p>
              <p className="text-sm text-muted-foreground">Institutions lacking safety frameworks</p>
            </div>
          </div>

          <section className="space-y-4 text-base leading-relaxed text-foreground/90">
            <p>
              We are the first international platform bringing together school leaders, child protection specialists, mental health experts, policy makers, and parents to embed a safety-first culture in every learning space.
            </p>
            <p>
              Our mission goes beyond compliance — we work to strengthen global standards, drive innovation in safety education, and enable schools to meet and exceed international protection benchmarks.
            </p>
            <p>
              Together with educators, experts, and communities across continents, we are turning school safety into a shared global responsibility.
            </p>
            <p className="font-medium">
              Because safety isn’t a privilege — it’s a promise we make to every child.
            </p>
          </section>
        </article>
      </div>
    </section>
  );
};

export default UICSSGlobalAction;
