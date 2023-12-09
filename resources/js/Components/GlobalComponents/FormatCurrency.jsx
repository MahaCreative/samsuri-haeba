import React from "react";
import CurrencyInput from "react-currency-input-field";

export default function FormatCurrency({ name, nameTitle, errors, ...props }) {
    return (
        <div>
            <div className="flex flex-col gap-y-1">
                <p className="capitalize">{nameTitle}</p>
                <CurrencyInput
                    {...props}
                    name={name}
                    prefix="Rp."
                    className="rounded-md bg-slate-900 border-none active:outline-none focus:ring-2 focus:ring-green-500/50 text-green-500"
                    placeholder="Masukan nominal"
                    decimalsLimit={2}
                />
                {errors && <p className="text-red-500 italic">{errors}</p>}
            </div>
            ;
        </div>
    );
}
