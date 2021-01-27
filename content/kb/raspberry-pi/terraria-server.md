---
title: Terraria Server
type: book
---

How to Setup a Terraria Server on a Raspberry Pi

---

## Requirements

- A Raspberry Pi
  - This guide was written using a Raspberry Pi 4 Model B 4/8GB
  - Other models may have varying performance, or be unable to support Terraria at all
- TShock for Terraria
- Minor familiarity with the command line (particularly Linux)

## Steps

1. Setup the Raspberry Pi
2. (Optional) Setup remote access to the Pi
   - This allows easy management of the Pi without having to physically interact with the device itself
   - For example: connecting to the Pi with your primary desktop and controlling it from there
   1. Follow these steps for your setup: https://www.raspberrypi.org/documentation/remote-access/ssh/
3. Download and extract TShock on the Pi
   - Visit: https://github.com/Pryaxis/TShock and download the official release (recommended over the experimental release)
   - We recommend extracting to an easily manageable directory like: /home/pi/terraria
4. Perform these setup steps based on your environment: https://tshock.readme.io/docs/getting-started
   - In this case, following Linux specific remarks
5. Exit the server program
6. Create a script to enable startup automation of the Terraria server
   1. Inside the TShock directory, create a new script file
      - vi **startupTerrariaOnBoot**.sh (or any preferred filename)
      - Inside the script file: copy, edit the bolded parameters, and paste the following:
        - /usr/bin/screen -dmS **Terraria-Server** **/home/pi/terraria/TerrariaServer.exe** mono TerrariaServer.exe -configpath **/home/pi/terraria** -logpath **/home/pi/terraria/logs** -world **/home/pi/terraria/myWorld.wld** -maxplayers **10**
        - This uses the **screen** program to run the Terraria server program with command line parameters
        - Learn more about the command line parameters here: https://tshock.readme.io/docs/command-line-parameters
        - Save and quit with: hit the ESC key, type ":wq", then hit the ENTER key
          - Learn more about the **vi** text editor here: https://www.cs.colostate.edu/helpdocs/vi.html
7. Test the script by running it
   1. ./**startupTerrariaOnBoot**.sh
   2. If you cannot run the script, add execute permissions with: chmod +x **startupTerrariaOnBoot**.sh
   3. screen -list
   4. If no screens are available, check to see if TerrariaServer.exe has execute permissions with ls -l
   - You can grant permissions with chmod +x TerrariaServer.exe
8. Schedule the script to run on startup with the **crontab** program
   1. crontab -e
   2. Paste the following: @reboot /home/pi/terraria/**startupTerrariaOnBoot**.sh
   3. Save and quit
9. That's it! Easy, right?
