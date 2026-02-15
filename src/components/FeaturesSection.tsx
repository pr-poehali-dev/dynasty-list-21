import Icon from "@/components/ui/icon";

const features = [
  {
    icon: "GraduationCap",
    title: "Структурированные курсы",
    description: "Каждая династия — отдельный курс с последовательными уроками",
    gradient: "from-purple-500 to-blue-500",
  },
  {
    icon: "Brain",
    title: "Интерактивные тесты",
    description: "Проверяйте знания после каждого урока и получайте баллы",
    gradient: "from-pink-500 to-purple-500",
  },
  {
    icon: "Trophy",
    title: "Система достижений",
    description: "Зарабатывайте награды и отслеживайте прогресс обучения",
    gradient: "from-amber-500 to-orange-500",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="relative group rounded-2xl gradient-card border border-border/50 p-8 hover:border-primary/30 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${f.gradient} flex items-center justify-center mb-5`}>
                <Icon name={f.icon} size={22} className="text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
