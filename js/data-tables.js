const config1 = {
  parent: '#usersTable',
  columns: [
    {title: '№', value: '_index'},
    {title: 'Создано', value: 'createAt'},
    {title: 'Имя', value: 'name'},
    {title: 'Аватар', value: 'avatar'},
    {title: 'Фамилия', value: 'surname', sortable: true},
    {title: 'Возраст', value: (user) => calculateAge(user.birthday), sortable: true},
    {title: 'Действия', type: 'actions'},
  ],
  search: {
    fields: ['name', 'surname'],
    filters: [
      v => v.toLowerCase()
      // v => toKeyboardLayout(v, 'ru'),
      // v => toKeyboardLayout(v, 'en')
    ]
  },
  apiUrl: "https://5e938231c7393c0016de48e6.mockapi.io/api/ps5/players"
};

const users = [
  {id: 30050, name: 'Вася', surname: 'Петров', age: 12},
  {id: 30051, name: 'Василий', surname: 'Васечкин', age: 15},
  {id: 30050, name: 'Иван', surname: 'Абрамов', age: 13},
  {id: 30051, name: 'Максим', surname: 'Бровкин', age: 18},
  {id: 30050, name: 'Кирилл', surname: 'Каролович', age: 11},
  {id: 30051, name: 'Роман', surname: 'Мишкин', age: 10},
  {id: 30050, name: 'Дмитрий', surname: 'Цветочек', age: 19},
  {id: 30051, name: 'Руслан', surname: 'Иванов', age: 25},
];

dataTable(config1);

//dataTable(config1, users);

function dataTable(config, users) {
  let table = document.createElement('table');
  let parent = document.querySelector(config.parent);
  let searchForm = document.createElement('div');
  let searchInput = document.createElement('input');
  let searchLabel = document.createElement('label');
  let row;
  if(config.search) {
    addSearchForm(parent, searchForm, searchInput, searchLabel);
    addInputListener(table, users, searchInput, config);
  }
  addHeaderOfTable(table, config, users);
  parent.appendChild(table);
  renderTable(usersTable.querySelector('table'), users);
}

async function dataTable(config) {
  let table = document.createElement('table');
  let parent = document.querySelector(config.parent);
  let searchForm = document.createElement('div');
  let searchInput = document.createElement('input');
  let row, users;
  if(config.apiUrl){
    users = await getDataFromURL(config.apiUrl);
  }
  if(config.search) {
    addSearchForm(parent, searchForm, searchInput);
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
  return age.toFixed(2) + " года";
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

function addSearchForm(parent, searchForm, searchInput) {
  let searchLabel = document.createElement('label');
  searchForm.setAttribute('class', 'table-search');
  searchInput.setAttribute('type', 'text');
  searchInput.setAttribute('class', 'table-search-input');
  searchInput.setAttribute('id', 'search');
  searchLabel.innerText = "Search";
  searchLabel.setAttribute('for', 'search');
  searchLabel.setAttribute('class', 'table-search-label');
  searchForm.appendChild(searchLabel);
  searchForm.appendChild(searchInput);
  parent.appendChild(searchForm);
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
    sortData.sort((u1, u2) => (u1.age - u2.age) * koef);
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
  data.forEach((item, i) => {
    j = 1;
    row = tbody.insertRow(i);
    cell = row.insertCell(0);
    cell.innerHTML = _index++;
    setTableAttributes(row, item, j);
    for (let index in item) {
      if (index === 'id') {
        createAtionButton(row, table, data, item[index]);
      }
    }
  });
}

function createAtionButton(row, table, data, id) {
  let cellAction = document.createElement('td');
  let deleteButton = document.createElement('div');
  deleteButton.setAttribute('class', "button button-danger");
  deleteButton.innerHTML = "Удалить";
  cellAction.appendChild(deleteButton);
  row.appendChild(cellAction);
  addDeleteRowListener(deleteButton, table, id);
}

async function addDeleteRowListener(deleteButton, table, id) {
  deleteButton.addEventListener('click', async (e) =>{
    console.log(id);
    let response = await deleteDataFromURL(config1.apiUrl + "/" + id);
    let users = await getDataFromURL(config1.apiUrl);
    console.log(users);
    let tbody = table.querySelector('tbody');
    tbody.remove();
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
