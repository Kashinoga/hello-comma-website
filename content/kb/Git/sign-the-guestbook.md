---
title: "Sign the Guestbook"
type: book
---

## Overview

Learn the basics of the command line, Git, and version control by signing the [Guestbook](/about/guestbook).

## Requirements

- A good text editor of your choice
  - We like [Notepad++](https://notepad-plus-plus.org/) and [Visual Studio Code](https://code.visualstudio.com/)

## Steps

1. Visit: https://git-scm.com/
2. Download and install the latest source release for your operating system with the default installation options (recommended)

   | Operating System | Directions                                     |
   | ---------------- | ---------------------------------------------- |
   | Windows          | Download and install the latest source release |
   | Mac              | Install homebrew if needed: https://brew.sh/   |
   |                  | In Terminal, run: `brew install git`           |
   | Debian/Ubuntu    | In a terminal, run: `apt-get install git`      |
   | Other            | Please refer to the Git website                |

3. On Windows, run the newly installed Git Bash app; elsewhere, Git should be ready to go in a terminal
   - Git Bash offers a way to use git through a command line
   - The command line is often accessed through a terminal
   - The command line is generally faster to use than a GUI (graphic user interface)
4. Type: `git --version` into the terminal and look for output similar to the following

   `git version 2.30.1.windows.1`

   - If you do not get a similar message, try reinstalling git

5. Type: `pwd` and you will see the current directory that your terminal is pointing to, for example on Windows

   ```
   kashi@Zarya MINGW64 ~
   $ pwd
   /c/Users/kashi
   ```

   - On Windows
     - `kashi@Zarya` is the account-name@computer-name
     - `MINGW64` is the Windows port of the GCC C compiler used to build git and bash
       - bash is a shell, or a command line interpreter written in C
       - The authors of Git Bash probably did not bother to rename the build and thus the compiler named it after itself
     - `~` represents the user's home directory; this section changes depending on where you are in the terminal, but `~` itself always represents your home directory
     - `$` signifies that the terminal is ready to accept your input
     - `pwd` is the command to print (to the terminal screen) the working directory (the current folder that the terminal is looking at)

6. We will create a folder for this project to help keep things tidy
   - On Windows, we recommend: `/c/Users/USERNAME/GitHub`
   - `USERNAME` is the name of your home folder
   - Most terminals will begin right at your home folder
   - `GitHub` is the new project folder that we will create
   1. Type: `mkdir GitHub`
      - `mkdir` is the command to make a directory (a folder) in the current directory
   2. Type: `ls -ltr`
      - `ls` is the command to list files in the current directory
      - `-l` is the parameter for listing more detail
      - `-r` is the parameter for reversing the sort order
      - `-t` is the parameter for sorting by time last modified
      - A list of directories and files will show up, with the most recently modified entry at the bottom; this should be the new folder: `GitHub` that we just made
7. Change to the `GitHub` directory

   1. Type: `cd GitHub`
      - `cd` is the command for changing to a directory
      - Once the directory is changed, you should see your terminal reflecting this change
        ```
        kashi@Zarya MINGW64 ~/GitHub
        $
        ```
   2. Type: `ls`, you should see: `total 0`, indicating that the directory is empty

8. Go to: https://github.com/, create an account, and login
9. While on GitHub: go to Settings > Emails > Add email address, and setup your email
10. Verify your email address
11. In "Primary email address," select the email you just verified
12. Select the option to "Keep my email address private," which will assign you a GitHub email: copy this email
13. Prepare, paste, and enter the following

    `git config user.name "USERNAME"`

    - `USERNAME` can be anything, though it might help to set it as your GitHub username

14. In the terminal: prepare (replace `YOUR_GITHUB_EMAIL`), paste, and enter the following

    `git config --global user.email "YOUR_GITHUB_EMAIL@github.com"`

15. Verify your username and email are correct

    ```
    git config --global user.name
    git config --global user.email
    ```

16. In a browser, go to: https://github.com/Kashinoga/hello-comma-website
17. Click on the Fork button
    - This should redirect you to a new repository that now belongs to you, named `USERNAME`/hello-comma-website
18. Copy the repository URL
    1. Click on the green button (labeled "Code")
    2. Copy the URL (HTTPS is usually the default selection)
19. In the terminal: copy, paste, and enter the following

    `git clone https://github.com/Kashinoga/hello-comma-website.git`

20. During and after the cloning, you should see
    ```
    kashi@Zarya MINGW64 ~/GitHub
    $ git clone https://github.com/Kashinoga/hello-comma-website.git
    Cloning into 'hello-comma-website'...
    remote: Enumerating objects: 366, done.
    remote: Counting objects: 100% (366/366), done.
    remote: Compressing objects: 100% (232/232), done.
    remote: Total 366 (delta 156), reused 300 (delta 93), pack-reused 0
    Receiving objects: 100% (366/366), 87.39 KiB | 1.43 MiB/s, done.
    Resolving deltas: 100% (156/156), done.
    ```
    - This creates a new directory called `hello-comma-website` in your `GitHub` directory
21. `cd` into the `hello-comma-website` directory
22. In the terminal: copy, paste, and enter the following

    `git remote add upstream https://github.com/Kashinoga/hello-comma-website.git`

23. Type: `git remote -v`

    - This adds a new `upstream` repository, which points to the original repository
    - This allows you to sync your forked repository with the original one

    ```
    $ git remote -v
    origin    https://github.com/YOUR_USERNAME/YOUR_FORK.git (fetch)
    origin    https://github.com/YOUR_USERNAME/YOUR_FORK.git (push)
    upstream  https://github.com/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git (fetch)
    upstream  https://github.com/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git (push)
    ```

24. In your text editor, navigate to the project folder and open it: `~/GitHub/hello-comma-website/`
25. Navigate to the following directory: `hello-comma-website/content/about/guestbook`
26. Open up the following file: `guestbook.md`
27. You can ignore most of the file for now, focusing on the list of names towards the bottom of the file
28. Add your name as a new line
29. Save the file
30. In the terminal: type `git status`

    ```
    kashinoga@Zarya:~/github/hello-comma-website$ git status
    On branch main
    Your branch is up to date with 'origin/main'.

    Changes not staged for commit:
    (use "git add <file>..." to update what will be committed)
    (use "git restore <file>..." to discard changes in working directory)
            modified:   content/about/guestbook/guestbook.md

    no changes added to commit (use "git add" and/or "git commit -a")
    ```

31. Type: `git add .`
    - This adds all items listed under: `Changes not staged for commit:`
32. Type: `git status`

    ```
    kashinoga@Zarya:~/github/hello-comma-website$ git status
    On branch main
    Your branch is up to date with 'origin/main'.

    Changes to be committed:
        (use "git restore --staged <file>..." to unstage)
            modified:   content/kb/Git/guestbook.md
    ```

33. Type: `git commit -m "YOUR_MESSAGE HERE"`
