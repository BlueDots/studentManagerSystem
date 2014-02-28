
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
		var tableObj = document.getElementById("entryStuBasicInfo");
		var trLength = $("#entryStuBasicInfo tr").length;
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


/*录入学生参与活动信息*/
function entryStudentActivityInfo(numsOfRow) {
	var mainTr = document.getElementById("allbasicMsg");
		var editDiv = document.getElementById("editMsg");
		//change(mainTr,editDiv);
		mainTr.style.display = "none";
		editDiv.style.display = "block";
		//取得表对象
		var tableObj = document.getElementById("entryStudentActivityInfo");
		var trLength = $("#entryStudentActivityInfo tr").length;
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
			var sno = document.createElement("input");
			sno.type = "text";
			sno.name = "sno";
			sno.setAttribute("style","width:100px");
			TdObj1.appendChild(sno);

			//第二列
			var TdObj2 = TrObj.insertCell(1);
			var actno = document.createElement("input");
			actno.type = "text";
			actno.name = "actno";
			actno.setAttribute("style","width:100px");
			TdObj2.appendChild(actno);

			//第三列
			var TdObj3 = TrObj.insertCell(2);
			var sessionYear = document.createElement("input");
			sessionYear.type = "text";
			sessionYear.name = "sessionYear";
			sessionYear.setAttribute("style","width:50px");
			TdObj3.appendChild(sessionYear);

			//第四列
			var TdObj4 = TrObj.insertCell(3);
			var awardTime = document.createElement("input");
			awardTime.type = "text";
			awardTime.name = "awardTime";
			awardTime.setAttribute("style","width:100px");
			TdObj4.appendChild(awardTime);

			//第五列
			var TdObj5 = TrObj.insertCell(4);
			var awardRating = document.createElement("select");
			awardRating.name="awardRating";
			var name1 = document.createElement("option");
			name1.appendChild(document.createTextNode("一等奖"));
			var name2 = document.createElement("option");
			name2.appendChild(document.createTextNode("二等奖"));
			var name3 = document.createElement("option");
			name3.appendChild(document.createTextNode("三等奖"));
			var name4 = document.createElement("option");
			name4.appendChild(document.createTextNode("优胜奖"));
			awardRating.appendChild(name1);
			awardRating.appendChild(name2);
			awardRating.appendChild(name3);
			awardRating.appendChild(name4);
			TdObj5.appendChild(awardRating);

			//第六列
			var TdObj6 = TrObj.insertCell(5);
			var stuJob = document.createElement("input");
			stuJob.type = "text";
			stuJob.name="stuJob";
			stuJob.setAttribute("style","width:150px");
			TdObj6.appendChild(stuJob);

			//第七列
			var TdObj7 = TrObj.insertCell(6);
			var workingTime = document.createElement("input");
			workingTime.type = "text";
			workingTime.name="workingTime";
			workingTime.setAttribute("style","width:150px");
			TdObj7.appendChild(workingTime);
		}
	}
		
}


