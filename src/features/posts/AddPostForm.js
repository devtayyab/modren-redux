import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'
import { postAdded } from './postsSlice'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import './style.css'
import { FormControl } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    inputs:{
      margin:0,

    },
    papers:{
      width:'50%',
      textAlign:'center',
      
      
    },
    containers:{
      maxWidth:'100%',
      display:'flex',
      

      
    }
  }
));
export const AddPostForm = () => {
  const classes = useStyles();
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [userId, setUserId] = useState('')
  const dispatch = useDispatch()
  const users = useSelector(state => state.users)
  const onTitleChanged = e => setTitle(e.target.value)
  const onContentChanged = e => setContent(e.target.value)
  const onAuthorChanged = e => setUserId(e.target.value)
  const onSavePostClicked = () => {
    if (title && content) {
        dispatch(postAdded({title, content, userId, id :nanoid()}))
      

      setTitle('')
      setContent('')
    }
  }
  const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

  const usersOptions = users.map(user => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ))
  return (
    <div className={classes.container}>
    <Paper elevation={3} className={classes.papers}>
      <h2>Add a New Post</h2>
      <FormControl>
        <label htmlFor="postTitle">Post Title:</label>
        <TextField
        className={classes.inputs}
          label="Title"
          id="outlined-full-width"
          style={{ margin: 8 }}
          defaultValue={title}
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
         
          value={title}
          onChange={onTitleChanged}
        />
        <br></br>
        <label htmlFor="postContent">Content:</label>
        <TextField
         className={classes.inputs}
          id="outlined-multiline-static"
          label="content"
          multiline
          rows={4}
          defaultValue={content}
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
          value={content}
          onChange={onContentChanged}
        />
        <br></br>
         <label htmlFor="postAuthor">Author:</label>
        <select id="postAuthor"  className={classes.inputs} value={userId} onChange={onAuthorChanged}>
          <option value=""></option>
          {usersOptions}
        </select>
        <button type="button" onClick={onSavePostClicked} disabled={!canSave}>Add</button>
      </FormControl>
    </Paper>
    </div>
  )
}