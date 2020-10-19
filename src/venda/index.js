import React from 'react';
import { Input, DatePicker, Select, Button } from 'antd';

import './style.css';

const { Option } = Select;

const Venda = () => (
    <div className="page-container">
        <h1>Página de Vendas</h1>

        <form className="form-container">
            <h2>Dados da Venda:</h2>
            <DatePicker 
                placeholder="Data"
                style={{ width: 90, marginBottom: 16, marginRight: 10 }} 
                value={''}
            />
            <Input 
                placeholder="Descrição do Produto" 
                name="description" 
                value={''} 
                onChange={() => {}}
                required
                style={{ width: 220, marginBottom: 16, marginRight: 10 }}
            />
            <Input 
                placeholder="Especificação" 
                name="specification" 
                value={''} 
                onChange={() => {}}
                required
                style={{ width: 160, marginBottom: 16, marginRight: 10 }}
            />
            <Input 
                placeholder="Cor" 
                name="color" 
                value={''} 
                onChange={() => {}}
                required
                style={{ width: 120, marginBottom: 16, marginRight: 10 }}
            />
            <Input 
                placeholder="Qtd" 
                name="quantity" 
                value={''} 
                onChange={() => {}}
                required
                style={{ width: 70, marginBottom: 16, marginRight: 10 }}
            />
            <Input 
                placeholder="Valor" 
                name="valor" 
                value={''} 
                onChange={() => {}}
                required
                style={{ width: 90, marginBottom: 16, marginRight: 10 }}
            />
            <Select defaultValue="Pagamento" style={{ marginRight: 10 }}>
                <Option value="Dinheiro">Dinheiro</Option>
                <Option value="Sumup Debito">Sumup Débito</Option>
                <Option value="Sumup Credito 1x">Sumup Crédito 1x</Option>
                <Option value="Sumup Credito 2x">Sumup Crédito 2x</Option>
                <Option value="Sumup Credito 3x">Sumup Crédito 3x</Option>
                <Option value="Fiado">Fiado</Option>
                <Option value="Loja">Loja</Option>
            </Select>
            <Input 
                placeholder="Cliente" 
                name="cliente" 
                value={''} 
                onChange={() => {}}
                required
                style={{ width: 150, marginBottom: 16, marginRight: 10 }}
            />
            <Button type="primary">Salvar</Button>
        </form>
    </div>
);

export default Venda;