import React from 'react';
import {Button, Space, Typography} from "antd";
import {Pagination} from "../../index";

const { Title } = Typography;

const PayMethod = () => {
    return (
        <div>
            <Title>Payment</Title>
            <Title level={3}>Your price: $200</Title>
            <Space style={{width: '100%'}} direction="vertical">
                <Button type="primary" block>Paypal</Button>
                <Button  danger type="primary" block>Add a card</Button>
            </Space>
            <Pagination next="/paymethod" progress="80" />
        </div>
    );
};

export default PayMethod;
