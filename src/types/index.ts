export interface IProject {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  techStack?: string[];
  liveDemoUrl?: string;
  sourceCodeUrl?: string;
  challenges?: string[];
  futureImplementations?: string[];
}

export interface ProjectCardProps extends IProject {
  index: number;
}

export interface ProjectPageProps {
  params: {
    id: string;
  };
}
