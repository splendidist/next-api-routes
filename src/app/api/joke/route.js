//GET
export async function GET() {
  const response = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  });

  const data = await response.json();

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
}

//POST
export async function POST(request) {
  const data = await request.json();
  return new Response(JSON.stringify(data));
}
