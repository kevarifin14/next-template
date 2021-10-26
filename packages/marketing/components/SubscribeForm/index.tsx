import { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Input, Button, classNames, useNotifications, post, TailwindSize,
} from 'shared';

type SubscribeFormProps = {
  className?: string,
  cta?: string,
  size?: TailwindSize,
};

export default function SubscribeForm({ size, className, cta = 'Get Early Access' }: SubscribeFormProps) {
  const { addErrorNotification } = useNotifications();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async ({ email }) => {
    setLoading(true);
    try {
      await post('/api/sendgrid/marketing/contacts', { email });
    } catch (e) {
      addErrorNotification({ title: 'There was a problem', description: e.message });
    }
    setLoading(false);
  };

  const subscribeFormClassName = classNames(
    'flex space-x-4',
    className,
  );

  return (
    <>
      <form className={subscribeFormClassName} onSubmit={handleSubmit(handleSubscribe)}>
        <Input
          {...register('email', { required: 'Please enter your email address' })}
          size={size}
          placeholder="Enter Your Email"
          error={errors.email}
          type="email"
        />

        <div className="flex-shrink-0">
          <Button type="primary" gradient size={size} htmlType="submit" loading={loading}>
            {cta}
          </Button>
        </div>
      </form>
      {/* <p>{message}</p> */}
    </>
  );
}
