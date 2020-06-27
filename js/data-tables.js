const config1 = {
  parent: '#usersTable',
  columns: [
    {title: '№', value: '_index', editable: false},
    {title: 'Создано', value: 'createAt', editable: false},
    {title: 'Имя', value: 'name', editable: true},
    {title: 'Аватар', value: 'avatar', type: 'url-jpg', editable: false},
    {title: 'Фамилия', value: 'surname', sortable: true, editable: true},
    {title: 'Возраст', value: (user) => calculateAge(user.birthday), type: 'number', sortable: true, editable: true},
    {title: 'Действия', type: 'actions', editable: false},
  ],
  search: {
    fields: ['name', 'surname'],
    filters: [
      v => v.toLowerCase()
    ]
  },
  apiUrl: "https://5e938231c7393c0016de48e6.mockapi.io/api/ps5/players"
};

dataTable(config1);

async function dataTable(config) {
  let table = document.createElement('table');
  let parent = document.querySelector(config.parent);
  let searchForm = document.createElement('div');
  let searchInput = document.createElement('input');
  let row, users;
  let addButton = document.createElement('div');
  if(config.apiUrl){
    users = await getDataFromURL(config.apiUrl);
  }
  if(config.search) {
    addSearchForm(parent, searchForm, searchInput, addButton, table, users);
    addInputListener(table, users, searchInput, config);
  }
  addHeaderOfTable(table, config, users);
  parent.appendChild(table);
  renderTable(usersTable.querySelector('table'), users);
}

async function getDataFromURL(url) {
  try {
    let response = await fetch(url, {method: "GET"});
    if (!response.ok) {
        console.log("Error: " + response.status);
    }
    return await response.json();
  } catch (error) {
      console.log("Error: " + error.message);
  }
}

function calculateAge(num){
  const currentDate = new Date();
  const year = new Date(num).getFullYear();
  const month = new Date(num).getMonth();
  const day = new Date(num).getDate();
  let age = currentDate.getFullYear() - year + (currentDate.getMonth() - month) / 12 +
      (currentDate.getDate() - day) / 365;
  if (age < 1)
    return "До 1 года";
  return age.toFixed(0) + " года";
}

function addInputListener(table, users, input, config) {
	input.addEventListener('input', () => {
    let tbody = table.querySelector('tbody');
    let searchUser = findDefineElements(input.value.trim(), users, config.search.fields, config.search.filters);
    tbody.remove();
		renderTable(table, searchUser);
	});
}

function findDefineElements(value, users, fields, filters) {
  let searchUser = [];
  if (value != "") {
    users.forEach((itemUsers) => {
      for (let index in itemUsers) {
        fields.forEach((itemFields) => {
          if(index == itemFields) {
            filters.forEach((itemFilters) => {
               if (itemFilters(itemUsers[index]).includes(itemFilters(value))) {
                  searchUser.push(itemUsers);
               }
            });
          }
        });
      }
    });
  } else return users;
  return searchUser;
}

function addSearchForm(parent, searchForm, searchInput, addButton, table, users) {
  let searchLabel = document.createElement('label');
  let modalForm = document.createElement('form');
  let closeModal = document.createElement('div');
  searchForm.setAttribute('class', 'table-search');
  searchInput.setAttribute('type', 'text');
  searchInput.setAttribute('class', 'table-search-input');
  searchInput.setAttribute('id', 'search');
  searchLabel.innerText = "Search";
  searchLabel.setAttribute('for', 'search');
  searchLabel.setAttribute('class', 'table-search-label');
  addButton.setAttribute('class', 'button button-primary table-add-button modal-trigger');
  addButton.innerText = "Добавить";
  searchForm.appendChild(searchLabel);
  searchForm.appendChild(searchInput);
  searchForm.appendChild(addButton);
  parent.appendChild(searchForm);
  // let bod = getEditableData(config1.columns, users);
  let body = { name: "", surname: "", birthday: 0 };
  createModal(modalForm, closeModal, table, searchForm, "Добавить: ");
  addForm(modalForm, table, closeModal, body, null);
  sendRequestToAddUser(closeModal, body, table);
}

function getEditableData(columns, data) {
  let body = [];
  columns.forEach((item, i) => {
    for(index in item) {
      if(index == 'editable' && item.editable == true){
        body.push(item.value);
      }
    }
  });
  return body;
}

function sendRequestToAddUser(closeModal, body, table) {
  closeModal.addEventListener('click', async (e) =>{
    let response = await addDataToURL(config1.apiUrl, body);
    let users = await getDataFromURL(config1.apiUrl);
    table.querySelector('tbody').remove();
    renderTable(table, users);
  });
}

