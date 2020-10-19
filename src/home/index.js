import React from 'react';

import './style.css';
import CustomCard from '../common/CustomCard';

const Home = () => (
    <div className="page-container">
        <div className="new-product-container">
            <CustomCard
                title="Realizar Venda" 
                description={null} 
                altImg={null} 
                srcImg={null}
                width={"auto"}
                link='/venda'
            />
        </div>
        <div className="new-product-container">
            <CustomCard
                title="Consultar Vendas" 
                description={null} 
                altImg={null} 
                srcImg={null}
                width={"auto"}
                link='/consultar-vendas'
            />
        </div>
        <div className="new-product-container">
            <CustomCard
                title="Adicionar Produto" 
                description={null} 
                altImg={null} 
                srcImg={null}
                width={"auto"}
                link='/adicionar-produto'
            />
        </div>
        <div className="new-product-container">
            <CustomCard
                title="Consultar Estoque" 
                description={null} 
                altImg={null} 
                srcImg={null}
                width={"auto"}
                link='/consultar-estoque'
            />
        </div>
    </div>
);

export default Home;