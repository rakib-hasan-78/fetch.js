import { displayData } from "./functions.js";
import { modal } from "./modal.js";


const loadData = document.getElementById('load-data');
loadData.addEventListener('click', (e)=>{
    e.preventDefault();
    modal(`Are Sure To Load Data ?`,'get');
});

const addData = document.getElementById('add-data');
addData.addEventListener('click', (e)=>{
    e.preventDefault();
    modal(`want to add another ?`, 'post')
});

const editData = document.getElementById('edit-data');
editData.addEventListener('click', (e)=>{
    e.preventDefault();
    modal(`Sure to edit Data ?`, 'put')
});
const deleteData = document.getElementById('delete-data');
deleteData.addEventListener('click', (e)=>{
    e.preventDefault();
    modal(`want to delete a Data ?`, 'delete')
});

// Immediately load data from localStorage if available on page load
(function loadDataOnPageLoad() {
    const dataUser = localStorage.getItem('user-data');
    if (dataUser) {
        try {
            const parsedData = JSON.parse(dataUser);
            displayData(parsedData, 'data-info'); // Display data if it exists
        } catch (error) {
            console.error("Error loading saved data:", error);
            localStorage.removeItem('user-data'); // Remove invalid data if JSON parse fails
        }
    }
})();