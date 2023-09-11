difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup() {
    video =  createCapture(VIDEO);
    video.size(550, 500);
    video.position(150, 130);

    canvas = createCanvas(490, 480);
    canvas.position(860, 130);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
   
}

function modelLoaded() {
    console.log('PoseNet Is Initialized!');
}

function draw() {
    background('#CCE2CB');

    textSize(difference);
    textSize(10);
    fill('#FFE787');
    text('Miwa', 50, 400);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        

    }
}


