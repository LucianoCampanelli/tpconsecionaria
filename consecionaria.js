var autos = require("./autos");

var concesionaria = {
    autos : autos
}

const autos = require("./autos");
const concesionaria = {
    autos: autos,
    buscarAuto: function (patente) {
        let auto = concesionaria.autos.find(auto => auto.patente == patente);
        if (auto == undefined) {
            return null
        } else {
            return auto
        }
    },
    venderAuto: function (patente) {
        let autos = this.buscarAuto(patente);
        return autos.vendido = true
    },
     autosParaLaVenta: function () {
        return autos.filter(function (auto) {
            return auto.vendido == false;
        });
    },
    autosNuevos: function (autos) {
        let autosVenta = this.autosParaLaVenta();
        let ceroKm = autosVenta.filter(function (auto) {
            return auto.km < 100
        })
        return ceroKm
 },
    listaDeVentas: function () {
  lista1 = []
      for (let i = 0 ; i < this.autos.length ; i++){
      if (this.autos[i].vendido === true){  
      lista1.push (  autos[i].precio)
  }
    }return lista1
    },
    totalDeVentas:  function(){ 
    return  this.listaDeVentas().reduce ( function (totalDeVenta,ventas){
       return totalDeVenta + ventas
      },0)
     },
     puedeComprar: function(auto,persona){ 
  let costoTotal = auto.precio;
  let autoCoutas =auto.cuotas;
  let compradorCoutas = persona.capacidadDePagoEnCuotas;
  let compradorPagoTotal = persona.capacidadDePagoTotal;
  if ( costoTotal <= compradorPagoTotal && 
     (costoTotal/autoCoutas) <= compradorCoutas) {
     return true
     console.log(true)
     }else{
      return false
      console.log(false)
      }
},
autosQuePuedeComprar: function(persona){
  let puede =[]
  this.autosParaLaVenta().forEach(function(auto){
   let pComprar =concesionaria.puedeComprar(auto,persona)
   if (pComprar){
   puede.push(auto)
      }
       })
     return puede
        }}
