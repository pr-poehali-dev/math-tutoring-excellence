import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 font-body">
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="font-heading text-2xl font-bold text-primary">МатемаТика ⚡</div>
            <div className="hidden md:flex space-x-6">
              {['about', 'courses', 'teacher', 'signup', 'faq', 'reviews'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-gray-600 hover:text-primary transition-colors font-medium"
                >
                  {section === 'about' && 'О занятиях'}
                  {section === 'courses' && 'Программа'}
                  {section === 'teacher' && 'Преподаватель'}
                  {section === 'signup' && 'Записаться'}
                  {section === 'faq' && 'FAQ'}
                  {section === 'reviews' && 'Отзывы'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-secondary text-white px-6 py-2 text-lg animate-bounce-gentle">
              🚀 Математика для тех, кто хочет понимать, а не зубрить!
            </Badge>
            <h1 className="font-heading text-5xl md:text-7xl font-bold text-gray-800 mb-6 animate-fade-in">
              Подготовка к ОГЭ
              <span className="text-primary block">без скуки и зубрёжки</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up">
              Авторская методика, которая учит мыслить, а не подставлять циферки в формулы. 
              Уникальные занятия + бесплатные лекции о том, зачем нужна математика в жизни!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold"
                onClick={() => scrollToSection('signup')}
              >
                <Icon name="Rocket" size={20} className="mr-2" />
                Записаться на курс
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-secondary text-secondary hover:bg-secondary hover:text-white px-8 py-4 text-lg"
                onClick={() => scrollToSection('courses')}
              >
                <Icon name="BookOpen" size={20} className="mr-2" />
                Посмотреть программу
              </Button>
            </div>
            <div className="relative">
              <img 
                src="/img/35bc2c0b-19f5-4d4b-aede-76dcad2136a1.jpg" 
                alt="Математические формулы в космосе" 
                className="rounded-2xl shadow-2xl mx-auto max-w-full h-auto animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="font-heading text-4xl font-bold text-center mb-12 text-gray-800">
            Что особенного в наших занятиях?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "Brain",
                title: "Понимание, а не зубрёжка",
                description: "Мы учим строить взаимосвязи и мыслить логически, а не просто запоминать формулы"
              },
              {
                icon: "Calendar",
                title: "Программа на год вперёд",
                description: "Ученики и родители всегда знают, что будет изучаться на каждом занятии"
              },
              {
                icon: "Gift",
                title: "Бесплатные дополнительные занятия",
                description: "20 увлекательных тем о том, где математика встречается в реальной жизни"
              },
              {
                icon: "User",
                title: "Личный кабинет",
                description: "Домашние задания с автопроверкой, видеозаписи уроков и авторские конспекты"
              },
              {
                icon: "Users",
                title: "Группы по уровню знаний",
                description: "Каждый ученик занимается с одноклассниками своего уровня подготовки"
              },
              {
                icon: "MessageCircle",
                title: "Поддержка 24/7",
                description: "Всегда можно задать вопрос в группе и получить быстрый ответ"
              }
            ].map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-2 hover:border-primary/20">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={feature.icon as any} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="font-heading text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="courses" className="py-16 px-4 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto">
          <h2 className="font-heading text-4xl font-bold text-center mb-12 text-gray-800">
            Программа курса
          </h2>
          <Tabs defaultValue="main" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="main" className="text-lg">Основной курс</TabsTrigger>
              <TabsTrigger value="bonus" className="text-lg">Бесплатные занятия</TabsTrigger>
            </TabsList>
            
            <TabsContent value="main">
              <Card>
                <CardHeader>
                  <CardTitle className="font-heading text-2xl text-center">Подготовка к ОГЭ по математике</CardTitle>
                  <CardDescription className="text-center text-lg">
                    Полный курс с углубленным изучением всех тем экзамена
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      "Алгебраические выражения и уравнения",
                      "Геометрия: планиметрия и стереометрия",
                      "Функции и их графики",
                      "Теория вероятностей и статистика",
                      "Текстовые задачи",
                      "Неравенства и системы",
                      "Тригонометрия",
                      "Решение экзаменационных вариантов"
                    ].map((topic, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <Icon name="CheckCircle" size={20} className="text-accent flex-shrink-0" />
                        <span>{topic}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="bonus">
              <Card>
                <CardHeader>
                  <CardTitle className="font-heading text-2xl text-center">Зачем нужна математика?</CardTitle>
                  <CardDescription className="text-center text-lg">
                    20 увлекательных занятий о применении математики в жизни
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {[
                      "🔢 Как на пальцах считать до 1000",
                      "🎯 Как мошенники используют теорию вероятностей",
                      "🃏 Комбинация карт или сколько секунд до смерти",
                      "🎰 Какая вероятность выиграть в лотерею",
                      "➖ Почему минус на минус дает плюс?",
                      "🔢 Почему числитель умножаем на числитель?",
                      "🗺️ Как связана география и математика?",
                      "💻 Как связана информатика и математика?",
                      "📐 Откуда появился этот Дискриминант?",
                      "🏺 Как посчитать, сколько драже в банке?",
                      "📊 Почему синус 30° равен 1/2?",
                      "🎂 Парадокс дней рождений",
                      "🧬 Математические модели в биологии",
                      "🃏 Задача Монти Холла",
                      "♠️ Математика в игре блэк-джек",
                      "🌻 Числа Фибоначчи",
                      "✨ Золотое сечение"
                    ].map((topic, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                        <span className="text-lg">{topic}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="teacher" className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-heading text-4xl font-bold mb-8 text-gray-800">
            О преподавателе-энтузиасте
          </h2>
          <Card className="text-left">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-48 h-48 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                  <Icon name="User" size={80} className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-2xl font-bold mb-4">Преподаватель математики</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Более 10 лет опыта подготовки учеников к ОГЭ и ЕГЭ. Автор уникальной методики, 
                    которая помогает понять математику, а не просто выучить формулы.
                  </p>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Создатель 20 дополнительных занятий, которые показывают, где математика 
                    встречается в реальной жизни - от теории вероятностей в казино до 
                    золотого сечения в природе.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Энтузиаст", "Инноватор", "Мотиватор"].map((badge) => (
                      <Badge key={badge} variant="secondary" className="bg-accent text-white">
                        {badge}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="signup" className="py-16 px-4 bg-gradient-to-r from-secondary/10 to-primary/10">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-4xl font-bold mb-8 text-gray-800">
            Записаться на занятие
          </h2>
          <Card>
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="text-left">
                  <h3 className="font-heading text-xl font-bold mb-4">Что входит в курс:</h3>
                  <ul className="space-y-3">
                    {[
                      "Основные занятия по подготовке к ОГЭ",
                      "20 бесплатных дополнительных занятий",
                      "Личный кабинет с домашними заданиями",
                      "Видеозаписи всех уроков",
                      "Авторские конспекты",
                      "Поддержка в чате 24/7",
                      "Ценные призы за успехи"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <Icon name="CheckCircle" size={20} className="text-accent flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-t pt-6">
                  <Button 
                    size="lg" 
                    className="w-full bg-primary hover:bg-primary/90 text-white py-4 text-lg font-semibold"
                  >
                    <Icon name="MessageCircle" size={20} className="mr-2" />
                    Записаться на курс
                  </Button>
                  <p className="text-sm text-gray-500 mt-3">
                    Свяжитесь с нами для записи и консультации
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="faq" className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-heading text-4xl font-bold text-center mb-12 text-gray-800">
            Часто задаваемые вопросы
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                question: "Сколько учеников в группе?",
                answer: "Группы формируются из 6-8 учеников с одинаковым уровнем знаний. Это позволяет уделить внимание каждому и поддерживать активность на занятиях."
              },
              {
                question: "Что делать, если я пропустил занятие?",
                answer: "Все занятия записываются на видео и доступны в личном кабинете. Также есть авторские конспекты каждого урока."
              },
              {
                question: "Действительно ли бесплатные дополнительные занятия?",
                answer: "Да! 20 занятий о применении математики в жизни абсолютно бесплатны для всех учеников основного курса."
              },
              {
                question: "Как проверяется домашнее задание?",
                answer: "В личном кабинете есть система автоматической проверки заданий. Сложные задачи проверяет преподаватель с подробными комментариями."
              },
              {
                question: "Какие гарантии успешной сдачи ОГЭ?",
                answer: "Мы не даём формальных гарантий, но наши ученики стабильно показывают высокие результаты благодаря пониманию предмета, а не зубрёжке."
              },
              {
                question: "Можно ли присоединиться к курсу в середине года?",
                answer: "Да, мы проводим входное тестирование и подбираем подходящую группу. Пропущенный материал можно изучить по видеозаписям."
              }
            ].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="font-heading text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="reviews" className="py-16 px-4 bg-gradient-to-r from-accent/5 to-warning/5">
        <div className="container mx-auto">
          <h2 className="font-heading text-4xl font-bold text-center mb-12 text-gray-800">
            Отзывы родителей и учеников
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Мария, мама Артёма",
                text: "Артём наконец-то понял математику! Раньше просто зубрил формулы, а теперь объясняет мне, как они работают. Спасибо за такой подход!",
                rating: 5
              },
              {
                name: "Дмитрий, 9 класс",
                text: "Бесплатные занятия просто огонь! Узнал, как математика связана с покером и почему в лотерею лучше не играть 😄",
                rating: 5
              },
              {
                name: "Елена Петровна, мама Софии",
                text: "Дочь стала увереннее на уроках математики в школе. Личный кабинет очень удобный, всегда можно посмотреть, что проходили.",
                rating: 5
              },
              {
                name: "Максим, 9 класс",
                text: "Классно, что можно в чате спросить, если что-то непонятно. Учитель или помощник отвечают быстро!",
                rating: 5
              },
              {
                name: "Ирина, мама Никиты",
                text: "Сын сдал ОГЭ на 5! Год назад математика была его худшим предметом. Методика действительно работает!",
                rating: 5
              },
              {
                name: "Анна, 9 класс",
                text: "Занятие про золотое сечение и числа Фибоначчи было супер интересным! Теперь вижу математику везде 🌻",
                rating: 5
              }
            ].map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-warning fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">"{review.text}"</p>
                  <p className="font-semibold text-primary">— {review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="font-heading text-3xl font-bold mb-4 text-primary">МатемаТика ⚡</div>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Готовим к ОГЭ так, чтобы математика стала понятной и интересной. 
            Присоединяйтесь к нашему космическому путешествию в мир чисел!
          </p>
          <div className="flex justify-center space-x-6 mb-8">
            <Button variant="ghost" size="sm" className="text-gray-300 hover:text-primary">
              <Icon name="Phone" size={20} className="mr-2" />
              Телефон
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-300 hover:text-primary">
              <Icon name="Mail" size={20} className="mr-2" />
              Email
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-300 hover:text-primary">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Telegram
            </Button>
          </div>
          <p className="text-gray-400 text-sm">
            © 2024 МатемаТика. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;