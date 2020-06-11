const config1 = {
  parent: '#usersTable',
  columns: [
    {title: '№', value: '_index'},
    {title: 'Имя', value: 'name'},
    {title: 'Фамилия', value: 'surname'},
    {title: 'Возраст', value: 'age', type: 'number'},
  ]
};

const users = [
  {id: 30050, name: 'Вася', surname: 'Петров', age: 12},
  {id: 30051, name: 'Вася', surname: 'Васечкин', age: 15},
];

dataTable(config1, users);

function dataTable(config, users) {
  let table = document.createElement('table');
  let parent = document.querySelector(config.parent);
  parent.appendChild(table);
  addHeaderOfTable(table, config);
  addBodyOfTable(parent, users);
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
	});
}

function addBodyOfTable(usersTable, users) {
	let table = usersTable.querySelector('table');
	const bodyTable = table.appendChild(document.createElement('tbody'));
	let _index = 1;
  let j;
	for (let i = 0; i < users.length; i++) {
    let row, cell;
    j = 1;
		row = bodyTable.insertRow(i);
		cell = row.insertCell(0);
		cell.innerHTML = _index++;
		setTableAttributes(row, users[i], j);
	}
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
