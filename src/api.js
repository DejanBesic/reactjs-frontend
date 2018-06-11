import axios from 'axios';

export const fetchAuth = (user) => 
    (axios.post("http://localhost:1312/api/auth/signin", user))

export const fetchLogout = () => 
    (axios.get("http://localhost:1312/api/auth/signout"))

export const fetchSignUp = (user) => 
    (axios.post("http://localhost:1312/api/auth/signup", user))