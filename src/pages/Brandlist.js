import React, { useEffect } from "react";

import { Table } from "antd";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBrands } from "../features/brand/brandSlice";



const columns = [
  {
    title: "Nº",
    dataIndex: "key",
  },
  {
    title: "Nombre",
    dataIndex: "name",
    sorter: (a,b) =>a.name.length-b.name.length,
  },
  {
    title: "Accion",
    dataIndex: "action",
  },
];



const Brandlist = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getBrands());
  },[]);
  const brandState = useSelector((state)=>state.brand.brands);
  const data1 = [];
for (let i = 0; i < brandState.length; i++) {
  data1.push({
    key: i + 1,
    name: brandState[i].title,
    action:(
      <>
        <Link to="/" className="fs-3 text-danger">
          <BiEdit />
        </Link>
        <Link className="ms-3 fs-3 text-danger" to="/">
          <AiFillDelete />     
        </Link> 
      </>
      ),
  });
}
    return (
        <div>
            <h3 className="mb-4 title">Marcas</h3>
            <div>
                <Table columns={columns} dataSource={data1} />
            </div>
        </div>
    );
};

export default Brandlist