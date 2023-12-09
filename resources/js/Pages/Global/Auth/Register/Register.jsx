import AddButton from "@/Components/Admin/AddButton";
import TextInput from "@/Components/GlobalComponents/TextInput";
import { Link, useForm } from "@inertiajs/react";
import React from "react";

export default function Register() {
    const { data, setData, post, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });
    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };
    const submitHandler = (Event) => {
        Event.preventDefault();
        post(route("register"));
    };
    return (
        <div className="bg-slate-950 w-full h-screen flex items-center justify-center">
            <div className="bg-white py-3 px-4 rounded-lg w-[95%] flex flex-col items-center">
                <h1 className="font-bold">REGISTER</h1>
                <form action="" onSubmit={submitHandler}>
                    <TextInput
                        onChange={changeHandler}
                        nameTitle={"User Name"}
                        name={"name"}
                        errors={errors.name}
                    />
                    <TextInput
                        onChange={changeHandler}
                        nameTitle={"email"}
                        name={"email"}
                        errors={errors.email}
                    />
                    <TextInput
                        onChange={changeHandler}
                        type="password"
                        nameTitle={"password"}
                        name={"password"}
                        errors={errors.password}
                    />
                    <TextInput
                        onChange={changeHandler}
                        type="password"
                        nameTitle={"Password Confirmation"}
                        name={"password_confirmation"}
                        errors={errors.password}
                    />
                    <div className="flex justify-end my-3 w-full">
                        <div className="flex gap-3">
                            <Link
                                href={route("login")}
                                className="text-slate-500 active:text-green-500"
                            >
                                Login, jika sudah punya akun?
                            </Link>
                            <AddButton title={"Register"} />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
