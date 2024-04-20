function krediHesapla() {

    let cekilecekTutar = document.getElementById('txtKrediTutari').value;
    let liste = document.getElementById('listeVade');

    let vadeSayisi = liste.options[liste.selectedIndex].value;

    let odenecekToplamTutar;

    if(vadeSayisi == 12){
        odenecekToplamTutar = cekilecekTutar*1.1;
    } else if(vadeSayisi == 24){
        odenecekToplamTutar= cekilecekTutar*1.2;
    } else if(vadeSayisi == 36){
        odenecekToplamTutar = cekilecekTutar*1.3;
    } else if(vadeSayisi == 48){
        odenecekToplamTutar = cekilecekTutar*1.4;
    }

    let aylikTaksit = odenecekToplamTutar / vadeSayisi;

    document.querySelector('#sonuc').innerHTML = `Geri ödeme toplamı: ${odenecekToplamTutar} <br> Aylık taksit tutarınız: ${aylikTaksit.toFixed(2)} `;

}