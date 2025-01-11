<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/Exception.php';
require 'phpmailer/src/SMTP.php'; // Always include this for SMTP

$mail = new PHPMailer();
$mail->CharSet = 'UTF-8';

// Use SMTP
$mail->isSMTP();
$mail->SMTPDebug = 0; // 0 for production
$mail->Debugoutput = 'html';

// Gmail SMTP configuration
$mail->Host = 'smtp.gmail.com';
$mail->Port = 465; // Use 465 with SSL or 587 with TLS
$mail->SMTPSecure = 'ssl'; // For 465, use 'ssl'; for 587, use 'tls'
$mail->SMTPAuth = true;
$mail->Username = 'parthbuilds@gmail.com'; // Your Gmail address
$mail->Password = '';

// Form Fields Value Variables
$name = htmlspecialchars($_POST['name']);
$email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
$subject = htmlspecialchars($_POST['subject']);
$phone = htmlspecialchars($_POST['phone']);
$message = htmlspecialchars($_POST['message']);
$message = nl2br($message);

// From email address and name
$mail->From = 'parthbuilds@gmail.com'; // Use your authenticated email
$mail->FromName = $name;

// Recipient
$mail->addAddress('parthbuilds@gmail.com');

// Reply-to
$mail->addReplyTo($email, $name);

// Email format
$mail->isHTML(true);
$body_message = "Name: " . $name . "<br>";
$body_message .= "Subject: " . $subject . "<br>";
$body_message .= "Email: " . $email . "<br>";
$body_message .= "Message: " . nl2br($message) . "<br>";

// Email subject and body
$mail->Subject = "New Message from $name";
$mail->Body = $body_message;

// Send email
if (!$mail->send()) {
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'Message sent!';
}
