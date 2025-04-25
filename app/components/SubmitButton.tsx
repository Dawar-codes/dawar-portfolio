'use client';

import { useFormStatus } from 'react-dom';
import Button from './ui/Button';

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button title="Send a message" disabled={pending} loading={pending} />
  );
};

export default SubmitButton;
