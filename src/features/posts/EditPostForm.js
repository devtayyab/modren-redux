import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { postUpdated, selectPostById } from './postsSlice'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { FormControl,Card } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
 
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '25ch',
    },
    containers:{
      maxWidth:'100%',
      display:'flex',
      },
      card:{
        width:'50%',
        textAlign:'center',
      },
      content:{
          height:'300px',

      }

}));
export const EditPostForm = ({ match }) => {
  const classes = useStyles();
  const { postId } = match.params

  const post = useSelector(state => selectPostById(state, postId))

  const [title, setTitle] = useState(post.title)
  const [content, setContent] = useState(post.content)

  const dispatch = useDispatch()
  const history = useHistory()

  const onTitleChanged = e => setTitle(e.target.value)
  const onContentChanged = e => setContent(e.target.value)

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postUpdated({ id: postId, title, content }))
      history.push(`/posts/${postId}`)
    }
  }

  return (
    <section className={classes.container}>
    <Card elevation={3} className={classes.card}>
      <h2>Edit Post</h2>
      <FormControl>
      <TextField
          label="Title"
          id="margin-none"
          defaultValue={title}
          className={classes.textField}
          
        
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          className={classes.content}
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
      </FormControl>
      <Button type="button" variant="contained" onClick={onSavePostClicked}>
        Save
      </Button>
    </Card>
    </section>
  )
}