function createModal(modalForm, closeModal, table, square, modalTitle) {
  let modal = document.createElement('div');
  modal.setAttribute('class', 'modal');

  let modalContent = document.createElement('div');
  modalContent.setAttribute('class', 'modal-content');

  let modalHead = document.createElement('div');
  modalHead.setAttribute('class', 'modal-head');
  modalHeadH2 = document.createElement('h2');
  modalHeadH2.innerText = modalTitle;

  let modalBody = document.createElement('div');
  modalBody.setAttribute('class', 'modal-body');
  modalForm.setAttribute('class', 'modal-form');
  modalForm.setAttribute('action', '');

  let modalFooter = document.createElement('div');
  modalFooter.setAttribute('class', 'modal-footer');
  closeModal.setAttribute('class', 'button button-success modal-close');
  closeModal.innerText = "Сохранить";

  modalFooter.appendChild(closeModal);
  modalHead.appendChild(modalHeadH2);
  modalContent.appendChild(modalHead);
  modalBody.appendChild(modalForm);
  modalContent.appendChild(modalBody);
  modalContent.appendChild(modalFooter);
  modal.appendChild(modalContent);
  square.appendChild(modal);
}

function addForm(modalForm, table, closeModal, body, value) {
  let modalLabelName = document.createElement('label');
  modalLabelName.setAttribute('for', 'name');
  modalLabelName.innerText = 'Имя: ';
  let modalInputName = document.createElement('input');
  modalInputName.setAttribute('type', 'text');
  if (value!= null) modalInputName.setAttribute('value', value.name);
  modalInputName.addEventListener('input', () => {
    // if (modalInputName.value == name) {
       body.name = modalInputName.value;
    // }
    // else body.name = name;
  });

  let modalLabelSname = document.createElement('label');
  modalLabelSname.setAttribute('for', 'sname');
  modalLabelSname.innerText = 'Фамилия: ';
  let modalInputSname = document.createElement('input');
  modalInputSname.setAttribute('type', 'text');
  if (value!= null) modalInputSname.setAttribute('value', value.surname);
  modalInputSname.addEventListener('input', () => {
    // if (modalInputSname.value != surname){
       body.surname = modalInputSname.value;
    // }
    // else body.surname = surname;
  });

  let modalLabelAge = document.createElement('label');
  modalLabelAge.setAttribute('for', 'age');
  modalLabelAge.innerText = 'Дата рождения: ';
  let modalInputAge = document.createElement('input');
  modalInputAge.setAttribute('type', 'date');
  if (value!= null) modalInputAge.setAttribute('value', value.birthday);
  modalInputAge.setAttribute('max', '2018-12-31');
  modalInputAge.addEventListener('input', () => {
    // if (modalInputAge.value != birthday){
       body.birthday = modalInputAge.value;
    // }
    // else body.birthday = birthday;
  });

  modalForm.appendChild(modalLabelName);
  modalForm.appendChild(modalInputName);
  modalForm.appendChild(modalLabelSname);
  modalForm.appendChild(modalInputSname);
  modalForm.appendChild(modalLabelAge);
  modalForm.appendChild(modalInputAge);
}

async function addDataToURL(url, body) {
  try {
    let response = await fetch(url, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    });
    if (!response.ok) {
        console.log("Error: " + response.status);
    }
    return await response.json();
  } catch (error) {
      console.log("Error: " + error.message);
  }
}

function addHeaderOfTable(table, config, data) {
  let columns = config.columns;
	const headTable = table.createTHead().insertRow(0);
	columns.forEach((item) => {
		row = headTable.appendChild(document.createElement('th'));
		row.setAttribute('id', columns.value);
    row.innerText = item.title;
    if (item.type == true) row.setAttribute('class', 'align-right');
    addSortingButton(item, row, table, data);
	});
}

function addSortingButton(item, row, table, data) {
  for (let index in item) {
    if (index === 'sortable') {
      let buttonSortDown = document.createElement('button');
      let buttonSortUp = document.createElement('button');
      let buttonSort = document.createElement('button');
      addIconsToButton(buttonSortUp, buttonSortDown, buttonSort);
      row.appendChild(buttonSort);
      buttonSort.addEventListener('click', (e) =>{
        sorting(table, item, 1, data);
        row.appendChild(buttonSortUp);
        buttonSort.remove();
      });
      buttonSortUp.addEventListener('click', (e) =>{
        sorting(table, item, -1, data);
        buttonSortUp.remove();
        row.appendChild(buttonSortDown);
      });
      buttonSortDown.addEventListener('click', (e) =>{
        table.querySelector('tbody').remove();
        renderTable(table, data);
        buttonSortDown.remove();
        row.appendChild(buttonSort);
      });
    }
  }
}

