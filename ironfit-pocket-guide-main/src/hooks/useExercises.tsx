import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface Exercise {
  id: string;
  name: string;
  description: string;
  muscle_group_id: string;
  difficulty: string;
  equipment: string;
  instructions: string;
  image_url?: string;
  video_url?: string;
  created_at: string;
}

interface MuscleGroup {
  id: string;
  name: string;
  description: string;
}

export const useExercises = () => {
  const { toast } = useToast();
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [muscleGroups, setMuscleGroups] = useState<MuscleGroup[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchMuscleGroups = async () => {
    const { data, error } = await supabase
      .from('muscle_groups')
      .select('*')
      .order('name');

    if (error) {
      toast({
        variant: "destructive",
        title: "Erro ao carregar grupos musculares",
        description: error.message,
      });
    } else {
      setMuscleGroups(data || []);
    }
  };

  const fetchExercises = async (muscleGroupId?: string, searchTerm?: string) => {
    setLoading(true);
    
    let query = supabase
      .from('exercises')
      .select('*')
      .order('name');

    if (muscleGroupId) {
      query = query.eq('muscle_group_id', muscleGroupId);
    }

    if (searchTerm) {
      query = query.ilike('name', `%${searchTerm}%`);
    }

    const { data, error } = await query;

    if (error) {
      toast({
        variant: "destructive",
        title: "Erro ao carregar exercícios",
        description: error.message,
      });
    } else {
      setExercises(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMuscleGroups();
    fetchExercises();
  }, []);

  return {
    exercises,
    muscleGroups,
    loading,
    refetch: fetchExercises,
  };
};
