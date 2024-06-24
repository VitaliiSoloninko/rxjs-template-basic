// import { timer } from 'rxjs'
import { range } from 'rxjs'

// of - creation streams from any data
// of - work with numbers and string
// from - work with array

// const stream$ = of('Hello', 'World')
// stream$.subscribe(val => {
// 	console.log('Value: ', val)
// })

// from - same as of but works with arrays
// not work
// const arr$ = from([1, 2, 3, 4]).pipe(scan((acc, v) => acc.concat(v), []))
// arr$.subscribe(val => {
// 	console.log(val)
// })

// =================== Observable - наблюдаемый theory
// Methods
// next - post new value
// error - work with method error
// complete - end of stream

// super small basic stream
// const stream$ = new Observable(observer => {
// 	observer.next('First value')
// 	setTimeout(() => observer.next('After 1000 ms'), 1000)
// })
// stream$.subscribe(val => console.log('Val:', val))

// =================== Observable own new stream
// const stream$ = new Observable(observer => {
// 	observer.next('First value')
// 	setTimeout(() => observer.next('After 1000 ms'), 1000)

// 	setTimeout(() => observer.complete(), 2000)

// 	setTimeout(() => observer.error('Something went wrong'), 3000)

// 	setTimeout(() => observer.next('After 4000 ms'), 4000)
// })

// =================== Observable subscribe to stream
// ---------- 1 variant
// stream$.subscribe(
// 	val => console.log('Val:', val), // function val work with method next
// 	err => console.log(err), // function err work with method error
// 	() => console.log('Complete') // function complete - end of stream
// )

// ---------- 2 variant
// stream$.subscribe({
// 	next(val) {
// 		console.log(val)
// 	},
// 	error(err) {
// 		console.log(err)
// 	},
// 	complete() {
// 		console.log('Complete')
// 	},
// })

// =================== fromEvent - basic
// fromEvent(document.querySelector('canvas'), 'mousemove').subscribe(event =>
// 	console.log(event)
// )

// =================== fromEvent - draw app
// fromEvent(document.querySelector('canvas'), 'mousemove')
// 	.pipe(
// 		map(e => ({
// 			x: e.offsetX,
// 			y: e.offsetY,
// 			ctx: e.target.getContext('2d'),
// 		}))
// 	)
// 	.subscribe(pos => {
// 		pos.ctx.fillRect(pos.x, pos.y, 2, 2)
// 	})

// const clear$ = fromEvent(document.getElementById('clear'), 'click')

// clear$.subscribe(() => {
// 	const canvas = document.querySelector('canvas')
// 	canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
// })

// =================== Methods
// const sub = interval(500).subscribe(v => console.log(v))
// setTimeout(() => {
// 	sub.unsubscribe()
// }, 4000)

// timer(2500).subscribe(v => console.log(v))

// 42 start to 51 - 10 elements
// range(42, 10).subscribe(v => console.log(v))
