import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => [
  { title: "Kevin Inzelrac" },
  { name: "description", content: "Site en construction" },
];

export default function Index() {
  return (
    <main>
      <h1>Kevin Inzelrac</h1>
      <h3>HOLD TIGHT</h3>
      <br />
      <p>I've been busy</p>
      <p>getting my new website ready</p>
      <p>to launch very soon</p>
    </main>
  );
}
