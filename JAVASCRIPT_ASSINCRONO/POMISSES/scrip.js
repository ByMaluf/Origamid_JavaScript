
// Promise é uma função construtora de promessas. Existem dois resultados possíveis de uma promessa, ela pode ser resolvida, com a execução do primeiro argumento, ou rejeitada se o segundo argumento for ativado.

// resolve()
// Podemos passar um argumento na função resolve(), este será enviado junto com a resolução da Promise.

// reject()
// Quando a condição de resolução da promise não é atingida, ativamos a função reject para rejeitar a mesma. Podemos indicar no console um erro, informando que a promise foi rejeitada.

// then()
// O poder das Promises está no método then() do seu protótipo. O Callback deste método só será ativado quando a promise for resolvida. O argumento do callback será o valor passado na função resolve.

// Assíncrono
// As promises não fazem sentido quando o código executado dentro da mesma é apenas código síncrono.O poder está na execução de código assíncrono que executará o resolve() ao final dele.

// then().then()
// O método then() retorna outra Promise.Podemos colocar then() após then() e fazer um encadeamento de promessas.O valor do primeiro argumento de cada then, será o valor do retorno anterior.

// catch ()
// O método catch (), do protótipo de Promises, adiciona um callback a promise que será ativado caso a mesma seja rejeitada.

//Exercício
// Crie uma Promise que resolve com a mensagem "Tudo certo!" após 1 segundo. Quando a Promise for resolvida, imprima a mensagem no console.

// Instânciando Uma promise
// Por padrão uma Promise aceita uma função anônima e dentro da mesma passa-se dois argumentos, duas funções, uma função de resposta se ela for resolvida e a outra caso seja rejeitada.
// Instanciando uma Promise

const promise1 = new Promise((resolve, reject) => {
  const isResolve = false;
  if (isResolve) {
    setTimeout(() => {
      console.log('Promise resolvida');
      resolve();
    }, 1000);
  } else {
    setTimeout(() => {
      console.log('Deu ruim');
      reject('Algo deu errado');
    }, 2000);
  }
});

// Usando .then() para lidar com o sucesso (resolução)
promise1.then(() => {
  console.log('Esse é o resultado da promise');
})
  // Usando .catch() para lidar com o erro (rejeição)
  .catch((error) => {
    console.log('Erro capturado:', error);
  });


const promise2 = new Promise((resolve, reject) => {
  const isResolve = true;
  if (isResolve) {
    setTimeout(() => {
      console.log('Promise resolvida');
      resolve([
        { filme: 'O senhor dos Anéis', status: true },
        { filme: 'Homem Aranha', status: true },
        { filme: 'Os Vigadores', status: false },
        { filme: 'As branquelas', status: false },
      ]);
    }, 1000);
  } else {
    setTimeout(() => {
      console.log('Deu ruim');
      reject('Algo deu errado');
    }, 2000);
  }
});

promise2.then((item) => {
  item.map((obj) => {
    console.log(obj.filme)
  })
})
  .catch((error) => {
    console.log('Erro capturado:', error);
  });


const filmes = new Promise((resolve, reject) => {
  const isResolve = true;
  if (isResolve) {
    setTimeout(() => {
      console.log('Promise resolvida');
      resolve([
        { filme: 'O senhor dos Anéis', status: true },
        { filme: 'Homem Aranha', status: true },
        { filme: 'Os Vigadores', status: false },
        { filme: 'As branquelas', status: false },
      ]);
    }, 1000);
  } else {
    setTimeout(() => {
      console.log('Deu ruim');
      reject('Algo deu errado');
    }, 2000);
  }
});

filmes
  .then((item) => item)
  .then((filmes) => {
    return filmes.map(obra => obra.filme);
  }).then((arrayNome) => {
    console.log(arrayNome);
    const newArrayUppercase = arrayNome.map((nameUpperCase) => nameUpperCase.toUpperCase())
    console.log(newArrayUppercase)
  })
  .catch((error) => {
    console.log('Erro capturado:', error);
  });

