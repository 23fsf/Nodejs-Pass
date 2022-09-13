var zar = document.getElementById("zar");
var info = document.getElementById("info")
zar.addEventListener("click",function(){
    var xReq = new XMLHttpRequest();

    xReq.open('GET','data.json');
    xReq.onload = function(){
        var xData = JSON.parse(xReq.responseText)
        addhtml(xData)
    };
    xReq.send();


})
function addhtml(data){
    var htmltext = "";

    for(i=0;i<2;i++){
        htmltext+=data.orders[i].customer+"<br>";
        htmltext+=data.orders[i].address.latitude+" ";
        htmltext+=data.orders[i].address.longitude+"<br>";
        htmltext+=data.orders[i].items[0].name+" ";
        htmltext+=data.orders[i].items[0].count+" ";
        htmltext+=data.orders[i].items[0].price+" ";
        htmltext+=data.orders[i].items[0].total+" <br>";
        htmltext+=data.orders[i].total+"  ";
        htmltext+=data.orders[i].discount+"  ";
        htmltext+=data.orders[i].totalAfterDiscount+"  <br>";
        htmltext+=",<br>"
    }
    

    info.insertAdjacentHTML('beforeend',htmltext)
}
