const toggle = document.querySelector('.toggle')
const navigation = document.querySelector('.navigation')

const fs = require('fs');

function addBoxToCsv(boxId, items) {
  fs.readFile('boxes.csv', 'utf-8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
  
    // split the data into rows
    const rows = data.split('\n');
  
    let nextBoxId = '00001';
    // find the highest current box id
    for (let i = 0; i < rows.length; i++) {
      const columns = rows[i].split(',');
      for (let j = 0; j < columns.length; j++) {
        if (columns[j].startsWith('id:')) {
          const currentBoxId = columns[j].substr(3);
          if (currentBoxId >= nextBoxId) {
            nextBoxId = (parseInt(currentBoxId) + 1).toString().padStart(5, '0');
          }
        }
      }
    }
  
    // use the passed in box id if it is given, otherwise use the next box id
    const newBoxId = boxId || nextBoxId;
    if(boxId==00000){
        newBoxId = nextBoxId
    }
    // add the new box to the rows
    rows.push(`id:${newBoxId},items:${items.join(';')}`);
  
    // write the updated data back to the file
    fs.writeFile('boxes.csv', rows.join('\n'), (err) => {
      if (err) {
        console.error(err);
        return;
      }
    });
  });
}


const xhr = new XMLHttpRequest();
xhr.open('GET', 'boxes.csv');
xhr.onreadystatechange = function() {
  if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
    const contents = xhr.responseText;
    // now you can process the contents of the file
  }
};
xhr.send();

const rows = contents.split('\n');
  
// loop over each row
const boxes = {};
for (let i = 0; i < rows.length; i++) {
  // split the row into columns
  const columns = rows[i].split(',');

  let id, items;
  // loop over each column to find the id and items
  for (let j = 0; j < columns.length; j++) {
    if (columns[j].startsWith('id:')) {
      id = columns[j].substr(3);
    } else if (columns[j].startsWith('items:')) {
      items = columns[j].substr(6).split(';');
    }
  }
  
  // add the id and items to the boxes dictionary
  boxes[id] = items;
}

boxesAmount = boxes.length;

// dictionary for items so you can search fo key (Box 1) and show all items for that key !!!!!!!!!!!!!!!!!!!!!!!!!
// (if 2 times the same it shoud do an amount counter behind the items name) !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// shoud safe all this shit in DB so it wont lose all data when recratet. !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//creates a new box for element in array (boxes)

for (const [key, value] of Object.entries(boxes)) {
    var newElement = document.createElement('div');
    newElement.id = "Box "+key;
    newElement.className = "box";
    newElement.innerHTML = "<h2>Box"+" "+(key)+"</h2>";
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
    id = 00000 //document.getElementById("id").value;
    items = [];
    addBoxToCsv(id, items);
})