console.log("esta conectado el JS")


document.getElementById("calcular-IMC").addEventListener("click", calcularIMC);

function calcularIMC() {
    
     let peso = document.getElementById('peso').value; // 80;
     let altura = document.getElementById('altura').value; // 1.72

    let resultadoImc = 0;
    let caracteristica = "";
    let mensaje = "";


    resultadoImc = peso / (altura**2);

    if(resultadoImc < 18.5){
        caracteristica="¡BAJO PESO!, te recomendamos consultar a tu nutricionista, el bajo peso puede traer complicaciones al funcionamiento de tus órganos";
        imagen = "img/bajopeso.jpg"
    }else if (resultadoImc < 25) {
        caracteristica="NORMAL, te encuentras en tu peso ideal, ¡sigue así!";
        imagen = "img/normal.jpg"

    }else if (resultadoImc < 30) {
        caracteristica="SOBREPESO, cuidado con tu salud, te recomendamos una nueva dieta, para llegar a tu peso ideal";
        imagen = "img/sobrepeso.jpg"

    }else{
        caracteristica = "¡OBESIDAD!, es importante que vayas con un nutricionista, el exceso de peso puede traer complicaciones a tu salud";
        imagen = "img/obesidad.jpg"

    }

    console.log("su caracteristica es: "+caracteristica + " su resultado IMC:"+resultadoImc);

    document.getElementById("valorIMC").textContent = resultadoImc.toFixed(2);
    document.getElementById("categoriaIMC").textContent = caracteristica;
    document.getElementById("imagenIMC").src = imagen;
}

alert("hola, esta es una calculadora de IMC, puedes ingresar tu estatura y peso para conocer tu IMC")
