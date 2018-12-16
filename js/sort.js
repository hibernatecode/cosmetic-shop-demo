
// left menu card

function leftmenu_item () {
  var menu_title_txt = new Array ("护肤", "彩装", "面膜", "个护", "男士", "香水", "品牌");
    
  var menu_title_arr = new Array();

    
	  for (c=0 ; c<menu_title_txt.length; c++) {    	
	  	  menu_title_arr[c] = "<div class=" + "\"" + "menu_tag" + "\" id=" + "\"menul" + c + "\"" + "><div id=" + "\"bgsel" + c + "\" class=" + "\"" + "backcolor_unsel" + "\">&nbsp;</div><div onclick=" + "\"tag_present(" + c + "," + menu_title_txt.length + "); main_right(" + c + ")\" >" + menu_title_txt[c] + "</div></div>";
	  }
	  	
	  	  document.getElementById("left_menu").innerHTML = menu_title_arr.join(""); 	
	  	  
	  	  
	  	  tag_present(0,menu_title_txt.length); //default tag;
	 

}



/* info */

/* detail info */	

  var card_title_txt = new Array ();
	    card_title_txt[0] = ["面霜", "身体霜", "护手霜"];
	    card_title_txt[1] = ["口红", "眼影", "腮红", "睫毛膏"];
	    card_title_txt[2] = ["保湿", "防皱"];
	    card_title_txt[3] = [];
	    card_title_txt[4] = ["剃须膏"];
	    card_title_txt[5] = ["香水一", "香水二", "香水三", "香水四", "香水五", "香水六"];
	    card_title_txt[6] = ["品牌一", "品牌二", "品牌三", "品牌四"];

		    
	var card_detail_txt = new Array();
     
    card_detail_txt[0] = new Array (["哑光", "高光", "镜面"],["闪光", "高光", "保湿", "灰度"],["哑光", "无光"]);
    card_detail_txt[1] = new Array (["口红一", "口红二"],["眼影一", "眼影二", "眼影三"],["腮红一"],["睫毛膏一","睫毛膏二","睫毛膏三","睫毛膏四","睫毛膏五"]);
    card_detail_txt[2] = new Array (["保湿一", "保湿二", "保湿三"],["防皱一"]);
    card_detail_txt[3] = new Array (["面巾纸一"]);
    card_detail_txt[4] = new Array (["剃须膏一"]);
    card_detail_txt[5] = new Array (["香型一A", "香型一B", "香型一C"],["香型二D", "香型二E", "香型二F"],["香型三D", "香型三E", "香型三F", "香型三F1"],["香型四D", "香型四E", "香型四F"],["香型五D", "香型五E", "香型五F"],["香型六D", "香型六E", "香型六F"]);
    card_detail_txt[6] = new Array (["品牌一A", "品牌一B", "品牌一C"],["品牌二D", "品牌二D", "品牌品牌二DF"],["品牌三G", "品牌三H"],["品牌四I", "品牌四J", "品牌四K"]);
    
	
	
var arrtxt = new Array();

var divh; //div height;


// right part
function main_right(default_sel) {
	
	var card_title_arr = new Array();
	
	if (typeof(default_sel) == "undefined") {
		 default_sel = 0;	 
		}
	
	
	for (k=0; k<card_title_txt[default_sel].length; k++) {
		
		 var itxt = [card_detail_txt[default_sel][k]];
		 
		 var totxt = itxt.toString();
		 
		 var arrtxt = totxt.split(",");
		 
		 var itxt =new Array ();
		 for (m=0; m<arrtxt.length; m++) {
		 	  itxt[m] = "<div class=\"prod_div\" id=\"lo" + m + "\"><img src=\"..\/slices\/sort\/sort_production_1@2x.png\" class=\"prod_img\" \/><span class=\"prod_txt\">" + arrtxt[m] + "<\/span><\/div>";
		 }
		 
		 var kk = itxt.join("");
		 
		 
	 
		 card_title_arr[k] = "<div class=" + "\"right_card" + "\"><div class=" + "\"prod_title color_red" + "\">" + card_title_txt[default_sel][k] + "<\/div>" +  kk + "<\/div>";	  
		 
		}
		
		document.getElementById("right_part_show").innerHTML = card_title_arr.join("");  //写入card 的 title；
		geth();
		
}


function geth() {
	// div height
	      
	
				getdivid = document.getElementById("right_part_show");  //右侧div id;
				getdivid.style.height = "0";
				
				var visibleh = 0;
				    visibleh = document.body.clientHeight; //可见区高;
				    
				    	
				var divh = getdivid.scrollHeight;
				//console.log(divh + "visible" + visibleh);
				
				if (divh <= visibleh) {
			   getdivid.style.height = visibleh + "px"; 
			  } else {
			  	getdivid.style.height =divh + "px";
			  }
				
			
}


function tag_present(sel,selall) {
	
  for (ss=0; ss<selall; ss++) {
  	
  	
	document.getElementById("menul" + ss).className = "menu_tag";
	document.getElementById("bgsel" + ss).className = "backcolor_unsel";
	
	
	}
  document.getElementById("menul" + sel).className = "menu_tag text_bold tag_bg";
  document.getElementById("bgsel" + sel).className = "backcolor_sel";
  
}

