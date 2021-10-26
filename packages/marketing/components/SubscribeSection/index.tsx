import { Card } from 'shared';

import SubscribeForm from 'components/SubscribeForm';

type SubscribeSectionProps = {
  title?: string,
  description?: string,
};

export default function SubscribeSection({
  title, description,
}: SubscribeSectionProps) {
  return (
    <Card className="max-w-7xl mx-4 xl:mx-auto my-16 grid space-y-8 lg:space-y-0 lg:grid-cols-2 py-24 px-16 items-center" type="primary">
      <div className="">
        <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
          {title}
        </h2>
        <p className="mt-3 max-w-3xl text-lg leading-6 text-primary-200">
          {description}
        </p>
      </div>
      <SubscribeForm size="lg" />
    </Card>
  );
}
