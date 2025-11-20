import { supabase } from '$lib/supabase_client.js';

export async function load() {
  const { data: products, error } = await supabase.from('products').select('*');

  return { products };
}