import AddButton from "@/Components/Admin/AddButton";
import CardView from "@/Components/Admin/CardView";
import AlertDialogs from "@/Components/GlobalComponents/AlertDialogs";
import Pagination from "@/Components/GlobalComponents/Pagination";
import SearchInput from "@/Components/GlobalComponents/SearchInput";
import TextInput from "@/Components/GlobalComponents/TextInput";
import AdminLayout from "@/Layouts/Admin/AdminLayout";
import { Link, router } from "@inertiajs/react";
import React, { useState } from "react";
import Form from "./Form";
import DeleteButton from "@/Components/Admin/DeleteButton";

export default function JenisKapal(props) {
    const { data: jenisKapal, meta, links, filtered } = props.jenisKapal;
    const [openDialog, setOpenDialog] = useState(false);
    const [openDialogUpdate, setOpenDialogUpdate] = useState(false);
    const [openDialogDelete, setOpenDialogDelete] = useState(false);
    const [model, setModel] = useState([null]);
    const [params, setParams] = useState(filtered);
    const updateHandler = (data) => {
        setModel(data);
        setOpenDialogUpdate(true);
    };
    const deleteModalHandlre = (data) => {
        setModel(data);
        setOpenDialogDelete(true);
    };
    return (
        <div>
            {/* Modals */}
            <div>
                <AlertDialogs
                    title={"Tambah Jenis Kapal"}
                    open={openDialog}
                    onClose={() => setOpenDialog(false)}
                >
                    <Form onClose={setOpenDialog} />
                </AlertDialogs>
                <AlertDialogs
                    title={"Edit Jenis Kapal"}
                    open={openDialogUpdate}
                    onClose={() => setOpenDialogUpdate(false)}
                >
                    <Form
                        onClose={setOpenDialogUpdate}
                        model={model}
                        setModel={setModel}
                    />
                </AlertDialogs>
                <AlertDialogs
                    title={"Edit Jenis Kapal"}
                    open={openDialogDelete}
                    onClose={() => setOpenDialogDelete(false)}
                >
                    <p className="text-center">
                        Apaka anda yakin ingin menghapus data ini?
                    </p>
                    <p className="text-center">
                        Menghapus data ini, akan menghapus data terkait juga?
                    </p>
                    <div className="flex gap-1 justify-end my-4">
                        <AddButton
                            onClick={() =>
                                router.delete(
                                    route("admin.jenis-kapal-delete", {
                                        id: model.id,
                                    }),
                                    {
                                        onSuccess: () => {
                                            setModel([null]);
                                            setOpenDialogDelete(false);
                                        },
                                    }
                                )
                            }
                            title={"Yakin"}
                        />
                        <DeleteButton
                            onClick={() => {
                                setOpenDialogDelete(false);
                                setModel([null]);
                            }}
                            title={"Batalkan"}
                        />
                    </div>
                </AlertDialogs>
            </div>
            <div className="flex gap-x-4 justify-between items-center text-white">
                <AddButton
                    onClick={() => setOpenDialog(true)}
                    title={"tambah Jenis Kapal"}
                />
                <SearchInput filtered={filtered} link={"admin.jenis-kapal"} />
            </div>

            <div className="border border-green-800 border-dashed my-2 py-2 px-2 rounded-md max-h-[70vh] overflow-y-auto">
                {jenisKapal.length > 0 ? (
                    jenisKapal.map((item, key) => (
                        <div
                            key={key}
                            className="my-2 active:bg-slate-950 bg-slate-800 rounded-md text-white px-2 py-2 flex justify-between items-center"
                        >
                            <CardView>
                                <p>{item.nama}</p>
                            </CardView>
                            <div className="flex flex-col gap-1">
                                <AddButton
                                    onClick={() => updateHandler(item)}
                                    title={"update"}
                                />
                                <DeleteButton
                                    onClick={() => deleteModalHandlre(item)}
                                    title={"delete"}
                                />
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-white">
                        Ups belum ada datah yang ditambahkan
                    </p>
                )}
            </div>
            <Pagination meta={meta} links={links} filtered={filtered} />
        </div>
    );
}

JenisKapal.layout = (page) => (
    <AdminLayout children={page} titlePage={"Jenis Kapal"} />
);
