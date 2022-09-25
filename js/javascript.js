		function comprobarEdad(){
			//PIDE POR TECLADO LA EDAD
			var edad = prompt("Introduce tu edad");
			/*Cuando el usuario hace clic en el botón OK, el valor introducido en el campo de texto es devuelto por este método prompt,
			y lo devuelve en forma de cadena de texto. 
			Si el usuario hace clic en el botón OK sin introducir algún texto, se devuelve una cadena vacía. Si el usuario presiona el 
			botón CANCELAR, la función devuelve null. */
			
			//edad=parseInt(edad,10); //Transforma a numero entero lo introducido por el usuario. En base 10.
			//edad!=="" && 
			if(edad===null){
				alert("Has pulsado el botón CANCELAR y devuelto el valor null");
			}
			else{
				if(edad===""){
					alert("Has pulsado el botón ACEPTAR sin introducir ningún valor");
				}
				else{ //Se ha introducido algún valor.
					edad=Number(edad); //Transformo a numérico lo que se ha introducido.
					if(Number.isInteger(edad)){ //COMPRUEBA QUE LO INTRODUCIDO ES UN NÚMERO ENTERO.
				
						if (edad >= 18) {//IMPRIME EN PANTALLA EL MENSAJE
							
							document.write("Tienes 18 años o más. Puedes conducir");
						}
						else{
							document.write("Tienes menos de 18 años. No tienes la edad para conducir");
						}
					}
					else {//Si no es un número entero correcto lo dice.
						
						alert("Introduce un numero entero válido");
					}
				
				}
			}
			
		}