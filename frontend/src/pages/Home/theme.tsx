import {makeStyles, Theme} from "@material-ui/core";
import {grey} from "@material-ui/core/colors";

export const useHomeStyles = makeStyles((theme: Theme) => ({
  wrapper: {
    height: '100vh',
  },
  logo: {
    margin: '10px 0',

  },
  logoIcon: {
    fontSize: 36,
  },
  sideMenuList: {
    position: 'sticky',
    top: 0,
    listStyle: 'none',
    padding: 0,
    margin: 0,
    maxWidth: 230,
  },
  sideMenuTweetButton: {
    padding: theme.spacing(3.5),
    marginTop: theme.spacing(3),
  },
  sideMenuListItem: {
    cursor: 'pointer',
    '&:hover': {
      '& div' : {
        backgroundColor: "rgba(29,161,242,0.1)",
        '& h6': {
          color: theme.palette.primary.main,
        },
        '& svg path': {
          fill: theme.palette.primary.main,
        },
      }
    },
    '& div': {
        display: 'inline-flex',
        position: 'relative',
        marginBottom: 10,
        padding: '0 25px 0 12px',
        borderRadius: 30,
        height: 50,
        transition: 'background-color 0.1s ease-in-out',
        alignItems: 'center',
    }
  },
  sideMenuListItemLabel: {
    fontWeight: 700,
    fontSize: 20,
    marginLeft: 15,
  },
  sideMenuListItemIcon: {
    fontSize: 32,
    marginLeft: -5,
  },
  tweetsWrapper: {
    height: '100%',
    borderRadius: 0,
    borderTop: '0',
    borderBottom: '0',
  },
  tweetWrapper: {
    color: 'inherit',
    textDecoration: 'none'
  },
  tweetsCentered:{
    marginTop: 50,
    textAlign: 'center',
  },
  tweet: {
    display: 'flex',
    alignItems: 'flex-start',
    cursor: 'pointer',
    paddingTop: 15,
    paddingLeft: 20,
    '&:hover': {
      backgroundColor: 'rgb(245, 248, 250)',
    }
  },
  tweetHeaderBackArrow: {
    marginRight: 30,
  },
  tweetHeader: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    borderTop: '0',
    borderRight: '0',
    borderLeft: '0',
    borderRadius: 0,
    top: 0,
    padding: '10px 15px 10px 0px',
    '& h6': {
      fontWeight: 800,
    },
  },
  tweetHeaderUser: {
    display: 'flex',
    alignItems: 'center',
  },
  tweetAvatar: {
    width: theme.spacing(6),
    height: theme.spacing(6),
    marginRight: 15,
  },
  tweetUserFooter: {
    position: 'relative',
    display: 'flex',
    left: -14,
    justifyContent: 'space-between',
    maxWidth: 450,
  },
  fullTweet: {
    padding: 22,
  },
  fullTweetText: {
    fontSize: 24,
    marginTop: 22,
    lineHeight: 1.3125,
    wordBreak: 'break-word',
  },
  tweetUserName: {
    color: grey[500],
  },
  rightSide: {
    paddingTop: 20,
    position: 'sticky',
    top: 0,
  },
  rightSideBlock: {
    backgroundColor: '#F5F8FA',
    borderRadius: 15,
    marginTop: 20,
    '& MuiList-root': {
      paddingTop: 0,
    }
  },
  rightSideBlockHeader: {
    borderTop: 0,
    borderLeft: 0,
    borderRight: 0,
    backgroundColor: 'transparent',
    padding: '13px 18px',
    '& b': {
      fontSize: 20,
      fontWeight: 800,
    }
  },
  rightSideBlockItem: {
    cursor: 'pointer',
    '& .MuiTypography-body1': {
      fontWeight: 700,
    },
    '& .MuiListItemAvatar-root': {
      fontWidth: 50,
    },
    '& .MuiListItemText-root': {
      margin: 0,
    },
    '&:hover': {
      backgroundColor: '#SDF3F6',
    },
    '& a': {
      color: 'inherit',
      textDecoration: 'none',
    }
  },
  addForm: {
    padding: 20,
  },
  addFormBody: {
    display: 'flex',
    width: '100%',
  },
  addFormBottom: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addFormBottomActions: {
    marginTop: 10,
    paddingLeft: 70,
  },
  addFormTextarea: {
    width: '100%',
    border: 0,
    fontSize: 20,
    outline: 'none',
    fontFamily: 'inherit',
    resize: 'none',
  },
  addFormBottomLine: {
    height: 12,
    backgroundColor: '#e6ecf0',
  },
  addFormCircleProgress: {
    position: 'relative',
    width: 20,
    height: 20,
    margin: '0 10px',
    '& .MuiCircularProgress-root': {
      position: 'absolute',
    }
  },
  addFormBottomRight: {
    display: 'flex',
    alignItems: 'center',
  },
}))