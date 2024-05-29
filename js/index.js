fetch('https://imdb8.p.rapidapi.com/auto-complete?q=game',{
	method: 'GET',
	headers: {
		'x-rapidapi-key': '5dc8018911msh13bbb0abe644969p102fddjsn282d372fc69a',
		'x-rapidapi-host': 'imdb8.p.rapidapi.com'
	}
})
.then(response => response.json()) 
.then(data => {
    const list = data.d;

    list.map((item) => {
        const nome = item.l;
        const poster = item.i.imageUrl;
        const filme = `<li><img src ="${poster}"><h2>${nome}</h2></li>"`
        document.querySelector('.Filmes').innerHTML += filme;
    })
})
.catch(err => {
    console.log(err);
})