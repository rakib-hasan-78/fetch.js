import { getFetchRequest, postFetchRequest } from "./fetchRequestLib.js";
import { cancelFunction, dataManage, displayData } from "./functions.js";

export const dataModal = (action) => {
    const body = document.querySelector('body');
    
    const backdrop = document.createElement('div');
    backdrop.className = 'modal-backdrop fade show';
    body.append(backdrop);

    const modal = document.createElement('div');
    modal.className = 'modal fade show d-flex';  // Ensure it has 'modal' and 'show' classes
     // Force display to ensure visibility

    modal.innerHTML = `
        <div class="modal-dialog w-100 mx-auto" >
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="btn-close" ></button>
                </div>
                <div class="modal-body d-flex flex-row align-items-center justify-content-center">
                    <form class="w-100">
                        <div class="mb-1">
                            <label for="recipient-id" class="col-form-label">ID NO:</label>
                            <input type="text" class="form-control w-100" id="recipient-id">
                        </div>
                        <div class="mb-1">
                            <label for="recipient-name" class="col-form-label">Name:</label>
                            <input type="text" class="form-control w-100" id="recipient-name">
                        </div>
                        <div class="mb-1">
                            <label for="recipient-age" class="col-form-label">Age:</label>
                            <input type="text" class="form-control w-100" id="recipient-age">
                        </div>
                        <div class="mb-1">
                            <label for="recipient-sex" class="col-form-label">Sex:</label>
                            <input type="text" class="form-control w-100" id="recipient-sex">
                        </div>
                        <div class="mb-1">
                            <label for="recipient-email" class="col-form-label">Email:</label>
                            <input type="text" class="form-control w-100" id="recipient-email">
                        </div>
                        <div class="mb-1">
                            <label for="recipient-phone" class="col-form-label">Phone:</label>
                            <input type="text" class="form-control w-100" id="recipient-phone">
                        </div>
                        <div class="mb-1">
                            <label for="recipient-address" class="col-form-label">Address:</label>
                            <input type="text" class="form-control w-100" id="recipient-address">
                        </div>
                        <div class="mb-1">
                            <label for="recipient-state" class="col-form-label">State:</label>
                            <input type="text" class="form-control w-100" id="recipient-state">
                        </div>
                        <div class="mb-1">
                            <label for="recipient-country" class="col-form-label">Country:</label>
                            <input type="text" class="form-control w-100" id="recipient-country">
                        </div>
                        <div class="mb-1">
                            <label for="recipient-profession" class="col-form-label">Profession:</label>
                            <input type="text" class="form-control w-100" id="recipient-profession">
                        </div>
                        <div class="mb-1">
                            <label for="recipient-organization" class="col-form-label">Organization:</label>
                            <input type="text" class="form-control w-100" id="recipient-organization">
                        </div>
                    </form>
                </div>
                <div class="modal-footer d-flex flex-md-row flex-column align-items-center justify-content-center">
                    <button type="button" class="btn btn-secondary" >Close</button>
                    <button type="button" class="btn btn-primary">Send message</button>
                </div>
            </div>
        </div>
    `;

    body.append(modal);



    const closeButton = modal.querySelector('.btn-close');
    closeButton.addEventListener('click', ()=>{
        cancelFunction(body, modal, backdrop);
    });
    modal.querySelector('.btn-secondary').addEventListener('click', (e)=>{
        e.preventDefault();
        cancelFunction(body, modal, backdrop);
    });



    const btnPrimary = modal.querySelector('.btn-primary');
    btnPrimary.addEventListener('click', (e)=>{

        const obj = {
            id:modal.querySelector('#recipient-id').value.trim(),
            name:modal.querySelector('#recipient-name').value.trim(),
            age:modal.querySelector('#recipient-age').value.trim(),
            sex:modal.querySelector('#recipient-sex').value.trim(),
            contacts: {
                email:modal.querySelector('#recipient-email').value.trim(),
                phone:modal.querySelector('#recipient-phone').value.trim(),
            },
            address:modal.querySelector('#recipient-address').value.trim(),
            state:modal.querySelector('#recipient-state').value.trim(),
            country:modal.querySelector('#recipient-country').value.trim(),
            profession:modal.querySelector('#recipient-profession').value.trim(),
            organization:modal.querySelector('#recipient-organization').value.trim()
        }
        
        e.preventDefault();
        eventFunction(action, obj);
        cancelFunction(body,modal, backdrop);
    })
};
 const eventFunction = (action, objs) => {
    switch (action) {
        case 'post':
            postFetchRequest('http://localhost:3000/users', objs)
            .then(() => {
                return getFetchRequest('http://localhost:3000/users')
            })
            .then((response) => {
                displayData(response, 'data-info');
                localStorage.setItem('user-data', JSON.stringify(response));
            })
            .catch(error=>{
                console.error(error);
                document.getElementById('data-info').innerHTML = error;
            })
            break;
    
        default:
            break;
    }
}
