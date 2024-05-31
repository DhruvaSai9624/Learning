import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>
        <h1>Hello world!</h1>
      </div>
      <Link href="/users">Users</Link>
      <br />
      <Link href='/'>Home</Link>
    </>
  );
}