/*录入活动信息*/
function entryActivityInfo(numsOfRow) {
	var mainTr = document.getElementById("allbasicMsg");
		var editDiv = document.getElementById("editMsg");
		//change(mainTr,editDiv);
		mainTr.style.display = "none";
		editDiv.style.display = "block";
		//取得表对象
		var tableObj = document.getElementById("entryActivityInfo");
		var trLength = $("#entryActivityInfo tr").length;
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
			var actName = document.createElement("input");
			actName.type = "text";
			actName.name = "actName";
			actName.setAttribute("style","width:150px");
			TdObj1.appendChild(actName);

			//第二列
			var TdObj2 = TrObj.insertCell(1);
			var sponsor = document.createElement("input");
			sponsor.type = "text";
			sponsor.name = "sponsor";
			sponsor.setAttribute("style","width:80px");
			TdObj2.appendChild(sponsor);

			//第三列
			var TdObj3 = TrObj.insertCell(2);
			var organize = document.createElement("input");
			organize.type = "text";
			organize.name = "organize";
			organize.setAttribute("style","width:80px");
			TdObj3.appendChild(organize);

			//第四列
			var TdObj4 = TrObj.insertCell(3);
			var teacherNo = document.createElement("input");
			teacherNo.type = "text";
			teacherNo.name = "teacherNo";
			teacherNo.setAttribute("style","width:70px");
			TdObj4.appendChild(teacherNo);

			//第五列
			var TdObj5 = TrObj.insertCell(4);
			var stuName = document.createElement("input");
			stuName.type = "text";
			stuName.name = "stuName";
			stuName.setAttribute("style","width:70px");
			TdObj5.appendChild(stuName);

			//第六列
			var TdObj6 = TrObj.insertCell(5);
			var actType = document.createElement("select");
			actType.name="actType";
			var name1 = document.createElement("option");
			name1.appendChild(document.createTextNode("学术科技类"));
			var name2 = document.createElement("option");
			name2.appendChild(document.createTextNode("文艺体育类"));
			var name3 = document.createElement("option");
			name3.appendChild(document.createTextNode("社会公益类"));
			var name4 = document.createElement("option");
			name4.appendChild(document.createTextNode("实践创新类"));
			var name5 = document.createElement("option");
			name5.appendChild(document.createTextNode("理论学习类"));
			var name6 = document.createElement("option");
			name6.appendChild(document.createTextNode("其他类"));
			actType.appendChild(name1);
			actType.appendChild(name2);
			actType.appendChild(name3);
			actType.appendChild(name4);
			actType.appendChild(name5);
			actType.appendChild(name6);
			TdObj6.appendChild(actType);

			//第七列
			var TdObj7 = TrObj.insertCell(6);
			var actLevel = document.createElement("select");
			actLevel.name="actLevel";
			var name1 = document.createElement("option");
			name1.appendChild(document.createTextNode("院级"));
			var name2 = document.createElement("option");
			name2.appendChild(document.createTextNode("校级"));
			var name3 = document.createElement("option");
			name3.appendChild(document.createTextNode("厅级"));
			var name4 = document.createElement("option");
			name4.appendChild(document.createTextNode("国家级"));
			actLevel.appendChild(name1);
			actLevel.appendChild(name2);
			actLevel.appendChild(name3);
			actLevel.appendChild(name4);
			TdObj7.appendChild(actLevel);

			//第八列
			var TdObj8 = TrObj.insertCell(7);
			var actDescribe = document.createElement("input");
			actDescribe.type = "text";
			actDescribe.name = "actDescribe";
			actDescribe.setAttribute("style","width:250px");
			TdObj8.appendChild(actDescribe);			
		}
	}
		
}


/*录入就业信息*/
function entryJobInfo(numsOfRow) {
	var mainTr = document.getElementById("allbasicMsg");
		var editDiv = document.getElementById("editMsg");
		//change(mainTr,editDiv);
		mainTr.style.display = "none";
		editDiv.style.display = "block";
		//取得表对象
		var tableObj = document.getElementById("entryJobInfo");
		var trLength = $("#entryJobInfo tr").length;
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
			var stuno = document.createElement("input");
			stuno.type = "text";
			stuno.name = "stuno";
			stuno.setAttribute("style","width:100px");
			TdObj1.appendChild(stuno);

			//第二列
			var TdObj2 = TrObj.insertCell(1);
			var jobTimes = document.createElement("input");
			jobTimes.type = "text";
			jobTimes.name = "jobTimes";
			jobTimes.setAttribute("style","width:80px");
			TdObj2.appendChild(jobTimes);

			//第三列
			var TdObj3 = TrObj.insertCell(2);
			var company = document.createElement("input");
			company.type = "text";
			company.name = "company";
			company.setAttribute("style","width:250px");
			TdObj3.appendChild(company);

			//第四列
			var TdObj4 = TrObj.insertCell(3);
			var jobType = document.createElement("select");
			jobType.name="jobType";
			var name1 = document.createElement("option");
			name1.appendChild(document.createTextNode("国企"));
			var name2 = document.createElement("option");
			name2.appendChild(document.createTextNode("私企"));
			var name3 = document.createElement("option");
			name3.appendChild(document.createTextNode("外企"));
			var name4 = document.createElement("option");
			name4.appendChild(document.createTextNode("公务员"));
			var name5 = document.createElement("option");
			name5.appendChild(document.createTextNode("事业单位"));
			jobType.appendChild(name1);
			jobType.appendChild(name2);
			jobType.appendChild(name3);
			jobType.appendChild(name4);
			jobType.appendChild(name5);
			TdObj4.appendChild(jobType);

			//第五列
			var TdObj5 = TrObj.insertCell(4);
			var jobTime = document.createElement("input");
			jobTime.type = "text";
			jobTime.name = "stuName";
			jobTime.setAttribute("style","width:120px");
			TdObj5.appendChild(jobTime);
		}
	}
		
}


