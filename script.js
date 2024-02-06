let inputBox = document.getElementById('inputBox')
let buttons = document.querySelectorAll('button')

let string = ''

buttons.forEach(element =>{
    element.addEventListener('click', (e) =>{
        if(e.target.innerText == '='){
            string = eval(string);
            inputBox.value = string;
        }
        else if(e.target.innerText == 'AC'){
          string = ''
          inputBox.value = string;
        }
          else if(e.target.innerText == 'DEL'){
            string = string.substring(0,string.length-1)
            inputBox.value = string;
          }
        else{
            string += e.target.innerText 
            inputBox.value = string
        }
    })
})
