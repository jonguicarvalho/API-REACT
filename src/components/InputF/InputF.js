/*
O código que você forneceu é um exemplo de como criar um componente de campo de entrada personalizado (InputField)
que se integra com o react-hook-form usando o hook useController

integracao do input com o hook form
*/

import React, { useCallback } from 'react';
import { useController } from 'react-hook-form';

import Input from '../Input/Input';

const InputField = ({ name, control, onChangeText, ...props }) => {
  const { field } = useController({
    name,
    control,
    defaultValue: '',
  });

  const onChange = useCallback(
    (text) => {
      field.onChange(text || '');
      onChangeText && onChangeText(text);
    },
    [field, onChangeText],
  );

  return <Input value={field.value} onChange={onChange} {...props} />;
};

export default InputField;
