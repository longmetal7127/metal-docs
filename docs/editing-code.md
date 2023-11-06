# Editing Code
## Accessing and Deploying Code
1. If you are reading this, you probably already got a computer with the code on it. If not, find either CC1, CC2, or the other Dell laptop (not CAD laptop).
2. Before anything else, open GitHub Desktop (you can look it up with the Windows Icon to find it). At the top bar, it will say "Fetch Origin", press this. 
3. Get the controllers listed in the robot's Controller Bindings page (docs.longmetal.org) and plug it into one of the USB slots in the computer.
4. Within the computer, open the latest WPILib VSCode (Search WPILib, the icon is a W surrounded by a gear). You should be able to open it from the Windows Desktop, or start Menu.
5. In WPILIB VSCode, there should be the words "Open a folder" in blue text (it is located at the "Get Started" tab which opens at launch. Click that. It will open up the computer's files.
6. Find the robot code. To find the folder name, open the Wiki tab for the robot you want to run. 
7. Back in VSCode, you should see a little icon at the top left, click it. This will let you see the different files associated with the robot folder. One file in the root folder is called "build.gradle". This builds all the code for the robot so that you can run it. Right click on the "build.gradle" file name and a list of options should show up. Click on "Deploy robot code" towards the bottom. 

!!! tip
    Read the [style guide](style-guide.md) before editing code
