export async function POST(req: Request) {
    const data = await req.json();
    return new Response("Hello, Next.js!");
}
