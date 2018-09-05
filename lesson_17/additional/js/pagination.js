$(document).ready(function(){
	var personData; // data to be retrieved from the json file
	var recordsPerPage; // user input of hwo many records to display per page
	var totalRecords; // length of the data object
	$.getJSON('persons.json', function(data) {
		personData = data;
		totalRecords = personData.length;
	});
	//hide the table initially
	$('#personTable').hide();
	function displayTable(pageNum){
		/** Display Table **/
		var startIndex = (pageNum-1) * recordsPerPage;
		var endIndex = startIndex + recordsPerPage;
		var pageWisePersonData = personData.slice(startIndex,endIndex);
		var html = "";
		for(var i = 0; i < pageWisePersonData.length; i++){
			 html += "<tr>";
			 html +="<td>" +  pageWisePersonData[i].name + "</td>";
			 html +="<td>" +  pageWisePersonData[i].gender + "</td>";
			 html += "<td>" + pageWisePersonData[i].age + "</td>";
			 html += "</tr>";
		}
		$('#personTabBody').html(html);
		$('#personTable').show();
	}
	$("ul.pagination").on('click',function(e){
			//get the text from the button that is clicked
			var pageNum = parseInt($(e.target).text());
			$('ul li a.active').removeClass('active');
			$(e.target).addClass("active");
			displayTable(pageNum);
	});
 $('.recordsPerPage').change(function(){
	 /** pagination list **/
	 $('#personTab').hide();
	 var list = "";
	 recordsPerPage = parseInt($(this).val());
	 var totalPages = Math.ceil(totalRecords/recordsPerPage);
	 for(var i = 1; i <= totalPages; i++){
		 list += "<li><a href='#'>"+ i +"</a></li>";
	 }
	 $('ul').html(list);
	 //add active class to the first pagination link
	 $("ul li a:first").addClass("active");
	 // always show the first page to user
	 displayTable(1);
 });
});