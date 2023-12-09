import React from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import { Badge } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
export default function GuestLayout({ children }) {
    return (
        <div className="bg-slate-950 w-full h-screen text-green-500  overflow-y-hidden relative">
            <div className="flex justify-between items-center px-3 py-3 border-b border-green-500/50 border-dashed">
                <h1 className="font-bold">Pelabuhan Palipi</h1>
                <div className="flex gap-3 items-center">
                    <div>
                        <Badge badgeContent={0} color="error">
                            <div className="text-[12pt]">
                                <ShoppingCartIcon
                                    color="inherit"
                                    fontSize="inherit"
                                />
                            </div>
                        </Badge>
                    </div>
                    <div>
                        <Badge badgeContent={0} color="error">
                            <div className="text-[12pt]">
                                <NotificationsIcon
                                    color="inherit"
                                    fontSize="inherit"
                                />
                            </div>
                        </Badge>
                    </div>
                    <div>
                        <MenuIcon color="inherit" fontSize="inherit" />
                    </div>
                </div>
            </div>
            <div className="h-full bg-slate-950">{children}</div>
            {/* sidebar */}
            {/* <div className="absolute top-0 right-0 bg-slate-800 h-screen w-[85%]"></div> */}
        </div>
    );
}
