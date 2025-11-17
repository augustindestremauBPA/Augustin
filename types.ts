import type { ReactNode } from 'react';

export interface Speaker {
  name: string;
  title: string;
  organization: string;
  bio: string;
  imageUrl: string;
  linkedinUrl?: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  company: string;
}

export interface ProgramItem {
  title: string;
  description: string;
  // FIX: Changed from React.ReactNode to ReactNode and imported the type from 'react'.
  icon: ReactNode;
}