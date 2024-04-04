import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "c5fe87c353b2472cbb277df9a395accd",
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getall = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };


  get = (id: number | string)=> {
   return axiosInstance
      .get<T>(this.endpoint + '/' + id) 
      .then(res=> res.data)
  }


}

export default APIClient;


//  here we need get method , 
// since we are getting single response , so we don't have to use FetchResponse , since 
// object that we recieve is one and does not have count , and other properties
// this is single game Object
// we need id as parameter , for games id gonna be stirng,  but for object it can be a number 
// so we can use union type 

// and now go to useGame.ts 