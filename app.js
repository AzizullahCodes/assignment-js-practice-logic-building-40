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
//  function saveData(){let get = document.getElementById('userinput').value;
//     let getFromStorage = localStorage.getItem('stored');
//     if(getFromStorage === null){createObjet = []}
//     else{createObjet = JSON.parse(getFromStorage)}
// createObjet.push(get);
// let convertstring = JSON.stringify(createObjet);
// localStorage.setItem('stored',convertstring);
// document.getElementById('userinput').value = '';

// let result = '';
// for(let i = 0; i < createObjet.length; i++){result = result + createObjet[i]+'<br>';}
// document.getElementById('display').innerHTML = result;
// }

/*_______________________ Question no 15 ______________________
: Display Price with 2 Decimal Places
Question:
You have a price: let price = 99.45678;
Display it on the browser with 2 decimal places.

Expected Output:
Price: 99.46
_________________________ Answer ____________________________*/ 
// let price = 99.45678;
// let result = price.toFixed(2);
// console.log(result);


/*_______________________ Question no 16 ______________________
 Calculate the Circumference of a Circle
Question:
Ask the user to enter the radius. Use Math.PI to calculate and show the circumference.

Formula:
Circumference = 2 * π * r

Expected Output Example:
If user enters 7, output should be:
The circumference of the circle is: 43.982297150257104
________________________ Answer ____________________________*/
// let radius = 7;
// let circumference = 2 * Math.PI * radius;
//     circumference = circumference.toFixed(2);
// console.log(circumference);

/*_______________________ Question no 17 ______________________
convert string data to number and number to string
_________________________ Answer ____________________________*/
// let num = '12.786';
// console.log(num,typeof num);
// let result = parseFloat(num)
// console.log(result, typeof result);

// let num = 232;
// console.log(num, typeof num);
// let str = num + '';
// console.log(str, typeof str);


/*_______________________ Question no 18 ______________________
 Middle Character
Question:
From the string "Coding", print the middle character using .charAt()
_________________________ Answer ____________________________*/
// let str = 'coding';
// let ind = str.indexOf('d');
// console.log(ind);
// let result = str.charAt(2);
// console.log(result);
// let last = str.charAt(str.length-1);
// console.log(last)
// let n = str[4];
// console.log(n)
/*_______________________ Question no 19 ______________________

Given the string "HeLLo", write code to convert each letter to the opposite 
case using .toUpperCase() and .toLowerCase().

Expected Output:
hEllO
_________________________ Answer ____________________________*/
// let string = 'HeLo';
// let toggled = '';
// for(let i = 0; i < string.length ; i++){let char = string.charAt(i);
//     // check if character is in uppercase 
//     if(char === char.toUpperCase()){toggled = toggled + char.toLowerCase()}
//     else{toggled = toggled+ char.toUpperCase()}
// }
// console.log(toggled)

/*_______________________ Question no 19 ______________________
Toggle Case and Count Upper/Lower
Question:
Given the string "WeBDeV", toggle the case of each character and also count how many uppercase 
and lowercase letters are there in the original string.
Expected Output:
Original: WeBDeV  
Toggled: wEb dEv  
Uppercase Letters: 4  
Lowercase Letters: 2
_________________________ Answer ____________________________*/
// let string = 'WeBDeV';
// let result = '';
// for(let i = 0; i < string.length; i++){let get = string[i];
//     if(get === get.toUpperCase() ){result = result + get.toLowerCase()}
//     else{result = result + get.toUpperCase()}
// }

// console.log(result);
// let count = 0;
// for(let i = 0; i < string.length ; i++){let get = string.charAt(i);
//     if(get === get.toUpperCase() && get !== get.toLowerCase()){
//         count++;
//     }
//     else{console.log(count)}
// }
// let string = 'WeBDeV';
// let uppercount = 0;
// let lowercount = 0;
// let result = '';
// for(let i = 0; i < string.length; i++){let char = string.charAt(i);
//     if(char === char.toUpperCase() && char !== char.toLowerCase()){result = result + char.toLowerCase();
//         uppercount++;
//     }
//     else if(char === char.toLowerCase() && char !== char.toUpperCase()){result = result + char.toUpperCase();
//         lowercount++
//     }
//     else{result = result + char;
//     }
// }
// console.log(result)
// console.log(uppercount);
// console.log(lowercount)

/*_______________________ Question no 20 ______________________
convet lower to upper and upper to lower and find length of lower and upper 
_________________________ Answer ____________________________*/
// let string = 'AziZullaH';
// let result = '';
// let upperletter = 0;
// let lowerletter = 0;
// let nonalphabet = 0;
// for(let i = 0; i < string.length; i++){let character = string.charAt(i);
//     if(character === character.toLowerCase() && character !== character.toUpperCase()){result += character.toUpperCase();
//         upperletter++;
//     }
//     else if(character === character.toUpperCase() && character !== character.toLowerCase()){result += character.toLowerCase();
//         lowerletter++;
//     }
//     else{result = result +character;
//         nonalphabet++;
//     }
// }
// console.log(result);
// console.log(upperletter);
// console.log(lowerletter);
// console.log(nonalphabet)


