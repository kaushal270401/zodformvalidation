import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system"

const baseStyle = defineStyle({
  borderRadius: 5, 
  fontWeight: "normal", 
  fontFamily: "mono",
})

const sizes = {
  md: defineStyle({
    fontSize: "md", 
  }),
}

const customVariant = defineStyle((props) => {
  const { colorScheme: c } = props
  return {
    fontFamily: "sans-serif",
    bg: `${c}.500`,
    color: 'white',
    borderRadius: '5xl',
    transition: 'transform 0.15s ease-out, background 0.15s ease-out',
    _dark: {
      bg: `${c}.200`,
      color: 'gray.800',
    },

    _hover: {
      bg: `${c}.600`,

      _dark: {
        bg: `${c}.300`,
      },
    },

    _active: {
      bg: `${c}.700`,
      transform: "scale(1, 1)",

      _dark: {
        bg: `${c}.400`,
      }
    },
  }
})
const variants = {
    custom:customVariant
  };

export const buttonTheme = defineStyleConfig({
  baseStyle,
  sizes,
  variants: {
    custom: customVariant,
  },
  defaultProps: {
    colorScheme: "violet", 
  },
})