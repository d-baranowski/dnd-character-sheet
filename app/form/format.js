export const limit = (count) => (value) => value && value.substring(0, count);

export const onlyNumbers = (value) => value && value.replace(/\D/g,'');

const compose = (...fns) =>
  fns.reduceRight((prevFn, nextFn) =>
      (...args) => nextFn(prevFn(...args)),
    value => value
  );
