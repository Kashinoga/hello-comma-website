---
title: "Rename master Branch"
type: book
---

## Overview

How to rename the master branch in Git.

## Requirements

- An existing master branch

## Steps

In this example, we will rename "master" to "main".

1.  Rename the local master branch

    `$ git branch -m master main`

2.  Check the change

    ```
    $ git status
    On branch main
    Your branch is up to date with 'origin/master'.

    nothing to commit, working tree clean
    ```

3.  Rename the remote master branch

    `$ git push -u origin main`

4.  Remove the remote master branch

    `$ git push origin --delete master`

    - If you encounter a similar error message
      ```
      To https://github.com/example/example.git
      ! [remote rejected]   master (refusing to delete the current branch: refs/heads/master)
      error: failed to push some refs to 'https://example@github.com/example/example.git'
      ```
      - Go to the management page for the remote branch and unset it as the default branch
      - Try this step again

5.  Update any other remaining local repositories (e.g., a local master branch on another computer)

    1.  Switch to the master branch

        `$ git checkout master`

    2.  Rename the local master branch

        `$ git branch -m master main`

    3.  Grab the latest changes from the remote branch into the local branch

        `$ git fetch`

    4.  Remove the remote branch connection on the local branch

        `$ git branch --unset-upstream`

    5.  Setup a new remote branch connection on the local branch

        `$ git branch -u origin/main`
