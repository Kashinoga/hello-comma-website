---
title: "Setup Terraria TShock Server"
type: book
---

## Overview

How to setup a Terraria Server on a Raspberry Pi.

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
3. Install screen

   `sudo apt install screen`

4. Install mono: https://www.mono-project.com/download/stable/#download-lin-raspbian
5. Download and extract TShock on the Pi
   - Visit https://github.com/Pryaxis/TShock and download the official release (recommended over the experimental release)
   - We recommend extracting to an easily manageable directory like /opt/tshock
6. Perform these setup steps based on your environment: https://tshock.readme.io/docs/getting-started
   - In this case, following Linux specific remarks
7. Exit the server program
8. (Optional) Create a script to enable automatic startup of the Terraria server

   - Inside the TShock directory, create a new script file with any preferred name

     `$ vi startTerraria.sh`

     - Inside the script file: paste and edit the following commands and parameters

       `/usr/bin/screen -dmS Terraria-Server mono TerrariaServer.exe -configpath /opt/tshock/config -logpath /opt/tshock/logs -world /opt/terraria-worlds/myWorld.wld -maxplayers 16`

       - This uses the screen program to run the Terraria server program with parameters
       - Learn more about the command line parameters here: https://tshock.readme.io/docs/command-line-parameters
       - Save and quit with: hit the ESC key, type `:wq`, then hit the ENTER key

   - Test the script by running it

     `./startTerraria.sh`

     - If you cannot run the script, add execute permissions

       `chmod +x startTerraria.sh`

       `screen -list`

       - If no screens are available, check to see if TerrariaServer.exe has execute permissions

         `ls -l`

       - If necessary, grant permissions

         `chmod +x TerrariaServer.exe`

   - Schedule the script to run on startup with the crontab program

     `crontab -e`

   - Paste the following as a new entry:

     `@reboot /home/pi/Downloads/terraria/startTerraria.sh`

   - Save and quit
