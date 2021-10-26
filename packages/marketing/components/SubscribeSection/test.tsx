import SubscribeSection from '.';

describe('SubscribeSection', () => {
  it('matches snapshot', () => {
    const { baseElement } = render(<SubscribeSection />);
    expect(baseElement).toMatchSnapshot();
  });
});
