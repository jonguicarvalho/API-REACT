import Button from '../../components/Button/Button';
import InputField from '../../components/InputF/InputF';
import './styles.css';

const UpdateList = ({ list, onBackToLists, control, onDeleteList, onUpdateList }) => {
  return (
    <div className="update-task-container">
      <h1>Página de Atualização</h1>
      <Button id="button-back-task" onClick={onBackToLists}>
        Voltar
      </Button>
      <p className="old-list">
        Nome atual: <b>{list.title}</b>
      </p>
      <InputField name="title" control={control} placeholder="Alterar Lista" />
      <Button id="button-update" type="submit" onClick={onUpdateList}>
        Alterar Lista
      </Button>
      <Button id="button-delete" onClick={onDeleteList}>
        Deletar Tarefa
      </Button>
    </div>
  );
};

export default UpdateList;
