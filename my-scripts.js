var myList = (JSON.parse(localStorage.getItem("myData")) || [])

function createItem() {
	myList.push({itemText: prompt("Your prompt goes here")})
	localStorage.setItem("myData", JSON.stringify(myList))
	printItem(myList.length - 1)
}

function printItem(x){
	var newItem = document.createElement("p")
	newItem.innerHTML = myList[x].itemText
	newItem.className = myList[x].itemStyle
	newItem.onclick = function() {
		this.className = myList[x].itemStyle = (this.className == "undefined") ? "strike":"invisible"
		localStorage.setItem("myData", JSON.stringify(myList))
	}
	document.getElementById("myDiv").appendChild(newItem)
}

for (x = 0; x < myList.length; x++) {printItem(x)}