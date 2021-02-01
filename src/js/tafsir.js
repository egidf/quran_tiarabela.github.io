$(document).ready(function(){
    $(".tafsir-button").click(function(){

        $.ajax ({
            url : '1.json' + $(this).data('ayatid')  ,
            success : results => {
                // console.log(results)
                const tafsir = results.surah.ayat;
                console.log(tafsir)
                let tcard = '';
                tafsir.forEach( t => {
                    tcard +=`<div class="ayat arabic">
                            <p>.............</p>
                                </div>
                                <div class="tafsir">
                                    <div class="tafsir-ringkas">
                                        <h2>Tafsir Ringkas</h2>
                                        <p>${tf_rk}</p>
                                    </div>
                                    <div class="tafsir-kemenag">
                                        <h2>Tafsir Kemenag</h2>
                                        <p>....................</p>
                                    </div>
                        </div>`;
                });
                $('.modal-body').html(tcard);
                ///
        
            },
            error : (e) => {
                console.log(e.responseText);
            },
        });
    });
});