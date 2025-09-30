import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Card } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, Download, Globe, Mail, Phone, Linkedin, FileText, HelpCircle } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { downloadBadgeAsPDF } from '@/utils/downloadUtils';

const HerHaVaManual = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [language, setLanguage] = useState<'en' | 'hi'>('en');

  const content = {
    en: {
      title: "Her-HaVa Scholar Manual",
      subtitle: "Your Complete Guide to Programs, Recognition & Opportunities",
      pages: [
        {
          title: "🎓 Programs Offered",
          content: [
            { heading: "All programs are internationally recognized and UTHA-backed", text: "" },
            { heading: "Why These Programs Are Special?", text: "Designed around government-mandated compliance and high-demand career designations." },
            { heading: "Coverage Areas:", text: "POSH (Prevention of Sexual Harassment), POCSO (Protection of Children from Sexual Offences), CSR & Social Governance, Cyber Laws & Data Privacy, Intellectual Property (IP) Expert, Policy & Audit Expert" },
            { heading: "Career Opportunities", text: "Completion opens doors to roles such as Trainer, Audit Officer, Board Member, Committee Member in both public and private sectors." },
            { heading: "🌍 Scope & Career Opportunities", text: "Programs are well-researched and handpicked from thousands of global offerings. Open to all age groups and academic streams. Designed for flexible participation — can be pursued alongside studies, work, or as a hobby." },
            { heading: "Double Safety Net", text: "Knowledge to empower your journey + Certification for career security" },
            { heading: "Opportunities Include:", text: "Governance & board participation, Compliance audits, Social project leadership, Global networking & collaborations" }
          ],
          faqs: [
            { q: "What kind of programs does Her–HaVa offer?", a: "We provide international certification programs recognized by UTHA. These programs are designed to help you become self-dependent and even a member in organizations, committees, and governance bodies." },
            { q: "Why are these programs special?", a: "Because they are directly linked to government-mandated compliance areas with real designations and scope. Examples include POSH, POCSO, CSR & Social Responsibility, Cyber Laws & Data Privacy, IP Expert, Policy & Audit Expert." },
            { q: "What is the career scope?", a: "Huge ✅ These programs are well-researched and carefully selected from thousands worldwide. Open to all age groups and academic streams. Designed to give you hands-on exposure through open-source contributions and assignments." }
          ]
        },
        {
          title: "🏛️ Organization Support",
          content: [
            { heading: "Self-Initiated Learning", text: "Access resources, frameworks, and assignments → earn certification." },
            { heading: "Internships & Groundwork", text: "Gain recognition and accreditation as a trainer." },
            { heading: "Career Support", text: "Ready-to-use templates, frameworks & licenses for working with organizations. Access to Her-HaVa Career Network for job and project opportunities." },
            { heading: "Recognition of Skills", text: "If you've learned from open-source or self-practice, you can submit projects for validation & certification. Converts your efforts into recognized achievements." }
          ],
          faqs: [
            { q: "Do these programs require a lot of time?", a: "No. They are flexible and can be done at your own pace. No daily classes, no fixed deadlines. Can be done alongside your studies, hobbies, or free time." },
            { q: "How does the organization support me?", a: "You get full backing at every step: Self-Initiated Program Path, Internship & Ground Work, Workplace Readiness, Career Network connections." },
            { q: "What if I already have skills but no recognition?", a: "That's exactly where Her–HaVa helps! If you've already learned something on your own, you can submit your work to UTHA and receive official recognition and certification." }
          ]
        },
        {
          title: "🌟 Recognized by UTHA",
          content: [
            { heading: "Recognition Matters", text: "Many individuals have skills but lack recognition. Her-HaVa ensures your knowledge, projects, and achievements are certified, accredited, and connected with deserving opportunities." },
            { heading: "The Process", text: "Learn → Implement → Submit → Get Certified" },
            { heading: "What Does Recognition Mean?", text: "It means that your learning, projects, or achievements can be officially validated and certified by UTHA. Even if you learned from open-source platforms, self-study, or personal projects, you can still earn international recognition." },
            { heading: "What You Get", text: "International Certification (recognized by UTHA), Accreditation that adds credibility to your profile, Appreciation & visibility for your work, Connections to deserving opportunities through our network" }
          ],
          faqs: [
            { q: "How can I get recognition?", a: "The process is simple: Learn from open source, given resources, or personal exploration. Implement through projects. Submit your work to UTHA for review. Get Certified with official recognition." },
            { q: "What kind of work can I submit?", a: "You can submit: Assignments from Her–HaVa programs, Projects you created independently, Contributions to open-source platforms, Achievements or practical work you have done in your area of interest." },
            { q: "Why is this important?", a: "Many students already have skills but face challenges: No official recognition or certification, No platform to showcase their projects, No one to connect them with the right opportunities. Her–HaVa + UTHA solves this." }
          ]
        },
        {
          title: "🌱 Additional Recommendations",
          content: [
            { heading: "Optional Growth Tracks", text: "Her–HaVa also guides scholars with special interest tracks for holistic growth." },
            { heading: "Wellbeing Decoder Author", text: "Explore human body & mind (subconscious, energy, body types). Understand universal laws, mindset, and science of productivity." },
            { heading: "Content Creator Decoder", text: "Training on creating and growing on social platforms." },
            { heading: "Community Initiatives", text: "Leadership in local and global causes." },
            { heading: "Are These Mandatory?", text: "No! You only have to complete your main Her–HaVa program and submit it to UTHA. Recommendations are optional, but they add value to your personal growth and skill set." }
          ],
          faqs: [
            { q: "What is the Wellbeing Decoder Author program?", a: "In this program, you learn about: Your mind and body, subconscious thoughts, energy, body types, Universe laws & chemistry, Life skills: mindset, dealing with procrastination, focus, and motivation." },
            { q: "What is the Content Creator Decoder program?", a: "This is for students who want to create content on social media: Learn how to make videos, posts, or stories that are meaningful. Understand digital platforms, audiences, and engagement. Explore creative storytelling." },
            { q: "Will I get recognition for recommendations?", a: "Yes! Mentors can guide you and give feedback on your work. If you do projects seriously, you can showcase them in your portfolio or get acknowledgment." }
          ]
        },
        {
          title: "🌐 Her–HaVa Opportunity Portal",
          content: [
            { heading: "What is this portal?", text: "This portal is like a treasure map of opportunities for students! The main idea: Awareness is the key to success. The more you know about what's out there, the more doors you can open for yourself." },
            { heading: "What Can You Find Here?", text: "Free Internships – Learn while gaining real-world experience. Programs & Fellowships – Special learning opportunities recognized globally. Scholarships – Get financial support for your studies. Platforms & Collaborations – Work with people worldwide on exciting projects. Competitions – Test your skills and win recognition. Open Source Contributions – Contribute to projects and show your talent. Best LinkedIn Profiles & Social Pages – Learn from top achievers and get inspired." },
            { heading: "How Should I Use It?", text: "Explore everything at your own pace. Pick opportunities that interest you most. Learn from examples and see what skills and achievements others have. Take small steps every day — awareness is the first step to becoming a skilled, recognized scholar." }
          ],
          faqs: [
            { q: "Do I need to attend daily classes?", a: "No, not at all. Her–HaVa is not like school or college classes. There are no daily classes and no strict timetable. You learn through resources, self-initiated study, and mentorship sessions whenever you're free." },
            { q: "How much time do I need to give every day?", a: "There is no fixed daily time. Some scholars give just 1–2 hours a week, others more when they are free. You can balance it with your studies or hobbies." },
            { q: "What does my journey look like?", a: "Your journey has 4 simple steps: Orientation Session, Choose a Program, Self-Initiated Learning, Submission & Recognition." }
          ]
        },
        {
          title: "🌸 Her–HaVa FAQ",
          content: [
            { heading: "Are there deadlines?", text: "Only one thing is mandatory: completing your chosen program and submitting your work/assignments to UTHA for recognition. Beyond that, there are no strict deadlines. You move at your own pace." },
            { heading: "What if I don't understand something?", text: "You're never alone. We provide: Monthly sessions with program leads to guide you, Annual career counseling sessions for clarity on your future, Continuous mentorship & unconditional support whenever you need help." },
            { heading: "Will I get recognized for my work?", text: "Yes ✅ Recognition is the heart of Her–HaVa. If you complete your program and submit to UTHA, you'll get international certification and accreditation." },
            { heading: "What support will I get?", text: "We back you fully with: Resources, frameworks, and templates, Certification & licensing support, Career network connections, Mentorship and counseling." },
            { heading: "Is this program only for certain students?", text: "No. Anyone from any stream, background, or age group can join. These programs are chosen so that any student can learn, grow, and apply them in real life." }
          ],
          faqs: [
            { q: "What is the main expectation from me as a scholar?", a: "Just two things: Complete your chosen program and submit it for recognition. Take initiative — be curious, explore, and use the opportunities we give you." },
            { q: "Are recommendations compulsory?", a: "No, they are optional. Programs like Wellbeing Decoder or Content Creator Decoder are just extra opportunities for growth." },
            { q: "Who will help me if I get stuck?", a: "Her–HaVa mentors are there to: Give tips and guidance, Answer your questions, Support you in planning and completing projects." }
          ]
        }
      ]
    },
    hi: {
      title: "Her-HaVa स्कॉलर मैनुअल",
      subtitle: "कार्यक्रम, मान्यता और अवसरों के लिए आपकी पूर्ण मार्गदर्शिका",
      pages: [
        {
          title: "🎓 कार्यक्रम प्रस्तावित",
          content: [
            { heading: "सभी कार्यक्रम अंतरराष्ट्रीय स्तर पर मान्यता प्राप्त और UTHA-समर्थित हैं", text: "" },
            { heading: "ये कार्यक्रम विशेष क्यों हैं?", text: "सरकार द्वारा अनिवार्य अनुपालन और उच्च मांग वाले करियर पदनामों के आसपास डिज़ाइन किए गए।" },
            { heading: "कवरेज क्षेत्र:", text: "POSH, POCSO, CSR और सामाजिक शासन, साइबर कानून और डेटा गोपनीयता, बौद्धिक संपदा विशेषज्ञ, नीति और ऑडिट विशेषज्ञ" }
          ],
          faqs: [
            { q: "Her-HaVa किस तरह के कार्यक्रम प्रदान करता है?", a: "हम UTHA द्वारा मान्यता प्राप्त अंतरराष्ट्रीय प्रमाणन कार्यक्रम प्रदान करते हैं।" }
          ]
        }
      ]
    }
  };

  const currentContent = content[language];
  const totalPages = currentContent.pages.length;

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleDownload = async () => {
    try {
      toast({
        title: "Preparing Download",
        description: "Your manual is being prepared...",
      });
      await downloadBadgeAsPDF('manual-book', `HerHaVa-Manual-${language.toUpperCase()}`);
      toast({
        title: "Downloaded Successfully",
        description: "Your Her-HaVa Manual has been downloaded.",
      });
    } catch (error) {
      toast({
        title: "Download Failed",
        description: "Please try again.",
        variant: "destructive",
      });
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'hi' : 'en');
    toast({
      title: "Language Changed",
      description: `Switched to ${language === 'en' ? 'Hindi' : 'English'}`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-white">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">{currentContent.title}</h1>
              <p className="text-sm md:text-base text-pink-100">{currentContent.subtitle}</p>
            </div>
            <div className="flex gap-2">
              <Button
                onClick={toggleLanguage}
                variant="outline"
                size="sm"
                className="bg-white/20 border-white/30 text-white hover:bg-white/30"
              >
                <Globe className="h-4 w-4 mr-2" />
                {language === 'en' ? 'हिंदी' : 'English'}
              </Button>
              <Button
                onClick={handleDownload}
                variant="outline"
                size="sm"
                className="bg-white/20 border-white/30 text-white hover:bg-white/30"
              >
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Manual Book Container */}
      <div className="container mx-auto px-4 py-8">
        <div id="manual-book" className="max-w-5xl mx-auto">
          {/* Book Page */}
          <Card className="bg-white shadow-2xl border-4 border-pink-200 rounded-lg overflow-hidden min-h-[800px]">
            {/* Page Header with Branding */}
            <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 text-white p-6">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-2">
                    {currentContent.pages[currentPage]?.title}
                  </h2>
                  <p className="text-sm text-pink-100">Page {currentPage + 1} of {totalPages}</p>
                </div>
                <img src="/uncif-logo.png" alt="UNCIF" className="h-16 w-16 object-contain bg-white rounded-full p-2" />
              </div>
            </div>

            {/* Page Content */}
            <div className="p-8 min-h-[500px]">
              <div className="space-y-6">
                {currentContent.pages[currentPage]?.content.map((section, idx) => (
                  <div key={idx} className="space-y-2">
                    <h3 className="text-xl font-bold text-pink-700">{section.heading}</h3>
                    <p className="text-gray-700 leading-relaxed">{section.text}</p>
                  </div>
                ))}
              </div>

              {/* FAQ and Attachments Buttons */}
              <div className="flex gap-4 mt-8">
                {currentContent.pages[currentPage]?.faqs && currentContent.pages[currentPage].faqs.length > 0 && (
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="border-pink-300 text-pink-700 hover:bg-pink-50">
                        <HelpCircle className="h-4 w-4 mr-2" />
                        FAQs
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-2xl text-pink-700">
                          Frequently Asked Questions
                        </DialogTitle>
                        <DialogDescription>
                          Common questions about this section
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4 mt-4">
                        {currentContent.pages[currentPage].faqs.map((faq, idx) => (
                          <div key={idx} className="border-l-4 border-pink-500 pl-4 py-2">
                            <h4 className="font-semibold text-purple-700 mb-2">{faq.q}</h4>
                            <p className="text-gray-700">{faq.a}</p>
                          </div>
                        ))}
                      </div>
                    </DialogContent>
                  </Dialog>
                )}

                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="border-purple-300 text-purple-700 hover:bg-purple-50">
                      <FileText className="h-4 w-4 mr-2" />
                      Attachments
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle className="text-2xl text-purple-700">
                        Additional Resources
                      </DialogTitle>
                      <DialogDescription>
                        Download helpful documents and templates
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-3 mt-4">
                      <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer border-pink-200">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-semibold text-pink-700">Program Guidelines</h4>
                            <p className="text-sm text-gray-600">Complete guide for this section</p>
                          </div>
                          <Download className="h-5 w-5 text-purple-600" />
                        </div>
                      </Card>
                      <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer border-purple-200">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-semibold text-purple-700">Templates & Frameworks</h4>
                            <p className="text-sm text-gray-600">Ready-to-use resources</p>
                          </div>
                          <Download className="h-5 w-5 text-pink-600" />
                        </div>
                      </Card>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>

            {/* Page Footer with Contact Info */}
            <div className="bg-gradient-to-r from-purple-100 via-pink-100 to-purple-100 p-6 border-t-2 border-pink-200">
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-pink-700 hover:text-pink-900 hover:bg-pink-200"
                  onClick={() => window.open('https://www.uniford.org', '_blank')}
                >
                  <Globe className="h-4 w-4 mr-2" />
                  www.uniford.org
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-purple-700 hover:text-purple-900 hover:bg-purple-200"
                  onClick={() => window.open('mailto:info@uniford.org', '_blank')}
                >
                  <Mail className="h-4 w-4 mr-2" />
                  info@uniford.org
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-pink-700 hover:text-pink-900 hover:bg-pink-200"
                  onClick={() => window.open('tel:+911234567890', '_blank')}
                >
                  <Phone className="h-4 w-4 mr-2" />
                  +91 123-456-7890
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-purple-700 hover:text-purple-900 hover:bg-purple-200"
                  onClick={() => window.open('https://linkedin.com/company/uniford', '_blank')}
                >
                  <Linkedin className="h-4 w-4 mr-2" />
                  LinkedIn
                </Button>
              </div>
            </div>
          </Card>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center mt-8">
            <Button
              onClick={prevPage}
              disabled={currentPage === 0}
              size="lg"
              className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 disabled:opacity-50"
            >
              <ChevronLeft className="h-5 w-5 mr-2" />
              Previous
            </Button>

            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentPage(idx)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    idx === currentPage
                      ? 'bg-pink-600 w-8'
                      : 'bg-pink-200 hover:bg-pink-400'
                  }`}
                  aria-label={`Go to page ${idx + 1}`}
                />
              ))}
            </div>

            <Button
              onClick={nextPage}
              disabled={currentPage === totalPages - 1}
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:opacity-50"
            >
              Next
              <ChevronRight className="h-5 w-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HerHaVaManual;
