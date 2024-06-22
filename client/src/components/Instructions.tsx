import { Typography } from "@mui/material";

export default function Instructions() {
    return (
        <div style={{padding: "5vh 10vw 0vh 10vw"}}>
          <Typography>
            Instructions: Prompt the model with <i>Booru tags,</i> and add any tags you do not want to generate in the <i>Negative Tags</i> section. 
            <b> Always add {"\"<lora:lora_scenery:1>, [B]\""} to the beginning of any prompts to activate the LoRA.</b>
          </Typography>

          <br></br>

          <Typography>
          The CFG scale determines how closely the model follows a given prompt. The recommended range is between 7-10.
          </Typography>

          <br></br>

          <Typography>             
          <i>Note: To limit compute costs, generation is limited to 10 queries/day.</i>
          </Typography>

          <br></br>
        </div>
    )
}