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
	for(let i=0; i<row; i++) {
		seats.push([])
	}
	return seats
}

function managePerson(arr, rowSeats) {
	let seats = generateSeats(rowSeats) //nama tidak sama
	let row = 0;
	// console.log(seats); [] [] [] membuat array kosong 3 buah
	// console.log(row); 0
	for(let i=0; i<=arr.length-1; i++) {
	// console.log(row);
	// console.log(rowSeats-1);
		seats[row].push(arr[i])
		// console.log(rowSeats-1); == 2
		if(row < rowSeats-1) { // 2 diganti dengan rowSeats-1 yang isinya 2
			row++;
		} else {
			row = 0
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
