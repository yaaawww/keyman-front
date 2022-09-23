import http from "../http-common";
import { authHeader } from "../helper/auth-header";
 
const PasswordService = {
    getAll,
    findBySite,
    create,
    update,
    deleteById,
    deleteAll,
    register,
    login,
    logout
}


function getAll() {
    return http.get(`/`);
}

function findBySite(site_addr) {
    return http.get(`/${site_addr}`, {headers: authHeader()});
}

function create(data) {
    return http.post("/", data, {headers: authHeader()});
}

function update(data) {
    return http.put(`/`, data, {headers: authHeader()});
}

function deleteById(id) {
    return http.delete(`/${id}`, {headers: authHeader()});
}

function deleteAll() {
    return http.delete(`/`, {headers: authHeader()});
}

// authentication
function register(data) {
    return http.post(`/register`, data, {headers: authHeader()});
}

function login(data) {
    console.log(data);
    return http.post(`/login`, data, {headers: authHeader()});
}

function logout() {
    localStorage.removeItem('user');
}

export default PasswordService;