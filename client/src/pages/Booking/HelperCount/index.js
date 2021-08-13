import React from 'react';
import {Typography} from "antd";
import '../UseCases/style.scss';
import {Pagination} from "../../index";

const {Title} = Typography;

const movers = [
    {
        "id": 1,
        "image": "https://dolly-images.s3-us-west-2.amazonaws.com/helper-icon-2helpers.png",
        "title": "2 Helpers",
        "content": "Two Helpers with a pickup truck will arrive to get your Dolly done quick and easy."
    },
    {
        "id": 2,
        "image": "https://dolly-images.s3-us-west-2.amazonaws.com/helper-icon-1helperplusyou.png",
        "title": "1 Helper + You",
        "content": "If your Dolly needs 2 people to lift and carry, you can save money by helping!"
    }
];
const vichicle = [
    {
        "id": 1,
        "image": "https://dolly-images.s3-us-west-2.amazonaws.com/pickup_truck.png",
        "title": "Pickup Truck",
        "content": "Great for a couple large items, or multiple small items."
    },
    {
        "id": 2,
        "image": "https://dolly-images.s3-us-west-2.amazonaws.com/van.png",
        "title": "Cargo Van",
        "content": "Upgrade to a covered vehicle for a low price! Speed up your move with fewer trips."
    }
];

const HelperCount = () => {

    const createList = (array) => array.map(item => (
        <div key={item.id} className={"moving-type__single"} >
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
            <Title level={3}>How many Helpers would you like?</Title>
            <div className="moving-type__list">
                {createList(movers)}
            </div>
            <br />
            <Title level={3}>What size vehicle do you prefer?</Title>
            <div className="moving-type__list">
                {createList(vichicle)}
            </div>
            <Pagination next="/date-select" progress="60" />
        </div>
    );
};

export default HelperCount;