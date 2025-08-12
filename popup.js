
const books = [
  { name: "Gênesis", abbrev: "gn", chapters: 50, backgroundImage: "url('https://cdn.leonardo.ai/users/7743e712-1764-42fc-b2cd-b152c651386b/generations/53a61b16-6494-4fa8-99c8-a76c5f162c22/Leonardo_Kino_XL_garden_of_eden_3.jpg')"  },
  { name: "Êxodo", abbrev: "ex", chapters: 40, backgroundImage: "url('https://cdn.leonardo.ai/users/7743e712-1764-42fc-b2cd-b152c651386b/generations/3c709e60-b646-4e00-b0e8-b3deaa81c566/Leonardo_Kino_XL_exodus_3.jpg') "},
  { name: "Levítico", abbrev: "lv", chapters: 27, backgroundImage: "url('')" },
  { name: "Números", abbrev: "nm", chapters: 36, backgroundImage: "url('')" },
  { name: "Deuteronômio", abbrev: "dt", chapters: 34, backgroundImage: "url('')" },
  { name: "Josué", abbrev: "js", chapters: 24, backgroundImage: "url('')" },
  { name: "Juízes", abbrev: "jz", chapters: 21, backgroundImage: "url('')" },
  { name: "Rute", abbrev: "rt", chapters: 4, backgroundImage: "url('')" },
  { name: "1 Samuel", abbrev: "1s", chapters: 31, backgroundImage: "url('')" },
  { name: "2 Samuel", abbrev: "2s", chapters: 24, backgroundImage: "url('')" },
  { name: "1 Reis", abbrev: "1sm", chapters: 22, backgroundImage: "url('')" },
  { name: "2 Reis", abbrev: "2sm", chapters: 25, backgroundImage: "url('')" },
  { name: "1 Crônicas", abbrev: "1cr", chapters: 29, backgroundImage: "url('')" },
  { name: "2 Crônicas", abbrev: "2cr", chapters: 36 , backgroundImage: "url('')"},
  { name: "Esdras", abbrev: "ed", chapters: 10, backgroundImage: "url('')" },
  { name: "Neemias", abbrev: "ne", chapters: 13 , backgroundImage: "url('')"},
  { name: "Ester", abbrev: "et", chapters: 10 , backgroundImage: "url('')"},
  { name: "Jó", abbrev: "jo", chapters: 42, backgroundImage: "url('')" },
  { name: "Salmos", abbrev: "sl", chapters: 150 , backgroundImage: "url('')"},
  { name: "Provérbios", abbrev: "pv", chapters: 31, backgroundImage: "url('')" },
  { name: "Eclesiastes", abbrev: "ec", chapters: 12 , backgroundImage: "url('')"},
  { name: "Cântico dos Cânticos", abbrev: "ct", chapters: 8, backgroundImage: "url('')" },
  { name: "Isaías", abbrev: "is", chapters: 66, backgroundImage: "url('')" },
  { name: "Jeremias", abbrev: "jr", chapters: 52 , backgroundImage: "url('')"},
  { name: "Lamentações", abbrev: "lm", chapters: 5, backgroundImage: "url('')" },
  { name: "Ezequiel", abbrev: "ez", chapters: 48, backgroundImage: "url('')" },
  { name: "Daniel", abbrev: "dn", chapters: 12 , backgroundImage: "url('')"},
  { name: "Oséias", abbrev: "os", chapters: 14, backgroundImage: "url('')" },
  { name: "Joel", abbrev: "jl", chapters: 3, backgroundImage: "url('')" },
  { name: "Amós", abbrev: "am", chapters: 9 , backgroundImage: "url('')"},
  { name: "Obadias", abbrev: "ob", chapters: 1 , backgroundImage: "url('')"},
  { name: "Jonas", abbrev: "jn", chapters: 4 , backgroundImage: "url('')"},
  { name: "Miquéias", abbrev: "mq", chapters: 7 , backgroundImage: "url('')"},
  { name: "Naum", abbrev: "na", chapters: 3, backgroundImage: "url('')" },
  { name: "Habacuque", abbrev: "hc", chapters: 3 , backgroundImage: "url('')"},
  { name: "Sofonias", abbrev: "sf", chapters: 3 , backgroundImage: "url('')"},
  { name: "Ageu", abbrev: "ag", chapters: 2, backgroundImage: "url('')" },
  { name: "Zacarias", abbrev: "zc", chapters: 14, backgroundImage: "url('')" },
  { name: "Malaquias", abbrev: "ml", chapters: 4, backgroundImage: "url('')" },
  { name: "Mateus", abbrev: "mt", chapters: 28, backgroundImage: "url('')" },
  { name: "Marcos", abbrev: "mc", chapters: 16, backgroundImage: "url('')" },
  { name: "Lucas", abbrev: "lc", chapters: 24 , backgroundImage: "url('')"},
  { name: "João", abbrev: "jo", chapters: 21 , backgroundImage: "url('')"},
  { name: "Atos dos Apóstolos", abbrev: "at", chapters: 28 , backgroundImage: "url('')"},
  { name: "Romanos", abbrev: "rm", chapters: 16, backgroundImage: "url('')" },
  { name: "1 Coríntios", abbrev: "1co", chapters: 16 , backgroundImage: "url('')"},
  { name: "2 Coríntios", abbrev: "2co", chapters: 13 , backgroundImage: "url('')"},
  { name: "Gálatas", abbrev: "gl", chapters: 6 , backgroundImage: "url('')"},
  { name: "Efésios", abbrev: "ef", chapters: 6 , backgroundImage: "url('')"},
  { name: "Filipenses", abbrev: "fp", chapters: 4 , backgroundImage: "url('')"},
  { name: "Colossenses", abbrev: "cl", chapters: 4, backgroundImage: "url('')" },
  { name: "1 Tessalonicenses", abbrev: "1ts", chapters: 5, backgroundImage: "url('')" },
  { name: "2 Tessalonicenses", abbrev: "2ts", chapters: 3 , backgroundImage: "url('')"},
  { name: "1 Timóteo", abbrev: "1tm", chapters: 6 , backgroundImage: "url('')"},
  { name: "2 Timóteo", abbrev: "2tm", chapters: 4 , backgroundImage: "url('')"},
  { name: "Tito", abbrev: "tt", chapters: 3, backgroundImage: "url('')" },
  { name: "Filemom", abbrev: "fm", chapters: 1 , backgroundImage: "url('')"},
  { name: "Hebreus", abbrev: "hb", chapters: 13 , backgroundImage: "url('')"},
  { name: "Tiago", abbrev: "tg", chapters: 5 , backgroundImage: "url('')"},
  { name: "1 Pedro", abbrev: "1pe", chapters: 5 , backgroundImage: "url('')"},
  { name: "2 Pedro", abbrev: "2pe", chapters: 3 , backgroundImage: "url('')"},
  { name: "1 João", abbrev: "1jo", chapters: 5, backgroundImage: "url('')" },
  { name: "2 João", abbrev: "2jo", chapters: 1 , backgroundImage: "url('')"},
  { name: "3 João", abbrev: "3jo", chapters: 1 , backgroundImage: "url('')"},
  { name: "Judas", abbrev: "jd", chapters: 1, backgroundImage: "url('')" },
  { name: "Apocalipse", abbrev: "ap", chapters: 22 , backgroundImage: "url('https://files.oaiusercontent.com/file-OngzyBZ5rbBFtNzyEm0wWMtf?se=2024-09-27T18%3A03%3A37Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D9bb50b58-1d4c-4480-82e4-cc7dde58f7cf.webp&sig=lgspke/zw0Vc0UQ13jJy2vM8ALL6E4%2B0VugQxrQVPjs%3D')"}
];

