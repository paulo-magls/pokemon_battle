var rod = document.getElementById("rod")
var vida1 = document.getElementById("vida1")
var vida2 = document.getElementById("vida2")
var nome1 = document.getElementById("nome1")
var nome2 = document.getElementById("nome2")
var acao = document.getElementById("acao")
var btn1 = document.getElementById("atq1")
var btn2 = document.getElementById("atq2")

function atq1(){
	if(rod.innerText == "Vez do Adversário"){
		window.alert("Você já atacou! Clique em 'Seguir ->'.")
	} else if(vida1.innerText==0){
		window.alert(`${nome1.innerText} foi derrotado!`)
	} else if(vida2.innerText==0){
		window.alert(`${nome2.innerText} foi derrotado!`)
	} else{
		var vd2 = Number(vida2.innerText)
		vd2 = vd2-40

		if (vd2<=0){
			vd2 = 0
			window.alert(`${nome2.innerText} foi derrotado.`)
			rod.innerText = `${nome1.innerText} Wins!`
		} else{
			rod.innerText = "Vez do Adversário"
		}

		acao.innerText = `${nome1.innerText} usou ${btn1.value}.`
		vida2.innerText = vd2
	}

	if(vida1.innerText > 90){
		vida1.style.color = 'green'
	} else if(vida1.innerText > 45){
		vida1.style.color = 'orange'
	} else{
		vida1.style.color = 'red'
	}

	if(vida2.innerText > 110){
		vida2.style.color = 'green'
	} else if(vida2.innerText > 55){
		vida2.style.color = 'orange'
	} else{
		vida2.style.color = 'red'
	}
}

function atq2(){
	if(rod.innerText == "Vez do Adversário"){
		window.alert("Você já atacou! Clique em 'Seguir ->'.")
	} else if(vida1.innerText==0){
		window.alert(`${nome1.innerText} foi derrotado!`)
	} else if(vida2.innerText==0){
		window.alert(`${nome2.innerText} foi derrotado!`)
	} else{
		var vd2 = Number(vida2.innerText)
		vd2 = vd2-90

		if(vd2<=0){
			vd2 = 0
			window.alert(`${nome2.innerText} foi derrotado.`)
			rod.innerText = `${nome1.innerText} Wins!`
		} else{
			rod.innerText = "Vez do Adversário"
		}

		acao.innerText = `${nome1.innerText} usou ${btn2.value}.`
		vida2.innerText = vd2
	}

	if(vida1.innerText > 90){
		vida1.style.color = 'green'
	} else if(vida1.innerText > 45){
		vida1.style.color = 'orange'
	} else{
		vida1.style.color = 'red'
	}

	if(vida2.innerText > 110){
		vida2.style.color = 'green'
	} else if(vida2.innerText > 55){
		vida2.style.color = 'orange'
	} else{
		vida2.style.color = 'red'
	}
}

function seguir(){ 
	var atk1 = "Investida" 
	var atk2 = "Derrubar" 

	var atk = Math.random()

	if (vida2.innerText == 0){ 
		window.alert(`${nome2.innerText} já foi derrotado!`)  
	} 

	else if(rod.innerText == "Sua Vez de Atacar"){ 
		window.alert("Você ainda não atacou!")  
	} 

	else if(atk<0.6){ 
		var vd1 = Number(vida1.innerText) 
		vd1 = vd1-40 

		if(vd1<=0){ 
			vd1 = 0 
		} 

		vida1.innerText = vd1 
		acao.innerText = `${nome2.innerText} usou ${atk1}.` 
		rod.innerText = "Sua Vez de Atacar" 

		if(vida1.innerText == 0){ 
			window.alert(`${nome1.innerText} foi derrotado!`) 
			rod.innerText = `${nome2.innerText} Wins!`  
		}  
	} 

	else { 
		var vd1 = Number(vida1.innerText) 
		vd1 = vd1-90 

		if(vd1<=0){ 
			vd1 = 0 
		} 

		vida1.innerText = vd1 
		acao.innerText = `${nome2.innerText} usou ${atk2}.` 
		rod.innerText = "Sua Vez de Atacar" 

		if(vida1.innerText == 0){ 
		window.alert(`${nome1.innerText} foi derrotado!`) 
		rod.innerText = `${nome2.innerText} Wins!`  
		} 
	}

	if(vida1.innerText > 90){
		vida1.style.color = 'green'
	} else if(vida1.innerText > 45){
		vida1.style.color = 'orange'
	} else{
		vida1.style.color = 'red'
	}

	if(vida2.innerText > 110){
		vida2.style.color = 'green'
	} else if(vida2.innerText > 55){
		vida2.style.color = 'orange'
	} else{
		vida2.style.color = 'red'
	}
}

function reiniciar(){
  rod.innerText = "Sua Vez de Atacar"
  vida1.innerText = "180"
  vida1.style.color = "green"
  vida2.innerText = "220"
  vida2.style.color = "green"
  acao.innerText = "Aqui aparecerá a ação."
}