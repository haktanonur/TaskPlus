import axios from "axios";

const BASE_REST_API_URL = 'http://localhost:8080/api/todos';

export const getAllTodos = () => axios.get(BASE_REST_API_URL);

export const addTodo = (todo) => axios.post(BASE_REST_API_URL, todo);