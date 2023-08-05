import React from "react";
import CustomInput from "../components/CustomInput";

const Addblogcat = () => {
  return (
    <div>
      <h3 className="mb-4 title">Añadir categoria de Blog</h3>
      <div>
        <form action="">
          <CustomInput type="text" label="Ingrese el título del blog" />
          <button
            className="btn btn-success border-0 rounded-3 my-5"
            type="submit"
          >
            Añadir categoria de Blog
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addblogcat;
