document.addEventListener('DOMContentLoaded',function(){
    const parametroURL = new URLSearchParams(window.location.search);
    const filmeID = parametroURL.get('filmeId');

    if(filmeID){
        fetch('https://www.omdbapi.com/?apikey=83f3aebc&i=' + filmeID, 
        {method: 'GET'})
        .then(response => response.json())
        .then(data => {
                
            if (data.Response === 'True') {
                data.Search.forEach(filme => {
                    const filmeNome = filme.Title;
                    const filmePoster = filme.Poster;
                    const filmeHtml = `<img src="${filmePoster}" alt="${filmeNome}"><h2>${filmeNome}</h2>`;
                    document.querySelector('.detalhesFilme').innerHTML += filmeHtml;
            })
            
        }})
        .catch(err => {
            console.log(err);
        });
    }
})