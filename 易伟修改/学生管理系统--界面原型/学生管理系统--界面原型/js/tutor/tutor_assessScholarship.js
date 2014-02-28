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
		oTableTeacher.setAttribute("scrolling", "yes");
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
		oTeacherTr1Td.setAttribute("colspan", "22");
		oTeacherTr1Td.setAttribute("align", "center");
		oTeacherTr1Td.setAttribute("style", "font-size: 16px");
		oTeacherTr1Td.appendChild(document.createTextNode("奖学金录入表"));

		/*第二行：字段名*/
		oTableTeacher.insertRow(1);
		var oTeacherTr2 = oTableTeacher.rows[1];
		oTeacherTr2.setAttribute("bgcolor", "#EEEEEE");
		oTeacherTr2.setAttribute("align", "center");
		/*第三行：字段名*/
		oTableTeacher.insertRow(2);
		var oTeacherTr3 = oTableTeacher.rows[2];
		oTeacherTr3.setAttribute("bgcolor", "#EEEEEE");
		oTeacherTr3.setAttribute("align", "center");
		/*第四行：字段名*/
		oTableTeacher.insertRow(3);
		var oTeacherTr4 = oTableTeacher.rows[3];
		oTeacherTr4.setAttribute("bgcolor", "#EEEEEE");
		oTeacherTr4.setAttribute("align", "center");
		/*第五行：字段名*/
		oTableTeacher.insertRow(4);
		var oTeacherTr5 = oTableTeacher.rows[4];
		oTeacherTr5.setAttribute("bgcolor", "#EEEEEE");
		oTeacherTr5.setAttribute("align", "center");

		/*第一列*/
		oTeacherTr2.insertCell(0);
		var oTeacherTr2Td1 = oTeacherTr2.cells[0];
		oTeacherTr2Td1.setAttribute("width", "5%");
		oTeacherTr2Td1.setAttribute("rowspan", "4");
		oTeacherTr2Td1.appendChild(document.createTextNode("学号"));

		/*第二列*/
		oTeacherTr2.insertCell(1);
		var oTeacherTr2Td2 = oTeacherTr2.cells[1];
		oTeacherTr2Td2.setAttribute("width", "5%");
		oTeacherTr2Td2.setAttribute("rowspan", "4");
		oTeacherTr2Td2.appendChild(document.createTextNode("姓名"));
		/*第三大列*/
		oTeacherTr2.insertCell(2);
		var oTeacherTr2Td3 = oTeacherTr2.cells[2];
		oTeacherTr2Td3.setAttribute("width", "20%");
		oTeacherTr2Td3.setAttribute("colspan", "4");
		oTeacherTr2Td3.appendChild(document.createTextNode("德育素质测评(20%)"));
		/*第三列*/
		oTeacherTr3.insertCell(0);
		var oTeacherTr3Td3 = oTeacherTr3.cells[0];
		oTeacherTr3Td3.setAttribute("width", "5%");
		oTeacherTr3Td3.setAttribute("rowspan", "3");
		oTeacherTr3Td3.appendChild(document.createTextNode("基准分"));
		/*第四列*/
		oTeacherTr3.insertCell(1);
		var oTeacherTr3Td4 = oTeacherTr3.cells[1];
		oTeacherTr3Td4.setAttribute("width", "5%");
		oTeacherTr3Td4.setAttribute("rowspan", "3");
		oTeacherTr3Td4.appendChild(document.createTextNode("奖励分"));

		/*第五列*/
		oTeacherTr3.insertCell(2);
		var oTeacherTr3Td5 = oTeacherTr3.cells[2];
		oTeacherTr3Td5.setAttribute("width", "5%");
		oTeacherTr3Td5.setAttribute("rowspan", "3");
		oTeacherTr3Td5.appendChild(document.createTextNode("惩罚分"));

		/*第六列*/
		oTeacherTr3.insertCell(3);
		var oTeacherTr3Td6 = oTeacherTr3.cells[3];
		oTeacherTr3Td6.setAttribute("width", "5%");
		oTeacherTr3Td6.setAttribute("rowspan", "3");
		oTeacherTr3Td6.appendChild(document.createTextNode("得分"));
		/*第四大列*/
		oTeacherTr2.insertCell(3);
		var oTeacherTr2Td4 = oTeacherTr2.cells[3];
		oTeacherTr2Td4.setAttribute("width", "35%");
		oTeacherTr2Td4.setAttribute("colspan", "5");
		oTeacherTr2Td4.appendChild(document.createTextNode("智育素质测评(20%)"));
		/*第三行七列*/
		oTeacherTr3.insertCell(4);
		var oTeacherTr3Td7 = oTeacherTr3.cells[4];
		oTeacherTr3Td7.setAttribute("width", "20%");
		oTeacherTr3Td7.setAttribute("colspan", "2");
		oTeacherTr3Td7.appendChild(document.createTextNode("学业课程分"));
		/*第四行七列*/
		oTeacherTr4.insertCell(0);
		var oTeacherTr4Td7 = oTeacherTr4.cells[0];
		oTeacherTr4Td7.setAttribute("width", "10%");
		oTeacherTr4Td7.setAttribute("rowspan", "2");
		oTeacherTr4Td7.appendChild(document.createTextNode("必修课成绩"));
		/*第四行八列*/
		oTeacherTr4.insertCell(1);
		var oTeacherTr4Td8 = oTeacherTr4.cells[1];
		oTeacherTr4Td8.setAttribute("width", "10%");
		oTeacherTr4Td8.setAttribute("rowspan", "2");
		oTeacherTr4Td8.appendChild(document.createTextNode("公选课惩罚分"));
		/*第三行八列*/
		oTeacherTr3.insertCell(5);
		var oTeacherTr3Td8 = oTeacherTr3.cells[5];
		oTeacherTr3Td8.setAttribute("width", "5%");
		oTeacherTr3Td8.setAttribute("rowspan", "3");
		oTeacherTr3Td8.appendChild(document.createTextNode("科技活动与创新分"));
		/*第三行第九列*/
		oTeacherTr3.insertCell(6);
		var oTeacherTr3Td9 = oTeacherTr3.cells[6];
		oTeacherTr3Td9.setAttribute("width", "5%");
		oTeacherTr3Td9.setAttribute("rowspan", "3");
		oTeacherTr3Td9.appendChild(document.createTextNode("职业技能分"));

		/*第三行十列*/
		oTeacherTr3.insertCell(7);
		var oTeacherTr3Td10 = oTeacherTr3.cells[7];
		oTeacherTr3Td10.setAttribute("width", "5%");
		oTeacherTr3Td10.setAttribute("rowspan", "3");
		oTeacherTr3Td10.appendChild(document.createTextNode("得分"));
		/*第五大列*/
		oTeacherTr2.insertCell(4);
		var oTeacherTr2Td5 = oTeacherTr2.cells[4];
		oTeacherTr2Td5.setAttribute("width", "8%");
		oTeacherTr2Td5.setAttribute("colspan", "4");
		oTeacherTr2Td5.appendChild(document.createTextNode("体育素质测评(5%)"));
		/*第十一列*/
		oTeacherTr3.insertCell(8);
		var oTeacherTr3Td11 = oTeacherTr3.cells[8];
		oTeacherTr3Td11.setAttribute("width", "2%");
		oTeacherTr3Td11.setAttribute("rowspan", "3");
		oTeacherTr3Td11.appendChild(document.createTextNode("体育课程分"));

		/*第十二列*/
		oTeacherTr3.insertCell(9);
		var oTeacherTr3Td12 = oTeacherTr3.cells[9];
		oTeacherTr3Td12.setAttribute("width", "2%");
		oTeacherTr3Td12.setAttribute("rowspan", "3");
		oTeacherTr3Td12.appendChild(document.createTextNode("体育健康分"));

		/*第十三列*/
		oTeacherTr3.insertCell(10);
		var oTeacherTr3Td13 = oTeacherTr3.cells[10];
		oTeacherTr3Td13.setAttribute("width", "2%");
		oTeacherTr3Td13.setAttribute("rowspan", "3");
		oTeacherTr3Td13.appendChild(document.createTextNode("体育竞赛分"));
		/*第十四列*/
		oTeacherTr3.insertCell(11);
		var oTeacherTr3Td14 = oTeacherTr3.cells[11];
		oTeacherTr3Td14.setAttribute("width", "2%");
		oTeacherTr3Td14.setAttribute("rowspan", "3");
		oTeacherTr3Td14.appendChild(document.createTextNode("得分"));
		/*第六大列*/
		oTeacherTr2.insertCell(5);
		var oTeacherTr2Td6 = oTeacherTr2.cells[5];
		oTeacherTr2Td6.setAttribute("width", "12%");
		oTeacherTr2Td6.setAttribute("colspan", "4");
		oTeacherTr2Td6.appendChild(document.createTextNode("美育素质测评(15%)"));
		/*第十五列*/
		oTeacherTr3.insertCell(12);
		var oTeacherTr3Td15 = oTeacherTr3.cells[12];
		oTeacherTr3Td15.setAttribute("width", "3%");
		oTeacherTr3Td15.setAttribute("rowspan", "3");
		oTeacherTr3Td15.appendChild(document.createTextNode("美育管理艺术分"));
		/*第十六列*/
		oTeacherTr3.insertCell(13);
		var oTeacherTr3Td16 = oTeacherTr3.cells[13];
		oTeacherTr3Td16.setAttribute("width", "3%");
		oTeacherTr3Td16.setAttribute("rowspan", "3");
		oTeacherTr3Td16.appendChild(document.createTextNode("美育文化艺术分"));
		/*第十七列*/
		oTeacherTr3.insertCell(14);
		var oTeacherTr3Td17 = oTeacherTr3.cells[14];
		oTeacherTr3Td17.setAttribute("width", "3%");
		oTeacherTr3Td17.setAttribute("rowspan", "3");
		oTeacherTr3Td17.appendChild(document.createTextNode("美育媒体艺术分"));
		/*第十八列*/
		oTeacherTr3.insertCell(15);
		var oTeacherTr3Td18 = oTeacherTr3.cells[15];
		oTeacherTr3Td18.setAttribute("width", "3%");
		oTeacherTr3Td18.setAttribute("rowspan", "3");
		oTeacherTr3Td18.appendChild(document.createTextNode("美育实践服务分"));
		/*第七大列*/
		oTeacherTr2.insertCell(6);
		var oTeacherTr2Td7 = oTeacherTr2.cells[6];
		oTeacherTr2Td7.setAttribute("width", "20%");
		oTeacherTr2Td7.setAttribute("colspan", "2");
		oTeacherTr2Td7.setAttribute("rowspan", "2");
		oTeacherTr2Td7.appendChild(document.createTextNode("综合测评"));
		/*第四行二十列*/
		oTeacherTr4.insertCell(2);
		var oTeacherTr4Td20 = oTeacherTr4.cells[2];
		oTeacherTr4Td20.setAttribute("width", "10%");
		oTeacherTr4Td20.setAttribute("rowspan", "2");
		oTeacherTr4Td20.appendChild(document.createTextNode("总得分"));
		/*第四行二十一列*/
		oTeacherTr4.insertCell(3);
		var oTeacherTr4Td21 = oTeacherTr4.cells[3];
		oTeacherTr4Td21.setAttribute("width", "10%");
		oTeacherTr4Td21.setAttribute("rowspan", "2");
		oTeacherTr4Td21.appendChild(document.createTextNode("排名"));
		/*第八大列*/
		oTeacherTr2.insertCell(7);
		var oTeacherTr2Td8 = oTeacherTr2.cells[7];
		oTeacherTr2Td8.setAttribute("width", "3%");
		oTeacherTr2Td8.setAttribute("rowspan", "4");
		oTeacherTr2Td8.appendChild(document.createTextNode("奖学金等级"));

		/*根据输入的数值产生相应数量的空白记录*/
		for(var i=3, iNum=parseInt(iMsg); i<iNum+3; i++) {
			oTableTeacher.insertRow(i+2);
			var oTeacherTri = oTableTeacher.rows[i+2];
			oTeacherTri.setAttribute("align", "center");
			oTeacherTri.setAttribute("bgcolor", "#FFFFFF");
			
			/*第一列*/
			oTeacherTri.insertCell(0);
			var oTeacherTriTd1 = oTeacherTri.cells[0];
			oTeacherTriTd1.setAttribute("width", "5%");
			var tec_No = document.createElement('input');
			tec_No.type = "text";
			tec_No.size = "5";
			oTeacherTriTd1.appendChild(tec_No);

			/*第二列*/
			oTeacherTri.insertCell(1);
			var oTeacherTriTd2 = oTeacherTri.cells[1];
			oTeacherTriTd2.setAttribute("width", "5%");
			var tec_Name = document.createElement('input');
			tec_Name.type = "text";
			tec_Name.size = "5";
			oTeacherTriTd2.appendChild(tec_Name);

			/*第三列*/
			oTeacherTri.insertCell(2);
			var oTeacherTriTd3 = oTeacherTri.cells[2];
			oTeacherTriTd3.setAttribute("width", "5%");
			var basic = document.createElement('input');
			basic.type = "text";
			basic.size = "5";
			oTeacherTriTd3.appendChild(basic);

			/*第四列*/
			oTeacherTri.insertCell(3);
			var oTeacherTriTd4 = oTeacherTri.cells[3];
			oTeacherTriTd4.setAttribute("width", "5%");
			var award = document.createElement('input');
			awardtype = "text";
			award.size = "5";
			oTeacherTriTd4.appendChild(award);

			/*第五列*/
			oTeacherTri.insertCell(4);
			var oTeacherTriTd5 = oTeacherTri.cells[4];
			oTeacherTriTd5.setAttribute("width", "5%");
			var punish = document.createElement('input');
			punish.type = "text";
			punish.size = "5";
			oTeacherTriTd5.appendChild(punish);

			/*第六列*/
			oTeacherTri.insertCell(5);
			var oTeacherTriTd6 = oTeacherTri.cells[5];
			oTeacherTriTd6.setAttribute("width", "5%");
			var tot1 = document.createElement('input');
			tot1.type = "text";
			tot1.size = "5";
			oTeacherTriTd6.appendChild(tot1);

			/*第七列*/
			oTeacherTri.insertCell(6);
			var oTeacherTriTd7 = oTeacherTri.cells[6];
			oTeacherTriTd7.setAttribute("width", "10%");
			var compulsary = document.createElement('input');
			compulsary.type = "text";
			compulsary.size = "5";
			oTeacherTriTd7.appendChild(compulsary);
			
			/*第八列*/
			oTeacherTri.insertCell(7);
			var oTeacherTriTd8 = oTeacherTri.cells[7];
			oTeacherTriTd8.setAttribute("width", "10%");
			var common = document.createElement('input');
			common.type = "text";
			common.size = "5";
			oTeacherTriTd8.appendChild(common);
			/*第九列*/
			oTeacherTri.insertCell(8);
			var oTeacherTriTd9 = oTeacherTri.cells[8];
			oTeacherTriTd9.setAttribute("width", "5%");
			var technology = document.createElement('input');
			technology.type = "text";
			technology.size = "5";
			oTeacherTriTd9.appendChild(technology);

			/*第十列*/
			oTeacherTri.insertCell(9);
			var oTeacherTriTd10 = oTeacherTri.cells[9];
			oTeacherTriTd10.setAttribute("width", "5%");
			var occuption = document.createElement('input');
			occuption.type = "text";
			occuption.size = "5";
			oTeacherTriTd10.appendChild(occuption);

			/*第十一列*/
			oTeacherTri.insertCell(10);
			var oTeacherTriTd11 = oTeacherTri.cells[10];
			oTeacherTriTd11.setAttribute("width", "5%");
			var tot2 = document.createElement('input');
			tot2.type = "text";
			tot2.size = "5";
			oTeacherTriTd11.appendChild(tot2);

			/*第十二列*/
			oTeacherTri.insertCell(11);
			var oTeacherTriTd12 = oTeacherTri.cells[11];
			oTeacherTriTd12.setAttribute("width", "2%");
			var PE1 = document.createElement('input');
			PE1.type = "text";
			PE1.size = "5";
			oTeacherTriTd12.appendChild(PE1);
			/*第十三列*/
			oTeacherTri.insertCell(12);
			var oTeacherTriTd13 = oTeacherTri.cells[12];
			oTeacherTriTd13.setAttribute("width", "2%");
			var PE2 = document.createElement('input');
			PE2.type = "text";
			PE2.size = "5";
			oTeacherTriTd13.appendChild(PE2);
			/*第十四列*/
			oTeacherTri.insertCell(13);
			var oTeacherTriTd14 = oTeacherTri.cells[13];
			oTeacherTriTd14.setAttribute("width", "2%");
			var PE3 = document.createElement('input');
			PE3.type = "text";
			PE3.size = "5";
			oTeacherTriTd14.appendChild(PE3);
			/*第十五列*/
			oTeacherTri.insertCell(14);
			var oTeacherTriTd15 = oTeacherTri.cells[14];
			oTeacherTriTd15.setAttribute("width", "2%");
			var tot3 = document.createElement('input');
			tot3.type = "text";
			tot3.size = "5";
			oTeacherTriTd15.appendChild(tot3);
				
			/*第十六列*/
			oTeacherTri.insertCell(15);
			var oTeacherTriTd16 = oTeacherTri.cells[15];
			oTeacherTriTd16.setAttribute("width", "3%");
			var morManager = document.createElement('input');
			morManager.type = "text";
			morManager.size = "5";
			oTeacherTriTd16.appendChild(morManager);

			/*第十七列*/
			oTeacherTri.insertCell(16);
			var oTeacherTriTd17 = oTeacherTri.cells[16];
			oTeacherTriTd17.setAttribute("width", "3%");
			var morCulture = document.createElement('input');
			morCulture.type = "text";
			morCulture.size = "5";
			oTeacherTriTd17.appendChild(morCulture);

			/*第十八列*/
			oTeacherTri.insertCell(17);
			var oTeacherTriTd18 = oTeacherTri.cells[17];
			oTeacherTriTd18.setAttribute("width", "3%");
			var morArt = document.createElement('input');
			morArt.type = "text";
			morArt.size = "5";
			oTeacherTriTd18.appendChild(morArt);
			/*第十九列*/
			oTeacherTri.insertCell(18);
			var oTeacherTriTd19 = oTeacherTri.cells[18];
			oTeacherTriTd19.setAttribute("width", "3%");
			var morService = document.createElement('input');
			morService.type = "text";
			morService.size = "5";
			oTeacherTriTd19.appendChild(morService);
			/*第二十列*/
			oTeacherTri.insertCell(19);
			var oTeacherTriTd20 = oTeacherTri.cells[19];
			oTeacherTriTd20.setAttribute("width", "10%");
			var total = document.createElement('input');
			total.type = "text";
			total.size = "5";
			oTeacherTriTd20.appendChild(total);
			/*第二十一列*/
			oTeacherTri.insertCell(20);
			var oTeacherTriTd21 = oTeacherTri.cells[20];
			oTeacherTriTd21.setAttribute("width", "10%");
			var rank = document.createElement('input');
			rank.type = "text";
			rank.size = "5";
			oTeacherTriTd21.appendChild(rank);
			/*第二十二列*/
			oTeacherTri.insertCell(21);
			var oTeacherTriTd20 = oTeacherTri.cells[21];
			oTeacherTriTd20.setAttribute("width", "5%");
			var preClassLevel = document.createElement('select');
			var nLevel1 = document.createElement("option");
			nLevel1.appendChild(document.createTextNode("一等"));
			var nLevel2 = document.createElement("option");
			nLevel2.appendChild(document.createTextNode("二等"));
			var nLevel3 = document.createElement("option");
			nLevel3.appendChild(document.createTextNode("三等"));

			preClassLevel.appendChild(nLevel1);
			preClassLevel.appendChild(nLevel2);
			preClassLevel.appendChild(nLevel3);
			
			oTeacherTriTd20.appendChild(preClassLevel);

		}
		oTableTeacher.insertRow(i+2);
		var oTeacherTri = oTableTeacher.rows[i+2];
		oTeacherTri.setAttribute("bgcolor", "#FFFFFF");

		oTeacherTri.insertCell(0);
		var oTeacherTriTd1 = oTeacherTri.cells[0];
		oTeacherTriTd1.setAttribute("colspan", "22");
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