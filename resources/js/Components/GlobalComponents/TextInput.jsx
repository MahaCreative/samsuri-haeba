import React from "react";

export default function TextInput({ name, nameTitle, errors, ...props }) {
    return (
        <div className="flex flex-col gap-y-1 w-full">
            <p className="capitalize">{nameTitle}</p>
            <input
                {...props}
                name={name}
                className="rounded-md bg-slate-900 border-none active:outline-none focus:ring-2 focus:ring-green-500/50 text-green-500 w-full"
            />
            {errors && <p className="text-red-500 italic">{errors}</p>}
        </div>
    );
}
