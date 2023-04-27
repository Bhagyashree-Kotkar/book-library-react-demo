import axios from "axios";

const url = "http://localhost:3001/UserDetails"
const urlOrders = "http://localhost:3001/Orders";
const urlFavourites= "http://localhost:3001/Favourites";
const urlCartList = "http://localhost:3001/Cart";
const urlBooksList = "http://localhost:3001/books";

export const UserLogin = (user) => {
    return axios.get(url, {
        params: {
            email: user.email,
            password: user.password,
            role: user.role
        }
    })
}

export const UserRegister = (newUser) => {
    return axios.post(url, newUser);
}

export const orderHistory = (user) => {
    return axios.get(urlOrders, {
        params: {
            email: user.email,
            role: user.role
        }
    })
}

export const booksList = () => {
    return axios.get(urlBooksList);
}

export const favouritesList = (user) => {
    return axios.get(urlFavourites, {
        params: {
            email: user.email,
            role: user.role
        }
    })
}

export const cartList = (user) => {
    return axios.get(urlCartList, {
        params: {
            email: user.email,
            role: user.role
        }
    })
}

export const addTocart = (book) => {
    return axios.post(urlCartList, book);
}

export const removeFromcart = (id,e) => {
    let deleteCartItemUrl = urlCartList+'/'+id;
    return axios.delete(deleteCartItemUrl);
}

export const booksListBasedUponId = (id) => {
    let urlBook = urlBooksList+'?id='+id;
    return axios.get(urlBook);
}