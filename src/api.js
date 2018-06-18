import axios from 'axios';

const baseUrl = 'http://localhost:1312';

export const fetchAuth = (user) => 
    (axios.post(`${baseUrl}/api/auth/signin`, user))

export const fetchLogout = () => 
    (axios.get(`${baseUrl}/api/auth/signout`))

export const fetchSignUp = (user) => 
    (axios.post(`${baseUrl}/api/auth/signup`, user))

export const fetchTypes = () => 
    (axios.get(`${baseUrl}/api/types`))

export const fetchAppointments = () => 
    (axios.get(`${baseUrl}/api/facility`))

export const fetchSearch = (form) => 
    (axios.post(`${baseUrl}/api/facility/search`, form))