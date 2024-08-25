

export const getScaleVariableName = (value: string, type: 'x' | 'y') => {
  return `var(--scale-${`${type}-`}${value})`;
};

export const scaleVar = (value: number, type: 'x' | 'y' = 'x') => {
  if (value.toString().includes('.')) {
    return getScaleVariableName(value.toString().split('.').join('_'), type);
  }

  return getScaleVariableName(value.toString(), type);
};