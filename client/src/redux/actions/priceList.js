import axios from "axios";

export const fetchPriceList = (category) => dispatch => {
    axios.get('/priceList', {
        params: {
            category: category,
        }
    }).then(({data}) => {
        dispatch(loadMovingType(data));
    })
}


export const loadMovingType = (items) => ({
    type: 'LOAD_MOVING_TYPE',
    payload: items
})