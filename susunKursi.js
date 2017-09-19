// bila ada 10 orang, ['a','b','c','d','e','f','g','h','i','j'].
// orang-orang tsb akan diatur tempat duduk nya berdasarkan urutannya secara vertikal,
// dan jumlah maksimal kursi per baris vertikal adalah 3.
// tampilkan siapa saja yg berada di baris 1, 2, dan 3 nya.

// hasil yg benar :
// Baris 0 :  [ 'a', 'd', 'g', 'j' ]
// Baris 1 :  [ 'b', 'e', 'h' ]
// Baris 2 :  [ 'c', 'f', 'i' ]

'use strict'

function generateSeats(row) {
	let seats = []
	for(let i=0; i<row; i++) {//rowa diganti dengan rowa
		seats.push([])//ditambahkan s pada seat
	}
	return seats
}

function managePerson(arr, rowSeats) {
	let seats = generateSeats(rowSeats)//tambahkan s pada generateSeat
	let row = 0
	// console.log(seats);

	for(let i=0; i<arr.length; i++) {//hilangkan -1 pada arr.length
		seats[row].push(arr[i])//ditambahkan s pada seat
		if(row < rowSeats-1) {//diganti dengan variable seats
			row++
		} else {
			row = 0//row==0 diganti dengan row=0
		}
	}
	printSeats(seats)
}

function printSeats(seats) {
	for(let i=0; i<seats.length; i++) {
		console.log(`Baris ${i} : `, seats[i])
	}
}

managePerson(['a','b','c','d','e','f','g','h','i','j'], 3)
