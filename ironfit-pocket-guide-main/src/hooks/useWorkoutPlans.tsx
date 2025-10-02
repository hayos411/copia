import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

interface WorkoutPlan {
  id: string;
  user_id: string;
  focus: string;
  duration: number;
  equipment: string;
  is_active: boolean;
  created_at: string;
}

export const useWorkoutPlans = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [workoutPlans, setWorkoutPlans] = useState<WorkoutPlan[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchWorkoutPlans = async () => {
    if (!user) return;

    setLoading(true);
    const { data, error } = await supabase
      .from('workout_plans')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false });

    if (error) {
      toast({
        variant: "destructive",
        title: "Erro ao carregar treinos",
        description: error.message,
      });
    } else {
      setWorkoutPlans(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchWorkoutPlans();
  }, [user]);

  const createWorkoutPlan = async (focus: string, duration: number, equipment: string) => {
    if (!user) return { error: 'Usuário não autenticado' };

    const { data, error } = await supabase
      .from('workout_plans')
      .insert([{
        user_id: user.id,
        focus,
        duration,
        equipment,
        is_active: true,
      }])
      .select()
      .single();

    if (error) {
      toast({
        variant: "destructive",
        title: "Erro ao criar treino",
        description: error.message,
      });
      return { error };
    }

    toast({
      title: "Treino criado!",
      description: "Seu treino foi salvo com sucesso.",
    });

    await fetchWorkoutPlans();
    return { data, error: null };
  };

  const setActiveWorkout = async (planId: string) => {
    if (!user) return;

    await supabase
      .from('workout_plans')
      .update({ is_active: false })
      .eq('user_id', user.id);

    const { error } = await supabase
      .from('workout_plans')
      .update({ is_active: true })
      .eq('id', planId);

    if (error) {
      toast({
        variant: "destructive",
        title: "Erro ao ativar treino",
        description: error.message,
      });
    } else {
      toast({
        title: "Treino ativado!",
        description: "Este treino agora está ativo.",
      });
      await fetchWorkoutPlans();
    }
  };

  return {
    workoutPlans,
    loading,
    createWorkoutPlan,
    setActiveWorkout,
    refetch: fetchWorkoutPlans,
  };
};