document.addEventListener("DOMContentLoaded", () => {
 

  const booksContainer = document.getElementById("books-container");
  const chaptersContainer = document.getElementById("chapters-container");
  const versesContainer = document.getElementById("verses-container");
  const versesDiv = document.getElementById("verses");
  const backToChaptersButton = document.getElementById("back-to-chapters");
  const sidebarBackToBooksButton = document.getElementById("sidebar-back-to-books");
  const sidebarGoToHynsButton = document.getElementById("sidebar-go-to-hyns"); // Novo ID
  const hymnsContainer =  document.getElementById("hyns-container");
  const verseAnotation = document.getElementById("comments-container");


  
  // Mostrar livros em cards
  books.forEach((book, index) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.textContent = book.name;
    card.onclick = () => selectBook(index);
    booksContainer.appendChild(card);
  });

  // Selecionar um livro e mostrar capítulos
  function selectBook(bookIndex) {
    
    const book = books[bookIndex];
    verseAnotation.style.display = "none";
    hymnsContainer.style.display = "none";
    booksContainer.style.display = "none";
    chaptersContainer.style.display = "flex";
    chaptersContainer.innerHTML = ""; // Limpar capítulos anteriores

    const backButton = document.createElement("button");
    backButton.textContent = "Voltar aos Livros";
    backButton.onclick = () => {
      booksContainer.style.display = "flex";
      chaptersContainer.style.display = "none";
    };
    chaptersContainer.appendChild(backButton);

    for (let i = 1; i <= book.chapters; i++) {
      const chapterCard = document.createElement("div");
      chapterCard.classList.add("card");
      chapterCard.textContent = `Capítulo ${i}`;
      chapterCard.onclick = () => selectChapter(book.abbrev, i);
      chaptersContainer.appendChild(chapterCard);
    }
  }

  // Selecionar um capítulo e buscar os versículos na API
  function selectChapter(bookAbbrev, chapterNumber) {
    chaptersContainer.style.display = "none";
    versesContainer.style.display = "block";
    versesDiv.innerHTML = `<h2>Carregando...</h2>`;

    // Buscar os versículos da API
    fetchVerses(bookAbbrev, chapterNumber);
  }

  // Função para buscar versículos na API
function fetchVerses(bookAbbrev, chapterNumber) {
  const apiUrl = `https://www.abibliadigital.com.br/api/verses/nvi/${bookAbbrev}/${chapterNumber}`;
  const token = '';

  fetch(apiUrl, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
  .then(response => {
    if (!response.ok) {
      throw new Error("Erro ao buscar os versículos.");
    }
    return response.json();
  })
  .then(data => {
    displayVerses(data); // Chama a função que irá exibir os versículos
  })
  .catch(error => {
    const versesDiv = document.getElementById('versesDiv'); // Certifique-se de que o elemento existe
    versesDiv.innerHTML = `<p>Erro: ${error.message}</p>`;
  });
}

  // Função para exibir os versículos
  function displayVerses(data) {
    versesDiv.innerHTML = `<h2>${data.book.name} Capítulo ${data.chapter.number}</h2>`;

    data.verses.forEach(verse => {
      const verseParagraph = document.createElement("p");
      verseParagraph.textContent = `${verse.number}. ${verse.text}`;
      versesDiv.appendChild(verseParagraph);
    });
  }

  // Botão de voltar aos capítulos
  backToChaptersButton.onclick = () => {
    versesContainer.style.display = "none";
    chaptersContainer.style.display = "flex";
    booksContainer.style.display = "none";
  };

  // Funcionalidade do botão na barra lateral
  sidebarBackToBooksButton.onclick = () => {
    versesContainer.style.display = "none";
    chaptersContainer.style.display = "none";
    booksContainer.style.display = "flex";
    sidebar.style.width = "0"; 
  };

  // Funcionalidade do botão de Harpa
  sidebarGoToHynsButton.onclick = () => {
    fetchHymns(); // Chama a função para buscar hinos
  };

  // Função para buscar hinos
  function fetchHymns() {
    const apiUrl = 'https://bazarcripto.shop/wp-content/uploads/2024/10/hymns.json';

    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error("Erro ao buscar os hinos.");
        }
        return response.json();
      })
      .then(data => {
        displayHymns(data);
      })
      .catch(error => {
        console.error('Erro:', error);
        const hymnsContainer = document.getElementById("hyns-container");
        hymnsContainer.innerHTML = `<p>Erro: ${error.message}</p>`;
        hymnsContainer.style.display = "block";
      });
  }

  function selectHymn(hymn) {
    // Aqui, remova a exibição do container de hinos
    document.getElementById("hyns-container").style.display = "none";
    
  
    // Mostre o hino selecionado
    const versesHyns = document.getElementById("verses-hyns");
    versesHyns.innerHTML = ""; // Limpa qualquer conteúdo anterior
  
    // Adiciona o título do hino
    const titleElement = document.createElement("h2");
    titleElement.textContent = hymn.title;
    versesHyns.appendChild(titleElement);
  
    // Adiciona os versos do hino
    hymn.verses.forEach((verse) => {
      const verseElement = document.createElement("p");
      verseElement.textContent = verse.lyrics;
      versesHyns.appendChild(verseElement);
    });
  
    // Altera o display do container para mostrar o hino
    versesHyns.style.display = "block";
  }
  
 // Função para exibir os hinos
