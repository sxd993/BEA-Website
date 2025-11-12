import { Github, Linkedin, Mail } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { TeamMember } from '../teamMembers';

export const getSocialIcon = (platform: string): LucideIcon | null => {
  switch (platform) {
    case 'github':
      return Github;
    case 'linkedin':
      return Linkedin;
    case 'email':
      return Mail;
    default:
      return null;
  }
};

export const handleSocialClick = (platform: keyof TeamMember['social'], url?: string): void => {
  if (!url) return;

  if (platform === 'email') {
    window.location.href = `mailto:${url}`;
  } else {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
};

