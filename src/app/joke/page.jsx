export default async function Jokes() {
  const response = await fetch("http://localhost:3000/api/joke");
  const data = await response.json();
  return (
    <div>
      <h2>Random Dad Joke</h2>
      <h3>{data.joke}</h3>
    </div>
  );
}
