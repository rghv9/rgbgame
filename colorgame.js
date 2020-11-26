	var h1=document.querySelector("#bg");
var butt=document.querySelector("#ms");
var colors=randomcolors(6);
var msg=document.querySelector("#sp");
var pickedcolor=pickrandom();
var display=document.querySelector("span");
display.textContent=pickrandom();
var sqaured=document.querySelectorAll(".square");
var butt=document.querySelector("#ms");
var lev=document.querySelector("#level");
var lev2=document.querySelector("#level2");
var no;

lev2.addEventListener("click",function(){
  no=6;
  colors=randomcolors(6);
  pickedcolor=pickrandom();
  display.textContent=pickrandom();
for(var i=0;i<sqaured.length;i++)
{
	 sqaured[i].style.background= colors[i];
	}

 msg.textContent="";
 	h1.style.background="orange";

});

lev.addEventListener("click",function(){
  no=3;
  colors=randomcolors(3);
  pickedcolor=pickrandom();
  display.textContent=pickrandom();
for(var i=0;i<sqaured.length;i++)
{
	 sqaured[i].style.background= colors[i];
	}

for(var i=3;i<6;i++)
{
  sqaured[i].style.background= "black";	
}
 msg.textContent="";
 	h1.style.background="orange";


});




butt.addEventListener("click",function(){
  
  colors=randomcolors(no);
  pickedcolor=pickrandom();
  display.textContent=pickrandom();
for(var i=0;i<sqaured.length;i++)
{
	 sqaured[i].style.background= colors[i];
	}

 msg.textContent="";
 	h1.style.background="orange";
 	butt.textContent="NEW COLORS";

});

for(var i=0;i<sqaured.length;i++)
{
	 sqaured[i].style.background= colors[i];
	 sqaured[i].addEventListener("click",function(){
	 	var clickedcolor=this.style.background;
          if(clickedcolor==pickedcolor)
          	 winner(this.style.background);
          	else
          		{this.style.background="black";
          	      msg.textContent="TRY AGAIN !";}
	 } );

	}
 var col;
function winner(col)	
{
	for(var i=0;i<sqaured.length;i++)
	{  
	  sqaured[i].style.background= col;	
	}


	h1.style.background=col;

   
   butt.textContent="PLAY AGAIN ?";

	msg.textContent="CORRECT !";
}

function pickrandom() {

	var num=Math.floor(Math.random()*colors.length);
	return colors[num];
}

function randomcolors(num)
{   var col=[];
	for(var i=0;i<num;i++)
	{ var pick=randomcol();
      col.push(pick);
	}
	return col;
}

function randomcol() {
	var x=Math.floor(Math.random()*256);
	var z=Math.floor(Math.random()*256);
	 var y=Math.floor(Math.random()*256);
     var k="rgb(" + x +"," + " " + y + "," + " " + z +")";
     return k;
}