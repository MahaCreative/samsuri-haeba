import { Link } from "@inertiajs/react";
import React from "react";

export default function MenuDashboard({ titleButton, icon, ...props }) {
    return (
        <Link
            {...props}
            as="div"
            className="flex flex-col items-center justify-center gap-3 border border-dashed border-slate-700/50 rounded-xl text-green-500 active:bg-slate-700 duration-300 transition-all p-3 active:text-slate-800"
        >
            <p className="font-light">Kelola</p>
            <div className="text-6xl">{icon}</div>
            <p className="font-extrabold text-[12pt] text-center">
                {titleButton}
            </p>
        </Link>
    );
}
