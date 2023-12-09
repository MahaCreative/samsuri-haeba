import React, { useCallback, useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
// import { debounce } from "@mui/material";
import { router } from "@inertiajs/react";
import { debounce } from "@mui/material";
export default function SearchInput({ filtered, link }) {
    const [params, setParams] = useState(filtered);

    const reload = useCallback(
        debounce((query) => {
            router.get(
                route(link),
                { ...query, page: query.search ? 1 : query.page },
                {
                    preserveState: true,
                }
            );
        }, 150),
        []
    );
    useEffect(() => reload(params), [params]);
    return (
        <div className="relative">
            <input
                onChange={(e) =>
                    setParams({ ...params, [e.target.name]: e.target.value })
                }
                name="search"
                className="rounded-md bg-slate-900 border-none active:outline-none focus:ring-2 focus:ring-green-500/50 text-green-500 pl-9"
            />
            <div className="text-green-900 text-2xl absolute top-0 left-2 h-full flex justify-center items-center">
                <SearchIcon color="inherit" fontSize="inherit" />
            </div>
        </div>
    );
}
