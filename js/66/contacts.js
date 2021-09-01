(function () {
  'use strict';

  const addContactForm = get('addContactForm');
  const contactsTable = get('contactsTable');
  const firstNameInput = get('first');
  const lastNameInput = get('last');
  const emailInput = get('email');
  const phoneInput = get('phone');

  const contacts = [];

  function get(id) {
    return document.getElementById(id);
  }

  get('addContact').addEventListener('click', () => {
    addContactForm.style.display = 'block';
  });

  addContactForm.addEventListener('submit', event => {  
    event.preventDefault();

    if(!contacts.length) {
      contactsTable.deleteRow(1);
    }

    const newContact = {
      first: firstNameInput.value,
      last: lastNameInput.value,
      email: emailInput.value,
      phone: phoneInput.value
    };

    contacts.push(newContact);

    const row = contactsTable.insertRow();
    const firstNameCell = row.insertCell();
    const lastNameCell = row.insertCell();
    const emailCell = row.insertCell();
    const phoneCell = row.insertCell();
    const deletecell = row.insertCell();

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete';
    deletecell.appendChild(deleteButton);
    deleteButton.addEventListener('click', () => {
      contactsTable.deleteRow(row.rowIndex);
    });
    

    firstNameCell.innerText = newContact.first;
    lastNameCell.innerText = newContact.last;
    emailCell.innerText = newContact.email;
    phoneCell.innerText = newContact.phone;

    /*firstNameInput.value = '';
    lastNameInput.value = '';
    emailInput.value = '';
    phoneInput.value = '';*/

    //addContactForm.reset();
    //addContactForm.style.display = 'none';
    hideAndResetAddContactForm();
  });

  get('cancel').addEventListener('click', () => {
    hideAndResetAddContactForm();
  });

  function hideAndResetAddContactForm() {
    addContactForm.reset();
    addContactForm.style.display = 'none';
  }

 

  


}());