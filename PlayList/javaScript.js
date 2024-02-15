const playList = document.querySelector(".playList");

class Interpreter {
    constructor(name,songName,album,publication,img,sound,btn){
        
        this.name = name
        this.songName = songName
        this.album = album
        this.publication = publication
        this.img = img
        this.sound = new Audio(sound)
        this.btnText = "Play";
        this.isPlaying = false;
        this.btn = btn;

    }

render(){
    const inter = document.createElement("div");
    const h3 = document.createElement("h3");
    const h4 = document.createElement("h4");
    const h5 = document.createElement("h5");
    const p = document.createElement("p");
    const img = document.createElement("img");
    const btn = document.createElement("button");


    h3.innerHTML = this.name;
    h4.innerHTML = this.songName;
    h5.innerHTML = this.album;
    p.innerHTML = this.publication;
    img.src = this.img;
    btn.textContent = this.btnText;

    inter.classList.add("interpreter");
    inter.appendChild(h3);
    inter.appendChild(h4);
    inter.appendChild(h5);
    inter.appendChild(p);
    inter.appendChild(img);
    inter.appendChild(btn);

    btn.addEventListener("click", () => {
        if (this.isPlaying) {
            this.sound.pause();
            this.btnText = "Play";
        } else {
            this.sound.play();
            this.btnText = "Pause";
            this.sound.addEventListener('ended', () => {
                this.btnText = "Play";
                btn.textContent = this.btnText;
                this.isPlaying = false;
                inter.style.backgroundColor = ''; 
            });
        }

        btn.textContent = this.btnText;
        this.isPlaying = !this.isPlaying;

        inter.style.backgroundColor = this.isPlaying ? ' rgba(137, 43, 226, 0.534)' : '';
    });

    playList.appendChild(inter);
}    
}

class Jared extends Interpreter{
    constructor(name,songName,album,publication,img,sound){
        super(name, songName, album, publication, img, sound);
    }
}

class Coby extends Interpreter{
    constructor(name,songName,album,publication,img,sound){
        super(name, songName, album, publication, img, sound);
    }
}

class Harry extends Interpreter{ 
    constructor(name,songName,album,publication,img,sound){
        super(name, songName, album, publication, img, sound);
    }
}

class Cellos extends Interpreter{
    constructor(name,songName,album,publication,img,sound){
        super(name, songName, album, publication, img, sound);
    }
}

const interpreters = [
    [Jared,"30 Seconds to Mars"," Do Or Die (Remix)","Love Lust Faith + Dreams ",2013,"./img/Jared-Leto.jpg","./sound/Jared.mp3"],
    [Coby,"Papa roach","Periscope","Crooked Teeth",2017,"./img/papa-roach.jpg","./sound/papa-roach.mp3"],
    [Harry,"Harry Style","As It Was","Harry's House",2022,"./img/Harry-Styles.jpg","./sound/Harry.mp3"],
    [Cellos,"2 Cellos","Wake Me Up","Celloverse",2015,"./img/2Cellos.jpg","./sound/2cellos.mp3"]
]

interpreters.map((item) => {
    const interpreterObjct = new item[0](item[1],item[2],item[3],item[4],item[5],item[6]); 
    interpreterObjct.render()
});