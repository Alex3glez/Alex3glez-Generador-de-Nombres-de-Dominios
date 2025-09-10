
  let pronoun = ['El', 'Nuestro', 'Tu', 'Mi'];
  let adj = ['volador', 'postizo', 'parlante', 'rebelde', 'inflable'];
  let noun = ['platano', 'unicornio', 'sombrero', 'pato'];

  let result= ""
  const generadorDeFrases= (pronombre, adjetivo, nombre)=> {
    for (let a of pronombre) {
        for (let b of nombre){
            for (let c of adjetivo){
              c= `${c.slice(0, -2)}.${c.slice(-2)}`
                result= `${a}${b}${c}`

                console.log(result)
            }
        }
    }
            
  }





  console.log(generadorDeFrases(pronoun, adj, noun));
  