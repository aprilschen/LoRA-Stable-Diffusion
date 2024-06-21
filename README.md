# Scenery-Generation LoRA
This project uses a Low-Rank Approximation of a pretrained Stable Diffusion model to generate beautiful scenery. Examples of such pictures are shown below, and you can use the model generator freely at [animescenery.gen](). **Note**: To maintain low compute costs, the website rate limits users to two generations per day.

#### Tech Stack
Front-end: 
 - React
 - Material UI

Back-end:
 - Express
 - PostgreSQL

Cloud: 
 - AWS Sagemaker
 - AWS Elastic Beanstalk

#### What is Low-Rank Adaptation?
Low Rank Approximation is a technique which lossy compresses Singular Value Decomposition matrices into lower rank while maintaining the “energy” within the matrix, given by the monotonically decreasing sequence of singular values. In a process called Low Rank Adaptation, we freeze the pretrained model weights of a model and inject trainable Low Rank decomposition matrices onto their weights to quickly adapt them to specific tasks.

#### Training Details
This Low Rank Adaptation uses the base model, [Anything V5](https://huggingface.co/stablediffusionapi/anything-v5) and finetunes it using a repository of 171 images of anime scenery, which you can find [here](https://drive.google.com/drive/folders/1-0hsYi7-Nr6-jJ-IssND7krKQVwbLx_G?usp=sharing)


