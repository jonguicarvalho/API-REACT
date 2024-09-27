import { useController } from 'react-hook-form';
import TextArea from '../TextArea/TextArea';

const TextAreaField = ({ name, control, ...props }) => {
  const { field } = useController({
    name,
    control,
    defaultValue: '',
  });

  return <TextArea value={field.value} {...props} />;
};

export default TextAreaField;
