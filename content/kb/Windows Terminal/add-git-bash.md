---
title: "Add Git-Bash"
type: book
---

## Overview

How to add Git-Bash to Windows Terminal.

## Requirements

- Windows Terminal: https://docs.microsoft.com/en-us/windows/terminal/get-started

## Steps

1. Generate a GUID
   - https://guidgenerator.com/
2. Edit and copy the following with the new GUID
   ```
   {
    "guid": "{GUID}", // replace
    "hidden": false,
    "name": "Git-Bash",
    "commandline": "C:\\Program Files\\Git\\bin\\bash.exe" // update if necessary
    "icon": "C:\\git-icon.png", // optional
    "cursorShape": "filledBox", // optional
    "cursorColor": "#FFFF00" // optional
   }
   ```
3. Open Windows Terminal
4. Open Windows Terminal Settings
5. Find the section
   ```
     "profiles":
   {
       "defaults":
       {
           // Put settings here that you want to apply to all profiles
       },
       "list":
       [
           {
   ```
6. Paste into the list section and save
