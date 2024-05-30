function mostrarResultados() {
    document.getElementById('resultadosPesquisa').style.display = 'block';
}

function esconderResultados() {
    setTimeout(() => {
        document.getElementById('resultadosPesquisa').style.display = 'none';
    }, 200);
}

function pesquisarFilme() {

    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("pesquisa");
    filter = input.value.toUpperCase();
    ul = document.getElementById("resultadosPesquisa");
    li = ul.getElementsByTagName("li");

    document.querySelector('.Filmes').innerHTML = '';

    fetch('http://www.omdbapi.com/?apikey=83f3aebc&t=' + filter, 
    {method: 'GET'})
    .then(response => response.json())
    .then(data => {
        const nome = data.Title;
        const poster = data.Poster;

        if (nome !== undefined) {
            const filme = `<li><a href='#'><img src="${poster}"><h2>${nome}</h2></a></li>`;
            document.querySelector('.Filmes').innerHTML += filme;
        }
    })
    .catch(err => {
        console.log(err);
    });

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}