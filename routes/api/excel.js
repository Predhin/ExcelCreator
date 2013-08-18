
/*
 * GET home page.
 */

exports.create = function(req, res) {
 var xlsx = require('node-xlsx');
	
	var rowArray=[];
	var rowCount=0;
	var columnCount=Object.keys(req.body).length;
	var rootObject=req.body;
	
	var row="",cell="";
	var i=0,cellValue="";
	var cellArray=[];
	/*First Row should be the headings */
	for(var column in rootObject)
		{
			//TODO:Find better way
			rowCount=(typeof rootObject[column]==="string")?1:rootObject[column].length;
			cellValue=column;
			cell={"value":cellValue,bold:1,fontSize: 10,hAlign: 'center',borders:{bottom:'DEE31D'},autoWidth:true};
			cellArray.push(cell);
		}
	//Add Heading Cells
	rowArray.push(cellArray);
	
	for(i=0;i<rowCount;i++)
	{
		cellArray=[];
		for(var column in rootObject)
		{
			cellValue=rowCount===1?rootObject[column]:rootObject[column][i];
			cell={"value":cellValue,"formatCode":"General"};
			cellArray.push(cell);
		}
		rowArray.push(cellArray);
	}
	
	
	var buffer = xlsx.build({worksheets: [
	  {"name":"Task Sheet", "data":rowArray, table: false}
	]}); // returns a buffer
	
	res.setHeader('Content-Type', 'application/vnd.openxmlformats');
    res.setHeader("Content-Disposition", "attachment; filename=" + "Tasks.xlsx");
    res.end(buffer, 'binary');
};
