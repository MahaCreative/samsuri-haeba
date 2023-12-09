import { Autocomplete, TextField } from "@mui/material";
import React from "react";

export default function AutoComplete({ data, ...props }) {
    return (
        <>
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                sx={{ width: 300 }}
                renderInput={(params) => (
                    <TextField {...params} label="Movie" />
                )}
            />
        </>
    );
}