function displayHymns(hymns) {
  const hymnsContainer = document.getElementById("hyns-container");
  hymnsContainer.innerHTML = ""; // Limpar o container antes de adicionar novos hinos
  hymns.forEach(hymn => {
      const hymnDiv = document.createElement("div");
      hymnDiv.classList.add("card");
      hymnDiv.textContent = `${hymn.number} - ${hymn.title}`;
      hymnDiv.onclick = () => selectHymn(hymn); // Adiciona o evento de clique
      hymnsContainer.appendChild(hymnDiv);
  });
  booksContainer.style.display = "none";
  chaptersContainer.style.display = "none";
  versesContainer.style.display = "none";
  hymnsContainer.style.display = "flex"; // Mostrar container de hinos
}


  // Funções para abrir e fechar a barra lateral
  const menuToggle = document.getElementById("menu-toggle");
  const sidebar = document.getElementById("sidebar");
  const closeBtn = document.getElementById("close-btn");

  menuToggle.addEventListener("click", () => {
    sidebar.style.width = "200px"; // Define a largura da barra lateral ao clicar
  });

  closeBtn.addEventListener("click", () => {
    sidebar.style.width = "0"; 
  });


  // Adicionei uma variável para armazenar os hinos
let hymns = [];

// Carregar os hinos da API
function loadHymns() {
  fetch("https://raw.githubusercontent.com/x1db/harpa-crista-app/main/src/data/anthems.json")
    .then(response => response.json())
    .then(data => {
      hymns = data; // Armazena os hinos na variável
      displayHymns(); // Chama a função para exibir os hinos
    })
    .catch(error => {
      console.error("Erro ao carregar os hinos:", error);
    });
}

