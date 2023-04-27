import axios from "axios"

const urlOrders = "http://localhost:3001/Orders";
const urlBookList= "http://localhost:3001/BooksList";
const urluserDetails= "http://localhost:3001/UserDetails";

export const orderHistory = (user) => {
    return axios.get(urlOrders)
}

export const booksList = (user) => {
    return axios.get(urlBookList)
}

export const usersList = (user) => {
    return axios.get(urluserDetails)
}
