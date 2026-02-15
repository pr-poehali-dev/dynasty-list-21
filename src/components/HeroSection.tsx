import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://cdn.poehali.dev/projects/8620f438-6849-432c-9c54-7bb4e9ac7440/files/ec80868f-a028-47c9-8a19-f0118c4d3fc6.jpg"
          alt="Hero"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-transparent to-amber-900/20" />
      </div>

      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm text-primary font-medium">21 династия · Бесплатный доступ</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6 animate-slide-up">
            Великие{" "}
            <span className="gradient-text">династии</span>
            <br />
            мировой истории
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Интерактивные курсы, увлекательные тесты и глубокое погружение в историю
            величайших правящих семей от древности до наших дней.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Button size="lg" className="gradient-primary text-white border-0 text-base px-8 h-12 hover:opacity-90 glow-purple">
              <Icon name="Play" size={18} className="mr-2" />
              Начать обучение
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8 h-12 border-border/50 hover:bg-secondary">
              <Icon name="BookOpen" size={18} className="mr-2" />
              Каталог курсов
            </Button>
          </div>

          <div className="flex items-center gap-8 mt-12 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div>
              <div className="text-2xl font-bold gradient-text">21</div>
              <div className="text-sm text-muted-foreground">Династия</div>
            </div>
            <div className="w-px h-10 bg-border" />
            <div>
              <div className="text-2xl font-bold gradient-text">150+</div>
              <div className="text-sm text-muted-foreground">Уроков</div>
            </div>
            <div className="w-px h-10 bg-border" />
            <div>
              <div className="text-2xl font-bold gradient-text">50+</div>
              <div className="text-sm text-muted-foreground">Тестов</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
