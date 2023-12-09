import AddButton from "@/Components/Admin/AddButton";
import DeleteButton from "@/Components/Admin/DeleteButton";
import FormatCurrency from "@/Components/GlobalComponents/FormatCurrency";
import TextInput from "@/Components/GlobalComponents/TextInput";
import { router, useForm } from "@inertiajs/react";
import React, { useEffect } from "react";

export default function Form({ model, setModel, onClose }) {
    const { data, setData, post, errors, reset } = useForm({
        nama_garasi: "",
        harga_garasi: "",
        min_berat: "",
        max_berat: "",
    });
    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };
    const submitHandler = (e) => {
        e.preventDefault();
        post(route("admin.garasi-add"), {
            onSuccess: () => {
                reset("nama");
                onClose(false);
            },
        });
    };
    const updateHandler = (e) => {
        e.preventDefault();
        post(route("admin.garasi-update"), {
            onSuccess: () => {
                reset("nama");
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
            nama_garasi: model ? model.nama_garasi : "",
            harga_garasi: model ? model.harga_garasi : "",
            min_berat: model ? model.min_berat : "",
            max_berat: model ? model.max_berat : "",
        });
    }, [model]);
    return (
        <form onSubmit={model ? updateHandler : submitHandler}>
            <TextInput
                onChange={changeHandler}
                nameTitle={"Nama Garasi"}
                name={"nama_garasi"}
                errors={errors.nama_garasi}
                value={data.nama_garasi}
            />

            <FormatCurrency
                nameTitle={"Harga Garasi"}
                name={"harga_garasi"}
                errors={errors.harga_garasi}
                defaultValue={data.harga_garasi}
                onValueChange={(value, name) => setData(name, value)}
            />
            <TextInput
                onChange={changeHandler}
                nameTitle={"Minimal Berat"}
                name={"min_berat"}
                errors={errors.min_berat}
                value={data.min_berat}
            />

            <TextInput
                onChange={changeHandler}
                nameTitle={"Maximal Berat"}
                name={"max_berat"}
                errors={errors.max_berat}
                value={data.max_berat}
            />

            <div className="flex gap-3 my-3 w-full justify-end">
                <AddButton type={"submit"} title={model ? "Update" : "Submt"} />
                <DeleteButton onClick={closeHandler} title={"Cancell"} />
            </div>
        </form>
    );
}
