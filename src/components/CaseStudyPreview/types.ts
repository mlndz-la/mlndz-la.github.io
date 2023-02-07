export enum CaseStudyUrlEnum {
  tlayoasCocina = 'tlayoas-cocina',
  cosmicKitchen = 'cosmic-kitchen',
  pawFinder = 'paw-finder'
}

export interface ICaseStudyPreviewProps {
  imagePreview: string;
  title: string;
  subtitle: string;
  caseStudyUrl?: CaseStudyUrlEnum;
}