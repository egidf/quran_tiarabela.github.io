function getDataQuran(url, success, error){
    let xhr = new XMLHttpRequest();



    xhr.onreadystatechange = function (){
        if (xhr.readyState === 4){
            if (xhr.status === 200){
                success(xhr.response);
            }else if ( xhr.status === 404){
                error ();
            }
        }
    }
    xhr.open('get', url);
    xhr.send();
}

getDataQuran('1.json', results =>{
    
    const surah = JSON.parse(results);
    console.log(surah);
    let cardq = '';
    surah.forEach( d => {
        cardq +=`<div class="container  my-5">
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
                            <p class="arabic" lang="ar" dir="rtl">${surah.text}</p>
                            <p class="terjemah">${surah.tr_id}</p>
                            </div>
                        </div>
                        <div class="collapse" id="collapseExample2">
                            <div class="card card-body my-3">
                            bbbb pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                            </div>
                        </div>
                    </div>`;
    });
    
    

}, () =>{

});


