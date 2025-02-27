<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    // Recipient email address
    $to = "OrganicMe.contact@gmail.com"; 

    // Email headers
    $headers = "From: $name <$email>";
    $headers .= "Reply-To: $email";

    // Compose email message
    $email_message = "Subject: $subject\n";
    $email_message .= "From: $name\n";
    $email_message .= "Email: $email\n";
    $email_message .= "Message:\n$message\n";

    // Sending email
    if (mail($to, $subject, $message,)) {
        echo "Your message has been sent successfully. We will get back to you shortly.";
    } else {
        echo "Oops! There was an error sending your message. Please try again later.";
    }
 else {
    echo "Access denied!";
}

}
