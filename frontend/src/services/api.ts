import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

export const register = (email: string, password: string, fullName: string) => {
    return axios.post(`${API_URL}/register`, {
        email,
        password,
        full_name: fullName,
        role: 'student'
    });
};

export const login = async (email: string, password: string) => {
    const response = await axios.post(`${API_URL}/login`, {
        email,
        password
    });

    if (response.data.access_token) {
        localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
};

export const logout = () => {
    localStorage.removeItem('user');
};