function addIconsToButton(buttonSortUp, buttonSortDown, buttonSort) {
  let iconUp = document.createElement('i');
  iconUp.setAttribute('class', 'fas fa-sort-up');
  buttonSortUp.appendChild(iconUp);
  let iconSort = document.createElement('i');
  iconSort.setAttribute('class', 'fas fa-sort');
  buttonSort.appendChild(iconSort);
  let iconDown = document.createElement('i');
  iconDown.setAttribute('class', 'fas fa-sort-down');
  buttonSortDown.appendChild(iconDown);
}

function sorting(table, index, koef, data) {
  let tbody = table.querySelector('tbody');
  let sortData = [...data];
  if(index.type === 'number') {
    sortData.sort((u1, u2) => (calculateAge(u1.birthday).localeCompare(calculateAge(u2.birthday))) * koef);
  } else {
    sortData.sort((u1, u2) => u1.surname.localeCompare(u2.surname) * koef);
  }
  tbody.remove();
  renderTable(table, sortData);
}

function renderTable(table, data) {
  let tbody = table.appendChild(document.createElement('tbody'));
  let _index = 1;
  let j;
  let row, cell;
  let id = 0;
  data.forEach((item, i) => {
    j = 1;
    row = tbody.insertRow(i);
    cell = row.insertCell(0);
    cell.innerHTML = _index++;
    setTableAttributes(row, item, j);
    for (let index in item) {
      if (index === 'id') {
        let value = findDefaultValueById(data, item[index]);
        createAtionButton(row, table, data, item[index], value);
      }
    }
  });
  addModalForm();
}

function findDefaultValueById(data, id) {
  let value = { name: "", surname: "", birthday: 0 }
  data.forEach((item, i) => {
    for (index in item) {
      if(index == "id" && item[index] == id) {
        value.surname = item.surname;
        value.name = item.name;
        value.birthday = item.birthday;
      }
    }
  });
  return value;
}

function createAtionButton(row, table, data, id, value) {
  let cellAction = document.createElement('td');
  let modalForm = document.createElement('form');
  let closeModal = document.createElement('div');
  let deleteButton = document.createElement('div');
  let editButton = document.createElement('div');
  deleteButton.setAttribute('class', "button button-danger");
  deleteButton.innerHTML = "Удалить";
  editButton.setAttribute('class', "button button-warning modal-trigger");
  editButton.innerHTML = "Редактировать";
  cellAction.appendChild(deleteButton);
  cellAction.appendChild(editButton);
  row.appendChild(cellAction);

  addDeleteRowListener(deleteButton, table, id);
  createModal(modalForm, closeModal, table, cellAction, "Редактировать (user id " + id + ")");
  let body = { name: "", surname: "", birthday: 0 };
  addForm(modalForm, table, closeModal, body, value);
  addEditRowListener(closeModal, table, data, id, body);
}

function addEditRowListener(editButton, table, data, id, body) {
  editButton.addEventListener('click', async (e) => {
    let response = await changeDataFromURL(config1.apiUrl + "/" + id, body);
    let users = await getDataFromURL(config1.apiUrl);
    table.querySelector('tbody').remove();
    renderTable(table, users);
  });
}

async function changeDataFromURL(url, body) {
  try {
    let response = await fetch(url, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    });
    if (!response.ok) {
        console.log("Error: " + response.status);
    }
    return await response.json();
  } catch (error) {
      console.log("Error: " + error.message);
  }
}

function addDeleteRowListener(deleteButton, table, id) {
  deleteButton.addEventListener('click', async (e) =>{
    let response = await deleteDataFromURL(config1.apiUrl + "/" + id);
    let users = await getDataFromURL(config1.apiUrl);
    table.querySelector('tbody').remove();
    renderTable(table, users);
  });
}

async function deleteDataFromURL(url) {
  try {
    let response = await fetch(url, {method: "DELETE"});
    if (!response.ok) {
        console.log("Error: " + response.status);
    }
    return await response.json();
  } catch (error) {
      console.log("Error: " + error.message);
  }
}

function setTableAttributes(row, users, num) {
  for (let index in users) {
    if (index != 'id') {
      let cell = row.insertCell(num++);
      if (index == 'createdAt') {
        cell.innerText = users[index].slice(0, 10);
      } else if (index == 'avatar') {
          let ava = document.createElement('img');
          ava.setAttribute('src', users.avatar);
          cell.appendChild(ava);
      } else if (index == 'birthday') {
          cell.innerText = calculateAge(users[index]);
      } else {
          cell.innerText = users[index];
      }
    }
  }
}
