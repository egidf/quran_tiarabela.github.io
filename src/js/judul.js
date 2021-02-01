$(document).ready(function(){
    $.getJSON("1.json", function(data){
        let dataQr = '';
        $.each(data, function(key, value){
            dataQr += '<h1 class="judul-arabic" lang="ar" dir="rtl">'+value.nm_ar+'</h1>';
            dataQr += '<h5 class"p-0 mt-1">'+value.nm_id+'</h5>';
            dataQr += '<h6 class"p-0 mt-1">'+'('+value.nm_tr+')'+'</h6>';
            dataQr += '<p class"p-0 mt-1 keterangan">'+'Surah: '+value.id_surah+' | '+value.jm_ayat+' Ayat | '+value.type+'</p>';
            
        });
        $('#judul').append(dataQr);
    });
});