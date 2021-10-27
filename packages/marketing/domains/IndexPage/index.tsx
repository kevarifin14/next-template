import { HiOutlineDesktopComputer, HiOutlineGlobe, HiOutlineLightningBolt } from 'react-icons/hi';

import FeatureGridSection from 'components/FeatureGridSection';
import FeatureSideBySideSection from 'components/FeatureSideBySideSection';
import { HeroSection } from 'components/HeroSection';
import SubscribeSection from 'components/SubscribeSection';

export function IndexPage() {
  const content = {
    hero: {
      title: 'The Next Template to Build',
      emphasizedTitle: 'Anything',
      description: 'Stop writing boilerplate code and start building from day one.',
      withSubscribeForm: true,
    },
    featureSideBySide: {
      title: 'Everything out of the box',
      description: 'A landing page, application, and design system.',
      features: [
        {
          name: 'Marketing',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
          icon: HiOutlineGlobe,
        },
        {
          name: 'Application',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
          icon: HiOutlineDesktopComputer,
        },
        {
          name: 'Design System',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
          icon: HiOutlineLightningBolt,
        },
      ],
      src: 'https://tailwindui.com/img/features/feature-example-2.png',
      reverse: true,
    },
    featureGrid: {
      title: 'All-in-one platform',
      description: 'Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec.',
      features: [
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
      ],
    },
    subscribe: {
      title: 'Want product news and updates?',
      description: 'Sign up for our newsletter to stay up to date.',
    },
  };

  return (
    <div>
      <HeroSection {...content.hero} />
      <FeatureSideBySideSection {...content.featureSideBySide} />
      <FeatureSideBySideSection {...content.featureSideBySide} reverse={false} />
      <FeatureGridSection {...content.featureGrid} />
      <SubscribeSection {...content.subscribe} />
    </div>
  );
}
