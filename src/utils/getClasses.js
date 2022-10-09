// This a helper method that takes array of classes and filter item classes.
export const getClasses = (classes) =>
  classes
    .filter((item) => item !== '')
    .join(' ')
    .trim();
