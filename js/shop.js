

/* sort tag  */

function dtaglist () {

   
   var sorttag_arr_txt = new Array ("综合", "新品", "价格", "人气");
   
   var sorttag_write = new Array();
   
   var icondiv_0 = "<td class=\"sw_img\"><img src=\"..\/..\/cosmeticshop\/slices\/public\/arrowr_down@2x.png\" alt=\"down\" class= \"arrowwh sw_f\" id=\"icon0\"><\/td>";
   var icondiv_2 = "<td class=\"sw_imgd\"><img src=\"..\/..\/cosmeticshop\/slices\/public\/arrowr_up@2x.png\" alt=\"up\" class= \"arrowwh sw_f iconun\" id=\"icon2\" ><img src=\"..\/..\/cosmeticshop\/slices\/public\/arrowr_down@2x.png\" alt=\"down\" class= \"arrowwh iconun\" id=\"icon2\"><\/td>";
   //alert(icondiv_0 + "       " + icondiv_2);


   for (s=0; s<sorttag_arr_txt.length; s++) {
   	
   	  if (s==0) {
  	     sorttag_write[s] = "<td class=\"sw_1 std_align\"><div onclick=\"dtagcontentchange(" + s + "," + sorttag_arr_txt.length + ")\" id=\"tag" + s + "\" class=\"text_unsel\">" + sorttag_arr_txt[s] + "</div></td>" + icondiv_0 + "<td class=\"blank_td\">&nbsp;</td>";

  	     //alert(sorttag_write[s]);
  	   } else if (s==2) {
  	   	 sorttag_write[s] = "<td class=\"sw_1 std_align\"><div onclick=\"dtagcontentchange(" + s + "," + sorttag_arr_txt.length + ")\" id=\"tag" + s + "\" class=\"text_unsel\">" + sorttag_arr_txt[s] + "</div></td>" + icondiv_2 + "<td class=\"blank_td\">&nbsp;</td>";

       } else {
         sorttag_write[s] = "<td class=\"sw_0\"><div onclick=\"dtagcontentchange(" + s + "," + sorttag_arr_txt.length + ")\" id=\"tag" + s + "\" class=\"text_unsel\">" + sorttag_arr_txt[s] + "</div></td>";
       }
   }
    document.getElementById("dul_out").innerHTML = "<table class=\"tbstyle\"><tbody><tr>" + sorttag_write.join("") + "</tr></tbody></table>";
    console.log(document.getElementById("dul_out").innerHTML);
 
 } 








/* sort content */

function dtagcontentchange(tagno,tagnub) {   //tagno: 标签序号   tagnub: 总标签数
	
	 if (typeof(tagno) == "undefined") {  //default tag's id;
  	     tagno = "0";
  	  }
    dtaglinechange (tagno,tagnub);
    
    
    var sortcontent_arr = new Array();   
    
    
    
    
 // conduct info --------------------------------------
 
        
           //product
           var productxt = ["护肤 兰蔻清滢柔肤水400ml大粉水舒缓补水保湿爽肤水", "护肤 兰蔻小黑瓶面部精华肌底液75ml 补水保湿囤货装", "护肤 HOT CARSLAN/卡姿兰 自然塑形眉笔", "护肤 HOT NYX 定妆喷雾", "护肤 HOT 火烈鸟 不可思议纤长心跳组合睫毛", "护肤 HOT MAC/魅可 Glittery星闪唇", "护肤 HOT YSL/圣罗兰 纯口红N", "护肤 HOT Miss Candy/糖果小姐 健康指彩(创意套装)"];
     
				   //price
           var productpri = ["¥ 890.00", "¥ 2150.00", "¥ 850.00", "¥ 162.00", "¥ 650.00", "¥ 202.00", "¥ 900.00", "¥ 302.00"];
				   
				   //price ori
           var productpriori = ["¥ 200.00", "¥ 3150.00", "¥ 950.00", "¥ 362.00", "¥ 750.00", "¥ 282.00", "¥ 980.00", "¥ 392.00"];
     
             
 
			 //images' path
			 var imgpath = "..\/..\/cosmeticshop\/slices\/shop\/";
			 
			 //device's width;
			 if (document.documentElement.clientWidth == 414) {
			 			var divout = "<div class=\"divlist_b\">";
			    } else {
			    	var divout = "<div class=\"divlist_b divlist_bs\">";
			    }
			    	
			
			
			
			
			 var divimg = "<div class=\"txtw\">";
			 var divpri = "<div class=\"pcolor\">";
			 var divpriori = "<s class=\"delpri\">";
			 var subtxt = "<sub class=\"subtxt\">";
			
			 
			 // 当前数组
			 var conductarr = new Array();
			 
			 for (i=0; i<productxt.length; i++) {
			 	
			 	
			 	// 价格下标
			 	
			 	var breakl_pri = productpri[i].split(".");
			 	var breakl_priori = productpriori[i].split(".");
			 	    
			 	
			 	
			 	conductarr[i] = divout + "<img src=\"" + imgpath + "special_img_" + i + "@2x.png\" alt=\"" + i + "\" class=\"imglist\" onclick=\" \" />" + divimg + productxt[i] + "</div>" + divpri + breakl_pri[0] + "." + subtxt + breakl_pri[1] + "</sub>" + divpriori + breakl_priori[0] + "." + subtxt + breakl_priori[1] + "</sub></s></div></div>";
			 	//console.log(conductarr[i]);
			}
			  document.getElementById("dtagcontent").innerHTML = conductarr.join("");
	 
}




/* the status of tag */

function dtaglinechange (tagidnub,taglength) {
	 
	 if (typeof(taglength) == "undefined") {
	 	
  	   document.getElementById("tag" + tagidnub).className = "text_sel"; 
  	   document.getElementById("icon" + tagidnub).className = "arrowwh sw_f";
  	  } else {
  	  	for(t=0; t<taglength; t++) {
  	  	   document.getElementById("tag" + t).className = "text_unsel"; 	
  	  	   //console.log("2=  " + document.getElementById("icon2").className + "               " +  "0=  " + document.getElementById("icon0").className);
  	  	 }	  	 
  	  	 document.getElementById("tag" + tagidnub).className = "text_sel"; 
   	  }
	
   
}