/*录入学生处分信息*/
function entryPunishInfo(numsOfRow) {
	var mainTr = document.getElementById("allbasicMsg");
		var editDiv = document.getElementById("editMsg");
		//change(mainTr,editDiv);
		mainTr.style.display = "none";
		editDiv.style.display = "block";
		//取得表对象
		var tableObj = document.getElementById("entryPunishInfo");
		var trLength = $("#entryPunishInfo tr").length;
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
			var sno = document.createElement("input");
			sno.type = "text";
			sno.name = "sno";
			sno.setAttribute("style","width:150px");
			TdObj1.appendChild(sno);

			//第二列
			var TdObj2 = TrObj.insertCell(1);
			var punlishTime = document.createElement("input");
			punlishTime.type = "text";
			punlishTime.name = "punlishTime";
			punlishTime.setAttribute("style","width:150px");
			TdObj2.appendChild(punlishTime);

			//第三列
			var TdObj3 = TrObj.insertCell(2);
			var publishType = document.createElement("select");
			publishType.name="publishType";
			var name1 = document.createElement("option");
			name1.appendChild(document.createTextNode("通报批评"));
			var name2 = document.createElement("option");
			name2.appendChild(document.createTextNode("警告"));
			var name3 = document.createElement("option");
			name3.appendChild(document.createTextNode("严重警告"));
			var name4 = document.createElement("option");
			name4.appendChild(document.createTextNode("记过"));
			var name5 = document.createElement("option");
			name5.appendChild(document.createTextNode("留校察看"));
			var name6 = document.createElement("option");
			name6.appendChild(document.createTextNode("开除学籍"));
			publishType.appendChild(name1);
			publishType.appendChild(name2);
			publishType.appendChild(name3);
			publishType.appendChild(name4);
			publishType.appendChild(name5);
			publishType.appendChild(name6);
			TdObj3.appendChild(publishType);

			//第四列
			var TdObj4 = TrObj.insertCell(3);
			var publishReason = document.createElement("input");
			publishReason.type = "text";
			publishReason.name = "publishReason";
			publishReason.setAttribute("style","width:400px");
			TdObj4.appendChild(publishReason);

		}
	}
		
}

/*录入学生学籍变动信息*/
function entryStatusInfo(numsOfRow) {
	var mainTr = document.getElementById("allbasicMsg");
		var editDiv = document.getElementById("editMsg");
		//change(mainTr,editDiv);
		mainTr.style.display = "none";
		editDiv.style.display = "block";
		//取得表对象
		var tableObj = document.getElementById("entryStatusInfo");
		var trLength = $("#entryStatusInfo tr").length;
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
			var sno = document.createElement("input");
			sno.type = "text";
			sno.name = "sno";
			sno.setAttribute("style","width:150px");
			TdObj1.appendChild(sno);

			//第二列
			var TdObj2 = TrObj.insertCell(1);
			var statusType = document.createElement("select");
			statusType.name="statusType";
			var name1 = document.createElement("option");
			name1.appendChild(document.createTextNode("退学"));
			var name2 = document.createElement("option");
			name2.appendChild(document.createTextNode("删除学生"));
			var name3 = document.createElement("option");
			name3.appendChild(document.createTextNode("专升本"));
			var name4 = document.createElement("option");
			name4.appendChild(document.createTextNode("留级"));
			var name5 = document.createElement("option");
			name5.appendChild(document.createTextNode("转专业"));
			var name6 = document.createElement("option");
			name6.appendChild(document.createTextNode("转院"));
			statusType.appendChild(name1);
			statusType.appendChild(name2);
			statusType.appendChild(name3);
			statusType.appendChild(name4);
			statusType.appendChild(name5);
			statusType.appendChild(name6);
			TdObj2.appendChild(statusType);

			//第三列
			var TdObj3 = TrObj.insertCell(2);
			var statusTime = document.createElement("input");
			statusTime.type = "text";
			statusTime.name = "statusTime";
			statusTime.setAttribute("style","width:150px");
			TdObj3.appendChild(statusTime);

			//第四列
			var TdObj4 = TrObj.insertCell(3);
			var remarks = document.createElement("input");
			remarks.type = "text";
			remarks.name = "remarks";
			remarks.setAttribute("style","width:400px");
			TdObj4.appendChild(remarks);

		}
	}
		
}



