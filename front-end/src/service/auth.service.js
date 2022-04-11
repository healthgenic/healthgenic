import axios from "axios";

const API_URL = "http://localhost:8080/auth";

const config = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}

const register = (name, username, password, roles) => {
  return axios({
    method: 'post',
    url: API_URL + '/register/user',
   /*  headers: {}, */
    data: {
      'name': name,
      'username': username,
      'password': password,
      'role':roles
    }
  });
}

const login = async (username, password) => {
  const params = new URLSearchParams()
  params.append('username', username)
  params.append('password', password)
  const response = await axios
    .post(API_URL + "/login", params, config);
  if (response.data.accessToken) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

/*const verifyAccessToken = () => {
  return axios.get(API_URL + "/verify/accessToken?token=" + getCurrentUser().accessToken)
}

const getRefreshAccessToken = () => {
  const refreshToken = getCurrentUser().refreshToken
  return axios({
    method: 'post',
    url: API_URL + "/token/refresh",
    headers: { Authorization: 'Bearer ' + refreshToken },
    data: {
    }
  });
}*/

export default {
  register,
  login,
  logout,
  getCurrentUser,
  //verifyAccessToken, 
  //getRefreshAccessToken
};