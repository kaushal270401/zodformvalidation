import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const baseStyle = {
  borderRadius: 'xl', 
  fontWeight: 'medium', 
};

const sizes = {
  sm: defineStyle({
    maxW: '45ch',
    p: '4',
  }),
  md: defineStyle({
    maxW: 'container.sm',
    p: '6',
    fontSize: 'lg',
  }),
  lg: defineStyle({
    maxW: '90ch',
    p: '8',
    fontSize: 'xl',
  }),
};
const colorfulVariant = defineStyle(props => {
  const { colorScheme: c } = props; 
  return {
    border: '2px solid black',
    marginBottom:'10ch',
    _light: {
      bg: `${c}.200`,
      color: `${c}.800`,
    },
    _dark: {
      bg: `${c}.700`,
      color: `${c}.200`,
    },
  };
});

const boldVariant = defineStyle(props => {
  return {
    borderRadius: 'none',
    border: '2px solid',
    fontFamily: 'mono',
    _light: {
      bg: 'white',
      color: 'black',
    },
    _dark: {
      bg: 'black',
      color: 'white',
    },
  };
});

const variants = {
  colorful: colorfulVariant,
  bold: boldVariant,
};

const defaultProps = {
  size: 'md',
  variant: 'colorful',
};

export const containerTheme = defineStyleConfig({
  baseStyle,
  sizes,
  variants,
  // defaultProps,
});