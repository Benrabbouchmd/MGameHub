import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: '0ffd09095ce74871bbd38624b81b83e4'
    }
})