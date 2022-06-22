        var img = document.getElementById('imagem')
        var data = new Date()
        var hora = data.getHours()
        
    

        if ( hora >= 0 && hora <= 5 ) {
            //promo da madrugada
            img.src = 'a.png'
            document.body.style.background = '#90EE90'
            
        } else if ( hora >= 6 && hora <= 12 ) {
            //promo da manha
            img.src = 'c.png'
            document.body.style.background = '#FFA07A'
        } else if ( hora >= 13 && hora <= 18 ) {
            //promo da tarde
            img.src = 'g.png'
            document.body.style.background = '#D8BFD8'
        } else if ( hora >= 19 && hora <= 23) {
            //promo noite
            img.src = 'o.png'
            document.body.style.background = 'rgb(255, 220, 107)'
        }



function calcular() {
    var b = document.getElementById('banana')
    var a = document.getElementById('apple')
    var c = document.getElementById('cherry')
    var g = document.getElementById('grape')
    var o = document.getElementById('orange')


   resb = b.value * 1
   resa = a.value * 5
   resc = c.value * 8
   resg = g.value * 7
   reso = o.value * 4


   rest = resb += resa += resc += resg += reso
   cartao = rest / 2

    if (rest == "" ) {
   res.innerHTML = `Não foi inserido nenhuma quantia. `

    } else {
   res.innerHTML = `Valor total foi: R$${rest},00`
   ress.innerHTML = `Em duas vezes no cartao ficou: R$${cartao},00`
}
    }