// Função para exibir os hinos
function displayHymns() {
  const hymnsContainer = document.getElementById("hyns-container");
  hymnsContainer.innerHTML = ""; // Limpa o container de hinos
  hymnsContainer.style.display = "flex"; // Mostra o container de hinos

  hymns.forEach((hymn) => {
    const hymnCard = document.createElement("div");
    hymnCard.classList.add("card");
    hymnCard.textContent = `${hymn.number} - ${hymn.title}`;
    
    // Adiciona um evento de clique para exibir o hino
    hymnCard.onclick = () => showHymnDetails(hymn);
    
    hymnsContainer.appendChild(hymnCard);
  });
}

// Função para mostrar os detalhes do hino
function showHymnDetails(hymn) {
  const hymnsContainer = document.getElementById("hyns-container");
  const versesHyns = document.getElementById("verses-hyns");

  // Esconde o container de hinos
  hymnsContainer.style.display = "none";
  // Mostra o container de detalhes do hino
  versesHyns.style.display = "block";

  // Limpa o conteúdo anterior e insere o hino selecionado
  let hymnContent = `
    <h2>${hymn.title} (Número: ${hymn.number})</h2>
    <p><strong>Autor: ${hymn.author}</strong></p>
  `;

  hymn.verses.forEach(verse => {
    if (verse.chorus) {
      hymnContent += `<p><strong>Coral:</strong> ${verse.lyrics}</p>`;
    } else {
      hymnContent += `<p>${verse.lyrics}</p>`;
    }
  });

  versesHyns.innerHTML = hymnContent;

  // Botão para voltar à lista de hinos
  const backToHymnsButton = document.createElement("button");
  backToHymnsButton.textContent = "Voltar aos Hinos";
  backToHymnsButton.classList.add("card");
  backToHymnsButton.onclick = () => {
    versesHyns.style.display = "none"; // Esconde o container de detalhes do hino
    hymnsContainer.style.display = "flex"; // Mostra novamente o container de hinos
  };
  versesHyns.appendChild(backToHymnsButton);
}

