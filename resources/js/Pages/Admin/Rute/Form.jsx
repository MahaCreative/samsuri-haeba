import AddButton from "@/Components/Admin/AddButton";
import DeleteButton from "@/Components/Admin/DeleteButton";
import TextInput from "@/Components/GlobalComponents/TextInput";
import { router, useForm } from "@inertiajs/react";
import React, { useEffect } from "react";

export default function Form({ model, setModel, onClose }) {
    const { data, setData, post, errors, reset } = useForm({
        kd_rute: "",
        kota_awal: "",
        kota_tujuan: "",
        jarak: "",
        waktu_perjalanan: "",
    });
    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };
    const submitHandler = (e) => {
        e.preventDefault();
        post(route("admin.rute-add"), {
            onSuccess: () => {
                reset(
                    "kd_rute",
                    "kota_awal",
                    "kota_tujuan",
                    "jarak",
                    "waktu_perjalanan"
                );
                onClose(false);
            },
        });
    };
    const updateHandler = (e) => {
        e.preventDefault();
        post(route("admin.rute-update"), {
            onSuccess: () => {
                reset(
                    "kd_rute",
                    "kota_awal",
                    "kota_tujuan",
                    "jarak",
                    "waktu_perjalanan"
                );
                onClose(false);
            },
        });
    };
    const closeHandler = (e) => {
        onClose(false);
        setModel([null]);
    };
    useEffect(() => {
        setData({
            ...data,
            id: model ? model.id : "",
            kd_rute: model ? model.kd_rute : "",
            kota_awal: model ? model.kota_awal : "",
            kota_tujuan: model ? model.kota_tujuan : "",
            jarak: model ? model.jarak : "",
            waktu_perjalanan: model ? model.waktu_perjalanan : "",
        });
    }, [model]);
    return (
        <form onSubmit={model ? updateHandler : submitHandler}>
            <TextInput
                onChange={changeHandler}
                nameTitle={"Kode Rute"}
                name={"kd_rute"}
                errors={errors.kd_rute}
                value={data.kd_rute}
            />
            <TextInput
                onChange={changeHandler}
                nameTitle={"Kode Awal"}
                name={"kota_awal"}
                value={data.kota_awal}
            />
            <TextInput
                onChange={changeHandler}
                nameTitle={"Kota tujuan"}
                name={"kota_tujuan"}
                value={data.kota_tujuan}
            />
            <TextInput
                onChange={changeHandler}
                nameTitle={"jarak"}
                name={"jarak"}
                value={data.jarak}
            />
            <TextInput
                onChange={changeHandler}
                nameTitle={"waktu perjalanan"}
                name={"waktu_perjalanan"}
                value={data.waktu_perjalanan}
            />
            <div className="flex gap-3 my-3 w-full justify-end">
                <AddButton type={"submit"} title={model ? "Update" : "Submt"} />
                <DeleteButton onClick={closeHandler} title={"Cancell"} />
            </div>
        </form>
    );
}
