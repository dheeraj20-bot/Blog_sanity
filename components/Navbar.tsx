import Link from "next/link"
import { ModeToggle } from "./ModeToggle"

export default function Navbar(){
    return (
        <nav className="w-full relative flex max-w-2xl mx-auto py-5 px-4 items-center 
        justify-between">
            <Link href="/" className="font-bold text-3xl">
                Anas<span className="text-purple-800">Blog</span>
            </Link>

            <ModeToggle/>
        </nav>
    )
}