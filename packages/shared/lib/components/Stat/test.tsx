import { Stat } from ".";
import { render } from "@testing-library/react";

describe("Stat", () => {
  const renderStat = (props = {}) => render(<Stat {...props} />);

  it("matches snapshot", () => {
    const { baseElement } = renderStat();
    expect(baseElement).toMatchSnapshot();
  });
});
