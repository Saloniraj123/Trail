function hello(){
    var name=document.getElementById("name").value;
    var sunject=document.getElementById("subject").value;
    var email=document.getElementById("email").value;
    var err_message=document.getElementById("err_message").value;
    
err_message.style.padding="10px";
var text;
if(name.length<5)
{
    text="*please enter name!";
    err_message.innerHTML=text;
    return false
}
if(name.length>10)
{
    text="* enter name!";
    err_message.innerHTML=text;
    return false
}
if(subject.length<10)
{
    text="*please enter!";
    err_message.innerHTML=text;
    return false
}
if(email.indexOf('@')==-1)
{
    text="*please enter name!";
    err_message.innerHTML=text;
    return false
}
if(MessageChannel.innerHTML<=100)
{
    text="*please enter char upto 100 chars!";
    err_message.innerHTML=text;
    return false
}
alert("Form submitted successfully!")
return true
}