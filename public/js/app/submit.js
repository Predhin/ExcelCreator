$(function() {
	$("#submit_tableForm").click(function() {
		var frm = $('#tableForm');
		// console.log("Ready to submit date : "+frm.serialize());
		/* Post Form */
		frm.submit();
	});
});