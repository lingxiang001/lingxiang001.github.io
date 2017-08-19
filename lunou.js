/**
 * 
 */
var count=0;
var isgo=false;
var time=3000;
var timer;
var arr=["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg"];
window.onload=function(){
	var ul_img=document.getElementsByClassName("ul_img")[0];
	//获取所有的li图片元素
	var li_img=document.getElementsByClassName("li_img");
	//获取控制方向的箭头元素
	var arrow=document.getElementsByClassName("arrow");
	alert(arrow[0].innerHTML,arrow[1]);
	//获取所有按钮元素
	var div_btn=document.getElementsByClassName("div_btn");
	div_btn[0].style.backgroundColor="aqua";
	//获取第一张图片
    var img=document.getElementById("first");

//第一个功能；
    show();
    function show(){
    	timer=setInterval(function(){
    		if(isgo==false){
    			count++;
    			ul_img.style.transform="translate("+-500*count+"px)";
    			
    			if(count>=li_img.length-1){
    				count=li_img.length-1;
    				isgo=true;
    				
    			}
    		}else{
    			
    			count--;
    			ul_img.style.transform="translate("+-500*count+"px)";
    			if(count<=0){
    				count=0;
    				isgo=false;
    			}
    			
    		}
    		for(var i=0;i<div_btn.length;i++){
    			div_btn[i].style.backgroundColor="aquamarine";
    		}
    		div_btn[count].style.backgroundColor="aqua";
    	},time)
    }
    //第二个功能：鼠标点击左右方向
    for(var i=0;i<arrow.length;i++){
    	//鼠标悬浮
    	arrow[i].onmouseover=function(){
    		clearInterval(timer);
    	}
    	//鼠标离开时
    	arrow[i].onmouseout=function (){
    		show();
    	}
    	arrow[i].onclick=function(){
    		if(this.title=="2"){
    			count++;
    			if(count >=6){
     				count=0;
    			}
    		}else{
    			count--;
    			if(count<=0){
    				count=0;
    			}
    		}
    	//	img .src="images/"+arr[count];
    		ul_img.style.transform="translate("+-500*count+"px)";
    		for(var i=0;i<div_btn.length;i++){
    			div_btn[i].style.backgroundColor="aquamarine";
    		}
    		div_btn[count].style.backgroundColor="aqua";
    	}
    }
      
    //鼠标在按钮时
    for(var i=0;i<div_btn.length;i++){
    	//鼠标悬浮
    	div_btn[i].index=i;
    	div_btn[i].onmouseover=function(){
    		clearInterval(timer);
    		for(var ai=0;a<div_btn.length;a++){
    			div_btn[a].style.backgroundColor="aquamarine";
    		}
    		div_btn[this.index].style.backgroundColor="aqua";
    		if(this.index==5){
    			isgo=true;
    		}
    		if(this.index==0){
    			isgo=false;
    		}
    		count=this.index;
    		ul_img.style.transform="translate("+-500*count+"px)";
    		
    	}
    	//鼠标离开时
    	div_btn[i].onmouseout=function (){
    		show();
    	}
    	div_btn[i].onclick=function(){
    		count=this.index;
    		ul_img.style.transform="translate("+-500*count+"px)";
    		
    		for(var i=0;i<div_btn.length;i++){
    			div_btn[i].style.backgroundColor="aquamarine";
    		}
    		div_btn[this.index].style.backgroundColor="aqua";
    	}
    	
    }
}



