//根据当前周数（按7天计算），获取第一位数字
//to do：根据自然周来计算
function getImgNum() {
	// var today = new Date().getDate() / 10;
	// return today.toFixed(1).split('.')[1];

	var d = new Date();
	var str = d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate();
	var week = (new Date(str).getTime() - new Date('2017-1-1').getTime()) / (1000 * 60 * 60 * 24 * 7);
	var num = week / 10;
	return num.toFixed(1).split('.')[1];
}
