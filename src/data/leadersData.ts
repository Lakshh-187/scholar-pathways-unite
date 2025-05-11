
import { Leader, Organization } from '@/types/leaders';

export const leaders: Leader[] = [
  {
    id: 1,
    name: "Dr. Jane Wilson",
    role: "Advisory Board Chair",
    department: "Executive Committee",
    type: "advisor",
    image: "https://i.pravatar.cc/300?img=1",
    location: "San Francisco, USA",
    quote: "Empowering through education is our greatest mission.",
    bio: "Dr. Wilson has over 20 years of experience in educational leadership, focusing on transforming educational institutions through innovative programs and initiatives.",
    achievements: [
      "Established 5 scholarship programs for underprivileged students",
      "Published 15 research papers on educational reform",
      "Keynote speaker at Global Education Summit 2024"
    ],
    education: "PhD in Educational Leadership, Stanford University",
    experience: "Former President at National Education Association",
    expertise: ["Educational Policy", "Strategic Leadership", "Institutional Reform"],
    linkedin: "https://linkedin.com/",
    website: "https://janewilson.edu",
    email: "j.wilson@uniford.org",
    isSpotlighted: true,
    spotlightReason: "Outstanding contribution to the scholarship program redesign",
    coordinates: {
      lat: 37.7749,
      lng: -122.4194
    }
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Volunteer Coordinator",
    department: "Community Outreach",
    type: "volunteer",
    image: "https://i.pravatar.cc/300?img=2",
    location: "Toronto, Canada",
    quote: "Small actions multiplied by many can transform the world.",
    bio: "Michael specializes in community engagement and volunteer management, with a passion for creating impactful service-learning opportunities for students.",
    achievements: [
      "Coordinated over 200 community service events",
      "Built partnerships with 50+ local organizations",
      "Recipient of Community Impact Award 2023"
    ],
    education: "MS in Nonprofit Management, University of Toronto",
    experience: "5 years at Global Volunteer Initiative",
    expertise: ["Volunteer Management", "Community Engagement", "Event Planning"],
    linkedin: "https://linkedin.com/",
    isSpotlighted: true,
    spotlightReason: "Led our largest community service campaign",
    coordinates: {
      lat: 43.6532,
      lng: -79.3832
    }
  },
  {
    id: 3,
    name: "Prof. Sarah Ahmed",
    role: "Research Mentor",
    department: "Academic Affairs",
    type: "mentor",
    image: "https://i.pravatar.cc/300?img=3",
    location: "London, UK",
    quote: "Research is formalized curiosity. It is poking and prying with a purpose.",
    bio: "Prof. Ahmed guides students through academic research methodology and publishing processes, helping them contribute to scholarly knowledge.",
    achievements: [
      "Mentored 75+ undergraduate research projects",
      "Helped students publish in 12 peer-reviewed journals",
      "Developed the 'Research Pathway' program"
    ],
    education: "PhD in Sociology, Oxford University",
    experience: "15 years in academic research and teaching",
    expertise: ["Research Methodology", "Academic Publishing", "Qualitative Analysis"],
    email: "s.ahmed@uniford.org",
    coordinates: {
      lat: 51.5074,
      lng: -0.1278
    }
  },
  // Adding more examples for variety
  {
    id: 4,
    name: "Robert Tanaka",
    role: "Technology Committee Chair",
    department: "Innovation Hub",
    type: "chairperson",
    image: "https://i.pravatar.cc/300?img=4",
    location: "Tokyo, Japan",
    quote: "Technology should simplify education, not complicate it.",
    bio: "Robert leads initiatives to integrate cutting-edge technology into educational frameworks while ensuring accessibility and inclusivity.",
    achievements: [
      "Launched Uniford's digital transformation initiative",
      "Secured $2M in technology grants",
      "Developed AI-powered learning assistance platform"
    ],
    education: "MSc in Computer Science, Tokyo Institute of Technology",
    experience: "Former CTO at EduTech Innovations",
    expertise: ["Educational Technology", "Digital Transformation", "AI in Education"],
    linkedin: "https://linkedin.com/",
    website: "https://robertanaka.tech",
    coordinates: {
      lat: 35.6762,
      lng: 139.6503
    }
  },
  {
    id: 5,
    name: "Maria Gonzalez",
    role: "Student Success Coordinator",
    department: "Core Team",
    type: "team",
    image: "https://i.pravatar.cc/300?img=5",
    location: "Mexico City, Mexico",
    quote: "Every student deserves a chance to discover their potential.",
    bio: "Maria develops and implements programs to improve student retention, graduation rates, and overall academic success.",
    achievements: [
      "Increased graduation rate by 15% through targeted interventions",
      "Created peer mentoring program with 300+ participants",
      "Recognized as 'Staff Member of the Year' in 2024"
    ],
    education: "MEd in Educational Psychology, UNAM",
    experience: "8 years in student affairs and academic counseling",
    expertise: ["Student Retention", "Academic Advising", "Program Development"],
    linkedin: "https://linkedin.com/",
    isSpotlighted: true,
    spotlightReason: "Exceptional work on the new student orientation program",
    coordinates: {
      lat: 19.4326,
      lng: -99.1332
    }
  },
  // More entries to support all categories
  {
    id: 6,
    name: "Dr. Emmanuel Okonkwo",
    role: "Curriculum Development Advisor",
    department: "Academic Council",
    type: "council",
    image: "https://i.pravatar.cc/300?img=6",
    location: "Lagos, Nigeria",
    quote: "The curriculum is the heart of education. It must beat with relevance.",
    bio: "Dr. Okonkwo specializes in developing culturally responsive curricula that prepare students for global citizenship while honoring local contexts.",
    achievements: [
      "Redesigned core curriculum adopted by 15 partner institutions",
      "Authored 'Global Perspectives in Local Education' framework",
      "Led UNESCO educational initiative in West Africa"
    ],
    education: "PhD in Curriculum & Instruction, University of Cambridge",
    experience: "20+ years in international education",
    expertise: ["Curriculum Design", "Educational Policy", "Intercultural Learning"],
    email: "e.okonkwo@uniford.org",
    website: "https://educationalpathways.org",
    coordinates: {
      lat: 6.5244,
      lng: 3.3792
    }
  }
];

export const organizations: Organization[] = [
  {
    id: 1,
    name: "Advisory Board",
    description: "Strategic oversight and guidance for long-term institutional direction",
    members: [1, 3, 6],
    type: "board"
  },
  {
    id: 2,
    name: "Innovation Council",
    description: "Driving technological and pedagogical innovation across programs",
    members: [4, 5],
    type: "council"
  },
  {
    id: 3,
    name: "Community Outreach Committee",
    description: "Building relationships with local and global communities for mutual benefit",
    members: [2, 5],
    type: "committee"
  }
];
