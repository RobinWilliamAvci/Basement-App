const toggle = document.querySelector('.toggle')
const navigation = document.querySelector('.navigation')

// arrays for amount of boxes

var boxes = [1,2,3,4,5,6]
    boxesAmount = boxes.length;

// dictionary for items so you can search fo key (Box 1) and show all items for that key !!!!!!!!!!!!!!!!!!!!!!!!!
// (if 2 times the same it shoud do an amount counter behind the items name) !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// shoud safe all this shit in DB so it wont lose all data when recratet. !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

var items = ["Klimaanlagen dingsda"]
    itemsAmount = items.length;
//creates a new box for element in array (boxes)

for (i = 0; i < boxesAmount; i++) {
    var newElement = document.createElement('div');
    newElement.id = "Box "+i;
    newElement.className = "box";
    newElement.innerHTML = "<h2>Box"+" "+(i+1)+"</h2>";
    var newIcon = document.createElement('div');
    newIcon.className = "icon";
    var newImg = document.createElement('img');
    newImg.src = "images/box-zu.png";
    newIcon.appendChild(newImg);
    newElement.appendChild(newIcon);
    var newList= document.createElement("ul");
    newList.id = "items";
    var newListElement = document.createElement("li");

    //maybe for more than 3 items add a "more..." Link and a own page for each "box"? and  only show the first first XXX (8) Letters !!!!!!!

    newElement.append(newList);
    newList.append(newListElement)
    document.getElementById("boxes").appendChild(newElement);
}

// need a Button to add more Boxes with only one click !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// need a text field to add Items to a Box (only on Box X own Page?) !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

toggle.addEventListener('click', () => {
    toggle.classList.toggle('active')
    navigation.classList.toggle('active')
})

add = document.getElementById("add-box");

add.addEventListener('click', ()=>{
    newBox = boxes.length +1;
    boxes.push(newBox);
})