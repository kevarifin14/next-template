import Section from 'components/Section';

type HeaderProps = {
  title: string,
  description: string,
};

export function Header({
  title, description,
}: HeaderProps) {
  return (
    <Section className="text-center space-y-4">
      <h1 className="m-0">{title}</h1>

      <p className="max-w-xl mx-auto text-xl m-0">
        {description}
      </p>
    </Section>
  );
}
