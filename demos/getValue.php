<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>plus.repeater :: get value</title>
</head>
<body>
<table border="1" width="98%">
	<thead>
		<tr>
			<th width="20">No</th>
			<th>link</th>
			<th>target</th>
		</tr>
	</thead>
	<tbody>
		<?php
foreach($_POST['links'] as $no => $link)
{
	echo '<tr><td>',$no,'</td><td>',$link['href'],'</td><td>',$link['target'],'</td></tr>';
}
?>
	</tbody>
</table>
</body>
</html>
