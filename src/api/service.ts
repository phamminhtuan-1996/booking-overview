import axios from 'axios';
import {
    URL,
    RAW_JSON,
    GET_BOOKING_OVERVIEW,
    GET_INFO_DETAILS_BDC
} from './constans';

import {
    postBody
} from './request-options';

export const fetchBookingOverviewList = async (data: any) => {
    const res = await axios.post(URL + GET_BOOKING_OVERVIEW, postBody(data), RAW_JSON);
    return res;
}
export const fetchBookingOverviewDetails = async (data: any) => {
    const res = await axios.post(URL + GET_INFO_DETAILS_BDC, postBody(data), RAW_JSON);
    return res;
}