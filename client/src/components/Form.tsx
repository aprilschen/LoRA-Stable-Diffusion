import * as React from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useState } from 'react';

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Form() {
  const [image, setImage] = useState("");
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    var output = {
        "prompt": data.get('prompts'),
        "negative_prompt": data.get('negativeTags'),
        "seed": -1,
        "batch_size": 1,
        "n_iter": 1,
        "steps": 20,
        "cfg_scale": data.get('CFGScale'),
        "width": data.get('Width'),
        "height": data.get('Height'),
        "send_images": true,
        "save_images": true
    }


    axios.post('http://127.0.0.1:7860/sdapi/v1/txt2img', output)
        .then((response) => {
            setImage(response.data.images[0])
            return response
        })
        .then((response) => {
          console.log(response.data.images[0])
        })
    };





  return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  name="prompts"
                  required
                  fullWidth
                  id="prompts"
                  label="Prompts"
                  autoFocus
                  multiline
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="negativeTags"
                  label="Negative Tags"
                  name="negativeTags"
                  defaultValue="lowres, text, error, cropped, worst quality, low quality, jpeg artifacts, ugly, duplicate, morbid, mutilated, out of frame, extra fingers, mutated hands, poorly drawn hands, poorly drawn face, mutation, deformed, blurry, dehydrated, bad anatomy, bad proportions, extra limbs, cloned face, disfigured, gross proportions, malformed limbs, missing arms, missing legs, extra arms, extra legs, fused fingers, too many fingers, long neck, username, watermark, signature"
                  multiline
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="CFGScale"
                  label="CFG Scale"
                  name="CFGScale"
                  autoComplete="7-10"
                  defaultValue={8.5}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="Width"
                  label="Width"
                  type="number"
                  id="Width"
                  defaultValue={512}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="Height"
                  label="Height"
                  type="number"
                  id="Height"
                  defaultValue={512}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
            Submit
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
  );
}