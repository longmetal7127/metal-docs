# Controller Bindings

## XBOX Controller (Port 0)

<div id="controller"></div>


<script src="https://unpkg.com/@popperjs/core@2/dist/umd/popper.min.js"></script>
<script src="https://unpkg.com/tippy.js@6/dist/tippy-bundle.umd.js"></script>

<script src="/assets/controller.js"></script>
<script>
    let xboxButtonMappings = {
        'joystick-left': 'Drive',
                'joystick-right': 'Drive',       


    };
    controllerBindings({
        controllerName: 'logitech-xbox', 
        buttonMappings:xboxButtonMappings,
        element: document.querySelector('#controller')
    });

</script>
