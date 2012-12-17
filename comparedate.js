/* compare given timestamp with current date - return giventime if greater */

var given_date = "1354514460000";
var datecomparereturn = compare_Date(given_date);

function compare_Date(gtimestamp)
{
  var g_timestamp = gtimestamp;
	var g_fulldate= new Date(g_timestamp);
	var g_year = g_fulldate.getFullYear();
	var g_month = g_fulldate.getMonth();
	var g_date = g_fulldate.getDate();

	var c_fulldate= new Date();
	var c_year = c_fulldate.getFullYear();
	var c_month = c_fulldate.getMonth();
	var c_date = c_fulldate.getDate();

	var gdatum = new Date(Date.UTC(g_year,g_month,g_date));
	var gdatum_stamp = gdatum.getTime()/1000;

	var cdatum = new Date(Date.UTC(c_year,c_month,c_date));
	var cdatum_stamp = cdatum.getTime()/1000;

	if(gdatum_stamp < cdatum_stamp ){
		return(0);
	}else{
		return(1);
	}
}
