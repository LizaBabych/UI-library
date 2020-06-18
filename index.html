 parent: '#usersTable',
  columns: [
    {title: '№', value: '_index'},
    {title: 'Создано', value: 'createAt'},
    {title: 'Имя', value: 'name'},
    {title: 'Аватар', value: 'avatar'},
    {title: 'Фамилия', value: 'surname', sortable: true},
    {title: 'Возраст', value: 'age', type: 'number', sortable: true},
    {title: 'Возраст', value: (user) => calculateAge(user.birthday), type: 'age', sortable: true},
  ],
  search: {
    fields: ['name', 'surname'],
@@ -13,7 +15,8 @@ const config1 = {
      v => toKeyboardLayout(v, 'ru'),
      v => toKeyboardLayout(v, 'en')
    ]
  }
  },
  apiUrl: "https://5e938231c7393c0016de48e6.mockapi.io/api/ps5/players"
};

const users = [
@@ -27,7 +30,9 @@ const users = [
  {id: 30051, name: 'Руслан', surname: 'Иванов', age: 25},
];

dataTable(config1, users);
dataTable(config1);

//dataTable(config1, users);

function dataTable(config, users) {
  let table = document.createElement('table');
@@ -38,18 +43,48 @@ function dataTable(config, users) {
  let row;
  if(config.search) {
    addSearchForm(parent, searchForm, searchInput, searchLabel);
    let searchUser;
    addInputListener(table, users, searchInput, config, searchUser);
    addHeaderOfTable(table, config, row);
    addInputListener(table, users, searchInput, config);
    addHeaderOfTable(table, config, row, users);
  }
  parent.appendChild(table);
  renderTable(usersTable.querySelector('table'), users);
}

async function dataTable(config) {
  let table = document.createElement('table');
  let parent = document.querySelector(config.parent);
  let searchForm = document.createElement('div');
  let searchInput = document.createElement('input');
  let searchLabel = document.createElement('label');
  let row, users;
  if(config.apiUrl){
    users = await getDataFromURL(config.apiUrl);
  }
  if(config.search) {
    addSearchForm(parent, searchForm, searchInput, searchLabel);
    addInputListener(table, users, searchInput, config);
    addHeaderOfTable(table, config, row, users);
  }
  parent.appendChild(table);
  renderTable(usersTable.querySelector('table'), users);
}

function addInputListener(table, users, input, config, searchUser) {
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

function addInputListener(table, users, input, config) {
	input.addEventListener('input', () => {
    let tbody = table.querySelector('tbody');
    searchUser = findDefineElements(input.value.trim(), users, config.search.fields, config.search.filters);
    let searchUser = findDefineElements(input.value.trim(), users, config.search.fields, config.search.filters);
    tbody.remove();
		renderTable(table, searchUser);
	});
@@ -90,19 +125,19 @@ function addSearchForm(parent, searchForm, searchInput, searchLabel) {
  parent.appendChild(searchForm);
}

function addHeaderOfTable(table, config, row) {
function addHeaderOfTable(table, config, row, data) {
  let columns = config.columns;
	const headTable = table.createTHead().insertRow(0);
	columns.forEach((item) => {
		row = headTable.appendChild(document.createElement('th'));
		row.setAttribute('id', columns.value);
    row.innerText = item.title;
    if (item.type == true) row.setAttribute('class', 'align-right');
    addSortingButton(item, row, table);
    addSortingButton(item, row, table, data);
	});
}

function addSortingButton(item, row, table) {
function addSortingButton(item, row, table, data) {
  for (let index in item) {
    if (index === 'sortable') {
      let buttonSortDown = document.createElement('button');
@@ -111,18 +146,18 @@ function addSortingButton(item, row, table) {
      addIconsToButton(buttonSortUp, buttonSortDown, buttonSort);
      row.appendChild(buttonSort);
      buttonSort.addEventListener('click', (e) =>{
        sorting(table, item, 1);
        sorting(table, item, 1, data);
        row.appendChild(buttonSortUp);
        buttonSort.remove();
      });
      buttonSortUp.addEventListener('click', (e) =>{
        sorting(table, item, -1);
        sorting(table, item, -1, data);
        buttonSortUp.remove();
        row.appendChild(buttonSortDown);
      });
      buttonSortDown.addEventListener('click', (e) =>{
        table.querySelector('tbody').remove();
        renderTable(table, users);
        renderTable(table, data);
        buttonSortDown.remove();
        row.appendChild(buttonSort);
      });
@@ -142,9 +177,9 @@ function addIconsToButton(buttonSortUp, buttonSortDown, buttonSort) {
  buttonSortDown.appendChild(iconDown);
}

function sorting(table, index, koef) {
function sorting(table, index, koef, data) {
  let tbody = table.querySelector('tbody');
  let sortData = [...users];
  let sortData = [...data];
  if(index.type === 'number') {
    sortData.sort((u1, u2) => (u1.age - u2.age) * koef);
  } else {
@@ -158,12 +193,12 @@ function renderTable(table, data) {
  let tbody = table.appendChild(document.createElement('tbody'));
  let _index = 1;
  let j;
  let row, cell;
  data.forEach((item, i) => {
    let row, cell;
    j = 1;
		row = tbody.insertRow(i);
		cell = row.insertCell(0);
		cell.innerHTML = _index++;
    row = tbody.insertRow(i);
    cell = row.insertCell(0);
    cell.innerHTML = _index++;
    setTableAttributes(row, item, j);
  });
}
@@ -172,8 +207,17 @@ function setTableAttributes(row, users, num) {
  for (let index in users) {
    if (index != 'id') {
      let cell = row.insertCell(num++);
      if (typeof users[index] === 'number') cell.setAttribute('class', 'align-right');
      cell.innerHTML = users[index];
      if (typeof users[index] === 'number')
        cell.setAttribute('class', 'align-right');
      if (index == 'createdAt') {
        cell.innerHTML = users[index].slice(0, 10);
      } else if (index == 'avatar') {
          let ava = document.createElement('img');
          ava.setAttribute('src', users.avatar);
          cell.appendChild(ava);
      } else {
          cell.innerHTML = users[index];
      }
    }
  }
}
