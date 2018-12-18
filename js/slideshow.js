

/* slideshow */

// pics 
var adpics = ["index_banner_01@2x.png", "ndex_banner_02@2x.png", "index_banner_01@2x.png", "index_banner_01@2x.png"];

var adpicspath = "<div class=\"listimg\"><img src=\"slices\/index\/index_banner_";

var addotspath = "<span class=\"ad_dotspan\" ><img src=\"slices\/index\/dot_unsel@2x.png\" id=\"tri_";
//alert(addotspath);

var allpics = adpics.length;

var dcid = adpics.length;

var int;

function writhpics () {    //ad images;

  var allpicsarr = new Array();
  var alldotsarr = new Array();

  for (i=0; i<allpics; i++) {
	
	  dcid -= 1;
	  allpicsarr[i] = adpicspath + dcid + "@2x.png\" alt=\"slideAD\" class=\"fullshow_w\" id=\"adpic_" + dcid + "\" \/><\/div>";
        
    if (dcid == 0) {
    	alldotsarr[i] = addotspath + dcid + "\" class=\"dotgray\" onclick=\"touchmobil(" + dcid + ")\" \/><\/span>";
    	//alldotsarr[i] = addotspath + dcid + "\" class=\"dotgray\" \/><\/span>";
    	//alldotsarr[i] = addotspath + dcid + "\" class=\"dotgray\" tri_" + dcid + ".addEventListener(\'click\', function touchmobil (" + dcid + ")) \/><\/span>";

    } else {
    	alldotsarr[i] = addotspath + dcid + "\" onclick=\"touchmobil(" + dcid + ")\" \/><\/span>";
    	
    	
    }
 
    
  }
   var revdots = alldotsarr.reverse();
   
   document.getElementById("ad_dots").innerHTML = revdots.join("");
   document.getElementById("ad_pic").innerHTML = allpicsarr.join("");
   
   

}


var turnidc;
var runtimes = 0;

function internalaction (interbackid) {
	
	if (typeof(interbackid) == "undefined") {
		interbackid = 0;
		//alert("undefined" + interbackid);
	} else {
		
		for (o=interbackid; o<allpics; o++) {
		      document.getElementById("adpic_" + o).className = "fullshow_w";
		     }	
		
		runtimes = interbackid;
		document.getElementById("adpic_" + runtimes).className = "fullshow_w";
		//alert("runtimes after=  " + runtimes + "      " + interbackid);
	}
	
	
	
	function adimgchange(interbackid) {
		
	     //alert("runtimes" + runtimes);
	     
		   document.getElementById("adpic_" + runtimes).className = "fullshow_w adpic_trans";
	   
		   runtimes++;
		   
		   if (runtimes >= allpics) {
	  	   for (k=0; k<allpics; k++) {
		      document.getElementById("adpic_" + k).className = "fullshow_w";
		     }		 
		   
		   runtimes = 0;
	    }
	    
	    dotchanges(runtimes);
	
	}
	
	function dotchanges(runtimesdot) {   //dots change;
	  for (d=0; d<allpics; d++) {
	  	document.getElementById("tri_" + d).className = "";
	  }
	  	
	  document.getElementById("tri_" + runtimesdot).className = "dotgray";
  }
  

  	int = setInterval (adimgchange,2000);

}




function touchmobil(getdotsid) {
	
	var dotrigger = document.getElementById("tri_" + getdotsid);
	var picbetrigger = document.getElementById("adpic_" + getdotsid);
	
	clearInterval(int);
	for (m=0; m<allpics; m++) {
     document.getElementById("adpic_" + m).className = "fullshow_w adpic_trans";
     document.getElementById("tri_" + m).className = "";
   }
	 dotrigger.className = "dotgray";
	 picbetrigger.className = "fullshow_w";
	 
	 setTimeout(internalaction(getdotsid),2000);
	
}





/*

 function touchmobil() {
 	//alert("getdotsid");
 	
 	for (n=0; n<allpics; n++) {
	
	   var dotrigger = document.getElementById("tri_" + n);
	   var picbetrigger = document.getElementById("adpic_" + n);
    
     dotrigger.addEventListener('touchstart', function () {
      
       for (m=0; m<allpics; m++) {
      	 alert(picbetrigger.id);
         picbetrigger.className = "fullshow_w adpic_trans";
         dotrigger.className = "";
      }
       picbetrigger.className = "fullshow_w";
       dotrigger.className = "dotgray";
      
    });
 }
}

   */



