import <FTName> from '.';

describe('<FTName>', () => {
  it('matches snapshot', () => {
    const { baseElement } = render( <<FTName>></<FTName>>);
    expect(baseElement).toMatchSnapshot();
  });
});