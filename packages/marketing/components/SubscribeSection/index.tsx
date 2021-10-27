import { Card } from 'shared';

import Section from 'components/Section';
import SubscribeForm from 'components/SubscribeForm';

type SubscribeSectionProps = {
  title?: string,
  description?: string,
  subscribeCta?: string,
};

export default function SubscribeSection({
  title, description, subscribeCta,
}: SubscribeSectionProps) {
  return (
    <Section size="7xl">
      <Card
        className="grid grid-cols-1 gap-8 lg:grid-cols-2 items-center py-8 px-4 lg:px-16 lg:py-24"
        type="primary"
      >

        <div className="space-y-2">
          <h1 className="text-white text-2xl font-extrabold m-0">
            {title}
          </h1>
          <p className="text-gray-200 m-0">
            {description}
          </p>
        </div>

        <SubscribeForm size="lg" cta={subscribeCta} />

      </Card>
    </Section>
  );
}
