$document.ready( function(){
	 var table = $('#datatables-4').DataTable({
		         "sAjaxSource": "maindashboard.matawi",
		         "sAjaxDataProp": "";
	             "order": [[ 0, "asc" ]],
	             "aoColumns": [
	            	 {"mData": "organ.name"},
        	         {"mData": "region.name"},
        	         {"mData": "district.name"},
        	         {"mData": "memberCount"},
        	         {"mData": " "},
        	         {"mData": "startDate"},
        	         {"mData": " "}
	            	         
	             ]
	 })
});