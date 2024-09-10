import { RefObject } from 'react';

export interface SectionRefsContextType {
  infoSection: RefObject<HTMLDivElement>;
  reviewSection: RefObject<HTMLDivElement>;
  recommendSection: RefObject<HTMLDivElement>;
  scrollToSection: (sectionRef: RefObject<HTMLDivElement>) => void;
}
