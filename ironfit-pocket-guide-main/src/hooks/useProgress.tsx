import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

interface Progress {
  id: string;
  user_id: string;
  exercise_id: string;
  weight_kg?: number;
  reps?: number;
  sets?: number;
  notes?: string;
  workout_date: string;
  created_at: string;
}

export const useProgress = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [progressRecords, setProgressRecords] = useState<Progress[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchProgress = async (exerciseId?: string) => {
    if (!user) return;

    setLoading(true);
    
    let query = supabase
      .from('user_progress')
      .select('*')
      .eq('user_id', user.id)
      .order('workout_date', { ascending: false });

    if (exerciseId) {
      query = query.eq('exercise_id', exerciseId);
    }

    const { data, error } = await query;

    if (error) {
      toast({
        variant: "destructive",
        title: "Erro ao carregar progresso",
        description: error.message,
      });
    } else {
      setProgressRecords(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProgress();
  }, [user]);

  const addProgress = async (
    exerciseId: string,
    weight: number,
    reps: number,
    sets: number,
    notes?: string
  ) => {
    if (!user) return { error: 'Usuário não autenticado' };

    const { data, error } = await supabase
      .from('user_progress')
      .insert([{
        user_id: user.id,
        exercise_id: exerciseId,
        weight_kg: weight,
        reps,
        sets,
        notes,
        workout_date: new Date().toISOString(),
      }])
      .select()
      .single();

    if (error) {
      toast({
        variant: "destructive",
        title: "Erro ao salvar progresso",
        description: error.message,
      });
      return { error };
    }

    toast({
      title: "Progresso salvo!",
      description: "Seu treino foi registrado.",
    });

    await fetchProgress();
    return { data, error: null };
  };

  return {
    progressRecords,
    loading,
    addProgress,
    refetch: fetchProgress,
  };
};