/*_______________________ Question no 21 ______________________
determine the number of uppercase and lowercase letters in string
_________________________ Answer ____________________________*/

// let string = 'AZIZ';
// let uppercase = 0;
// let lowercase = 0;
// for(let i = 0; i <string.length; i++)
// {let char = string.charAt(i);
//    if(char === char.toUpperCase()){uppercase = uppercase + (char.toUpperCase().length);}
//    else if(char === char.toLowerCase()){lowercase = lowercase + (char.toLowerCase().length)}
//    else{console.log('no')}
// }
// console.log(uppercase);
// console.log(lowercase)
/*_______________________ Question no 22 ______________________
 Round Multiple Values in an Array
Question:
Given an array of decimal numbers, use Math.round() to round all values and return a new array with rounded numbers.

Input Example: [1.2, 2.5, 3.8, 4.1]
Expected Output: [1, 3, 4, 4]


_________________________ Answer ____________________________*/
// var array = [1.2,2.5,3.8,4.1];
// console.log(array);
// let result = Math.round(array);
// console.log(result);
// for(let i = 0; i < array.length; i++){console.log(Math.round(array[i]))}

/*_______________________ Question no 23 ______________________
Use a for loop to print numbers from 1 to 10 and their square roots.
Expected Output:
1 → 1  
2 → 1.414  
3 → 1.732  
...  
10 → 3.162
_________________________ Answer ____________________________*/
// for(let i = 1 ; i<=10;i++){let result = i + ': '+Math.sqrt(i);
//     console.log(result)
// }
// let num = 9;
// let ans = Math.sqrt(num);
// console.log(ans)


/*_______________________ Question no 24 ______________________
Number Sign Checker
Question:
Write a function that checks whether a number is negative. If yes, convert it to positive using Math.abs() and log the result.

Input Example: -20
Expected Output: It was negative. Converted to: 20
_________________________ Answer ____________________________*/
// abs();
// function abs(){let num = -20;
//     if(num < 0){let a = Math.abs(num);
//         console.log(a)
//     }
//     else{console.log('num is already positive')}
// }

/*_______________________ Question no 25 ______________________
math.ceil and math.floor 
_________________________ Answer ____________________________*/
// let num = 2.76;
// // let ans = Math.ceil(num);
// let ans = Math.floor(num)
// console.log(ans)

/*_______________________ Question no 26 ______________________
Maximum in an Array
Question:
Given an array of numbers, find the maximum number using Math.max() with the
 spread operator (...).

Input Example: [5, 8, 12, 3, 25, 7]
Expected Output: Max number is 25
_________________________ Answer ____________________________*/
// maxi()
// function maxi(){let array = [5,8,12,3,25,7];
//     let max = Math.max(...array);
//     console.log(max)
// }

/*_______________________ Question no 27 ______________________
Random Color Generator
Question:
Create a function that randomly picks one color from an array of colors
 using Math.random() and logs it.

Example Array: ["red", "blue", "green", "yellow", "purple"]
Expected Output:

Random color: green
_________________________ Answer ____________________________*/ 
// coloring();
// function coloring(){let array = [
//   "red", "blue", "green", "orange", "purple",
//   "pink", "yellow", "brown", "black", "white",
//   "gray", "teal", "navy", "maroon", "lime",
//   "olive", "aqua", "cyan", "magenta", "gold"];
//     let random  = Math.random()*array.length;
//         random = Math.floor(random);
//         let ans = array[random];
//     document.getElementById('display').innerHTML = ans;
//     let pt = document.getElementById('para');
   
//     pt.style.background = ans
// }


/*_______________________ Question no 28 ______________________
5: Random OTP Generator (4 Digits)
Question:
Generate a random 4-digit OTP (One Time Password) using Math.random().
Expected Output Example:
Your OTP is: 4827
_________________________ Answer ____________________________*/
// let num1 = (Math.floor(Math.random()*9))+1;
//     num1 = num1.toString();
// console.log(num1);
// let num2 = (Math.floor(Math.random()*9))+1;
// num2 = num2.toString();
// console.log(num2)
// let num3 = (Math.floor(Math.random()*9))+1;
// num3 = num3.toString();
// console.log(num3)
// let num4 = (Math.floor(Math.random()*9))+1;
// num4 = num4.toString();
// console.log(num4);
// let Password = num1+num2+num3+num4;
// console.log(Password)


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
