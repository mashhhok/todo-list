export const MainColors = {
  white: '#FFFFFF',
  whiteSmoke: '#F5F5F5',
  whiteCoffee: '#ECD9D8',
  argent: '#BFBFBF',
  darkLiver: '#4D4D4D',
}
export const colors = {
  ...MainColors,
}

export const theme = {
  colors: {
    ...colors,
    // Usage
    text: colors.white,
  },
  fontFamily: {
    helvetica: 'Helvetica, sans-sarif',
    helveticaNeue: 'Helvetica Neue, sans-sarif',
  },
}
