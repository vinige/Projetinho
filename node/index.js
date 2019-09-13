console.log('Aqui!');

var aqui = 10;

if(aqui >= 10){
    console.log('Número maior que 10');
}else {
    console.log('Número menor que 10');
}

for(var x = 0; x <= aqui; x++){
    console.log(x);
    if(x == aqui){
        console.log('Acabou!');
    }
}