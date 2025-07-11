// logic building practice assignment no 40 
/*_______________________ Question no 1 ______________________
: Change Background Color on Hover
Question:
Create a <div> with some text. When the user hovers over the div (onmouseover), change the background color to yellow. When the mouse leaves the div (onmouseout), change it back to white.

Expected Output:
A box changes color when hovered and resets when the mouse leaves.
_________________________ Answer ____________________________*/

// function before(){let get = document.getElementById('dv');
//     dv.style.background = 'red';
// }
// function after(){let get = document.getElementById('dv');
//     dv.style.background = 'black'
// }

/*_______________________ Question no 2 ______________________
Show and Hide Message on Hover
Question:
Create a button. When the user hovers over the button (onmouseover), show a message below the button (e.g., “Click me to continue”). When the mouse leaves the button (onmouseout), hide the message.

Expected Output:
The message only appears when hovering the button.
_________________________ Answer ____________________________*/ 

// function showing(){let get = document.getElementById('display');
//     get.innerHTML = 'click me to continue'
// }

// function hiding(){let get = document.getElementById('display');
//     get.innerHTML = '';
// }

/*_______________________ Question no 3 ______________________
 Image Hover Effect
Question:
Place an image on the page. When the user hovers over the image (onmouseover), increase the size (zoom in slightly). When the mouse moves away (onmouseout), return it to normal size.

Expected Output:
Image zooms in on hover and resets on mouse out.
_________________________ Answer ____________________________*/

//  function increasing(){let getImg = document.getElementById('img');
//     getImg.className = 'img';
//  }
// function decreasing(){let getImg = document.getElementById('img');
//     getImg.className = 'newimg';}
/*_______________________ Question no 4 ______________________
bulb on off function 
_________________________ Answer ____________________________*/
// let getOnBulbSrc = document.getElementById('onbulbsrc').src;
// console.log(getOnBulbSrc);
// file:///D:/assignment-js-practice-logic-building-40/assets/onbulbhref.jfif

// function onBulb(){let getoffBulabSrc = document.getElementById('offbulbsrc').src;
//     console.log(getoffBulabSrc);
//     if(getoffBulabSrc === 'file:///D:/assignment-js-practice-logic-building-40/assets/offbulbhref.jfif')
//     {getoffBulabSrc === 'file:///D:/assignment-js-practice-logic-building-40/assets/onbulbhref.jfif'}
// }

// let getheading = document.getElementById('heading');
// console.log(getheading)
// let getBtn = document.getElementById('btn');
// console.log(getBtn);
// let getBulb = document.getElementById('offbulbsrc');
// console.log(getBulb)
// let isON = false;
// function onoff(){if(isON){isON = false;
//     getBtn.innerHTML = 'Turn on';
//     getheading.innerHTML = 'Bulb off';
//     getBulb.src = './assets/onbulbhref.jfif'

// }
// else{isON = true;
//     getBtn.innerHTML = 'Turn off';
//     getheading.innerHTML = 'Bulb on';
//     getBulb.src = './assets/offbulbhref.jfif'

// }}



/*_______________________ Question no 5 ______________________
bulb on off funtion
_________________________ Answer ____________________________*/

// let getheading = document.getElementById('heading');
// let getBulbImg = document.getElementById('bulbimg');
// let bulBtn = document.getElementById('bulbbtn');
// let isON = false;
// function onoffing(){if(isON){isON = false;
//     getheading.innerHTML = 'Bulb on';
//     bulBtn.innerHTML = 'off';
//     getBulbImg.src = './assets/onbulbhref.jfif';
// }
// else{isON = true;
//     getheading.innerHTML = 'Bulb off';
//     bulBtn.innerHTML = 'on';
//     getBulbImg.src = './assets/offbulbhref.jfif';}}
/*_______________________ Question no 6 ______________________

Create a simple HTML page that contains at least 5 paragraph (<p>) elements with different text. Use JavaScript to target all <p> elements using getElementsByTagName and perform the following:

Change the text color of all paragraphs to blue.
Add a border around each paragraph.
Print the total number of paragraphs in the console.
Expected Output:
All <p> tags on the page should now:
Have blue text.
Have a visible border (like 1px solid black).
The console should show something like:
Total paragraphs: 5
_________________________ Answer ____________________________*/
// let get = document.getElementsByTagName('p');
// console.log(get.length)
// for(let i = 0; i <get.length;i++){get[i].style.color = 'red';
//     get[i].style.border = '2px solid black'
// }

