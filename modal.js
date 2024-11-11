import { dataModal } from './dataModal.js';
import { getFetchRequest } from './fetchRequestLib.js';
import { cancelFunction, displayData } from './functions.js';

export const modal = (text, action) => {
    const body = document.querySelector('body');
    const backdrop = document.createElement('div');
    backdrop.className = 'modal-backdrop fade show';
    body.append(backdrop);

    const modal = document.createElement('div');
    modal.className = 'modal fade show d-flex align-items-center justify-content-center w-100  mx-auto';
    modal.innerHTML = `

        <div class="modal-dialog w-100 mx-auto">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body d-flex flex-row align-items-center justify-content-center">
                    <p class="text-center text-capitalize fw-semibold fs-4 fst-italic">${text}</p>
                </div>
                <div class="modal-footer d-flex flex-md-row flex-column align-items-center justify-content-center">
                <button  type="button" class="btn btn-primary btn-open w-100 w-md-25">Yes</button>
                <button type="button" class="btn btn-secondary btn-cancel w-100 w-md-25">Close</button>
                </div>
            </div>
        </div>
    `
    body.append(modal);
    // cancel Icon Handler
    const closeBtn = modal.querySelector('.btn-close');
    closeBtn.addEventListener('click', ()=>(cancelFunction(body, modal, backdrop)));
    // cancel button handler
    const cancelBtn = modal.querySelector('.btn-cancel');
    cancelBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        cancelFunction(body, modal, backdrop);
    });
    /* data get */
    const actionBtn = modal.querySelector('.btn-open');
    actionBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        eventFunction(action);
        cancelFunction(body, modal, backdrop);
    })
}

const eventFunction = (action) => {
    let dataUser = localStorage.getItem('user-data');
    if (dataUser) {
        try {
            const parsedData = JSON.parse(dataUser);
            displayData(parsedData, 'data-info');
        } catch (error) {
            console.error(error);
            localStorage.removeItem('user-data')
        }    
    }

    switch (action) {
        case 'get':
            getFetchRequest('http://localhost:3000/users')
                .then(response=>{
                    displayData(response, 'data-info');
                    localStorage.setItem('user-data', JSON.stringify(response));
                })
                .catch(error=>{
                    console.error(error);
                    document.getElementById('data-info').innerHTML= error;
                })
            break;
        case 'post':
            dataModal('post');
            break;    
        case 'put':
            dataModal('put');
            break;    
        default:
            console.log("Unknown action");
            break;
    }
    // Your existing code, including modal, eventFunction, and displayData...
}

    