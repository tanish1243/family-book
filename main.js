var reason=["sister's photo",
"Dad's Photo",
            "Moms Photo"
           ,"Grandmoms Photo"
           ,"My Photo"
           ];
var pictures=["sis's photo.jpeg","dads photo.jpeg","moms photo .jpeg", " gmoms photo.jpeg", "Photo-2.jpeg"];

var i=1;
function nextimage(){
document.getElementById("reasontext").innerHTML=reason[i];
document.getElementById("images").src=pictures[i];
i++;
if(i==5){
    i= 0;

}
}