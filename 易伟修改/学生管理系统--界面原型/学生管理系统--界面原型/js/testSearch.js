
// JavaScript Documentw
 
	  function ceshi(){
				if(document.getElementById("gaoji").style.display=="block"){
				document.getElementById("gaoji").style.display="none";
				}else{
				document.getElementById("gaoji").style.display="block";
				}

}


/*��ʾ�����Ϣframe*/
 function add(flag){
	  if(flag==1){
		  //���
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
			    //�༭
			    $("#add").show();
				  	$("#add").show();
			$("#allbasicMsg").hide();
			$("#showScholarshipInfo").hide();
			$("#addScholarshipInfo").hide();
                $("#editScholarshipInfo").show(); 
			  
		   }else if (flag==2){
			   alert("������ѧ�Ż�༶��������,����ʹ�õ���¼��");
			   }
	 
 	
 }

/*���ز鿴�Ѿ���˵���Ϣ*/

function  showAllInfo(){
	
	   $("#add").hide();
	   $("#allbasicMsg").show();
	   $("#showScholarshipInfo").show();
	   $("#addScholarshipInfo").hide();
	 	$("#editScholarshipInfo").hide();
	}


/*�ύ��Ϣ*/
function  submitAdd(){
	   var r=confirm("�ύ�ɹ�,�Ƿ�������?")
	    
 	 if (r==false)
  		  {
  	   $("#add").hide();
	   $("#allbasicMsg").show();
	   $("#showScholarshipInfo").show();
	   $("#addScholarshipInfo").hide();
	   	$("#editScholarshipInfo").hide();
	   }
 	}
	
/*�༭��Ϣ*/
function  edit(){
	
	if(checkChooseCheck()==true){
	 $("#edit").toggle();
	  $("#allbasicMsg").toggle();
 
	 }else{
		 alert("��ѡ����Ҫ�༭��ѧ����Ϣ");
		 }
		
	}
	/*�ύ�޸�*/
	
	function submitEdit(){
		    var r=confirm("�ύ�ɹ�,�Ƿ�����޸�?")
	    
 	 if (r==false)
  		  {
  	   $("#edit").toggle();
  		  }
	 }
	
/*ɾ����Ϣ*/
function deleteMsg(){
		
	if(checkChooseCheck()==true){
	  alert("ɾ�������ѱ��ύ��δ�������Ϣ�������ɾ����!");
       }else{
		 alert("��ѡ����Ҫɾ����ѧ����Ϣ");
		 }
 }


/*����Ƿ�ѡ��ѡ��*/
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

 
/*ȷ��ɾ��*/	 
function delete_confirm()
 	 {
	  var r=confirm("ȷ��ɾ��?")
	  
 	 if (r==true)
  		  {
  	alert("ɾ���ɹ���")
  		  }
 	 else
  		  {
    	alert("ɾ��ȡ����")
   		 }
  }
	 
	 
function  showPunbishHistory(id){
 $(".punishHistory"+id).toggle();
	}
	
	
function showAdvanceHistory(id){
 $(".advanceHistory"+id).toggle();
}
	 


//--------------------------------ҽ�����ֵ�js----------------------------------
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
//--------��ϸ��Ϣ�ͱ༭��Ϣ
//ҽ�������ǼǱ�
function registerDetail() {
	//registerDetail
	if(document.getElementById("registerDetail").style.display=="block"){
		document.getElementById("registerDetail").style.display="none";
		}else{
			document.getElementById("registerDetail").style.display="block";
	}
}


//�ѱ����ǼǱ�
function registedDetail() {
	if(document.getElementById("registedDetail").style.display=="block"){
		document.getElementById("registedDetail").style.display="none";
		}else{
			document.getElementById("registedDetail").style.display="block";
	}
}
//��ҵ���� 

function comminsuDetail() {
	if(document.getElementById("comminsuDetail").style.display=="block"){
		document.getElementById("comminsuDetail").style.display="none";
		}else{
			document.getElementById("comminsuDetail").style.display="block";
	}
}

//-------------------�༭�����
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