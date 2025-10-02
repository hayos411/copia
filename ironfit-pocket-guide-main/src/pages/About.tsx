import { Dumbbell, Heart, Target, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Foco em Resultados",
      description: "Métodos comprovados baseados em ciência e experiência prática",
    },
    {
      icon: Heart,
      title: "Sem Complicação",
      description: "Informação direta, sem enrolação. Você não precisa de cadastro ou burocracia",
    },
    {
      icon: Zap,
      title: "Sempre Disponível",
      description: "Acesse quando e onde quiser, seu guia de treino no bolso",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="text-center mb-12 space-y-4">
        <div className="inline-flex p-4 rounded-full bg-gradient-hero mb-4">
          <Dumbbell className="h-12 w-12 text-primary-foreground" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold">
          Sobre o <span className="bg-gradient-hero bg-clip-text text-transparent">IronFit</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Democratizando o conhecimento de musculação de qualidade
        </p>
      </div>

      <div className="space-y-8 mb-12">
        <Card>
          <CardContent className="p-8 space-y-4">
            <h2 className="text-2xl font-bold">A Missão</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              O IronFit nasceu da necessidade de tornar o conhecimento profissional de musculação acessível
              a todos. Baseado no curso completo criado por especialistas em treinamento, este aplicativo
              traz métodos comprovados, exercícios detalhados e princípios fundamentais de forma simples e
              direta.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Acreditamos que treinar bem não deve ser complicado. Sem necessidade de cadastro, sem
              mensalidades, sem barreiras. Apenas você, seu objetivo e as ferramentas certas para alcançá-lo.
            </p>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6 space-y-3">
                <div className="inline-flex p-3 rounded-full bg-primary/10">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardContent className="p-8 space-y-4">
            <h2 className="text-2xl font-bold">O Criador</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Desenvolvido com base nos ensinamentos e metodologia do curso de musculação criado por
              especialistas com anos de experiência em treinamento e preparação física. O conteúdo é
              constantemente atualizado para refletir as melhores práticas e descobertas científicas mais
              recentes.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-hero text-primary-foreground border-0">
          <CardContent className="p-8 text-center space-y-4">
            <h2 className="text-2xl font-bold">Filosofia</h2>
            <p className="text-primary-foreground/90 leading-relaxed text-lg">
              "O melhor treino é aquele que você consegue fazer consistentemente. A perfeição técnica
              vem com a prática, mas a consistência vem da simplicidade."
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;
