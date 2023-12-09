import {
    AppBar,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    IconButton,
    Paper,
    Slide,
    Toolbar,
} from "@mui/material";
import React, { Fragment, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import clsx from "clsx";
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogs({ open, onClose, children, title }) {
    return (
        <div
            className={clsx(
                open ? "block opacity-100" : "collapse opacity-0",
                "absolute top-0 left-0 w-full min-h-screen  bg-slate-950/50 backdrop:blur-sm z-[999] p-4 transition-opacity "
            )}
        >
            <div className="relative w-full h-screen flex items-center justify-center overflow-x-hidden">
                <div
                    className={clsx(
                        open ? "translate-y-0" : "translate-y-full",
                        " bg-white w-full absolute duration-200 transition-all rounded-lg overflow-hidden"
                    )}
                >
                    {/* top */}
                    <div className="flex gap-2 border-b border-dashed border-green-500 px-2 py-1 items-center">
                        <div onClick={() => onClose(false)}>
                            <CloseIcon />
                        </div>
                        <p>{title}</p>
                    </div>
                    <div className="px-3 py-5">{children}</div>
                </div>
            </div>
        </div>
    );
}
