$(document).ready(function($) {
	// trigger event when button is clicked
	$(".addbutton").click(function() {
		// add new row to table using addTableRow function
		addTableRow($(".tabler"));
		// prevent button redirecting to new page
		return false;
	});
	// function to add a new row to a table by cloning the last row and
	// incrementing the name and id values by 1 to make them unique
	function addTableRow(table) {
		// clone the last row in the table
		var $tr = $(table).find("tbody tr:last").clone();
		// get the name attribute for the input and select fields
		$tr.find("input").attr("id", function() {
			var parts = this.id.match(/(\D+)(\d+)$/);
			return parts[1] + (++parts[2]);
		}).attr("value", function() {
			/* clear value */
			// TODO:Find a better way, currently assuming all input fields have
			// value attribute
			this.value = "";
		});
		// append the new row to the table
		$(table).find("tbody tr:last").after($tr);
	}

	// trigger event when button is clicked
	$(".addColumn").click(function() {
		$('#static').modal({
			show : true,
			backdrop : true,
			keyboard : true
		});
	});

});
function addTableColumn(table, value) {
	if ($(table).find("[name='" + value + "']").length === 0) {
		$(table).find("thead :last").after("<th>" + value + "</th>");
		$(table).find("tbody tr").each(
				function(index, tr) {
					$(tr).append(
							"<td>" + "<input name='" + value + "' id='" + value + index
									+ "' type='text' class='form-control' placeholder='Enter " + value + "'></input>" + "</td>");
				});
	} else {
		throw new Error("Element with same name exists", "Error");
	}
}
