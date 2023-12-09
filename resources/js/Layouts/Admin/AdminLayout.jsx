import AutoComplete from "@/Components/GlobalComponents/AutoComplete";
import React, { useEffect, useRef, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Menu from "@mui/icons-material/Menu";
import Close from "@mui/icons-material/Close";
import clsx from "clsx";
import DropdownMenu from "@/Components/GlobalComponents/DropdownMenu";
import { Head, usePage } from "@inertiajs/react";
import toast, { Toaster } from "react-hot-toast";
export default function AdminLayout({ children, titlePage }) {
    const sidebarRef = useRef();
    const { flash } = usePage().props;
    const [openSidebar, setOpenSidebar] = useState(false);
    useEffect(() => {
        flash.type && toast[flash.type](flash.message);
    });
    useEffect(() => {
        let handler = (e) => {
            if (!sidebarRef.current.contains(e.target)) {
                setOpenSidebar(false);
            }
        };
        document.addEventListener("mousedown", handler);

        return () => {
            document.removeEventListener("mousedown", handler);
        };
    });
    return (
        <>
            <Toaster />
            <Head title={titlePage} />
            <div className="relative overflow-x-hidden sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-green-500">
                <div className="absolute bg-slate-950 w-full h-full top-0 left-0 text-[10pt]">
                    <div className="relative">
                        {/* navbar */}
                        <div className="">
                            <div className="flex justify-between items-center bg-slate-950 text-green-500 px-3 py-4 border-b border-gray-500/40 border-dashed shadow-sm">
                                <div>PELABUHAN PALIPI</div>
                                <div
                                    onClick={() => setOpenSidebar(true)}
                                    className="py-1 px-2 border border-green-500 rounded-md active:bg-slate-500 active:text-slate-900 duration-300 transition-all"
                                >
                                    <Menu color="inherit" fontSize="inherit" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* breadcumb */}
                    <div className="flex gap-3 py-2 px-4 text-green-500 text-[10pt]">
                        <p className="text-green-500/50">Admin</p>
                        <p className="text-green-500/50">/</p>
                        <p className="italic">{titlePage}</p>
                    </div>

                    <div className="py-2 px-4">{children}</div>
                    {/* SIDEBAR */}
                    <div
                        ref={sidebarRef}
                        className={clsx(
                            openSidebar ? "translate-x-0" : "translate-x-full",

                            "absolute top-0 right-0 w-[80%] h-screen bg-slate-900/50 backdrop-blur-sm transition-all duration-300 p-3 overflow-y-auto"
                        )}
                    >
                        <div
                            onClick={() => setOpenSidebar(false)}
                            className="py-1 px-2 w-10 text-center border border-green-500 rounded-md active:bg-slate-500 active:text-slate-900 duration-300 transition-all text-green-500"
                        >
                            <Close color="inherit" fontSize="inherit" />
                        </div>
                        <div className="w-full flex flex-col gap-3  mt-8">
                            <div className="w-full flex items-center justify-center">
                                <div className="w-24 h-24 rounded-full bg-green-500 ">
                                    <img
                                        src="./storage/img/user_prefiew.png"
                                        alt="user image profile"
                                        className="w-24 h-24 object-contain"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col justify-center items-center text-green-500 border border-dashed border-green-500/30 w-full p-1">
                                <div>USER NAME</div>
                                <div className="text-[8pt]">LEVEL USER</div>
                                <div className="flex justify-center items-center gap-4 w-full">
                                    <button className="py-1 px-3 rounded-md bg-green-500 w-[30%] text-green-800 active:text-green-400 active:bg-green-800 duration-300 transition-all">
                                        Setting Profile
                                    </button>
                                    <button className="py-1 px-3 rounded-md bg-red-500 w-[30%] active:bg-red-800 text-red-800 active:text-red-400 duration-300 transition-all">
                                        Log Out
                                    </button>
                                </div>
                            </div>
                            <div>
                                <DropdownMenu titleMenu={"Master Data"} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
