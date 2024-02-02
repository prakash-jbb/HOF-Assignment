let input = "hii bye" //Input Text

//Text reversed
function reverseString(strings) {
   return strings.split("").reverse().join("")
}

//text print in delay of 2 sec
function reverselog(strings) {
    let returna = reverseString(strings)
    setTimeout(function(){
        console.log(returna);
    },2000)
}

reverselog(input)
//Output==>eyb iih
