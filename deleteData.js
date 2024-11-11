import { deleteFetchRequest, getFetchRequest } from "./fetchRequestLib.js";
import { cancelFunction,  displayData } from "./functions.js";

export const deleteModal = (action) => {
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
            id:modal.querySelector('#recipient-id').value.trim()
        }
        
        e.preventDefault();
        deleteHandle(action, obj);
        cancelFunction(body,modal, backdrop);
    })
};
const deleteHandle = (action, objs) => {
    const targetID = objs.id;
    if (action) {
        deleteFetchRequest(`http://localhost:3000/users/${targetID}`)
        .then(()=>{
            return getFetchRequest(`http://localhost:3000/users`)
        })
        .then(response=>{
            displayData(response, 'data-info');
            localStorage.setItem('user-data', JSON.stringify(response));
        })
    }
}