const linkedinRegex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]+\/?$/;

let link = 'https://www.linkedin.com/in/vishal-rai-326632295/'
let linkTwo = 'www.pwskill.com'

//Function for checking valid Linkedin links
function isvalid(input) {
    let isvalid = linkedinRegex.test(input)

   if(isvalid){
    console.log(`Link is Valid`);
    }else{
    console.log(`Link is not valid`);
   }
}

isvalid(link)// Output==> Link is Valid
isvalid(linkTwo)//Output==>  Link is not valid