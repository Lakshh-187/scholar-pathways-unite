import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Card } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, Download, Globe, Mail, Phone, Linkedin, FileText, HelpCircle, BookOpen, Lightbulb, Users, Award, Target, CheckCircle, Sparkles } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import coverImage from '@/assets/herhava-manual-cover.jpeg';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const HerHaVaManual = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [language, setLanguage] = useState<'en' | 'hi'>('en');
  const [isFlipping, setIsFlipping] = useState(false);
  const bookRef = useRef<HTMLDivElement>(null);

  const realLifeScenarios = {
    programs: {
      title: "Meet Priya's Story",
      content: "Priya, a 3rd-year college student from a small town, always wanted to work in corporate HR but felt her resume was empty. Through Her-HaVa's POSH certification program, she learned about workplace safety laws, conducted mock training sessions, and earned UTHA-recognized certification. Today, she works as a POSH trainer for 3 companies and earns ₹15,000/month while still completing her degree. Her confidence and career path completely transformed."
    },
    recognition: {
      title: "Anya's Robot Recognition",
      content: "Anya loves making small robots at home. She learns by herself from YouTube, builds 3 amazing projects, but has no proof of her skills. Her school friends love her robots, but she can't join competitions or get opportunities. Through UTHA recognition, Anya submitted her projects, got officially certified as 'Skilled in Robotics and Problem-Solving', and was invited to a national science competition. Now colleges and organizations recognize her talent with official proof."
    },
    recommendations: {
      title: "Sneha's Content Journey",
      content: "Sneha was shy and had no social media presence. She joined the Content Creator Decoder program, learned about storytelling, audience engagement, and platform strategies. Within 6 months, she started a YouTube channel on study tips, gained 10K followers, and even started earning through brand collaborations. The program didn't just teach her skills—it gave her confidence and a voice."
    },
    portal: {
      title: "Rahul's Opportunity Discovery",
      content: "Rahul didn't know about fellowships, internships, or global competitions. He was just studying for exams. Through the Her-HaVa Opportunity Portal, he discovered a UN Youth Fellowship he never knew existed, applied, got selected, and worked on a global sustainability project. That one opportunity from the portal changed his entire career trajectory and gave him international exposure."
    }
  };

  const content = {
    en: {
      title: "HER-HAVA Incubation Cell",
      subtitle: "Scholar's Complete Orientation Manual",
      pages: [
        // Cover Page
        {
          title: "",
          isCover: true,
          content: []
        },
        // Table of Contents
        {
          title: "📑 Table of Contents",
          content: [
            { heading: "Welcome to Her-HaVa", text: "Your journey to becoming a globally recognized scholar starts here", icon: "✨" },
            { heading: "Chapter 1: Programs Offered", text: "Internationally recognized certifications that open career doors", icon: "🎓" },
            { heading: "Chapter 2: Recognition by UTHA", text: "Get your skills officially validated and certified", icon: "🌟" },
            { heading: "Chapter 3: Additional Recommendations", text: "Optional growth tracks for holistic development", icon: "🌱" },
            { heading: "Chapter 4: Opportunity Portal", text: "Your gateway to global opportunities", icon: "🌐" },
            { heading: "Chapter 5: Complete FAQ Guide", text: "All your questions answered in detail", icon: "🌸" },
            { heading: "Contact & Support", text: "We're always here to help you succeed", icon: "💝" }
          ],
          faqs: []
        },
        // Chapter 1: Programs
        {
          title: "🎓 Chapter 1: Programs Offered",
          content: [
            { 
              heading: "Why Her-HaVa Programs Are Life-Changing", 
              text: "Our programs are not just certifications—they are career pathways designed around government-mandated compliance areas with real job designations. Every program connects you to actual roles in organizations, government bodies, and global networks.",
              icon: "🎯"
            },
            { 
              heading: "What Makes These Programs Special?", 
              text: "✓ Internationally Recognized by UTHA\n✓ Government-Mandated Compliance Areas\n✓ Real Career Designations (Trainer, Audit Officer, Board Member)\n✓ Flexible Learning - No Daily Classes\n✓ Work Alongside Studies or Hobbies\n✓ Practical Assignments & Real-World Experience",
              icon: "⭐"
            },
            { 
              heading: "Programs We Offer", 
              text: "1️⃣ POSH (Prevention of Sexual Harassment) - Become a workplace safety expert\n2️⃣ POCSO (Child Protection & Safety) - Protect children and train educators\n3️⃣ Cyber & Data Privacy Trainer - Master digital security laws\n4️⃣ CSR & ESG Specialist - Lead sustainability initiatives\n5️⃣ Intellectual Property Expert - Protect innovations and ideas\n6️⃣ Policy & Audit Expert - Shape organizational policies",
              icon: "📚"
            },
            { 
              heading: "Career Opportunities After Completion", 
              text: "• Trainer & Consultant (₹15,000 - ₹50,000/month)\n• Compliance Officer in Corporates\n• Committee Member in Schools/Organizations\n• Board Member & Advisor\n• Freelance Audit & Policy Expert\n• Government Project Roles\n• NGO & CSR Leadership Positions",
              icon: "💼"
            },
            { 
              heading: "Double Safety Net Philosophy", 
              text: "Knowledge empowers your journey + Certification secures your career. You don't just learn—you gain official recognition that opens doors everywhere.",
              icon: "🛡️"
            }
          ],
          scenario: realLifeScenarios.programs,
          faqs: [
            { 
              q: "What kind of programs does Her–HaVa offer?", 
              a: "We provide internationally recognized certification programs validated by UTHA. These programs focus on government-mandated compliance areas like POSH, POCSO, CSR, Cyber Laws, IP Protection, and Policy Auditing. They're designed to make you job-ready with real designations like Trainer, Audit Officer, Committee Member, and Board Member." 
            },
            { 
              q: "Why are these programs special compared to regular online courses?", 
              a: "Unlike generic courses, Her-HaVa programs are:\n• Directly linked to legal compliance requirements in India\n• Recognized internationally through UTHA\n• Designed with practical assignments and real-world applications\n• Connected to actual job opportunities through our network\n• Backed by mentorship and career support\n• Flexible enough to do alongside studies without daily classes" 
            },
            { 
              q: "What is the career scope of these programs?", 
              a: "Massive! Every program connects to roles that organizations NEED to fill by law or policy:\n• POSH trainers are mandatory in all companies with 10+ employees\n• POCSO experts are needed in schools and child-focused NGOs\n• CSR specialists are required for corporate compliance\n• Cyber law experts are in high demand with digital transformation\n• These aren't just certificates—they're career pathways with real income potential (₹15K-50K/month)" 
            },
            { 
              q: "How much time do I need to commit daily?", 
              a: "Zero daily commitment required! These are self-paced programs. Some scholars dedicate 1-2 hours weekly, others do more when free. There are no daily classes or fixed schedules. You can pursue this alongside college, work, or other commitments. The only requirement is completing your chosen program and submitting work to UTHA for certification." 
            },
            { 
              q: "Do I need prior knowledge or specific educational background?", 
              a: "No prior knowledge needed! These programs are designed for ANY student from ANY stream (Science, Commerce, Arts, Engineering, Medical, etc.) and ANY background. Whether you're in 11th grade or pursuing a PhD, these programs are accessible and valuable. We provide all resources and step-by-step guidance." 
            },
            { 
              q: "What's the difference between self-learning (₹1500) and full program (₹28,000)?", 
              a: "Self-Learning (₹1500): You get resources, frameworks, assignments, and certification upon submission. You learn independently.\n\nFull Program (₹28,000): You get everything above PLUS recorded lectures, live doubt sessions, mentor guidance, internship support, and personalized career counseling.\n\nBoth lead to the same UTHA-recognized certification. Choose based on your learning style and budget. Financial aid available through Her-HaVa." 
            },
            { 
              q: "Can I really become a trainer or board member through these programs?", 
              a: "Absolutely YES! These are official compliance designations. For example:\n• After POSH certification, you can legally conduct workplace harassment training\n• After POCSO certification, you can train teachers and school committees\n• Companies, schools, and NGOs actively seek certified professionals\n• We provide ready-to-use templates, frameworks, and licensing support\n• Our career network connects you with organizations looking for certified professionals" 
            },
            { 
              q: "Is this worth it if I'm still studying?", 
              a: "100% worth it! This is your safety net. While you study for exams, you're also building:\n• A certification that gives you career security\n• Practical skills that make your resume stand out\n• Income opportunities you can start immediately\n• Professional network and experience\n• Confidence and real-world exposure\n\nMany scholars start earning ₹15K-25K/month while still in college!" 
            }
          ]
        },
        // Recognition Chapter
        {
          title: "🌟 Chapter 2: Recognition by UTHA",
          content: [
            { 
              heading: "The Power of Official Recognition", 
              text: "Imagine having amazing skills but no one believes you because you have no certificate. That's the reality for millions of self-learners, makers, and creators. Her-HaVa + UTHA changes this by giving you official international recognition for your skills, projects, and achievements—even if you learned completely on your own.",
              icon: "✨"
            },
            { 
              heading: "How Recognition Works: Simple 4-Step Process", 
              text: "Step 1: LEARN - Use Her-HaVa resources, open-source platforms, or your own exploration\n\nStep 2: IMPLEMENT - Apply knowledge through projects, assignments, or practical work\n\nStep 3: SUBMIT - Send your work to UTHA for expert review and validation\n\nStep 4: GET CERTIFIED - Receive official international recognition and accreditation",
              icon: "🎯"
            },
            { 
              heading: "What Can You Submit for Recognition?", 
              text: "• Completed Her-HaVa program assignments\n• Personal projects you built independently (robots, apps, designs, research)\n• Open-source contributions (GitHub, Wikipedia, community projects)\n• Creative work (videos, articles, social campaigns)\n• Practical achievements in your field of interest\n• Self-learned skills with proof of implementation",
              icon: "📤"
            },
            { 
              heading: "What You Receive After Recognition", 
              text: "✓ International Certification recognized by UTHA globally\n✓ Official Accreditation that adds massive credibility\n✓ Digital Badge for LinkedIn, resume, and portfolio\n✓ Letter of Recognition from Her-HaVa\n✓ Access to Her-HaVa Career Network\n✓ Visibility to organizations seeking certified professionals\n✓ Permanent record in UTHA database",
              icon: "🏆"
            },
            { 
              heading: "Why This Matters - The Hidden Talent Problem", 
              text: "Problem: Millions of students have skills but face:\n• No official recognition or certification\n• No platform to showcase projects professionally\n• No connection to organizations that value their skills\n• Opportunities lost because \"no proof\" of abilities\n\nSolution: Her-HaVa + UTHA Recognition ensures your hidden talents don't go unnoticed. Your efforts become officially recognized achievements that open real doors.",
              icon: "💡"
            }
          ],
          scenario: realLifeScenarios.recognition,
          faqs: [
            { 
              q: "What does 'Recognized by UTHA' actually mean?", 
              a: "UTHA (Uniford Talent Hunt Alliance) is an international body that validates and accredits skills, projects, and achievements. When UTHA recognizes your work, it means:\n• Your skills are officially certified at an international level\n• Your projects are validated by expert reviewers\n• Your certification is recognized by partnered organizations globally\n• You have proof that stands in professional settings, competitions, and career opportunities\n\nThink of UTHA like an international quality stamp that says: 'This person's skills and work have been verified and certified.'" 
            },
            { 
              q: "I've built projects on my own. Can I still get recognized without taking a program?", 
              a: "YES! This is exactly what Her-HaVa Recognition is for. If you've:\n• Built apps, robots, designs, or research projects\n• Contributed to open-source communities\n• Created content, campaigns, or social impact projects\n• Self-learned skills through YouTube, books, or practice\n\nYou can submit your work directly to UTHA for review. If experts validate your skills, you'll receive official certification—even if you never took a formal course. This is your chance to get credit for self-initiated learning!" 
            },
            { 
              q: "How does the submission and review process work?", 
              a: "Step-by-step process:\n1. You prepare your submission: project documentation, code, videos, reports, or proof of work\n2. Submit through Her-HaVa portal with a description of what you learned and built\n3. UTHA expert reviewers evaluate your submission (usually takes 2-4 weeks)\n4. Reviewers assess: skill level, implementation quality, effort, and impact\n5. If approved, you receive official certification, digital badge, and recognition letter\n6. Your profile is added to UTHA's recognized scholars database\n\nYou'll get feedback regardless of outcome, so it's a learning experience either way!" 
            },
            { 
              q: "What if my submission is rejected?", 
              a: "Rejection is rare and always comes with constructive feedback. If your submission needs improvement, reviewers will tell you exactly what to work on. You can:\n• Improve your project based on feedback\n• Resubmit after making enhancements\n• Get mentor guidance from Her-HaVa to strengthen your work\n\nRemember: Even a 'not yet' is progress. You're getting expert feedback that helps you grow. Many scholars improve and get recognized on second submission!" 
            },
            { 
              q: "Is there a fee for recognition and submission?", 
              a: "The submission review process is FREE for Her-HaVa scholars who are enrolled in programs.\n\nFor independent submissions (not part of a program), there's a minimal processing fee of ₹500-1000 to cover expert review costs.\n\nFinancial aid is available through Her-HaVa for deserving candidates who cannot afford fees." 
            },
            { 
              q: "How will recognition actually help my career?", 
              a: "Recognition helps in multiple ways:\n\n📄 Resume & Portfolio: Official certification makes your resume stand out. Companies trust UTHA-validated skills.\n\n🌐 LinkedIn Profile: Digital badge shows professionalism and verified skills\n\n🎯 Job Applications: Many employers specifically look for certified professionals\n\n🤝 Network Access: Connect with Her-HaVa career network and partnered organizations\n\n🏆 Competitions: Use certification to qualify for fellowships, competitions, scholarships\n\n💼 Freelancing: Clients trust certified professionals more = higher rates\n\nReal example: Certified POSH trainers earn ₹15K-50K/month because companies trust UTHA-recognized certification." 
            },
            { 
              q: "Can I showcase my UTHA recognition internationally?", 
              a: "Absolutely! UTHA recognition is designed for global credibility:\n• Certificates are in English with international formatting\n• Digital badges can be added to LinkedIn, GitHub, and global platforms\n• Recognition is accepted by UTHA partner organizations worldwide\n• The certification follows international standards for skill validation\n\nWhether you're applying for opportunities in India, USA, Europe, or anywhere else, UTHA recognition holds value." 
            }
          ]
        },
        // Recommendations Chapter
        {
          title: "🌱 Chapter 3: Additional Recommendations",
          content: [
            { 
              heading: "Optional Growth Tracks for Holistic Development", 
              text: "Her-HaVa believes in complete personal growth, not just certifications. These optional recommendations help you explore passions, develop life skills, and discover new interests—all at your own pace with full mentor support.",
              icon: "🌟"
            },
            { 
              heading: "1️⃣ Wellbeing Decoder Author Program", 
              text: "What You Learn:\n• Mind & Body Science: Understand subconscious thoughts, energy systems, body types\n• Universal Laws & Chemistry: How the world works, cause-effect relationships\n• Life Skills Mastery: Mindset, procrastination management, focus, motivation\n• Productivity Science: Sleep, nutrition, exercise impact on performance\n• Emotional Intelligence: Self-awareness, stress management, resilience\n\nWhy It's Valuable:\nBefore achieving anything, you need to understand yourself. This program gives you tools to:\n• Make better decisions in life and career\n• Develop habits that lead to success\n• Understand your strengths and work on weaknesses\n• Build mental and emotional strength\n• Live a balanced, healthy, productive life",
              icon: "🧘"
            },
            { 
              heading: "2️⃣ Content Creator Decoder Program", 
              text: "What You Learn:\n• Platform Mastery: YouTube, Instagram, LinkedIn, Twitter strategies\n• Storytelling Techniques: Create engaging, meaningful content\n• Audience Building: Understand viewers, engagement, growth tactics\n• Video/Written Content Creation: Technical and creative skills\n• Personal Branding: Build your unique voice and identity\n\nWhy It's Valuable:\nEven if you don't want to be a full-time creator, these skills help you:\n• Communicate confidently and clearly\n• Express yourself professionally\n• Build a personal brand that opens opportunities\n• Document your journey and projects\n• Connect with like-minded people globally\n\nMany scholars use these skills to showcase their projects and land opportunities!",
              icon: "📱"
            },
            { 
              heading: "3️⃣ Community Initiative Leadership", 
              text: "What You Do:\n• Start your own community project (environment, education, health, awareness)\n• Lead local or global causes you care about\n• Organize campaigns, drives, and social impact activities\n• Collaborate with NGOs, schools, and community groups\n• Document impact and create change reports\n\nWhy It's Valuable:\n• Develops real leadership skills\n• Teaches problem-solving and project management\n• Builds empathy and social responsibility\n• Looks amazing on resume and applications\n• Creates actual positive impact in society\n• Mentors guide you through planning and execution",
              icon: "🤝"
            },
            { 
              heading: "Are These Mandatory? NO!", 
              text: "These recommendations are 100% OPTIONAL. You only need to complete your main Her-HaVa program and submit to UTHA.\n\nBUT, if you have time and interest, these programs add tremendous value to your:\n• Personal growth and self-understanding\n• Communication and leadership abilities\n• Portfolio and project diversity\n• Life skills and confidence\n• Career readiness and opportunities\n\nChoose what interests you. Skip what doesn't. There's no pressure—only possibilities!",
              icon: "🎯"
            }
          ],
          scenario: realLifeScenarios.recommendations,
          faqs: [
            { 
              q: "Are these recommendations mandatory?", 
              a: "No, absolutely not! These are completely optional. Your main commitment is completing your chosen Her-HaVa program (like POSH, POCSO, CSR, etc.) and submitting it to UTHA for recognition.\n\nRecommendations are extras—like bonus chapters in a book. Take them if they interest you, skip them if they don't. No penalty, no pressure. They're here because they add value, not because they're required." 
            },
            { 
              q: "What is the Wellbeing Decoder Author program exactly?", 
              a: "This program helps you understand yourself at a deeper level:\n\n🧠 Mind Science: How your subconscious affects decisions, habits, and success\n⚡ Energy & Body Types: Understanding your unique physical and mental makeup\n🌍 Universal Laws: Cause-effect, manifestation, mindset, and reality creation\n📈 Productivity: Sleep, nutrition, exercise impact on performance\n💪 Life Skills: Dealing with procrastination, building focus, staying motivated\n\nThink of it as a 'User Manual for Yourself.' It doesn't give you a job—it gives you the foundation to succeed in any path you choose by understanding how you work best." 
            },
            { 
              q: "What is the Content Creator Decoder program?", 
              a: "This program teaches you how to create and grow on digital platforms:\n\n🎥 Content Creation: Making videos, posts, stories that engage and inspire\n📱 Platform Strategy: YouTube, Instagram, LinkedIn, Twitter best practices\n✍️ Storytelling: Crafting narratives that connect with audiences\n🎯 Audience Building: Understanding viewers, engagement, growth tactics\n💡 Personal Branding: Developing your unique voice and identity\n\nWhy it's useful even if you're not a 'content creator':\n• Improves communication and presentation skills\n• Helps you showcase projects professionally\n• Builds confidence in expressing yourself\n• Opens opportunities through social media presence\n• Teaches digital literacy and online reputation management\n\nMany scholars use these skills to document their projects, share their learning journey, and attract opportunities!" 
            },
            { 
              q: "What is the Community Initiative program?", 
              a: "This is where you start your own project to create social impact:\n\n🌱 Examples: Tree plantation drive, education for underprivileged kids, awareness campaigns, cleanliness drives, skill workshops, menstrual health awareness, cyber safety in schools\n\n💡 You get:\n• Mentorship to plan and execute your initiative\n• Guidance on partnering with NGOs, schools, local groups\n• Support in documenting impact and creating reports\n• Recognition for your social contribution\n\nWhy it's powerful:\n• Teaches real leadership and project management\n• Builds problem-solving and teamwork skills\n• Creates actual positive change in society\n• Looks impressive on resumes and college applications\n• Develops empathy and social responsibility\n\nYou can start small (weekend project) or go big (months-long campaign). Your pace, your passion!" 
            },
            { 
              q: "How much time do these recommendations take?", 
              a: "Completely flexible! Here's the reality:\n\n⏰ Wellbeing Decoder: 30-60 minutes weekly reading and self-reflection\n📱 Content Creator Decoder: 1-3 hours weekly creating content at your pace\n🤝 Initiative: Start with just 1-2 hours monthly (plan a small activity)\n\nThese are not time-intensive programs with classes and deadlines. They're exploratory learning paths that fit into your free time. Some scholars spend 5 hours a week, others 1 hour a month. Both are perfectly fine!\n\nThe goal is growth, not pressure." 
            },
            { 
              q: "Will I get recognition or certificates for these recommendations?", 
              a: "Yes, but it's different from main programs:\n\n✅ Wellbeing Decoder: Certificate of completion + acknowledgment letter\n✅ Content Creator Decoder: Portfolio review + feedback from mentors\n✅ Initiative: Impact certificate + project documentation support\n\nThese aren't UTHA-certified like main programs, but they are officially acknowledged by Her-HaVa. You can showcase them in your portfolio, resume, and LinkedIn.\n\nMore importantly, you gain real skills and experiences that speak for themselves in interviews and opportunities." 
            },
            { 
              q: "Who will guide me in these recommendations?", 
              a: "Her-HaVa provides full mentor support:\n\n👥 Monthly group sessions for each recommendation track\n💬 Mentors available for doubts and guidance via WhatsApp/email\n📚 Resources, frameworks, and templates provided\n🎯 Personalized feedback on your projects and progress\n🤝 Community of scholars working on similar tracks\n\nYou're never alone. Even though these are optional, we support you fully if you choose to explore them!" 
            },
            { 
              q: "Can I do all three recommendations together?", 
              a: "You CAN, but we recommend choosing based on your interests:\n\n💡 If you want self-improvement → Start with Wellbeing Decoder\n📱 If you love creating and sharing → Try Content Creator Decoder\n🤝 If you want to make social impact → Launch an Initiative\n\nMany scholars start with one, see how it feels, then add others later. There's no rush. These recommendations are lifelong skills—you can explore them over months or years at your own pace.\n\nQuality > Quantity. Better to deeply explore one than rush through all three." 
            }
          ]
        },
        // Portal Chapter
        {
          title: "🌐 Chapter 4: Her-HaVa Opportunity Portal",
          content: [
            { 
              heading: "Your Gateway to Global Opportunities", 
              text: "The Her-HaVa Opportunity Portal is like a treasure map of possibilities. The philosophy is simple: AWARENESS IS POWER. Most students miss amazing opportunities simply because they don't know they exist. This portal changes that by bringing all opportunities to one place.",
              icon: "🗺️"
            },
            { 
              heading: "What's Inside the Portal?", 
              text: "🎓 Free Internships Worldwide\nGain real-world experience without paying fees. From tech to social work, find internships in every field.\n\n🏆 Programs & Fellowships\nGoogle STEP, Microsoft Learn, UN Youth Programs, Government Fellowships, Research Opportunities\n\n💰 Scholarships & Financial Aid\nFull-ride scholarships, partial funding, women in tech scholarships, rural student programs\n\n🌍 Global Collaborations\nWork with international teams on projects. Virtual internships, research partnerships, innovation challenges\n\n🎯 Competitions & Hackathons\nCoding competitions, innovation challenges, policy writing contests, design thinking competitions\n\n💻 Open Source Contributions\nGitHub projects, Wikipedia editing, open-source tools, community platforms\n\n👥 Best LinkedIn Profiles & Social Pages\nLearn from top achievers. See what skills, projects, and experiences get noticed by recruiters\n\n📚 Free Learning Resources\nCoursera, edX, MIT OpenCourseWare, Harvard CS50, and thousands more resources",
              icon: "📦"
            },
            { 
              heading: "How to Use the Portal Effectively", 
              text: "Step 1: EXPLORE REGULARLY - Set aside 30 minutes weekly to browse opportunities\n\nStep 2: BOOKMARK INTERESTS - Save opportunities that align with your skills and goals\n\nStep 3: LEARN FROM EXAMPLES - Study profiles and projects of successful scholars\n\nStep 4: APPLY CONSISTENTLY - Don't wait for 'perfect skills.' Apply and learn along the way\n\nStep 5: TRACK YOUR JOURNEY - Maintain a record of applications, projects, and growth\n\nStep 6: SHARE DISCOVERIES - Help fellow scholars by sharing opportunities you find",
              icon: "🎯"
            },
            { 
              heading: "Why Awareness Changes Everything", 
              text: "Real Truth: Most students are capable of amazing things. What holds them back is not lack of ability—it's lack of awareness.\n\n❌ Without Awareness:\n• You don't apply because you don't know opportunities exist\n• You think 'I'm not good enough' without seeing what others actually have\n• You stay in your comfort zone because you don't see possibilities\n\n✅ With Awareness:\n• You discover opportunities you never imagined existed\n• You see that 'top performers' started just like you\n• You realize your skills have value and platforms to shine\n• You connect with global communities and collaborations\n• Every exploration opens new doors\n\nThe Portal is your window to the world. The more you explore, the more doors open.",
              icon: "💡"
            },
            { 
              heading: "Portal Access & Updates", 
              text: "✓ All Her-HaVa scholars get lifetime portal access\n✓ New opportunities added weekly\n✓ Personalized recommendations based on your interests\n✓ Email alerts for opportunities matching your profile\n✓ Community forum to discuss and collaborate\n✓ Success stories from scholars who got opportunities through the portal",
              icon: "🔓"
            }
          ],
          scenario: realLifeScenarios.portal,
          faqs: [
            { 
              q: "What exactly is the Her-HaVa Opportunity Portal?", 
              a: "The Opportunity Portal is a curated database of thousands of opportunities for students:\n\n🎓 Internships (free and paid)\n🏆 Fellowships (Google, Microsoft, UN, Government)\n💰 Scholarships (Indian and international)\n🌍 Competitions (hackathons, challenges, contests)\n💻 Open Source Projects (GitHub, community platforms)\n👥 Networking (LinkedIn profiles, social pages to learn from)\n📚 Free Learning Resources (courses, books, tutorials)\n\nInstead of scattered Google searches, everything is in one place, organized, updated weekly, and tailored for students like you.\n\nThink of it as: Google for opportunities + Netflix recommendations + Community guidance, all in one." 
            },
            { 
              q: "Why is 'awareness' so important?", 
              a: "Awareness is THE KEY that changes everything. Here's why:\n\n😔 Most students miss opportunities NOT because they're not good enough, but because they simply don't know opportunities exist.\n\nExample: There are 5000+ fellowships and scholarships active right now in India and globally. How many do you know about? Maybe 5-10?\n\nThe Portal bridges this gap:\n• You discover opportunities you never imagined existed\n• You see what skills companies and organizations actually value\n• You realize your projects and interests align with real programs\n• You stop thinking 'I'm not ready' and start thinking 'Let me try'\n\nAwareness → Action → Opportunities → Growth. It all starts with knowing what's out there!" 
            },
            { 
              q: "How often should I use the portal?", 
              a: "Recommended approach:\n\n⏰ Minimum: 30 minutes weekly to browse new opportunities\n✅ Ideal: 1-2 hours weekly to explore deeply and apply\n\nSet a routine:\n• Every Saturday morning: Check new opportunities\n• Bookmark 3-5 that interest you\n• Apply to at least 1 opportunity per week\n• Study 1 inspiring LinkedIn profile or success story\n\nConsistency matters more than intensity. Even 15 minutes daily of exploration compounds into massive awareness over months.\n\nMany scholars who use the portal regularly report finding 1-2 life-changing opportunities every month!" 
            },
            { 
              q: "I'm not 'good enough' yet. Should I still use the portal?", 
              a: "YES! This mindset is exactly why you NEED the portal.\n\nReality check: You're never 100% ready. No one is.\n\n🎯 The Portal helps you realize:\n• What 'successful' people actually have (hint: often less than you think)\n• That applications don't require perfection\n• Small projects and efforts count as experience\n• Everyone starts somewhere—opportunities exist at every level\n\nAction plan:\n1. Start by exploring, not applying\n2. See what others with similar backgrounds achieved\n3. Identify 1-2 beginner-friendly opportunities\n4. Apply even if you feel 'not ready'\n5. Learn from the application process itself\n\nRemember: Every expert was once a beginner who took action despite doubts. The portal shows you that reality." 
            },
            { 
              q: "Are the opportunities free to apply?", 
              a: "YES! 95% of opportunities in the portal are completely free:\n\n✅ Free Internships (virtual and on-site)\n✅ Free Fellowships (with stipends!)\n✅ Free Scholarships (full-ride and partial)\n✅ Free Competitions (many with prize money)\n✅ Free Learning Resources (courses, books, tutorials)\n\nThe 5% that have fees are clearly marked, and we only list those where:\n• The ROI is clearly worth it\n• Financial aid is available\n• The certification/experience has proven value\n\nHer-HaVa believes in accessible opportunities for all. Money should never be a barrier to growth." 
            },
            { 
              q: "How do I know which opportunities to pursue?", 
              a: "Follow this simple framework:\n\n1️⃣ INTEREST: Does this excite me? Will I enjoy working on it?\n2️⃣ ALIGNMENT: Does it match my current skills or learning goals?\n3️⃣ GROWTH: Will this teach me something valuable?\n4️⃣ IMPACT: Will this help my resume, portfolio, or career?\n5️⃣ FEASIBILITY: Can I realistically commit time to this?\n\nIf 3+ answers are YES → Apply!\n\nAlso remember:\n• Early career: Prioritize learning and experience over 'perfect fit'\n• Don't overthink: Applying itself is a learning experience\n• Failed applications teach you what to improve\n• One 'yes' can change everything\n\nMentors are available to help you choose if you're confused!" 
            },
            { 
              q: "What if I apply to opportunities and get rejected?", 
              a: "Rejection is NORMAL and part of growth! Here's the reality:\n\n📊 Average success rate for fellowships/competitive programs: 3-10%\n✅ This means 90-97% get rejected—including amazing candidates!\n\n💡 Rejection teaches you:\n• What skills to improve\n• How to write better applications\n• What experiences to add to your profile\n• Resilience and persistence\n\nSuccess formula:\n10 applications → 7 rejections, 2 maybes, 1 YES\nThat 1 YES can change your entire trajectory!\n\nHer-HaVa provides:\n• Application review and improvement guidance\n• Mentorship to strengthen your profile\n• Community support and encouragement\n• Celebration of effort, not just outcomes\n\nKeep applying. Keep improving. Success is inevitable with persistence." 
            },
            { 
              q: "Can I suggest opportunities to add to the portal?", 
              a: "ABSOLUTELY YES! We encourage it!\n\nIf you discover an opportunity that's not in the portal:\n\n1. Share it via the portal's 'Suggest Opportunity' form\n2. Provide basic details: name, link, deadline, eligibility\n3. Our team verifies and adds it within 2-3 days\n4. You get credited as 'Suggested by [Your Name]'\n5. Other scholars benefit from your discovery\n\nThis creates a community-powered opportunity database where we all help each other grow.\n\nBonus: Active contributors get featured in monthly newsletters and recognition certificates!" 
            }
          ]
        },
        // FAQ Chapter
        {
          title: "🌸 Chapter 5: Complete FAQ Guide",
          content: [
            { 
              heading: "Daily Commitment & Time Management", 
              text: "❓ Do I need to attend daily classes?\nNO! Her-HaVa is not traditional education. There are no daily classes, no fixed timetables, no mandatory attendance.\n\n❓ How much time do I need daily?\nZero daily requirement! Work at your pace:\n• Some scholars dedicate 1-2 hours weekly\n• Others do 5-10 hours when they have free time\n• Balance with studies, hobbies, or work\n\n❓ Are there deadlines?\nOnly one: Complete your chosen program and submit to UTHA for recognition. Everything else is flexible.",
              icon: "⏰"
            },
            { 
              heading: "Your Scholar Journey", 
              text: "The Her-HaVa journey has 4 simple steps:\n\n1️⃣ ORIENTATION SESSION\nUnderstand programs, incubation model, opportunities, and how everything works. Ask questions and get clarity.\n\n2️⃣ CHOOSE A PROGRAM\nSelect from compliance programs (POSH, POCSO, CSR, Cyber, IP, Policy) based on interest and career goals.\n\n3️⃣ SELF-INITIATED LEARNING\nUse provided resources, open-source platforms, mentor guidance, and your own exploration to complete program.\n\n4️⃣ SUBMISSION & RECOGNITION\nSubmit your work to UTHA → Get certified → Earn international recognition → Access career network",
              icon: "🗺️"
            },
            { 
              heading: "Support & Guidance", 
              text: "❓ What if I don't understand something?\nYou're never alone! We provide:\n• Monthly sessions with program leads and mentors\n• Annual career counseling for future planning\n• WhatsApp/Email support for doubts and guidance\n• Community forum with fellow scholars\n• Continuous mentorship and unconditional support\n\n❓ Who will help me if I get stuck?\nHer-HaVa mentors guide you through:\n• Program selection and planning\n• Learning resources and assignments\n• Submission preparation and review\n• Career planning and opportunities",
              icon: "🤝"
            },
            { 
              heading: "Recognition & Certification", 
              text: "❓ Will I get recognized for my work?\nYES! Recognition is the heart of Her-HaVa.\n• Complete program + submit to UTHA = International Certification\n• Even self-learned skills can be certified\n• Digital badge for LinkedIn and professional profiles\n• Permanent record in UTHA database\n• Access to Her-HaVa career network\n\n❓ Is recognition valuable?\nAbsolutely! UTHA-certified professionals are trusted by:\n• Corporates hiring compliance officers\n• Schools seeking trained educators\n• NGOs looking for project leads\n• Government programs requiring certified experts",
              icon: "🏆"
            },
            { 
              heading: "Eligibility & Accessibility", 
              text: "❓ Is this only for certain students or fields?\nNO! Her-HaVa is for EVERYONE:\n• Any age group (school, college, working, retired)\n• Any academic stream (Science, Arts, Commerce, Engineering, Medical, etc.)\n• Any background (urban, rural, privileged, underserved)\n• Any current situation (student, working, career break, exploring)\n\n❓ Do I need prior knowledge?\nNo prior knowledge needed! Programs provide all resources and step-by-step guidance from basics.",
              icon: "✅"
            },
            { 
              heading: "Financial Support", 
              text: "❓ What if I can't afford program fees?\nHer-HaVa provides financial aid through scholarships and support for deserving candidates who cannot afford fees.\n\nProcess:\n1. Apply for financial aid with your situation\n2. Her-HaVa reviews and approves aid (most are approved)\n3. Get reduced fees or full scholarship\n4. Pay in installments if needed\n\nMoney should never be a barrier. We want to back deserving scholars regardless of financial situation.",
              icon: "💰"
            },
            { 
              heading: "Expectations from Scholars", 
              text: "❓ What is the main expectation from me?\nJust TWO things:\n\n1. Complete your chosen program and submit for UTHA recognition\n2. Take initiative—be curious, explore opportunities, use resources we provide\n\nEverything else (sessions, recommendations, networking) is optional but highly beneficial.\n\n❓ What's the Her-HaVa philosophy?\nIncubation, not hand-holding. We provide:\n• Resources, frameworks, and guidance\n• Mentorship and support\n• Opportunities and network\n\nYou provide:\n• Initiative and curiosity\n• Effort and consistency\n• Application and growth\n\nTogether, we create recognized scholars who are career-ready!",
              icon: "🎯"
            }
          ],
          faqs: [
            { 
              q: "What makes Her-HaVa different from regular online courses?", 
              a: "Her-HaVa is NOT just another course platform. Key differences:\n\n🎓 RECOGNITION-FOCUSED: Not just learning, but official international certification by UTHA\n💼 CAREER-CONNECTED: Programs link directly to real job designations and opportunities\n🤝 MENTORSHIP MODEL: Continuous support, not just recorded videos\n🌍 INCUBATION APPROACH: We back your growth journey, not just sell content\n💰 FINANCIAL AID: Scholarships for deserving scholars, not profit-maximization\n🔓 FLEXIBLE: No daily classes, no deadlines (except submission), fit into your life\n📚 HOLISTIC: Programs + Recommendations + Portal + Network = Complete ecosystem\n\nMost platforms sell courses. Her-HaVa builds careers." 
            },
            { 
              q: "Can I really balance Her-HaVa with my college studies?", 
              a: "YES! That's exactly how it's designed. Reality:\n\n📚 College: Fixed classes, exams, assignments\n🌸 Her-HaVa: Flexible learning, self-paced, no daily commitment\n\nMany scholars do both successfully:\n• Use weekends for Her-HaVa programs\n• Study during college breaks and holidays\n• Integrate learning (Her-HaVa topics as college projects)\n• Balance with 1-2 hours weekly when free\n\nBonus: Her-HaVa skills often HELP college studies:\n• Better research skills\n• Improved presentation abilities\n• Professional documentation\n• Time management and discipline\n\nIt's not 'college vs Her-HaVa'—it's 'college + Her-HaVa = Career security'" 
            },
            { 
              q: "What happens after I complete a program?", 
              a: "Your journey doesn't end—it expands! After completion:\n\n✅ IMMEDIATE:\n• Submit work to UTHA for official recognition\n• Receive international certification and digital badge\n• Added to Her-HaVa recognized scholars database\n• Access to career network and opportunities\n\n📈 SHORT-TERM (1-3 months):\n• Mentorship for job search and applications\n• Ready-to-use templates for professional work\n• Connections with organizations seeking certified professionals\n• Option to become trainer/consultant\n\n🚀 LONG-TERM (6+ months):\n• Ongoing career counseling and guidance\n• Access to advanced programs and specializations\n• Community alumni network for collaborations\n• Continuous support for career growth\n\nOnce a Her-HaVa scholar, always supported!" 
            },
            { 
              q: "How does Her-HaVa help me find actual jobs/opportunities?", 
              a: "Her-HaVa Career Support is multi-layered:\n\n🌐 OPPORTUNITY PORTAL:\nThousands of internships, fellowships, jobs curated and updated weekly\n\n🤝 PARTNER NETWORK:\nPartnerships with schools, NGOs, companies that actively hire certified professionals\n\n📧 PERSONALIZED ALERTS:\nOpportunities matching your skills and interests sent to you\n\n👥 INTRODUCTIONS:\nDirect connections to organizations looking for POSH trainers, compliance officers, etc.\n\n📄 APPLICATION SUPPORT:\nResume review, cover letter help, interview preparation\n\n💼 LICENSING & TEMPLATES:\nReady-to-use materials for starting as freelance trainer/consultant\n\n📈 SUCCESS TRACKING:\nMonthly check-ins to track your applications and career progress\n\nWe don't guarantee jobs (no one can), but we maximize your chances with every possible support." 
            },
            { 
              q: "Is Her-HaVa recognized outside India?", 
              a: "YES! Her-HaVa programs are internationally recognized through UTHA:\n\n🌍 GLOBAL RECOGNITION:\n• UTHA (Uniford Talent Hunt Alliance) has international credibility\n• Certifications follow global standards and formatting\n• Digital badges work on LinkedIn, GitHub, global platforms\n• Partner organizations span multiple countries\n\n✈️ USEFUL FOR:\n• Studying abroad (shows skills beyond academics)\n• International job applications\n• Global fellowships and programs\n• Cross-border remote work opportunities\n• Building international professional network\n\n📜 DOCUMENTATION:\n• Certificates in English with international formatting\n• Official UTHA verification for employers\n• Recognized by partner organizations worldwide\n\nWhether you stay in India or go global, Her-HaVa recognition adds value everywhere." 
            }
          ]
        },
        // Contact Page
        {
          title: "💝 Contact & Support",
          content: [
            { 
              heading: "We're Always Here for You", 
              text: "Her-HaVa believes in unconditional support. Whether you have questions, need guidance, face challenges, or want to celebrate achievements—we're here.",
              icon: "🤗"
            },
            { 
              heading: "How to Reach Us", 
              text: "🌐 Website: www.uniford.in/her-hava\nExplore programs, portal, and resources\n\n📧 Email: support@uniford.in\nFor detailed queries, applications, and support\n\n📱 WhatsApp: +91-XXXXX-XXXXX\nQuick questions and community support\n\n💼 LinkedIn: linkedin.com/company/uniford\nProfessional updates and network\n\n📞 Phone: +91-XXXXX-XXXXX\nCall during office hours (10 AM - 6 PM IST)",
              icon: "📞"
            },
            { 
              heading: "Response Time", 
              text: "📧 Email: 24-48 hours\n📱 WhatsApp: Same day (during office hours)\n📞 Phone: Immediate (office hours)\n🎓 Monthly Sessions: Scheduled and announced in advance",
              icon: "⏱️"
            },
            { 
              heading: "Her-HaVa Promise", 
              text: "We promise to:\n✓ Always respond with empathy and understanding\n✓ Provide clear guidance without judgment\n✓ Support you regardless of your pace or challenges\n✓ Celebrate your efforts and achievements\n✓ Back you unconditionally in your growth journey\n\nYou're not just a scholar—you're family. We genuinely care about your success and wellbeing.",
              icon: "💝"
            },
            { 
              heading: "Partner Organizations", 
              text: "Her-HaVa is backed by:\n🏛️ UNCIF (Uniford Corporate Institute Foundation)\n🌟 UTHA (Uniford Talent Hunt Alliance)\n🎓 UIRAD (Uniford Institute for Rural & Agricultural Development)\n🏫 UICSS (Uniford International Child Safety & Security)\n📚 Stanburg Award - Academic Excellence Recognition\n\nTogether, we create a complete ecosystem for your growth, recognition, and career success.",
              icon: "🤝"
            }
          ],
          faqs: []
        }
      ]
    },
    hi: {
      title: "HER-HAVA इनक्यूबेशन सेल",
      subtitle: "स्कॉलर की पूर्ण ओरिएंटेशन मैनुअल",
      pages: [] // Hindi content can be added similarly
    }
  };

  const currentContent = content[language];
  const totalPages = currentContent.pages.length;

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(currentPage + 1);
        setIsFlipping(false);
      }, 600);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(currentPage - 1);
        setIsFlipping(false);
      }, 600);
    }
  };

  const handleDownload = async () => {
    try {
      toast({
        title: "Preparing Download",
        description: "Generating complete manual PDF...",
      });

      const pdf = new jsPDF('p', 'mm', 'a4');
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();

      for (let i = 0; i < totalPages; i++) {
        const pageElement = document.getElementById(`page-${i}`);
        if (pageElement) {
          const canvas = await html2canvas(pageElement, {
            scale: 2,
            useCORS: true,
            logging: false
          });
          const imgData = canvas.toDataURL('image/png');
          
          if (i > 0) pdf.addPage();
          pdf.addImage(imgData, 'PNG', 0, 0, pageWidth, pageHeight);
        }
      }

      pdf.save(`HerHaVa-Complete-Manual-${language.toUpperCase()}.pdf`);
      
      toast({
        title: "Download Complete!",
        description: "Your complete Her-HaVa Manual has been downloaded.",
      });
    } catch (error) {
      toast({
        title: "Download Failed",
        description: "Please try again or contact support.",
        variant: "destructive",
      });
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'hi' : 'en');
    setCurrentPage(0);
    toast({
      title: "Language Changed",
      description: `Switched to ${language === 'en' ? 'Hindi' : 'English'}`,
    });
  };

  const currentPageData = currentContent.pages[currentPage];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-white">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 text-white shadow-xl">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold flex items-center gap-2">
                <BookOpen className="h-8 w-8" />
                {currentContent.title}
              </h1>
              <p className="text-sm md:text-base text-pink-100">{currentContent.subtitle}</p>
            </div>
            <div className="flex gap-2 flex-wrap">
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
                Download Complete Book
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Book Container with 3D Effect */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto perspective-1000">
          <div 
            ref={bookRef}
            className={`relative transition-all duration-600 ${isFlipping ? 'scale-95 opacity-80' : 'scale-100 opacity-100'}`}
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Book Page */}
            <Card id={`page-${currentPage}`} className="bg-white shadow-2xl border-8 border-pink-200/50 rounded-xl overflow-hidden min-h-[900px] backdrop-blur-sm">
              {currentPageData?.isCover ? (
                // Cover Page
                <div className="relative h-full min-h-[900px] flex items-center justify-center overflow-hidden">
                  <img 
                    src={coverImage} 
                    alt="Her-HaVa Manual Cover" 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
                </div>
              ) : (
                <>
                  {/* Page Header */}
                  <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 text-white p-6">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h2 className="text-3xl md:text-4xl font-bold mb-2">
                          {currentPageData?.title}
                        </h2>
                        <p className="text-sm text-pink-100">
                          Page {currentPage + 1} of {totalPages} • Her-HaVa Scholar Manual 2025
                        </p>
                      </div>
                      <img src="/uncif-logo.png" alt="UNCIF" className="h-16 w-16 object-contain bg-white rounded-full p-2 shadow-lg" />
                    </div>
                  </div>

                  {/* Page Content */}
                  <div className="p-8 md:p-12 space-y-8">
                    {/* Main Content Sections */}
                    {currentPageData?.content.map((section, idx) => (
                      <div key={idx} className="space-y-3 p-6 bg-gradient-to-br from-pink-50 to-purple-50 rounded-lg border-l-4 border-pink-400 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-start gap-3">
                          {section.icon && <span className="text-3xl">{section.icon}</span>}
                          <div className="flex-1">
                            <h3 className="text-xl md:text-2xl font-bold text-pink-700 mb-2">{section.heading}</h3>
                            <p className="text-gray-700 leading-relaxed whitespace-pre-line">{section.text}</p>
                          </div>
                        </div>
                      </div>
                    ))}

                    {/* Real-Life Scenario */}
                    {currentPageData?.scenario && (
                      <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-8 rounded-xl border-2 border-purple-300 shadow-lg">
                        <div className="flex items-center gap-3 mb-4">
                          <Lightbulb className="h-8 w-8 text-purple-600" />
                          <h3 className="text-2xl font-bold text-purple-800">Real-Life Success Story</h3>
                        </div>
                        <h4 className="text-xl font-semibold text-purple-700 mb-3">{currentPageData.scenario.title}</h4>
                        <p className="text-gray-800 leading-relaxed text-lg">{currentPageData.scenario.content}</p>
                      </div>
                    )}

                    {/* FAQ and Attachments */}
                    {currentPageData?.faqs && currentPageData.faqs.length > 0 && (
                      <div className="flex gap-4 flex-wrap">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="default" size="lg" className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white shadow-lg">
                              <HelpCircle className="h-5 w-5 mr-2" />
                              View Detailed FAQs ({currentPageData.faqs.length})
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto">
                            <DialogHeader>
                              <DialogTitle className="text-3xl text-pink-700 flex items-center gap-2">
                                <HelpCircle className="h-8 w-8" />
                                Frequently Asked Questions
                              </DialogTitle>
                              <DialogDescription>
                                Detailed answers to help you understand everything clearly
                              </DialogDescription>
                            </DialogHeader>
                            <div className="space-y-6 mt-6">
                              {currentPageData.faqs.map((faq, idx) => (
                                <div key={idx} className="p-6 bg-gradient-to-br from-pink-50 to-purple-50 rounded-lg border-l-4 border-pink-400 shadow-sm">
                                  <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 w-8 h-8 bg-pink-600 text-white rounded-full flex items-center justify-center font-bold">
                                      {idx + 1}
                                    </div>
                                    <div className="flex-1">
                                      <h4 className="text-lg font-bold text-pink-700 mb-2">{faq.q}</h4>
                                      <p className="text-gray-700 leading-relaxed whitespace-pre-line">{faq.a}</p>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                    )}
                  </div>

                  {/* Page Footer with Branding */}
                  <div className="bg-gradient-to-r from-pink-100 to-purple-100 px-8 py-4 border-t-2 border-pink-200">
                    <div className="flex justify-between items-center flex-wrap gap-4 text-sm">
                      <div className="flex gap-4 flex-wrap">
                        <a href="https://www.uniford.in" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-pink-700 hover:text-pink-900 transition-colors">
                          <Globe className="h-4 w-4" />
                          www.uniford.in
                        </a>
                        <a href="mailto:support@uniford.in" className="flex items-center gap-1 text-pink-700 hover:text-pink-900 transition-colors">
                          <Mail className="h-4 w-4" />
                          support@uniford.in
                        </a>
                        <a href="tel:+91XXXXXXXXXX" className="flex items-center gap-1 text-pink-700 hover:text-pink-900 transition-colors">
                          <Phone className="h-4 w-4" />
                          +91-XXXXX-XXXXX
                        </a>
                        <a href="https://linkedin.com/company/uniford" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-pink-700 hover:text-pink-900 transition-colors">
                          <Linkedin className="h-4 w-4" />
                          LinkedIn
                        </a>
                      </div>
                      <div className="text-pink-600 font-semibold">
                        © 2025 Her-HaVa | UNCIF | UTHA
                      </div>
                    </div>
                  </div>
                </>
              )}
            </Card>

            {/* Navigation Controls */}
            <div className="flex justify-between items-center mt-8 px-4">
              <Button
                onClick={prevPage}
                disabled={currentPage === 0}
                size="lg"
                className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 disabled:opacity-50 shadow-lg"
              >
                <ChevronLeft className="h-6 w-6 mr-2" />
                Previous Page
              </Button>

              <div className="text-center">
                <p className="text-sm text-gray-600 mb-2">Navigate to any page</p>
                <div className="flex gap-2 flex-wrap justify-center max-w-md">
                  {currentContent.pages.map((_, idx) => (
                    <Button
                      key={idx}
                      onClick={() => {
                        setIsFlipping(true);
                        setTimeout(() => {
                          setCurrentPage(idx);
                          setIsFlipping(false);
                        }, 600);
                      }}
                      variant={currentPage === idx ? "default" : "outline"}
                      size="sm"
                      className={currentPage === idx ? "bg-gradient-to-r from-pink-600 to-purple-600" : ""}
                    >
                      {idx + 1}
                    </Button>
                  ))}
                </div>
              </div>

              <Button
                onClick={nextPage}
                disabled={currentPage === totalPages - 1}
                size="lg"
                className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 disabled:opacity-50 shadow-lg"
              >
                Next Page
                <ChevronRight className="h-6 w-6 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Hidden pages for PDF generation */}
      <div className="hidden">
        {currentContent.pages.map((page, idx) => (
          <div key={idx} id={`page-${idx}`} style={{ width: '210mm', minHeight: '297mm', padding: '20mm', backgroundColor: 'white' }}>
            {page.isCover ? (
              <img src={coverImage} alt="Cover" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            ) : (
              <div>
                <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px', color: '#db2777' }}>{page.title}</h1>
                {page.content.map((section, sIdx) => (
                  <div key={sIdx} style={{ marginBottom: '20px' }}>
                    <h2 style={{ fontSize: '18px', fontWeight: 'bold', color: '#9333ea', marginBottom: '10px' }}>{section.heading}</h2>
                    <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#374151' }}>{section.text}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HerHaVaManual;
