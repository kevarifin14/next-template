import Section from 'components/Section';

import Feature, { IFeature } from './Feature';

type FeatureSideBySideSectionProps = {
  title: string,
  src: string,
  description?: string,
  features: IFeature[],
  reverse?: boolean,
};

export default function FeatureSideBySideSection({
  title, description, features, src, reverse,
}: FeatureSideBySideSectionProps) {
  return (
    <Section size="7xl" className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
      <div className={reverse ? 'col-start-2' : ''}>

        <h1 className="font-extrabold tracking-tight m-0 mb-2">
          {title}
        </h1>

        <p className="m-0">
          {description}
        </p>

        <dl className="mt-10 space-y-10">
          {features.map((feature) => <Feature feature={feature} />)}
        </dl>

      </div>

      <div className={reverse ? 'col-start-1 row-start-1' : ''}>
        <img className="relative mx-auto mt-16 lg:mt-0" width={490} src={src} alt="" />
      </div>
    </Section>
  );
}
