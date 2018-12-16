

/* sort tag  */

function taglist () {

   
   var sorttag_arr_txt = new Array ("热门","特价");
   
   var sorttag_write = new Array()

   for (s=0; s<sorttag_arr_txt.length; s++) {
   	
   	   
   	  sorttag_write[s] = "<li onclick=" + "\"" + "tagcontentchange(" + s + "," + sorttag_arr_txt.length + ")" + "\"" + " id=" + "\"" + "tag" + s + "\"" + " class=" + "\" line_unsel" + "\"" + " >" + sorttag_arr_txt[s] + "</li>";
   	  
   	  
   }
      document.getElementById("ul_out").innerHTML = sorttag_write.join("");
 
 } 




/* sort content */

function tagcontentchange(tagno,tagnub) {

	
	var sortcontent_txt = new Array();
	    sortcontent_txt[0] = ["HOT Bioderma贝德玛 舒妍洁肤液", "HOT Dior/迪奥 烈艳蓝金唇膏", "HOT CARSLAN/卡姿兰 自然塑形眉笔", "HOT NYX 定妆喷雾", "HOT 火烈鸟 不可思议纤长心跳组合睫毛", "HOT MAC/魅可 Glittery星闪唇", "HOT YSL/圣罗兰 纯口红N", "HOT Miss Candy/糖果小姐 健康指彩(创意套装)"];
      sortcontent_txt[1] = ["SPECIAL CARSLAN/卡姿兰 自然塑形眉笔", "SPECIAL NYX 定妆喷雾", "SPECIAL Miss Candy/糖果小姐 健康指彩(创意套装)", "SPECIAL NYX 定妆喷雾", "SPECIAL 火烈鸟 不可思议纤长心跳组合睫毛", "SPECIAL Dior/迪奥 烈艳蓝金唇膏", "SPECIAL YSL/圣罗兰 纯口红N", "SPECIAL Miss Candy/糖果小姐 健康指彩(创意套装)"];

  
  
  var sortcontent_pri = new Array ;
      sortcontent_pri[0] = ["¥ 100.00", "¥ 2150.00", "¥ 850.00", "¥ 162.00", "¥ 650.00", "¥ 202.00", "¥ 900.00", "¥ 302.00"];
      sortcontent_pri[1] = ["¥ 2150.00", "¥ 100.00", "¥ 250.00", "¥ 163.00", "¥ 50.00", "¥ 2602.00", "¥ 980.00", "¥ 102.00"];

 
 
  var sortcontent_folder = new Array ("hot", "special"); //image's folder
  
  var sortcontent_arr = new Array();
  
  
  var block_content;

  var Mimgpath = ".." + "\/" + "cosmeticshop" + "\/" + "slices" + "\/" + "index" + "\/";  //part path of pics; 
  var subtxt = "<sub class=\"subtxt\">";

  if (typeof(tagno) == "undefined") {  //default tag's id;
  	     tagno = "0";
  	  }
  	  

  
  for (i=0; i<sortcontent_txt[tagno].length; i++) {
  	
  	 //价格下标		 	
	   var breakl_pri = sortcontent_pri[tagno][i].split(".");
		 
  	 
  	 
  	  sortcontent_arr[i] = "<div><img src=" + "\'" + Mimgpath + sortcontent_folder[tagno] + "\/" + "index_production_" + i + "@2x.png" + "\'" + " alt= " + "\'" + i + "\'" + " onclick=" + "\'" + "linkpage(" + i + ") \'" + "\/" + ">" + "<span onclick=" + "\'" + "linkpage(" + i + ")\'>" + sortcontent_txt[tagno][i] + "<\/" + "span><span class= " + "\'" + "font_color_r" + "\'>" + breakl_pri[0] + subtxt + "." + breakl_pri[1] + "<\/s><\/" + "span><\/" + "div>";	 

  }
  document.getElementById("tagcontent").innerHTML = sortcontent_arr.join("");
  
  taglinechange (tagno,tagnub);
  
  
}



/* the status of tag */

function taglinechange (tagidnub,taglength) {
	 
	 if (typeof(taglength) == "undefined") {
	 	
  	   document.getElementById("tag" + tagidnub).className = "line_sel"; 
  	  } else {
  	  	for(t=0; t<taglength; t++) {
  	  	   document.getElementById("tag" + t).className = "line_unsel"; 	  	   
  	  	 }
  	  	 
  	  	 //console.log("the latest"+ tagidnub);
  	  	 
  	  	 document.getElementById("tag" + tagidnub).className = "line_sel"; 
  	  }
	
   
 }

