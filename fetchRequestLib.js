//** get request with fetch---->

export const getFetchRequest = (url) => {

    return fetch(url)
        .then((response) => {
           if (!response.ok) {
                throw new Error(`Data did not get from server !`)
            }
           return response.json();
        })
       .then((data) =>data)
       .catch(error=>{
          throw error;
        })
};

export const postFetchRequest =  (url, data) => {
    return fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(data)
    })
    .then((response) => {
         if (!response.ok) {
            throw new Error(`Not Added At Server.....`)
         }
         return response.json()
    })
    .then((data) =>data)
    .catch(error=>{
        throw error;
    })
}
export const editFetchRequest = (url , data) => {
    return fetch(url, {
        method : 'PUT',
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(data)
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error(`ERROR: Data Did Not Updated In server....!`);           
        }
        return response.json();
    })
    .then((data) => data)
    .catch((error) => {
        throw error;
    })
}       