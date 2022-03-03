/*global pcs*/
(function () {
  'use strict';

  const addContactForm = $('#addContactForm');
  const contactsTable = $('#contactsTable tbody');
  const firstNameInput = $('#first');
  const lastNameInput = $('#last');
  const emailInput = $('#email');
  const phoneInput = $('#phone');

  let contacts = [];

  $('#addContact').click(() => {
    addContactForm.slideDown('slow');//show();
  });

  function addContact(newContact) {
    if (!contacts.length) {
      $(':first-child', contactsTable).remove();
    }

    contacts.push(newContact);

    const row = $(`
        <tr>
          <td>${newContact.first}</td>
          <td>${newContact.last}</td>
          <td>${newContact.email}</td>
          <td>${newContact.phone}</td>
          <td><button>delete</button></td>
        </tr>
    `).appendTo(contactsTable);

    row.find('button')
      .click(() => {
        row.remove();
        contacts = contacts.filter(c => c !== newContact);

        if (!contacts.length) {
          contactsTable.append(`<tr><td colspan="5">no contacts loaded</td></tr>`);
        }
      });
  }

  addContactForm.submit(event => {
    event.preventDefault();

    const newContact = {
      first: firstNameInput.val(),
      last: lastNameInput.val(),
      email: emailInput.val(),
      phone: phoneInput.val()
    };

    addContact(newContact);

    hideAndResetAddContactForm();
  });

  $('#cancel').click(() => {
    hideAndResetAddContactForm();
  });

  function hideAndResetAddContactForm() {
    //addContactForm[0].reset();
    addContactForm.trigger('reset');

    addContactForm.slideUp('fast');//hide();
  }

  $('#load').click(async () => {
    /*fetch('people.json')
      .then(r => {
        if (!r.ok) {
          throw new Error(`${r.status} ${r.statusText}`);
        }
        return r.json();
      })
      .then(newContacts => {
        newContacts.forEach(addContact);
      })
      .catch(err => {
        pcs.messageBox.show(err, true);
      });*/

      try {
        const r = await fetch('http://localhost:3000/api/contacts');
        if (!r.ok) {
          throw new Error(`${r.status} ${r.statusText}`);
        }
        const newContacts = await r.json();
        newContacts.forEach(addContact);
      } catch(err) {
        // pcs.messageBox.show(err, true);
        console.log(err);
      }
  });
}());