import { Link } from "@inertiajs/react";
import React from "react";

export default function MenuItem({ href, title, ...props }) {
    return (
        <Link {...props} as="div" href={href} className="active:text-slate-700">
            {title}
        </Link>
    );
}
