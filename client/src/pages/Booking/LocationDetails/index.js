import React from 'react';
import {Input, Typography} from "antd";
import {FaMapMarkerAlt} from "react-icons/all";
import Checkbox from "./Checkbox";

import './style.scss';
import {Pagination} from "../../index";

const {Title} = Typography;

const LocationDetails = () => {
    const addresses = ['San Diego', 'Los Angeles']
    const locationDetails = addresses.map(address => (
        <div className="single-address">
            <div className="single-address__title">
                <Title level={4}><FaMapMarkerAlt /> {address}</Title>
            </div>
            <div className="single-address__unit">
                <Input placeholder={"Unit or apartment numver"} />
            </div>
            <div className="single-address__checkbox-list">
                <Checkbox
                    info="In the unlikely case of damage we won’t be able to process a claim on hardwood floors unless they are indicated here."
                    stairs={true}
                >Helper(s) needs to use stairs</Checkbox>
                <Checkbox>Helper(s) can use elevator</Checkbox>
                <Checkbox>Has hardwood floors</Checkbox>
                <Input.TextArea placeholder={"Parking and building info"}/>
            </div>
        </div>
    ))
    return (
        <div className={"location-details"}>
            <Title style={{textAlign: 'center'}}>Location Details</Title>
            <div className="location-list">
                {locationDetails}
            </div>
            <Pagination next="/item-list" progress="30" />
        </div>

    );
};

export default LocationDetails;