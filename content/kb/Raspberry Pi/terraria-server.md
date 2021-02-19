---
title: "Setup Terraria TShock Server"
type: book
---

## Overview

This describes how to setup a Terraria Server on a Raspberry Pi.

## Requirements

- A Raspberry Pi
  - This guide was written using a Raspberry Pi 4 Model B 4/8GB
  - Other models may have varying performance, or be unable to support Terraria at all
- TShock for Terraria
- Familiarity with the command line

## Steps

1. Setup the Raspberry Pi
2. (Optional) Setup remote access to the Pi
   - This allows easy management of the Pi without having to physically interact with the device itself
   - For example: connecting to the Pi with your primary desktop and controlling it from there
   - Follow these steps for your setup: https://www.raspberrypi.org/documentation/remote-access/ssh/
3. Download and extract TShock on the Pi
   - Visit https://github.com/Pryaxis/TShock and download the official release (recommended over the experimental release)
   - We recommend extracting to an easily manageable directory like /home/pi/Downloads/terraria
4. Perform these setup steps based on your environment: https://tshock.readme.io/docs/getting-started
   - In this case, following Linux specific remarks
5. Exit the server program
6. (Optional) Create a script to enable automatic startup of the Terraria server

   - Inside the TShock directory, create a new script file with any preferred name

     `$ vi startupTerrariaOnBoot.sh`

     - Inside the script file: paste and edit the following commands and parameters

       `/usr/bin/screen -dmS Terraria-Server /home/pi/Downloads/terraria/TerrariaServer.exe mono TerrariaServer.exe -configpath /home/pi/Downloads/terraria -logpath /home/pi/Downloads/terraria/logs -world /home/pi/Downloads/terraria/myWorld.wld -maxplayers 10`

       - This uses the screen program to run the Terraria server program with command line parameters
       - Learn more about the command line parameters here: https://tshock.readme.io/docs/command-line-parameters
       - Save and quit with: hit the ESC key, type `:wq`, then hit the ENTER key

   - Test the script by running it

     `./**startupTerrariaOnBoot**.sh`

     - If you cannot run the script, add execute permissions

       `chmod +x startupTerrariaOnBoot.sh`

       `screen -list`

       - If no screens are available, check to see if TerrariaServer.exe has execute permissions

         `ls -l`

       - If necessary, grant permissions

         `chmod +x TerrariaServer.exe`

   - Schedule the script to run on startup with the crontab program

     `crontab -e`

   - Paste the following:

     `@reboot /home/pi/Downloads/terraria/startupTerrariaOnBoot.sh`

   - Save and quit
