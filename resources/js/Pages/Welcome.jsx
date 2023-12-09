import AdminLayout from "@/Layouts/Admin/AdminLayout";
import { Link, Head } from "@inertiajs/react";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return <></>;
}
Welcome.layout = (page) => (
    <AdminLayout children={page} titlePage={"Welcone"} />
);
