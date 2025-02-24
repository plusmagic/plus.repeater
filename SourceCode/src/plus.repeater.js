/*
<!---=-=-=-=-=-=-=-[Plus Repeater]-=-=-=-=-=-=-=--->
plus.repeater v.1.5.1
form repeater tools
====================================================
Copyright (c) 2014 by Pitt Phunsanit
Phunsanit@hotmail.com
http://pitt.plusmagi.com/plus-repeater

You can modify. And distribution of this tool.
But the tool and intellectual property rights belong to me alone.
Without responsible to any damages from use tool
Please send comments and editing suggestions.
Back to the developer for the benefit of everyone.
*/

jQuery.repeater = function () {
	var options = $.extend({
		callback: function () { },
		deepWithDataAndEvents: 'default',
		default: 0,
		max: 10,
		min: 1,
		parent: 1,
		selecter: 'repeater',
		start: 0,
		withDataAndEvents: false
	}, arguments[0] || {});

	if (options.deepWithDataAndEvents == 'default') {
		options.deepWithDataAndEvents = options.withDataAndEvents;
	}

	function range() {
		var count = $('#' + options.selecter + ' .clone').length;
		if (count < (options.min + 1)) {
			for (a = count; a <= options.min; a++) {
				repeat();
			}
		}
		else if (count == (options.max + 1)) {
			return true;
		}
		else {
			repeat();
		}
	}

	function repeat() {
		++options.start;
		id = options.selecter + options.start;
		html = $('#' + options.selecter + ' .clone:first').html().replace(/#no#/g, options.start).replace(/#id#/g, id);
		$('#' + options.selecter + ' .clone:first').clone(options.withDataAndEvents, options.deepWithDataAndEvents).attr('id', id).html(html).insertAfter($('#' + options.selecter + ' .clone:last')).show();
	}

	this.status = function () {
		parent = $('#' + options.selecter + ' .clone').parentsUntil(' .clone').attr('id').remove();
	}

	if (options.default != 0) {
		var count = $('#' + options.selecter + ' .clone').length;
		for (a = count; a <= options.default; a++) {
			repeat();
		}
	}
	else {
		range();
	}
	$('#' + options.selecter + ' .clone:first').hide();

	$('#' + options.selecter).on('click', '.clone:last', function () {
		range();
	});

	$('#' + options.selecter).on('click', '.remove', function (event) {
		parent = $(this).parents('.clone').remove();
	});

	options.callback.call(this);
	return $('#' + options.selecter);
}
