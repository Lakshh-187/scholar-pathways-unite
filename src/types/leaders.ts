
export interface Leader {
  id: number;
  name: string;
  role: string;
  department: string;
  type: 'volunteer' | 'team' | 'advisor' | 'mentor' | 'chairperson' | 'council';
  image: string;
  location: string;
  quote: string;
  bio: string;
  achievements: string[];
  education: string;
  experience: string;
  expertise: string[];
  linkedin?: string;
  website?: string;
  email?: string;
  isSpotlighted?: boolean;
  spotlightReason?: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export interface Organization {
  id: number;
  name: string;
  description: string;
  members: number[];
  type: 'board' | 'council' | 'committee';
}
