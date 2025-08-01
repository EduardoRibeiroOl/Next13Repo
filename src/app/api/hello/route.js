const URL = "https://jsonplaceholder.typicode.com/posts";

async function A() {
    const resp = await fetch(URL);
    if (resp.status === 200) {
        const ob = await resp.json();
        return ob; // ⚠️ Agora retorna os dados
    }
}

export async function GET() {
    const data = await A(); // Pega o resultado de A()
    const post = data.find(post => post.id === 1)
    return Response.json(post); // ⚠️ Retorna como JSON para o frontend
}