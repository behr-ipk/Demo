var storeValues = "storeValues1";

$(document).ready(function() {

let values = getUrlVars();

function getUrlVars() {
    var vars = {};
     parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

let allValues = document.getElementsByTagName("*");
let url = new URL(window.location.href)

for (val in allValues){


   let tempVal = allValues[val].className
    //console.log(typeof tempVal)
   if (typeof tempVal !="undefined"&& tempVal !="") {
   

    let currentText = $(`.${tempVal}`).text();
    $(`.${tempVal}`).text(`${currentText} ${url.searchParams.get(tempVal)}`)

   }

}
//console.log(allValues[10].className)

    
})
