import APIRequest from "../utils/config/axios.config";

export function getJoke(){
    return APIRequest.get('/'); //respuesta del https://api.chucknorris.io/jokes/random 
}


