// theme.js
// importing the required chakra libraries
import { theme as chakraTheme } from '@chakra-ui/react'
import { extendTheme } from "@chakra-ui/react"

// declare a variable for fonts and set our fonts. I am using Inter with various backups but you can use `Times New Roman`. Note we can set different fonts for the body and heading.
const fonts = {
  ...chakraTheme.fonts,
  body: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
  heading: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
  mono:`consolas`
}

const colors = {
  ...chakraTheme.colors,
  brand :{
    primary: {
      500: '#2E43F0'
    },
    secondary : {
      500: '#FF5A05'
    },
    complementary : {
      300: '#f9d053',
      400: '#f7c531',
      500: '#f6bb1c',
      600: '#f6ae17',
      700: '#f59d15'
    }

  }
   
}

// declare a variable for our theme and pass our overrides in the e`xtendTheme` method from chakra
const theme = extendTheme({
  fonts : fonts,
  colors: colors
})

export default theme;
