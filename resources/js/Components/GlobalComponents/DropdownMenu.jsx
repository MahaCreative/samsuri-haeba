import React, { useEffect, useRef, useState } from "react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import MenuItem from "./MenuItem";
import clsx from "clsx";
export default function DropdownMenu({ titleMenu }) {
    const menuRef = useRef();
    const [open, setOpen] = useState(false);

    useEffect(() => {
        let handler = (e) => {
            if (!menuRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);

        return () => {
            document.removeEventListener("mousedown", handler);
        };
    });
    return (
        <div
            ref={menuRef}
            onClick={() => setOpen(!open)}
            className={clsx(
                open ? "bg-slate-900" : "",
                "text-green-500 active:bg-slate-900 relative duration-300 transition-all"
            )}
        >
            <div className="flex items-center">
                <div className={"text-3xl "}>
                    <ArrowRightIcon
                        color="inherit"
                        fontSize="inherit"
                        className={clsx(
                            open ? "rotate-90" : "",
                            "duration-300 transition-all"
                        )}
                    />
                </div>
                <div>{titleMenu}</div>
            </div>
            <div className="ml-3 pl-3 border-l border-white/40 border-dashed">
                <div
                    className={clsx(
                        open ? "translate-y-0 max-h-52 p-y" : "max-h-0 ",
                        "duration-300 transition-all overflow-hidden"
                    )}
                >
                    <MenuItem title={"penjualan"} />
                    <MenuItem title={"penjualan"} />
                    <MenuItem title={"penjualan"} />
                </div>
            </div>
        </div>
    );
}
