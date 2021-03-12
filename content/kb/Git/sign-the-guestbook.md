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

1. Create a GitHub account
   1. Visit https://github.com/
2. Setup your email address on GitHub
   1. Go to `Profile Icon > Settings > Emails > Add email address` and setup your email address
   2. Verify your email address
   3. In `Primary email address` select the email address you just verified
   4. Select `Keep my email address private` and copy the provided public profile email address, which looks similarly to `12345678+USERNAME@users.noreply.github.com`
3. Download and install Git
   1. Visit https://git-scm.com/
   2. Download and install the latest source release for your operating system with the default installation options (recommended)
   - Windows
     - Download and install the latest source release
   - Mac
     - Install Homebrew if needed from https://brew.sh/
     - In Terminal, run `brew install git`
   - Debian/Ubuntu
     - In a terminal, run `apt-get install git`
   - Other
     - Please refer to the Git website
4. On Windows, run the newly installed `Git Bash` app; elsewhere, Git should be ready to go in a terminal: open a terminal
   - Git Bash offers a way to use Git through the command line with a terminal
   - The command line is often accessed through a terminal
   - The command line is generally faster to use than a GUI (graphic user interface)
5. Check the version of Git
   1. Type `git --version` into the terminal, the output looks similarly to
      - `git version 2.30.1.windows.1`
   - If you do not get a similar message, try reinstalling Git
6. Check the current working directory of the terminal

   1. Type `pwd` and you will see the current working directory that your terminal is pointing to, for example on Windows this looks similarly to

      ```
      kashi@Zarya MINGW64 ~
      $ pwd
      /c/Users/kashi
      ```

   - On Windows
     - `kashi@Zarya` is the `account-name@computer-name` of the current user on your computer
     - `MINGW64` is the Windows port of the GCC C compiler used to build Git and Bash
       - Bash is a shell, or a command line interpreter written in C
       - The authors of Git Bash probably did not bother to rename the build and thus the compiler named it after itself
     - `~` represents the current user's home directory
     - `$` signifies that the terminal is ready to accept your input
     - `pwd` is a command to print (to the terminal) the current working directory (the current folder that the terminal is pointing to)

7. Create a folder for this project
   - On Windows, we recommend `/c/Users/USERNAME/GitHub`
     - `USERNAME` is the name of your home folder
     - Generally, terminals will begin right at your home folder
     - `GitHub` is the new project folder that we will create
   1. Type `mkdir GitHub`
      - `mkdir` is a command to make a directory (a folder) in the current working directory
   2. Type `ls -lrt`
      - `ls` is a command to list files in the current directory
      - `-l` is the parameter for listing more detail
      - `-r` is the parameter for reversing the sort order
      - `-t` is the parameter for sorting by time last modified
      - A list of directories and files will show up, with the most recently modified entry at the bottom; this should be the new folder `GitHub` and looks similarly to
        ```
        kashinoga@Zarya:~$ ls -lrt
        total 4
        drwxr-xr-x 4 kashinoga stevie 4096 Mar  6 09:25 github
        ```
8. Change to the `GitHub` directory
   1. Type `cd GitHub`
      - `cd` is a command for changing to a directory
      - Once the directory is changed, the terminal looks similarly to
        ```
        kashi@Zarya MINGW64 ~/GitHub
        $
        ```
   2. Type `ls`, you should see `total 0`, indicating that the directory is empty
9. Setup your global Git username
   - This associates commits (changes) with an identity and applies to all repositories (projects from Git)
   1. Prepare, paste, and enter the following
      - `git config user.name "USERNAME"`
   - `USERNAME` can be anything, though it might help to set it as your GitHub username
10. Setup your global Git email

    - This lets GitHub associate commits to your GitHub account, allowing for easier collaboration
    - We recommend using the GitHub provided public profile email address we setup earlier

    1. In the terminal, prepare (replace `YOUR_GITHUB_PUBLIC_EMAIL`), paste, and enter the following
       - `git config --global user.email "YOUR_GITHUB_PUBLIC_EMAIL@github.com"`

11. Verify that your username and email are correct by pasting each into the terminal
    1. `git config --global user.name`
    2. `git config --global user.email`
12. Fork the Hello, Comma website GitHub repository
    1. In a browser, go to https://github.com/Kashinoga/hello-comma-website
    2. Click on the Fork button
       - This should create and redirect you to a new repository that now belongs to you, named `USERNAME`/hello-comma-website
    3. Copy the repository URL
       1. Click on the green button (labeled "Code")
       2. Copy the URL (HTTPS is usually the default selection)
    4. In the terminal, copy, paste, and enter the following
    - `git clone https://github.com/Kashinoga/hello-comma-website.git`
    5. During and after the cloning, the output looks similarly to
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
13. Change to the `hello-comma-website` directory
    1. Type `cd hello-comma-website`
