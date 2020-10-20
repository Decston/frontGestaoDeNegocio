import React from 'react';

import './style.css';
import CustomTable from '../common/CustomTable';

const ConsultarEstoque = () => (
    <div className="estoque-container">
        <h1 className="title">Consultar Estoque</h1>

        <CustomTable />
    </div>
);

export default ConsultarEstoque;