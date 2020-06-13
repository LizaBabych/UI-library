const config1 = {
  parent: '#usersTable',
  columns: [
    {title: '№', value: '_index'},
    {title: 'Имя', value: 'name'},
    {title: 'Фамилия', value: 'surname', sortable: true},
    {title: 'Возраст', value: 'age', type: 'number', sortable: true},
  ],
  search: {
    fields: ['name', 'surname'],
    filters: [
      v => v.toLowerCase(),
      v => toKeyboardLayout(v, 'ru'),
      v => toKeyboardLayout(v, 'en')
    ]
  }
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

dataTable(config1, users);

function dataTable(config, users) {
  let table = document.createElement('table');
  let parent = document.querySelector(config.parent);
  let searchForm = document.createElement('div');
  let searchInput = document.createElement('input');
  let searchLabel = document.createElement('label');
  let row;
  if(config.search) {
    addSearchForm(parent, searchForm, searchInput, searchLabel);
    let searchUser;
    addInputListener(table, users, searchInput, config, searchUser);
    addHeaderOfTable(table, config, row);
  }
  parent.appendChild(table);
  renderTable(usersTable.querySelector('table'), users);
}

function addInputListener(table, users, input, config, searchUser) {
	input.addEventListener('input', () => {
    let tbody = table.querySelector('tbody');
    searchUser = findDefineElements(input.value.trim(), users, config.search.fields, config.search.filters);
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
               if (itemUsers[index].itemFilters === value.itemFilters) {
                 if (itemUsers[index].search(value) != -1 && searchUser.indexOf(itemUsers) == -1) {
                   searchUser.push(itemUsers);
                 }
               }
            });
          }
        });
      }
    });
  } else return users;
  return searchUser;
}

function addSearchForm(parent, searchForm, searchInput, searchLabel) {
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

function addHeaderOfTable(table, config, row) {
  let columns = config.columns;
	const headTable = table.createTHead().insertRow(0);
	columns.forEach((item) => {
		row = headTable.appendChild(document.createElement('th'));
		row.setAttribute('id', columns.value);
    row.innerText = item.title;
    if (item.type == true) row.setAttribute('class', 'align-right');
    addSortingButton(item, row, table);
	});
}

function addSortingButton(item, row, table) {
  for (let index in item) {
    if (index === 'sortable') {
      let buttonSortDown = document.createElement('button');
      let buttonSortUp = document.createElement('button');
      let buttonSort = document.createElement('button');
      addIconsToButton(buttonSortUp, buttonSortDown, buttonSort);
      row.appendChild(buttonSort);
      buttonSort.addEventListener('click', (e) =>{
        sorting(table, item, 1);
        row.appendChild(buttonSortUp);
        buttonSort.remove();
      });
      buttonSortUp.addEventListener('click', (e) =>{
        sorting(table, item, -1);
        buttonSortUp.remove();
        row.appendChild(buttonSortDown);
      });
      buttonSortDown.addEventListener('click', (e) =>{
        table.querySelector('tbody').remove();
        renderTable(table, users);
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

function sorting(table, index, koef) {
  let tbody = table.querySelector('tbody');
  let sortData = [...users];
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
  data.forEach((item, i) => {
    let row, cell;
    j = 1;
		row = tbody.insertRow(i);
		cell = row.insertCell(0);
		cell.innerHTML = _index++;
    setTableAttributes(row, item, j);
  });
}

function setTableAttributes(row, users, num) {
  for (let index in users) {
    if (index != 'id') {
      let cell = row.insertCell(num++);
      if (typeof users[index] === 'number') cell.setAttribute('class', 'align-right');
      cell.innerHTML = users[index];
    }
  }
}
