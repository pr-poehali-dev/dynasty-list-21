import DynastyCard from "./DynastyCard";
import Icon from "@/components/ui/icon";

const dynasties = [
  { title: "Династия Птолемеев", period: "305–30 до н.э.", region: "Египет", lessons: 12, progress: 45, emoji: "🏛️", color: "bg-amber-500" },
  { title: "Династия Романовых", period: "1613–1917", region: "Россия", lessons: 18, progress: 20, emoji: "👑", color: "bg-purple-500" },
  { title: "Династия Тюдоров", period: "1485–1603", region: "Англия", lessons: 10, progress: 0, emoji: "🦁", color: "bg-red-500" },
  { title: "Династия Мин", period: "1368–1644", region: "Китай", lessons: 14, progress: 0, emoji: "🐉", color: "bg-emerald-500" },
  { title: "Династия Габсбургов", period: "1282–1918", region: "Европа", lessons: 16, progress: 0, emoji: "🏰", color: "bg-blue-500" },
  { title: "Династия Османов", period: "1299–1922", region: "Турция", lessons: 15, progress: 0, emoji: "🌙", color: "bg-orange-500" },
];

const CoursesSection = () => {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-1 gradient-primary rounded-full" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Каталог</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Изучайте <span className="gradient-text">династии</span>
            </h2>
          </div>
          <button className="hidden md:flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
            Все курсы
            <Icon name="ArrowRight" size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {dynasties.map((d, i) => (
            <div key={d.title} className="animate-slide-up" style={{ animationDelay: `${i * 0.08}s` }}>
              <DynastyCard {...d} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
