import React, {useContext} from 'react';
import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons';
import './style.scss';
import {Button} from "antd";
import {Link, useHistory} from "react-router-dom";
import {useHttp} from "../../hooks/http.hook";
import {AuthContext} from "../../context/AuthContext";

const Pagination = ({next, progress}) => {
    // const auth = useContext(AuthContext)
    // const {request} = useHttp();
    const history = useHistory();
    const goBack = () => {
        history.goBack();
    }
/*    const createOrder = async () => {
        try {
            const data = await request('/api/order/create', 'POST', {details: '1', total: '2', info: {movingType: 1, location: 'SanDiego'}}, {Authorization: `Bearer ${auth.token}`})
            console.log(data)
        } catch (e) {}
    }*/
    return (
        <div className="pagination">
            <div className="pagination__progress-line">
                <div className="pagination__progress" style={{width:progress + '%'}}></div>
            </div>
            <div className="pagination__buttons">
                <Button onClick={() => goBack()} size="large"><CaretLeftOutlined /> Back</Button>
                <Button size="large" type="primary">

                    <Link to={next}>Continue <CaretRightOutlined /></Link>
                </Button>
            </div>
        </div>
    );
};

export default Pagination;