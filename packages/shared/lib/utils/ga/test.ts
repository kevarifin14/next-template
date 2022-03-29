import { pageview, event } from ".";

describe("Google Analytics", () => {
  const mockGtag = jest.fn();

  const mockUrl = "https://mock.com";
  const mockCategory = "login";
  const mockAction = "action";
  const mockLabel = "label";
  const mockEmail = "mock@gmail.com";
  const mockParams = {
    event_category: mockCategory,
    event_label: mockLabel,
    email: mockEmail,
  };

  describe("window ready", () => {
    beforeEach(() => {
      window.gtag = mockGtag;
      jest.clearAllMocks();
    });

    describe("pageview", () => {
      it("triggers gtag config", () => {
        pageview(mockUrl);

        expect(mockGtag).toHaveBeenCalledWith(
          "config",
          "TEST_GOOGLE_ANALYTICS",
          { page_path: mockUrl }
        );
      });
    });

    describe("event", () => {
      it("triggers gtag event", () => {
        event(mockCategory, mockAction, mockLabel, { email: mockEmail });

        expect(mockGtag).toHaveBeenCalledWith("event", mockAction, mockParams);
      });

      it("triggers gtag event", () => {
        event(mockCategory, mockAction);

        expect(mockGtag).toHaveBeenCalledWith("event", mockAction, {
          event_category: "login",
          event_label: "",
        });
      });
    });
  });
});