14. Add an `upstream` repository
    1. In a terminal, copy, paste, and enter the following
    2. `git remote add upstream https://github.com/Kashinoga/hello-comma-website.git`
    3. This adds a new `upstream` repository, which points to the original repository
    4. This allows you to sync your local, forked repository with the remote, original one
15. Check the repository's upstream repositories
    1. Type `git remote -v` and get output that looks similarly to
       ```
       $ git remote -v
       origin    https://github.com/YOUR_USERNAME/YOUR_FORK.git (fetch)
       origin    https://github.com/YOUR_USERNAME/YOUR_FORK.git (push)
       upstream  https://github.com/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git (fetch)
       upstream  https://github.com/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git (push)
       ```
16. In your text editor, navigate to the project folder and open it
    - The path is generally `~/GitHub/hello-comma-website/`
17. Navigate to the Guestbook project directory
    - The path is `hello-comma-website/content/about/guestbook`
18. Open up the Guestbook `Markdown` file:
    - File `guestbook.md`
    - Markdown is a language for creating formatted text; in fact, this guide is written in Markdown
19. You can ignore most of the file for now, instead focusing on the list of names towards the bottom of the file, which looks similarly to

    ```
    ---
    widget: blank
    headless: true
    weight: 2

    title: Guestbook
    subtitle: Leave your mark.

    design:
      columns: 2
    ---

    - Andrew Nguyen
    - Kashinoga
    - Stevie Traveler
    # You will add a new entry here
    ```

    - Generally, a `#` preceeding a line indicates a `comment`
    - `Comments` in code are often ignored and only serve to help the developer

20. With a hyphen, add your signature as a new line, which then looks similarly to

    ```
    ---
    widget: blank
    headless: true
    weight: 2

    title: Guestbook
    subtitle: Leave your mark.

    design:
      columns: 2
    ---

    - Andrew Nguyen
    - Kashinoga
    - Stevie Traveler
    - Elizabeth "ChessMaster48" Harmon: "Let's play." # Your new entry
    ```

21. Save the file
22. Get the status of your local repository

    1. In a terminal, type `git status` and get output similarly to

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

23. Stage your changes to prepare for committing and pushing
    1. Type `git add .`
       - This adds all items listed under `Changes not staged for commit:` to the staging area
       - `Staged changes` are changes ready to be `committed`
       - Commits are saved changes ready to be `pushed`
       - A `push` is saving and uploading commits to the remote repository, allowing others to view the changes
24. Check the status again

    1. Type `git status` and get output similarly to

       ```
       kashinoga@Zarya:~/github/hello-comma-website$ git status
       On branch main
       Your branch is up to date with 'origin/main'.

       Changes to be committed:
           (use "git restore --staged <file>..." to unstage)
               modified:   content/kb/Git/guestbook.md
       ```

       - Git now lists all staged changes known as `Changes to be comitted`

25. Track your change by adding a message to it
    1. Type `git commit -m "YOUR_MESSAGE_HERE"` and replace `YOUR_MESSAGE_HERE` with a succinct summary of the changes made
       ```
       kashinoga@Zarya:~/github/hello-comma-website$ git commit -m "Git commit demo"
       [main c84117b] Git commit demo
       1 file changed, 29 insertions(+)
       ```
       - Type `git log -1` to show the last commit message
       - `Commit messages` allow you and others to keep track of changes
26. Push your changes to your remote repository
    1. Type `git push origin` and get output similarly to
       ```
       kashinoga@Zarya:~/github/hello-comma-website$ git push origin
       Enumerating objects: 17, done.
       Counting objects: 100% (17/17), done.
       Delta compression using up to 12 threads
       Compressing objects: 100% (12/12), done.
       Writing objects: 100% (12/12), 1.87 KiB | 1.87 MiB/s, done.
       Total 12 (delta 10), reused 0 (delta 0)
       remote: Resolving deltas: 100% (10/10), completed with 5 local objects.
       To https://github.com/Kashinoga/hello-comma-website.git
       7ce3c02..541ec43  main -> main
       ```
       - This saves your changes remotely
27. Create a `pull request`
    1. On GitHub, navigate to your project directory
    2. Click on `Pull request`
    3. The default branches displayed should be correct to allow you to request to merge your changes to the original repository
       - `base repository: kashinoga/hello-comma-website`
       - `base: main`
       - `head repository: USERNAME/hello-comma-website`
       - `compare: main`
    4. Enter a title and description for your pull request
    5. Use the `Create Pull Request` button to submit or save a draft
28. That's it! We will review your pull request and then accept it as applicable.
29. Treat yourself!
30. Thirty is a nice number.
