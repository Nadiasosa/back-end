/*Crea un sitio que implemente dos textbox llamados "nombre" y "nota" para representar el ingreso de los dos datos
 en un map. Además, deberá agregar dos botones que implementen las funciones "agregar"  y "promedio".
  Dentro del script deberá crear la función "agregar" para registrar estudiantes y sus calificaciones. Luego, 
deberá implementa una función llamada "promedio" que calcule el promedio de todas las calificaciones ingresadas.*/

const estudiante=new Map();
const agregar=document.getElementById("agregar");
const promedio=document.getElementById("promedio");

agregar.addEventListener("click",()=>{
    const nombre_estudiante=document.getElementById("nombre").value;
    const nota_estudiante=document.getElementById("nota").value;
   estudiante.set(nombre_estudiante,parseInt(nota_estudiante));
   alert("se agrego un estudiante con su nota");
   document.getElementById("formu").reset();

   console.log(estudiante)
})
promedio.addEventListener("click",function(event){ 
let sum=0;
let prom=0;
values = [...estudiante.values()];
for(let num =0; num < values.length; num++){
    suma += values[num];

}
average = suma / estudiantes.size;
alert("el promedio es de ${prom}")
}

)