"use client"
import Link from "next/link"
import {usePathname} from "next/navigation";

export const Navigation =() => {
    const pathname = usePathname();
    return(
        <nav className="text-xl">
            <Link href="/" className= {`hover:text-white mr-1 py-2 px-4 hover:bg-green-900 hover:border-2 hover:border-green-900 rounded-xl transition-colors {pathname === "/" ? "font-bold text-green-900 mr-4" : "mr-4"}`}>
                Home
            </Link>
            <Link
                href="/login"
                className="border-2 border-green-900 text-green-900 py-2 px-4 mr-1 rounded-xl hover:bg-green-900 hover:text-white transition-colors"
            >
                Login
            </Link>
            <Link
                href="/register"
                className="border-2 border-pink-400 bg-pink-400 text-white py-2 px-4 rounded-xl hover:bg-pink-600 hover:border-pink-600 transition-colors"
            >
                Register
            </Link>

        </nav>
    )
}