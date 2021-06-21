## Intro to Web Development - Homework Exercises

In this repo, you will find starter files for all homework assignments for CS 410/510: Intro to Web Development. Check Canvas or Drive for more details on each assignment.

### Homework Assignments

- [Homework 0 - Git / Setup](https://github.com/caterinasworld/webdev-homework/blob/main/hw0/hw0.md)
- Homework 1 - HTML / Accessibility
- Homework 2 - CSS
- Homework 3 - CSS Layout
- Homework 4 - JavaScript
- Homework 5 - JavaScript / APIs

Check Canvas for more information on each assignment

### Setting Up The Homework Repo

For more detailed instructions on how to set up the homework repo, take a look at the [hw0.md](https://github.com/caterinasworld/webdev-homework/blob/main/hw0/hw0.md) file.

1. Clone the repo.

```console
$ git clone https://github.com/caterinasworld/webdev-homework webdev-homework
```

2. Navigate into the newly created `webdev-homework` folder and rename the remote.

```console
$ git remote rename origin upstream
```

3. Navigate to your GitHub account and create a new **private repo**, i.e.webdev-homework.

4. Add collaborator(s). Go to 'Settings' --> 'Manage Access' --> click the 'Invite a collaborator' button.

5. Add the GitHub repo that you created as a remote.

```console
$ git remote add origin https://github.com/student/webdev-homework.git

$ git remote -v
origin	  https://github.com/student/webdev-homework.git (fetch)
origin	  https://github.com/student/webdev-homework.git  (push)
upstream	hhttps://github.com/caterinasworld/webdev-homework.git (fetch)
upstream	https://github.com/caterinasworld/webdev-homework.git (push)
```

6. Update the branch name to 'main'.

```console
$ git branch -M main
```

7. Push the files you cloned into your newly created private remote.

```console
$ git push -u origin main
```
