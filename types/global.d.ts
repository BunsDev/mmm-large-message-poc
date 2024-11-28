export {};

declare global {
  // Must be declared as `var` for it to be applied as a global, for some reason.
  // See: https://stackoverflow.com/a/68328575
  // eslint-disable-next-line no-var
  var IS_REACT_ACT_ENVIRONMENT: boolean;
}
