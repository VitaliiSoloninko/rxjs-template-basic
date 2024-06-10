import { interval } from 'rxjs'
import { filter, map, scan, take } from 'rxjs/operators'

const btn = document.getElementById('interval')
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

btn.addEventListener('click', () => {
	btn.disabled = true
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
			btn.disabled = false
		}
	}, 1000)
})

rxjsBtn.addEventListener('click', () => {
	rxjsBtn.disabled = true
	interval(1000)
		.pipe(
			take(people.length),
			filter(v => people[v].age >= 18),
			map(v => people[v].name),
			scan((acc, v) => acc.concat(v), [])
		)
		.subscribe(
			res => {
				display.textContent = res.join(' ')
			},
			null,
			() => (rxjsBtn.disabled = false)
		)
})
