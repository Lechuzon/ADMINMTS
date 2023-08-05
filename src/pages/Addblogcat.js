import React from "react";
import CustomInput from "../components/CustomInput";

const Addblogcat = () => {
  return (
    <div>
      <h3 className="mb-4 title">Agregar categoría de blog</h3>
      <div>
        <form action="">
          <CustomInput type="text" label="Enter Blog Category" />
          <button
            className="btn btn-success border-0 rounded-3 my-5"
            type="submit"
          >
            Agregar categoría de blog
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addblogcat;
