import React, {useEffect, useState} from 'react'
import {FiMinus, FiPlus} from "react-icons/all"
import classNames from "classnames";
import './style.scss'



const Counter = ({onChange = () => {}}) => {
    const [count, setCount] = useState(0);

    const minus = () => {
        setCount(prevState => prevState - 1)
    }

    const plus = () => {
        setCount(prevState => prevState + 1)
    }

    useEffect(() => {
        onChange(count)
    }, [count])

    return (
        <div className="counter">
            <span onClick={minus} className={classNames("minus", {"disable": count < 1})}><FiMinus /></span>
            <span className="number">{count}</span>
            <span onClick={plus} className="plus"><FiPlus /></span>
        </div>
    );
};

export default Counter