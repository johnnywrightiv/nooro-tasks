import { RocketIcon } from "lucide-react";
import Link from "next/link";

export default function Header() {

  return (
<header className="h-40 -mb-9 flex items-center justify-center space-x-2 bg-black">
  <Link href="/" className="flex items-center space-x-2">
    <RocketIcon className="h-8 w-8 text-primary" />
    <div className="text-4xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
      Todo App
    </div>
  </Link>
</header>


  )
}
