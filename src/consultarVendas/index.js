import React from 'react';
import { Table } from 'antd';

import './style.css';

const columns = [
    {
        title: 'Data',
        width: 108,
        dataIndex: 'date',
        key: 'date',
        fixed: 'left',
    },
    {
        title: 'Produto',
        width: 90,
        dataIndex: 'product',
        key: 'name',
        fixed: 'left',
    },
    {
        title: 'Especificação',
        width: 130,
        dataIndex: 'specification',
        key: 'specification',
    },
    { title: 'Marca', dataIndex: 'brand', key: '1' },
    { title: 'Cor', dataIndex: 'color', key: '2' },
    { title: 'Quantidade', dataIndex: 'quantity', key: '3' },
    { title: 'Tipo', dataIndex: 'type', key: '3' },
    { title: 'Valor', dataIndex: 'value', key: '4' },
    { title: 'Total', dataIndex: 'total', key: '5' },
    {
        title: 'Action',
        key: 'operation',
        fixed: 'right',
        width: 75,
        render: () => <a href='/venda'>action</a>,
    },
];
  
const data = [
    {
        key: '1',
        date: '01/11/2020',
        product: 'Latex Interior',
        specification: '3,6L',
        brand: 'Geocor',
        color: 'Branco Neve',
        quantity: 1,
        type: 'Unidade(s)',
        value: 'R$ 71,50',
        total: 'R$ 71,50'
    },
    {
        key: '2',
        date: '01/11/2020',
        product: 'Esmalte Sintetico SecaMax',
        specification: '900 mL',
        brand: 'Hidrotintas',
        color: 'Preto',
        quantity: 2,
        type: 'Unidade(s)',
        value: 'R$ 21,50',
        total: 'R$ 43,00'
    },
];

const ConsultarVendas = () => (
    <div className="page-container">
        <h1>Consultar Vendas</h1>

        <Table columns={columns} dataSource={data} scroll={{ x: 1300 }} />
    </div>
);

export default ConsultarVendas;