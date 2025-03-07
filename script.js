setCookie = (cName,cValue,days) =>{
    let date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = cName + "=" + cValue + ";" + expires + "; path=MainPage, path=/History, path=/CulturalTourism, path=/MalaysianCulture, path=/FoodCulture, path=/MalaysianCostume, path=/Sport, path=/Fact";    
}

getCookie = (cName) =>{
    const name = cName + "=";
    const cDecoded = decodeURIComponent(document.cookie);
    const cArr = cDecoded.split(";");
    let value;
    cArr.forEach(val=>{
        if(val.indexOf(name) == 0) value = val.substring(name.length);
    })
    return value;
}

document.querySelector("#cookie-btn").addEventListener("click",()=>{
    document.querySelector("#cookies").style.display="none";
    setCookie("cookie",true,30);
})

cookieMessage = () =>{
    if(!getCookie("cookie"))
    document.querySelector("#cookies").style.display = "block";
}

window.addEventListener("load",cookieMessage);