import React, {useState} from 'react';
import {Calendar, Typography, Select} from "antd";
import './style.scss';
import {Pagination} from "../../index";

const { Option } = Select;

const timeRange = (start, end) => {
    const availableTime = [];
    let i = start;
    while (i < end) {
        availableTime.push(i)
        i++
    }
    return availableTime;
}

const DateSelect = () => {
    const {start, end} = {
        start: 8,
        end: 18
    };
    const [startTime, setStartTime] = useState(timeRange(start, end));
    const [endTime, setEndTime] = useState(timeRange(start, end));
    const startTimeHandler = (value) => {
        setEndTime(timeRange(value, end))
    }
    const endTimeHandler = (value) => {
        setStartTime(timeRange(start, value))
    }
    const opt = (array) => array.map(item => (
        <Option value={item}>{item}:00</Option>
    ));
    return (
        <div className="date-selected">
            <Typography.Title>Select a Date & Time </Typography.Title>
            <Calendar fullscreen={false}/>
            <div className="date-selected__time">
                <Typography.Title level={5}>We can start any time between</Typography.Title>
                <div className="date-selected__time-box">
                    <Select
                        placeholder="Start time"
                        style={{ width: 120 }}
                        onChange={startTimeHandler}
                    >
                        {opt(startTime)}
                    </Select>
                    <span className="date-selected__time-box-span">and</span>
                    <Select
                        placeholder="End time"
                        style={{ width: 120 }}
                        onChange={endTimeHandler}
                    >
                        {opt(endTime)}
                    </Select>
                </div>
            </div>
            <Pagination next="/paymethod" progress="70" />
        </div>
    );
};

export default DateSelect;
