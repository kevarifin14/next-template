import { LoadingPage } from ".";
import { render } from "@testing-library/react";
import React from "react";

describe("LoadingPage", () => {
  const renderLogoImage = (props = {}) => render(<LoadingPage {...props} />);

  it("matches snapshot", () => {
    const { baseElement } = renderLogoImage();
    expect(baseElement).toMatchSnapshot();
  });
});
