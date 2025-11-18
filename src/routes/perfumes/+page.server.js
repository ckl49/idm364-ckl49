import { supabase } from '$lib/supabase_client';

export async function load() {
    const { data, error } = await supabase
        .from('perfumes')
        .select('*');

    if (error) throw error;

    return { perfumes: data };
}