# Controller Bindings

## XBOX Controller (Port 1)

<div id="controller"></div>

## Thrustmaster (Port 0)

<div id="controller-tm"></div>

<script src="https://unpkg.com/@popperjs/core@2/dist/umd/popper.min.js"></script>
<script src="https://unpkg.com/tippy.js@6/dist/tippy-bundle.umd.js"></script>

<script src="/assets/controller.js"></script>
<script>
    let xboxButtonMappings = {
        'bumper-left': 'Auto Aim',
        'dpad-up': 'Amp Position',
        'dpad-down': 'Intake Position',
        'dpad-left': 'Reverse Shooter',
        'dpad-right': 'Subwoofer Shoot Position',
        'bumper-left': 'Toggle Brakes',
        'x': 'Intake',
        'a': "Arm Fine Up",
        'b': "Arm Fine Down",
        'y': 'Shoot'
        
    };
    controllerBindings({
        controllerName: 'logitech-xbox', 
        buttonMappings:xboxButtonMappings,
        element: document.querySelector('#controller')
    });
        let tmButtonMappings = {
                        'trigger': "Reset NavX Yaw"


    };
    controllerBindings({
        controllerName: 'thrustmaster-t16000m', 
        buttonMappings:tmButtonMappings,
        element: document.querySelector('#controller-tm')
    });

</script>