// Evento para carregar os hinos ao clicar na opção "Harpa" do menu lateral
document.getElementById("sidebar-go-to-hyns").addEventListener("click", () => {
  const hymnsContainer = document.getElementById("hyns-container");
  const booksContainer = document.getElementById("books-container");
  const chaptersContainer = document.getElementById("chapters-container");
  const versesContainer = document.getElementById("verses-container");

  // Oculta os outros containers
  booksContainer.style.display = "none";
  chaptersContainer.style.display = "none";
  versesContainer.style.display = "none";

  // Exibe o container de hinos
  hymnsContainer.style.display = "flex";

  // Carrega os hinos se ainda não estiverem carregados
  if (hymns.length === 0) {
    loadHymns();
  }
});

document.getElementById("sidebar-go-to-anotation").addEventListener("click", () => {
  const hymnsContainer = document.getElementById("hyns-container");
  const booksContainer = document.getElementById("books-container");
  const chaptersContainer = document.getElementById("chapters-container");
  const versesContainer = document.getElementById("verses-container");
  const verseAnotation = document.getElementById("comments-container");

  // Oculta os outros containers
  booksContainer.style.display = "none";
  chaptersContainer.style.display = "none";
  versesContainer.style.display = "none";
  hymnsContainer.style.display = "none";

  verseAnotation.style.display = "flex"

  // Inicializar os comentários salvos
displayComments();
});

// Chame a função para carregar os hinos ao iniciar (opcional)
document.addEventListener("DOMContentLoaded", () => {
  loadHymns();
});


document.addEventListener('mouseup', function (e) {
  const selectedText = window.getSelection().toString().trim();
  if (selectedText) {
    const commentPopup = document.getElementById('comment-popup');
    commentPopup.style.top = `${e.pageY}px`;
    commentPopup.style.left = `${e.pageX}px`;
    commentPopup.style.display = 'block';

    // Salvar a seleção atual
    commentPopup.dataset.selectedText = selectedText;
  }
});

document.getElementById('save-comment').addEventListener('click', function () {
  const selectedText = document.getElementById('comment-popup').dataset.selectedText;
  const comment = document.getElementById('comment-input').value.trim();

  if (comment) {
    // Salvar no localStorage
    let comments = JSON.parse(localStorage.getItem('comments')) || [];
    comments.push({ text: selectedText, comment: comment });
    localStorage.setItem('comments', JSON.stringify(comments));

    // Exibir o comentário
    displayComments();

    // Limpar e esconder o popup
    document.getElementById('comment-input').value = '';
    document.getElementById('comment-popup').style.display = 'none';
  }
});

function displayComments() {
  const commentsContainer = document.getElementById('comments-container');
  commentsContainer.innerHTML = '';

  const comments = JSON.parse(localStorage.getItem('comments')) || [];
  comments.forEach((item, index) => {
    const commentDiv = document.createElement('div');
    commentDiv.innerHTML = `<span class="highlight" ><strong>Trecho:</strong>${item.text}</span><br><strong>Comentário:</strong> ${item.comment}`;
    
    commentDiv.classList.add("comment-style");

    commentsContainer.appendChild(commentDiv);
  });
}


});


