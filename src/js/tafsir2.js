$(document).ready(function(){
    
    $(".tafsir-ringkas-button").click(function(){
        const tfRingkas = $(this).data('tfr');
        const tfLengkap = $(this).data('tfl');
        const idS = $(this).data('ids');
        const idA = $(this).data('ida');
        const idAr= $(this).data('idar');
        const textAyat = $(this).data('textay');
        

        const pjudul = document.createTextNode('Kajian Surah: '+ idS+' ayat: '+ idA);
        $('.modal-title').append(pjudul);

        const jTfringkas = document.createTextNode('Tafsir Ringkas Kemenag RI');
        const pJtfRingkas = document.createElement('h6');
        pJtfRingkas.append(jTfringkas);
        pJtfRingkas.classList.add('judul-tafsir');

        const jTflengkap = document.createTextNode('Tafsir Kemenag RI');
        const pJtfLengkap = document.createElement('h6');
        pJtfLengkap.append(jTflengkap);
        pJtfLengkap.classList.add('judul-tafsir');
        

        const tAyat = document.createTextNode(textAyat +' '+ idAr);
        const pAyat = document.createElement('p');
        pAyat.append(tAyat);
         $('.lgi-1').append(pAyat);
 
        const tTafsirR = document.createTextNode(tfRingkas);
        const pTafsirR = document.createElement('p');
        pTafsirR.append(tTafsirR);
        $('.tafsir-ringkas').append(pTafsirR);
        $('.tafsir-ringkas').before(pJtfRingkas);

        const tTafsirL = document.createTextNode(tfLengkap);
        const pTafsirL = document.createElement('p');
        pTafsirL.append(tTafsirL);
        $('.tafsir-lengkap').append(pTafsirL);
        $('.tafsir-lengkap').before(pJtfLengkap);

             $("#close").click(function(){
                $('.judul-tafsir').remove();
                $('.list-group-item').empty();
                $('.modal-title').empty();
            
     });
        $(".btn-modal-tafsir").click(function(){
            $('.judul-tafsir').remove();
            $('.list-group-item').empty();
            $('.modal-title').empty();
})
  });

});