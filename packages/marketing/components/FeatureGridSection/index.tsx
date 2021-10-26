import { CheckCircleIcon } from 'shared';

export type IFeature = {
  name: string,
  description: string,
};

type FeatureGridSectionProps = {
  title: string,
  description?: string,
  features: IFeature[],
};

export default function FeatureGridSection({
  title, description, features,
}: FeatureGridSectionProps) {
  return (
    <div className="prose dark:prose-light max-w-none">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">{title}</h2>
          <p className="mt-4 text-xl">
            {description}
          </p>
        </div>
        <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
          {features.map((feature) => (
            <div key={feature.name} className="relative">
              <dt className="flex space-x-2">
                <CheckCircleIcon />
                <h3 className="text-xl font-medium m-0">{feature.name}</h3>
              </dt>
              <dd className="mt-2 ml-8 text-base">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
