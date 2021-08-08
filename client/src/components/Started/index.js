import React from 'react';
import {Link} from "react-router-dom";
import {Typography, Button} from 'antd';
import {CodeSandboxOutlined} from "@ant-design/icons";
import './style.scss';
import {useDispatch, useSelector} from "react-redux";
import {changeDraftInCart, deleteDraftFromCart, setApplicationID} from "../../redux/actions/cart";

const {Title, Paragraph} = Typography;

const Started = () => {
    const dispatch = useDispatch();
    const itemsInCart = useSelector(({cart}) => cart.items);
    const keysArray = Object.keys(itemsInCart);
    const countItemsInCart = keysArray.length === 0 ? 0 : ++keysArray[Object.keys(itemsInCart).length - 1];

    const createAppID = () => {
        dispatch(setApplicationID(countItemsInCart))
    }
    const deleteDraft = (key) => {
        dispatch(deleteDraftFromCart(key))
    }
    const onChangeDraft = (key) => {
        dispatch(changeDraftInCart(Number(key)))
    }

    const draftApp = countItemsInCart > 0 ? Object.keys(itemsInCart).map(item => (
        <div key={item}>
            Key {item}. Moving type {itemsInCart[item].movingType}
            <span onClick={() => deleteDraft(item)}> delete </span>
            <Link to="/usecases" onClick={() => onChangeDraft(item)}> edit</Link>
        </div>
    )) : '';

    return (
        <div className="started">
            <Title>Start</Title>
            <CodeSandboxOutlined className="started__box-icon"/>
            <div className="started__text">
                <Title level={4}>Book a Move</Title>
                <Paragraph>Get help moving just about anything, whenever you need it</Paragraph>
            </div>
            <Button className="started__button" size="large" type="primary">
                <Link onClick={createAppID} to="/usecases">Get started</Link>
            </Button>
            {draftApp}
        </div>
    );
};

export default Started;