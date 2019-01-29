<?php
	if (isset($_POST['email']) && isset($_POST['text'])) {
		
		$name      = "New Client";
		$email     = $_POST['email']; 
		$message   = $_POST['text']; 
		$email_to  = "rmnkot@gmail.com";
		$subject   = "Contact message from client";
		$body      = '<html>
										<body>
											<h2>Contact message from new client</h2>
											<hr/>
											<p>Email: <strong>' . $email . '</strong></p>
											<p>Message: <strong>' . $message . '</strong></p>
										</body>
									</html>';
		
		//headers
		$headers   = "From: " . $name . " <" . $email . ">" . "\r\n" .
					 "Reply-To: " . $email . "\r\n" .
					 "MIME-Version: 1.0" . "\r\n" . 
					 "Content-Type: text/html; charset=UTF-8"; 
		//send
		mail($email_to, $subject, $body, $headers, "-frmnkot@gmail.com");
	}
?>
	
