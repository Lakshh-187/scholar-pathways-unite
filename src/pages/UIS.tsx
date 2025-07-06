import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { 
  School, 
  Users, 
  Target, 
  Lightbulb, 
  Globe, 
  Award, 
  Calendar, 
  Clock, 
  DollarSign,
  BookOpen,
  Rocket,
  TreePine,
  Building,
  Star,
  CheckCircle,
  ArrowRight,
  Phone,
  Download,
  FileText
} from 'lucide-react';

const UIS = () => {
  const heroImages = [
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=500&fit=crop",
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=500&fit=crop",
    "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=500&fit=crop",
    "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=800&h=500&fit=crop"
  ];

  const projectImages = [
    "https://images.unsplash.com/photo-1581726690015-c9861fa5057f?w=200&h=150&fit=crop",
    "https://images.unsplash.com/photo-1596496356518-db8867e80ef2?w=200&h=150&fit=crop",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=200&h=150&fit=crop",
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&h=150&fit=crop"
  ];

  const frontlinerImages = [
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&h=150&fit=crop",
    "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&h=150&fit=crop",
    "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=200&h=150&fit=crop",
    "https://images.unsplash.com/photo-1562774053-701939374585?w=200&h=150&fit=crop"
  ];

  return (
    <Layout>
      {/* Hero Section with Carousel */}
      <section className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-yellow-500 text-blue-900 px-6 py-3 text-lg font-bold">
                <School className="h-5 w-5 mr-2" />
                ADMISSIONS OPEN
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                🏫 Uniford <span className="text-yellow-300">International</span> School
              </h1>
              <div className="space-y-4">
                <p className="text-2xl font-semibold text-blue-100">
                  A School for Tomorrow's Initiators | Grades 5 to 12
                </p>
                <div className="flex flex-wrap gap-4">
                  <Badge variant="outline" className="bg-white/10 text-white border-white/30 px-4 py-2">
                    Project-Based Learning
                  </Badge>
                  <Badge variant="outline" className="bg-white/10 text-white border-white/30 px-4 py-2">
                    Social Leadership-Driven
                  </Badge>
                  <Badge variant="outline" className="bg-white/10 text-white border-white/30 px-4 py-2">
                    Affordable Excellence
                  </Badge>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold text-lg px-8 py-6">
                  Apply Now <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 text-lg px-8 py-6">
                  Book Counselling <Phone className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            
            {/* Hero Image Carousel */}
            <div className="relative">
              <Carousel className="w-full max-w-lg mx-auto">
                <CarouselContent>
                  {heroImages.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                        <img 
                          src={image} 
                          alt={`UIS Campus ${index + 1}`}
                          className="w-full h-80 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4" />
                <CarouselNext className="right-4" />
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="bg-blue-100 text-blue-700 px-6 py-3 mb-6 text-lg">
                <Target className="h-5 w-5 mr-2" />
                OUR VISION
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                🔍 We're not just another school. <br />
                <span className="text-blue-600">We're a movement.</span>
              </h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                Uniford International School redefines education by combining project-based learning with real-world responsibility. 
                Here, students don't wait to grow up to make a difference — they lead change today.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Two Programs Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-green-100 text-green-700 px-6 py-3 mb-6 text-lg">
              <Rocket className="h-5 w-5 mr-2" />
              TWO POWER-PACKED PROGRAMS
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">🎯 Choose Your Path to Excellence</h2>
          </div>

          <div className="space-y-20">
            {/* Grades 5-8: Project School */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Badge className="bg-orange-100 text-orange-700 px-4 py-2">GRADES 5-8</Badge>
                <h3 className="text-3xl font-bold text-gray-900">🛠️ The Project School</h3>
                <p className="text-xl text-blue-600 font-semibold italic">
                  "Learn by doing, create by exploring."
                </p>
                <p className="text-lg text-gray-700">
                  A fully project-based curriculum that ignites curiosity and develops practical knowledge. 
                  Students work on real-world projects that blend science, math, environment, business, and creativity.
                </p>
                
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-gray-900">Highlights:</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <Lightbulb className="h-5 w-5 text-orange-600" />
                      <span>Weekly interdisciplinary projects</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Target className="h-5 w-5 text-orange-600" />
                      <span>Learning through problem-solving</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="h-5 w-5 text-orange-600" />
                      <span>Group-based and independent tasks</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Star className="h-5 w-5 text-orange-600" />
                      <span>Creativity + Science + Logic = Learning!</span>
                    </div>
                  </div>
                </div>

                <Card className="bg-orange-50 border-orange-200">
                  <CardContent className="p-6">
                    <h5 className="font-bold text-orange-800 mb-2">Example Project:</h5>
                    <p className="text-orange-700">
                      <strong>Eco-Market Challenge</strong> – Design a zero-waste community market using math, 
                      sustainability science, and local economics.
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              {/* 4-in-1 Image Grid */}
              <div className="grid grid-cols-2 gap-4">
                {projectImages.map((image, index) => (
                  <div key={index} className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                    <img 
                      src={image} 
                      alt={`Project Learning ${index + 1}`}
                      className="w-full h-40 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Grades 9-12: Frontliner School */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* 4-in-1 Image Grid */}
              <div className="grid grid-cols-2 gap-4 order-2 lg:order-1">
                {frontlinerImages.map((image, index) => (
                  <div key={index} className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                    <img 
                      src={image} 
                      alt={`Frontliner Program ${index + 1}`}
                      className="w-full h-40 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
              
              <div className="space-y-6 order-1 lg:order-2">
                <Badge className="bg-purple-100 text-purple-700 px-4 py-2">GRADES 9-12</Badge>
                <h3 className="text-3xl font-bold text-gray-900">🚀 The Frontliner School – Be an Initiator</h3>
                <p className="text-xl text-purple-600 font-semibold italic">
                  "Be the one who starts, leads, and transforms."
                </p>
                <p className="text-lg text-gray-700">
                  This track empowers teens to become changemakers, innovators, and community leaders. 
                  Students take on social internships, lead real campaigns, and build entrepreneurial or environmental solutions.
                </p>
                
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-gray-900">Highlights:</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <TreePine className="h-5 w-5 text-purple-600" />
                      <span>Social Innovation Projects</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Building className="h-5 w-5 text-purple-600" />
                      <span>Internships with NGOs, startups</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="h-5 w-5 text-purple-600" />
                      <span>Public Speaking & Leadership</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Award className="h-5 w-5 text-purple-600" />
                      <span>Portfolio-based growth</span>
                    </div>
                  </div>
                </div>

                <Card className="bg-purple-50 border-purple-200">
                  <CardContent className="p-6">
                    <h5 className="font-bold text-purple-800 mb-2">Example Project:</h5>
                    <p className="text-purple-700">
                      <strong>Feed Forward Initiative</strong> – Build a local food donation drive with a 
                      digital platform and community network.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="bg-indigo-100 text-indigo-700 px-6 py-3 mb-6 text-lg">
                <CheckCircle className="h-5 w-5 mr-2" />
                WHAT MAKES US DIFFERENT
              </Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">📚 Beyond Traditional Education</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: Target, title: "100% Activity & Project-Based", desc: "No rote learning, only hands-on experience" },
                { icon: Globe, title: "Social Responsibility + Academic Growth", desc: "Learning with real-world impact" },
                { icon: Lightbulb, title: "Critical Thinking, Teamwork, Self-Learning", desc: "Skills for the future workplace" },
                { icon: Users, title: "Mentorship from real professionals", desc: "Industry experts guide student projects" },
                { icon: Award, title: "Curriculum designed for impact", desc: "Results matter more than just marks" }
              ].map((item, index) => (
                <Card key={index} className="border-2 border-indigo-100 hover:border-indigo-300 transition-all duration-300 hover:shadow-xl">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <item.icon className="h-8 w-8 text-indigo-600" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Visionaries Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <Badge className="bg-yellow-100 text-yellow-700 px-6 py-3 mb-6 text-lg">
              <Star className="h-5 w-5 mr-2" />
              MEET THE VISIONARIES
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">🧑‍🏫 Designed by Change-Makers</h2>
            <p className="text-2xl text-blue-600 font-semibold italic mb-8">
              "Every child can lead — if we stop teaching them to just follow."
            </p>
            
            <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl p-8">
              <p className="text-lg text-gray-700 mb-4">
                <strong>Designed by:</strong> Change-Makers, Educators & Innovators
              </p>
              <p className="text-lg text-gray-700">
                <strong>In Collaboration with:</strong> UN Francisco Scholar Program, Talent Hunt Alliance, 
                Startup Pool &amp; Youth-Led Initiatives
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How Learning Happens */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="bg-green-100 text-green-700 px-6 py-3 mb-6 text-lg">
                <BookOpen className="h-5 w-5 mr-2" />
                HOW LEARNING HAPPENS
              </Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">🔁 Our Learning Flow</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Rocket, text: "Hands-on projects and social campaigns" },
                { icon: Calendar, text: "Weekly standups, deadlines, and reviews" },
                { icon: Users, text: "Peer-to-peer learning in small pods" },
                { icon: Award, text: "Portfolio & presentation-based assessment" },
                { icon: TreePine, text: "On-ground community drives and eco-events" }
              ].map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow border-green-200">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <item.icon className="h-6 w-6 text-green-600" />
                    </div>
                    <p className="text-gray-700 font-medium">{item.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Daily Flow */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-blue-100 text-blue-700 px-6 py-3 mb-6 text-lg">
              <Clock className="h-5 w-5 mr-2" />
              OUR DAILY FLOW
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-12">🏫 A Day at UIS</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                { icon: Clock, title: "Flexible 3–4 Hour Daily Schedules", desc: "Learning that adapts to student needs" },
                { icon: Target, title: "Themed Learning Days", desc: "Tech, Environment, Art, Society focus" },
                { icon: Users, title: "Collaboration & Breakout Sessions", desc: "Interactive group learning" },
                { icon: Star, title: "Weekend Events & Impact Reports", desc: "Celebrating achievements and progress" }
              ].map((item, index) => (
                <Card key={index} className="border-blue-200 hover:shadow-xl transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <item.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <h4 className="text-lg font-bold text-gray-900">{item.title}</h4>
                    </div>
                    <p className="text-gray-600">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Affordable Fees */}
      <section className="py-16 bg-gradient-to-r from-green-900 to-teal-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-yellow-500 text-green-900 px-6 py-3 mb-6 text-lg font-bold">
              <DollarSign className="h-5 w-5 mr-2" />
              AFFORDABLE & IMPACT-ORIENTED FEES
            </Badge>
            <h2 className="text-4xl font-bold mb-6">💰 Value Over Price</h2>
            <p className="text-xl text-green-100 mb-8">
              We believe value &gt; price. Our programs are designed to deliver 10x returns in skills, mindset, and exposure.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-white/10 border-white/20 text-white">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-yellow-300 mb-2">🎟️</div>
                  <h4 className="font-bold mb-2">Membership-Based Learning</h4>
                  <p className="text-green-100 text-sm">Refundable Guarantee Fee</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 border-white/20 text-white">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-yellow-300 mb-2">💎</div>
                  <h4 className="font-bold mb-2">Scholarships Available</h4>
                  <p className="text-green-100 text-sm">For high-impact learners</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 border-white/20 text-white">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-yellow-300 mb-2">📦</div>
                  <h4 className="font-bold mb-2">Premium Resources</h4>
                  <p className="text-green-100 text-sm">AI tools & mentorship platforms</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="bg-purple-100 text-purple-700 px-6 py-3 mb-6 text-lg">
                <Star className="h-5 w-5 mr-2" />
                WHAT STUDENTS & PARENTS SAY
              </Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">🗣️ Real Impact Stories</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-purple-100 hover:shadow-xl transition-all">
                <CardContent className="p-8">
                  <div className="text-6xl mb-4">👨‍👩‍👧‍👦</div>
                  <p className="text-lg text-gray-700 mb-4 italic">
                    "My child planted 20 trees, created an awareness campaign, and now speaks with purpose. 
                    That's more than a report card."
                  </p>
                  <p className="text-sm text-gray-500">— Parent, Class 7 Student</p>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-purple-100 hover:shadow-xl transition-all">
                <CardContent className="p-8">
                  <div className="text-6xl mb-4">🌍</div>
                  <p className="text-lg text-gray-700 mb-4 italic">
                    "We don't just study the world. We fix it."
                  </p>
                  <p className="text-sm text-gray-500">— Grade 10 Scholar, Frontliner Track</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-gray-200 text-gray-700 px-6 py-3 mb-6 text-lg">
              <FileText className="h-5 w-5 mr-2" />
              FREQUENTLY ASKED QUESTIONS
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-12">❓ Common Questions</h2>

            <div className="grid md:grid-cols-2 gap-6 text-left">
              {[
                "How do social internships work?",
                "Are your programs exam-free?",
                "What subjects are taught through projects?",
                "Can students join from any city or country?",
                "Are certifications recognized nationally?"
              ].map((question, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <p className="font-semibold text-gray-900">{question}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-6">📩 Join the Revolution</h2>
            <p className="text-2xl text-blue-100 mb-4">Admissions Open for Grades 5 to 12</p>
            <p className="text-xl text-blue-200 mb-12">
              Talk to our team and find the right track for your child's potential.
            </p>

            <div className="flex flex-wrap gap-6 justify-center">
              <Button className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold text-lg px-8 py-6">
                <Phone className="h-5 w-5 mr-2" />
                Book 1:1 Counselling
              </Button>
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 text-lg px-8 py-6">
                <Download className="h-5 w-5 mr-2" />
                Download Brochure
              </Button>
              <Button className="bg-green-600 hover:bg-green-500 text-white font-bold text-lg px-8 py-6">
                <ArrowRight className="h-5 w-5 mr-2" />
                Apply Now
              </Button>
            </div>

            <div className="mt-16 text-center">
              <h3 className="text-3xl font-bold mb-4">
                Uniford International School
              </h3>
              <p className="text-xl text-blue-200 mb-2">
                — Powered by Passion, Projects & Purpose
              </p>
              <p className="text-2xl font-bold text-yellow-300">
                🌱 Learn Differently. Lead Boldly.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default UIS;