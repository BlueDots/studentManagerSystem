
/*切换*/
function exchange(id1,id2) {
	var Obj1 = document.getElementById(id1);
	var Obj2 = document.getElementById(id2);
	if(Obj1.style.display == "none") {
 			Obj1.style.display = "block";
 			Obj2.style.display = "none";
 		}
 		else {
 			Obj1.style.display = "none";
 			Obj2.style.display = "block";
 	}
}

/*手动录入*/
function manually(id) {
	var numsOfRow = prompt("请输入要录入的记录数","");
	if(numsOfRow=="" || isNaN(numsOfRow)) {
		alert("请输入数字");
	}
	else if(numsOfRow>5||numsOfRow<1) {
		alert("请输入1-5范围内的数字");
	}
	else {
		eval(id+"(numsOfRow)");
	}
}
/*录入学生基本信息*/
function entryStuBasicInfo(numsOfRow) {
	var mainTr = document.getElementById("allbasicMsg");
		var editDiv = document.getElementById("editMsg");
		//change(mainTr,editDiv);
		mainTr.style.display = "none";
		editDiv.style.display = "block";
		//取得表对象
		var tableObj = document.getElementById("entry_stuBasicInfo");
		var trLength = $("#entry_stuBasicInfo tr").length;
		var differ = trLength-3;
		if(differ >= numsOfRow) {
			var i,j;
			j=differ-numsOfRow;
			for(i=0;i<j;i++)
				tableObj.deleteRow(trLength-2-i);
					
		}
		else {

		for(var i=0;i<numsOfRow-differ;i++) {
			var TrObj = tableObj.insertRow(trLength-1);
			TrObj.setAttribute("bgcolor","#FFFFFF");
			TrObj.setAttribute("align","center");

			//第一列
			var TdObj1 = TrObj.insertCell(0);
			var photo = document.createElement("input");
			photo.type = "button";
			photo.value = "导入";
			TdObj1.appendChild(photo);

			//第二列
			var TdObj2 = TrObj.insertCell(1);
			var sno = document.createElement("input");
			sno.type = "text";
			sno.name = "sno";
			sno.setAttribute("style","width:50px");
			TdObj2.appendChild(sno);

			//第三列
			var TdObj3 = TrObj.insertCell(2);
			var sname = document.createElement("input");
			sname.type = "text";
			sname.name = "sname";
			sname.setAttribute("style","width:50px");
			TdObj3.appendChild(sname);

			//第四列
			var TdObj4 = TrObj.insertCell(3);
			var profession = document.createElement("select");
			var pro_1 = document.createElement("option");
			pro_1.appendChild(document.createTextNode("软件开发"));
			var pro_2 = document.createElement("option");
			pro_2.appendChild(document.createTextNode("数字媒体"));
			var pro_3 = document.createElement("option");
			pro_3.appendChild(document.createTextNode("软件+英语"));
			profession.appendChild(pro_1);
			profession.appendChild(pro_2);
			profession.appendChild(pro_3);
			TdObj4.appendChild(profession);

			//第五列
			var TdObj5 = TrObj.insertCell(4);
			var classname = document.createElement("select");
			var name1 = document.createElement("option");
			name1.appendChild(document.createTextNode("软件1101"));
			var name2 = document.createElement("option");
			name2.appendChild(document.createTextNode("软件1102"));
			var name3 = document.createElement("option");
			name3.appendChild(document.createTextNode("软件1107"));
			classname.appendChild(name1);
			classname.appendChild(name2);
			classname.appendChild(name3);
			TdObj5.appendChild(classname);

			//第六列
			var TdObj6 = TrObj.insertCell(5);
			var sex = document.createElement("select");
			var man = document.createElement("option");
			man.appendChild(document.createTextNode("男"));
			var female = document.createElement("option");
			female.appendChild(document.createTextNode("女"));
			sex.appendChild(man);
			sex.appendChild(female);
			TdObj6.appendChild(sex);

			//第七列
			var TdObj7 = TrObj.insertCell(6);
			var nation = document.createElement("select");
			var han = document.createElement("option");
			han.appendChild(document.createTextNode("汉族"));
			var nohan = document.createElement("option");
			nohan.appendChild(document.createTextNode("非汉族"));
			nation.appendChild(han);
			nation.appendChild(nohan);
			TdObj7.appendChild(nation);

			//第八列
			var TdObj8 = TrObj.insertCell(7);
			var birthPlace = document.createElement("input");
			birthPlace.type = "text";
			birthPlace.name = "birthPlace";	
			birthPlace.setAttribute("style","width:60px");
			TdObj8.appendChild(birthPlace);

			//第九列
			var TdObj9 = TrObj.insertCell(8);
			var political = document.createElement("select");
			var p1 = document.createElement("option");
			p1.appendChild(document.createTextNode("群众"));
			var p2 = document.createElement("option");
			p2.appendChild(document.createTextNode("团员"));
			var p3 = document.createElement("option");
			p3.appendChild(document.createTextNode("党员"));
			political.appendChild(p1);
			political.appendChild(p2);
			political.appendChild(p3);
			TdObj9.appendChild(political);

			//第十列
			var TdObj10 = TrObj.insertCell(9);
			var IDCard = document.createElement("input");
			IDCard.type="text";
			IDCard.name = "IDCard";
			TdObj10.appendChild(IDCard);

			//第十一列
			var TdObj11 = TrObj.insertCell(10);
			var schooling = document.createElement("select");
			var s_1 = document.createElement("option");
			var s_2 = document.createElement("option");
			var s_3 = document.createElement("option");
			var s_4 = document.createElement("option");
			s_1.appendChild(document.createTextNode("本科"));
			s_2.appendChild(document.createTextNode("研究生"));
			s_3.appendChild(document.createTextNode("硕士"));
			s_4.appendChild(document.createTextNode("博士"));

			schooling.appendChild(s_1);
			schooling.appendChild(s_2);
			schooling.appendChild(s_3);
			schooling.appendChild(s_4);
			TdObj11.appendChild(schooling);

			//第十二列
			var TdObj12 = TrObj.insertCell(11);
			var CET = document.createElement("select");
			var c_1 = document.createElement("option");
			var c_2 = document.createElement("option");
			var c_3 = document.createElement("option");
			var c_4 = document.createElement("option");
			var c_5 = document.createElement("option");

			c_1.appendChild(document.createTextNode("无"));
			c_2.appendChild(document.createTextNode("四级"));
			c_3.appendChild(document.createTextNode("六级"));
			c_4.appendChild(document.createTextNode("专四"));
			c_5.appendChild(document.createTextNode("专八"));

			CET.appendChild(c_1);
			CET.appendChild(c_2);
			CET.appendChild(c_3);
			CET.appendChild(c_4);
			CET.appendChild(c_5);
			TdObj12.appendChild(CET);

			//第十三列
			var TdObj13 = TrObj.insertCell(12);
			var job = document.createElement("input");
			job.type = "text";
			TdObj13.appendChild(job);

			//第十三列
			var TdObj14 = TrObj.insertCell(13);
			var bandCard = document.createElement("input");
			bandCard.type = "text";
			TdObj14.appendChild(bandCard);		
		}
	}
		
}