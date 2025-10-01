import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, Download, Globe, Mail, Phone, Linkedin, Languages } from 'lucide-react';
import { toast } from 'sonner';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import coverImage from '@/assets/standard-manual-cover.jpeg';

const Standard = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [language, setLanguage] = useState<'en' | 'hi'>('en');
  const bookRef = useRef<HTMLDivElement>(null);

  const content = {
    en: {
      policies: {
        title: "Policy → Program → Outcome",
        items: [
          {
            policy: "High Participation of Students Policy",
            program: "100% Participation Drive",
            details: "Every student must join at least 1 club, 1 competition, and 1 social event per term.",
            outcome: "Students become all-rounders with strong portfolios.",
            impact: "Parents see holistic growth → higher trust → increased admissions.",
            scenario: "Meet Riya from Grade 9. She was shy and rarely participated in activities. After the 100% Participation Drive, she joined the Debate Club, participated in a Science Olympiad, and volunteered at a tree plantation drive. Within 6 months, her confidence soared, and she became a school ambassador. Her parents shared this transformation with their network, bringing 5 new admissions through referrals."
          },
          {
            policy: "Tie-ups & Collaboration Policy",
            program: "Global Partners Week",
            details: "Invite universities, NGOs, and industries for MoUs and collaborative projects.",
            outcome: "More exposure for students, opportunities for scholarships & internships.",
            impact: "School gets recognized as 'globally connected' → attracts ambitious parents.",
            scenario: "Greenfield School partnered with MIT OpenCourseWare and local tech companies. During Global Partners Week, students attended workshops by industry experts, and 3 students won coding internships. Local media covered the event, and the school's website traffic increased by 300%. Next year, admissions grew by 40% with parents specifically mentioning the 'global connections' as a deciding factor."
          },
          {
            policy: "Teacher Orientation & Training Policy",
            program: "International Teacher Training Series",
            details: "Training with AI, new pedagogy, classroom innovations.",
            outcome: "Teachers teach better, classes become engaging.",
            impact: "Parents trust the quality of teaching → word-of-mouth increases admissions.",
            scenario: "After attending a Google Educator training program, Mr. Sharma integrated AI tools into his math classes. Students started solving real-world problems using data analytics. Parent feedback improved from 65% satisfaction to 92%. Word spread in the community about the 'innovative teaching methods,' and the school saw a 25% increase in inquiries."
          },
          {
            policy: "Student Orientation Policy",
            program: "New Scholar Induction Camp",
            details: "3-day program with sessions on clubs, wellbeing, resources.",
            outcome: "Students adapt quickly, discipline improves.",
            impact: "Parents see professional management → credibility grows.",
            scenario: "New students at Sunrise Academy attend a 3-day induction camp covering time management, mental health awareness, and digital literacy. By the end, students know all school resources, have made friends, and understand expectations. Drop-out rates decreased by 15%, and parent surveys showed 95% appreciation for the structured onboarding."
          },
          {
            policy: "CSR Program Policy",
            program: "Adopt-a-Student Scholarship Drive",
            details: "Corporate partners sponsor scholarships for deserving students.",
            outcome: "Scholarships for bright/poor students.",
            impact: "School gets CSR visibility → builds goodwill + free publicity → attracts socially conscious parents.",
            scenario: "Horizon High School partnered with 3 local companies for the 'Adopt-a-Student' program. They provided full scholarships to 10 students from economically weaker sections. The story was featured in regional newspapers and TV channels. The school received 200+ admission inquiries within 2 weeks, with many parents citing the school's 'social responsibility' as the reason."
          },
          {
            policy: "Pilot Testing & Research Policy",
            program: "Innovation Lab for EdTech Testing",
            details: "Allow startups to test products in the school.",
            outcome: "Students get early access to innovations.",
            impact: "School seen as cutting-edge → unique selling point (USP) for admissions.",
            scenario: "Victory School became a pilot partner for an AI-based learning app. Students used the platform for personalized learning, and their test scores improved by 18%. The startup featured the school in their marketing materials, and parents loved the 'early access to future technology.' The school positioned itself as an 'Innovation Hub,' leading to a 30% enrollment increase."
          },
          {
            policy: "Open Source Contribution Policy",
            program: "Expert Hour",
            details: "Industry mentors & innovators contribute free sessions/tools.",
            outcome: "Students learn beyond the textbook.",
            impact: "School appears resource-rich & connected → parents prefer it.",
            scenario: "Every Friday, professionals from various fields conduct 'Expert Hour' sessions. A NASA engineer discussed space exploration, a Bollywood director taught storytelling, and a startup founder shared entrepreneurship lessons. Students gained exposure to real-world careers, and parents appreciated the 'world-class mentorship.' The school's reputation as a 'connected institution' attracted high-profile families."
          },
          {
            policy: "Clubs / Society / Chapter Establishment Policy",
            program: "One Student – One Club Initiative",
            details: "Clubs: Robotics, Arts, Debate, Eco-club, Coding, Drama, Music, etc.",
            outcome: "Students develop leadership & teamwork.",
            impact: "Parents love visible activities → strengthens school image.",
            scenario: "At Bright Future School, every student joins at least one club. Aarav leads the Robotics Club and won a national competition. Priya's art from the Arts Club was displayed in a city exhibition. During parent-teacher meetings, showcases of club achievements are displayed. Parents feel proud seeing their children's growth, leading to strong retention and referrals."
          },
          {
            policy: "Cross-Border Collaboration Policy",
            program: "Virtual Exchange Classroom",
            details: "Online classes with international schools.",
            outcome: "Students interact globally, practice languages, share culture.",
            impact: "School becomes an international hub → great pull for admissions.",
            scenario: "Students from Delhi collaborate with peers from London via monthly virtual exchange sessions. They work on joint projects, celebrate festivals together, and practice English communication. Parents are thrilled their children have 'international friends' and global exposure without expensive travel. Admissions from aspirational middle-class families increased significantly."
          },
          {
            policy: "Industrial Collaboration Policy",
            program: "Industry Mentor & Internship Program",
            details: "Local/national companies provide mentorship and internships.",
            outcome: "Students gain practical exposure & career clarity.",
            impact: "Parents see future-readiness → makes school stand out.",
            scenario: "Grade 11 students at Tech Valley School intern at local companies during summer. Neha interned at a marketing agency and discovered her passion for branding. Rahul worked at an engineering firm and decided to pursue mechanical engineering. Parents appreciated the 'career clarity' their children gained, making the school a top choice for families planning long-term."
          },
          {
            policy: "Student Portfolio Submission Policy",
            program: "Digital Portfolio System",
            details: "Each student uploads achievements, certifications, projects.",
            outcome: "Students graduate with ready-made profiles for universities.",
            impact: "Parents perceive future university placement advantage → increases admissions.",
            scenario: "Every student maintains a digital portfolio showcasing projects, certifications, competitions, and volunteer work. When applying to universities, Kavya's portfolio helped her get into 3 top colleges despite average test scores. Parents now see the school as 'university-placement focused,' and this becomes a major admission selling point."
          },
          {
            policy: "Student Wellbeing Policy",
            program: "Wellbeing Week",
            details: "Counselors, yoga, anti-bullying campaigns, mental health workshops.",
            outcome: "Healthier, happier students.",
            impact: "Parents see school cares beyond academics → emotional connect builds loyalty.",
            scenario: "After implementing Wellbeing Week with counseling sessions and anti-bullying campaigns, bullying incidents dropped by 70%. Parents noticed their children were happier and more confident. The school became known as a 'safe and caring space,' leading to increased trust and enrollment from concerned parents."
          },
          {
            policy: "SDG Implementation Policy",
            program: "SDG Action Chapters",
            details: "Students take projects: tree plantation, waste management, gender equality.",
            outcome: "Students learn social responsibility.",
            impact: "CSR & NGO tie-ups → global recognition for school.",
            scenario: "Students launched a 'Zero Waste School' campaign aligned with SDG 12. They reduced school waste by 60% through recycling and composting. The initiative won a national sustainability award, and the school was featured in UN SDG case studies. This global recognition attracted socially conscious and internationally minded families."
          },
          {
            policy: "International Courses & Certification Policy",
            program: "Global Learning Hub",
            details: "School provides access to Google, Harvard, MIT certifications.",
            outcome: "Students graduate with extra international credentials.",
            impact: "Parents compare and prefer → 'This school gives Harvard certificates!'",
            scenario: "Students complete free certifications from Harvard CS50, Google Digital Marketing, and MIT App Inventor. During admissions season, parents compared schools and chose this one specifically because 'our child will graduate with Harvard certificates.' This unique offering became the school's biggest competitive advantage."
          },
          {
            policy: "Exposure & Industrial Visiting Policy",
            program: "Monthly Industry / University Visits",
            details: "Visits to factories, startups, research labs, colleges.",
            outcome: "Students gain real-world perspective.",
            impact: "Parents trust school for career-focused education.",
            scenario: "Grade 10 students visit IIT Delhi, a pharmaceutical plant, and a startup incubator each term. These visits help them understand career paths beyond textbooks. Rohan decided to pursue biotech after the pharma visit. Parents appreciate the 'experiential learning' approach, making the school stand out in a competitive market."
          },
          {
            policy: "Academic & Credibility Milestone Policy",
            program: "Annual Achievement Report & Awards",
            details: "Publish performance, accreditations, recognitions.",
            outcome: "Transparent credibility.",
            impact: "School earns reputation in community & media → attracts admissions.",
            scenario: "The school publishes an annual report highlighting 100% pass rates, 50+ international certifications earned by students, and partnerships with 10 global organizations. This report is shared at community events and on social media. Transparency builds trust, and the school becomes the 'benchmark of excellence' in the region."
          }
        ]
      },
      programs: {
        title: "Programs (Detailed Execution)",
        items: [
          {
            name: "AI in School Program",
            activities: [
              "AI Club → student projects in robotics, coding, generative AI",
              "Personalized Learning → AI-powered adaptive tests & study plans",
              "AI Teachers → virtual assistants for practice & doubt solving",
              "AI Tools for Teachers → lesson planning, grading, classroom analytics",
              "AI for Wellbeing → apps for stress analysis, focus, and mood balance"
            ],
            outcome: "Students become future-ready tech leaders. Teachers reduce workload.",
            impact: "Parents feel school is ahead of time. Attracts tech-driven families → increases admissions. School branding as 'AI-First Campus'.",
            scenario: "At Future Tech School, Grade 8 students use AI tools to create personalized study plans. Aditi, who struggled with math, used an AI tutor that adapted to her learning pace. Her grades improved from C to A in 3 months. Teachers use AI for grading, saving 10 hours weekly. Parents see 'future-ready education,' and the school becomes the first choice for tech-savvy families. Admissions increased by 50% in one year."
          },
          {
            name: "School Cinema Program",
            activities: [
              "Every subject → students write scripts & act (history scenes, science experiments, math shows)",
              "Episodes published on school social media, YouTube, and magazines",
              "Annual School Film Festival for best productions"
            ],
            outcome: "Improves confidence, creativity, storytelling, and subject mastery.",
            impact: "Parents see students on stage/media → high pride factor. School branding as 'Creative & Media Smart School'. Boosts admissions from families valuing soft skills + academics.",
            scenario: "In Grade 7, students created a film series on Indian history. They wrote scripts, acted as historical figures, and edited videos. The series went viral on YouTube with 100K+ views. Parents attended the annual film festival, which was covered by local media. The 'creative learning' approach attracted families looking for holistic education, and admissions rose by 35%."
          },
          {
            name: "Incubation Cell Program",
            activities: [
              "Students identified as Researchers, Innovators, Authors, Socialpreneurs, Entrepreneurs, Activists",
              "Provide mentorship, workspace, and startup fairs",
              "Link with industry mentors, investors, and competitions"
            ],
            outcome: "Students launch projects, publish books, create startups, lead campaigns.",
            impact: "School branding as 'Startup & Innovation Hub'. Media coverage of student achievements → strong visibility. Admissions rise from families seeking entrepreneurship edge.",
            scenario: "Arjun, a Grade 11 student, launched an app through the school's Incubation Cell that helps farmers get real-time weather updates. He received mentorship from industry experts and won a national startup competition. His success was featured in newspapers and business magazines. The school became known as an 'entrepreneurship hub,' attracting ambitious families. Applications doubled the next year."
          },
          {
            name: "Wellbeing Club Program",
            activities: [
              "Mental Health Talks & peer support circles",
              "Mindfulness & Yoga sessions",
              "Life Literacy → handling stress, managing relationships, digital balance",
              "Science of Body Chemistry → nutrition, fitness, hormones, energy",
              "Universal Laws & Best Personalities → decoding mindset of leaders"
            ],
            outcome: "Students become emotionally intelligent, resilient, and confident.",
            impact: "Parents feel assured school prioritizes safety + wellbeing. Branding as 'Caring & Holistic School'. Strong admissions pull for health-conscious families.",
            scenario: "After launching the Wellbeing Club, stress-related issues among students dropped by 60%. Weekly yoga and mindfulness sessions became popular. Parents noticed their children managing exam pressure better and communicating more openly. The school's reputation as a 'mentally healthy space' attracted parents who prioritized emotional wellbeing, leading to a 30% enrollment increase."
          },
          {
            name: "Profile Counselor Program",
            activities: [
              "One-on-one counseling for college applications, scholarships, and career paths",
              "Building digital student portfolios with projects, achievements, certifications",
              "Regular career awareness workshops with industry experts"
            ],
            outcome: "Students graduate with world-class portfolios & admission advantage.",
            impact: "Parents value ROI (return on investment) in future opportunities. Branding as 'University & Career-Ready School'. Boosts admissions & retention because families trust the future benefits.",
            scenario: "Grade 12 student Meera worked with the school's profile counselor to build a comprehensive portfolio. She secured scholarships worth ₹20 lakhs from 4 universities. Her parents shared their success story in the community. Word spread about the school's 'university placement support,' and parents started enrolling their children as early as Grade 6 to benefit from long-term career guidance."
          }
        ]
      },
      admissionPolicies: {
        title: "Strategic Admission Policies",
        subtitle: "Psychology-Driven Policies & Programs",
        policies: [
          {
            name: "Aspirational Scholarship Policy",
            insight: "Parents are strongly drawn to scholarships because they create hope and reduce financial pressure.",
            design: [
              "Conduct annual School Scholarship Exams (open for external students too)",
              "Scholarships continue until the student maintains eligibility",
              "Create different categories: Merit-based, Talent-based (art, coding, music), and Social Impact-based"
            ],
            effect: "Builds prestige and makes the school look like a talent magnet.",
            scenario: "Bright Minds School launched an open scholarship exam attracting 500 external students. 50 won scholarships and joined the school. The exam created buzz in the community, with parents viewing the school as 'merit-driven' and 'opportunity-rich.' Applications increased by 60%, and the school's reputation as a 'talent hub' was established."
          },
          {
            name: "Global Exposure Policy",
            insight: "Parents want their child to be globally competent.",
            design: [
              "Mandate cross-border collaborations (online exchange programs with foreign schools)",
              "Offer international certifications (Google, Harvard, LinkedIn, MIT)"
            ],
            effect: "Parents perceive this as world-class opportunity—not available in regular schools.",
            scenario: "Students at Global Vision School participate in virtual exchange programs with schools in 5 countries. They earn Google and Harvard certifications as part of the curriculum. During admission tours, parents see certificates displayed prominently. This 'global edge' becomes the deciding factor for 70% of new admissions, especially from aspirational middle-class families."
          },
          {
            name: "Incubation & Innovation Policy",
            insight: "'Future readiness' is a big admission puller. Parents love to see entrepreneurship & innovation.",
            design: [
              "Launch a Special Student Incubation Cell (projects, patents, prototypes)",
              "Industry mentors, alumni, and startup investors join as advisors"
            ],
            effect: "School becomes a hub of innovation, not just academics.",
            scenario: "Innovation Academy launched an Incubation Cell where students develop startup ideas. In 2 years, 5 student startups raised seed funding. Media covered these success stories extensively. Parents started viewing the school as a 'launchpad for future entrepreneurs,' leading to a 45% increase in premium segment admissions."
          },
          {
            name: "Student Wellbeing & Happiness Policy",
            insight: "Parents care deeply about their child's mental health & confidence.",
            design: [
              "Every student gets access to profile counselors, wellbeing clubs, yoga, and therapy sessions",
              "Zero tolerance for bullying; digital wellbeing curriculum"
            ],
            effect: "Positions school as safe, caring, and modern.",
            scenario: "After implementing a comprehensive wellbeing policy, parent satisfaction scores reached 95%. They appreciated the 'safe environment' and 'mental health focus.' During admission season, 8 out of 10 parents mentioned 'wellbeing initiatives' as their primary reason for choosing the school. The policy became the school's strongest competitive advantage."
          },
          {
            name: "Credibility & Milestone Policy",
            insight: "Parents value 'status symbols' of institutions.",
            design: [
              "School publishes annual impact reports (placements, global projects, student success)",
              "Highlight alumni stories & global recognition"
            ],
            effect: "Builds a premium, trustworthy image in the community.",
            scenario: "Excellence High School publishes a detailed annual report with infographics showing 100% college placement, international awards, and alumni success stories. The report is distributed at community events and posted online. This transparency built trust, and the school became the 'gold standard' in the region, commanding premium fees and full enrollment capacity."
          }
        ],
        programs: [
          {
            name: "Future Skills Summer Camp",
            description: "Open for all schools. 2-week camp teaching AI, coding, robotics, film-making, debate, entrepreneurship. Collaborate with universities & startups.",
            impact: "Creates 'FOMO' among parents & students from other schools → admissions rise.",
            scenario: "Innovation School organized a summer camp attended by 200 students from 15 schools. Participants loved the experience and shared it on social media. Within 2 months, 50 of those external students applied for admission, and 30 enrolled. The camp became an annual lead generation strategy, contributing 20% to yearly admissions."
          },
          {
            name: "Scholarship Exam Program",
            description: "Open for internal & external students. Winners get long-term scholarships, certifications, and recognition. Annual Scholarship Ceremony with media coverage.",
            impact: "Drives massive interest & positions school as a 'hub of talent discovery.'",
            scenario: "Merit Quest School's scholarship exam attracted 1,000 applicants. The top 100 received scholarships, and the ceremony was broadcast on local TV. Parents saw the school's commitment to merit and opportunity. The event generated 300+ inquiries, and admissions grew by 40% year-over-year."
          },
          {
            name: "International Incubation Program",
            description: "Launch Special Incubation Cells with seed funding competitions. Invite industry leaders & startup mentors. Winners represent school in national & global innovation fairs.",
            impact: "Parents see 'entrepreneurial future' → higher value perception.",
            scenario: "Startup Academy's incubation program helped students launch 10 ventures in 2 years. Three won national awards and received media coverage. Parents began viewing the school as an 'investment in their child's entrepreneurial future.' Premium admissions increased by 50%."
          },
          {
            name: "School Cinema & Leadership Festival",
            description: "Monthly School Cinema events (films + discussions on leadership, empathy, innovation). Annual Leadership Festival inviting other schools to participate.",
            impact: "Brand-building + exposure = higher admissions.",
            scenario: "Creative Leaders School hosts a Leadership Festival attended by 500 students from 20 schools. Films, debates, and workshops create a vibrant atmosphere. Local media covers the event extensively. The school becomes known for 'nurturing future leaders,' and applications surge by 35%."
          },
          {
            name: "Global Exchange & Industrial Exposure Program",
            description: "Partner with industries & foreign schools for student exchanges, online collaborations, and industry visits.",
            impact: "Parents love 'global & real-world readiness.'",
            scenario: "World Connect School partners with schools in UK, USA, and Singapore for virtual exchanges and with local industries for quarterly visits. Students gain international exposure without expensive travel. Parents appreciate the 'global mindset development,' and the school's differentiation leads to 40% higher inquiries than competitor schools."
          }
        ],
        summary: [
          "Hope (Scholarship Policy) – Attracts financially",
          "Prestige (Global Exposure & Innovation Policy) – Builds elite image",
          "Care (Wellbeing Policy) – Builds trust",
          "Credibility (Milestones & Alumni Policy) – Builds confidence",
          "Engagement (Summer Camps, Festivals, Incubation) – Creates visibility & buzz"
        ]
      }
    },
    hi: {
      policies: {
        title: "नीति → कार्यक्रम → परिणाम",
        items: [
          {
            policy: "छात्रों की उच्च भागीदारी नीति",
            program: "100% भागीदारी अभियान",
            details: "प्रत्येक छात्र को प्रति सत्र कम से कम 1 क्लब, 1 प्रतियोगिता और 1 सामाजिक कार्यक्रम में शामिल होना चाहिए।",
            outcome: "छात्र मजबूत पोर्टफोलियो के साथ सर्वांगीण बनते हैं।",
            impact: "माता-पिता समग्र विकास देखते हैं → उच्च विश्वास → प्रवेश में वृद्धि।",
            scenario: "कक्षा 9 की रिया से मिलें। वह शर्मीली थी और शायद ही कभी गतिविधियों में भाग लेती थी। 100% भागीदारी अभियान के बाद, उसने डिबेट क्लब में शामिल हुई, विज्ञान ओलंपियाड में भाग लिया, और वृक्षारोपण अभियान में स्वयंसेवा की। 6 महीने के भीतर, उसका आत्मविश्वास बढ़ा, और वह स्कूल एंबेसडर बन गई। उसके माता-पिता ने अपने नेटवर्क के साथ इस परिवर्तन को साझा किया, जिससे रेफरल के माध्यम से 5 नए प्रवेश मिले।"
          },
          {
            policy: "टाई-अप और सहयोग नीति",
            program: "ग्लोबल पार्टनर्स वीक",
            details: "विश्वविद्यालयों, एनजीओ और उद्योगों को एमओयू और सहयोगी परियोजनाओं के लिए आमंत्रित करें।",
            outcome: "छात्रों के लिए अधिक एक्सपोजर, छात्रवृत्ति और इंटर्नशिप के अवसर।",
            impact: "स्कूल 'वैश्विक रूप से जुड़े हुए' के रूप में पहचाना जाता है → महत्वाकांक्षी माता-पिता को आकर्षित करता है।",
            scenario: "ग्रीनफील्ड स्कूल ने MIT ओपनकोर्सवेयर और स्थानीय टेक कंपनियों के साथ साझेदारी की। ग्लोबल पार्टनर्स वीक के दौरान, छात्रों ने उद्योग विशेषज्ञों द्वारा कार्यशालाओं में भाग लिया, और 3 छात्रों ने कोडिंग इंटर्नशिप जीती। स्थानीय मीडिया ने इवेंट को कवर किया, और स्कूल की वेबसाइट ट्रैफिक 300% बढ़ गया। अगले साल, प्रवेश में 40% की वृद्धि हुई।"
          }
          // ... more items would follow similar pattern
        ]
      },
      programs: {
        title: "कार्यक्रम (विस्तृत निष्पादन)",
        items: [
          {
            name: "स्कूल में AI कार्यक्रम",
            activities: [
              "AI क्लब → रोबोटिक्स, कोडिंग, जेनरेटिव AI में छात्र परियोजनाएं",
              "व्यक्तिगत शिक्षा → AI-संचालित अनुकूली परीक्षण और अध्ययन योजनाएं",
              "AI शिक्षक → अभ्यास और संदेह समाधान के लिए वर्चुअल सहायक",
              "शिक्षकों के लिए AI उपकरण → पाठ योजना, ग्रेडिंग, कक्षा विश्लेषण",
              "कल्याण के लिए AI → तनाव विश्लेषण, ध्यान और मूड संतुलन के लिए ऐप्स"
            ],
            outcome: "छात्र भविष्य के लिए तैयार तकनीकी नेता बनते हैं। शिक्षकों का कार्यभार कम होता है।",
            impact: "माता-पिता महसूस करते हैं कि स्कूल समय से आगे है। तकनीक-संचालित परिवारों को आकर्षित करता है → प्रवेश में वृद्धि। 'AI-फर्स्ट कैंपस' के रूप में स्कूल ब्रांडिंग।",
            scenario: "फ्यूचर टेक स्कूल में, कक्षा 8 के छात्र व्यक्तिगत अध्ययन योजनाएं बनाने के लिए AI उपकरणों का उपयोग करते हैं। गणित में संघर्ष करने वाली अदिति ने एक AI ट्यूटर का उपयोग किया जो उसकी सीखने की गति के अनुकूल था। 3 महीने में उसके ग्रेड C से A में सुधर गए।"
          }
          // ... more items would follow
        ]
      },
      admissionPolicies: {
        title: "रणनीतिक प्रवेश नीतियां",
        subtitle: "मनोविज्ञान-संचालित नीतियां और कार्यक्रम",
        policies: [
          {
            name: "आकांक्षी छात्रवृत्ति नीति",
            insight: "माता-पिता छात्रवृत्ति की ओर दृढ़ता से आकर्षित होते हैं क्योंकि वे आशा पैदा करते हैं और वित्तीय दबाव को कम करते हैं।",
            design: [
              "वार्षिक स्कूल छात्रवृत्ति परीक्षा आयोजित करें (बाहरी छात्रों के लिए भी खुला)",
              "छात्रवृत्ति तब तक जारी रहती है जब तक छात्र पात्रता बनाए रखता है",
              "विभिन्न श्रेणियां बनाएं: मेरिट-आधारित, प्रतिभा-आधारित (कला, कोडिंग, संगीत), और सामाजिक प्रभाव-आधारित"
            ],
            effect: "प्रतिष्ठा बनाता है और स्कूल को एक प्रतिभा चुंबक जैसा दिखाता है।",
            scenario: "ब्राइट माइंड्स स्कूल ने 500 बाहरी छात्रों को आकर्षित करने वाली एक खुली छात्रवृत्ति परीक्षा शुरू की। 50 ने छात्रवृत्ति जीती और स्कूल में शामिल हुए। परीक्षा ने समुदाय में चर्चा पैदा की।"
          }
          // ... more items would follow
        ],
        programs: [],
        summary: []
      }
    }
  };

  const pages = [
    { id: 'cover', title: 'Cover' },
    { id: 'policies', title: 'Policy Framework' },
    { id: 'programs', title: 'Programs' },
    { id: 'admission', title: 'Strategic Admissions' }
  ];

  const handlePageChange = (newPage: number) => {
    if (newPage >= 0 && newPage < pages.length && !isFlipping) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(newPage);
        setIsFlipping(false);
      }, 600);
    }
  };

  const downloadAllPages = async () => {
    toast.loading('Preparing your manual for download...');
    
    try {
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });

      for (let i = 0; i < pages.length; i++) {
        setCurrentPage(i);
        await new Promise(resolve => setTimeout(resolve, 500));

        const element = document.getElementById('book-page');
        if (element) {
          const canvas = await html2canvas(element, {
            scale: 2,
            useCORS: true,
            logging: false,
            backgroundColor: '#ffffff'
          });

          const imgData = canvas.toDataURL('image/png');
          const imgWidth = 210;
          const imgHeight = (canvas.height * imgWidth) / canvas.width;

          if (i > 0) pdf.addPage();
          pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
        }
      }

      pdf.save('School-Safety-Standard-Manual.pdf');
      toast.success('Manual downloaded successfully!');
    } catch (error) {
      console.error('Error generating PDF:', error);
      toast.error('Failed to download manual');
    }
  };

  const BrandingFooter = () => (
    <div className="flex items-center justify-center gap-4 py-4 border-t border-purple-200 bg-gradient-to-r from-pink-50 to-purple-50">
      <Button variant="ghost" size="sm" className="gap-2" asChild>
        <a href="https://www.uniford.org" target="_blank" rel="noopener noreferrer">
          <Globe className="h-4 w-4" />
          <span className="text-xs">uniford.org</span>
        </a>
      </Button>
      <Button variant="ghost" size="sm" className="gap-2" asChild>
        <a href="mailto:contact@uniford.org">
          <Mail className="h-4 w-4" />
          <span className="text-xs">contact@uniford.org</span>
        </a>
      </Button>
      <Button variant="ghost" size="sm" className="gap-2" asChild>
        <a href="tel:+1234567890">
          <Phone className="h-4 w-4" />
          <span className="text-xs">+123-456-7890</span>
        </a>
      </Button>
      <Button variant="ghost" size="sm" className="gap-2" asChild>
        <a href="https://linkedin.com/company/uniford" target="_blank" rel="noopener noreferrer">
          <Linkedin className="h-4 w-4" />
          <span className="text-xs">LinkedIn</span>
        </a>
      </Button>
    </div>
  );

  const renderCoverPage = () => (
    <div className="flex items-center justify-center min-h-[600px] bg-gradient-to-br from-pink-100 via-white to-purple-100">
      <img 
        src={coverImage} 
        alt="School Safety & Standard Manual Cover" 
        className="max-w-full max-h-[600px] object-contain rounded-lg shadow-2xl"
      />
    </div>
  );

  const renderPoliciesPage = () => {
    const data = content[language].policies;
    return (
      <div className="space-y-6 p-6">
        <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
          {data.title}
        </h1>
        <p className="text-center text-muted-foreground">
          16 Strategic Policies with Real-World Impact
        </p>
        
        <div className="grid gap-6">
          {data.items.slice(0, 2).map((item, index) => (
            <Card key={index} className="border-2 border-purple-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1 space-y-2">
                    <h3 className="text-xl font-bold text-purple-700">{item.policy}</h3>
                    <div className="bg-pink-50 p-3 rounded-lg">
                      <p className="font-semibold text-pink-700 text-sm">Program: {item.program}</p>
                      <p className="text-sm text-gray-600 mt-1">{item.details}</p>
                    </div>
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <p className="font-semibold text-purple-700 text-sm">Outcome:</p>
                      <p className="text-sm text-gray-600">{item.outcome}</p>
                    </div>
                    <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-3 rounded-lg">
                      <p className="font-semibold text-pink-700 text-sm">Branding Impact:</p>
                      <p className="text-sm text-gray-600">{item.impact}</p>
                    </div>
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                      <p className="font-semibold text-yellow-800 text-sm mb-2">🌟 Real-Life Scenario:</p>
                      <p className="text-sm text-gray-700 italic">{item.scenario}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  };

  const renderProgramsPage = () => {
    const data = content[language].programs;
    return (
      <div className="space-y-6 p-6">
        <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
          {data.title}
        </h1>
        <p className="text-center text-muted-foreground">
          5 Transformational Programs for School Excellence
        </p>
        
        <div className="grid gap-6">
          {data.items.slice(0, 2).map((item, index) => (
            <Card key={index} className="border-2 border-pink-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-pink-700">{item.name}</h3>
                <div className="bg-purple-50 p-4 rounded-lg space-y-2">
                  <p className="font-semibold text-purple-700">Sub-Activities:</p>
                  <ul className="list-disc list-inside space-y-1">
                    {item.activities.map((activity, idx) => (
                      <li key={idx} className="text-sm text-gray-600">{activity}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-pink-50 p-3 rounded-lg">
                  <p className="font-semibold text-pink-700 text-sm">Outcome:</p>
                  <p className="text-sm text-gray-600">{item.outcome}</p>
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-3 rounded-lg">
                  <p className="font-semibold text-purple-700 text-sm">Impact:</p>
                  <p className="text-sm text-gray-600">{item.impact}</p>
                </div>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                  <p className="font-semibold text-blue-800 text-sm mb-2">💡 Real-Life Scenario:</p>
                  <p className="text-sm text-gray-700 italic">{item.scenario}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  };

  const renderAdmissionPage = () => {
    const data = content[language].admissionPolicies;
    return (
      <div className="space-y-6 p-6">
        <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
          {data.title}
        </h1>
        <p className="text-center text-lg font-semibold text-purple-600">{data.subtitle}</p>
        
        <div className="grid gap-6">
          {data.policies.slice(0, 2).map((item, index) => (
            <Card key={index} className="border-2 border-purple-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-purple-700">{item.name}</h3>
                <div className="bg-pink-50 p-3 rounded-lg">
                  <p className="font-semibold text-pink-700 text-sm">Psychology Insight:</p>
                  <p className="text-sm text-gray-600 italic">{item.insight}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg space-y-2">
                  <p className="font-semibold text-purple-700">Design:</p>
                  <ul className="list-disc list-inside space-y-1">
                    {item.design.map((point, idx) => (
                      <li key={idx} className="text-sm text-gray-600">{point}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-3 rounded-lg">
                  <p className="font-semibold text-pink-700 text-sm">Perception Effect:</p>
                  <p className="text-sm text-gray-600">{item.effect}</p>
                </div>
                <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
                  <p className="font-semibold text-green-800 text-sm mb-2">✨ Real-Life Scenario:</p>
                  <p className="text-sm text-gray-700 italic">{item.scenario}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {data.summary.length > 0 && (
          <Card className="bg-gradient-to-br from-pink-100 to-purple-100 border-2 border-purple-300">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-700 mb-4">Strategy Summary</h3>
              <ul className="space-y-2">
                {data.summary.map((point, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-pink-600 font-bold">→</span>
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}
      </div>
    );
  };

  const renderCurrentPage = () => {
    switch (pages[currentPage].id) {
      case 'cover':
        return renderCoverPage();
      case 'policies':
        return renderPoliciesPage();
      case 'programs':
        return renderProgramsPage();
      case 'admission':
        return renderAdmissionPage();
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header Controls */}
        <div className="mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            School Safety & Standard Manual
          </h1>
          <div className="flex gap-3">
            <Button
              variant="outline"
              className="gap-2 border-purple-300 hover:bg-purple-50"
              onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
            >
              <Languages className="h-4 w-4" />
              {language === 'en' ? 'हिंदी' : 'English'}
            </Button>
            <Button
              className="gap-2 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700"
              onClick={downloadAllPages}
            >
              <Download className="h-4 w-4" />
              Download Manual
            </Button>
          </div>
        </div>

        {/* Book Container with 3D Effect */}
        <div className="relative perspective-1000">
          <Card 
            id="book-page"
            ref={bookRef}
            className={`
              min-h-[600px] shadow-2xl border-4 border-purple-200
              transition-all duration-600 transform-gpu
              ${isFlipping ? 'rotate-y-90 opacity-0' : 'rotate-y-0 opacity-100'}
            `}
            style={{
              transformStyle: 'preserve-3d',
            }}
          >
            <CardContent className="p-0">
              {renderCurrentPage()}
              <BrandingFooter />
            </CardContent>
          </Card>
        </div>

        {/* Navigation Controls */}
        <div className="mt-8 flex items-center justify-between">
          <Button
            variant="outline"
            className="gap-2 border-purple-300 hover:bg-purple-50"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 0 || isFlipping}
          >
            <ChevronLeft className="h-5 w-5" />
            Previous
          </Button>

          <div className="flex items-center gap-2">
            {pages.map((page, index) => (
              <Button
                key={page.id}
                variant={currentPage === index ? "default" : "outline"}
                size="sm"
                className={currentPage === index ? "bg-gradient-to-r from-pink-600 to-purple-600" : "border-purple-200"}
                onClick={() => handlePageChange(index)}
                disabled={isFlipping}
              >
                {index + 1}
              </Button>
            ))}
          </div>

          <Button
            variant="outline"
            className="gap-2 border-purple-300 hover:bg-purple-50"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === pages.length - 1 || isFlipping}
          >
            Next
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-4">
          Page {currentPage + 1} of {pages.length} - {pages[currentPage].title}
        </p>
      </div>

      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .rotate-y-90 {
          transform: rotateY(90deg);
        }
        
        .rotate-y-0 {
          transform: rotateY(0deg);
        }
        
        @keyframes pageFlip {
          0% {
            transform: rotateY(0deg);
          }
          50% {
            transform: rotateY(90deg);
          }
          100% {
            transform: rotateY(0deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Standard;
