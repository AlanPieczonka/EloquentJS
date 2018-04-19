const MOUNTAINS = [
	{ name: 'Kilimanjaro', height: 5895, place: 'Tanzania' },
	{ name: 'Everest', height: 8848, place: 'Nepal' },
	{ name: 'Mount Fuji', height: 3776, place: 'Japan' },
	{ name: 'Vaalserberg', height: 323, place: 'Netherlands' },
	{ name: 'Denali', height: 6168, place: 'United States' },
	{ name: 'Popocatepetl', height: 5465, place: 'Mexico' },
	{ name: 'Mont Blanc', height: 4808, place: 'Italy/France' }
];
let mountains = document.getElementById('mountains'),
	table = document.createElement('table'),
	columnNames = Object.keys(MOUNTAINS[0]);

mountains.appendChild(table);

let navbar = document.createElement('tr');
columnNames.forEach((key) => {
	const th = document.createElement('th');
	th.textContent = key;
	navbar.appendChild(th);
});
table.appendChild(navbar);

MOUNTAINS.forEach((mountain) => {
	const tr = document.createElement('tr'),
		values = Object.values(mountain);
	values.forEach((value) => {
		const th = document.createElement('th');
		th.textContent = value;
		tr.appendChild(th);
	});
	table.appendChild(tr);
});
