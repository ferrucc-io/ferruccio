import Typography from 'typography'
import Wordpress2016 from 'typography-theme-wordpress-2016'

Wordpress2016.overrideThemeStyles = () => ({

  'a.gatsby-resp-image-link': {
    boxShadow: 'none',
  },
  'a': {
      color: '#30323D',
      backgroundColor: '#F2E39B',
      borderRadius: '2px 2px 2px 2px',
      textDecoration: 'none',
      padding: '0px 5px',
      boxShadow: 'none',
  },
  'a:hover': {
      backgroundColor: '#E0E0E0',
  },

  'a.gatsby-resp-image-link': {
      backgroundColor: '#FFFFFF',
  },

  '.mainMenuIconFlip:hover': {
      WebkitTransform: 'rotate(180deg)',
      transform: 'rotate(180deg)',
      transition: '.3s all',
  },
  'a.no-underline':{
      backgroundColor: '#FFFFFF',
  },

  'code.language-text':{
      width: "60%",
      textAlign: "left",
      color: "white",
      padding: "7px 1rem",
      marginRight:"5px",
      marginLeft:"5px",
      borderRadius: "4px",
      backgroundColor: "#232323",
      minHeight: "60px",
      boxShadow: "0px 12px 36.8px 9.2px rgba(0, 0, 0, 0.1)",
  },


})

delete Wordpress2016.googleFonts

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
