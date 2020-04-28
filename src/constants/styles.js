import COLORS from './colors';

const circle = {
  backgroundColor: COLORS.background.highlightSecondary,
  width: 100,
  height: 100,
  borderRadius: 50,
  borderColor: COLORS.border.secondary,
  borderWidth: 3,
  justifyContent: 'center',
  alignItems: 'center',
};

const fontStyles = {
  header: {
    fontSize: 20,
    color: COLORS.text.highlight,
    fontWeight: 'bold'
  }
};

module.exports = {
  fontStyles,
  circle,
};