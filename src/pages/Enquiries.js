import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Table } from "antd";
import { getEnquiries } from "../features/enquiry/enquirySlice";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

const columns = [
  {
    title: "Nº",
    dataIndex: "key",
  },
  {
    title: "Nombre",
    dataIndex: "name",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Móvil",
    dataIndex: "mobile",
  },
  {
    title: "Estado",
    dataIndex: "status",
  },
  
  {
    title: "Acción",
    dataIndex: "action",
  },
];

const Enquiries = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getEnquiries());
  },[]);
  const enqState = useSelector((state)=>state.enquiry.enquiries);
  const data1 = [];
for (let i = 0; i < enqState.length; i++) {
  data1.push({
    key: i+1,
    name: enqState[i].name,
    email: enqState[i].email,
    mobile: enqState[i].mobile,
    status:  (
      <>
        <select name="" id="" className="form-control form-select">
          <option value="">Establecer estado</option>
        </select>
      </>
    ),
    action:(
      <>
        <Link className="ms-3 fs-3 text-danger" to="/">
          <AiFillDelete />     
        </Link> 
      </>
      ),
  });
}
    return (
        <div>
            <h3 className="mb-4 title">Consultas</h3>
            <div>
                <Table columns={columns} dataSource={data1} />
            </div>
        </div>
    );
};

export default Enquiries;
