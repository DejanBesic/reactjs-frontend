import axios from 'axios';

export const fetchAuth = (user) => 
    (axios.post("http://localhost:8082/login", user))