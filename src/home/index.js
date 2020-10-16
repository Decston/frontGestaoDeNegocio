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
            />
        </div>
        <div className="new-product-container">
            <CustomCard
                title="Consultar Vendas" 
                description={null} 
                altImg={null} 
                srcImg={null}
                width={"auto"}
            />
        </div>
        <div className="new-product-container">
            <CustomCard
                title="Adicionar Produto" 
                description={null} 
                altImg={null} 
                srcImg={null}
                width={"auto"}
            />
        </div>
        <div className="new-product-container">
            <CustomCard
                title="Consultar Estoque" 
                description={null} 
                altImg={null} 
                srcImg={null}
                width={"auto"}
            />
        </div>
    </div>
);

export default Home;