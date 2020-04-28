import COLORS from './colors';

const shadow = {
  shadowColor: COLORS.shadow,
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,

  elevation: 5,
};

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

const boxPadding = {
  marginVertical: 10,
  marginHorizontal: 20,
};

export const FONT_FAMILY = 'Helvetica Neue';

const fontStyles = {
  header: {
    fontSize: 20,
    color: COLORS.text.highlight,
    fontWeight: 'bold',
    fontFamily: FONT_FAMILY
  },
  text: {
    fontSize: 12,
    color: COLORS.text.primary,
    fontFamily: FONT_FAMILY
  },
  subtext: {
    fontSize: 10,
    color: COLORS.text.secondary,
    fontFamily: FONT_FAMILY
  }
};

module.exports = {
  fontStyles,
  circle,
  shadow,
  boxPadding,
};