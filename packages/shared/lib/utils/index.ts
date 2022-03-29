export function splitName(name: string) {
  return {
    firstName: name.split(" ").slice(0, -1).join(" "),
    lastName: name.split(" ").slice(-1).join(" "),
  };
}
