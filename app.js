const MeterMonedas = document.getElementById("MeterMonedas");
const select = document.getElementById("select");
const compra = document.getElementById("compra");
const mostrador = document.getElementById("mostrador");
const producto1 = document.getElementById("producto1");
const mostrarCambio = document.getElementById("mostrarCambio");

const moneda = [0, 0, 0, 0, 0, 0, 0, 0];

let sound = new Audio("cash.mp3");
sound.volume =0.05;

MeterMonedas.addEventListener("click", function () {
    if (select.value == 200) {
        moneda[0]++;
    } else if (select.value == 100) {
        moneda[1]++;
    } else if (select.value == 50) {
        moneda[2]++;
    } else if (select.value == 20) {
        moneda[3]++;
    }else if (select.value == 10) {
        moneda[4]++;
    } else if (select.value == 5) {
        moneda[5]++;
    }else if (select.value == 2) {
        moneda[6]++;
    } else if (select.value == 1) {
        moneda[7]++;
    }

    console.log(moneda);
    sum = 0;

    for(i = 0; i < moneda.length; i++) {
        if (i == 0) {
            sum += 200 * moneda[i];
        } else if (i == 1) {
            sum += 100 * moneda[i];
        } else if (i == 2) {
            sum += 50 * moneda[i];
        } else if (i == 3) {
            sum += 20 * moneda[i];
        } else if (i == 4) {
            sum += 10 * moneda[i];
        } else if (i == 5) {
            sum += 5 * moneda[i];
        } else if (i == 6) {
            sum += 2 * moneda[i];
        } else {
            sum += moneda[i];
        }
    }

    mostrador.textContent = sum / 100; 
});


producto1.addEventListener("click", function () {
    valorProductoSeleccionado = parseFloat(producto1.getAttribute("value"));
});

producto2.addEventListener("click", function () {
    valorProductoSeleccionado = parseFloat(producto2.getAttribute("value"));
});


compra.addEventListener("click", function () {

    if (sum >= valorProductoSeleccionado) {
        Swal.fire({
            title: "Compra realizada",
            icon: "success"
          });
        resto = sum - valorProductoSeleccionado;
        mostrador.textContent = resto / 100;
        
        let monedasDisponibles = [200,100,50,20,10,5,2,1];
        let cambio = [];
       
        for (let i = 0; i < monedasDisponibles.length; i++){
            const moneda = monedasDisponibles[i];
            
            while (resto >= moneda) {
                cambio.push(moneda);
                resto -= moneda;
            }
       }
       sound.play();
       console.log(cambio);
       mostrarCambio.textContent = "Cambio: "+cambio;
    } else if( sum< valorProductoSeleccionado){
        Swal.fire({
            title: "Compra denegada",
            text: "Insuficiente dinero",
            icon: "error"
        });
    } 
});
