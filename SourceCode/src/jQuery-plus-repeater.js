/*
<!---=-=-=-=-=-=-=-[Plus Repeater]-=-=-=-=-=-=-=--->
jQuery plus.repeater v.1.5.2
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
	let options = $.extend({
		callback: function () { },
		container: 'repeater',
		deepWithDataAndEvents: 'default',
		default: 0,
		max: 10,
		min: 1,
		parent: 1,
		start: 0,
		withDataAndEvents: false
	}, arguments[0] || {});

	if (options.deepWithDataAndEvents == 'default') {
		options.deepWithDataAndEvents = options.withDataAndEvents;
	}

	function range() {
		let count = $('#' + options.container + ' .clone').length;
		if (count < (options.min + 1)) {
			for (let a = count; a <= options.min; a++) {
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

		let id = options.container + options.start;
		let html = $('#' + options.container + ' .clone:first').html().replace(/#no#/g, options.start).replace(/#id#/g, id);
		$('#' + options.container + ' .clone:first').clone(options.withDataAndEvents, options.deepWithDataAndEvents).attr('id', id).html(html).insertAfter($('#' + options.container + ' .clone:last')).show();
	}

	this.status = function () {
		parent = $('#' + options.container + ' .clone').parentsUntil(' .clone').attr('id').remove();
	}

	if (options.default != 0) {
		let count = $('#' + options.container + ' .clone').length;
		for (let a = count; a <= options.default; a++) {
			repeat();
		}
	} else {
		range();
	}

	$('#' + options.container + ' .clone:first').hide();

	$('#' + options.container).on('click', '.clone:last', function () {
		range();
	});

	$('#' + options.container).on('click', '.remove', function (event) {
		parent = $(this).parents('.clone').remove();
	});

	options.callback.call(this);

	return $('#' + options.container);
}
