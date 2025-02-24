<!doctype html>
<html lang="en">

<head>
	<meta charset="utf-8">
	<title>jQuery plus.repeater: get value</title>
</head>

<body>
	<table style="border: 1px solid black;width: 98%;">
		<thead>
			<tr>
				<th style="width: 20px;">#no#</th>
				<th>link</th>
				<th>target</th>
			</tr>
		</thead>
		<tbody>
			<?php
			foreach ($_POST['links'] as $no => $link) {
				echo '<tr><td>', $no, '</td><td>', $link['href'], '</td><td>', $link['target'], '</td></tr>';
			}
			?>
		</tbody>
	</table>
</body>

</html>