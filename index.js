 window.onload = function(){
    var submitbutton = document.getElementById("submit");
    submitbutton.onclick = getDegrees;}



async function getDegrees(url) {
    // fetch the url
    await fetch(url)
      //get your data here, and check for the response status. If it's not 200, throw an error
      .then((response) => response.json())
      .then((data) =>
        document.write(
          `My first degree was a ${data.data[0].degree.school} from ${data.data[0].degree.program} in ${data.data[0].degree.type}`
        )
      );
  }
  
 // getDegrees("my_degrees.json");
