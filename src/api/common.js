import request from '@/utils/request.js';
import { wxPromisify } from "@/utils/index.js";

//get方法
function getRequest(url, data) {
    const getRequest = wxPromisify(request)
    return getRequest({
        url,
        method: 'get',
        data
    })
}

//post方法
function postRequest(url, data) {
    const postRequest = wxPromisify(request)
    return postRequest({
        url,
        method: 'post',
        data
    })
}

//传方法
function comRequest(url, method, data) {
    const comRequest = wxPromisify(request)
    return comRequest({
        url,
        method,
        data
    })
}

module.exports = {
    postRequest,
    getRequest,
    comRequest
}