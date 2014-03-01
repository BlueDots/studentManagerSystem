
//点击查看审核详细信息
function verifyDetail(id) {
	var verifyObj = document.getElementById(id);
	if(verifyObj.style.display == "block") {
		verifyObj.style.display = "none";
	}
	else {
		verifyObj.style.display = "block";
	}
}

//多选框全选、反选
function selectAllAndReverse() {

	var checkboks = $("input");
	if(!isAllSelected() && isSelected()) {

		for (var i = 1; i <checkboks.length; i++) {
			if(checkboks[i].type == "checkbox") {
				checkboks[i].checked = true;
			}
		}
	}
	else {
		for (var i = 1; i <checkboks.length; i++) {
			if(checkboks[i].type == "checkbox") {
				checkboks[i].checked = false;
			}
		}
	}
}
//判断除第一个多选框外其他是否都被选中
function isAllSelected() {
	var flag = true;
	var checkboks = $("input");
	for (var i = 1; i <checkboks.length; i++) {
		if(checkboks[i].type == "checkbox" && checkboks[i].checked == false) {
			flag = false;
			break;
		}
	};

	return flag;
}
//判断第一个多选框是否被选中
function isSelected() {
	var objectC = document.getElementById("check1");
	var flag = false;
	if(objectC.checked) flag = true;
	else flag = false;
	return flag;
}
/*编辑信息*/
function  edit(){
	var mainTr = document.getElementById("allbasicMsg");
	var editDiv = document.getElementById("editMsg");
	if(checkChooseCheck()==true){
		change(mainTr,editDiv);
	 }else{
		 alert("请选中信息");
		 }
		
}


/**
	@todo 弹出框响应函数
*/
function popup(div1, div2, btnId) {
		$(div1).css({ display: "block", height: $(document).height() });
        var yscroll = document.documentElement.scrollTop;
        $(div2).css("top", "100px");
        $(div2).css("display", "block");
        document.documentElement.scrollTop = 0;
    
    	$(btnId).click(function() {
        	$(div1).css("display", "none");
        	$(div2).css("display", "none");
    	});
};

/**
	@todo 响应编辑按钮，显示保存按钮
*/
function edit(id) {
	if(document.getElementById(id).style.display === "none") {
		document.getElementById(id).style.display ="block";
	}else {
		document.getElementById(id).style.display ="none"
	}
};

/**
	@todo 响应保存按钮事件
*/
function save(id) {
	document.getElementById(id).style.display = "none";
};



	/*提交修改*/
	
	function submitEdit(){
		    var r=confirm("提交成功,是否继续修改?")
	    
 	 if (r==false)
  		  {
  	   $("#edit").toggle();
  		  }
	 }

	/*检测是否选择复选框*/
function checkChooseCheck(){
	   var inputs = document.getElementsByTagName("input");
	   var  temp   = false;
	   
		for(var i=0;i<inputs.length;i++){
		if(inputs.item(i).getAttribute("type") == "checkbox") {
			if(inputs.item(i).checked == true) {
				temp =true;
				break;
			}  
		}
      }
	  return  temp;
	
	} 

//悬浮效果
var menuids = [ "suckertree1" ]
function buildsubmenus() {
	for ( var i = 0; i < menuids.length; i++) {
		var ultags = document.getElementById(menuids[i]).getElementsByTagName("ul")
		for ( var t = 0; t < ultags.length; t++) {
			ultags[t].parentNode.getElementsByTagName("a")[0].className = "subfolderstyle"
			ultags[t].parentNode.onmouseover = function() {
				this.getElementsByTagName("ul")[0].style.display = "block"
			}
			ultags[t].parentNode.onmouseout = function() {
				this.getElementsByTagName("ul")[0].style.display = "none"
			}
		}
	}
}
if (window.addEventListener)
	window.addEventListener("load", buildsubmenus, false)
else if (window.attachEvent)
	window.attachEvent("onload", buildsubmenus)