/*_______________________ Question no 7 ______________________
 Update All Headings
Question:
Create an HTML page with 4 <h2> tags (headings) with different text.
Use JavaScript to:

Change the text of all <h2> tags to say: "Updated Heading".

Add padding and background color to each heading.

Display the count of <h2> elements in the console.

Expected Output:
 Count and Style All Images
Question:
Create an HTML page with 3 images using the <img> tag.
Use JavaScript to:
Set the border of each image to 2px solid red.
Set the width of all images to 150px.
Log the total number of images to the console.
Expected Output:
All 3 images are smaller and have a red border.
Console shows:
Total images: 3
Let me know when you're ready for tasks using getElementsByClassName or querySelectorAll.

_________________________ Answer ____________________________*/
// let getImg = document.getElementsByTagName('img');
// console.log(getImg);
// for(let i = 0; i < getImg.length; i++){
//     getImg[i].style.border = '2px solid red';
//     getImg[i].style.width = '550px';
//     document.getElementById('displa').innerHTML = getImg.length;
// }

/*_______________________ Question no 8 ______________________
children node
_________________________ Answer ____________________________*/
// let get = document.getElementById('parents');
// console.log(get);
// let child =get.children;
// console.log(child)

/*_______________________ Question no 9 ______________________
childNodes
_________________________ Answer ____________________________*/
// let get = document.getElementById('menu');
// console.log(get);
// let result = document.childNodes[1].childNodes[2].childNodes[37].childNodes[3].childNodes[0];
// console.log(result);

/*_______________________ Question no 10 ______________________
 Personal Info Saver
Goal: Store and retrieve user details.
Instructions:
Create an object with name, email, and age.
Store this object in localStorage.
On page load, check if data exists in localStorage. If it does,
show it on the page.
Expected Output:
User info is shown on the page without re-entering.

_________________________ Answer ____________________________*/
// let myobj = {name : 'Aziz',
//     email : 'azizcodes@gmail.com',
//     age : 30
// }
// console.log(myobj,typeof myobj);
// let convert = JSON.stringify(myobj);
// console.log(convert, typeof convert);
// localStorage.setItem('details',convert);
// let origional = JSON.parse(convert);
// console.log(origional);
// let get = origional;
// console.log(get);

// for(key in get){document.getElementById('display').innerHTML += key + ': ' + get[key] + '<br>';
//  }

/*_______________________ Question no 11 ______________________
save data in local storage by function
_________________________ Answer ____________________________*/
// function saveData(){let name = document.getElementById('name').value;
//     let age = document.getElementById('age').value;
//     let education = document.getElementById('education').value;
//     let designation = document.getElementById('designation').value;
//     // create obj 
//     let userInfo = {name : name,
//         age : age,
//         education: education,
//         designation : designation,

//     }

//     let string = JSON.stringify(userInfo);
//     localStorage.setItem('mianwali',string);
//     document.getElementById('messgae').innerHTML = 'data saved successfully'
// }

/*_______________________ Question no 12 ______________________
save data in local storage by function and show data on dom
_________________________ Answer ____________________________*/

// function saveData(){let name = document.getElementById('name').value;
//     let age = document.getElementById('age').value;
//     let education = document.getElementById('education').value;
//     let designation = document.getElementById('designation').value;
//     // now save in object 
//     let obj = {name : name,
//         age : age,
//         education : education,
//         designation : designation
//     }
//     // to save in local storage first we convert object data in to string 
//     let convert = JSON.stringify(obj);
//     localStorage.setItem('info',convert);
//     console.log(convert);
//     let get = localStorage.getItem('info');
//     console.log(get);
//     let origional = JSON.parse(get);
//     console.log(origional)
//     for(let key in origional){document.getElementById('display').innerHTML += key + ': ' + origional[key] + '<br>'}
    

// }

/*_______________________ Question no 13 ______________________

_________________________ Answer ____________________________*/
// function saveData(){let get = document.getElementById('userinput').value;
//     let getFromStorage = localStorage.getItem('task');
//     if(getFromStorage === null){createObject = []}
//     else{createObject = JSON.parse(getFromStorage)}
//     createObject.push(get);
//     let str = JSON.stringify(createObject);
//     localStorage.setItem('task',str);
//     document.getElementById('userinput').value = '';
//     // show data 
//     let result = '';
//     for(let i = 0; i< createObject.length; i ++){result += createObject[i]+'<br>'}
//     document.getElementById('display').innerHTML = result;

// }


/*_______________________ Question no 14 ______________________
Save and Show Names
Question:
Create a form where the user can enter a name. When the user clicks "Save", the name should
 be stored in localStorage (as part of an array) and displayed on the screen.

Expected Output:
Each time a name is entered and saved, the updated list of all saved names should be shown below:

Ali
Ahmed
Sara
_________________________ Answer ____________________________*/
 function saveData(){let get = document.getElementById('userinput').value;
    let getFromStorage = localStorage.getItem('stored');
    if(getFromStorage === null){createObjet = []}
    else{}

}

