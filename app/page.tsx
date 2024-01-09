import Link from "next/link";

export default function Home() {
  return (
    <main>
      <p>Home</p>
      <Link href={"/about"}>About</Link>
    </main>
  );
}
