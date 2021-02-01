



$(document).ready(function(){


    
    
    $(".tafsir-ringkas-button").click(function(){
        const tfRingkas = $(this).data('tfr');
        const tfLengkap = $(this).data('tfl');
        const idS = $(this).data('ids');
        const idA = $(this).data('ida');
        const textAyat = $(this).data('textay');

        pjudul = document.createTextNode('Tafsir ringkas surah: '+ idS+' ayat: '+ idA);
        $('.modal-title').append(pjudul);

        pAyat = document.createTextNode(textAyat);
        $('.lgi-1').append(pAyat);

        pTafsir = document.createTextNode(tfRingkas);
        $('.tafsir-ringkas').append(pTafsir);
             $("#close").click(function(){
                $('.list-group-item').empty();
                $('.modal-title').empty();
        })
     });
  });

