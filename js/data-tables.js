const config1 = {
  parent: '#usersTable',
  columns: [
    {title: '№', value: '_index'},
    {title: 'Имя', value: 'name'},
    {title: 'Фамилия', value: 'surname', sortable: true},
    {title: 'Возраст', value: 'age', type: 'number', sortable: true},
  ]
};

const users = [
  {id: 30050, name: 'Вася', surname: 'Петров', age: 12},
  {id: 30051, name: 'Вася', surname: 'Васечкин', age: 15},
  {id: 30050, name: 'Вася', surname: 'Абрамов', age: 13},
  {id: 30051, name: 'Вася', surname: 'Бровкин', age: 18},
  {id: 30050, name: 'Вася', surname: 'Каролович', age: 11},
  {id: 30051, name: 'Вася', surname: 'Мишкин', age: 10},
  {id: 30050, name: 'Вася', surname: 'Цветочек', age: 19},
  {id: 30051, name: 'Вася', surname: 'Иванов', age: 25},
];

dataTable(config1, users);

function dataTable(config, users) {
  let table = document.createElement('table');
  let parent = document.querySelector(config.parent);
  parent.appendChild(table);
  addHeaderOfTable(table, config);
  renderTable(usersTable.querySelector('table'), users);
}

function addHeaderOfTable(table, config) {
  let columns = config.columns;
	const headTable = table.createTHead().insertRow(0);
	let row;
	columns.forEach((item) => {
		row = headTable.appendChild(document.createElement('th'));
		row.setAttribute('id', columns.value);
    row.innerHTML = item.title;
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
