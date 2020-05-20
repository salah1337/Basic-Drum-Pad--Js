const pads = document.querySelectorAll('.pad');
const sounds = document.querySelectorAll('.sound');

const nameWithExt = sounds[4].src.split('samples/').pop();
const soundName = nameWithExt.substring(0, nameWithExt.indexOf(".wav"));

sounds.forEach((sound, index) => {
    const nameWithExt = sounds[index].src.split('samples/').pop();
    pads[index].children[0].innerHTML = nameWithExt.substring(0, nameWithExt.indexOf(".wav"));
})

pads.forEach((pad, index) => {
    pad.addEventListener('mousedown', ()=>{
        pad.classList.add('pad-clicked');
        playSound(index);
    })
    pad.addEventListener('mouseup', ()=>{
        pad.classList.remove('pad-clicked')
    })
    pad.addEventListener('mouseleave', ()=>{
        pad.classList.remove('pad-clicked')
        stopSound(index)
    })
    
})

function playSound(index) {
    if ( !sounds[index].paused ){
        sounds[index].pause();
        sounds[index].currentTime = 0;
    }
    sounds[index].play();
}

function stopSound(index) {
    sounds[index].pause();
    sounds[index].currentTime = 0;
}

function stopAllSounds() {
    sounds.forEach(sound => {
        sound[index].pause();
        sound[index].currentTime = 0;
    })
}