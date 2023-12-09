import GuestLayout from "@/Layouts/Guest/GuestLayout";
import React, { useEffect, useState } from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddButton from "@/Components/Admin/AddButton";
import DialogSlider from "@/Components/Guest/DialogSlider";
import TextInput from "@/Components/GlobalComponents/TextInput";
import TuneIcon from "@mui/icons-material/Tune";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AlertDialogs from "@/Components/GlobalComponents/AlertDialogs";
import clsx from "clsx";
import { usePage } from "@inertiajs/react";
export default function Home(props) {
    const { kelas } = usePage().props;
    const { jenisPenumpang } = usePage().props;
    const { data: jadwalKapal, meta, links } = props.jadwalKapal;
    const [dialogJadwal, setDialogJadwal] = useState(false);
    const [dialogPenumpang, setDialogPenumpang] = useState(false);
    const [dialogKelas, setDialogKelas] = useState(false);
    const [modalFilter, setModalFilter] = useState(false);
    const [viewIdHargaTiket, setViewIdHargaTiket] = useState(0);
    const [dataPesanan, setDataPesanan] = useState();
    const [dataKelas, setDataKelas] = useState({ id: "", kelas: "" });
    const [dataPenumpang, setDataPenumpang] = useState({});

    useEffect(() => {
        const initialDataPenumpang = jenisPenumpang.reduce((acc, penumpang) => {
            acc[penumpang.nama.toLowerCase()] = {
                id: penumpang.id,
                jumlah: 0,
            };
            return acc;
        }, []);
        setDataPenumpang(initialDataPenumpang);
    }, []);

    const handleInputChange = (jenisPenumpang, value) => {
        setDataPenumpang((prevData) => ({
            ...prevData,
            [jenisPenumpang]: {
                ...prevData[jenisPenumpang],
                jumlah: value,
            },
        }));
    };

    const handleIncrement = (jenisPenumpang) => {
        setDataPenumpang((prevData) => ({
            ...prevData,
            [jenisPenumpang]: {
                ...prevData[jenisPenumpang],
                jumlah: prevData[jenisPenumpang].jumlah + 1,
            },
        }));
    };

    const handleDecrement = (jenisPenumpang) => {
        setDataPenumpang((prevData) => ({
            ...prevData,
            [jenisPenumpang]: {
                ...prevData[jenisPenumpang],
                jumlah: Math.max(prevData[jenisPenumpang].jumlah - 1, 0),
            },
        }));
    };

    return (
        <div className="h-full">
            <div className="">
                <AlertDialogs
                    open={modalFilter}
                    onClose={() => setModalFilter(false)}
                >
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Culpa beatae deserunt facilis sunt aliquid
                        perferendis suscipit quam, veniam ullam odio
                        necessitatibus animi ipsum debitis illo, tempora eveniet
                        placeat praesentium unde id dolorem eligendi omnis a
                        pariatur. Reiciendis delectus tempora excepturi nobis
                        omnis, corrupti natus, nam corporis explicabo,
                        praesentium quasi voluptas.
                    </p>
                </AlertDialogs>
            </div>
            <div className="">
                <img src="./storage/img/bgkapal.jpg" alt="" />
            </div>
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <div className="bg-slate-950 w-[80%] rounded-lg shadow-md shadow-gray-800/50  py-3 px-4 flex flex-col items-center">
                    <button
                        onClick={() => setDialogJadwal(true)}
                        className="py-2 my-2 active:bg-slate-900 w-full border border-green-500 rounded-md text-center"
                    >
                        <h3>CARI JADWAL </h3>
                    </button>

                    <div className="my-1 w-full text-center">
                        <h3>Nama Kapal</h3>
                        <p className="font-bold">
                            {dataPesanan
                                ? dataPesanan.kapal.nama_kapal
                                : "Belum ada kapal"}
                        </p>
                    </div>
                    <div className="flex px-2 justify-between items-center w-full border-b border-gray-700/50">
                        <div>
                            <p className="font-extralight text-[10pt] text-right">
                                Asal
                            </p>
                            <p className="font-bold text-[12pt] text-right">
                                {dataPesanan
                                    ? dataPesanan.rute.kota_awal
                                    : "Pilih Asal"}
                            </p>
                        </div>
                        <div className="flex items-center justify-center">
                            <p className="font-bold text-3xl">
                                <DoubleArrowIcon
                                    color="inherit"
                                    fontSize="inherit"
                                />
                            </p>
                        </div>
                        <div>
                            <p className="font-extralight text-[10pt] text-right">
                                Tujuan
                            </p>
                            <p className="font-bold text-[12pt] text-right">
                                {dataPesanan
                                    ? dataPesanan.rute.kota_tujuan
                                    : "Pilih Asal"}
                            </p>
                        </div>
                    </div>
                    {/* tanggal berangkat */}
                    <div className="flex px-2 gap-x-2 py-2 items-center w-full border-b border-gray-700/50">
                        <p className="text-[16pt]">
                            <CalendarMonthIcon
                                color="inherit"
                                fontSize="inherit"
                            />
                        </p>
                        <div>
                            <p className="italic font-light text-[8pt]">
                                Tanggal Berangkat
                            </p>
                            <p>
                                {dataPesanan
                                    ? dataPesanan.tanggal_berangkat
                                    : ""}
                            </p>
                        </div>
                    </div>
                    {/* jumlah penumpang */}
                    <div
                        onClick={() => setDialogPenumpang(true)}
                        className="flex px-2 active:bg-slate-900 gap-x-2 py-2 items-center w-full border-b border-gray-700/50"
                    >
                        <p className="text-[16pt]">
                            <AccountCircleIcon
                                color="inherit"
                                fontSize="inherit"
                            />
                        </p>
                        <div>
                            <p className="italic font-light text-[8pt]">
                                Jumlah Penumpang
                            </p>
                            <div className="flex gap-x-2">
                                {Object.keys(dataPenumpang).map((data, key) => (
                                    <div key={key} className="flex gap-x-2">
                                        {data} {dataPenumpang[data].jumlah},
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* kelas penumpang */}
                    <div
                        onClick={() => setDialogKelas(true)}
                        className="flex active:bg-slate-900 px-2 gap-x-2 py-2 items-center w-full border-b border-gray-700/50"
                    >
                        <p className="text-[16pt]">
                            <AccountCircleIcon
                                color="inherit"
                                fontSize="inherit"
                            />
                        </p>
                        <div>
                            <p className="italic font-light text-[8pt]">
                                Kelas Perjalanan
                            </p>
                            <p>1 Dewasa, 2 Remaja, 3 Bayi</p>
                        </div>
                    </div>
                    <div className="text-white my-3 w-full">
                        <AddButton
                            title={"Pesan Tiket"}
                            className={"w-full py-3"}
                        />
                    </div>
                </div>
            </div>
            <DialogSlider
                open={dialogJadwal}
                onClose={setDialogJadwal}
                nameTitle={"jadwal Kapal"}
            >
                <div className="py-3">
                    <button
                        onClick={() => setModalFilter(true)}
                        className="text-green-500 flex items-center gap-x-3 border border-green-500 rounded-md py-1 px-3"
                    >
                        <span>
                            <TuneIcon color="inherit" />
                        </span>
                        <p>Filter</p>
                    </button>
                    <div className="my-2">
                        {jadwalKapal.length > 0 ? (
                            jadwalKapal.map((item, key) => (
                                <div key={key} className="w-full">
                                    <div className="active:bg-slate-900 border-y border-green-500/50 py-2 flex flex-col gap-y-2 px-3 duration-300 transition-all">
                                        <div className="flex gap-3 items-center">
                                            <img
                                                className="w-12 h-12"
                                                src={
                                                    "./storage/" +
                                                    item.kapal.foto
                                                }
                                                alt=""
                                            />
                                            <h1 className="font-bold text-[12pt]">
                                                {item.kapal.nama_kapal}
                                            </h1>
                                        </div>
                                        <div>
                                            <div className="flex items-center">
                                                <div className="border-l border-green-400/50 px-3 w-[75%]">
                                                    <div className="flex gap-x-5">
                                                        <p>Kota Awal</p>
                                                        <p className="font-extrabold">
                                                            {
                                                                item.rute
                                                                    .kota_awal
                                                            }
                                                        </p>
                                                    </div>
                                                    <p className="text-[14pt] text-green-800">
                                                        {item.tanggal_berangkat}{" "}
                                                        {item.jam_berangkat}
                                                    </p>
                                                    <div className="flex gap-x-5">
                                                        <p>Kota Tujuan</p>
                                                        <p className="font-extrabold">
                                                            {
                                                                item.rute
                                                                    .kota_tujuan
                                                            }
                                                        </p>
                                                    </div>
                                                </div>

                                                <div
                                                    onClick={() =>
                                                        setViewIdHargaTiket(
                                                            viewIdHargaTiket ==
                                                                key + 1
                                                                ? 0
                                                                : key + 1
                                                        )
                                                    }
                                                    className="flex gap-x-4 items-center"
                                                >
                                                    <h3 className="text-[10pt]">
                                                        Harga Tiket
                                                    </h3>

                                                    <p
                                                        className={clsx(
                                                            viewIdHargaTiket ==
                                                                key + 1
                                                                ? "bg-slate-300 rotate-180"
                                                                : "bg-slate-800",
                                                            "text-[12pt] rounded-md  px-1 transition-all duration-300"
                                                        )}
                                                    >
                                                        <KeyboardArrowDownIcon
                                                            color="inherit"
                                                            fontSize="inherit"
                                                        />
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className={clsx(
                                                viewIdHargaTiket == key + 1
                                                    ? ""
                                                    : "max-h-0",
                                                "w-full overflow-y-hidden duration-300 transition-all"
                                            )}
                                        >
                                            <div>
                                                {item.kapal.daftar_harga
                                                    .length > 0 ? (
                                                    // Group prices by kelas_id
                                                    Object.values(
                                                        item.kapal.daftar_harga.reduce(
                                                            (groups, item2) => {
                                                                const kelasId =
                                                                    item2.kelas
                                                                        .id;
                                                                if (
                                                                    !groups[
                                                                        kelasId
                                                                    ]
                                                                ) {
                                                                    groups[
                                                                        kelasId
                                                                    ] = [];
                                                                }
                                                                groups[
                                                                    kelasId
                                                                ].push(item2);
                                                                return groups;
                                                            },
                                                            {}
                                                        )
                                                    ).map(
                                                        (pricesGroup, key1) => (
                                                            <div
                                                                key={key1}
                                                                className="mb-4"
                                                            >
                                                                <table className="table w-full">
                                                                    <thead>
                                                                        <tr>
                                                                            <th
                                                                                className="border"
                                                                                colSpan={
                                                                                    4
                                                                                }
                                                                            >
                                                                                <h3>{`Kelas: ${pricesGroup[0].kelas.nama}`}</h3>
                                                                            </th>
                                                                        </tr>
                                                                        <tr>
                                                                            <th className="border-r border-green-500/50 text-left">
                                                                                NO
                                                                            </th>
                                                                            <th className="border-r border-green-500/50 text-left">
                                                                                Jenis
                                                                                Penumpang
                                                                            </th>
                                                                            <th className="border-r border-green-500/50 text-left">
                                                                                Kelas
                                                                            </th>
                                                                            <th className="border-r border-green-500/50 text-left">
                                                                                Harga
                                                                            </th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        {pricesGroup.map(
                                                                            (
                                                                                item2,
                                                                                key2
                                                                            ) => (
                                                                                <tr
                                                                                    className="border-b border-green-500/50"
                                                                                    key={
                                                                                        key2
                                                                                    }
                                                                                >
                                                                                    <td>
                                                                                        {key2 +
                                                                                            1}
                                                                                    </td>
                                                                                    <td>
                                                                                        {
                                                                                            item2
                                                                                                .jenis_penumpang
                                                                                                .nama
                                                                                        }
                                                                                    </td>
                                                                                    <td>
                                                                                        {
                                                                                            item2
                                                                                                .kelas
                                                                                                .nama
                                                                                        }
                                                                                    </td>
                                                                                    <td>
                                                                                        {
                                                                                            item2.harga
                                                                                        }
                                                                                    </td>
                                                                                </tr>
                                                                            )
                                                                        )}
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        )
                                                    )
                                                ) : (
                                                    <p>
                                                        Ups, tidak ada daftar
                                                        harga ditemukan.
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    <AddButton
                                        onClick={() => {
                                            setDataPesanan(item);
                                            setDialogJadwal(false);
                                        }}
                                        className={"text-white w-full"}
                                        title="Pilih Kapal"
                                    />
                                </div>
                            ))
                        ) : (
                            <p>Ups tidak ada jadwal ditemukan</p>
                        )}
                    </div>
                </div>
            </DialogSlider>
            <DialogSlider
                open={dialogPenumpang}
                onClose={setDialogPenumpang}
                nameTitle={"Jumlah Penumpang"}
            >
                {Object.keys(dataPenumpang).map((jenisPenumpang) => (
                    <div
                        key={dataPenumpang[jenisPenumpang].id}
                        className="flex justify-between w-ful py-3 capitalize text[16pt]"
                    >
                        <label htmlFor={jenisPenumpang}>{jenisPenumpang}</label>
                        <div className="flex items-center gap-x-3">
                            <button
                                type="button"
                                onClick={() => handleDecrement(jenisPenumpang)}
                            >
                                -
                            </button>
                            <input
                                className="bg-slate-950 border-0 focus:ring-1 focus:ring-green-500 w-10 h-5 p-2 text-center"
                                type="text"
                                id={jenisPenumpang}
                                name={jenisPenumpang}
                                value={dataPenumpang[jenisPenumpang].jumlah}
                                onChange={(e) =>
                                    handleInputChange(
                                        jenisPenumpang,
                                        e.target.value
                                    )
                                }
                            />
                            <button
                                type="button"
                                onClick={() => handleIncrement(jenisPenumpang)}
                            >
                                +
                            </button>
                        </div>
                    </div>
                ))}
                <div className="bg-green-700/50 py-1 px-3 rounded-md shadow-md shadow-gray-300/30 text-white border border-dashed border-green-500">
                    <p>Note * jumlah bayi tidak boleh melebihi orang dewasa</p>
                </div>
                {/* Tombol submit atau tindakan lainnya */}
            </DialogSlider>
            <DialogSlider
                open={dialogKelas}
                onClose={setDialogKelas}
                nameTitle={"Kelas Perjalanan"}
            >
                <p>Pilih Kelas</p>

                {kelas.map((item, key) => (
                    <div className="rounded-md flex items-center justify-between my-2 py-3 px-2 uppercase bg-slate-900 border-none active:outline-none focus:ring-2 focus:ring-green-500/50 text-green-500 w-full">
                        <div>{item.nama}</div>
                        <div className="bg-green-500 h-5 w-5 rounded-full"></div>
                    </div>
                ))}

                <div className="mt-24"></div>
            </DialogSlider>
        </div>
    );
}
Home.layout = (page) => <GuestLayout children={page} />;
