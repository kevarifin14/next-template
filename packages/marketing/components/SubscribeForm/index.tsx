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
  const { addErrorNotification, addSuccessNotification } = useNotifications();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async ({ email }) => {
    setLoading(true);
    try {
      await post('/api/sendgrid/marketing/contacts', { email });
      addSuccessNotification({ title: 'Thanks for subscribing!' });
    } catch (e) {
      addErrorNotification({ title: 'There was a problem', description: e.message });
    }
    setLoading(false);
  };

  const subscribeFormClassName = classNames(
    'flex flex-col space-y-2 space-x-0 sm:space-x-4 sm:space-y-0 sm:flex-row',
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
          <Button className="w-full" type="primary" gradient size={size} htmlType="submit" loading={loading}>
            {cta}
          </Button>
        </div>
      </form>
    </>
  );
}
