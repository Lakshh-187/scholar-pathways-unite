
import { MediaItem } from '@/types/memories';

export const memoriesData: MediaItem[] = [
  {
    id: 1,
    title: "Uniford Scholar Achievers Meet – 2024",
    description: "The annual gathering celebrating the outstanding achievements of Uniford scholars from across the globe. This event showcased innovations, research papers, and leadership examples set by our community.",
    type: "photo",
    thumbnail: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    date: "2024-03-15",
    tags: ["Uniford", "UnifordFoundation", "ScholarMeet"],
    location: "New Delhi, India",
    isFeatured: true,
    likes: 156,
    downloadUrl: "/downloads/scholar-meet-2024.jpg",
    alt: "Group of Uniford scholars at the 2024 annual achievers meet in New Delhi",
    metaTitle: "Uniford Scholar Meet – Global Event 2024 | Uniford Foundation",
    metaDescription: "Highlights from the annual Uniford Scholar Achievers Meet 2024 in New Delhi, showcasing innovations and research by our global scholar community."
  },
  {
    id: 2,
    title: "International Conference on Educational Innovation",
    description: "Uniford Foundation hosted leaders in education from 25 countries to discuss the future of learning, technology integration, and equal access to quality education.",
    type: "video",
    thumbnail: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    date: "2023-11-10",
    tags: ["Uniford", "UnifordFoundation", "EdTechConference"],
    location: "Singapore",
    isFeatured: true,
    likes: 243,
    alt: "Panel discussion at Uniford's International Conference on Educational Innovation",
    metaTitle: "Uniford Foundation – International EdTech Conference | www.uniford.org",
    metaDescription: "Watch keynotes and panels from Uniford's International Conference on Educational Innovation featuring global education leaders."
  },
  {
    id: 3,
    title: "Uniford Volunteers Reach Milestone Impact",
    description: "Our volunteer network has successfully completed 100,000 teaching hours across rural schools, impacting the lives of over 25,000 students in underserved regions.",
    type: "news",
    thumbnail: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843",
    contentUrl: "https://www.uniford.org/news/volunteer-milestone",
    date: "2024-01-22",
    tags: ["Uniford", "UnifordFoundation", "Volunteers", "Impact"],
    isFeatured: true,
    likes: 312,
    alt: "Uniford volunteers teaching at a rural school",
    metaTitle: "Uniford Foundation Volunteers Reach 100,000 Teaching Hours | Social Impact",
    metaDescription: "Uniford's volunteer network achieves milestone of 100,000 teaching hours, impacting 25,000+ students in underserved communities."
  },
  {
    id: 4,
    title: "Scholar Leadership Summit 2023",
    description: "A transformative 3-day retreat where scholars developed leadership skills through workshops, team challenges, and mentorship from industry leaders.",
    type: "photo",
    thumbnail: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
    date: "2023-09-05",
    tags: ["Uniford", "UnifordFoundation", "Leadership"],
    location: "Himachal Pradesh, India",
    isFeatured: false,
    likes: 198,
    downloadUrl: "/downloads/leadership-summit-2023.jpg",
    alt: "Uniford scholars participating in leadership activities at mountain retreat",
    metaTitle: "Uniford Scholar Leadership Summit 2023 | Leadership Development",
    metaDescription: "Experience Uniford Foundation's 3-day leadership retreat focused on developing future leaders through immersive workshops and mentorship."
  },
  {
    id: 5,
    title: "Artificial Intelligence Research Competition",
    description: "Scholars presented groundbreaking AI solutions addressing real-world problems in healthcare, education, and environmental sustainability.",
    type: "competition",
    thumbnail: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
    date: "2024-02-28",
    tags: ["Uniford", "UnifordFoundation", "AICompetition", "Innovation"],
    location: "Virtual Event",
    isFeatured: false,
    likes: 175,
    alt: "Presentation of AI solutions by Uniford scholars",
    metaTitle: "Uniford AI Research Competition | Innovation in Action",
    metaDescription: "Discover innovative AI solutions created by Uniford scholars addressing global challenges in healthcare, education, and sustainability."
  }
];
