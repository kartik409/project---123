nose_x = 0;
nose_y = 0;
difference = 0;
right_wrist_x = 0;
left_wrist_x = 0;


function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(550, 550);
    canvas.position(560, 90);
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded() {
    console.log("poseNet_is_initialized");
}
function gotPoses(results) {
    if (results.length>0)
    {
        console.log(results);
        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;
        console.log(nose_x, nose_y);

        left_wrist_x = results[0].pose.leftWrist.x;
        right_wrist_x = results[0].pose.rightWrist.x;
        difference = floor(left_wrist_x - right_wrist_x);
        
        console.log(left_wrist_x, right_wrist_x, difference);
    }
}
function draw() {
    background('#8c9787');
    document.getElementById("square_side").innerHTML = " width_and_height_of_the_square_will_be " + difference + "px";
    textSize(difference);
    fill('#ab9ff3');
    stroke('#121847');
    text('Kartik', 50, 400);
}