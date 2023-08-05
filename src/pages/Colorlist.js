import React from "react";

import { Table } from "antd";

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
    title: "Producto",
    dataIndex: "product",
  },
  {
    title: "Estado",
    dataIndex: "status",
  },
];

const data1 = [];
for (let i = 0; i < 46; i++) {
  data1.push({
    key: i+1,
    name: `rojo ${i}`,
    product: `parlante`,
    status: `disponible`,
  });
}

const Colorlist = () => {
    return (
        <div>
            <h3 className="mb-4 title">Colores</h3>
            <div>
                <Table columns={columns} dataSource={data1} />
            </div>
        </div>
    );
};

export default Colorlist