import { useState } from "react";
import { Search, Dumbbell, Target } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Exercises = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const muscleGroups = [
    { id: "chest", name: "Peito", count: 15, color: "bg-primary/10 text-primary" },
    { id: "back", name: "Costas", count: 18, color: "bg-accent/10 text-accent" },
    { id: "legs", name: "Pernas", count: 20, color: "bg-success/10 text-success" },
    { id: "shoulders", name: "Ombros", count: 12, color: "bg-primary/10 text-primary" },
    { id: "arms", name: "Braços", count: 14, color: "bg-accent/10 text-accent" },
    { id: "core", name: "Abdômen", count: 10, color: "bg-success/10 text-success" },
  ];

  const sampleExercises = [
    {
      name: "Supino Reto",
      muscle: "Peito",
      difficulty: "Intermediário",
      equipment: "Barra",
      description: "Exercício fundamental para desenvolvimento do peitoral",
    },
    {
      name: "Agachamento Livre",
      muscle: "Pernas",
      difficulty: "Avançado",
      equipment: "Barra",
      description: "Rei dos exercícios para membros inferiores",
    },
    {
      name: "Puxada Frontal",
      muscle: "Costas",
      difficulty: "Intermediário",
      equipment: "Polia",
      description: "Excelente para desenvolvimento do dorsal",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="text-center mb-8 space-y-3">
        <h1 className="text-4xl font-bold flex items-center justify-center gap-3">
          <Target className="h-10 w-10 text-primary" />
          Dicionário de Exercícios
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Biblioteca completa com instruções detalhadas para execução perfeita
        </p>
      </div>

      {/* Search Bar */}
      <div className="mb-8">
        <div className="relative max-w-xl mx-auto">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Buscar exercício..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 h-12 text-base"
          />
        </div>
      </div>

      {/* Muscle Groups */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Grupos Musculares</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {muscleGroups.map((group) => (
            <Button
              key={group.id}
              variant="outline"
              className="h-auto p-6 justify-between hover:scale-[1.02] transition-all"
            >
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg ${group.color}`}>
                  <Dumbbell className="h-5 w-5" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-base">{group.name}</div>
                  <div className="text-sm text-muted-foreground">{group.count} exercícios</div>
                </div>
              </div>
            </Button>
          ))}
        </div>
      </div>

      {/* Sample Exercises */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Exercícios em Destaque</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleExercises.map((exercise, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="text-xl">{exercise.name}</CardTitle>
                  <Badge variant="secondary">{exercise.muscle}</Badge>
                </div>
                <CardDescription>{exercise.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex gap-2">
                  <Badge variant="outline" className="text-xs">
                    {exercise.difficulty}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {exercise.equipment}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Card className="bg-muted/30 border-dashed">
            <CardContent className="py-12">
              <Dumbbell className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">
                Base de exercícios completa em desenvolvimento. <br />
                Em breve você terá acesso a centenas de exercícios com instruções detalhadas e demonstrações visuais.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Exercises;
