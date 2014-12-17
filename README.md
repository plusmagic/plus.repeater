What's plus.repeater?
----------------

plus.repeater is simple jQuery for make your form can copy itself to new input or other object include label, image and other object when user focus on last copied.

Get Started
----------------
1. Include jQuery

	```html
	<script src="//code.jquery.com/jquery-2.1.1.min.js"></script>
	```

	>Requires jQuery 1.7+

2. Include plugin's code

	```html
	<script src="/path/to/plus.repeater.js"></script>
	```

3. Include id for parent node and class="clone" to yours code for use as template for example:

	```html
	<tbody id="repeaterA">
		<tr id="#id#" class="clone">
			<td>#no#</td>
			<td>#id#</td>
			<td><input type="text" name="links[#no#][href]" size="100"></td>
			<td align="left"><a class="remove">remove</a></td>
		</tr>
	</tbody>
	```

4. Call the plugin

	```javascript
	$(function(){
		$.repeater({
			selecter:'repeaterA'
		});
	});
	```

Options
----------

| Name                  | Default                    | Description                                                                                                                                                                                      |
|-----------------------|----------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| callback              |                            | Callback function.                                                                                                                                                                               |
| deepWithDataAndEvents | value of withDataAndEvents | A Boolean indicating whether event handlers and data for all children of the cloned element should be copied. By default its value matches the first argument's value (which defaults to false). |
| default               | 0                          | Default number of copy.                                                                                                                                                                          |
| max                   | 10                         | Maximum number of copy.                                                                                                                                                                          |
| min                   | 1                          | Minimum number of copy.                                                                                                                                                                          |
| parent                | 1                          | Number of parent.                                                                                                                                                                                |
| selecter              | repeater                   | ID of parent node.                                                                                                                                                                               |
| start                 | 0                          | A number for add ID to each copy.                                                                                                                                                                |
| withDataAndEvents     | false                      | A Boolean indicating whether event handlers should be copied along with the elements. As of jQuery 1.4, element data will be copied as well.                                                     |

Tags
----------
| Code | Description      |
|------|------------------|
| #id# | ID of each copy. |
| #no# | Copy No.         |

## Demo
Here is the link to the [demo][demo]
[demo]: http://plusmagi.com/plus-repeater

## Bugs
For bug reports, questions, feature requests, or other suggestions please create an [issue][issue] on GitHub.
[issue]: https://github.com/plusmagic/plus.repeater/issues/new

## Author
| [Pitt Phunsanit](http://plusmagi.com) |
![Alt text](http://pitt.plusmagi.com/pittphunsanit.jpg "พิชญ์ พันธุ์สนิท")

## License
<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" href="http://purl.org/dc/dcmitype/Text" property="dct:title" rel="dct:type">plus.repeater</span> by <a xmlns:cc="http://creativecommons.org/ns#" href="http://plusmagi.com/plus-repeater/" property="cc:attributionName" rel="cc:attributionURL">pitt phunsanit</a> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>.<br />Based on a work at <a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/plusmagic/plus.repeater" rel="dct:source">https://github.com/plusmagic/plus.repeater</a>.
