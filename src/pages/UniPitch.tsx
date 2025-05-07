import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { 
  Mic, 
  Award, 
  ArrowRight, 
  CheckCircle, 
  FileText, 
  Rocket, 
  Star, 
  Lightbulb, 
  Briefcase, 
  DollarSign, 
  GraduationCap,
  Users,
  Link,
  Medal,
  ChevronDown,
  ChevronUp,
  ThumbsUp,
  ArrowUpRight,
  ArrowDown
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { UniPitchJourney } from '@/components/UniPitchJourney';
import {UniPitchCategories} from '@/components/UniPitchCategories';
import { Network } from '@/components/ui/network-icon';
import UniPitchGallery from '@/components/UniPitchGallery';
import PitchburgInitiative from '@/components/PitchburgInitiative';
import PitchburgPrograms from '@/components/PitchburgPrograms';
import PitchburgBenefits from '@/components/PitchburgBenefits';

const UniPitch = () => {
  const [expandedFaq, setExpandedFaq] = React.useState<number | null>(null);
  const [activeHowItWorksStep, setActiveHowItWorksStep] = React.useState(0);
  
  const galleryRef = React.useRef<HTMLDivElement>(null);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const scrollToGallery = () => {
    galleryRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const faqs = [
    {
      question: "How do I submit my pitch?",
      answer: "You can submit your pitch through our online portal. Simply create an account, fill out the pitch form, and upload any supporting documents. Our team will review your submission and get back to you within 3-5 business days."
    },
    {
      question: "What types of pitches are eligible?",
      answer: "We accept various types of pitches including project ideas, startup concepts, research proposals, skill showcases, and requests for mentorship or resources. As long as it aligns with academic or professional growth, we encourage you to submit it."
    },
    {
      question: "How is my pitch evaluated?",
      answer: "Your pitch is evaluated by a combination of AI-powered tools and human experts based on criteria such as innovation, feasibility, impact potential, and clarity of expression. Each pitch receives personalized feedback regardless of the outcome."
    },
    {
      question: "Is there any cost involved?",
      answer: "No, Uni-Pitch is completely free for all eligible students. Our mission is to provide equal opportunities without financial barriers. All resources, mentorship, and platforms are provided at no cost to participants."
    }
  ];
  
  const howItWorksSteps = [
    {
      step: 1,
      title: "Submit Your Pitch",
      description: "Share your needs, achievements, or ideas through our simple submission form.",
      icon: <Mic className="h-6 w-6 text-unifor-purple" />,
      detail: "You can submit various types of pitches including project ideas, internship requests, funding needs, or achievements you want to showcase. Our platform accepts all kinds of student queries and connects them to the right opportunities."
    },
    {
      step: 2,
      title: "Expert Evaluation",
      description: "Your pitch is evaluated by AI and industry experts from our council.",
      icon: <Star className="h-6 w-6 text-unifor-purple" />,
      detail: "Each pitch undergoes a thorough assessment process that considers factors like innovation, feasibility, impact potential, and alignment with available opportunities. You'll receive personalized feedback regardless of the outcome."
    },
    {
      step: 3,
      title: "Opportunity Matching",
      description: "Get connected to relevant opportunities, resources, and platforms.",
      icon: <Link className="h-6 w-6 text-unifor-purple" />,
      detail: "Based on your pitch evaluation, we match you with opportunities from our vast network of partners, including internships, funding sources, mentorship programs, and global platforms that can help you achieve your goals."
    },
    {
      step: 4,
      title: "Real-World Impact",
      description: "Transform your academic journey with tangible results and recognition.",
      icon: <Rocket className="h-6 w-6 text-unifor-purple" />,
      detail: "Students have secured internships, received funding for projects, been published in prestigious publications, and gained international recognition through our platform. Your pitch could be the beginning of your success story."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <NavBar />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-unifor-dark to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute h-64 w-64 rounded-full bg-unifor-purple blur-3xl top-20 left-20 animate-pulse-soft"></div>
          <div className="absolute h-96 w-96 rounded-full bg-unifor-blue blur-3xl bottom-10 right-10 animate-pulse-soft" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="outline" className="bg-unifor-light-purple text-unifor-dark-purple px-4 py-1 mb-4">
              UNI-PITCH
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Transform Your Ideas Into Opportunities</h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              A revolutionary platform bridging the gap between students and real-world opportunities through innovative pitch evaluations.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <a href="https://forms.gle/EhKHT9SffrJSP9Jh7" target="_blank" rel="noopener noreferrer">
                <Button className="bg-unifor-purple hover:bg-unifor-dark-purple text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl group">
                  Submit Your Pitch
                  <Mic className="ml-2 h-5 w-5 group-hover:animate-pulse" />
                </Button>
              </a>
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 font-medium rounded-lg transition-all duration-300">
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
          
          {/* Visual Journey Card */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 shadow-xl max-w-4xl mx-auto mb-10 animate-fade-in">
            <h2 className="text-2xl font-bold text-white mb-4 text-center">Join Thousands of Students Who Found Success</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-unifor-purple/30 flex items-center justify-center mb-3">
                <Award className="h-8 w-8 text-white" />
                </div>
                <p className="text-3xl font-bold text-white">4,500+</p>
                <p className="text-gray-300">Successful Pitches</p>
              </div>  
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-unifor-purple/30 flex items-center justify-center mb-3">
                  <Briefcase className="h-8 w-8 text-white" />
                </div>
                <p className="text-3xl font-bold text-white">850+</p>
                <p className="text-gray-300">Internship Placements</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-unifor-purple/30 flex items-center justify-center mb-3">
                  <DollarSign className="h-8 w-8 text-white" />
                </div>
                <p className="text-3xl font-bold text-white">$2.3M</p>
                <p className="text-gray-300">Funding Secured</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* NEW: Pitchburg Benefits Section - Added right after Hero Section */}
      <PitchburgBenefits />
      
      {/* Collaboration Partners Section */}
      <section className="bg-white py-16 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-unifor-dark-purple mb-8">Our Collaboration Partners</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-4 border rounded-lg shadow-md">
              <p className="font-bold">Youngburg</p>
              {/* Add logo or more details here */}
            </div>
            <div className="p-4 border rounded-lg shadow-md">
              <p className="font-bold">YLC</p>
              {/* Add logo or more details here */}
            </div>
            <div className="p-4 border rounded-lg shadow-md">
              <p className="font-bold">UIEC</p>
              {/* Add logo or more details here */}
            </div>
          </div>
          <a href="https://forms.gle/EhKHT9SffrJSP9Jh7" target="_blank" rel="noopener noreferrer">
            <Button className="bg-unifor-purple hover:bg-unifor-dark-purple text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl mt-8">
              Submit Pitch
            </Button>
          </a>
        </div>
      </section>
      <div className="container mx-auto max-w-6xl px-4">
        {/* How Uni-Pitch Works */}
        <section className="my-20">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <Badge variant="outline" className="bg-unifor-light-purple text-unifor-dark-purple px-4 py-1 mb-4">
              THE PROCESS
            </Badge>
            <h2 className="text-3xl font-bold mb-4 text-unifor-dark-purple">How Uni-Pitch Works</h2>
            <p className="text-gray-600">
              A simple four-step process that connects students with life-changing opportunities and resources.
            </p>
            <Button 
              onClick={scrollToGallery}
              variant="outline" 
              className="mt-4 border-unifor-purple text-unifor-purple hover:bg-unifor-light-purple/10"
            >
              See Success Stories
              <ArrowDown className="ml-1 h-4 w-4" />
            </Button>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 mb-10">
            {howItWorksSteps.map((item, idx) => (
              <div 
                key={idx}
                className={`p-6 rounded-xl transition-all duration-300 cursor-pointer 
                  ${activeHowItWorksStep === idx ? 'bg-unifor-purple text-white shadow-lg' : 'bg-white hover:bg-unifor-light-purple/20 text-gray-800'}`}
                onClick={() => setActiveHowItWorksStep(idx)}
              >
                <div className={`w-12 h-12 rounded-full mb-4 flex items-center justify-center 
                  ${activeHowItWorksStep === idx ? 'bg-white text-unifor-purple' : 'bg-unifor-light-purple text-unifor-purple'}`}>
                  <span className="text-xl font-bold">{item.step}</span>
                </div>
                <h3 className={`text-lg font-bold mb-2 ${activeHowItWorksStep === idx ? 'text-white' : 'text-unifor-dark-purple'}`}>
                  {item.title}
                </h3>
                <p className={activeHowItWorksStep === idx ? 'text-white/90' : 'text-gray-600'}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg mb-10 animate-fade-in">
            <div className="flex items-start gap-4">
              <div className="bg-unifor-light-purple p-3 rounded-full">
                {howItWorksSteps[activeHowItWorksStep].icon}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-unifor-dark-purple">
                  Step {howItWorksSteps[activeHowItWorksStep].step}: {howItWorksSteps[activeHowItWorksStep].title}
                </h3>
                <p className="text-gray-700">
                  {howItWorksSteps[activeHowItWorksStep].detail}
                </p>
                <div className="mt-4 flex gap-4">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => setActiveHowItWorksStep(Math.max(0, activeHowItWorksStep - 1))}
                    disabled={activeHowItWorksStep === 0}
                    className="border-unifor-purple text-unifor-purple hover:bg-unifor-light-purple/10"
                  >
                    Previous Step
                  </Button>
                  <Button 
                    size="sm" 
                    onClick={() => setActiveHowItWorksStep(Math.min(howItWorksSteps.length - 1, activeHowItWorksStep + 1))}
                    disabled={activeHowItWorksStep === howItWorksSteps.length - 1}
                    className="bg-unifor-purple hover:bg-unifor-dark-purple"
                  >
                    Next Step
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Button className="bg-unifor-purple hover:bg-unifor-dark-purple text-white shadow-md hover:shadow-lg transition-all">
              Submit Your Pitch Now
              <ArrowUpRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
        
        {/* NEW: Pitchburg Initiative Section */}
        <PitchburgInitiative />
        
        {/* NEW: Pitchburg Programs Section */}
        <PitchburgPrograms />
        
        {/* Visual Journey */}
        <UniPitchJourney />
        
        {/* Gallery Section */}
        <div ref={galleryRef}>
          <UniPitchGallery/>
        </div>

        {/* Real-life Impact */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center mb-10 text-unifor-dark-purple">Real-Life Impact</h2>
           <div className="grid md:grid-cols-2 gap-8">
           <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-green-500 animate-fade-in">
             <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Briefcase className="h-5 w-5 text-unifor-purple" />
                  A Fresher Looking for an Internship
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="flex items-start mb-4 bg-red-50 p-4 rounded-lg">
                    <div className="bg-red-100 rounded-full p-2 mr-3 mt-1">
                      <span className="text-red-500 text-lg">❌</span>
                    </div>
                    <div>
                    <p className="font-medium text-gray-700">Before Uni-Pitch:</p>
                      <p className="text-gray-600">Struggles to find an internship, lacks guidance, and worries about paid training costs.</p>
                    </div>
                  </div>
                  <div className="flex items-start bg-green-50 p-4 rounded-lg">
                    <div className="bg-green-100 rounded-full p-2 mr-3 mt-1">
                      <span className="text-green-500 text-lg">✅</span>
                    </div>
                    <div>
                    <p className="font-medium text-gray-700">After Uni-Pitch:</p>
                      <p className="text-gray-600">Gets internship offers, access to free resources, and connections with top organizations.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-purple-500 animate-fade-in" style={{ animationDelay: "0.2s" }}>
             <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Lightbulb className="h-5 w-5 text-unifor-purple" />
                  A Student With an Innovative Project
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="flex items-start mb-4 bg-red-50 p-4 rounded-lg">
                    <div className="bg-red-100 rounded-full p-2 mr-3 mt-1">
                      <span className="text-red-500 text-lg">❌</span>
                    </div>
                    <div>
                    <p className="font-medium text-gray-700">Before Uni-Pitch:</p>
                      <p className="text-gray-600">Creates a great project but lacks visibility & support.</p>
                    </div>
                  </div>
                  <div className="flex items-start bg-green-50 p-4 rounded-lg">
                    <div className="bg-green-100 rounded-full p-2 mr-3 mt-1">
                      <span className="text-green-500 text-lg">✅</span>
                    </div>
                    <div>
                    <p className="font-medium text-gray-700">After Uni-Pitch:</p>
                      <p className="text-gray-600">Project is published in news/magazines, gets awards & funding, and is invited to global expos & summits.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Problems Solved */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center mb-10 text-unifor-dark-purple">How Uni-Pitch Solves Student Problems</h2>
          <div className="bg-gradient-to-br from-unifor-light-purple to-white shadow-lg rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-unifor-dark-purple text-white">
                <tr>
                  <th className="py-5 px-6 text-left">Problems Faced by Students</th>
                  <th className="py-5 px-6 text-left">How Uni-Pitch Helps</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-unifor-light-purple/20 transition-colors">
                  <td className="py-5 px-6 text-gray-700">Struggles to find direct help for: Internships, mentorship, resources, guidance, etc.</td>
                  <td className="py-5 px-6 text-gray-700 flex items-start">
                    <ThumbsUp className="text-unifor-purple h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                    <span>Directly connects students with verified opportunities through partnered alliances.</span>
                  </td>
                </tr>
                <tr className="hover:bg-unifor-light-purple/20 transition-colors">
                  <td className="py-5 px-6 text-gray-700">Lack of a platform to showcase potential: Skills, projects, ideas, achievements.</td>
                  <td className="py-5 px-6 text-gray-700 flex items-start">
                    <ThumbsUp className="text-unifor-purple h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                    <span>Provides exposure via publications, networking, and global nominations.</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Categories */}
        <UniPitchCategories />
        
        {/* FAQ Section */}
        <div className="mt-24 mb-16">
          <h2 className="text-3xl font-bold text-center mb-10 text-unifor-dark-purple">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4">
                <button
                  onClick={() => toggleFaq(index)}
                  className={`w-full text-left p-5 flex justify-between items-center rounded-lg font-medium text-lg ${
                    expandedFaq === index 
                      ? 'bg-unifor-purple text-white' 
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  } transition-colors shadow-md`}
                >
                  <span>{faq.question}</span>
                  {expandedFaq === index ? (
                    <ChevronUp className="h-5 w-5" />
                  ) : (
                    <ChevronDown className="h-5 w-5" />
                  )}
                </button>
                {expandedFaq === index && (
                  <div className="bg-white p-5 rounded-b-lg shadow-md -mt-1 border-t border-gray-100 animate-accordion-down">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="mt-24 mb-20 bg-gradient-to-r from-unifor-purple to-unifor-blue rounded-xl overflow-hidden shadow-xl">
          <div className="p-10 md:p-16 text-center text-white">
            <Network size={56} animated={true} className="mx-auto mb-6 text-white" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Academic Journey?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">Join thousands of students who have already unlocked global opportunities through Uni-Pitch.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button className="bg-white text-unifor-dark-purple hover:bg-gray-100 font-medium px-8 py-6 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                <a href="https://forms.gle/EhKHT9SffrJSP9Jh7" target="_blank" rel="noopener noreferrer">
                Submit Your Pitch Now
                <Rocket className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 font-medium px-8 py-6 rounded-lg text-lg transition-all duration-300">              
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default UniPitch;
