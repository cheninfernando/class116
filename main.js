nosex=0;
nosey=0;

function preload(){
    m=loadImage("mostauche.png");
    w=loadImage("wig.png");

}

function setup(){
    canvas=createCanvas(400,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(400,400);
    video.hide();
    poseNet=ml5.poseNet(video,modelloaded);
    poseNet.on("pose",gotposes);
}

function modelloaded(){
    console.log("posenet initialized");
}

function draw(){
image(video,0,0,400,400);
image(m,nosex-60,nosey,120,75);
image(w,nosex-290,nosey-220,600,500);
}

function takesnapshot(){
    save("myfilterimage.png");
}

function gotposes (results){
if(results.length>0){
    console.log(results);
    nosex=results[0].pose.nose.x;
    nosey=results[0].pose.nose.y;
    console.log("nosex="+results[0].pose.nose.x);
    console.log("nosey="+results[0].pose.nose.y);
}
}