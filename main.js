const pads = document.querySelectorAll('.pad');
const sounds = document.querySelectorAll('.sound');



pads.forEach((pad, index) => {
    pad.addEventListener('mousedown', ()=>{
        pad.classList.add('pad-clicked')
        sounds[index].play();
    })
    pad.addEventListener('mouseup', ()=>{
        pad.classList.remove('pad-clicked')
        sounds[index].pause();
        sounds[index].currentTime = 0;
    })
    pad.addEventListener('mouseleave', ()=>{
        pad.classList.remove('pad-clicked')
        sounds[index].pause();
        sounds[index].currentTime = 0;
    })
    
})