import axios from "axios";

const instance = axios.create({
	baseURL: "https://frozen-mesa-19521.herokuapp.com/",
});

export default instance;
