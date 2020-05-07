function Movie_OnStart(){
StackTrace="Al Iniciar";
SoundPlay("star", true);
VideoSetVolume("video",0);
SoundSetVolume("star", 30);

}

function Frame__0_0(ID){
StackTrace="Escena 1 Fotograma 0";
Pause();

}

function Frame__1_0(ID){
StackTrace="Escena 2 Fotograma 0";
Pause();

}

function Button1_OnClick(){
StackTrace="Button1.Al Hacer Clic";
GotoSceneName("sonido");
SoundPlay("mlem", false);

}

function ToggleButton1_OnClick(){
StackTrace="ToggleButton1.Al Hacer Clic";
SoundPlay("mlem", false);
VideoSetVolume("video", 100);


}

function ToggleButton1_OnRelease(){
StackTrace="ToggleButton1.Al Liberar";
VideoSetVolume("video", 0);
SoundPlay("mlem", false);
}

function ToggleButton3_OnClick(){
StackTrace="ToggleButton3.Al Hacer Clic";
VideoPause("video");
SoundPlay("mlem", false);

}

function ToggleButton3_OnRelease(){
StackTrace="ToggleButton3.Al Liberar";
VideoResume("video");
SoundPlay("mlem", false);

}

function Button2_OnClick(){
StackTrace="Button2.Al Hacer Clic";
GotoSceneName("video");
SoundPlay("mlem", false);


}

function ToggleButton2_OnClick(){
StackTrace="ToggleButton2.Al Hacer Clic";
SoundPause("star");
SoundPlay("mlem", false);
}

function ToggleButton2_OnRelease(){
StackTrace="ToggleButton2.Al Liberar";
SoundResume("star");
SoundPlay("mlem", false);

}

