import ApiSingleton from './axiosInstance';

// import { fetchLoginfromLocalStorage } from '../stores';
export const getStore = async () => {
    // grab current state
    // const myStore = fetchLoginfromLocalStorage();
    // return myStore;
    return {};
};

const initRequestObj = async () => {
    const apiSingleton = ApiSingleton;
    // const store: any = await getStore();
    // const currentState = store.getState();
    // const { Login } = currentState;

    // if (!apiSingleton.isAuthorisationReady()) {
        // if (!Login.msaltoken || !Login.accesstoken) {
        //     throw new Error(' API not ready ');
        // }
    // }
    // apiSingleton.setAuthorisation(Login.accesstoken);
    return apiSingleton;
};

export const getRequestWithOutHeader = async (url: string, options: object) => {
    const request = ApiSingleton;
    if (request) {
        return request.getWithOutHeader(url, options);
    }
};

export const getRequest = async (url: string, options: object = {}) => {
    const request = await initRequestObj();
    if (request) {
        return request.get(url, options);
    }
};

export const postRequest = async (url: string, data: object = {}, options: object = {}) => {
    const request = await initRequestObj();
    if (request) {
        return request.post(url, data, options);
    }
    // return axios.get(url, data, options);
};

export const putRequest = async (url: string, data: object = {}, options: object = {}) => {
    const request = await initRequestObj();
    if (request) {
        return request.put(url, data, options);
    }
    // return axios.put(url, data, options);
};

export const deleteRequest = async (url: string, data: object = {}) => {
    const request = await initRequestObj();
    if (request) {
        return request.delete(url, data);
    }
    // return axios.delete(url, data);
};

export const customRequest = async (options = {}) => {
    const request = await initRequestObj();
    if (request) {
        return request.create(options);
    }
    // return axios.create(options);
};
