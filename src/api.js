import axios from 'axios';

export const fetchAuth = (user) => 
    (axios.post("http://localhost:1312/login", user))

export const fetchLogout = (user) => 
    (axios.get("http://localhost:1312/logoutasd"))