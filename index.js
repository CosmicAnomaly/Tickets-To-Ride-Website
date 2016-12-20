/**
 * @author Scott
 */


$(document).ready(function(){
	
	var totalDue = 0;
	var discount = 0;
	var groupName;
	var ticketType;
	var numberOfTickets;
	var paymentType;
	
	function setValues(){

	}

	
	function underTwelve(numberOfTickets, ticketType, groupName)
	{
		if (ticketType == 0)
		{
			totalDue += numberOfTickets * 1.00;
				if (totalDue > 42.00)
				{
					discount = totalDue * .10;
					totalDue -= discount;
					alert("Group name: " + groupName + "\n" +
							"Tickets purchased: " + numberOfTickets + "\n" +
							"Type of tickets: " + $( "#ticketSlider option:selected").text() + "\n" + 
							"Payment type: " + $( "#paymentSlider option:selected").text() + "\n" +
							"Age group: " + $( "#ageSlider option:selected").text() + "\n" + 
							"Discount: $" + discount + "\n" + 
							"Total: $" + totalDue);
				}
				else
				{
					alert("Group name: " + groupName + "\n" +
							"Tickets purchased: " + numberOfTickets + "\n" +
							"Type of tickets: " + $( "#ticketSlider option:selected").text() + "\n" + 
							"Payment type: " + $( "#paymentSlider option:selected").text() + "\n" +
							"Age group: " + $( "#ageSlider option:selected").text() + "\n" + 
							"Discount: $" + discount + "\n" + 
							"Total: $" + totalDue);
				}
		}
		else
		{
			totalDue += numberOfTickets * 18.00;
				if (totalDue > 42.00)
				{
					discount = totalDue * .10;
					totalDue -= discount;
					alert("Group name: " + groupName + "\n" +
							"Tickets purchased: " + numberOfTickets + "\n" +
							"Type of tickets: " + $( "#ticketSlider option:selected").text() + "\n" + 
							"Payment type: " + $( "#paymentSlider option:selected").text() + "\n" +
							"Age group: " + $( "#ageSlider option:selected").text() + "\n" + 
							"Discount: $" + discount + "\n" + 
							"Total: $" + totalDue);
				}
				else
				{
					alert("Group name: " + groupName + "\n" +
							"Tickets purchased: " + numberOfTickets + "\n" +
							"Type of tickets: " + $( "#ticketSlider option:selected").text() + "\n" + 
							"Payment type: " + $( "#paymentSlider option:selected").text() + "\n" +
							"Age group: " + $( "#ageSlider option:selected").text() + "\n" + 
							"Discount: $" + discount + "\n" + 
							"Total: $" + totalDue);
				}
		}
	}//underTwelve

	function overThirteen(numberOfTickets, ticketType, groupName)
	{
		
		if (ticketType == 0)
		{
			totalDue += numberOfTickets * 1.50;
				if (totalDue > 42.00)
				{
					discount = totalDue * .10;
					totalDue -= discount;
					alert("Group name: " + groupName + "\n" +
							"Tickets purchased: " + numberOfTickets + "\n" +
							"Type of tickets: " + $( "#ticketSlider option:selected").text() + "\n" + 
							"Payment type: " + $( "#paymentSlider option:selected").text() + "\n" +
							"Age group: " + $( "#ageSlider option:selected").text() + "\n" + 
							"Discount: $" + discount + "\n" + 
							"Total: $" + totalDue);
				}
				else
				{
					alert("Group name: " + groupName + "\n" +
							"Tickets purchased: " + numberOfTickets + "\n" +
							"Type of tickets: " + $( "#ticketSlider option:selected").text() + "\n" + 
							"Payment type: " + $( "#paymentSlider option:selected").text() + "\n" +
							"Age group: " + $( "#ageSlider option:selected").text() + "\n" + 
							"Discount: $" + discount + "\n" + 
							"Total: $" + totalDue);
				}
		}
		else
		{
			totalDue += numberOfTickets * 22.00;
				if (totalDue > 42.00)
				{
					discount = totalDue * .10;
					totalDue -= discount;
					alert("Group name: " + groupName + "\n" +
							"Tickets purchased: " + numberOfTickets + "\n" +
							"Type of tickets: " + $( "#ticketSlider option:selected").text() + "\n" + 
							"Payment type: " + $( "#paymentSlider option:selected").text() + "\n" +
							"Age group: " + $( "#ageSlider option:selected").text() + "\n" + 
							"Discount: $" + discount + "\n" + 
							"Total: $" + totalDue);
				}
				else
				{
					alert("Group name: " + groupName + "\n" +
							"Tickets purchased: " + numberOfTickets + "\n" +
							"Type of tickets: " + $( "#ticketSlider option:selected").text() + "\n" + 
							"Payment type: " + $( "#paymentSlider option:selected").text() + "\n" +
							"Age group: " + $( "#ageSlider option:selected").text() + "\n" + 
							"Discount: $" + discount + "\n" + 
							"Total: $" + totalDue);
				}
		}
	}//overThirteen

	$("#btnSubmit").click(function() {
		//setValues();
		
		var numberOfTickets = Number(document.getElementById("numTickets").value);
		var groupName = $('#groupName').val();
		var ticketType = $('#ticketSlider').val();
		var ageGroup = $('#ageSlider').val();
		var paymentType = $('#paymentSlider').val();
		
		if (numberOfTickets > 20 | numberOfTickets < 1)
		{
			alert("You MUST enter between 1 and 20 tickets only!");
		}
		else if ($('#groupName').val() == '')
		{
			alert("You MUST enter a group name!");
		}
		else
		{
				if (ageGroup == 0)
			{
				underTwelve(numberOfTickets, ticketType, groupName);
			}
				else
			{
				overThirteen(numberOfTickets, ticketType, groupName);
			}
		}
		
	});
	


});