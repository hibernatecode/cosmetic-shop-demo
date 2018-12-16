


/* sort tag  */

var block_content;

var Mimgpath = ".." + "\/" + "cosmeticshop" + "\/" + "slices" + "\/" + "index" + "\/";  //part path of pics; 


// production's name

var prodname_txt = "Bioderma贝德玛 舒妍洁肤液|Dior/迪奥 烈艳蓝金唇膏|CARSLAN/卡姿兰 自然塑形眉笔|NYX 定妆喷雾|火烈鸟 不可思议纤长心跳组合睫毛|MAC/魅可 Glittery星闪唇|YSL/圣罗兰 纯口红N|Miss Candy/糖果小姐 健康指彩(创意套装)";   // split with "|"
                    
var prodname_pri = "¥ 100.00|¥ 2150.00|¥ 850.00|¥ 162.00|¥ 650.00|¥ 202.00|¥ 900.00|¥ 302.00";   // split with  "|"
   
var arr_txt = new Array();

var arr_pri =new Array();

    arr_txt = prodname_txt.split("|");
    arr_pri = prodname_pri.split("|");
    
    //alert(arr_pri);

function tagcontentchange(tagn,c){  // tagn:tag's name   c:the number of tag

   var paccount = new Array();
	  
	 for (var i=0; i<c; i++) {
	 	
	 //alert("空"+arr_txt[i]);
	 
	  paccount[i] = "<div><img src=" + "\'" + Mimgpath + tagn + "\/" + "index_production_" + i + "@2x.png" + "\'" + " alt= " + "\'" + i + "\'" + " \/" + ">" + "<span>" + arr_txt[i] + "<\/" + "span><span class= " + "\'" + "font_color_r" + "\'>" + arr_pri[i] + "<\/" + "span><\/" + "div>";	 
    
	    	    	
	  //paccount[i] = "<div><img src=" + "\'" + Mimgpath + tagn + "\/" + "index_production_" + i + "@2x.png" + "\'" + " alt=" + i + "\/" + ">" + "<span>" + arr_txt[i] + "<\/" + "span><span class='font_color_r'>" + arr_pri[i] + "<\/" + "span><\/" + "div>";	 
    
   }   
       
	   document.getElementById("tagcontent").innerHTML = paccount.join("");    //use "" to replace "," by .join() 
	   
	  // <span>Bioderma/贝德玛 舒妍洁肤液</span><span class="font_color_r">¥ 150.00</span>
    	
	   
}
	
