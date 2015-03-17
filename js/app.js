$(document).ready(function () {

	countItems();

	$('form').submit(function(event) {

	//prevent form from submitting - unsure how this works
	event.preventDefault();
	console.log('prevent default form behaviour');

	addItem();
	countItems();

	});



	//remove item
	$(document).on('click', 'i.remove', function() {
		$(this).closest('li').remove();
		console.log('remove');
		countItems();		
	});


	//check or uncheck an item
	$(document).on('click', 'i.checkbox', function () {
		if($(this).closest('li').hasClass('checked')) {
			$(this).closest('li').removeClass('checked');
			$(this).removeClass('fa-check-square-o');
			$(this).addClass('fa-square-o');
			countItems();
			console.log('unchecked');
		}

		else {
			$(this).closest('li').addClass('checked');
			$(this).removeClass('fa-square-o');
			$(this).addClass('fa-check-square-o');
			countItems();
			console.log('checked');
		}
		
	});



	console.log($('.shopping-list li').length);

	function countItems() {

		var itemsNumber = $('.shopping-list').find('li').length;
		$('.number-1').text(itemsNumber);

		var itemsDone = $('.shopping-list').find('li.checked').length;
		$('.number-2').text(itemsDone);

		var itemsToGo = itemsNumber - itemsDone;
		$('.number-3').text(itemsToGo);
		if(itemsToGo > 0) {
			$('.number-3').parent('li').css('background-color', '#E89089');
		}
		else {
			$('.number-3').parent('li').css('background-color', '#7DB4B5');
		}
	
}

	//FUNCTION addItem
	function addItem() {

		var newItem = $('#add-item').val();

		$('.shopping-list').prepend('<li><i class="fa fa-square-o checkbox"></i>' + newItem + '<i class="remove fa fa-times"></li>');
		console.log('new item added');

		//Clear input after submit
		$('#add-item').val('');
		console.log('input is cleared');

	}




	//FOCUS behaviour for + icon

	//Click on + icon to focus on input
	$('i.fa-plus').on('click', function () {
		$('#add-item').focus();
	})

	//+ icon adds class on focus
	$(document).on('focusin', '#add-item', function() {
		$('i.fa-plus').addClass('icon-click');
	});

	//+ icon goes back to default state on focusout
	$(document).on('focusout', '#add-item', function() {
		if($('i.fa-plus').hasClass('icon-click')) {
			$('i.fa-plus').removeClass('icon-click');
		}
	});

	



	//Hide p.message when there are list items


//Ending doc ready function
});