/*_______________________ Question no 1 ______________________

_________________________ Answer ____________________________*/ 



/*_______________________ Question no 1 ______________________

_________________________ Answer ____________________________*/



/*_______________________ Question no 1 ______________________

_________________________ Answer ____________________________*/





/*_______________________ Question no 1 ______________________

_________________________ Answer ____________________________*/





/*_______________________ Question no 1 ______________________

_________________________ Answer ____________________________*/





/*_______________________ Question no 1 ______________________

_________________________ Answer ____________________________*/




/*_______________________ Question no 1 ______________________

_________________________ Answer ____________________________*/




/*_______________________ Question no 1 ______________________

_________________________ Answer ____________________________*/




/*_______________________ Question no 1 ______________________

_________________________ Answer ____________________________*/




/*_______________________ Question no 1 ______________________

_________________________ Answer ____________________________*/




/*_______________________ Question no 1 ______________________

_________________________ Answer ____________________________*/




/*_______________________ Question no 1 ______________________

_________________________ Answer ____________________________*/





/*_______________________ Question no 1 ______________________

_________________________ Answer ____________________________*/


/*_______________________ Question no 1 ______________________

_________________________ Answer ____________________________*/ 



/*_______________________ Question no 1 ______________________

_________________________ Answer ____________________________*/



/*_______________________ Question no 1 ______________________

_________________________ Answer ____________________________*/





/*_______________________ Question no 1 ______________________

_________________________ Answer ____________________________*/





/*_______________________ Question no 1 ______________________

_________________________ Answer ____________________________*/





/*_______________________ Question no 1 ______________________

_________________________ Answer ____________________________*/




/*_______________________ Question no 1 ______________________

_________________________ Answer ____________________________*/




/*_______________________ Question no 1 ______________________

_________________________ Answer ____________________________*/




/*_______________________ Question no 1 ______________________

_________________________ Answer ____________________________*/




/*_______________________ Question no 1 ______________________

_________________________ Answer ____________________________*/




/*_______________________ Question no 1 ______________________

_________________________ Answer ____________________________*/




/*_______________________ Question no 1 ______________________

_________________________ Answer ____________________________*/




/*_______________________ Question no 1 ______________________

_________________________ Answer ____________________________*/


/*_______________________ Question no 1 ______________________

_________________________ Answer ____________________________*/ 



/*_______________________ Question no 1 ______________________

_________________________ Answer ____________________________*/



/*_______________________ Question no 1 ______________________

_________________________ Answer ____________________________*/





/*_______________________ Question no 1 ______________________

_________________________ Answer ____________________________*/





/*_______________________ Question no 1 ______________________

_________________________ Answer ____________________________*/





/*_______________________ Question no 1 ______________________

_________________________ Answer ____________________________*/




/*_______________________ Question no 1 ______________________

_________________________ Answer ____________________________*/




/*_______________________ Question no 1 ______________________

_________________________ Answer ____________________________*/




/*_______________________ Question no 1 ______________________

_________________________ Answer ____________________________*/




/*_______________________ Question no 1 ______________________

_________________________ Answer ____________________________*/




/*_______________________ Question no 1 ______________________

_________________________ Answer ____________________________*/




/*_______________________ Question no 1 ______________________

_________________________ Answer ____________________________*/




/*_______________________ Question no 1 ______________________

_________________________ Answer ____________________________*/


/*_______________________ Question no 1 ______________________

_________________________ Answer ____________________________*/ 



/*_______________________ Question no 1 ______________________

_________________________ Answer ____________________________*/



/*_______________________ Question no 1 ______________________

_________________________ Answer ____________________________*/





/*_______________________ Question no 1 ______________________

_________________________ Answer ____________________________*/





/*_______________________ Question no 1 ______________________

_________________________ Answer ____________________________*/





/*_______________________ Question no 1 ______________________

_________________________ Answer ____________________________*/




/*_______________________ Question no 1 ______________________

_________________________ Answer ____________________________*/




/*_______________________ Question no 1 ______________________

_________________________ Answer ____________________________*/




/*_______________________ Question no 1 ______________________

_________________________ Answer ____________________________*/




/*_______________________ Question no 1 ______________________

_________________________ Answer ____________________________*/




/*_______________________ Question no 1 ______________________

_________________________ Answer ____________________________*/




/*_______________________ Question no 1 ______________________

_________________________ Answer ____________________________*/
