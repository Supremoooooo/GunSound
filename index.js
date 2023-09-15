var numberOfGunlButtons = document.querySelectorAll(".gun").length;
for (var i = 0; i < numberOfGunlButtons; i++) {

    document.querySelectorAll(".gun")[i].addEventListener("click", function() {

        let buttons = this.innerText;

        switch (buttons) {
            case "Ak47":
                var Ak47 = new Audio ("Sound/AK47.mp3");
                Ak47.play()
                break;
        
            case "Colt":
                var Colt = new Audio ("Sound/colt.mp3"); Colt.play();
                break;

            case "BarrettM8":
                var BarrettM8 = new Audio ("Sound/BarretM8.mp3");
                BarrettM8.play();
                break;

            case "Machine":
                var Machine = new Audio ("Sound/MachineGun.mp3");
                Machine.play();
                break;

                case "Bazooka":
                var Bazooka = new Audio ("Sound/Bazooka.mp3");
                Bazooka.play();
                break;

                case "Carbine":
                var Carbine = new Audio ("Sound/Carbine.mp3");
                Carbine.play();
                break;

            default:
                break;
        }

    });
}