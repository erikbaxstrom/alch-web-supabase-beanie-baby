const SUPABASE_URL = 'https://gxwgjhfyrlwiqakdeamc.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNjQxMTMxMiwiZXhwIjoxOTUxOTg3MzEyfQ.PHekiwfLxT73qQsLklp0QFEfNx9NlmkssJFDnlvNIcA';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getBeanies(name, searchSign) {
    let query = client.from('beanie_babies').select('*').order('title').limit(20);

    if (name) {
        query = query.ilike('title', `%${name}%`);
    }

    if (searchSign) {
        // console.log('searchSign in query', searchSign);
        query = query.eq('astroSign', searchSign);
    }

    const response = await query;
    return response;
}

export async function getSigns() {
    let query = client.from('beanie_baby_astro_signs').select('*');
    const response = await query;
    return response;
}
