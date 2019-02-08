import axios from 'axios';

export const Service= {
    
    /**
     * API url
     */
    API: 'http://dev.4all.com:3050',
    
    /**
     * Function to get Data from API endpoint.
     * @param url Endpoint from API
     */
     getData: (url: string) =>  axios.get(Service.API + url).then(response => response.data),
     postData: (url: string, body: any) => axios.post(Service.API + url, {message: body})
    
}