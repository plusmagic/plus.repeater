<!doctype html>
<html>
   <head>
      <meta charset="utf-8">
	  <title>plus.repeater :: Edit Form From Old Datas</title>
	  <meta name="author" content="Pitt Phunsanit">
   </head>
   <body>
      <form action="getValue.php" method="post">
         <table border="1" width="98%">
            <thead>
               <tr>
                  <th width="20">#no#</th>
                  <th>#id#</th>
                  <th>link</th>
                  <th>target</th>
                  <th>Delete</th>
               </tr>
            </thead>
            <tbody id="repeaterA">
               <tr id="#id#" class="clone">
                  <td>#no#</td>
                  <td>#id#</td>
                  <td><input type="text" name="links[#no#][href]" size="100"></td>
                  <td>
                     <select name="links[#no#][target]">
                        <option>_blank</option>
                        <option>_parent</option>
                        <option>_self</option>
                        <option>_top</option>
                        <option>new</option>
                     </select>
                  </td>
                  <td align="left"><a class="remove">remove</a></td>
               </tr>
               <?php
$datas = array();
$datas[0]['href'] = 'http://plusmagi.com';
$datas[0]['target'] = '_self';
$datas[1]['href'] = 'http://getcrud.com';
$datas[1]['target'] = '_parent';
$datas[2]['href'] = 'http://jquery.com';
$datas[2]['target'] = '_blank';

$no = 0;
$options = array('_blank', '_parent', '_self', '_top', 'new');
foreach ($datas as $data) {
    $no++;
    echo '<tr id="repeaterA' . $no . '" class="clone">
                  	<td>' . $no . '</td>
                  	<td>repeaterA' . $no . '</td>
                  	<td><input type="text" name="links[' . $no . '][href]" value="' . $data['href'] . '" size="100"></td>
                  	<td><select name="links[' . $no . '][target]">';
    foreach ($options as $option) {
        if ($data['target'] == $option) {
            $selected = ' selected';
        } else {
            $selected = '';
        }
        echo '<option', $selected, '>', $option, '</option>';
    }
    echo '</select></td>
                  	<td align="left"><a class="remove">remove</a></td>
                  </tr>';
}
?>
            </tbody>
            <tfoot>
               <tr>
                  <td colspan="3">&nbsp;</td>
                  <td><input type="submit" name="isubmit" value="Submit"></td>
                  <td>&nbsp;</td>
               </tr>
            </tfoot>
         </table>
      </form>
      <script src="../vendor/components/jquery/jquery.min.js"></script>
      <script src="../src/plus.repeater.min.js"></script>
      <script>
         $(function(){
         	$.repeater({
         		selecter:'repeaterA',
         		start:<?php echo $no; ?>
         	});
         });
      </script>
   </body>
</html>