import { CheckCircleIcon } from 'shared';

export type IFeature = {
  name: string,
  description: string,
};

type FeatureProps = {
  feature: IFeature
};

export default function Feature({ feature }: FeatureProps) {
  return (
    <div key={feature.name} className="relative">
      <dt className="flex space-x-2">
        <CheckCircleIcon />
        <h3 className="text-xl font-medium m-0">{feature.name}</h3>
      </dt>
      <dd className="mt-2 ml-8 text-base">{feature.description}</dd>
    </div>
  );
}
