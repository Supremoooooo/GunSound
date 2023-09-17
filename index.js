var numberOfGunlButtons = document.querySelectorAll(".gun").length;
for (var i = 0; i < numberOfGunlButtons; i++) {

    document.querySelectorAll(".gun")[i].addEventListener("click", function() {

        let buttons = this.innerText;
        buttonAnimation(buttons)
        playSound(buttons);
    })
}
document.addEventListener("keydown",function(e){
    buttonAnimation(e.key)
    playSound(e.key);
})

        function playSound(key){
        switch (key) {
            case "a":
                var Ak47 = new Audio ("Sound/AK47.mp3");
                Ak47.play()
                break;
        
            case "t":
                var Colt = new Audio ("Sound/colt.mp3"); Colt.play();
                break;

            case "b":
                var BarrettM8 = new Audio ("Sound/BarretM8.mp3");
                BarrettM8.play();
                break;

            case "m":
                var Machine = new Audio ("Sound/MachineGun.mp3");
                Machine.play();
                break;

                case "z":
                var Bazooka = new Audio ("Sound/Bazooka.mp3");
                Bazooka.play();
                break;

                case "c":
                var Carbine = new Audio ("Sound/Carbine.mp3");
                Carbine.play();
                break;

            default:
                break;
        }
}
function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function() {
    activeButton.classList.remove("pressed");
    }, 100);
}
