// var data = confirm("Ты сейчас дома?")
// if(data) {
//     confirm("Cool")
// } else {
//     confirm("Bad")
// }

// var person = null
// if (confirm("Вы уверены?")) {
//     person = prompt("Укажите ваше Имя");
//     alert("Привет " + person);
// } else {
//     alert("Вы нажали <отмена>")
// }

// function info() {
//     console.log(3 + 3 + (3 * 3) * 14 / 2)
// }

// function info(word) {
//     console.log("#" + word)
// }

// function summa(a, b) {
//     var res = a * b;
//     info(res);
// }

// summa(13, 45)


// for (i = 100; i >= -10; i--) {
//     console.log(i)
// }

// function greet(name) {
//     const numbers = [1, 2, 3, 4 ,5];
//     numbers.push("hollo gondon")
//     numbers.push(true)
//     const nami = ["hi", "privet", "fuck", "you"];
//     nami.push(123)
//     console.log(name);
//     console.log(nami[3, 4]);
//     console.log(numbers[5, 6]);
// }

// function blue() {
//     for(i = 0; i < 10; i++) {
//         console.log(i)
//     }
// }


// greet("david");
// blue()

        // console.log( isFuzzyMatch( "horse", "s" ) );
		// console.log( isFuzzyMatch( "horse", "hs" ) );
		// console.log( isFuzzyMatch( "horse", "horse" ) );
		// console.log( isFuzzyMatch( "horse", "horses" ) );
		// console.log( isFuzzyMatch( "horse", "test" ) );
		// console.log( isFuzzyMatch( "horse", "" ) );
		// function isFuzzyMatch( targetValue, searchValue ) {
		// 	var searchChars = [ ...searchValue ];
		// 	var targetChars = [ ...targetValue ];
		// 	var matchFound = false;
		// 	var s, t;
		// 	searchLoop:
		// 	while ( s = searchChars.shift() ) {
		// 		targetLoop:
		// 		while ( t = targetChars.shift() ) {
		// 			if ( s == t ) {
		// 				if ( ! searchChars.length ) {
		// 					matchFound = true;
		// 					break searchLoop;
		// 				}
		// 				continue searchLoop;
		// 			}
		// 		}
		// 		break;
		// 	}
		// 	return( matchFound );
		// }



const one = [91, 11, 43, 66, 85, 22];
const two = [22, 33, 44, 1, 3, 2, 66];


function compareArrays(one, two) {
    for (let i = 0; i < one.length; i++) {
        if (one[i] === two[i]) {
            console.log("Common element:", one[i]);
        }
    }
    return true;
}

compareArrays(one, two);
