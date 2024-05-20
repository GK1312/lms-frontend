interface ErrorDetail {
  message?: string;
}

interface ValidationError {
  error?: ErrorDetail;
}
export function findInputError(errors: string | any, name: string) {
  const filtered = Object.keys(errors)
    .filter((key) => key.includes(name))
    .reduce((cur, key) => {
      return Object.assign(cur, { error: errors[key] });
    }, {} as ValidationError);
  return filtered;
}
