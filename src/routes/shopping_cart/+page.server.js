import { supabase } from '$lib/supabase_client';

export async function load() {
    const { data, error } = await supabase
        .from('perfumes')

    if (error) throw error;

    return {
        featuredPerfumes: data
    };
}