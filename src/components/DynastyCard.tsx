import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface DynastyCardProps {
  title: string;
  period: string;
  region: string;
  lessons: number;
  progress: number;
  emoji: string;
  color: string;
}

const DynastyCard = ({ title, period, region, lessons, progress, emoji, color }: DynastyCardProps) => {
  return (
    <div className="group relative rounded-xl gradient-card border border-border/50 p-5 hover:border-primary/30 transition-all duration-300 cursor-pointer overflow-hidden">
      <div className={`absolute top-0 right-0 w-32 h-32 ${color} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className="text-4xl">{emoji}</div>
          <Badge variant="secondary" className="text-xs">
            {region}
          </Badge>
        </div>

        <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{period}</p>

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-1 text-muted-foreground">
            <Icon name="BookOpen" size={14} />
            <span>{lessons} уроков</span>
          </div>
          {progress > 0 && (
            <span className="text-primary font-medium">{progress}%</span>
          )}
        </div>

        {progress > 0 && (
          <div className="mt-3 h-1 bg-secondary rounded-full overflow-hidden">
            <div
              className="h-full gradient-primary rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default DynastyCard;
