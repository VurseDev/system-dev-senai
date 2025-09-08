function abrirForm() {
    var formDiv = document.getElementById('modal');
        if (formDiv.style.display === 'none' || formDiv.style.display === '') {
            formDiv.style.display = 'block';
        } else {
            formDiv.style.display = 'none'; 
        }
}

 function closeForm() {
            document.getElementById('modal').style.display = 'none';
        }

function submitForm() {
            var nome = document.getElementById('nomeProduto').value;
            var desc = document.getElementById('descProduto').value;
            var data = document.getElementById('dataProduto').value;
            
            alert('Nome da Função: ' + nome + '\nDescriçao: ' + desc  + '\nData de Entrada: ' + data);
             fetch('http://localhost:3000/addfunc', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ nome: nome, data: data, desc: desc })
            })
            .then(response => response.text())
            .then(data => {
                alert('Success: ' + data);
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Error submitting product');
            });
            abrirForm();


    const nomeFuncao = document.getElementById('nomeProduto').value;
    const descFuncao = document.getElementById('descProduto').value;

    
    if (nomeFuncao === '' || descFuncao === '') {
        alert('Por favor, preencha todos os campos!');
        return;
    }

  
    const novaEntradaDt = document.createElement('dt');
    const novaEntradaDd = document.createElement('dd');

   
    const novoLink = document.createElement('a');
    novoLink.href = '#'; // Altere para o link real se tiver uma página para a função
    novoLink.textContent = nomeFuncao;

    
    novaEntradaDt.appendChild(novoLink);
    novaEntradaDd.textContent = descFuncao;

    const listaDl = document.querySelector('dl');

    
    listaDl.appendChild(novaEntradaDt);
    listaDl.appendChild(novaEntradaDd);

    
           }


function verProds() {

        var formDiv = document.getElementById('listaFuncs');
        if (formDiv.style.display === 'none' || formDiv.style.display === '') {
            formDiv.style.display = 'block';
        } else {
            formDiv.style.display = 'none'; 
        }

  fetch('http://localhost:3000/funcs')
    .then(response => response.json())
    .then(data => {
      const lista = document.getElementById('listaFuncs');
      lista.innerHTML = ''; 

      if (data.length === 0) {
        lista.innerText = 'Nenhum produto encontrado.';
        return;
      }

     
      const ul = document.createElement('ul');

      data.forEach(func => {
        const li = document.createElement('li');
        li.textContent = `ID: ${func._id} | Nome: ${func.nome} | Descrição: ${func.desc || '-'}  Data: ${func.data || '-'}`;
        ul.appendChild(li);
      });

      lista.appendChild(ul);
    })
    .catch(error => {
      console.error('Erro ao buscar produtos:', error);
      alert('Erro ao buscar produtos');
    });
}

