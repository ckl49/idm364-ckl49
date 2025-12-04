 import { json } from '@sveltejs/kit';
 import { supabase } from '$lib/supabase_client.js';

 export async function GET() {
   // Query Supabase for all products
   const { data, error } = await supabase
    .from('perfumes')
    .select('*')
    .order('id', { ascending: true });

   if (error) {
     console.error(error);
     return json({ error: "Failed to load products" }, { status: 500 });
   }

   return json({ products: data });
}
