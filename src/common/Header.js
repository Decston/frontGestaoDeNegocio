import React from 'react';
import { PageHeader } from 'antd';

import './Header.css';

const Header = () => (
    <div>
        <PageHeader
            className="site-page-header"
            onBack={() => null}
            title="Nome da Empresa"
            subTitle="Slogan da Empresa"
        />
    </div>
);

export default Header;