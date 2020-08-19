const getHash = () => 
	location.hash //trae el fragmento de la url a partir de donde encuentre un #. En este caso traería #/1/
	.slice(1) //corta la url y muestra a partir del primer elemento. En este Caso el resultado es /1/
	.toLocaleLowerCase() //convierte a minúscula la cadena
	.split('/')[1] //separa la cadena en un array, y elimina el / quedando un espacio vacio Ej [’’, ‘1’ ,’’]
	|| '/'; //Si no encuentra ninguna ruta, solo nos mandará el /

	export default getHash;