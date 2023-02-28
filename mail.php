


   <?php 

  $name = filter_var($_POST['name'], FILTER_SANITIZE_EMAIL); 

  $subject =filter_var($_POST['subject'], FILTER_SANITIZE_STRING);   
  $visitor_email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL) ;
  $message = filter_var($_POST['message'], FILTER_SANITIZE_STRING) ;
  echo $name . " " . $visitor_email . " " . $message;
  mail("ekatoart@gmail.com","My subject",$msg);

?> 