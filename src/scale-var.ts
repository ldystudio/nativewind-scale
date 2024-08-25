import { scaleVariables } from "./scale-variables";

export const getScaleVariableName = (value: string, type: 'x' | 'y', num: number) => {
  const name = `var(--scale-${`${type}-`}${value})`

  if (!scaleVariables[name]) {
    scaleVariables[name] = num
  }

  return name;
};

export const scaleVar = (value: number, type: 'x' | 'y' = 'x') => {
  if (value.toString().includes('.')) {
    return getScaleVariableName(value.toString().split('.').join('_'), type, value);
  }

  return getScaleVariableName(value.toString(), type, value);
};