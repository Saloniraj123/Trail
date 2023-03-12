function hello()
{
    var email=document.myform.email.value;
    if(email=="")
    {
        document.getElementById("err").innerHTML="*Please enter your email id !";
        return false;
    }
if(email.indexOf('@')<=0)
{
    document.getElementById("err").innerHTML="*Please enter valid email id !";
    return false;
}
if((email.charAt(email.length-4)!='.') && (email.charAt(email.length-3)!=','))
{
    document.getElementById("err").innerHTML="*valid email id !";
    return false; 
}
}