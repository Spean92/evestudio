<?php


session_cache_limiter('nocache');
header('Expires: ' . gmdate('r', 0));

header('Content-type: application/json');

require_once('php-mailer/PHPMailerAutoload.php');

// Step 1 - Enter your email address below.
$email = 'studio@eve.ua';

// If the e-mail is not working, change the debug option to 2 | $debug = 2;
$debug = 0;

$subject = 'Новый лид c формы Камчадала!';

//if ($_POST['design'] == true) {
//    $design => "интересно";
//} else {
//    $design => "Не интересно";
//}
$fields = array(
	0 => array(
		'text' => 'Имя',
		'val' => $_POST['senderName']
	),
	1 => array(
		'text' => 'Почта',
		'val' => $_POST['senderMail']
	),
	2 => array(
		'text' => 'Телефон',
		'val' => $_POST['senderPhone']
	),
	4 => array(
		'text' => 'Сообщение',
		'val' => $_POST['letterText']
	),
	5 => array(
	    'text' => 'Видео',
        'val' => $_POST['video']
	),
	6 => array(
        'text' => 'Веб',
        'val' => $_POST['web']
    ),
    7 => array(
        'text' => 'Дизайн',
        'val' => $_POST['design']
    ),
    8 => array(
        'text' => 'Интернет',
        'val' => $_POST['internet']
    )
);

$message = '';

foreach($fields as $field) {
	$message .= $field['text'].": " . htmlspecialchars($field['val'], ENT_QUOTES) . "<br>\n";
}

$mail = new PHPMailer(true);

try {

	//$mail->SMTPDebug = $debug;                                 // Debug Mode

	// Step 2 (Optional) - If you don't receive the email, try to configure the parameters below:

	$mail->IsSMTP();                                         // Set mailer to use SMTP
	$mail->Host = 'smtp.yandex.ru';				       // Specify main and backup server
	$mail->SMTPAuth = true;                                  // Enable SMTP authentication
	$mail->Username = 'studio@eve.ua';                    // SMTP username
	$mail->Password = '1234567890';                              // SMTP password
	$mail->SMTPSecure = 'tls';                               // Enable encryption, 'ssl' also accepted
	$mail->Port = 587;   								       // TCP port to connect to
	// $mail->SMTPAuth = false;
  //   $mail->SMTPSecure = false;

	$mail->AddAddress('nataliia.shevniuk@eve.ua');	 						       // Add another recipient
	$mail->AddAddress('yehor.mukhladi@eve.ua');
//	$mail->AddAddress('studio@eve.ua');


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
