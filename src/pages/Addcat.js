import React from "react";
import CustomInput from "../components/CustomInput";

const Addcat = () => {
    return (
        <div>
            <h3 className="mb-4 title">Añadir Categoría</h3>
            <div>
                <form action="">
                    <CustomInput type="text" label="Ingrese la categoria de blog" />
                    <button
                        className="btn btn-success border-0 rounded-3 my-5"
                        type="submit"
                    >
                        Añadir Categoría
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Addcat;
