var container = document.getElementById("game-container"); 
var title = document.getElementById("title");
var description = document.getElementById("description");
var inventoryItem = document.getElementById("inventoryItem");

var buttons = document.getElementById("game-buttons");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");

var stagesInfo = {
	"stage1" : listStage1 = {
		"title" : "De Eerste Kamer",
		"firstRun" : true,
		"description" : "Je bent verdwaald geraakt in een dungeon en probeert nu te ontsnappen. <br> Wat doe je? <br> <br> Keuze 1: Ga linker deur in. <br> Keuze 2: Ga rechter deur in.",
		"descriptionAfterFirstRun" : "Je bent terug in de vorige kamer. Wat doe je? <br> <br> Keuze 1: Ga linker deur in. <br> Keuze 2: Ga rechter deur in.",
		"stageImage" : "url(images/stage1Image.jpg)"
	},
	"stage2" : listStage2 = {
		"title" : "Schat Kamer",
		"description" : "Je opent de linker deur en komt terecht in een kamer met een kist. <br> Wat doe je? <br> <br> Keuze 1: Open de kist. <br> Keuze 2: Zoek de kamer rond voor spullen. <br> Keuze 3: Ga terug naar de eerste kamer.",
		"descriptionSearch" : "Er is niks in de kamer behalve de kist en een fakkel voor de verlichting. <br> Wat doe je? <br> <br> Keuze 1: Open de kist. <br> Keuze 2: Neem de fakkel mee. <br> Keuze 3: Ga terug naar de eerste kamer.",
		"descriptionAfterTorch" : "Er is niks meer in de kamer behalve de kist. <br> Wat doe je? <br> <br> Keuze 1: Open de kist. <br> Keuze 2: Ga terug naar de eerste kamer.",
		"stageImage" : "url(images/stage2Image.jpg)",
		"stageImageTorch" : "url(images/stage2Image2.jpg)",
		"torchImage" : "images/torch.png",
		"torch" : true
	}

}

function stage1() {
	title.innerHTML = listStage1["title"];
	if (listStage1["firstRun"] == true) {
		description.innerHTML = listStage1["description"];
	}
	else {
		description.innerHTML = listStage1["descriptionAfterFirstRun"];
	}
	button3.style.display = "none";
	inventoryItem.style.display = "none";
	container.style.backgroundImage = listStage1["stageImage"];
	button1.onclick = function(){
		stage2();
		listStage1["firstRun"] = false;
	}
}

function stage2() {
	title.innerHTML = listStage2["title"];
	description.innerHTML = listStage2["description"];
	inventoryItem.style.display = "none";
	button3.style.display = "inline-block";
	container.style.backgroundImage = listStage2["stageImage"];	
	
	button1.onclick = function(){
		gameOver();
	}
	
	button2.onclick = function(){
		description.innerHTML = listStage2["descriptionSearch"]

		button1.onclick = function(){
			gameOver();
		}
	
		button2.onclick = function(){
			container.style.backgroundImage = listStage2["stageImageTorch"];
			button3.style.display = "none";
			
			button2.onclick = function(){
				stage1();
			}
			
			description.innerHTML = listStage2["descriptionAfterTorch"];
			inventoryItem.style.display = "block"
			inventoryItem.src = listStage2["torchImage"]; 
		}
	
		button3.onclick = function(){
			stage1();
		}
	}
	
	button3.onclick = function(){
		stage1();
	}
}
function gameOver() {
	alert("Game Over");
}
stage1();
