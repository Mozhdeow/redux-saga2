import React from 'react';
import Link from "next/link";

function Header() {
    return (
        <>
                <div className="flex gap-5 justify-center items-center py-5 mb-10">
                    <Link href={'/about'} className="text-slate-700 text-lg font-bold">About</Link>
                    <Link href={'/'} className="text-slate-700 text-lg font-bold">Home</Link>
                    <Link href={'/user'} className="text-slate-700 text-lg font-bold">AddNew</Link>
                </div>
        </>
    );
}

export default Header;