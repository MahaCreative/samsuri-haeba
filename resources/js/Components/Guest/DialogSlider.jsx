import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import clsx from "clsx";
export default function DialogSlider({
    open,
    onClose,
    nameTitle,
    children,
    className,
}) {
    return (
        <div
            className={clsx(
                open ? "border-t" : "h-[0vh]",
                "absolute bottom-0 left-0 w-full bg-slate-950 overflow-hidden z-[50] transition-all ease-in-out duration-300 rounded-3xl shadow-md shadow-gray-800  border-slate-700 overflow-y-auto",
                className
            )}
        >
            <div className="w-full h-full px-3 py-2">
                <div className="flex gap-3 items-center">
                    <p
                        className="active:text-slate-600 text-xl"
                        onClick={() => onClose(false)}
                    >
                        <CloseIcon color="inherit" fontSize="inherit" />
                    </p>
                    <h1 className="font-bold capitalize">{nameTitle}</h1>
                </div>
                <div>{children}</div>
            </div>
        </div>
    );
}
