# Scenery-Generation LoRA
![Image 6](/images/6.png)
![Image 2](/images/2.png)
![Image 5](/images/5.png)

This project uses a Low-Rank Approximation of a pretrained Stable Diffusion model to generate beautiful scenery. Examples of such pictures are shown below, and you can use the model generator freely at [this link](https://main.d3nnkxq22b08y7.amplifyapp.com/). **Note**: To maintain low compute costs, the website rate limits users to 100 queries per day.

#### Tech Stack
Front-end: 
 - React
 - Material UI

Back-end:
 - Express

Cloud: 
 - AWS EC2
 - AWS Lambda
 - NGrok

 Model Development: 
 - PyTorch
 - Huggingface
 - Weights & Biases
 - Beautiful Soup

#### What is Low-Rank Adaptation?
Low Rank Approximation is a technique which lossy compresses Singular Value Decomposition matrices into lower rank while maintaining the “energy” within the matrix, given by the monotonically decreasing sequence of singular values. In a process called Low Rank Adaptation, we freeze the pretrained model weights of a model and inject trainable Low Rank decomposition matrices onto their weights to quickly adapt them to specific tasks.

#### Training Details
This Low Rank Adaptation uses the base model, [Anything V5](https://huggingface.co/stablediffusionapi/anything-v5) and finetunes it using a repository of 171 images of anime scenery, which you can find [here](https://drive.google.com/drive/folders/1-0hsYi7-Nr6-jJ-IssND7krKQVwbLx_G?usp=sharing)

#### Some more images that the finetuned model has produced
![Image 1](/images/1.png)
![Image 3](/images/3.png)
![Image 4](/images/4.png)
![Image 7](/images/7.png)
