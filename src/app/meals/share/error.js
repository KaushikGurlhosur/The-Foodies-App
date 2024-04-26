"use client";

export default function error({ error }) {
  console.log(error);
  return (
    <main className="error">
      <h1>An error occured!</h1>
      <p>Failed to create meal. Please try again later</p>
    </main>
  );
}
