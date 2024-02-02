const regex = /(^https:\/\/|http:\/\/)[a-zA-Z0-9\-.~:/?=.com]/;

let link = 'https://learn.pwskills.com/lesson'
let linkTwo = 'www.pwskill.com'

//Function for checking valid links
function isvalid(input) {
    let isvalid = regex.test(input)

   if(isvalid){
    console.log(`Link is Valid`);
    }else{
    console.log(`Link is not valid`);
   }
}

isvalid(link)// Output==> Link is Valid
isvalid(linkTwo)//Output==>  Link is not valid


