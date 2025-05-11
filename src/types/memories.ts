
export type MediaType = 'photo' | 'video' | 'news' | 'conference' | 'achievement' | 'story' | 'competition';

export interface MediaItem {
  id: number;
  title: string;
  description: string;
  type: MediaType;
  thumbnail: string;
  url?: string;
  videoUrl?: string;
  contentUrl?: string;
  date: string;
  tags: string[];
  location?: string;
  isFeatured: boolean;
  likes: number;
  downloadUrl?: string;
  alt: string;
  metaTitle: string;
  metaDescription: string;
}
