
import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Award, 
  Trophy, 
  Star, 
  Globe, 
  Heart, 
  Shield, 
  Crown,
  Sparkles,
  ArrowRight,
  Medal
} from 'lucide-react';

const StanburgAward = () => {
  const awardCategories = [
    {
      title: "Healthcare Heroes",
      description: "Recognizing frontline healthcare workers making extraordinary contributions",
      icon: <Heart className="h-8 w-8" />,
      color: "from-red-500 to-pink-600"
    },
    {
      title: "Education Champions", 
      description: "Honoring educators transforming lives through innovative teaching",
      icon: <Star className="h-8 w-8" />,
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "Community Leaders",
      description: "Celebrating leaders building stronger, more inclusive communities",
      icon: <Shield className="h-8 w-8" />,
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "Innovation Pioneers",
      description: "Recognizing breakthrough innovations for a better universe",
      icon: <Sparkles className="h-8 w-8" />,
      color: "from-purple-500 to-violet-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Badge variant="outline" className="bg-gradient-to-r from-yellow-100 to-amber-100 text-amber-800 border-amber-300 px-6 py-2 mb-6 text-lg font-semibold">
            <Crown className="mr-2 h-5 w-5" />
            STANBURG AWARD
          </Badge>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-unifor-dark-purple via-amber-600 to-unifor-purple bg-clip-text text-transparent">
            World's Most Decorated Award
          </h2>
          
          <p className="text-xl text-gray-600 mb-4 leading-relaxed">
            Honoring <span className="font-bold text-unifor-purple">Frontliners</span> for their extraordinary contributions 
            in building a <span className="font-bold text-amber-600">Better Universe</span>
          </p>
          
          <div className="flex items-center justify-center gap-2 text-amber-600">
            <Trophy className="h-6 w-6" />
            <span className="text-lg font-semibold">Global Recognition • Prestigious Honor • Lifetime Achievement</span>
            <Trophy className="h-6 w-6" />
          </div>
        </motion.div>

        {/* Award Showcase */}
        <motion.div 
          className="relative mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 rounded-3xl p-1 shadow-2xl">
            <div className="bg-white rounded-3xl p-12 text-center">
              <div className="relative inline-block mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
                <div className="relative w-32 h-32 mx-auto bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-600 rounded-full flex items-center justify-center shadow-xl">
                  <Medal className="h-16 w-16 text-white" />
                </div>
              </div>
              
              <h3 className="text-3xl font-bold text-gray-800 mb-4">The Stanburg Medal of Honor</h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                A symbol of excellence, courage, and unwavering dedication to making the world a better place. 
                This award represents the highest recognition for those who go beyond the call of duty.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Award Categories */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center text-unifor-dark-purple mb-12">Award Categories</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {awardCategories.map((category, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-2 hover:border-amber-300 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <CardHeader className="pb-4">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center text-white mb-4 shadow-lg`}>
                      {category.icon}
                    </div>
                    <CardTitle className="text-xl text-unifor-dark-purple">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">{category.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="bg-gradient-to-r from-unifor-purple to-amber-600 rounded-2xl p-10 text-center text-white shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Globe className="h-16 w-16 mx-auto mb-6 animate-pulse" />
          <h3 className="text-3xl font-bold mb-4">Nominate a Frontliner Today</h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Know someone making extraordinary contributions? Nominate them for the Stanburg Award 
            and help us recognize true heroes building a better universe.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Button className="bg-white text-unifor-purple hover:bg-gray-100 font-semibold px-8 py-3 text-lg rounded-xl transition-all shadow-lg">
              Nominate Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 font-semibold px-8 py-3 text-lg rounded-xl transition-all">
              Learn More
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StanburgAward;
