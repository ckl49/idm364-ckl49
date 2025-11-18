import { supabase } from '$lib/supabase_client';

export async function load() {
    const { data, error } = await supabase
        .from('perfumes')
        .select('*')
        .limit(7); // <-- only take first 7

    if (error) throw error;

    return {
        featuredPerfumes: data
    };
}