import { modal } from "./modal.js";

const loadData = document.getElementById('load-data');
loadData.addEventListener('click', (e)=>{
    e.preventDefault();
    modal(`Are Sure To Load Data ?`);
});

const addData = document.getElementById('add-data');
addData.addEventListener('click', (e)=>{
    e.preventDefault();
    modal(`want to add another ?`)
});

const editData = document.getElementById('edit-data');
editData.addEventListener('click', (e)=>{
    e.preventDefault();
    modal(`Sure to edit Data ?`)
});
const deleteData = document.getElementById('delete-data');
deleteData.addEventListener('click', (e)=>{
    e.preventDefault();
    modal(`want to delete a Data ?`)
});