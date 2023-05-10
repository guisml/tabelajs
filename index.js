function inserirAluno() {
    var tabela = document.getElementById('tabela');
  
    if (tabela == null) {
      tabela = document.createElement('table');
      tabela.id = 'tabela';
      var body = document.querySelector("body");
      body.appendChild(tabela);
      var thead = document.createElement('thead');
      tabela.appendChild(thead);
      var tr = document.createElement('tr');
      thead.appendChild(tr);
      var th1 = document.createElement('th');
      th1.innerText = 'Matrícula';
      tr.appendChild(th1);
      var th2 = document.createElement('th');
      th2.innerText = "Nome";
      tr.appendChild(th2);
      var th3 = document.createElement('th');
      th3.innerText = "Faltas";
      tr.appendChild(th3);
      var th4 = document.createElement('th');
      th4.innerText = "NotaB1";
      tr.appendChild(th4);
      var th5 = document.createElement('th');
      th5.innerText = "NotaB2";
      tr.appendChild(th5);
      var th6 = document.createElement('th');
      th6.innerText = "Média Parcial";
      tr.appendChild(th6);
      var th7 = document.createElement('th');
      th7.innerText = "Nota PR";
      tr.appendChild(th7);
      var th8 = document.createElement('th');
      th8.innerText = "Média Final";
      tr.appendChild(th8);
      var th9 = document.createElement('th');
      th9.innerText = "Status";
      tr.appendChild(th9);
    }
  
   return tabela;
  }

  function inserirAlunoNaTabela(matricula){
    var tabela = verificarTabela();

    var linha =  tabela.insertRow(-1)
    
    linha.insertCell(0).innerText = matricula;
    linha.insertCell(0).innerText = matricula;
    linha.insertCell(1).innerText = nome;
    linha.insertCell(2).innerText = faltas;
    linha.insertCell(3).innerText = notaB1;
    linha.insertCell(4).innerText = notaB2;
    linha.insertCell(5).innerText = mediaParcial.toFixed(1);
    linha.insertCell(6).innerText = notaPR;
    linha.insertCell(7).innerText = mediaFinal.toFixed(1);
    linha.insertCell(8).innerText = status;
  }


function inserirAluno(){
    var aluno = {};

    aluno.matricula = prompt('Digite a matrícula do aluno:');
    aluno.nome = prompt('Digite o seu nome:');
    aluno.faltas = parseInt(prompt('Digite a quantidade de faltas'))
    aluno.notasb1 = parseFloat(prompt('Digite a nota da B1:'))
    aluno.notasb2 = parseFloat(prompt('Digite a nota da B2:'))

    aluno.mediaparcial = (aluno.notab1 + aluno.notab2)/2
    
    var percentual_faltas = aluno.faltas/total_aulas;

    if(percentual_faltas > 0.25){
        aluno.status = 'Reprovado por falta';
        aluno.notapr ='.'
        aluno.mediafinal = aluno.mediaparcial
    }
        else{
            if(aluno.mediaparcial >= 7){
                aluno.mediafinal = aluno.mediaparcial
                aluno.status = 'Aprovado'
                aluno.notapr = '.'
            }
            else{
                aluno.notapr = parseFloat(prompt('Digite sua nota da prova pr'))
                aluno.mediafinal = (aluno.media + aluno.notapr)/2
                if(aluno.mediafinal >= 5){
                    aluno.status = 'Aprovado após recuperação';
                } else{
                    aluno.status ='Reprovado';
                }
            }
            }
        }
    

    

  
