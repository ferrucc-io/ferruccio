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
  }


})

delete Wordpress2016.googleFonts

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
