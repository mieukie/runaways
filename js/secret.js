var date = ''
var width = ''
var height = ''
var artist = ''
var charNum = ''
var char = [] //general character tag, takes in all the ones in the checklist
var char1 = '' //char# are for side characters/those who don't frequently appear
var char2 = ''
var char3 = ''
var char4 = '' //more than 4 side characters requires manual editing
var au = ''
var medium = ''
var color = ''
var size = ''
var keywords = ''
var type = ''
var result = []

{ //this code is just in braces so i can collapse it
    document.querySelector('.dateInput').addEventListener("keyup", (e) => {
        date = e.target.value
        console.log(char)
    });

    document.querySelector('.widthInput').addEventListener("keyup", (e) => {
        width = e.target.value
    });

    document.querySelector('.heightInput').addEventListener("keyup", (e) => {
        height = e.target.value
    });

        document.querySelector('.aly').addEventListener("change", (e) => { //change is for radio buttons
            artist = e.target.value
        });
        document.querySelector('.marlia').addEventListener("change", (e) => { //change is for radio buttons
            artist = e.target.value
        });
        document.querySelector('.miyuki').addEventListener("change", (e) => { //change is for radio buttons
            artist = e.target.value
        });
        document.querySelector('.artistInput').addEventListener("keyup", (e) => {
            artist = e.target.value
        });

    document.querySelector('.charNumInput').addEventListener("keyup", (e) => {
        charNum = e.target.value
    });

        document.querySelector(".alice").addEventListener("change", () => { //change is for radio buttons
            if (document.getElementById('alice').checked == true) {
                if(char.includes('Alice Daylily') == false) { //if it doesnt already include it
                    char.push('Alice Daylily') //add it
                }
            }
            else { //remove it if it's not checked
                result = char.filter(e => !e.includes("Alice Daylily"));
                char = [];
                char = [
                    ...result
                ];
            }
        });
        document.querySelector(".mars").addEventListener("change", () => { //change is for radio buttons
            if (document.getElementById('mars').checked == true) {
                if(char.includes('Mars') == false) { //if it doesnt already include it
                    char.push('Mars') //add it
                }
            }
            else { //remove it if it's not checked
                result = char.filter(e => !e.includes("Mars"));
                char = [];
                char = [
                    ...result
                ];
            }
        });
        document.querySelector(".alura").addEventListener("change", () => { //change is for radio buttons
            console.log('something happened...')
            console.log(char)
            if (document.getElementById('alura').checked == true) {
                console.log('alura is checked!')
                if(char.includes('Alura Draconica') == false) { //if it doesnt already include it
                    console.log(char)
                    char.push('Alura Draconica') //add it
                    console.log(char)
                }
            }
            else { //remove it if it's not checked
                console.log('aluras not checked!')
                result = char.filter(e => !e.includes("Alura Draconica"));
                char = [];
                char = [
                    ...result
                ];
                console.log(char)
            }
        });
        document.querySelector(".paige").addEventListener("change", () => { //change is for radio buttons
            if (document.getElementById('paige').checked == true) {
                if(char.includes('Paige Noname') == false) { //if it doesnt already include it
                    char.push('Paige Noname') //add it
                }
            }
            else { //remove it if it's not checked
                result = char.filter(e => !e.includes("Paige Noname"));
                char = [];
                char = [
                    ...result
                ];
            }
        });
        document.querySelector(".sel").addEventListener("change", () => { //change is for radio buttons
            if (document.getElementById('sel').checked == true) {
                if(char.includes('Selthy Willowmire') == false) { //if it doesnt already include it
                    char.push('Selthy Willowmire') //add it
                }
            }
            else { //remove it if it's not checked
                result = char.filter(e => !e.includes("Selthy Willowmire"));
                char = [];
                char = [
                    ...result
                ];
            }
        });
        document.querySelector(".sal").addEventListener("change", () => { //change is for radio buttons
            if (document.getElementById('sal').checked == true) {
                if(char.includes('Salvier Willowmire') == false) { //if it doesnt already include it
                    char.push('Salvier Willowmire') //add it
                }
            }
            else { //remove it if it's not checked
                result = char.filter(e => !e.includes("Salvier Willowmire"));
                char = [];
                char = [
                    ...result
                ];
            }
        });
        document.querySelector(".lance").addEventListener("change", () => { //change is for radio buttons
            if (document.getElementById('lance').checked == true) {
                if(char.includes('Lance Amblecrown') == false) { //if it doesnt already include it
                    char.push('Lance Amblecrown') //add it
                }
            }
            else { //remove it if it's not checked
                result = char.filter(e => !e.includes("Lance Amblecrown"));
                char = [];
                char = [
                    ...result
                ];
            }
        });

        document.querySelector('.char1Input').addEventListener("change", (e) => { //change is for radio buttons
            char1 = e.target.value
        });
        document.querySelector('.char2Input').addEventListener("change", (e) => { //change is for radio buttons
            char2 = e.target.value
        });
        document.querySelector('.char3Input').addEventListener("change", (e) => { //change is for radio buttons
            char3 = e.target.value
        });
        document.querySelector('.char4Input').addEventListener("change", (e) => { //change is for radio buttons
            char4 = e.target.value
        });

    document.querySelector('.auInput').addEventListener("keyup", (e) => {
        au = e.target.value
    });

        document.querySelector('.digital').addEventListener("change", (e) => { //change is for radio buttons
            medium = e.target.value
        });
        document.querySelector('.traditional').addEventListener("change", (e) => { //change is for radio buttons
            medium = e.target.value
        });


        document.querySelector('.noC').addEventListener("change", (e) => { //change is for radio buttons
            color = e.target.value
        });
        document.querySelector('.someC').addEventListener("change", (e) => { //change is for radio buttons
            color = e.target.value
        });
        document.querySelector('.fullC').addEventListener("change", (e) => { //change is for radio buttons
            color = e.target.value
        });

        document.querySelector('.head').addEventListener("change", (e) => { //change is for radio buttons
            size = e.target.value
        });
        document.querySelector('.bust').addEventListener("change", (e) => { //change is for radio buttons
            size = e.target.value
        });
        document.querySelector('.torso').addEventListener("change", (e) => { //change is for radio buttons
            size = e.target.value
        });
        document.querySelector('.fullB').addEventListener("change", (e) => { //change is for radio buttons
            size = e.target.value
        });

    document.querySelector('.keywordsInput').addEventListener("keyup", (e) => {
        keywords = e.target.value
    });

        document.querySelector('.png').addEventListener("change", (e) => { //change is for radio buttons
            type = e.target.value
        });
        document.querySelector('.jpg').addEventListener("change", (e) => { //change is for radio buttons
            type = e.target.value
        });
        document.querySelector('.jpeg').addEventListener("change", (e) => { //change is for radio buttons
            type = e.target.value
        });
}

