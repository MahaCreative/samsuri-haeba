import React from "react";

export default function DeleteButton({ title, ...props }) {
    return (
        <button
            {...props}
            type="button"
            className=" bg-red-500 active:bg-red-700 px-3 rounded-md transition-all duration-300 active:text-red-400 capitalize"
        >
            {title}
        </button>
    );
}
