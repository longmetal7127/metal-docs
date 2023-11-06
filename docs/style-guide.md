# Code Style Guide

This is a general style and naming guide for Longmetal code.

## General

### Naming

- **Use descriptive names**. This is the most important rule. If you can't tell what a variable is for from its name, it's not a good name.
- **Use camelCase for variables and methods**. This means that the first word is lowercase, and every word after that is capitalized. For example, `thisIsCamelCase`.
- **Use PascalCase for classes**. This means that every word is capitalized. For example, `ThisIsPascalCase`.
- **Prefix constants with `k`**. For example, `kThisIsAConstant`. Most constants should be in a central Constants class.
- **Prefix private variables with `m`**. For example, `mThisIsAPrivateVariable`.

### Formatting
- **Format code with prettier**. Prettier is a code formatter that automatically formats code to a consistent style. It is available as a VSCode extension, and a CLI.
- **Comment!** All code should be clear and well commented. Complex code should have a comment explaining what it does. All methods should have a JavaDoc comment explaining what they do and what arguments they accept. Most constants should have a comment explaining their value and <u>units</u>. All comments should be **clear and concise**.

## Commands
Most commands should be written as inline lambda commands. For example:
```java
drive.setDefaultCommand(new RunCommand(() -> { 
    double multiplier = (((joystick.getThrottle() * -1) + 1) / 2); // turbo mode
    double z = RobotContainer.joystick.getZ() / 1.5;

    drive.drive(
        -MathUtil.applyDeadband(joystick.getY() * multiplier, OperatorConstants.kDriveDeadband),
        MathUtil.applyDeadband(joystick.getX() * multiplier, OperatorConstants.kDriveDeadband),
        MathUtil.applyDeadband(z * multiplier, OperatorConstants.kDriveDeadband),
        true,
        true);

}, drive));
```
Only commands that require a large amount of *state* should be written as a separate class. However, if a command is tracking a large amount of state, consider rewriting parts into the subsystem.

## Subsystems
Subsystems should be written as a class that extends `SubsystemBase` in the subsystems folder. They should have a `periodic()` method that is called every robot loop. Subsystems should be instantiated in `RobotContainer`. Everything should be a train. `ArmTrain`. `DriveTrain`. `GripperTrain`. It just makes sense. If you disagree, you are wrong.

## Button Bindings
Button bindings are written in `RobotContainer`. If you update or create a binding, make sure to update the controller bindings page on the wiki.

## Constants
Constants should be stored in a central `Constants` class. They should be grouped in subclasses by subsystem or function. Constants should be named in `PascalCase`, and prefixed with `k`. For example, `kArmPosition`.

