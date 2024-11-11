export const cancelFunction = (parent, childOne, childTwo) => {

    parent.addEventListener('click', (e) => {
        // Check if childOne and childTwo are still children of the parent
        if (childOne && parent.contains(childOne)) {
            parent.removeChild(childOne);
        }
        if (childTwo && parent.contains(childTwo)) {
            parent.removeChild(childTwo);
        }
    });
}

export const displayData = (data, id) => {
    let output = '';
    data.forEach(response=>{
        const {email, phone}= response.contacts;
        output+=`
            <ol class='w-25'>
            <li>ID No: ${response.id}</li>
            <li>Name: ${response.name}</li>
            <li>Age:  ${response.age}</li>
            <li>Sex:  ${response.sex}</li>
            <li>Email:${email}</li>
            <li>Phone No:${phone}</li>
            <li>Address: ${response.address}</li>
            <li>State: ${response.state}</li>
            <li>Country: ${response.country}</li>
            <li>Profession: ${response.profession}</li>
            <li>Organization: ${response.organization}</li>
            </ol>   
        `
    })
    document.getElementById(id).innerHTML = output; 
}

export const dataManage = (response, id) => {
    let output = '';
        /* const {email, phone}= response.contacts; */
        output =`
            <ol class='w-25'>
            <li>ID No: ${response.id}</li>
            <li>Name: ${response.name}</li>
            <li>Age:  ${response.age}</li>
            <li>Sex:  ${response.sex}</li>
            /* <li>Email:${email}</li>
            <li>Phone No:${phone}</li> */
            <li>Address: ${response.address}</li>
            <li>State: ${response.state}</li>
            <li>Country: ${response.country}</li>
            <li>Profession: ${response.profession}</li>
            <li>Organization: ${response.organization}</li>
            </ol>   
        `
    document.getElementById(id).innerHTML = output; 
}