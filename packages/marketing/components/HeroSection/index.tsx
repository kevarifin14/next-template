import Section from 'components/Section';
import SubscribeForm from 'components/SubscribeForm';

type HeroSectionProps = {
  title: string,
  emphasizedTitle?: string,
  description?: string,
  withSubscribeForm?: boolean
};

export function HeroSection({
  title, emphasizedTitle, description, withSubscribeForm,
}: HeroSectionProps) {
  return (
    <Section>

      <div className="max-w-7xl mx-auto text-center prose-xl dark:prose-light py-12">

        <h1 className="font-extrabold m-0">

          <span className="mr-3">{title}</span>

          <span className="text-primary">{emphasizedTitle}</span>

        </h1>

        {description && (
          <p className="mt-3">
            {description}
          </p>
        )}

        {withSubscribeForm && <SubscribeForm className="max-w-lg mx-auto py-8" />}

      </div>
    </Section>
  );
}
