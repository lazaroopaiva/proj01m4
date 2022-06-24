const tarefaServices = require('../services/tarefa.services');
const findAllTarefaController = (req, res) => {
  const tarefas = tarefaServices.findAllTarefaServices();
  res.send(tarefas);
};


const findByIdTarefaController = (req, res) => {
  const parametroId = req.params.id;
  const escolhaTarefa = tarefaServices.findByIdTarefaServices(parametroId);
  res.send(escolhaTarefa);
};


const createTarefaController = (req, res) => {
  const tarefa = req.body;
  const novaTarefa = tarefaServices.createTarefaServices(tarefa);
  res.send(novaTarefa);
};


const updateTarefaController = (req, res) => {
  const idParam = +req.params.id;
  const tarefaEditada = req.body;
  const updateTarefa = tarefaServices.updateTarefaServices(
    idParam,
    tarefaEditada,
  );
  res.send(updateTarefa);
};


const deleteTarefaController = (req, res) => {
    const idParam = req.params.id;
    tarefaServices.deleteTarefaServices(idParam);
    res.send({ message: 'Tarefa deletada com sucesso!'});
};

module.exports = {
    findByIdTarefaController,
    createTarefaController,
    updateTarefaController,
    deleteTarefaController,
    findAllTarefaController
}













