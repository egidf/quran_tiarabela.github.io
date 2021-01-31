$.ajax ({
    url : '1.json',
   
    success : results => {
        console.log(results)
        const quran = results.surah.ayat;
        console.log(quran)
        let qcard = '';
        quran.forEach( q => {
            qcard +=`<div class="container  my-3">
                        <div class="btn-group" role="group" aria-label="Basic">
                            <button type="button" class="btn btn-1 rounded-0">${q.id_surah} : ${q.id_ayat}</button>
                            <button type="button" class="btn btn-2 rounded-0">Tafsir</button>
                            <button type="button" class="btn btn-3 rounded-0">Right</button>
                        </div>
                        <div class="collapse show" id="collapseExample">
                            <div class="card card-body rounded-0 pr-2 shadow-sm m-0 pb-0 ">
                            <p class="arabic" lang="ar" dir="rtl">${q.text} <span class="nmr-arabic">${q.id_ay_ar}</span></p>
                            <p class="terjemah d-flex p-2"><span class="nr-ayat">${q.id_ayat+').'}</span> ${q.tr_id}</p>
                            </div>
                        </div>
                    </div>`;
        });
        $('.container-ayat').html(qcard);
        ///

    },
    error : (e) => {
        console.log(e.responseText);
    }
});


