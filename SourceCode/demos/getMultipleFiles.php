<!doctype html>
<html lang="en">

<head>
	<meta charset="utf-8">
	<title>jQuery plus.repeater: Uploading Multiple Files</title>
</head>

<body>
	<?php
	if (isset($_FILES['files'])) {	//print_r($_FILES['files']); exit();
		echo '<table width="98%"><thead><tr><th width="20">#no#</th><th>error</th><th>name</th><th>size</th><th>tmp_name</th><th>type</th><th>preview</th></tr></thead><tbody>';
		foreach ($_FILES['files']['name'] as $no => $name) {
			if ($_FILES['files']['error'][$no] == UPLOAD_ERR_OK) {
				move_uploaded_file($_FILES['files']['tmp_name'][$no], 'assets/' . $_FILES['files']['name'][$no]);
				echo '<tr><td>', $no, '</td><td>', $_FILES['files']['error'][$no], '</td><td>', $_FILES['files']['name'][$no], '</td><td>', $_FILES['files']['size'][$no], '</td><td>', $_FILES['files']['tmp_name'][$no], '</td><td>', $_FILES['files']['type'][$no], '</td><td><img src="../assets/', $_FILES['files']['name'][$no], '" width="50"></td></tr>';
			}
		}
		echo '</tbody>
</table>';
	}
	?>
</body>

</html>