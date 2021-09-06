var str = prompt("Adını yaz");
str = str[0].toUpperCase() + str.slice(1);
document.getElementById("myName").innerText = str;