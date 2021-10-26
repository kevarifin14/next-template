import FeatureGridSection from 'components/FeatureGridSection';
import { HeroSection } from 'components/HeroSection';
import SubscribeSection from 'components/SubscribeSection';

export default function IndexPage() {
  // Feature Grid Section
  const featureGridTitle = 'All-in-one platform';
  const featureGridDescription = 'Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec.';
  const features = [
    {
      name: 'Invite team members',
      description: 'Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse est, molestie blandit quis ac. Lacus.',
    },
    {
      name: 'Notifications',
      description: 'Ornare donec rhoncus vitae nisl velit, neque, mauris dictum duis. Nibh urna non parturient.',
    },
    {
      name: 'List view',
      description: 'Etiam cras augue ornare pretium sit malesuada morbi orci, venenatis. Dictum lacus.',
    },
    {
      name: 'Boards',
      description: 'Interdum quam pulvinar turpis tortor, egestas quis diam amet, natoque. Mauris sagittis.',
    },
    {
      name: 'Keyboard shortcuts',
      description: 'Ullamcorper in ipsum ac feugiat. Senectus at aliquam vulputate mollis nec. In at risus odio.',
    },
    {
      name: 'Reporting',
      description: 'Magna a vel sagittis aliquam eu amet. Et lorem auctor quam nunc odio. Sed bibendum.',
    },
    {
      name: 'Calendars',
      description: 'Sed mi, dapibus turpis orci posuere integer. A porta viverra posuere adipiscing turpis.',
    },
    {
      name: 'Mobile app',
      description: 'Quisque sapien nunc nisl eros. Facilisis sagittis maecenas id dignissim tristique proin sed.',
    },
  ];

  // Subscribe Section
  const subscribeTitle = 'Want product news and updates?';
  const subscribeDescription = 'Sign up for our newsletter to stay up to date.';

  return (
    <div>
      <HeroSection title="Next Templates to Build" emphasizedTitle="Anything" />

      <FeatureGridSection
        title={featureGridTitle}
        description={featureGridDescription}
        features={features}
      />

      <SubscribeSection
        title={subscribeTitle}
        description={subscribeDescription}
      />
    </div>
  );
}
