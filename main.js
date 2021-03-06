const pads = document.querySelectorAll('.pad');
const sounds = document.querySelectorAll('.sound');
const labels = document.querySelectorAll('.label');

const nameWithExt = sounds[4].src.split('samples/').pop();
const soundName = nameWithExt.substring(0, nameWithExt.indexOf(".wav"));

let controlKeys = ['L', 'K', 'J', 'H', 'G', 'F', 'D', 'S', 'Q']


//Adding name to pads (from src value)
function namePads() {
    sounds.forEach((sound, index) => {
        let folderName = 'samples/'
        const nameWithExt = sounds[index].src.split(folderName).pop();
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
            pads[index].children[0].innerHTML = nameWithExt.substring(0, nameWithExt.indexOf(".wav"));
        }else{
            pads[index].children[0].innerHTML = controlKeys[index] + '-' + nameWithExt.substring(0, nameWithExt.indexOf(".wav"));
        }
    })
}
namePads();
//Adding event listeners to each pad

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    pads.forEach((pad, index) => {
        pad.addEventListener('touchstart', () => {
            pad.classList.add('pad-clicked');
            playSound(index);
        })
        pad.addEventListener('touchend', () => {
            pad.classList.remove('pad-clicked')
        })
        pad.addEventListener('touchcancel', () => {
            pad.classList.remove('pad-clicked')
        })
        
    })
}else{
    pads.forEach((pad, index) => {
        pad.addEventListener('mousedown', () => {
            pad.classList.add('pad-clicked');
            playSound(index);
        })
        pad.addEventListener('mouseup', () => {
            pad.classList.remove('pad-clicked')
        })
        pad.addEventListener('mouseleave', () => {
            pad.classList.remove('pad-clicked')
        })
        
    })
    //Key press play 
    window.addEventListener('keydown', (e) => {
        e = e || window.event
        let letter = String.fromCharCode(e.KeyCode || e.which).toUpperCase()  
        controlKeys.forEach((key, index) => {
            if( key == letter){
                playSound(index)
                pads[index].classList.add('pad-clicked');
            }
        })
    })
    window.addEventListener('keyup', (e) => {
        e = e || window.event
        let letter = String.fromCharCode(e.KeyCode || e.which).toUpperCase()  
        controlKeys.forEach((key, index) => {
            if( key == letter){
                pads[index].classList.remove('pad-clicked');
            }
        })
    })
    //
    //
    labels.forEach((label, index) => {
        label.addEventListener('click',() => {
            let err = false;
            let newKey = prompt('What key do you wanna map this to?').toUpperCase();
            controlKeys.forEach((key, index) => {
                if( newKey == key){
                    alert('That key is already bound to another pad.')
                    err = true;
                    return;
                }
            })    
            if (err) return;
            controlKeys[index] = newKey;
            namePads();
        })
    })
}
function playSound(index) {
    if ( !sounds[index].paused ){
        stopSound(index)
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
