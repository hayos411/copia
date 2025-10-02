import { BookOpen, TrendingUp, Zap, Shield, Brain, Heart } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Knowledge = () => {
  const categories = [
    {
      icon: TrendingUp,
      title: "Princípios do Treino",
      color: "text-primary",
      topics: [
        {
          title: "Progressão de Carga",
          content: "Aumente gradualmente o peso, repetições ou volume para continuar progredindo. Seu corpo se adapta ao estímulo, então é essencial desafiá-lo constantemente.",
        },
        {
          title: "Sobrecarga Progressiva",
          content: "Princípio fundamental que estabelece que para ganhar força ou massa muscular, você deve continuamente aumentar as demandas impostas aos seus músculos.",
        },
        {
          title: "Especificidade",
          content: "Seu corpo se adapta especificamente ao tipo de treino que você faz. Para hipertrofia, treine no range de 6-12 repetições. Para força, 1-5 repetições.",
        },
        {
          title: "Individualidade",
          content: "Cada pessoa responde diferentemente ao treino. O que funciona para um pode não funcionar para outro. Ajuste seu treino às suas necessidades.",
        },
      ],
    },
    {
      icon: Zap,
      title: "Métodos Avançados",
      color: "text-accent",
      topics: [
        {
          title: "FST-7",
          content: "Fascia Stretch Training: 7 séries com 30-45 segundos de descanso na última série do grupo muscular. Promove pump intenso e stretch da fáscia.",
        },
        {
          title: "Drop-Set",
          content: "Execute uma série até a falha, reduza o peso em 20-30% e continue imediatamente. Excelente para hipertrofia e quebra de platô.",
        },
        {
          title: "Rest-Pause",
          content: "Série até a falha, pausa de 15-20 segundos, continue com o mesmo peso. Repita 2-3 vezes. Intensidade máxima para ganhos.",
        },
        {
          title: "Pirâmide",
          content: "Aumente o peso e diminua as repetições a cada série (pirâmide crescente) ou vice-versa (pirâmide decrescente). Trabalha diferentes capacidades.",
        },
      ],
    },
    {
      icon: Heart,
      title: "Nutrição Básica",
      color: "text-success",
      topics: [
        {
          title: "Proteínas",
          content: "Essenciais para recuperação e crescimento muscular. Consuma 1.6-2.2g por kg de peso corporal diariamente. Fontes: carnes, ovos, laticínios, leguminosas.",
        },
        {
          title: "Carboidratos",
          content: "Principal fonte de energia para treinos intensos. Não tema os carbos - eles são aliados da performance. Prefira fontes complexas como arroz, batata, aveia.",
        },
        {
          title: "Hidratação",
          content: "Fundamental para performance e recuperação. Beba pelo menos 35ml por kg de peso corporal. Durante treinos, hidrate-se a cada 15-20 minutos.",
        },
      ],
    },
    {
      icon: Shield,
      title: "Descanso e Recuperação",
      color: "text-primary",
      topics: [
        {
          title: "Sono",
          content: "7-9 horas por noite são essenciais. Durante o sono ocorre a liberação de GH (hormônio do crescimento) e recuperação muscular.",
        },
        {
          title: "Overtraining",
          content: "Sinais: fadiga constante, queda de performance, insônia, irritabilidade. Se identificar, reduza volume ou intensidade por 1-2 semanas.",
        },
        {
          title: "Periodização",
          content: "Alterne fases de treino intenso com fases de recuperação ativa. Previne overtraining e mantém progresso a longo prazo.",
        },
      ],
    },
    {
      icon: Brain,
      title: "Fatos e Mitos",
      color: "text-accent",
      topics: [
        {
          title: "Treinar em Jejum é Melhor?",
          content: "MITO. Não há vantagem significativa. Pode até prejudicar a performance. O importante é o balanço energético total do dia.",
        },
        {
          title: "Carboidrato à Noite Engorda?",
          content: "MITO. O que importa é o total de calorias do dia. Carboidratos à noite podem até melhorar o sono em alguns casos.",
        },
        {
          title: "Suplementos São Necessários?",
          content: "DEPENDE. Alimentação bem feita é prioridade. Suplementos como whey protein, creatina e multivitamínicos podem auxiliar, mas não são obrigatórios.",
        },
        {
          title: "Mulheres Ficam 'Grandes' Treinando Pesado?",
          content: "MITO. Mulheres têm menos testosterona que homens. Treino pesado deixa as mulheres fortes e definidas, não 'masculinizadas'.",
        },
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-8 space-y-3">
        <h1 className="text-4xl font-bold flex items-center justify-center gap-3">
          <BookOpen className="h-10 w-10 text-primary" />
          Métodos e Fatos
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Conhecimento essencial para maximizar seus resultados na musculação
        </p>
      </div>

      <div className="space-y-8">
        {categories.map((category, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className={`p-2 rounded-lg bg-gradient-hero`}>
                  <category.icon className={`h-6 w-6 text-primary-foreground`} />
                </div>
                {category.title}
              </CardTitle>
              <CardDescription>
                {category.topics.length} tópicos essenciais
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {category.topics.map((topic, topicIndex) => (
                  <AccordionItem key={topicIndex} value={`item-${index}-${topicIndex}`}>
                    <AccordionTrigger className="text-left hover:text-primary">
                      {topic.title}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {topic.content}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mt-8 bg-gradient-hero text-primary-foreground border-0">
        <CardContent className="p-8 text-center">
          <Brain className="h-12 w-12 mx-auto mb-4 opacity-90" />
          <h3 className="text-2xl font-bold mb-2">Conhecimento é Poder</h3>
          <p className="text-primary-foreground/90">
            Aplique esses princípios consistentemente e veja seus resultados decolarem. Lembre-se: a
            consistência supera a perfeição.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Knowledge;
