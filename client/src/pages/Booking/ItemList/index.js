import React from 'react';
import {Button, Typography} from "antd";
import {Link} from "react-router-dom";
import {Pagination} from "../../index";

import './style.scss';

const ItemList = () => {

    const itemsArray = false;

    return (
        <div className="item-list">
            <Typography.Title>Add Items</Typography.Title>
            <div className="items-box">
                <div className="items-box__header">
                    <div className="items-box__count">0</div>
                    <div className="items-box__title">Total items</div>
                </div>
                <div className="items-box__list">
                    {itemsArray
                    ? (
                        <div>Items added</div>
                        )
                    : (
                        <div className={"items-box__list__empty"}>Add items you need moved one at a time.</div>
                        )
                    }
                </div>
            </div>
            <Button size="large" type="primary" danger block>
                <Link to="/item-detail">Add items</Link>
            </Button>
            <Pagination next="/helper-count" progress="50" />
        </div>
    );
};

export default ItemList;