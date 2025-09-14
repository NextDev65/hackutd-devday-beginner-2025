//AlzaSyCK8EPnK4vfjXQUzPzJTMDSuwrhyhTdLRk

const NEBULA_API_ENDPOINT = 'https://api.utdnebula.com/';

export async function nebulaFetch(path) {
    const url = `${NEBULA_API_ENDPOINT}${path}`;
    const headers = {
        'x-api-key': process.env.NEXT_PUBLIC_NEBULA_KEY,
    };
    const response = await fetch(url, {
        headers,
    });
    console.log(response);
    if (!response.ok) {
        throw new Error(`Nebula API Error: ${response.status}`);
    }
    return response.json();
}