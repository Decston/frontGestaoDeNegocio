import React from 'react';
import { PageHeader } from 'antd';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => (
    <div>
        <Link to='/'>
            <PageHeader
                className="site-page-header"
                onBack={() => null}
                title="Nome da Empresa"
                subTitle="Slogan da Empresa"
            />
        </Link>
    </div>
);

export default Header;