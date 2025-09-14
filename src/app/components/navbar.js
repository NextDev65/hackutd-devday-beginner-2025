import React from "react";
import Link from "next/link";
import { User, Settings } from "lucide-react";

function Navbar() {
    return (
        <nav className="flex justify-between py-3 px-20 self-center" 
        style={{ backgroundColor: "oklch(0.6832 0.17227 53.5109)" }}>
            <div title="Settings">
                <Link href="/settings">
                    <Settings size={25} className="cursor-pointer hover:rotate-60 transition"/>
                </Link>
            </div>
            <div className="flex items-center text-2xl font-mono font-bold">
                <Link href="/">
                    DevGPA
                </Link>
            </div>
            <div title="Profile">
                <Link href="/profile">
                    <User size={25} className="cursor-pointer hover:shadow-lg hover:shadow-emerald-700 transition"/>
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;