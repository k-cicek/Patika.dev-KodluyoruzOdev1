let Name = prompt("Lütfen Adınızı Giriniz: ")

let myName = document.querySelector("#myName")

myName.innerHTML = `${myName.innerHTML} ${Name}`
      
  

setInterval(dijitalsaat, 1000)

function dijitalsaat() {
  var now = new Date();
  var sa = now.getHours();
  var dk = now.getMinutes();
  var sn = now.getSeconds();
  var gn = now.getDate();
  var months = [
    "Ocak",
    "Şubat",
    "Mart",
    "Nisan",
    "Mayıs",
    "Haziran",
    "Temmuz",
    "Ağustos",
    "Eylül",
    "Ekim",
    "Kasım",
    "Aralık",
  ];
  var month = [now.getMonth()];
  var year = [now.getFullYear()];
  var days = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ];
  var day = days[now.getDay()];

  sa = (sa<10)? "0"+sa:sa;
  dk = (dk<10)? "0"+dk:dk;
  sn = (sn<10)? "0"+sn:sn;

  var time = sa+":"+dk+":"+sn;
  var clock = document.getElementById("clock").innerHTML = time;

  gn = (gn<10)? gn:gn;
  var date = gn+" "+month+" "+year+" "+day;
  var date2 = document.getElementById("date").innerHTML = date;
  
}
