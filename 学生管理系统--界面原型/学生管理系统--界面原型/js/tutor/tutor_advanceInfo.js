$(document).ready(function () { 
	/**
		@todo 获取三个下拉框
	*/
 	var collegeName = $(".collegeName").children("select");
 	var majorName = $(".majorName").children("select");
 	var className = $(".className").children("select");

 	/**
		@todo 给三个下拉框加下拉框的改变事件
 	*/
 	collegeName.change(function () {
 		//获取学院下拉框选中的值
 		var collegeValue = $(this).val();
 		if(collegeValue === 'agri_college') {
 			majorName.html("<option value='selected'>请选择专业方向</option><option value='agriculture'>农学</option><option value='plant_protection'>植物保护</option>");
 		}
 		if(collegeValue === 'garden_art') {
 			majorName.html("<option value='selected'>请选择专业方向</option><option value='horticulture'>园艺</option>");
 		}
 		//此处添加其他还未写完的代码
 	});

 	majorName.change(function () {
 		//获取专业方向下拉框选中的值
 		var majorValue = $(this).val();
 		if(majorValue === 'agriculture') {
 			className.html("<option value='1001'>1001</option><option value='1101'>1101</option>");
 		}
 		if(majorValue === 'plant_protection') {
 			className.html("<option value='1001'>0902</option><option value='1101'>1102</option>");
 		}
 		if(majorValue === 'horticulture') {
 			className.html("<option value='1001'>1002</option><option value='1101'>1103</option>");
 		}
 		//...
 	});

 	/**
		@todo 设置表格的隐藏和显示切换
 	*/
 	$("#softvareId").click(function () {
 		$("#1101tr").slideToggle();
 	});

 	$("#1101td").click(function () {
 		$("#1101table").slideToggle();
 	});



});

/**
	@todo 响应高级搜索按钮触发事件
*/
function advanceSearch() {

};

/**
	@todo 响应导出按钮触发事件
*/
function exportData() {

};


/**
	
*/
var menuids = [ "suckertree1" ];

function buildsubmenus() {
	for ( var i=0, size=menuids.length; i<size; i++) {
		var ultags = document.getElementById(menuids[i]).getElementsByTagName(
				"ul");
		for (var t=0, ulsize=ultags.length; t<ulsize; t++) {
			ultags[t].parentNode.getElementsByTagName("a")[0].className = "subfolderstyle";
			ultags[t].parentNode.onmouseover = function () {
				this.getElementsByTagName("ul")[0].style.display = "block";
			}
			ultags[t].parentNode.onmouseout = function () {
				this.getElementsByTagName("ul")[0].style.display = "none";
			}
		}
	}
}

if (window.addEventListener) {
	window.addEventListener("load", buildsubmenus, false);
}
else if (window.attachEvent) {
	window.attachEvent("onload", buildsubmenus);
}

