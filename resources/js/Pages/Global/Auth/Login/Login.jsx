import AddButton from "@/Components/Admin/AddButton";
import TextInput from "@/Components/GlobalComponents/TextInput";
import { Link, useForm } from "@inertiajs/react";
import React from "react";

export default function Login() {
    const { data, setData, post, errors, reset } = useForm({
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
            <div className="bg-white py-3 px-4 rounded-lg w-[80%] flex flex-col items-center">
                <h1 className="font-bold">Log In</h1>
                <form action="" onSubmit={submitHandler} className="w-full">
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
                    <div className="flex justify-end mt-3 w-full">
                        <div className="flex gap-3">
                            <Link
                                href={route("register")}
                                className="text-slate-500 active:text-green-500 text-[8pt]"
                            >
                                Register, jika belum punya akun?
                            </Link>
                            <AddButton
                                className={"text-[8pt] "}
                                title={"Log in"}
                            />
                        </div>
                    </div>
                    <div className="w-full flex justify-end text-blue-800 italic text-[8pt]">
                        <Link href="">Lupa Password?</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
