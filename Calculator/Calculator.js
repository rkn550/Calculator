function disp(val){
    if(document.getElementById('result').value == '0'){
        clscr()
    }
    document.getElementById('result').value += val
    return val
}

function solve(){
    let x = document.getElementById('result').value
    let y = eval(x);           
    document.getElementById('result').value = y            
    return y
}

function clscr(){
    document.getElementById('result').value = ' '
}