fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'post',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    userId: 1,
    id: 11,
    title: 'O rei de Amarelo',
    name: 'Danilo Nunes',
    body: 'O rei de amarelo é um livro de contos escrito por Robert W. Chambers e publicado em 1895. É uma coleção de histórias que misturam horror, fantasia e ficção científica, centradas em torno de uma peça de teatro fictícia chamada "O Rei de Amarelo", que supostamente enlouquece aqueles que a leem ou assistem.',
  }),
})
  .then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      console.log('Erro na requisição');
    }
  })
  .then((json) => console.log(json))
  .catch((erro) => console.log(erro));
