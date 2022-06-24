tarefas = [
    {
        id: 1,
        nome: 'Faxina',
        descricao: 'Varrer a casa, juntar o lixo, organizar os móveis',
    },
    {
        id: 2,
        nome:'Banho nos pets',
        descricao: 'Banhar os animais e seca-los depois',
    },
    {
        id: 3,
        nome: 'Super mercado',
        descricao: 'Fazer as compras do mês e após isso organizar tudo na despensa'

    }
];

const findAllTarefaServices = () => {
    return tarefas;
  };

  const findByIdTarefaServices = (Id) => {
    return tarefas.find((tarefa) => tarefa.id == Id);
  };

  const createTarefaServices = (novaTarefa) => {
    const newId = tarefas.length + 1;
    novaTarefa.id = newId;
    tarefas.push(novaTarefa);
    return novaTarefa;
  };

  const updateTarefaServices = (id, tarefaEditada) => {
    tarefaEditada['id'] = id;
    const tarefasIndex = tarefas.findIndex((tarefa) => tarefa.id == id);
    tarefas[tarefasIndex] = tarefaEditada;
    return tarefaEditada;
  };

  const deleteTarefaServices = (id) => {
    const tarefaIndex = tarefas.findIndex((tarefa) => tarefa.id == id);
    return tarefas.splice(tarefaIndex, 1);
  };
 
  
  

  module.exports = {
    findAllTarefaServices,
    findByIdTarefaServices,
    createTarefaServices,
    updateTarefaServices,
    deleteTarefaServices

  }
