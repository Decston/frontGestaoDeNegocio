import React from 'react';
import { Input, DatePicker, Button } from 'antd';

import './style.css';

const AdicionarProduto = () => (
    <div className="page-container">
        <h1>Adicionar Produto</h1>

        <div>
            <form className="form-container">
                <h2>Dados da Venda:</h2>
                <DatePicker 
                    placeholder="Data"
                    style={{ width: 90, marginBottom: 16, marginRight: 10 }} 
                    value={''}
                />
                <Input 
                    placeholder="Nº Nota" 
                    name="note" 
                    value={''} 
                    onChange={() => {}}
                    required
                    style={{ width: 90, marginBottom: 16, marginRight: 10 }}
                />
                <Input 
                    placeholder="Nome" 
                    name="name" 
                    value={''} 
                    onChange={() => {}}
                    required
                    style={{ width: 220, marginBottom: 16, marginRight: 10 }}
                />
                <Input 
                    placeholder="Marca" 
                    name="marca" 
                    value={''} 
                    onChange={() => {}}
                    required
                    style={{ width: 160, marginBottom: 16, marginRight: 10 }}
                />
                <Input 
                    placeholder="Cor" 
                    name="cor" 
                    value={''} 
                    onChange={() => {}}
                    required
                    style={{ width: 120, marginBottom: 16, marginRight: 10 }}
                />
                <Input 
                    placeholder="Qtd" 
                    name="quantidade" 
                    value={''} 
                    onChange={() => {}}
                    required
                    style={{ width: 70, marginBottom: 16, marginRight: 10 }}
                />
                <Input 
                    placeholder="Tipo" 
                    name="Tipo" 
                    value={''} 
                    onChange={() => {}}
                    required
                    style={{ width: 160, marginBottom: 16, marginRight: 10 }}
                />
                <Input 
                    placeholder="Valor" 
                    name="valor" 
                    value={''} 
                    onChange={() => {}}
                    required
                    style={{ width: 90, marginBottom: 16, marginRight: 10 }}
                />
                <Input 
                    placeholder="Fornecedor" 
                    name="fornecedor" 
                    value={''} 
                    onChange={() => {}}
                    required
                    style={{ width: 150, marginBottom: 16, marginRight: 10 }}
                />
                <Button type="primary">Salvar</Button>
            </form>
        </div>
    </div>
);

export default AdicionarProduto;