<?php


session_cache_limiter('nocache');
header('Expires: ' . gmdate('r', 0));

header('Content-type: application/json');

require_once('php-mailer/PHPMailerAutoload.php');

// Step 1 - Enter your email address below.
$email = 'yehor.mukhladi@eve.ua';

// If the e-mail is not working, change the debug option to 2 | $debug = 2;
$debug = 0;

$subject = 'Спасибо что воспользовались EveStudio';


$fields = array(
	0 => array(
		'text' => 'Имя Отправителя',
		'val' => $_POST['senderName']
	),
	1 => array(
		'text' => 'Почта Отправителя',
		'val' => $_POST['senderMail']
	),
	2 => array(
		'text' => 'Имя получателя',
		'val' => $_POST['recipientName']
	),
	3 => array(
		'text' => 'Почтка получателя',
		'val' => $_POST['recipientMail']
	),
	4 => array(
		'text' => 'Сообщение',
		'val' => $_POST['letterText']
	),
    5 => array(
        'text' => 'Номер картинки',
        'val' => $_POST['picture']
    )
);

// $message = 'Привет ' . htmlspecialchars($fields[0]['val'], ENT_QUOTES) . " Ваше поздравление скоро будет доставленно получателю)<br><br> Приятных праздников!! <br>\n";
$message = 'Привет ' . htmlspecialchars($fields[0]['val'], ENT_QUOTES) . " Ваше поздравление скоро будет доставленно получателю)<br><br> Приятных праздников!! <br>\n" . '<table width="320" cellspacing="0" cellpadding="0" border="0">
    <tr>
      <td rowspan="9" width="51%" height="150" style="height:150px;"><img src="https://evestudio.bitrix24.ua/docs/pub/0e298be6c238124ab5492ee4a4916d9b/showFile/?&token=3b5m5pps6pav" border="0" width="150" height="150" style="display: block;" alt="" /></td>
    </tr>
    <tr>
      <td colspan="4" height="16" style="height:16px; font-size: 12px;"><span style="color: #000000; font-size: 15px; font-family: "Arial";"><b>МАКСИМ ВОРОНЮК</b></span></td>
    </tr>
    <tr>
      <td colspan="4" height="16" style="height:16px; font-size: 12px;"><span style="color: #000000; font-size: 12px; font-family: "Arial";"><b>Інтернет-маркетолог</b></span></td>
    </tr>
    <tr>
      <td colspan="4" height="12" style="height:12px; font-size: 12px;"></td>
    </tr>
    <tr>
      <td colspan="4" height="16" style="height:16px; font-size: 12px;"><span style="font-size: 12px; font-family: "Arial";">095 227 25 25</span></td>
    </tr>
    <tr>
      <td colspan="4" height="16" style="height:16px; font-size: 12px;"><span style="font-size: 12px; font-family: "Arial";">044 227 26 26</span></td>
    </tr>
    <tr>
      <td colspan="4" height="16" style="height:16px; font-size: 12px;"><span style="font-size:12px; font-family: "Arial";">skype добавить</span></td>
    </tr>
    <tr>
      <td colspan="1" width="25" height="35" style="height:35px;"><a href="https://www.facebook.com/Eve.ua" target="_blank" style="text-decoration: none;"><img src="https://evestudio.bitrix24.ua/docs/pub/ea1b78a5122665cff6e1678978681f99/showFile/?&token=raase9vpenlw" border="0" width="22" height="22" style="display: block; height:22px;" alt="" /></a></td>
      <td colspan="1" width="25" height="35" style="height:35px;"><a href="https://www.youtube.com/user/EveStudio1" target="_blank" style="text-decoration: none;"><img src="https://evestudio.bitrix24.ua/docs/pub/5d0579893e4096fe48c837374f9ddaed/showFile/?&token=ub45ml2a3dh8" border="0" width="22" height="20" style="display: block; height:20px;" alt="" /></a></td>
      <td colspan="1" width="25" height="35" style="height:35px;"><a href="https://www.instagram.com/evestudio_ua/" target="_blank" style="text-decoration: none;"><img src="https://evestudio.bitrix24.ua/docs/pub/7c7d16ae0c26208d61c145e44e6e47a1/showFile/?&token=xqeyf4w8zb4k" border="0" width="22" height="22" style="display: block; height:22px;" alt="" /></a></td>
      <td colspan="1" width="65"></td>
    </tr>
    <tr style="border-top: solid 1px #000;">
      <td colspan="4"><a href="http://studio.eve.ua/" target="_blank" style="display: inline-block; width: 95%; color: #000000 !important; text-decoration: none; font-family: "Arial"; border-top: solid 1px #000;"><span style="color: #000000;"><b>studio.eve.ua</b></span></a></td>
    </tr>
</table>';
// foreach($fields as $field) {
// 	$message .= $field['text'].": " . htmlspecialchars($field['val'], ENT_QUOTES) . "<br>\n";
// }

$mail = new PHPMailer(true);

try {

	//$mail->SMTPDebug = $debug;                                 // Debug Mode

	// Step 2 (Optional) - If you don't receive the email, try to configure the parameters below:

	$mail->IsSMTP();                                         // Set mailer to use SMTP
	$mail->Host = 'smtp.yandex.ru';				       // Specify main and backup server
	$mail->SMTPAuth = true;                                  // Enable SMTP authentication
	$mail->Username = 'yehor.mukhladi@eve.ua';                    // SMTP username
	$mail->Password = 'EgorTheBest';                              // SMTP password
	$mail->SMTPSecure = 'tls';                               // Enable encryption, 'ssl' also accepted
	$mail->Port = 587;   								       // TCP port to connect to
	// $mail->SMTPAuth = false;
  //   $mail->SMTPSecure = false;

	$mail->AddAddress($_POST['senderMail']);	 						       // Add another recipient


	//$mail->AddCC('person3@domain.com', 'Person 3');          // Add a "Cc" address.
	//$mail->AddBCC('person4@domain.com', 'Person 4');         // Add a "Bcc" address.

	$mail->SetFrom($email, 'EveStudio');
// 	$mail->AddReplyTo($_POST['email'], $_POST['name']);

	$mail->IsHTML(true);                                  // Set email format to HTML

	$mail->CharSet = 'UTF-8';

	$mail->Subject = $subject;
	$mail->Body    = $message;

	$mail->Send();
	// $arrResult = array ('response'=>'Ваше сообщение было отправлено!');
	$arrResult = array ('thx');


} catch (phpmailerException $e) {
	$arrResult = array ('response'=>'error','errorMessage'=>$e->errorMessage());
} catch (Exception $e) {
	$arrResult = array ('response'=>'error','errorMessage'=>$e->getMessage());
}

if ($debug == 0) {
	echo json_encode($arrResult);
}
