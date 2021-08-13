import axios from "axios";

export const fetchPriceList = (category) => dispatch => {
    axios.get('http://localhost:3000/db.json').then(({data}) => {
        dispatch(loadMovingType(data));
    })
}


export const loadMovingType = (items) => ({
    type: 'LOAD_MOVING_TYPE',
    payload: items
})