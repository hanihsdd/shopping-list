$(document).ready(function () {

	$('form').submit(function(event) {

	//prevent form from submitting - unsure how this works
	event.preventDefault();
	console.log('prevent default form behaviour');

	addItem();

	});



	//remove item
	$('i.remove').on('click', function() {
		$(this).closest('li').remove();
		console.log('remove');
	});


	//check or uncheck an item
	$('i.checkbox').on('click', function () {
		if($(this).closest('li').hasClass('checked')) {
			$(this).closest('li').removeClass('checked');
			$(this).removeClass('fa-check-square-o');
			$(this).addClass('fa-square-o');
			console.log('unchecked');
		}
		else {
			$(this).closest('li').addClass('checked');
			$(this).removeClass('fa-square-o');
			$(this).addClass('fa-check-square-o');
			console.log('checked');
		}
	});


	//FUNCTION addItem
	function addItem() {

		var newItem = $('#add-item').val();

		$('.shopping-list').prepend('<li><i class="fa fa-square-o checkbox"></i>' + newItem + '<i class="remove fa fa-times"></li>');
		console.log('new item added');

		//Clear input after submit
		$('#add-item').val('');
		console.log('input is cleared');
	}





//Ending doc ready function
});