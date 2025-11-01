import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
  tags?: string[];
}

const ProjectCard = ({ title, description, icon: Icon, link, tags }: ProjectCardProps) => {
  return (
    <Card className="project-card h-full flex flex-col">
      <CardHeader>
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-accent/10 rounded-lg">
            <Icon className="h-6 w-6 text-accent" />
          </div>
          <CardTitle className="text-xl">{title}</CardTitle>
        </div>
        <CardDescription className="text-sm leading-relaxed">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-end">
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <Link to={link}>
          <Button variant="default" className="w-full bg-accent hover:bg-accent/90">
            View Project Details
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
