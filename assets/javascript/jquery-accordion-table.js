$(document).on('click', '.accordion-displayed', accordionRowHide);
$(document).on('click', '.accordion-hidden', accordionRowDisplay);

function accordionRowHide() {
	$(this).next('tr').fadeOut();
	$(this).removeClass('accordion-displayed');
	$(this).addClass('accordion-hidden');
}

function accordionRowDisplay() {
	$(this).next('tr').fadeIn();
	$(this).removeClass('accordion-hidden');
	$(this).addClass('accordion-displayed');
}