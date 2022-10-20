$("#submit").click(function(){
    var fname = $("#fname").val();
    var lname = $("#lname").val();
    var email = $("#email").val();
    var bdate = $("#bdate").val();
    var pnumber = $("#pnumber").val();
    var password = $("#password").val();
    var cpassword = $("#confirm-password").val();

    if(fname == '' || lname == ''|| email == ''|| bdate == '' || pnumber == ''|| password == '' || cpassword == '' ){
        swal({
            title: "Fields Empty!!!",
            text: "Please check the other missing field!!",
            icon: "warning",
            button: "ok",
          });
    }else{
        swal({
            title: "Account Created!!",
            text: "Thanks for filling up! Your account has been successfully created.",
            icon: "success",
            button: "ok",
          });
    }
    
});