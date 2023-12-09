import AddButton from "@/Components/Admin/AddButton";
import DeleteButton from "@/Components/Admin/DeleteButton";
import FormatCurrency from "@/Components/GlobalComponents/FormatCurrency";
import TextInput from "@/Components/GlobalComponents/TextInput";
import { router, useForm, usePage } from "@inertiajs/react";
import React, { useEffect } from "react";

export default function Form({ model, setModel, onClose }) {
    const { data, setData, post, errors, reset } = useForm({
        kapal_id: "",
        harga: "",
        kelas_id: "",
        jenis_penumpang_id: "",
    });
    const { kapal } = usePage().props;
    const { jenisPenumpang } = usePage().props;
    const { kelas } = usePage().props;
    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };
    const submitHandler = (e) => {
        e.preventDefault();
        post(route("admin.daftar-harga-add"), {
            onSuccess: () => {
                reset("nama");
                onClose(false);
            },
        });
    };
    const updateHandler = (e) => {
        e.preventDefault();
        post(route("admin.daftar-harga-update"), {
            onSuccess: () => {
                reset("nama");
                onClose(false);
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
            kapal_id: model ? model.kapal_id : "",
            harga: model ? model.harga : "",
            kelas_id: model ? model.kelas_id : "",
            jenis_penumpang_id: model ? model.jenis_penumpang_id : "",
        });
    }, [model]);
    return (
        <form onSubmit={model ? updateHandler : submitHandler}>
            <div className="flex flex-col gap-y-1">
                <p className="capitalize">Nama Kapal</p>
                <select
                    onChange={changeHandler}
                    className="rounded-md uppercase bg-slate-900 border-none active:outline-none focus:ring-2 focus:ring-green-500/50 text-green-500"
                    name="kapal_id"
                    id=""
                >
                    <option value={model ? data.kapal_id : ""}>
                        {model ? model.kapal.nama_kapal : "PILIH KAPAL"}
                    </option>
                    {kapal.map((item, key) => (
                        <option key={key} value={item.id}>
                            {item.nama_kapal}
                        </option>
                    ))}
                </select>
                {errors && (
                    <p className="text-red-500 italic">{errors.kapal_id}</p>
                )}
            </div>
            <div className="flex flex-col gap-y-1">
                <p className="capitalize">Kelas Kapal</p>
                <select
                    onChange={changeHandler}
                    className="rounded-md uppercase bg-slate-900 border-none active:outline-none focus:ring-2 focus:ring-green-500/50 text-green-500"
                    name="kelas_id"
                    id=""
                >
                    <option value={model ? data.kelas_id : ""}>
                        {model ? model.kelas.nama : "Kelas Kapal"}
                    </option>
                    {kelas.map((item, key) => (
                        <option key={key} value={item.id}>
                            {item.nama}
                        </option>
                    ))}
                </select>
                {errors && (
                    <p className="text-red-500 italic">{errors.kelas_id}</p>
                )}
            </div>
            <div className="flex flex-col gap-y-1">
                <p className="capitalize">Jenis Penumpang</p>
                <select
                    onChange={changeHandler}
                    className="rounded-md uppercase bg-slate-900 border-none active:outline-none focus:ring-2 focus:ring-green-500/50 text-green-500"
                    name="jenis_penumpang_id"
                    id=""
                >
                    <option value={model ? data.jenis_penumpang_id : ""}>
                        {model ? model.jenis_penumpang.nama : "Jenis Penumpang"}
                    </option>
                    {jenisPenumpang.map((item, key) => (
                        <option key={key} value={item.id}>
                            {item.nama}
                        </option>
                    ))}
                </select>
                {errors && (
                    <p className="text-red-500 italic">
                        {errors.jenis_penumpang_id}
                    </p>
                )}
            </div>
            <FormatCurrency
                nameTitle={"Harga Tiket"}
                name={"harga"}
                errors={errors.harga}
                defaultValue={data.harga}
                onValueChange={(value, name) => setData(name, value)}
            />

            <div className="flex gap-3 my-3 w-full justify-end">
                <AddButton type={"submit"} title={model ? "Update" : "Submt"} />
                <DeleteButton onClick={closeHandler} title={"Cancell"} />
            </div>
        </form>
    );
}
