import React from "react";
import AddButton from "./AddButton";
import DeleteButton from "./DeleteButton";

export default function CardView({ children, ...props }) {
    return (
        <div {...props} className="">
            <div>{children}</div>
        </div>
    );
}
