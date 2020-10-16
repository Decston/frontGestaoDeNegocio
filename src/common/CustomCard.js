import React from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';

const { Meta } = Card;

const CustomCard = (props) => (
    <Link to={props.link} >
        <Card
            hoverable
            style={{ width: props.width }}
            cover={<img alt={props.altImg} src={props.srcImg} />}
        >
            <Meta
                title={props.title} 
                description={props.description}
            />
        </Card>
    </Link>
);

export default CustomCard;