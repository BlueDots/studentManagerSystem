
// JavaScript Documentw
 
	  function ceshi(){
				if(document.getElementById("gaoji").style.display=="block"){
				document.getElementById("gaoji").style.display="none";
				}else{
				document.getElementById("gaoji").style.display="block";
				}

}


/*显示添加信息frame*/
 function add(flag){
	  if(flag==1){
		  //添加
		  if(document.getElementById("add").style.display=="block"){ 
			  document.getElementById("add").style.display="none";
              document.getElementById("allbasicMsg").style.display="block";
		  }else{
		       document.getElementById("add").style.display="block";
              document.getElementById("allbasicMsg").style.display="none";
		  }
		  	
			$("#showScholarshipInfo").hide();
			$("#addScholarshipInfo").show();
			$("#editScholarshipInfo").hide();
			
		  }else if(flag==0){
			    //编辑
			    $("#add").show();
				  	$("#add").show();
			$("#allbasicMsg").hide();
			$("#showScholarshipInfo").hide();
			$("#addScholarshipInfo").hide();
                $("#editScholarshipInfo").show(); 
			  
		   }else if (flag==2){
			   alert("请输入学号或班级进行搜索,即可使用单个录入");
			   }
	 
 	
 }

/*返回查看已经审核的信息*/

function  showAllInfo(){
	
	   $("#add").hide();
	   $("#allbasicMsg").show();
	   $("#showScholarshipInfo").show();
	   $("#addScholarshipInfo").hide();
	 	$("#editScholarshipInfo").hide();
	}


/*提交信息*/
function  submitAdd(){
	   var r=confirm("提交成功,是否继续添加?")
	    
 	 if (r==false)
  		  {
  	   $("#add").hide();
	   $("#allbasicMsg").show();
	   $("#showScholarshipInfo").show();
	   $("#addScholarshipInfo").hide();
	   	$("#editScholarshipInfo").hide();
	   }
 	}
	
/*编辑信息*/
function  edit(){
	
	if(checkChooseCheck()==true){
	 $("#edit").toggle();
	  $("#allbasicMsg").toggle();
 
	 }else{
		 alert("请选择需要编辑的学生信息");
		 }
		
	}
	/*提交修改*/
	
	function submitEdit(){
		    var r=confirm("提交成功,是否继续修改?")
	    
 	 if (r==false)
  		  {
  	   $("#edit").toggle();
  		  }
	 }
	
/*删除信息*/
function deleteMsg(){
		
	if(checkChooseCheck()==true){
	  alert("删除请求已被提交（未保存的信息无需审核删除）!");
       }else{
		 alert("请选择需要删除的学生信息");
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

 
/*确认删除*/	 
function delete_confirm()
 	 {
	  var r=confirm("确定删除?")
	  
 	 if (r==true)
  		  {
  	alert("删除成功！")
  		  }
 	 else
  		  {
    	alert("删除取消！")
   		 }
  }
	 
	 
function  showPunbishHistory(id){
 $(".punishHistory"+id).toggle();
	}
	
	
function showAdvanceHistory(id){
 $(".advanceHistory"+id).toggle();
}
	 


//--------------------------------医保部分的js----------------------------------
function registerInsur(){
		if(document.getElementById("register").style.display=="block"){
		document.getElementById("register").style.display="none";
		}else{
			document.getElementById("register").style.display="block";
			document.getElementById("registed").style.display="none";
			document.getElementById("commInsu").style.display="none";
		}
}

function registedInsur(){
		if(document.getElementById("registed").style.display=="block"){
		document.getElementById("registed").style.display="none";
		}else{
			document.getElementById("registed").style.display="block";
			document.getElementById("register").style.display="none";
			document.getElementById("commInsu").style.display="none";
		}
}

function CommerialInsur(){
		if(document.getElementById("commInsu").style.display=="block"){
		document.getElementById("commInsu").style.display="none";
		}else{
			document.getElementById("commInsu").style.display="block";
			
			document.getElementById("register").style.display="none";
			document.getElementById("registed").style.display="none";
		}
}
//--------详细信息和编辑信息
//医保报销登记表
function registerDetail() {
	//registerDetail
	if(document.getElementById("registerDetail").style.display=="block"){
		document.getElementById("registerDetail").style.display="none";
		}else{
			document.getElementById("registerDetail").style.display="block";
	}
}


//已报销登记表
function registedDetail() {
	if(document.getElementById("registedDetail").style.display=="block"){
		document.getElementById("registedDetail").style.display="none";
		}else{
			document.getElementById("registedDetail").style.display="block";
	}
}
//商业保险 

function comminsuDetail() {
	if(document.getElementById("comminsuDetail").style.display=="block"){
		document.getElementById("comminsuDetail").style.display="none";
		}else{
			document.getElementById("comminsuDetail").style.display="block";
	}
}

//-------------------编辑和添加
function registerEdit() {
	if(document.getElementById("registerEdit").style.display=="block"){
			document.getElementById("registerEdit").style.display="none";
		}else{
			document.getElementById("registerEdit").style.display="block";
	}
	/*
	if(document.getElementById("register").style.display=="block") {
		
		
	} else if(document.getElementById("registed").style.display=="block") {
		
		if(document.getElementById("registedEdit").style.display=="block"){
			document.getElementById("registedEdit").style.display="none";
		}else{
			document.getElementById("registedEdit").style.display="block";
		}
	} else if(document.getElementById("commInsu").style.display=="block") {
		
		if(document.getElementById("comminsuEdit").style.display=="block"){
			document.getElementById("comminsuEdit").style.display="none";
		}else{
			document.getElementById("comminsuEdit").style.display="block";
		}
	}*/
	
}
//registedEdit  comminsuEdit