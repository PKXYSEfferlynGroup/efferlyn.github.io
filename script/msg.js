var text = document.getElementById('msg_ipt');
var commit_btn = document.getElementById('msg_commit');
// 获取当前日期，使用new Date()方法
var currentDate = new Date();

// 获取当前年份
var year = currentDate.getFullYear();

// 获取当前月份，从0开始计算
var month = currentDate.getMonth() + 1;

// 获取当前日期
var date = currentDate.getDate();

var datestr = year + "-" + month + "-" + date;
var ul = document.getElementById('msg_li');

function commit(){
	
	if (text.value == ""){
		alert("您没有输入任何内容！");
	}
	else{
		var new_item = document.createElement("li");
		new_item.innerHTML = datestr + " | " + text.value;
		text.value = "";
		ul.insertBefore(new_item, ul.children[0]);
	}
}

commit_btn.onClick = function(){
	console.log("triggered");
	commit();
};