import { Link } from "@inertiajs/react";
import React, { useState } from "react";

export default function Pagination({ meta, links, filtered, ...props }) {
    const [params, setParams] = useState(filtered);

    return (
        <div>
            <div className="w-full flex items-center justify-between md:justify-center py-2 px-8">
                <ul className="flex w-full justify-end md:hidden items-end gap-x-0.5">
                    {links.prev ? (
                        <li>
                            <Link
                                className="text-white w-12 h-10 border border-slate-800 bg-slate-950 rounded-lg text-center flex items-center justify-center text-[8pt]"
                                href={links.prev}
                            >
                                <p>Back</p>
                            </Link>
                        </li>
                    ) : (
                        <li className="text-white w-12 h-10 border border-slate-800 bg-slate-950 rounded-lg text-center flex items-center justify-center text-[8pt] cursor-none">
                            <p>Back</p>
                        </li>
                    )}
                    {links.next ? (
                        <li>
                            <Link
                                className="text-white w-12 h-10 border border-slate-800 bg-slate-950 rounded-lg text-center flex items-center justify-center text-[8pt]"
                                href={links.next}
                            >
                                Next
                            </Link>
                        </li>
                    ) : (
                        <li className="text-white w-12 h-10 border border-slate-800 bg-slate-950 rounded-lg text-center flex items-center justify-center text-[8pt] cursor-none">
                            Next
                        </li>
                    )}
                </ul>

                <ul className="hidden md:flex items-center gap-1">
                    {meta.links.map((item, key) => (
                        <Link
                            as="button"
                            key={key}
                            onClick={() =>
                                setParams({
                                    ...params,
                                    page: new URL(item.url).searchParams.get(
                                        "page"
                                    ),
                                })
                            }
                            disabled={item.url == null ? true : false}
                            className={`${
                                item.url == null
                                    ? "text-gray-500 hover:cursor-default"
                                    : "text-white hover:bg-slate-800"
                            }
                                ${
                                    item.active ? "bg-slate-400" : ""
                                }   w-12 h-10 border border-slate-800 bg-slate-950 rounded-lg text-center flex items-center justify-center text-[8pt]`}
                            href={item.url || ""}
                            dangerouslySetInnerHTML={{ __html: item.label }}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
}
