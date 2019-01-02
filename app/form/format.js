export const limit = count => value => value && value.substring(0, count);

export const onlyNumbers = value => value && value.replace(/[^\d-]/g, '');
