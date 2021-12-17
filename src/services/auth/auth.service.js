import axios from "axios";

const API_URL = process.env.REACT_APP_API_ENDPOINT_AUTH;

class AuthService {
    login(username, password) {
        return axios
            .post(API_URL + "signin", { username, password })
            .then((response) => {
                if (response.data.accessToken) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }

                return response.data;
            });
    }

    logout() {
        localStorage.removeItem("user");
    }

    register(username, password) {
        return axios.post(API_URL + "signup", {
            username,
            password,
        });
    }
}

export default new AuthService();