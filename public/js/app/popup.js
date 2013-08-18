$(document).ready(function() {
	$(".closePopup").bind("click", function() {
		$('#popupDialog').modal('hide');
	});
	$(".savePopup").bind("click", function() {
		$("#adderError").show();
		try {
			var columnAdd = $("#columnAdd").val();
			addTableColumn($(".tabler"), columnAdd);
			$("#columnAdd").val("");
			$('#popupDialog').modal('hide');
		} catch (e) {
			$("#adderError").show();
		}

	});
});
