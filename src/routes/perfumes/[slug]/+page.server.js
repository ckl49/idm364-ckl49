import { supabase } from '$lib/supabase_client';

export async function load({ params }) {
    const { slug } = params;

    // Convert slug to name ("ombre-leather" → "ombre leather")
    const perfumeName = slug.replaceAll('-', ' ');

    // Fetch single perfume
    const { data: perfume, error: perfumeError } = await supabase
        .from('perfumes')
        .select('*')
        .ilike('perfume_name', perfumeName)
        .single();

    if (perfumeError) {
        console.error('Error loading perfume:', perfumeError);
        throw perfumeError;
    }

    // Fetch carousel perfumes
    const { data: featuredPerfumes, error: carouselError } = await supabase
        .from('perfumes')
        .select('*')
        .limit(7);

    if (carouselError) {
        console.error('Error loading carousel perfumes:', carouselError);
        throw carouselError;
    }

    // return BOTH sets of data
    return {
        perfume,
        featuredPerfumes
    };
}