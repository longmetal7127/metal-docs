# Controller Bindings

## More Cowbell

<div id="controller"></div>
<div id="controller-tm"></div>

<script src="https://unpkg.com/@popperjs/core@2/dist/umd/popper.min.js"></script>
<script src="https://unpkg.com/tippy.js@6/dist/tippy-bundle.umd.js"></script>

<script src="/assets/controller.js"></script>
<script>
    let xboxButtonMappings = {
        'left': 'Fine Arm Move Down',
        'right': 'Fine Arm Move Up',
        'dpad-up': 'Set Arm Position',
        'dpad-down': 'Set Arm Position',
        'dpad-left': 'Set Arm Position',
        'dpad-right': 'Set Arm Position',
        'bumper-left': 'Toggle Brakes',
        'x': 'Toggle Intake',
        'y': "Arm Cycle Up",
        'a': "Arm Cycle Down",
        
    };
    controllerBindings({
        controllerName: 'logitech-xbox', 
        buttonMappings:xboxButtonMappings,
        element: document.querySelector('#controller')
    });
        let tmButtonMappings = {
        'stick-button-right': 'Fine Move Right',
                'stick-button-left': 'Fine Move Left',
                        'slider': 'Turbo Mode'


    };
    controllerBindings({
        controllerName: 'thrustmaster-t16000m', 
        buttonMappings:tmButtonMappings,
        element: document.querySelector('#controller-tm')
    });

</script>