/*录入教师基本信息*/
function entryTeacherInfo(numsOfRow) {
	var mainTr = document.getElementById("allbasicMsg");
		var editDiv = document.getElementById("editMsg");
		//change(mainTr,editDiv);
		mainTr.style.display = "none";
		editDiv.style.display = "block";
		//取得表对象
		var tableObj = document.getElementById("entryTeacherInfo");
		var trLength = $("#entryTeacherInfo tr").length;
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
			var tecno = document.createElement("input");
			tecno.type = "text";
			tecno.name = "tecno";
			tecno.setAttribute("style","width:50px");
			TdObj1.appendChild(tecno);

			//第二列
			var TdObj2 = TrObj.insertCell(1);
			var tecname = document.createElement("input");
			tecname.type = "text";
			tecname.name = "tecname";
			tecname.setAttribute("style","width:50px");
			TdObj2.appendChild(tecname);

			//第三列
			var TdObj3 = TrObj.insertCell(2);
			var sex = document.createElement("select");
			var man = document.createElement("option");
			man.appendChild(document.createTextNode("男"));
			var female = document.createElement("option");
			female.appendChild(document.createTextNode("女"));
			sex.appendChild(man);
			sex.appendChild(female);
			TdObj3.appendChild(sex);

			//第四列
			var TdObj4 = TrObj.insertCell(3);
			var nation = document.createElement("select");
			var han = document.createElement("option");
			han.appendChild(document.createTextNode("汉族"));
			var nohan = document.createElement("option");
			nohan.appendChild(document.createTextNode("非汉族"));
			nation.appendChild(han);
			nation.appendChild(nohan);
			TdObj4.appendChild(nation);

			//第五列
			var TdObj5 = TrObj.insertCell(4);
			var birthPlace = document.createElement("input");
			birthPlace.type = "text";
			birthPlace.name = "name";
			birthPlace.setAttribute("style","width:80px");
			TdObj5.appendChild(birthPlace);

			//第六列
			var TdObj6 = TrObj.insertCell(5);
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
			TdObj6.appendChild(political);

			//第七列
			var TdObj7 = TrObj.insertCell(6);
			var birthPlace = document.createElement("input");
			birthPlace.type = "text";
			birthPlace.name = "name";
			birthPlace.setAttribute("style","width:80px");
			TdObj7.appendChild(birthPlace);

			//第八列
			var TdObj8 = TrObj.insertCell(7);
			var teachertitle = document.createElement("select");
			teachertitle.name="teachertitle";
			var s_1 = document.createElement("option");
			var s_2 = document.createElement("option");
			var s_3 = document.createElement("option");
			var s_4 = document.createElement("option");
			var s_5 = document.createElement("option");
			var s_6 = document.createElement("option");
			var s_7 = document.createElement("option");
			var s_8 = document.createElement("option");
			var s_9 = document.createElement("option");
			s_1.appendChild(document.createTextNode("教授"));
			s_2.appendChild(document.createTextNode("副教授	"));
			s_3.appendChild(document.createTextNode("讲师"));
			s_4.appendChild(document.createTextNode("助教"));
			s_5.appendChild(document.createTextNode("研究员"));
			s_6.appendChild(document.createTextNode("副研究员"));
			s_7.appendChild(document.createTextNode("高级实验师"));
			s_8.appendChild(document.createTextNode("助理研究员"));	
			s_9.appendChild(document.createTextNode("助理工程师"));			
			teachertitle.appendChild(s_1);
			teachertitle.appendChild(s_2);
			teachertitle.appendChild(s_3);
			teachertitle.appendChild(s_4);
			teachertitle.appendChild(s_5);
			teachertitle.appendChild(s_6);
			teachertitle.appendChild(s_7);
			teachertitle.appendChild(s_8);
			teachertitle.appendChild(s_9);			
			TdObj8.appendChild(teachertitle);

			//第九列
			var TdObj9 = TrObj.insertCell(8);
			var department = document.createElement("input");
			department.type = "text";
			department.name = "department";	
			department.setAttribute("style","width:60px");
			TdObj9.appendChild(department);
			//第十列
			var TdObj10 = TrObj.insertCell(9);
			var workingTime = document.createElement("input");
			workingTime.type="text";
			workingTime.name = "workingTime";
			workingTime.setAttribute("style","width:150px")
			TdObj10.appendChild(workingTime);

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
	
		}
	}
		
}