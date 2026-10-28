export interface ProjectTool {
  id: string;
  name: string;
  icon?: string;
}

export interface ProjectFlag {
  label: string;
  icon?: string;
}

export interface ProjectCardData {
  id: string;
  name: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  tools?: ProjectTool[];
  flag?: ProjectFlag;
}
