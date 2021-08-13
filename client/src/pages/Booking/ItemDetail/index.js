import React from 'react';
import {Alert, AutoComplete, Button, Checkbox, Space, Typography, Upload, Input} from "antd";
import {Counter} from "../../../components";

import './style.scss';
import {IoImageOutline} from "react-icons/all";
import {Link} from "react-router-dom";


const ItemDetail = () => {
    const options = [
        {
            value: 'Twin Bed'
        }, {
            value: 'Full Bed'
        }, {
            value: 'Queen Bed'
        }, {
            value: 'King Bed'
        }]
    return (
        <div className="item-detail">
            <Space size="middle" direction="vertical" style={{width:'100%'}}>
                <Typography.Title>Add an Item</Typography.Title>
                <AutoComplete
                    style={{width: "100%"}}
                    options={options}
                    placeholder="Enter an item"
                    size="large"
                    filterOption={(inputValue, option) =>
                        option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                    }
                />
                <div className="item-detail__count">
                    <span>How many?</span>
                    <Counter/>
                </div>
                <Alert
                    message="This item includes bed frame, mattress, and box spring. Dolly Helpers do not have plastic wrap or mattress covers. You are responsible for protecting your items before the Helper arrives."
                    type="error"
                />
                <div className="item-detail__breakdown">
                    <div className="item-detail__breakdown-checkbox">
                        <Checkbox>Requires Breakdown to Move</Checkbox>
                    </div>
                    <div className="item-detail__breakdown-message">
                        This is something that needs to be broken down and then reassembled after moving. If there are any special tools required, please add in the Optional Details below.
                    </div>
                </div>
                <div className="item-detail__photo">
                    <Upload listType="picture">
                        <Button size="large" type="ghost" block><IoImageOutline/> Add a photo</Button>
                    </Upload>
                </div>
                <div className="item-detail__note">
                    <p><b>Add details about this item (dimensions, weight, etc)</b></p>
                    <Input.TextArea
                        placeholder="Example: 2' x 3' x 5' and bulky; needs two people to carry"
                        rows="3"
                    />
                </div>
                <Button size="large" block type="primary">
                    <Link to="/item-list">Add item</Link>
                </Button>
            </Space>
        </div>
    );
};

export default ItemDetail;