import MenuDashboard from "@/Components/Admin/MenuDashboard";
import AdminLayout from "@/Layouts/Admin/AdminLayout";
import React from "react";
import ClassIcon from "@mui/icons-material/Class";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import EventIcon from "@mui/icons-material/Event";
import Class from "@mui/icons-material/Class";
import DirectionsBoatIcon from "@mui/icons-material/DirectionsBoat";
import HouseboatIcon from "@mui/icons-material/Houseboat";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
export default function Dashboard() {
    return (
        <>
            <div className="grid grid-cols-3 gap-3">
                <MenuDashboard
                    icon={<ClassIcon fontSize="inherit" color="inherit" />}
                    titleButton={"Kelas"}
                />
                <MenuDashboard
                    icon={
                        <AddLocationIcon fontSize="inherit" color="inherit" />
                    }
                    titleButton={"Rute"}
                />
                <MenuDashboard
                    icon={
                        <DirectionsBoatIcon
                            fontSize="inherit"
                            color="inherit"
                        />
                    }
                    titleButton={"Kapal"}
                />

                <MenuDashboard
                    icon={<HouseboatIcon fontSize="inherit" color="inherit" />}
                    titleButton={"Jenis Kapal"}
                />
                <MenuDashboard
                    icon={<EventIcon fontSize="inherit" color="inherit" />}
                    titleButton={"Jadwal Kapal"}
                />
                <MenuDashboard
                    icon={
                        <FormatListNumberedIcon
                            fontSize="inherit"
                            color="inherit"
                        />
                    }
                    titleButton={"Daftar Harga"}
                />

                <MenuDashboard
                    icon={<HouseboatIcon fontSize="inherit" color="inherit" />}
                    titleButton={"Pesanan"}
                />
                <MenuDashboard
                    icon={<EventIcon fontSize="inherit" color="inherit" />}
                    titleButton={"Garasi"}
                />
                <MenuDashboard
                    icon={
                        <FormatListNumberedIcon
                            fontSize="inherit"
                            color="inherit"
                        />
                    }
                    titleButton={"Laporan"}
                />
            </div>
        </>
    );
}

Dashboard.layout = (page) => (
    <AdminLayout children={page} titlePage={"Dashboard"} />
);
