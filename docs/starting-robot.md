# Starting The Robot

## Accessing and Deploying Code
1. If you are reading this, you probably already got a computer with the code on it. If not, find either CC1, CC2, or the other Dell laptop (not CAD laptop).
2. Get the controllers listed in the robot's Controller Bindings page and plug it into one of the USB slots in the computer.
3. Within the computer, open the latest WPILib VSCode. You should be able to open it from the Windows Desktop, or start Menu.
4. In VS Code, there should be the words "Open a folder" in blue text in the center of the IDE. Click that. It will open up the computer's files.
5. Find the robot code. The folder name should be documented in it's page on this wiki.
6. In the hierarchy within the "Explorer" tab on the left, you can navigate through the directories of the robot. One file in the root folder is called "build.gradle". This builds all the code for the robot so that you can run it. Right click on it and a list of options should show up. Click on "Deploy robot code" at the bottom. 

## Running Code
1. If it isn't already open, open Driver Station from the Windows Start Menu.
2. Open the :material-steering: tab within the driver station. Within that tab there should be an Enable and Disable switch. When enabled, the robot can move, and vice versa for when it's disabled. 
3. After making sure no one is nearby, enable the code, and you will be driving a fully functioning robot! If not, there's probably a bug somewhere or you forgot to do something.

!!! warning
    Sometimes the controller will recognize inputs but not move the robot after enabling the code. One reason for this is that the computer may be recognizing the wrong USB slot for the controller. If this is true, then navigate to the :material-usb: tab in the Drive Station. Within there, make sure your controller (the one flashing green after you press a button) is in the correct slot. Any other slot will not work. The correct controller bindings for each slot are documented in the robot's Controller Bindings page.



