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

$message = 'Привет ' . htmlspecialchars($fields[0]['val'], ENT_QUOTES) . " Ваше поздравление скоро будет доставленно получателю)<br><br> Приятных праздников!! <br>\n";

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
