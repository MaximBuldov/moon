import React from 'react';
import {Typography} from "antd";
import {useDispatch, useSelector} from "react-redux";
import classNames from "classnames";

import './style.scss';
import {Pagination} from "../../index";
import {setMovingType} from "../../../redux/actions/cart";

const {Title} = Typography;



const UseCases = () => {
    const dispatch = useDispatch();
    const movingType = [
        {
            "id": 1,
            "category": "movingType",
            "image": "https://s3-us-west-2.amazonaws.com/dolly-images/store_icon.png",
            "title": "Store Pick-Up & Delivery",
            "content": "Get your purchase home"
        },
        {
            "id": 2,
            "category": "movingType",
            "image": "https://s3-us-west-2.amazonaws.com/dolly-images/furniture_icon.png",
            "title": "Move a Few Items",
            "content": "Low rates, zero back pain"
        },
        {
            "id": 3,
            "category": "movingType",
            "image": "https://dolly-images.s3.us-west-2.amazonaws.com/logo-facebook-small-dark.png",
            "title": "Facebook Marketplace",
            "content": "Get items you buy and sell on Facebook Marketplace delivered."
        }
    ];
    const {currentApp, items} = useSelector(({cart}) => cart);
    const createMovingTypeID = (movingTypeId, appId) => {
        dispatch(setMovingType(movingTypeId, appId))
    }

    const createMovingType = movingType.map(item => (
        <div
            key={item.id}
            className={classNames(
                "moving-type__single",
                {'active': items[currentApp].movingType === item.id})}
            onClick={() => createMovingTypeID(item.id, currentApp)}
        >
            <div className="moving-type__icon">
                <img src={item.image} alt={item.title}/>
            </div>
            <div className="moving-type__content">
                <div className="moving-type__title">{item.title}</div>
                <div className="moving-type__description">{item.content}</div>
            </div>
        </div>
    ))


    return (
        <div className="moving-type">
            <Title>Select a Moving Type</Title>
            <div className="moving-type__list">
                {createMovingType}
            </div>
            <Pagination next="/location" progress="10" />
        </div>
    );
};

export default UseCases;