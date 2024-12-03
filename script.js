
// let inputbox = document.getElementById('inputbox') 
// let buttons  = document.querySelectorAll('button')

// let string= ''

// buttons.forEach(element=>{
//     element.addEventListener('click',(b)=>{
//         if(b.target.innertext== '='){
//             string=string(eval(string))
//             inputbox.value=string;
//         }
//         else if(b.target.innertext == 'AC'){
//             string = ''
//             inputbox.value = string;
//         }
//         else if(b.target.innertext == 'DEL'){
//             string = string.substring(0,string.length-1)
//             inputbox.value = string;
//         }
//         else if(b.target.innertext == 'plushminus'){
//             string = string(-eval(string))
//             inputbox.value = string;
//         }
//         else{
//             string += b.target.innertext
//             inputbox.value=string
//         }
//     })
// })

let inputbox = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');

let string = '';

buttons.forEach(element => {
    element.addEventListener('click', (b) => {
        let buttonValue = b.target.innerText; // Correctly retrieve button's text content

        if (buttonValue === '=') {
            try {
                string = eval(string); // Evaluate the mathematical expression
                inputbox.value = string;
            } catch (error) {
                inputbox.value = 'Error'; // Display error for invalid expressions
                string = '';
            }
        } else if (buttonValue === 'AC') {
            string = '';
            inputbox.value = string;
        } else if (buttonValue === 'DEL') {
            string = string.slice(0, -1); // Remove the last character
            inputbox.value = string || '0'; // Default to '0' if string is empty
        } else if (buttonValue === '±') { // Handle ± button for negation
            string = string ? -parseFloat(string).toString() : string; // Negate the value
            inputbox.value = string;
        } else {
            if (inputbox.value === '0') string = ''; // Reset string on initial input
            string += buttonValue; // Append the clicked button's value
            inputbox.value = string;
        }
    });
});
