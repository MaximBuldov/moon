import React, {useState} from 'react';
import {Checkbox as AntCheckBox, InputNumber, Modal} from "antd";
import {FcInfo} from "react-icons/all";


const Checkbox = ({children, info, stairs}) => {
    const [visibleStairs, setVisibleStairs] = useState(false)

    const showModal = () => {
        Modal.info({
            content: (
                <div>
                    <p>{info}</p>
                </div>
            ),
            onOk() {},
        });
    };

    const onChange = () => {
        if (stairs) {
            setVisibleStairs(!visibleStairs)
        }
    }

    return (
        <div className={"single-checkbox"}>
            <AntCheckBox onChange={onChange}>{children}</AntCheckBox>
            {info && <FcInfo onClick={showModal}/>}
            {visibleStairs && (
                <div className={"flightsOfStairs"}>Flights of stairs <InputNumber min={1} max={20} defaultValue={1} /></div>
            )}
        </div>
    );
};

export default Checkbox;