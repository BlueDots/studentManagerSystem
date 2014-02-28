// JavaScript Document
(function(){
	 $.datepicker.regional['zh-TW'] = {
		closeText: '�P�]',
		prevText: '&#x3C;����',
		nextText: '����&#x3E;',
		currentText: '����',
		monthNames: ['һ��','����','����','����','����','����',
		'����','����','����','ʮ��','ʮһ��','ʮ����'],
		monthNamesShort: ['һ��','����','����','����','����','����',
		'����','����','����','ʮ��','ʮһ��','ʮ����'],
		dayNames: ['������','����һ','���ڶ�','������','������','������','������'],
		dayNamesShort: ['����','��һ','�ܶ�','����','����','����','����'],
		dayNamesMin: ['��','һ','��','��','��','��','��'],
		weekHeader: '��',
		dateFormat: 'yy/mm/dd',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: true,
		yearSuffix: '��'};
	$.datepicker.setDefaults($.datepicker.regional['zh-TW']);
 	$( ".datepicker" ).datepicker({
		  changeYear: true
		});
 
 	$( ".datepicker" ).datepicker( "option", "showAnim", "slideDown" );
 
 	 $( ".datepicker" ).datepicker( $.datepicker.regional[ "zh-TW" ] );
		
		 
  })();