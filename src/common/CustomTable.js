import React from 'react';
import { Table } from 'antd';

const columns = [
    {
        title: 'Id',
        width: 50,
        dataIndex: 'id',
        key: 'id',
        fixed: 'left',
    },
    {
        title: 'Nome',
        width: 'auto',
        dataIndex: 'nome',
        key: 'nome',
        fixed: 'left',
    },
    { title: 'Especificação', dataIndex: 'especificacao', key: '1' },
    { title: 'Marca', dataIndex: 'marca', key: '2' },
    { title: 'Cor', dataIndex: 'cor', key: '3' },
    { title: 'Tipo', dataIndex: 'tipo', key: '4' },
    { title: 'Entradas', dataIndex: 'entradas', key: '5' },
    { title: 'Saidas', dataIndex: 'saidas', key: '6' },
    {
        title: 'Total',
        width: 80,
        dataIndex: 'total',
        key: 'total',
        fixed: 'right',
    }
];
  
const data = [
    {
        key: '1',
        id: '1',
        nome: 'Esmalte Sintetico SecaMax',
        especificacao: '900ml',
        marca: 'Hidrotintas',
        cor: 'Preta',
        tipo: 'Unidade(s)',
        entradas: 4,
        saidas: 0,
        total: 4
    },
    {
        key: '2',
        id: '2',
        nome: 'Latex Interior',
        especificacao: '16L',
        marca: 'Geocor',
        cor: 'Branco Neve',
        tipo: 'Unidade(s)',
        entradas: 2,
        saidas: 1,
        total: 1
    },
];

const CustomTable = () => (
    <Table columns={columns} dataSource={data} scroll={{ x: 1300 }} />
);

export default CustomTable;