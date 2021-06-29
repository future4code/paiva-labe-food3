import { createMuiTheme } from '@material-ui/core/styles';
import { primaryColor, baseColor } from "./colors"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: primaryColor,
      contrastText: "black"
    },
    
    text: {
      primary: baseColor
    }
  }
})

export default theme