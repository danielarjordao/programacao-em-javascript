const movieListUrl = "http://www.omdbapi.com/?s=war&apikey=5224bc09";
const ul = document.querySelector('.movies');

fetch(movieListUrl)
.then(response => {
    if (!response.ok) {
        throw new Error(`Erro HTTP! Status: ${response.status}`);
    }
    return response.json()
})
.then((data) => {
    if (data.Response === "False") {
        throw new Error(data.Error);
    }
    const listaDeFilmes = data.Search; 
    
    listaDeFilmes.forEach(filme => {
        
        const li = document.createElement('li');
        li.classList.add('movie-item');

        
        const h2 = document.createElement('h2');
        h2.classList.add('movies-title');
        h2.innerText = `Título: ${filme.Title}`;

        const p = document.createElement('p');
        p.classList.add('movie');
        p.innerText = `Ano: ${filme.Year}`;

        const image = document.createElement('img');
        image.classList.add('movie-poster');
        image.src = filme.Poster;

       
        li.appendChild(h2);
        li.appendChild(image);
        li.appendChild(p);    
        ul.appendChild(li);

    });
    return listaDeFilmes.length;
})
.then((totalFilmes) => {
    console.log(`Total de filmes processados: ${totalFilmes} filmes.`);
})
.catch(erro => {
    ul.innerHTML = `<p class="error-message">Ocorreu um erro: ${erro.message}</p>`;
    console.error("Relatório de erro:", erro)
});


