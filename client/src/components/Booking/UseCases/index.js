import React, {useEffect} from 'react';
import {Typography} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {fetchPriceList} from "../../../redux/actions/priceList";
import classNames from "classnames";

import './style.scss';
import {Pagination} from "../../index";
import {setMovingType} from "../../../redux/actions/cart";

const {Title} = Typography;

const UseCases = () => {
    const dispatch = useDispatch();
    //Может сразу закинуть в стейт весь прайс, а потом доставать на нужно категории(но как доставать?)



    useEffect(() => {
        dispatch(fetchPriceList('movingType'));
    }, [dispatch]);

    const movingType = useSelector(({priceList}) => priceList.items);
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
            <Pagination next="/" progress="10" />
        </div>
    );
};

export default UseCases;