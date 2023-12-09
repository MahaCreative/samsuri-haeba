import AddButton from "@/Components/Admin/AddButton";
import DeleteButton from "@/Components/Admin/DeleteButton";
import TextInput from "@/Components/GlobalComponents/TextInput";
import { router, useForm, usePage } from "@inertiajs/react";
import React, { useEffect } from "react";

export default function Form({ model, setModel, onClose }) {
    const { data, setData, post, errors, reset } = useForm({
        kapal_id: "",
        rute_id: "",
        tanggal_berangkat: "",
        jam_berangkat: "",
        status_keberangkatan: "",
        keterangan: "",
    });
    const { kapal } = usePage().props;
    const { rute } = usePage().props;
    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };
    const submitHandler = (e) => {
        e.preventDefault();
        post(route("admin.jadwal-kapal-add"), {
            onSuccess: () => {
                reset();
                onClose(false);
                setModel(null);
            },
        });
    };
    const updateHandler = (e) => {
        e.preventDefault();
        post(route("admin.jadwal-kapal-update"), {
            onSuccess: () => {
                reset();
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
            kapal_id: model ? model.kapal_id : "",
            rute_id: model ? model.rute_id : "",
            tanggal_berangkat: model ? model.tanggal_berangkat : "",
            jam_berangkat: model ? model.jam_berangkat : "",
            status_keberangkatan: model ? model.status_keberangkatan : "",
            keterangan: model ? model.keterangan : "",
        });
    }, [model]);
    console.log(model);
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
                <p className="capitalize">Rute Keberangkatan</p>
                <select
                    onChange={changeHandler}
                    className="rounded-md uppercase bg-slate-900 border-none active:outline-none focus:ring-2 focus:ring-green-500/50 text-green-500"
                    name="rute_id"
                    id=""
                >
                    <option value={model ? model.rute_id : ""}>
                        {model ? (
                            <p>
                                {model.rute.kota_awal} ->{" "}
                                {model.rute.kota_tujuan}
                            </p>
                        ) : (
                            "PILIH TUJUAN"
                        )}
                    </option>
                    {rute.map((item, key) => (
                        <option key={key} value={item.id}>
                            {item.kota_awal} -> {item.kota_tujuan}
                        </option>
                    ))}
                </select>
                {errors && (
                    <p className="text-red-500 italic">{errors.rute_id}</p>
                )}
            </div>
            <TextInput
                onChange={changeHandler}
                nameTitle={"Tanggal Keberangkatan"}
                name={"tanggal_berangkat"}
                errors={errors.tanggal_berangkat}
                value={data.tanggal_berangkat}
                type="date"
            />

            <TextInput
                onChange={changeHandler}
                nameTitle={"Jam Berangkat"}
                name={"jam_berangkat"}
                errors={errors.jam_berangkat}
                value={data.jam_berangkat}
                type="time"
            />
            <div className="flex flex-col gap-y-1">
                <p className="capitalize">Status Jadwal Kapal</p>
                <select
                    onChange={changeHandler}
                    className="rounded-md uppercase bg-slate-900 border-none active:outline-none focus:ring-2 focus:ring-green-500/50 text-green-500"
                    name="status_keberangkatan"
                    id=""
                >
                    <option value={model ? data.status_keberangkatan : ""}>
                        {model
                            ? model.status_keberangkatan
                            : "PILIH STATUS KEBERANGKATAN"}
                    </option>
                    <option value="berangkat">Berangkat</option>
                    <option value="menungu berangkat">
                        Menunggu berangkat
                    </option>
                    <option value="gagal">Gagal Berangkat</option>
                </select>
                {errors && (
                    <p className="text-red-500 italic">
                        {errors.status_keberangkatan}
                    </p>
                )}
            </div>
            <TextInput
                onChange={changeHandler}
                nameTitle={"Keterangan"}
                name={"keterangan"}
                errors={errors.keterangan}
                value={data.keterangan}
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
