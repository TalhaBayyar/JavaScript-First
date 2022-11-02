

let examGrade = prompt("Adınız Nedir.");

if(examGrade === "Talha"){
   let govde =  document.getElementById("primary");
   govde.style.backgroundColor = "#32383e";
   let Kod   = document.getElementById("kodluyoruz");
   Kod.innerHTML = "Kodluyoruz";
   Kod.style.color = "#f58707";
   let giris = document.getElementById("giris"); 
   giris.style.color = "#f58707";
   giris.innerHTML = "Merhaba, Talha! Hoşgeldin!"; 

    function tarihSaat() {
        
        var date = new Date().toLocaleTimeString('tr-TR');
        document.getElementById("zaman").innerHTML = date;
        }
        // her 1 saniyede tarihSaat fonksiyonunu yeniden çalıştır
        setInterval(tarihSaat, 1000); 

    function gun(){  
        
        var d = new Date();
        var gunler= ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
        document.getElementById("day").innerHTML = gunler[d.getDay()];
       
        
        
    }    
    setInterval(gun());


    let aciklama = document.getElementById("aciklama");
    aciklama.innerHTML = "tarihinde Kodluyoruz Frontend Web Development Patikası'nın JavaScript";

    let aciklamaIki = document.getElementById("aciklamaIki");
    aciklamaIki.innerHTML = "bölüm 1. Ödevdesiniz.";
    
}


/*

var tarih=new Date() satırı ile tarih bilgisini tarih isimli değişkene alıyoruz.
getFullYear(): Yıl bilgisini almak için kullanılır.
getMonth(): Ay bilgisini alır.
getDay(): Gün bilgisini alır.
getHours(): Saat bilgisini alır.
getMinutes():Dakika bilgisini alır.
getSeconds(): Saniye bilgisini alır.

*/






/* 



let info = document.querySelector("#info");


if(examGrade >= 0 && examGrade <= 100){



    info.classList.add("text-primary");
    textInfo = SMILE;
    if(examGrade>=90){

        textInfo += " AA";
    }else if(examGrade >= 85){
        textInfo += " BA";
    }else if(examGrade >= 80){
        textInfo += " BB";
    }else if(examGrade >= 75){
        textInfo += " CB";
    }else if(examGrade >= 70){
        textInfo += " CC";
    }else if(examGrade >= 65){
        textInfo += " DC";
    }else if(examGrade >= 60){
        textInfo += " DD";
    }else if(examGrade >= 50){
        textInfo += " FD";
    }else if(examGrade < 50){
        textInfo = `${SAD}`;
        info.classList.remove("text-primary");
        info.classList.add("text-danger");



    }


}else{
    textInfo = "Bilgiler Doğru Değil";
}


info.innerHTML = `${textInfo} -> ${examGrade}`;

*/