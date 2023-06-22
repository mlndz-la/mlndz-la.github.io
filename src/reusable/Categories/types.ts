export enum ThemesEnum {
  ck = "CK",
  pf = "PF",
  tc = "TC"
}

export interface ICategoryProps {
  title: string;
  theme: ThemesEnum;
  elementId: string;
}