	var d=new Date();
	var month=d.getMonth();


function nm()
{

	var mon=['jan','feb','mar','apr','may','june','july','august','sept','october','nov','dec'];
	month++;
	var year=d.getFullYear();
	var firstdate=mon[month]+" "+1+" "+ year;
	var mtfday=new Date(firstdate).toDateString();
	var fday=mtfday.substring(0,3);
	var dayname=['Sun','Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
	var dayno=dayname.indexOf(fday);
	var days= new Date(year,month+1,0).getDate();
	var cal=getcal(dayno,days);
	document.getElementById('today').innerHTML=mon[month]+" "+year;
	document.getElementById('caltable').appendChild(cal);


}

function cali()
{	
	var mon=['jan','feb','mar','apr','may','june','july','august','sept','august','nov','dec'];
	var month=d.getMonth();
	var year=d.getFullYear();
	var firstdate=mon[month]+" "+1+" "+ year;
	var mtfday=new Date(firstdate).toDateString();
	var fday=mtfday.substring(0,3);
	var dayname=['Sun','Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
	var dayno=dayname.indexOf(fday);
	var days= new Date(year,month+1,0).getDate();
	var cal=getcal(dayno,days);
	document.getElementById('today').innerHTML=mon[month]+" "+year;
	document.getElementById('caltable').appendChild(cal);

}
function getcal(dayno,days)
{
	var table=document.createElement('table');
	var tr=document.createElement('tr');
	for(var c=0;c<=6;c++)
	{
		var td=document.createElement('td');
		td.innerHTML="SMTWTFS"[c];
		tr.appendChild(td);
	}
	table.appendChild(tr);
	tr=document.createElement('tr');
	var c;
	for(c=0;c<=6;c++)
	{
		if(c==dayno)
		{
			break;
		}
		var td=document.createElement('td');
		td.innerHTML=" ";
		tr.appendChild(td);
	}
	var count=1;
	for(;c<=6;c++)
	{
		var td=document.createElement('td');
		td.innerHTML=count;
		count++;
		tr.appendChild(td);
	}
	table.appendChild(tr);
	for(var r=3;r<=7;r++)
	{
		tr=document.createElement('tr');
		for(var c=0;c<=6;c++)
		{
			if(count>days)
			{
				table.appendChild(tr);
				return table;
			}
			var td=document.createElement('td');
			td.innerHTML=count;
			count++;
			tr.appendChild(td);
		}
		table.appendChild(tr);

	}

	return table;	




}


window.addEventListener("load", cali);    