var filename = ''
var arrayForm = ''

function generate() {
    reset()
    filename = date+','+width+','+height+','+artist+','+charNum+','
    genChar();
    if (au.length > 1) {
        filename = filename+au+','
    }
    filename = filename+medium+','+color+','+size+','+keywords+',,'
    arrayForm = '"img/art/'+filename+type+'",'
    document.getElementById('fnCite').innerHTML = filename
    document.getElementById('afCite').innerHTML = arrayForm
}

function genChar() {
    if (char.length >= 1) {
        var charS = char.toString();
        filename = filename+charS+','
    }
    if (char1.length > 1) {
        filename = filename+char1+','
    }
    if (char2.length > 1) {
        filename = filename+char2+','
    }
    if (char3.length > 1) {
        filename = filename+char3+','
    }
    if (char4.length > 1) {
        filename = filename+char4+','
    }
}

function reset() {
    filename = ''
    arrayForm = ''
}

//"img/art/2018-07-25,2448,3264,Aly,1,Keth,,traditional,monochrome,whole body,original.jpg",

//1: append '"img/art/'+date+','+width+','+height+','+artist+','+charnum+','
//2: check charnum and use it to append the appropriate amount of characters
//3: append au+','+medium+','+color+','+size+','+keywords+type


//note: make sure the display div that gives the filename is text editable so that you can edit it before copying and pasting
//in case you have to add more characters or fix a typo.