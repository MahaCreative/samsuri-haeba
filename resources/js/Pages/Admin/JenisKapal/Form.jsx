import AddButton from "@/Components/Admin/AddButton";
import DeleteButton from "@/Components/Admin/DeleteButton";
import TextInput from "@/Components/GlobalComponents/TextInput";
import { router, useForm } from "@inertiajs/react";
import React, { useEffect } from "react";

export default function Form({ model, setModel, onClose }) {
    const { data, setData, post, errors, reset } = useForm({
        nama: "",
    });
    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };
    const submitHandler = (e) => {
        e.preventDefault();
        post(route("admin.jenis-kapal-add"), {
            onSuccess: () => {
                reset("nama");
                onClose(false);
            },
        });
    };
    const updateHandler = (e) => {
        e.preventDefault();
        post(route("admin.jenis-kapal-update"), {
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
            nama: model ? model.nama : "",
        });
    }, [model]);
    return (
        <form onSubmit={model ? updateHandler : submitHandler}>
            <TextInput
                onChange={changeHandler}
                nameTitle={"Jenis Kapal"}
                name={"nama"}
                errors={errors.nama}
                value={data.nama}
            />

            <div className="flex gap-3 my-3 w-full justify-end">
                <AddButton type={"submit"} title={model ? "Update" : "Submt"} />
                <DeleteButton onClick={closeHandler} title={"Cancell"} />
            </div>
        </form>
    );
}
