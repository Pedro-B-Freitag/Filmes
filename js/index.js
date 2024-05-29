function myFunction() {

    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");


    fetch('http://www.omdbapi.com/?apikey=83f3aebc&t='+ filter,
     {method: 'GET'})
    .then(response => response.json())
    .then(data => {
        const nome = data.Title;
        const poster = data.Poster;
        const filme = `<li><a href='#'><img src="${poster}"><h2>${nome}</h2></a></li>`;
        document.querySelector('.Filmes').innerHTML += filme;
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