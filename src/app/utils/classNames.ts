export function className(...classes: (string | false | undefined)[]) {
  return classes.filter(String).join(" ");
}
