import { interval } from 'rxjs'
import { filter, map, scan, take } from 'rxjs/operators'

const jsBtn = document.getElementById('interval')
const rxjsBtn = document.getElementById('rxjs')
const display = document.querySelector('#problem .result')

const people = [
	{ name: 'Vitalii', age: 37 },
	{ name: 'Dilya', age: 36 },
	{ name: 'Jasmina', age: 11 },
	{ name: 'Lola', age: 8 },
	{ name: 'Alsu', age: 6 },
	{ name: 'Galina', age: 68 },
	{ name: 'Tanya', age: 70 },
]

jsBtn.addEventListener('click', () => {
	jsBtn.disabled = true
	let i = 0
	const canDrive = []
	const interval = setInterval(() => {
		if (people[i]) {
			if (people[i].age >= 18) {
				canDrive.push(people[i].name)
			}
			display.textContent = canDrive.join(' ')
			i++
		} else {
			clearInterval(interval)
			jsBtn.disabled = false
		}
	}, 1000)
})

rxjsBtn.addEventListener('click', () => {
	rxjsBtn.disabled = true
	interval(1000)
		.pipe(
			// order matters
			take(people.length), // how many elements to take, then stop interval
			filter(v => people[v].age >= 18), // v - value, index
			map(v => people[v].name), // cast data into a type name
			scan((acc, v) => acc.concat(v), []) // get the data in the array
		)
		.subscribe(
			res => {
				display.textContent = res.join(' ') // join - connect
			},
			null,
			() => (rxjsBtn.disabled = false) // unlock button
		)
})
