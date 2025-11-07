import React, { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";

interface CredibilityItem {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
}

const credibilityItems: CredibilityItem[] = [
  {
    id: 1,
    title: "Great Place to Learn",
    description: "Certified schools maintaining international standards in safety and education excellence.",
    image: "/lovable-uploads/great-place-badge.png",
    category: "Certification"
  },
  {
    id: 2,
    title: "SDG Recognition",
    description: "Aligned with UN Sustainable Development Goals for transformative education.",
    image: "/lovable-uploads/sdg-badge.png",
    category: "UN SDG"
  },
  {
    id: 3,
    title: "Official Certification",
    description: "Recognized institutions maintaining international standards in safety and education.",
    image: "/lovable-uploads/uniford-certificate.jpeg",
    category: "Recognition"
  },
  {
    id: 4,
    title: "School Safety Standards",
    description: "Certified safe and standard schools across the globe ensuring student wellbeing.",
    image: "/lovable-uploads/school-bus-certification.jpeg",
    category: "Safety"
  },
  {
    id: 5,
    title: "Council Member Badge",
    description: "Great Place to Learn certification displayed on school transportation.",
    image: "/lovable-uploads/school-bus-badge.jpeg",
    category: "Certification"
  },
  {
    id: 6,
    title: "BISS Initiative",
    description: "1 Million Safe & Standard Schools for 1 Billion Frontliners program documentation.",
    image: "/lovable-uploads/biss-book.jpeg",
    category: "Initiative"
  },
  {
    id: 7,
    title: "Scholar Achievers Meet 2024",
    description: "Annual gathering celebrating outstanding achievements of Uniford scholars globally.",
    image: "https://i.ibb.co/PvQTGvqQ/an-inspiring-photo-of-a-confident-student-with-a-m-y-LHo-SSq-KRg2-KX9z-L86db-YQ-5deos-Yky-SL20-r-N3a.jpg",
    category: "Event"
  },
  {
    id: 8,
    title: "Educational Innovation Conference",
    description: "Hosted leaders from 25 countries discussing the future of learning and technology.",
    image: "https://i.ibb.co/Mx6K1nbj/a-photo-of-a-young-girl-wearing-a-uniford-shirt-wi-9-Hegk7-GWSBKHsu-H2i-He-Mn-Q-k-Ca-Tap-KZQf-GGdsvy.jpg",
    category: "Conference"
  },
  {
    id: 9,
    title: "Volunteer Impact Milestone",
    description: "100,000 teaching hours completed across rural schools impacting 25,000+ students.",
    image: "https://i.ibb.co/jmdwCMS/a-vibrant-engaging-booth-for-uniford-with-a-modern-g-Uo5-Ae-Df-STe-HJx-Yvtyw00-Q-AMmpu-NKs-Sb-O8o9z.jpg",
    category: "Impact"
  },
  {
    id: 10,
    title: "Leadership Summit",
    description: "Transformative retreat where scholars developed leadership skills through workshops.",
    image: "https://i.ibb.co/Pvv7psn6/a-social-media-image-of-a-lively-event-scene-with-lnrmn4u-DQ0-Cw-ZH-7k-WDUPg-Lq-NEDYIo-R3e-Ju-Fag-Ru.jpg",
    category: "Event"
  },
  {
    id: 11,
    title: "AI Research Competition",
    description: "Scholars presented groundbreaking AI solutions addressing real-world problems.",
    image: "https://i.ibb.co/gZVppTts/a-photo-of-a-smiling-student-holding-a-large-white-P6-M3q-Vy-VT-i2-BQm-APn-Xvpg-rv-ELP3-CVRIi-X-k-HF.jpg",
    category: "Competition"
  },
  {
    id: 12,
    title: "EduTech Fair",
    description: "Showcasing innovative educational technology solutions for modern learning.",
    image: "/lovable-uploads/uniford-edutech-fair.png",
    category: "Innovation"
  },
  {
    id: 13,
    title: "Global Network",
    description: "International partnerships strengthening educational standards worldwide.",
    image: "/lovable-uploads/uniford-flags.png",
    category: "Network"
  },
  {
    id: 14,
    title: "Foundation Event",
    description: "Community gathering promoting educational excellence and safety standards.",
    image: "/lovable-uploads/uniford-foundation-event.png",
    category: "Event"
  },
  {
    id: 15,
    title: "Art & Culture",
    description: "Celebrating student creativity and artistic expression through exhibitions.",
    image: "/lovable-uploads/uniford-art-display.png",
    category: "Culture"
  },
  {
    id: 16,
    title: "Student Success",
    description: "Empowering students with opportunities for academic and personal growth.",
    image: "/lovable-uploads/uniford-student.png",
    category: "Achievement"
  },
  {
    id: 17,
    title: "Leadership Meetings",
    description: "Strategic planning sessions for educational transformation initiatives.",
    image: "/lovable-uploads/uniford-meeting.png",
    category: "Strategy"
  },
  {
    id: 18,
    title: "Global Presentations",
    description: "Sharing best practices and innovations at international education forums.",
    image: "/lovable-uploads/uniford-presentation.png",
    category: "Knowledge"
  },
  {
    id: 19,
    title: "Impact Infographic",
    description: "Visualizing our reach and impact across educational institutions globally.",
    image: "/lovable-uploads/uniford-infographic.jpg",
    category: "Data"
  },
  {
    id: 20,
    title: "ICSS School Excellence",
    description: "Partner schools demonstrating excellence in international standards and safety.",
    image: "/lovable-uploads/icss-school.jpg",
    category: "Partnership"
  }
];

const CredibilityCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % credibilityItems.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getVisibleItems = () => {
    const items = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % credibilityItems.length;
      items.push(credibilityItems[index]);
    }
    return items;
  };

  return (
    <section className="py-16 bg-gradient-to-b from-background via-accent/5 to-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Our Credibility & Impact
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Recognized globally for excellence in educational transformation and safety standards
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <AnimatePresence mode="wait">
            {getVisibleItems().map((item, idx) => (
              <motion.div
                key={`${item.id}-${currentIndex}`}
                initial={{ 
                  opacity: 0, 
                  rotateY: -90,
                  scale: 0.8,
                  z: -100
                }}
                animate={{ 
                  opacity: 1, 
                  rotateY: 0,
                  scale: 1,
                  z: 0
                }}
                exit={{ 
                  opacity: 0, 
                  rotateY: 90,
                  scale: 0.8,
                  z: -100
                }}
                transition={{ 
                  duration: 0.6,
                  delay: idx * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <Card className="overflow-hidden h-full bg-card/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 border-border/50">
                  <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                    <Badge className="absolute top-3 right-3 bg-primary/90 text-primary-foreground">
                      {item.category}
                    </Badge>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-lg mb-2 text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center gap-2">
          {credibilityItems.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex 
                  ? "w-8 bg-primary" 
                  : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CredibilityCarousel;
