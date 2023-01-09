## Homework 0 - Git / Setup

### Installation

1. Install [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).

2. Download [VS Code](https://code.visualstudio.com/) as your code editor.

   - Set Up VS Code to [launch from the command line](https://code.visualstudio.com/docs/editor/command-line#_launching-from-command-line).

   - Install the following extensions:
     - Live Server
     - Git Lens
     - Prettier

3. Sign up for a GitHub account and the [GitHub Student Pack](https://education.github.com/pack).

4. Set up [SSH keys for GitHub](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/connecting-to-github-with-ssh).

### Setting up the Homework Repo (with SSH)

1. Navigate to your preferred folder and clone the repo.

```console
$ git clone git@github.com:caterinasworld/webdev-homework.git webdev-homework

Cloning into 'webdev-homework'...
remote: Enumerating objects: 163, done.
remote: Counting objects: 100% (163/163), done.
remote: Compressing objects: 100% (93/93), done.
remote: Total 163 (delta 80), reused 136 (delta 61), pack-reused 0
Receiving objects: 100% (163/163), 68.15 KiB | 2.20 MiB/s, done.
Resolving deltas: 100% (80/80), done.

```

2. Navigate into the newly created `webdev-homework` folder and rename the remote.

```console
$ cd webdev-homework/

$ git remote -v
origin   git@github.com:caterinasworld/webdev-homework.git (fetch)
origin   git@github.com:caterinasworld/webdev-homework.git (push)

$ git remote rename origin homework

$ git remote -v
homework    git@github.com:caterinasworld/webdev-homework.git (fetch)
homework    git@github.com:caterinasworld/webdev-homework.git (push)
```

3. Navigate to your GitHub account and create a new **private repo**, i.e. student-repo-webdev.

   Important: Do not create a README file. There’s already one in the repository you have cloned.

4. Add your TA as a collaborator.

   Go to ‘Settings’ → ‘Manage Access’ → click the “Invite a collaborator’ button. Search for your TA’s username.
   Check Canvas for your TA's username on GitHub.

5. Add the private GitHub repository you created as a remote.

```console
$ git remote add origin git@github.com:student-username/student-repo-webdev.git

$ git remote -v
homework    git@github.com:caterinasworld/webdev-homework.git (fetch)
homework    git@github.com:caterinasworld/webdev-homework.git (push)
origin   git@github.com:student-username/student-repo-webdev.git (fetch)
origin   git@github.com:student-username/student-repo-webdev.git (push)
```

6. Check the branch name. If it's not ‘main,’ update the branch name to ‘main’.

```console
$ git branch

$ git branch -M main
```

7. Push the files you cloned into the newly created private remote repository.

```console
$ git push -u origin main
Enumerating objects: 163, done.
Counting objects: 100% (163/163), done.
Delta compression using up to 4 threads
Compressing objects: 100% (74/74), done.
Writing objects: 100% (163/163), 68.15 KiB | 13.63 MiB/s, done.
Total 163 (delta 80), reused 163 (delta 80), pack-reused 0
remote: Resolving deltas: 100% (80/80), done.
To github.com:student-username/student-repo-webdev.git
 * [new branch]      main -> main
Branch 'main' set up to track remote branch 'main' from 'origin'.
```

8. Once 'main' is set up to track the remote origin, you can push changes with the following command.

```console
$ git push
```

9. When there are updates to the homework starter files, pull the new updates from the ‘homework’ remote.

```console
$ git pull homework main
```
