export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
};

export type StackLayer = {
  id: string;
  title: string;
  items: string[];
  iconPath: string;
};

export type Experience = {
  period: string;
  role: string;
  company: string;
  companyUrl: string;
  details: string;
};

export type ValueItem = {
  title: string;
  text: string;
};
