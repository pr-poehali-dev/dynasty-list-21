import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

const achievements = [
  { icon: "🏛️", title: "Египтолог", description: "Завершить курс Птолемеев", earned: true },
  { icon: "👑", title: "Царский двор", description: "Пройти 5 тестов", earned: true },
  { icon: "📚", title: "Книжный червь", description: "Изучить 50 уроков", earned: false },
  { icon: "🎯", title: "Снайпер", description: "3 теста без ошибок", earned: false },
  { icon: "🔥", title: "На огне", description: "7 дней подряд", earned: true },
  { icon: "🌟", title: "Первооткрыватель", description: "Начать все курсы", earned: false },
];

const recentActivity = [
  { action: "Урок завершён", detail: "Птолемеи: Клеопатра VII", time: "2 часа назад", icon: "CheckCircle" },
  { action: "Тест пройден", detail: "Романовы: Пётр I — 85%", time: "Вчера", icon: "Award" },
  { action: "Курс начат", detail: "Тюдоры: Генрих VIII", time: "2 дня назад", icon: "Play" },
];

const Profile = () => {
  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="container mx-auto px-4">
        <section className="relative rounded-2xl gradient-card border border-border/50 p-8 mb-8 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl" />

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6">
            <Avatar className="w-20 h-20 border-2 border-primary/30">
              <AvatarFallback className="text-2xl gradient-primary text-white font-bold">
                ИИ
              </AvatarFallback>
            </Avatar>

            <div className="flex-1">
              <h1 className="text-2xl font-bold mb-1">Исследователь Истории</h1>
              <p className="text-muted-foreground mb-4">Уровень 5 · Любознательный историк</p>

              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
                    <Icon name="BookOpen" size={16} className="text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">24</div>
                    <div className="text-xs text-muted-foreground">Урока</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center">
                    <Icon name="Trophy" size={16} className="text-amber-400" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">3</div>
                    <div className="text-xs text-muted-foreground">Награды</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                    <Icon name="Target" size={16} className="text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">82%</div>
                    <div className="text-xs text-muted-foreground">Ср. балл</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center">
                    <Icon name="Flame" size={16} className="text-red-400" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">5 дн.</div>
                    <div className="text-xs text-muted-foreground">Серия</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <section className="rounded-2xl gradient-card border border-border/50 p-6">
              <h2 className="text-lg font-bold mb-5 flex items-center gap-2">
                <Icon name="TrendingUp" size={20} className="text-primary" />
                Мой прогресс
              </h2>

              <div className="space-y-5">
                {[
                  { name: "Династия Птолемеев", emoji: "🏛️", progress: 45, total: 12, done: 5 },
                  { name: "Династия Романовых", emoji: "👑", progress: 20, total: 18, done: 4 },
                  { name: "Династия Тюдоров", emoji: "🦁", progress: 5, total: 10, done: 1 },
                ].map((course) => (
                  <div key={course.name} className="group cursor-pointer">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{course.emoji}</span>
                        <div>
                          <div className="font-semibold text-sm group-hover:text-primary transition-colors">
                            {course.name}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {course.done} из {course.total} уроков
                          </div>
                        </div>
                      </div>
                      <span className="text-sm font-bold text-primary">{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="h-2" />
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-2xl gradient-card border border-border/50 p-6">
              <h2 className="text-lg font-bold mb-5 flex items-center gap-2">
                <Icon name="Clock" size={20} className="text-primary" />
                Последняя активность
              </h2>

              <div className="space-y-4">
                {recentActivity.map((item, i) => (
                  <div key={i} className="flex items-start gap-4 group">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon name={item.icon} size={16} className="text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium">{item.action}</div>
                      <div className="text-sm text-muted-foreground truncate">{item.detail}</div>
                    </div>
                    <span className="text-xs text-muted-foreground whitespace-nowrap">{item.time}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="space-y-6">
            <section className="rounded-2xl gradient-card border border-border/50 p-6">
              <h2 className="text-lg font-bold mb-5 flex items-center gap-2">
                <Icon name="Award" size={20} className="text-amber-400" />
                Достижения
              </h2>

              <div className="grid grid-cols-2 gap-3">
                {achievements.map((a) => (
                  <div
                    key={a.title}
                    className={`rounded-xl p-3 text-center transition-all ${
                      a.earned
                        ? "gradient-card border border-primary/20 glow-purple"
                        : "bg-secondary/30 opacity-50"
                    }`}
                  >
                    <div className="text-2xl mb-1">{a.icon}</div>
                    <div className="text-xs font-semibold mb-0.5">{a.title}</div>
                    <div className="text-[10px] text-muted-foreground">{a.description}</div>
                    {a.earned && (
                      <Badge className="mt-2 text-[10px] h-5 gradient-primary text-white border-0">
                        Получено
                      </Badge>
                    )}
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-2xl gradient-card border border-border/50 p-6">
              <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Icon name="Calendar" size={20} className="text-primary" />
                Статистика
              </h2>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Время обучения</span>
                  <span className="text-sm font-semibold">12 ч 45 мин</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Тестов пройдено</span>
                  <span className="text-sm font-semibold">8</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Лучший результат</span>
                  <span className="text-sm font-semibold text-emerald-400">96%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Рейтинг</span>
                  <span className="text-sm font-semibold gradient-text">Топ 15%</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
