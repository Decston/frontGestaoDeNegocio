import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

const CustomCard = (props) => (
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
);

export default CustomCard;