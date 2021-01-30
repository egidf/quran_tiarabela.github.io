$.ajax ({
    url : '1.json',
   
    success : results => {
        console.log(results)
        const quran = results.ayt;
        console.log(quran)
        let qcard = '';
        quran.forEach( q => {
            qcard +=`<div class="container  my-5">
                        <p>
                            <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                            Button with data-bs-target
                            </button>
                            <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample2">
                                Button with data-bs-target
                            </button>
                        </p>
                        <div class="collapse show" id="collapseExample">
                            <div class="card card-body">
                            ${q.text}
                            </div>
                        </div>
                        <div class="collapse" id="collapseExample2">
                            <div class="card card-body my-3">
                            bbbb pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                            </div>
                        </div>
                    </div>`;
        });
        $('.container-ayat').html(qcard);
    },
    error : (e) => {
        console.log(e.responseText);
    }
});