import Section from 'components/Section';

import Feature, { IFeature } from './Feature';

type FeatureGridSectionProps = {
  title: string,
  description?: string,
  features: IFeature[],
};

export default function FeatureGridSection({
  title, description, features,
}: FeatureGridSectionProps) {
  return (
    <Section size="7xl">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900">{title}</h2>
        <p className="mt-4 text-xl">
          {description}
        </p>
      </div>
      <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
        {features.map((feature) => <Feature key={feature.name} feature={feature} />)}
      </dl>
    </Section>
  );
}
