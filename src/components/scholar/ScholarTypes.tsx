
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { GraduationCap, Rocket, Landmark, Users, PaintBrush } from 'lucide-react';

interface ScholarTypeProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  delay: number;
}

const ScholarTypeCard: React.FC<ScholarTypeProps> = ({ title, description, icon, color, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className={`border-l-4 ${color} hover:shadow-lg transition-all duration-300 h-full`}>
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className={`p-3 rounded-full ${color.replace('border-', 'bg-').replace('-500', '-100')} ${color.replace('border-', 'text-')}`}>
              {icon}
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">{title}</h3>
              <p className="text-gray-600">{description}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const ScholarTypes: React.FC = () => {
  const scholarTypes = [
    {
      title: 'Francisco Scholar',
      description: '🎓 Designed specially for students preparing for placements — campus to corporate transition.',
      icon: <GraduationCap className="h-6 w-6" />,
      color: 'border-blue-500',
      delay: 0
    },
    {
      title: 'Frontliner Scholar',
      description: '🚀 Program designed for young leaders, entrepreneurs, and social activists under 20 years.',
      icon: <Rocket className="h-6 w-6" />,
      color: 'border-purple-500',
      delay: 1
    },
    {
      title: 'Vintage Scholar',
      description: '🏛️ Foundational program focusing on core skills and knowledge for beginners.',
      icon: <Landmark className="h-6 w-6" />,
      color: 'border-amber-500',
      delay: 2
    },
    {
      title: 'YLC Scholar',
      description: '👥 Specially designed for Uniford Parliament Members, leaders, and social activists.',
      icon: <Users className="h-6 w-6" />,
      color: 'border-green-500',
      delay: 3
    },
    {
      title: 'Austin Scholar',
      description: '🎨 Tailored for creators, bookpreneurs, AI designers, and creative innovators.',
      icon: <PaintBrush className="h-6 w-6" />,
      color: 'border-pink-500',
      delay: 4
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <Badge className="bg-unifor-light-purple text-unifor-purple px-4 py-1 mb-4">
            PROGRAMS
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-unifor-dark-purple">
            Types of Scholar ID Cards & Programs
          </h2>
          <p className="text-gray-600 mb-8">
            Choose the Scholar program that best aligns with your goals and aspirations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {scholarTypes.map((type, index) => (
            <ScholarTypeCard
              key={index}
              title={type.title}
              description={type.description}
              icon={type.icon}
              color={type.color}
              delay={type.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScholarTypes;
