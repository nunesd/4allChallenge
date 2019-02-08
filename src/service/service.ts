export const Service= {
    
    /**
     * API url
     */
    API: 'http://dev.4all.com:3050',
    
    /**
     * Function to get Data from API endpoint.
     * @param url Endpoint from API
     */
     getData: (url: string) => fetch(Service.API + url).then(response => response.json().then(response => response)),
     postData: (url: string, body: any) => fetch(Service.API + url, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({message: body})
    })
}