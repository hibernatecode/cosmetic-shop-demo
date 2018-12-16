





/* sort tag  */

function dtaglist () {

   
   var sorttag_arr_txt = new Array ("护肤", "彩妆", "面膜", "个护", "男士");
   
   var sorttag_write = new Array();

   for (s=0; s<sorttag_arr_txt.length; s++) {
  	  sorttag_write[s] = "<div onclick=\"dtagcontentchange(" + s + "," + sorttag_arr_txt.length + ")\" id=\"tag" + s + "\" class=\"line_unsel\">" + sorttag_arr_txt[s] + "</div>";
   }
      document.getElementById("dul_out").innerHTML = sorttag_write.join("");
 
 } 


/* sort content */

function dtagcontentchange(tagno,tagnub) {   //tagno: 标签序号   tagnub: 总标签数
	
	 if (typeof(tagno) == "undefined") {  //default tag's id;
  	     tagno = "0";
  	  }
    dtaglinechange (tagno,tagnub);
    
    
    var sortcontent_arr = new Array();   
    
    
    
    
 // conduct info --------------------------------------
 
        var productxt = new Array();
           
           //护肤
           productxt[0] = ["护肤 兰蔻清滢柔肤水400ml大粉水舒缓补水保湿爽肤水", "护肤 兰蔻小黑瓶面部精华肌底液75ml 补水保湿囤货装", "护肤 HOT CARSLAN/卡姿兰 自然塑形眉笔", "护肤 HOT NYX 定妆喷雾", "护肤 HOT 火烈鸟 不可思议纤长心跳组合睫毛", "护肤 HOT MAC/魅可 Glittery星闪唇", "护肤 HOT YSL/圣罗兰 纯口红N", "护肤 HOT Miss Candy/糖果小姐 健康指彩(创意套装)"];
           //彩装
           productxt[1] = ["彩装 兰蔻清滢柔肤水400ml大粉水舒缓补水保湿爽肤水", "彩装 兰蔻小黑瓶面部精华肌底液75ml 补水保湿囤货装"];
           //面膜
           productxt[2] = ["面膜 兰蔻清滢柔肤水400ml大粉水舒缓补水保湿爽肤水", "面膜 兰蔻小黑瓶面部精华肌底液75ml 补水保湿囤货装", "面膜 HOT CARSLAN/卡姿兰 自然塑形眉笔"];
           //个护
           productxt[3] = ["个护 兰蔻清滢柔肤水400ml大粉水舒缓补水保湿爽肤水"];
           //男士
           productxt[4] = ["男士 兰蔻清滢柔肤水400ml大粉水舒缓补水保湿爽肤水", "男士 兰蔻小黑瓶面部精华肌底液75ml 补水保湿囤货装", "男士 HOT CARSLAN/卡姿兰 自然塑形眉笔", "男士 HOT NYX 定妆喷雾"];
    
       
       
         var productpri = new Array();
				   
				   //护肤
           productpri[0] = ["¥ 890.00", "¥ 2150.00", "¥ 850.00", "¥ 162.00", "¥ 650.00", "¥ 202.00", "¥ 900.00", "¥ 302.00"];
           //彩装
           productpri[1] = ["¥ 60.00", "¥ 2150.00"];
           //面膜
           productpri[2] = ["¥ 100.00", "¥ 900.00", "¥ 302.00"];
           //个护
           productpri[3] = ["¥ 100.00"];
           //男士
           productpri[4] = ["¥ 100.00", "¥ 2150.00", "¥ 850.00", "¥ 162.00"];
           
           
         var productpriori = new Array();
				   
				   //护肤
           productpriori[0] = ["¥ 200.00", "¥ 3150.00", "¥ 950.00", "¥ 362.00", "¥ 750.00", "¥ 282.00", "¥ 980.00", "¥ 392.00"];
           //彩装
           productpriori[1] = ["¥ 600.00", "¥ 8150.00"];
           //面膜
           productpriori[2] = ["¥500.00", "¥ 1900.00", "¥ 802.00"];
           //个护
           productpriori[3] = ["¥ 180.00"];
           //男士
           productpriori[4] = ["¥ 220.00", "¥ 6450.00", "¥ 880.00", "¥ 192.00"];
    
       
             
 
			 //conduct folder 
			 var infolder = new Array ("skin", "colorful", "mask", "individual", "man");
			 
			 
			 //images' path
			 var imgpath = "..\/slices\/special\/" + infolder[tagno] + "\/";
			 
			 //console.log(document.documentElement.clientWidth);
			 
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
			 
			 for (i=0; i<productxt[tagno].length; i++) {
			 	
			 	
			 	// 价格下标
			 	
			 	var breakl_pri = productpri[tagno][i].split(".");
			 	var breakl_priori = productpriori[tagno][i].split(".");
			 	    
			 	
			 	
			 	conductarr[i] = divout + "<img src=\"" + imgpath + "special_img_" + i + "@2x.png\" alt=\"" + i + "\" class=\"imglist\" onclick=\" \" />" + divimg + productxt[tagno][i] + "</div>" + divpri + breakl_pri[0] + "." + subtxt + breakl_pri[1] + "</sub>" + divpriori + breakl_priori[0] + "." + subtxt + breakl_priori[1] + "</sub></s></div></div>";
			 	//console.log(conductarr[i]);
			}
			  document.getElementById("dtagcontent").innerHTML = conductarr.join("");
	 
}




/* the status of tag */

function dtaglinechange (tagidnub,taglength) {
	 
	 if (typeof(taglength) == "undefined") {
	 	
  	   document.getElementById("tag" + tagidnub).className = "d_line_sel"; 
  	  } else {
  	  	for(t=0; t<taglength; t++) {
  	  	   document.getElementById("tag" + t).className = "d_line_unsel"; 	  	   
  	  	 }	  	 
  	  	 document.getElementById("tag" + tagidnub).className = "d_line_sel"; 
   	  }
	
   
}
