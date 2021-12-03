 window.onload = function(){
    var submitbutton = document.getElementById("submit");
    submitbutton.onclick = getDegrees;}



async function getDegrees(url) {
     var url="my_degrees.json";
    // fetch the url
    await fetch(url)
      //get your data here, and check for the response status. If it's not 200, throw an error
      .then((response) => response.json())
      .then(data.data.forEach(element) =>
        
        document.getElementById("degrees").innerHTML=
          `My first degree was a ${element.degree.type} degree
           in ${element.degree.program} from ${element.degree.school} in ${element.degree.year}`
        
      );
  }
  
