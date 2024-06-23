import * as React from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useState } from 'react';
import { Typography } from '@mui/material';

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


    axios.post('https://e6c0-2605-6440-3009-0-cae-a7b-7561-d6e7.ngrok-free.app/sdapi/v1/txt2img', output)
        .then((response) => {
            setImage(response.data.images[0])
            return response
        })
        .then((response) => {
          console.log(response.data.images[0])
        })
    };

  return (
      <Container style={{padding: '0vh 5vw 5vh 5vw'}}>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  name="prompts"
                  required
                  fullWidth
                  id="prompts"
                  label="Prompts"
                  autoFocus
                  multiline
                  defaultValue='<lora:lora_scenery:1>, [B]'
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  id="negativeTags"
                  label="Negative Tags"
                  name="negativeTags"
                  defaultValue="lowres, text, error, cropped, worst quality, low quality, jpeg artifacts, ugly, duplicate, morbid, mutilated, out of frame, extra fingers, mutated hands, poorly drawn hands, poorly drawn face, mutation, deformed, blurry, dehydrated, bad anatomy, bad proportions, extra limbs, cloned face, disfigured, gross proportions, malformed limbs, missing arms, missing legs, extra arms, extra legs, fused fingers, too many fingers, long neck, username, watermark, signature"
                  multiline
                />
              </Grid>
              <Grid item xs={6}>
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
              <Grid item xs={6}>
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
              <Grid item xs={6}>
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

        <Typography style={{textAlign:'center', fontSize: '3vh', padding: "3vh"}}>Output:</Typography>
        <Box sx={{textAlign: 'center'}}>
            <img style={{marginLeft: 'auto', marginRight: 'auto'}} 
            src={`data:image/png;base64, ${image}`}
            alt="Please generate an image first!"
            ></img>
        </Box>

        <Typography style={{paddingTop: "4vh"}}>Technical Details: 
          This model uses <a href='https://arxiv.org/abs/2106.09685'>Low-Rank Adaptation</a> to fine-tune a pretrained stable diffusion model to generate background scenery.
          The LoRA was trained on a hand-picked dataset of <a href='https://drive.google.com/drive/u/0/folders/1-0hsYi7-Nr6-jJ-IssND7krKQVwbLx_G'>171 images</a> and their corresponding tags were
          generated using <a href='https://github.com/Linaqruf/kohya-trainer'>Kohya Trainer.</a>
        </Typography>

        <br></br>

        <Typography>Detailed information on the mathematics behind LoRA, 
          as well as explanations of its relevant model architectures, 
          is available in the {" "}
          <a href='https://www.aprilschen.com/files/LoRA_LinAlg.pdf'>
          Low Rank Adaptation report</a> I authored as a final project for my Linear Algebra class. </Typography>
          
      </Container>
  );
}