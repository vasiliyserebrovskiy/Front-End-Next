import Link from "next/link";
import ThemeToggler from "../ThemeToggler/ThemeToggler";
import AuthButton from "../AuthButton/AuthButton";

export default function NavBar() {
  return (
    <nav className="flex justify-center items-center gap-6 min-h-12 flex-wrap">
      <Link href={"/"} className="hover:text-amber-300">
        Home
      </Link>
      <Link href={"/about"} className="hover:text-amber-300">
        About
      </Link>
      <Link href={"/sports"} className="hover:text-amber-300">
        Sports
      </Link>
      <Link href={"/settings"} className="hover:text-amber-300">
        Settings
      </Link>
      <Link href={"/users/client-version"} className="hover:text-amber-300">
        Users
      </Link>
      <Link href={"/products/client-version"} className="hover:text-amber-300">
        Products
      </Link>
      <Link href={"/categories"} className="hover:text-amber-300">
        Categories
      </Link>
      <Link href={"/events"} className="hover:text-amber-300">
        Events
      </Link>
      <Link href={"/profile"} className="hover:text-amber-300">
        Profile
      </Link>
      <AuthButton />
      <ThemeToggler />
    </nav>
  );
}
