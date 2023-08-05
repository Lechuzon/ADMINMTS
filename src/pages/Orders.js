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
    name: `pedido ${i}`,
    product: `laptop`,
    status: `disponible`,
  });
}

const Orders = () => {
    return (
        <div>
            <h3 className="mb-4 title">Pedidos</h3>
            <div>
                <Table columns={columns} dataSource={data1} />
            </div>
        </div>
    );
};

export default Orders;
