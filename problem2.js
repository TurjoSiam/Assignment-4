function sendNotification(email) {
    if(email.includes("@") !== true){
        return "Invalid Email";
    }
    let emailParts = [];
    emailParts = email.split("@");
    let notification = emailParts[0] + " sent you an email from " + emailParts[1];
    return notification;
}
