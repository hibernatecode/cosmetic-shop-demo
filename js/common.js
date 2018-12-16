

function pageh(oBody) {
		var oBody=document.getElementsByTagName('body')[0];
    oBody.style.height=document.documentElement.clientHeight + 'px';
    //alert(divh.offsetHeight);
    //alert(oBody.offsetWidth);
    //alert(alldiv.offsetHeight);
 }


// background img 自适应 w:h = 1:1

function resposiveh(divid) {
	  console.log(divid);
		document.getElementById(divid).style.height = document.getElementById(divid).offsetWidth + "px";
	}