import { caseStudiesData } from "../../data/CaseStudies";

export interface MyWorkProps {
  title?: string;
  subtitle?: string;
  caseStudies: typeof caseStudiesData.caseStudies;
}