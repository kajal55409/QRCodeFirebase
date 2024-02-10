// const Colors ={

//     ThemeColor :'#343a40',
//     ButtonColor :'#315e99',
//     white:'#FFFFFF',
//     LightTheme:'#87CEFA',
//     // backgroundColor: 'rgba(182, 21, 27, 0.08)',
//     backgroundColor:'#DCDCDC',
  
// }

// export default Colors;
import { NativeBaseProvider, extendTheme } from 'native-base';
const theme = extendTheme({
    primary: '#5DABB0',
    colors: {
      // Add new color
      primary: '#5DABB0',
      // Redefinig only one shade, rest of the color will remain same.
      amber: {
        400: '#d97706',
      },
    },
    // config: {
    //   // Changing initialColorMode to 'dark'
    //   initialColorMode: 'dark',
    // },
  });

  export default theme;