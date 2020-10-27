import axios from 'axios'

let apiUrl


const apiUrls = {
  //need to change the URL below for production environment
    production: 'https://bog-post-application-group6.herokuapp.com/api', 
    development: 'http://localhost:3000/api'
}


if (window.location.hostname === 'localhost') {
    apiUrl = apiUrls.development
} else {
    apiUrl = apiUrls.production
}


const api = axios.create({
    baseURL: apiUrl
})

export default api
