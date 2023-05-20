import axios from 'axios';
import {toast} from 'react-toastify'
import apiConfig from './apiConfig';

const axiosClient = axios.create({
  baseURL:apiConfig.baseURL,
  headers:{
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Origin, X-Auth-Token, Authorization',
    token: localStorage.getItem('token.bmd'),
  }
})

export const axiosConfig = () => {
  return (
    <div>axiosConfig</div>
  )
}