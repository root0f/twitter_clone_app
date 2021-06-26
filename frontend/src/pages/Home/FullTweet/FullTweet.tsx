import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from 'react-router-dom';
import {fetchTweetData, setTweetData} from "../../../store/ducks/tweet/actionCreators";
import {useHomeStyles} from "../theme";
import { selectIsTweetLoading, selectTweetData} from "../../../store/ducks/tweet/selectors";
import {Avatar, CircularProgress,  Paper, Typography} from "@material-ui/core";


export const FullTweet: React.FC = (): React.ReactElement | null => {
  const classes = useHomeStyles()
  const dispatch = useDispatch()
  const tweetData = useSelector(selectTweetData)
  const isLoading = useSelector(selectIsTweetLoading)
  const params: { id?: string } = useParams()
  const id = params.id

  React.useEffect(() => {
    if (id) {
      dispatch(fetchTweetData(id))
    }

    return () => {
      dispatch(setTweetData(undefined))
    }
  }, [dispatch, id])

  if (isLoading) {
    return (
      <div className={classes.tweetsCentered}>
        <CircularProgress/>
      </div>
    )
  }

  if (tweetData) {
    return (
      <Paper  className={classes.fullTweet} >
      <div className={classes.tweetHeaderUser}>
      <Avatar
        className={classes.tweetAvatar}
        alt={`Аватарка пользователя ${tweetData.user.fullname}`}
        src={tweetData.user.avatarUrl}
      />
        <Typography>
          <b>{tweetData.user.fullname}</b>&nbsp;
          <div>
            <span className={classes.tweetUserName}>@{tweetData.user.username}</span>&nbsp;
            <span className={classes.tweetUserName}>·</span>&nbsp;
            <span className={classes.tweetUserName}>1 ч</span>
          </div>
        </Typography>
      </div>
      <Typography className={classes.fullTweetText} variant='body1' gutterBottom>
        {tweetData.text}
      </Typography>
    </Paper>)
  }

  return  null
}