/**
	@todo 响应审核按钮触发的事件
*/
function check() {

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
	@todo 响应保存按钮事件
*/
function save(id) {
	document.getElementById(id).style.display = "none";
};

/**
	@todo 手动录入按钮响应事件
*/
function manually() {
	//先弹出输入提示框，用来生成要生成的空白记录数量
	var iMsg = prompt("请输入要录入的记录数","");
	if(iMsg === "" || iMsg === "undefined" || iMsg === undefined) {
		alert('请输入数字');
	}
	else {
		/*根据输入框中的值生成相应的空白记录*/

		//先得到要隐藏的节点的父节点
		var oParentNode = document.getElementById("liulanbiao").parentNode;

		//先将当前页面中的表格隐藏
		document.getElementById("liulanbiao").style.display = "none";

		//创建一个div元素节点
		var oDiv = document.createElement("div");
		oDiv.id = "liulanbiao";
		oDiv.style = "display: block, margin-left: 10px";

		oParentNode.appendChild(oDiv);

		
		//在隐藏节点下添加空白记录
		var oTable = document.createElement("table");//创建table元素节点
		/*给table添加特性值*/
		oTable.setAttribute("id", "currentTable"); 
		oTable.setAttribute("style", "dispaly: block");
		oTable.setAttribute("width", "100%");
		oTable.setAttribute("border", "0");
		oTable.setAttribute("cellspacing", "0");
		oTable.setAttribute("cellpadding", "0");
		oTable.setAttribute("class", "CContent");
		oDiv.appendChild(oTable);


		oTable.insertRow(0);
		oTable.rows[0].insertCell(0);
		var oTableTrTd = oTable.rows[0].cells[0]
		oTableTrTd.setAttribute("class", "CPanel");//在这个<td>里面加入一个表格

		var oTableOuter = document.createElement("table");
		oTableOuter.setAttribute("width", "100%");
		oTableOuter.setAttribute("border", "0");
		oTableOuter.setAttribute("cellspacing", "0");
		oTableOuter.setAttribute("cellpadding", "0");
		oTableOuter.setAttribute("align", "center");

		oTableTrTd.appendChild(oTableOuter);

		oTableOuter.insertRow(0);
		oTableOuter.rows[0].insertCell(0);
		var oTableOuterTrTd = oTableOuter.rows[0].cells[0];
		oTableOuterTrTd.setAttribute("height" ,"40");
		oTableOuterTrTd.setAttribute("class" ,"font42");



		var oTableTeacher = document.createElement("table");
		oTableTeacher.setAttribute("id", "tableID"); 
		oTableTeacher.setAttribute("bgcolor", "#464646");
		oTableTeacher.setAttribute("width", "100%");
		oTableTeacher.setAttribute("border", "0");
		oTableTeacher.setAttribute("cellspacing", "0");
		oTableTeacher.setAttribute("cellpadding", "0");
		oTableTeacher.setAttribute("class", "demo");

		oTableOuterTrTd.appendChild(oTableTeacher);

		/*第一行：表头*/
		oTableTeacher.insertRow(0);
		var oTeacherTr1 = oTableTeacher.rows[0];
		oTeacherTr1.setAttribute("class", "CTitle");

		oTeacherTr1.insertCell(0);
		var oTeacherTr1Td =  oTeacherTr1.cells[0];
		oTeacherTr1Td.setAttribute("height", "22");
		oTeacherTr1Td.setAttribute("colspan", "12");
		oTeacherTr1Td.setAttribute("align", "center");
		oTeacherTr1Td.setAttribute("style", "font-size: 16px");
		oTeacherTr1Td.appendChild(document.createTextNode("评优评先录入表"));

		/*第二行：字段名*/
		oTableTeacher.insertRow(1);
		var oTeacherTr2 = oTableTeacher.rows[1];
		oTeacherTr2.setAttribute("bgcolor", "#EEEEEE");
		oTeacherTr2.setAttribute("align", "center");

		/*第一列*/
		oTeacherTr2.insertCell(0);
		var oTeacherTr2Td1 = oTeacherTr2.cells[0];
		oTeacherTr2Td1.setAttribute("width", "10%");
		oTeacherTr2Td1.appendChild(document.createTextNode("学号"));

		/*第二列*/
		oTeacherTr2.insertCell(1);
		var oTeacherTr2Td2 = oTeacherTr2.cells[1];
		oTeacherTr2Td2.setAttribute("width", "7%");
		oTeacherTr2Td2.appendChild(document.createTextNode("姓名"));
		
		/*第三列*/
		oTeacherTr2.insertCell(2);
		var oTeacherTr2Td3 = oTeacherTr2.cells[2];
		oTeacherTr2Td3.setAttribute("width", "7%");
		oTeacherTr2Td3.appendChild(document.createTextNode("性别"));

		/*第四列*/
		oTeacherTr2.insertCell(3);
		var oTeacherTr2Td4 = oTeacherTr2.cells[3];
		oTeacherTr2Td4.setAttribute("width", "7%");
		oTeacherTr2Td4.appendChild(document.createTextNode("学院"));

		/*第五列*/
		oTeacherTr2.insertCell(4);
		var oTeacherTr2Td5 = oTeacherTr2.cells[4];
		oTeacherTr2Td5.setAttribute("width", "7%");
		oTeacherTr2Td5.appendChild(document.createTextNode("专业"));

		/*第六列*/
		oTeacherTr2.insertCell(5);
		var oTeacherTr2Td6 = oTeacherTr2.cells[5];
		oTeacherTr2Td6.setAttribute("width", "7%");
		oTeacherTr2Td6.appendChild(document.createTextNode("班级"));

		/*第七列*/
		oTeacherTr2.insertCell(6);
		var oTeacherTr2Td7 = oTeacherTr2.cells[6];
		oTeacherTr2Td7.setAttribute("width", "7%");
		oTeacherTr2Td7.appendChild(document.createTextNode("先进项目"));

		/*第八列*/
		oTeacherTr2.insertCell(7);
		var oTeacherTr2Td8 = oTeacherTr2.cells[7];
		oTeacherTr2Td8.setAttribute("width", "10%");
		oTeacherTr2Td8.appendChild(document.createTextNode("获奖时间"));

		/*第九列*/
		oTeacherTr2.insertCell(8);
		var oTeacherTr2Td9 = oTeacherTr2.cells[8];
		oTeacherTr2Td9.setAttribute("width", "10%");
		oTeacherTr2Td9.appendChild(document.createTextNode("级别"));

		
		

		

		/*根据输入的数值产生相应数量的空白记录*/
		for(var i=0, iNum=parseInt(iMsg); i<iNum; i++) {
			oTableTeacher.insertRow(i+2);
			var oTeacherTri = oTableTeacher.rows[i+2];
			oTeacherTri.setAttribute("align", "center");
			if((i%2) === 0){
				oTeacherTri.setAttribute("bgcolor", "#FFFFFF");
			}else {
				oTeacherTri.setAttribute("bgcolor", "#EEEEEE");
			}
			
				/*第一列*/
			oTeacherTri.insertCell(0);
			var oTeacherTriTd1 = oTeacherTri.cells[0];
			oTeacherTriTd1.setAttribute("width", "10%");
			var tec_No = document.createElement('input');
			tec_No.type = "text";
			tec_No.size = "5";
			oTeacherTriTd1.appendChild(tec_No);

			/*第二列*/
			oTeacherTri.insertCell(1);
			var oTeacherTriTd2 = oTeacherTri.cells[1];
			oTeacherTriTd2.setAttribute("width", "7%");
			var tec_Name = document.createElement('input');
			tec_Name.type = "text";
			tec_Name.size = "5";
			oTeacherTriTd2.appendChild(tec_Name);

			/*第三列*/
			oTeacherTri.insertCell(2);
			var oTeacherTriTd3 = oTeacherTri.cells[2];
			oTeacherTriTd3.setAttribute("width", "7%");
			var tec_Sex = document.createElement('select');
			var man = document.createElement("option");
			man.appendChild(document.createTextNode("男"));
			var woman = document.createElement("option");
			woman.appendChild(document.createTextNode("女"));
			tec_Sex.appendChild(man);
			tec_Sex.appendChild(woman);
			oTeacherTriTd3.appendChild(tec_Sex);

			/*第四列*/
			oTeacherTri.insertCell(3);
			var oTeacherTriTd4 = oTeacherTri.cells[3];
			oTeacherTriTd4.setAttribute("width", "7%");
			var tec_College = document.createElement('select');
			var software = document.createElement("option");
			software.appendChild(document.createTextNode("软件学院"));
			var finance = document.createElement("option");
			finance.appendChild(document.createTextNode("经贸学院"));
			tec_College.appendChild(software);
			tec_College.appendChild(finance);
			oTeacherTriTd4.appendChild(tec_College);

			/*第五列*/
			oTeacherTri.insertCell(4);
			var oTeacherTriTd5 = oTeacherTri.cells[4];
			oTeacherTriTd5.setAttribute("width", "7%");
			var tec_Major = document.createElement('select');
			var soft_design = document.createElement("option");
			soft_design.appendChild(document.createTextNode("软件开发"));
			var fin_internation = document.createElement("option");
			fin_internation.appendChild(document.createTextNode("国际贸易"));
			tec_Major.appendChild(soft_design);
			tec_Major.appendChild(fin_internation);
			oTeacherTriTd5.appendChild(tec_Major);

			/*第六列*/
			oTeacherTri.insertCell(5);
			var oTeacherTriTd6 = oTeacherTri.cells[5];
			oTeacherTriTd6.setAttribute("width", "7%");
			var tec_class = document.createElement('select');
			var class1 = document.createElement("option");
			class1.appendChild(document.createTextNode("1101"));
			var class2 = document.createElement("option");
			class2.appendChild(document.createTextNode("1102"));
			tec_class.appendChild(class1);
			tec_class.appendChild(class2);
			oTeacherTriTd6.appendChild(tec_class);

			/*第七列*/
			oTeacherTri.insertCell(6);
			var oTeacherTriTd7 = oTeacherTri.cells[6];
			oTeacherTriTd7.setAttribute("width", "7%");
			var adv_type = document.createElement('select');
			var type1 = document.createElement("option");
			type1.appendChild(document.createTextNode("优秀三好学生"));
			var type2 = document.createElement("option");
			type2.appendChild(document.createTextNode("优秀学生干部"));
			var type3 = document.createElement("option");
			type3.appendChild(document.createTextNode("最佳三好学生"));
			var type4 = document.createElement("option");
			type4.appendChild(document.createTextNode("最佳学生干部"));
			var type5 = document.createElement("option");
			type5.appendChild(document.createTextNode("优秀团员"));
			var type6 = document.createElement("option");
			type6.appendChild(document.createTextNode("优秀团干部"));

			adv_type.appendChild(type1);
			adv_type.appendChild(type2);
			adv_type.appendChild(type3);
			adv_type.appendChild(type4);
			adv_type.appendChild(type5);
			adv_type.appendChild(type6);

			oTeacherTriTd7.appendChild(adv_type);

			/*第八列*/
			oTeacherTri.insertCell(7);
			var oTeacherTriTd8 = oTeacherTri.cells[7];
			oTeacherTriTd8.setAttribute("width", "10%");
			var tec_Position = document.createElement('input');
			tec_Position.type = "text";
			tec_Position.size = "5";
			oTeacherTriTd8.appendChild(tec_Position);

			/*第九列*/
			oTeacherTri.insertCell(8);
			var oTeacherTriTd9 = oTeacherTri.cells[8];
			oTeacherTriTd9.setAttribute("width", "10%");
			var adv_level= document.createElement('select');
			var level1 = document.createElement("option");
			level1.appendChild(document.createTextNode("院级"));
			var level2 = document.createElement("option");
			level2.appendChild(document.createTextNode("校级"));
			var level3 = document.createElement("option");
			level3.appendChild(document.createTextNode("厅级"));
			var level4 = document.createElement("option");
			level4.appendChild(document.createTextNode("省级"));
			var level5 = document.createElement("option");
			level5.appendChild(document.createTextNode("国家级"));
			
			adv_level.appendChild(level1);
			adv_level.appendChild(level2);
			adv_level.appendChild(level3);
			adv_level.appendChild(level4);
			adv_level.appendChild(level5);

			oTeacherTriTd9.appendChild(adv_level);
		}

		oTableTeacher.insertRow(i+2);
		var oTeacherTri = oTableTeacher.rows[i+2];
		oTeacherTri.setAttribute("bgcolor", "#FFFFFF");

		oTeacherTri.insertCell(0);
		var oTeacherTriTd1 = oTeacherTri.cells[0];
		oTeacherTriTd1.setAttribute("colspan", "15");
		oTeacherTriTd1.setAttribute("align", "center");
		
		var save = document.createElement('input');
		save.type="button";
		save.value = "保存";
		save.name = "save";

		var cancel = document.createElement('input');
		cancel.type="button";
		cancel.value = "取消";
		cancel.name = "cancel";
		
		oTeacherTriTd1.appendChild(save);
		oTeacherTriTd1.appendChild(cancel);

		document.body.appendChild(oDiv);														
		
	}
};