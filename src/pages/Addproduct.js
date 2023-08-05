import { React, useState } from "react";
import CustomInput from "../components/CustomInput";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import { InboxOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
const { Dragger } = Upload;
const props = {
  name: "file",
  multiple: true,
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.filelist);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file uploaded failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};

const Addproduct = () => {
  const [desc, setDesc] = useState();
  const handleDesc = (e) => {
    setDesc(e);
  };
  return (
    <div>
      <h3 className="mb-4 title">Agregar producto</h3>
      <div>
        <form>
          <CustomInput type="text" label="Enter Product Title" />
          <div className="mb-3">
            <ReactQuill
              theme="snow"
              value={desc}
              onChange={(evt) => {
                handleDesc(evt);
              }}
            />
          </div>
          <CustomInput type="number" label="Enter Product Price" />
          <select name="" className="form-control py-3  mt-3" id="">
            <option value="">Seleccionar marca</option>
          </select>
          <select name="" className="form-control py-3  mt-3" id="">
            <option value="">Selecciona una categoría</option>
          </select>
          <select name="" className="form-control py-3  mt-3" id="">
            <option value="">Seleccionar el color</option>
          </select>
          <CustomInput type="number" label="Enter Product Price" />
          <Dragger {...props}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">
              Haga clic o arrastre el archivo a esta área para cargarlo
            </p>
            <p className="ant-upload-hint">
              Soporte para una carga única o masiva
            </p>
          </Dragger>
          <button
            className="btn btn-success border-0 rounded-3 my-5"
            type="submit"
          >
            Agregar producto
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addproduct;
