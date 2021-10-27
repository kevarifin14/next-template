import { IconType } from 'react-icons';

export type IFeature = {
  name: string,
  description: string,
  icon: IconType,
};

type FeatureProps = {
  feature: IFeature,
};

export default function Feature({ feature }: FeatureProps) {
  return (
    <div key={feature.name} className="relative">

      <dt>
        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
          <feature.icon className="h-6 w-6" />
        </div>
        <h3 className="ml-16 m-0">{feature.name}</h3>
      </dt>

      <p className="mt-2 ml-16">{feature.description}</p>
    </div>

  );
}
