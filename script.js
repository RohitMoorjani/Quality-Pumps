function sendMail(){
    var tempParams={
        from_name: document.getElementById("name").value,
        from_mobile: document.getElementById("mobile").value,
        from_email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };
    emailjs.send('service_cfg3u27','template_j85ltrp',tempParams).then(function(res){
        alert("Success");
    })
}