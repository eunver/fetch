 window.onload = function(){
    var submitbutton = document.getElementById("submit");
    submitbutton.onclick = getDegrees;}

async function getDegrees(url) {
     var url="my_degrees.json";   //url for json
    await fetch(url)
    
      .then((response) => response.json())
      .then((data) =>
        data.data.forEach((element) => {
          if(element.degree.year<=2021) {   //past tense used fo degrees gained before 2021 
          document.getElementById("degrees").innerHTML+=
          `I recieved my ${element.degree.type} degree in 
          ${element.degree.program} from ${element.degree.school} in ${element.degree.year}`+ "<br />"}
          else{
            document.getElementById("degrees").innerHTML+=  // future tense used for unobtained degrees
            `I will recieve my ${element.degree.type} degree in 
            ${element.degree.program} from ${element.degree.school} in ${element.degree.year}`+ "<br />"
          } ;
        })

        
        );
  }

