import { React, useEffect, useState } from "react";
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
      message.success(
        `${info.file.name} El archivo ha sido subido correctamente.`
      );
    } else if (status === "error") {
      message.error(`${info.file.name} Falló la subida del archivo.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};

const Addblog = () => {
  const [desc, setDesc] = useState();
  const handleDesc = (e) => {
    setDesc(e);
  };
  return (
    <div>
      <h3 className="mb-4 title"> Añadir Blog</h3>

      <div className="">
        <form action="">
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
          <CustomInput type="text" label="Ingrese el título del blog" />
          <select name="" className="form-control py-3  mt-3" id="">
            <option value="">Seleccionar categoría de Blog</option>
          </select>
          <ReactQuill
            theme="snow"
            value={desc}
            onChange={(evt) => {
              handleDesc(evt);
            }}
          />
          <button
            className="btn btn-success border-0 rounded-3 my-5"
            type="submit"
          >
            Añadir Blog
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addblog;
