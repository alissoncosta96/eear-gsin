function menor(listaValores){
	var menor = listaValores[0]
	for(var i=0; i<listaValores.length; i++){
		var valorAtual = listaValores[i];
		menor = valorAtual<menor?valorAtual:menor
	}
	return menor;
}

console.log("6.1) O menor valor é: " + menor([32,45,89,66,12,35,10,96,38,15,13,11,65,81,35,64,16,89,54,19]));
