import clsx from "clsx";
import React from "react";

export default function AddButton({ className, title, ...props }) {
    return (
        <button
            {...props}
            className={clsx(
                " bg-green-500 active:bg-green-700 px-3 rounded-md transition-all  duration-300 active:text-green-400 capitalize",
                className
            )}
        >
            {title}
        </button>
    );
}
