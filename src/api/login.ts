import axios from 'axios';
import {
    URL,
    GET_TOKEN_LOGIN,
    RAW_JSON,
    GET_SITE_NAME,
    SWITCH_SITE,
    GET_PROFILE_USER,
    EDIT_PROFILE,
    GET_CODE_MEMBER,
    GET_SEX,
    GET_LIST_MEMBER
} from './constans';

import {
    postBodyGetAuth,
    postBody
} from './request-options';

interface DataLogin {
    UserName: string,
    PassWord: string,
}

export const fetchSiteName = async (data: any) => {
    const res = await axios.post(URL + GET_SITE_NAME, postBodyGetAuth(data), RAW_JSON);
    return res;
}

export const switchSiteName = async (data: any) => {
    const res = await axios.post(URL + SWITCH_SITE, postBody(data), RAW_JSON);
    return res;
}

export const getTokenLogin = async (data: DataLogin) => {
    const res = await axios.post(URL + GET_TOKEN_LOGIN, {'UserName': data.UserName, 'PassWord': data.PassWord}, RAW_JSON);
    return res;
}
export const getProfileUser = async (data: any) => {
    const res = await axios.post(URL + GET_PROFILE_USER, postBody(data), RAW_JSON);
    return res;
}

export const editProfileUser = async (data: any) => {
    const res = await axios.post(URL + EDIT_PROFILE, postBody(data), RAW_JSON);
    return res;
}

export const fetchCodeNameUser = async (data: any) => {
    const res = await axios.post(URL + GET_CODE_MEMBER, postBody(data), RAW_JSON);
    return res;
}

export const fetchSexData = async (data: any) => {
    const res = await axios.post(URL + GET_SEX, data, RAW_JSON);
    return res;
} 

export const fetchListMember = async (data?: any) => {
    const res = await axios.post(URL + GET_LIST_MEMBER,  postBody(data), RAW_JSON);
    return res;
}