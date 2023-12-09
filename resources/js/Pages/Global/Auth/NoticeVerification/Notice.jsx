import AddButton from "@/Components/Admin/AddButton";
import TextInput from "@/Components/GlobalComponents/TextInput";
import { Link, useForm } from "@inertiajs/react";
import clsx from "clsx";
import moment from "moment/moment";
import React, { useEffect, useState } from "react";

export default function Notice(props) {
    const user = props.user;
    const [countdown, setCountdown] = useState(60); // 60 detik atau 1 menit

    const restartCountdown = () => {
        setCountdown(60);
        startCountdown();
    };

    const startCountdown = () => {
        const interval = setInterval(() => {
            setCountdown((prevCountdown) => {
                if (prevCountdown > 0) {
                    return prevCountdown - 1;
                } else {
                    clearInterval(interval);
                    return 0;
                }
            });
        }, 1000);
    };

    useEffect(() => {
        startCountdown();

        // Membersihkan interval pada unmount
        return () => clearInterval(interval);
    }, []);
    return (
        <div className="bg-slate-950 w-full h-screen flex items-center justify-center">
            <div className="bg-white py-3 px-4 rounded-lg w-[95%] flex flex-col items-center">
                <h1 className="font-bold">Message</h1>
                <p className="capitalize">
                    Selamat datang di{" "}
                    <span className="text-slate-950 font-bold">
                        Sistem Pemesanan Tiket Kapal Laut Pelabuhan palipi
                    </span>{" "}
                    kami! Kami sangat senang Anda bergabung. Untuk melanjutkan
                    penggunaan akun Anda, harap lakukan verifikasi email dengan
                    mengecek inbox email anda{" "}
                    <span className="font-bold lowercase">{user.email}</span>{" "}
                    dan mengklik tautan verifikasi yang telah kami kirimkan.
                </p>

                <p>
                    Jika belum menerima email verifikasi silahkan klick tombol
                    dibawah ini
                </p>
                <p className="text-red-500 italic font-light text-[8pt]">
                    Tombol bisa di klick setelah :{" "}
                    <span className="font-bold">{countdown}</span>
                </p>
                <Link
                    method="post"
                    as="button"
                    onClick={restartCountdown}
                    disabled={countdown <= 0 ? false : true}
                    href={route("verification.send")}
                    className={clsx(
                        countdown <= 0 ? "bg-slate-800" : "bg-slate-600",
                        "active:bg-slate-950 disabled:bg-slate-600 py-2 px-4  rounded-md  shadow shadow-gray-500 text-white font-extralight my-2"
                    )}
                >
                    Kirim Ulang Email Verifikasi
                </Link>

                <p className="text-center my-3">
                    Terima kasih atas partisipasinya!
                </p>
            </div>
        </div>
    );
}
