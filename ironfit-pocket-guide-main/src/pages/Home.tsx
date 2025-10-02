import { Link } from "react-router-dom";
import { Dumbbell, BookOpen, Library, ArrowRight, Zap, Target, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroBanner from "@/assets/hero-banner.jpg";
import workoutIcon from "@/assets/workout-icon.jpg";
import knowledgeIcon from "@/assets/knowledge-icon.jpg";
import dictionaryIcon from "@/assets/dictionary-icon.jpg";

const Home = () => {
  const features = [
    {
      icon: Dumbbell,
      title: "Meu Treino",
      description: "Monte treinos personalizados baseados em seus objetivos e equipamentos disponíveis",
      link: "/workout",
      image: workoutIcon,
      color: "text-primary",
    },
    {
      icon: Library,
      title: "Dicionário de Exercícios",
      description: "Biblioteca completa de exercícios com instruções detalhadas e imagens demonstrativas",
      link: "/exercises",
      image: dictionaryIcon,
      color: "text-accent",
    },
    {
      icon: BookOpen,
      title: "Métodos e Fatos",
      description: "Conheça os princípios do treino, métodos avançados e desmistifique crenças comuns",
      link: "/knowledge",
      image: knowledgeIcon,
      color: "text-success",
    },
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Sem Cadastro",
      description: "Comece imediatamente, sem burocracia",
    },
    {
      icon: Target,
      title: "Resultados Reais",
      description: "Métodos comprovados e baseados em ciência",
    },
    {
      icon: TrendingUp,
      title: "Progressão Clara",
      description: "Acompanhe sua evolução passo a passo",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBanner} 
            alt="Fitness training" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 py-20 md:py-32">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight animate-fade-in">
              Transforme Seu{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Treino
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground animate-fade-in">
              Guia completo de musculação com métodos comprovados, sem cadastro, sempre disponível
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-fade-in">
              <Button variant="hero" size="xl" asChild>
                <Link to="/workout">
                  Começar Agora
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/exercises">
                  Ver Exercícios
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tudo Que Você Precisa</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ferramentas profissionais para maximizar seus resultados
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <Link key={index} to={feature.link} className="group">
              <Card className="h-full border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-glow hover:-translate-y-1">
                <CardContent className="p-6 space-y-4">
                  <div className="relative w-full h-48 rounded-lg overflow-hidden bg-muted">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className={`p-3 rounded-lg bg-gradient-hero inline-flex`}>
                    <feature.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                  <div className="flex items-center text-primary font-semibold group-hover:gap-2 transition-all">
                    Explorar
                    <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center space-y-3">
                <div className="inline-flex p-4 rounded-full bg-primary/10">
                  <benefit.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center space-y-6 bg-gradient-hero rounded-2xl p-8 md:p-12 shadow-glow">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
            Pronto Para Evoluir?
          </h2>
          <p className="text-lg text-primary-foreground/90">
            Comece seu treino agora mesmo, sem complicações
          </p>
          <Button variant="outline" size="xl" asChild className="bg-background hover:bg-background/90 text-primary border-primary-foreground/20">
            <Link to="/workout">
              Criar Meu Treino
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
