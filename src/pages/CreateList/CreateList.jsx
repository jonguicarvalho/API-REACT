import Button from '../../components/Button/Button';
import InputField from '../../components/InputF/InputF';

const CreateList = ({ onBackToLists, control, onCreateNewList }) => {
  return (
    <div className="task-container">
      <h1>Create List</h1>
      <Button id="button-back-task" onClick={onBackToLists}>
        Voltar
      </Button>
      <InputField name="title" control={control} placeholder="Nome da Lista" />
      <Button type="submit" onClick={onCreateNewList}>
        Criar Lista
      </Button>
    </div>
  );
};

export default CreateList;
