import React from "react";
import CustomInput from "../components/CustomInput";

const Addcolor = () => {
    return (
        <div>
            <h3 className="mb-4 title">Añadir color</h3>
            <div>
                <form action="">
                    <CustomInput type="color" label="Enter Color" />
                    <button
                        className="btn btn-success border-0 rounded-3 my-5"
                        type="submit"
                    >
                        Añadir color
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Addcolor;