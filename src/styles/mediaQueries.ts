export const breakpoints = {
  sm: 480,
  md: 768,
  lg: 1024,
};

export const mediaQueries = (key: keyof typeof breakpoints) => {
  return (style: TemplateStringsArray) =>{
      return `@media (max-width: ${breakpoints[key]}px) { ${style.toString()} }`
  }
};
