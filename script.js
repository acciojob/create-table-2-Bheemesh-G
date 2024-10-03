function createTable() {
    //Write your code here

  var rows = prompt("Input number of rows");
  var columns = prompt("Input number of columns");
  var table = document.getElementById('myTable');

	for(let i=0;i<rows;i++)
		{
			var newRow = table.insertRow();
			for(let j=0;j<columns;j++)
				{
					var newCell = newRow.insertCell(j);
					newCell.textContent = "Row-"+i+" "+"Column-"+j;
				}
		}
	
  
}
