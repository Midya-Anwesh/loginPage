export const emptyInputMessage = (fieldName: string) => `Enter ${fieldName}`;
export const notSelectedMessage = (fieldName: string) => `Select ${fieldName}`;
export const invalidMessage = (fieldName: string) => `Enter a valid ${fieldName}`;
export const minLengthMessage = (fieldName: string, minLength: number) => `${fieldName} must contain ${minLength} characters`;
export const maxLengthMessage = (fieldName: string, maxLength: number) => `${fieldName} must not be more than ${maxLength} characters`;
export const mismatchMessage = (fieldName: string, matchWith: string) => `${fieldName} does not match ${matchWith}`;