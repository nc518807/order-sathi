import axios from 'axios';
import * as types from './ActionTypes';

// const api = 'https://rupitastore.ordersathi.com/';


// GET_ALL_PRODUCT
const getProducts = (products) => ({
    type: types.GET_PRODUCT,
    payload: products
})

export const getAllProduct = (props) => {
    return function (dispatch) {
        const data = {};
        if (props) {
            if (props.id) data.brand_id = props.id;
        }
        axios.get('https://rupitastore.ordersathi.com/api/get-products/', { params: data })
            .then((response) => {
                // console.log(response, "Request all Products")
                dispatch(getProducts(response.data))
            })
            .catch((error) => console.log(error))
    }
}

// GET_SINGLE_PRODUCT
const SingleProducts = (product) => ({
    type: types.GET_SINGLE_PRODUCT,
    payload: product
})

export const getSingleProduct = (id) => {
    return function (dispatch) {
        axios.get(`https://rupitastore.ordersathi.com/api/get-products/${id}/`)
            .then((response) => {
                // console.log(response, "Request Single Product");
                dispatch(SingleProducts(response.data))
            })
            .then((error) => console.log(error))
    }
}

// BRAND ACTIONTYPES API

const getBrands = (brands) => ({
    type: types.GET_BRAND,
    payload: brands
})

export const getAllBrands = () => {
    return function (dispatch) {
        axios.get('https://rupitastore.ordersathi.com/api/get-brand/')
            .then((response) => {
                // console.log(response, "Request all Brand")
                dispatch(getBrands(response.data))
            })
            .catch((error) => console.log(error))
    }
}

const singleBrand = (brand) => ({
    type: types.GET_SINGLE_BRAND,
    payload: brand
})

export const getSingleBrand = (id) => {
    return function (dispatch) {
        axios.get(`https://rupitastore.ordersathi.com/api/get-brand/${id}/`)
            .then((response) => {
                // console.log(response, "GET_SINGLE_BRAND");
                dispatch(singleBrand(response.data))
            })
            .catch((error) => console.log(error))
    }
}



//CATEGORY ACTIONTYPES API

const getCategories = (categories) => ({
    type: types.GET_CATEGORY,
    payload: categories
})

export const getAllCategory = () => {
    return function (dispatch) {
        axios.get('https://rupitastore.ordersathi.com/api/get-categories/')
            .then((response) => {
                dispatch(getCategories(response.data))
                // console.log(response, "Request All Categories");
            })
            .catch((error) => console.log(error))
    }
}

const SingleCategory = (category) => ({
    type: types.GET_SINGLE_CATEGORY,
    payload: category
})

export const getSingleCategory = (id) => {
    return function (dispatch) {
        axios.get(`https://rupitastore.ordersathi.com/api/get-categories/${id}/`)
            .then((response) => {
                dispatch(SingleCategory(response.data))
                // console.log(response, "Request Single Categories");
            })
            .catch((error) => console.log(error))
    }
}


// LOGIN

const Login = () => ({
    type: types.POST_LOGIN
})


const token = (localStorage.getItem('x-access-token'));
const config =
{
    headers: { Authorization: `Bearer ${token}` }
}

export const postLogin = (state, navigate) => {
    return function (dispatch) {
        axios.post(`https://rupitastore.ordersathi.com/api/token/`, ({ username: state.username, password: state.password }), config
        )
            .then((response) => {
                dispatch(Login(response.data))
                localStorage.setItem('x-access-token', response.data.access);
                localStorage.setItem('x-access-token-expiration',
                    Date.now() + 2 * 60 * 60 * 1000);
                localStorage.setItem('x-refresh-token', response.data.refresh)
                navigate('/client/profile/')
                return response.data

            })
            .catch((error) => console.log('Authentication Failed'))
    }
}

// export const logOut = () => {
//     localStorage.removeItem('x-access-token')
// }


//HERE ADD TO CART
const pcart = (product) => ({
    type: types.POST_CART,
    payload: product
})

export const postCart = (product, counter, navigate) => {
    return function (dispatch) {
        axios.post(`https://rupitastore.ordersathi.com/api/post-cartitem/`, ({ 'product': product, 'quantity': counter }), config)
            .then((response) => {
                dispatch(pcart({ 'product': product, 'quantity': counter }))
                if(response.status === 401) {
                    navigate('/login/')
                } 
                

            })
            .catch((error) => {
                navigate('/login/')
                console.log(error);
            })
    }
}

const getCarts = (carts) => ({
    type: types.GET_CART,
    payload: carts
})

export const getAllCart = () => {
    return function (dispatch) {
        axios.get(`https://rupitastore.ordersathi.com/api/get-cartitem/`, config, {})
            .then((response) => {
                dispatch(getCarts(response.data))
                console.log(response.data, "CART");
            })
            .catch((error) => console.log(error))
    }
}

const delCart = () => ({
    type: types.DELETE_CART
})

export const deleteCart = (id) => {
    return function (dispatch) {
        axios.delete(`https://rupitastore.ordersathi.com/api/post-cartitem/${id}`, config)
        .then((response) => {
            dispatch(delCart())
            dispatch(getAllCart())
            console.log(response.data,"Selected Cart Deleted Successfully");
        }) 
        .catch((error) => console.log(error))
    }
}


//CONTACT FORM SEND MESSAGE

const message = () => ({
    type: types.POST_MESSAGE
})

export const postMessage = (initialState) => {
    return function (dispatch){
        axios.post(`https://rupitastore.ordersathi.com/api/create-message/`,
        ({first_name: initialState.first_name, last_name: initialState.last_name, contact_number: initialState.contact_number, message: initialState.message}),
        config)
        .then((response) => {
            dispatch(message(response.data))
        })
        .catch((error) => console.log(error))
    }
}