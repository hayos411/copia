import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Dumbbell, Timer, Target, Home, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useAuth } from "@/contexts/AuthContext";
import { useWorkoutPlans } from "@/hooks/useWorkoutPlans";

const Workout = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { createWorkoutPlan } = useWorkoutPlans();
  const [focus, setFocus] = useState("");
  const [duration, setDuration] = useState("");
  const [equipment, setEquipment] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!user && showResults) {
      setShowResults(false);
    }
  }, [user]);

  const handleGenerate = async () => {
    if (!focus || !duration || !equipment) return;

    if (!user) {
      navigate('/auth');
      return;
    }

    setSaving(true);
    const { error } = await createWorkoutPlan(focus, parseInt(duration), equipment);
    setSaving(false);

    if (!error) {
      setShowResults(true);
    }
  };

  const focusOptions = [
    { value: "hypertrophy", label: "Hipertrofia", description: "Ganho de massa muscular" },
    { value: "strength", label: "Força", description: "Aumento de força máxima" },
    { value: "weightloss", label: "Emagrecimento", description: "Queima de gordura" },
    { value: "general", label: "Geral", description: "Condicionamento físico" },
  ];

  const durationOptions = [
    { value: "30", label: "30 minutos" },
    { value: "45", label: "45 minutos" },
    { value: "60", label: "60 minutos" },
  ];

  const equipmentOptions = [
    { value: "gym", label: "Academia Completa", description: "Todos os equipamentos" },
    { value: "home", label: "Treino em Casa", description: "Peso corporal e básico" },
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="text-center mb-8 space-y-3">
        <h1 className="text-4xl font-bold flex items-center justify-center gap-3">
          <Dumbbell className="h-10 w-10 text-primary" />
          Meu Treino
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Configure seu treino ideal baseado em seus objetivos e recursos disponíveis
        </p>
      </div>

      {!showResults ? (
        <div className="space-y-8">
          {/* Focus Selection */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                Foco do Treino
              </CardTitle>
              <CardDescription>Qual é seu objetivo principal?</CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup value={focus} onValueChange={setFocus} className="grid md:grid-cols-2 gap-4">
                {focusOptions.map((option) => (
                  <div key={option.value} className="flex items-start space-x-3">
                    <RadioGroupItem value={option.value} id={option.value} className="mt-1" />
                    <Label
                      htmlFor={option.value}
                      className="flex-1 cursor-pointer p-4 rounded-lg border-2 border-border hover:border-primary/50 transition-colors"
                    >
                      <div className="font-semibold">{option.label}</div>
                      <div className="text-sm text-muted-foreground">{option.description}</div>
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </CardContent>
          </Card>

          {/* Duration Selection */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Timer className="h-5 w-5 text-primary" />
                Duração
              </CardTitle>
              <CardDescription>Quanto tempo você tem disponível?</CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup value={duration} onValueChange={setDuration} className="grid md:grid-cols-3 gap-4">
                {durationOptions.map((option) => (
                  <div key={option.value} className="flex items-start space-x-3">
                    <RadioGroupItem value={option.value} id={`duration-${option.value}`} className="mt-1" />
                    <Label
                      htmlFor={`duration-${option.value}`}
                      className="flex-1 cursor-pointer p-4 rounded-lg border-2 border-border hover:border-primary/50 transition-colors text-center font-semibold"
                    >
                      {option.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </CardContent>
          </Card>

          {/* Equipment Selection */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Home className="h-5 w-5 text-primary" />
                Equipamento
              </CardTitle>
              <CardDescription>Onde você vai treinar?</CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup value={equipment} onValueChange={setEquipment} className="grid md:grid-cols-2 gap-4">
                {equipmentOptions.map((option) => (
                  <div key={option.value} className="flex items-start space-x-3">
                    <RadioGroupItem value={option.value} id={`equipment-${option.value}`} className="mt-1" />
                    <Label
                      htmlFor={`equipment-${option.value}`}
                      className="flex-1 cursor-pointer p-4 rounded-lg border-2 border-border hover:border-primary/50 transition-colors"
                    >
                      <div className="font-semibold">{option.label}</div>
                      <div className="text-sm text-muted-foreground">{option.description}</div>
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </CardContent>
          </Card>

          {/* Generate Button */}
          <div className="flex justify-center pt-4">
            <Button
              variant="hero"
              size="xl"
              onClick={handleGenerate}
              disabled={!focus || !duration || !equipment || saving}
              className="min-w-64"
            >
              {saving ? 'Salvando...' : user ? 'Salvar e Gerar Treino' : 'Entrar para Salvar'}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>Seu Treino Personalizado</CardTitle>
            <CardDescription>
              Treino de {focusOptions.find(f => f.value === focus)?.label} - {duration} minutos
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-muted/50 rounded-lg p-6 space-y-4">
              <h3 className="font-bold text-lg">Exercícios Recomendados:</h3>
              <p className="text-muted-foreground">
                Esta funcionalidade será expandida com exercícios específicos baseados em suas seleções.
                Por enquanto, explore o Dicionário de Exercícios para ver todos os movimentos disponíveis.
              </p>
            </div>
            
            <div className="flex gap-4">
              <Button variant="outline" onClick={() => setShowResults(false)} className="flex-1">
                Refazer Configuração
              </Button>
              <Button variant="hero" className="flex-1">
                Iniciar Treino
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Workout;
