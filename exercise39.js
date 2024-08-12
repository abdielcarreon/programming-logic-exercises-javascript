//Given a text string, comproving if it's a valid email

function validingEmail(email) {

    let regExp = /^\w+@\w+\.\w+$/gi.test(email);

    if(regExp) {
        console.log('Validing email...')
    } else {
        console.log("Some of your writed characters isn't valid");
    }
}

validingEmail('correo@correo.com')