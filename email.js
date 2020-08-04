// //emailcheckValid

// mysite@masaischool.com
// my.name@masaischool.org
// mysite@masai.school.net

// Not Valid
// masai.school.com [@ is not present]
// masai@.com [ domain can not start with dot `.` ]
// @masai.school.net [ No character before @ ]
// name@gmail.b [ `.b` is not a valid tld ]
// name@.org.org [ domain can not start with dot `.` ]
// .name@masaischool.org [ an email should not be start with `.` ]
// masaischool()*@gmail.com [ only allows character, digit, underscore, and dash ]
// // name..1234@yahoo.com [double dots are not allowed]

const checkAt = (email) => {
    if(email.split("@").length===2){
        return true
    }
    else{
        return false
    }
}

const dot = email => {
    email=email.split("@")
    let domain = email[1].split('')
    if(domain[0]==="."){
        return true
    }
    else{
        return false
    }
}

const beforeAt = email =>{
    email=email.split("@")
    let username = email[0]
    if(username.length===0){
        return true
    }
    else{
        return false
    }
}

const validTld = email => {
    email=email.split("@")
    let tld=email[1].split(".")
    console.log(tld)
    if(tld[tld.length-1]!=="org")
    {
        return false
    }
    else{
        return true
    }
}

let email = `name@gmail.org`
// console.log(checkAt(email))
// console.log(dot(email))
// console.log(beforeAt(email))
console.log(validTld(email))