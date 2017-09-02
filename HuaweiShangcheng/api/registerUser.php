<?php
    header("Content-type:text/html;charset=utf-8");
    function doPost(){
        $success=0;
        $conn=new mysqli("localhost","root","","usercenter");
        mysqli_query($conn,"set character set 'utf8'");//读库
        mysqli_query($conn,'set names utf8');//写库
        $value="'".$_POST["user"]."','".$_POST["mobile"]."'";
//      "','".$_POST["mail"]."','".$_POST["secret"]."','".$_POST["name"].
//      "';";
        $value1="'".$_POST["user"]."'";
		$result=$conn->query("select * from t_user where ".$_POST["user"].";");
        $exist=0;
        while($row = mysqli_fetch_assoc($result)){
            $exist=1;
        }
		if($exist=1){
			$success=2;
		}else{
	        if($conn->query("insert into t_user (user,mobile) values (".$value.");")==true){
	            $success=1;
	        }
	        $conn->close();
		}
        echo $success;
    }
    doPost();
?>


