export const pageview = (url) => {
  window.gtag("config", process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
    page_path: url,
  });
};

type EventCategory =
  | "lead"
  | "outbound link"
  | "call to action"
  | "login"
  | "swap";

export const event = (
  category: EventCategory,
  action,
  label = "",
  params = {}
) => {
  if (process.env.NODE_ENV === "production") {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      ...params,
    });
  }
};
