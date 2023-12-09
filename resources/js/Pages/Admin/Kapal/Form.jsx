import AddButton from "@/Components/Admin/AddButton";
import DeleteButton from "@/Components/Admin/DeleteButton";
import TextInput from "@/Components/GlobalComponents/TextInput";
import { router, useForm, usePage } from "@inertiajs/react";
import React, { useEffect } from "react";

export default function Form({ model, setModel, onClose }) {
    const { data, setData, post, errors, reset } = useForm({
        jenis_kapal_id: "",
        nama_kapal: "",
        kapasitas: "",
        fasilitas_umum: "",
        keterangan: "",
        foto: "",
    });
    const { jenisKapal } = usePage().props;
    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };
    const submitHandler = (e) => {
        e.preventDefault();
        post(route("admin.kapal-add"), {
            onSuccess: () => {
                reset("nama_kapal");
                onClose(false);
            },
        });
    };
    const updateHandler = (e) => {
        e.preventDefault();
        post(route("admin.kapal-update"), {
            onSuccess: () => {
                reset("nama_kapal");
                onClose(false);
                setModel(null);
            },
        });
    };
    const closeHandler = (e) => {
        onClose(false);
        setModel(null);
    };
    useEffect(() => {
        setData({
            ...data,
            id: model ? model.id : "",
            jenis_kapal_id: model ? model.jenis_kapal_id : "",
            nama_kapal: model ? model.nama_kapal : "",
            kapasitas: model ? model.kapasitas : "",
            fasilitas_umum: model ? model.fasilitas_umum : "",
            keterangan: model ? model.keterangan : "",
            foto: model ? model.foto : "",
        });
    }, [model]);
    console.log(model);
    return (
        <form onSubmit={model ? updateHandler : submitHandler}>
            <TextInput
                onChange={changeHandler}
                nameTitle={"Nama Kapal"}
                name={"nama_kapal"}
                errors={errors.nama_kapal}
                value={data.nama_kapal}
            />
            <div className="flex flex-col gap-y-1">
                <p className="capitalize">jenis Kapal</p>
                <select
                    onChange={changeHandler}
                    className="rounded-md uppercase bg-slate-900 border-none active:outline-none focus:ring-2 focus:ring-green-500/50 text-green-500"
                    name="jenis_kapal_id"
                    id=""
                >
                    <option value={model ? model.jenis_kapal_id : ""}>
                        {model ? model.jenis_kapal.nama : "PILIH JENIS KAPAL"}
                    </option>
                    {jenisKapal.map((item, key) => (
                        <option key={key} value={item.id}>
                            {item.nama}
                        </option>
                    ))}
                </select>
                {errors && (
                    <p className="text-red-500 italic">
                        {errors.jenis_kapal_id}
                    </p>
                )}
            </div>
            <TextInput
                onChange={changeHandler}
                nameTitle={"kapasitas"}
                name={"kapasitas"}
                errors={errors.kapasitas}
                value={data.kapasitas}
            />
            <TextInput
                onChange={changeHandler}
                nameTitle={"Fasilitas Umum"}
                name={"fasilitas_umum"}
                errors={errors.fasilitas_umum}
                value={data.fasilitas_umum}
            />
            <TextInput
                onChange={changeHandler}
                nameTitle={"Keterangan"}
                name={"keterangan"}
                errors={errors.keterangan}
                value={data.keterangan}
            />
            <TextInput
                onChange={(e) => setData("foto", e.target.files[0])}
                nameTitle={"foto"}
                type="file"
                name={"foto"}
                errors={errors.foto}
            />
            <div className="flex gap-3 my-3 w-full justify-end">
                <AddButton
                    type={"submit"}
                    title={model ? "Update" : "Submit"}
                />
                <DeleteButton onClick={closeHandler} title={"Cancell"} />
            </div>
        </form>
    );
}
