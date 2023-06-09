# Git

---
---

<br/>

---

<br/>

## Git commands
a version control to keep track of your code.

<br/>

### git checkout -b <name>
A command to create and switch to a new branch named <name>.

<br/>

### git add <file_name>
A command to have on file in staging area to track of.

<br/>

### git checkout -b <branch_name>
A command to create and switch to new branch.


<br/>

### git commit -m "Initial commit"
A command to commit. Often times, the first commit of a repo will have the message "Initial commit". When you make a commit, whatever is in the staging area will be added to your git history.

<br/>

### git log 
A command to show commit history.
In logs, feat means feature.

<br/>

### git log --oneline
A condense version of git log

<br/>


### git log -<number>
A commands to show logs from current.

<br/>

### git diff
A command to show changes in changed files.

<br/>

### git branch <branch_name>

A command to create a new branch. Branches often start with fix/ or feat/. When you git branch without name, it shows branches.

<br/>

### git merge <branch_name>

A command to bring changes from a branch into the branch you are currently on.

<br/>

### git branch -d <branch_name>

A command to delete a feature branch you added.

<br/>

### git rebase <branch_name>

A command that rewind the branch you are on to where it last matched <branch_name>, then, add the commits from branch_name that aren't. After that, it adds the commits you made to this here branch on top. It happens that the codes conflicts to each other.

<br/>

### git rebase --interactive <branch_name>

A command to be used to manipulate commits interactively with its other commands. When you want to fix it, use rebase main that makes same hashes. Its' used delete, squash, etc.

<br/>

### git rebase --interactive -root

A command to rebase back to your very first commit. It's often used to rename a commit's message. When you want to do merge, don't use this command. Because it changes commit's hash. When you want to fix it, use rebase main that makes same hashes.

<br/>


### git stash

A command that you can put your changes aside with.

<br/>

### git stash list

A command that you can see list you put aside with list.

<br/>

### git stash show <HEAD~#>

A command that you can see a condensed version of the changes in the latest stash.

<br/>

### git stash show <HEAD~#> -p

A command that you can see a condensed version of the full changes in the latest stash.(-p=--patch)

<br/>

### git stash pop

A command that you can bring changes you put aside to list.

<br/>

### git stash apply

A command that you can add the latest stash while keeping it in the list with.

<br/>

### git stash show <stash_name>

A command to select one other than the latest one.(the most recent stash : stash@{0})

<br/>

### git stash drop <stash_name>

A command to drop one of stashes.

<br/>

### git reset <HEAD~#> <flags>

A command to travel to any point in your commit history for a few ways to remove or undo a commit. If you used the --hard flag with the reset, the changes would have not been added to the working tree and if you used the --soft flag, the changes would have been added to the working tree and to staging.

ex)  git reset HEAD~1 (a reference of HEAD to the last commit)

<br/>

### git revert <HEAD~#> <flags>

A command to undo a commit when you don't want to lose the commit from the history.


<br/>

---

<br/>


## .env

a file that's used to store environment variables for running code and sensitive information in it.

## sample.env

a file to let you know the variables that are in ".env". When someone wants to run your repo, they will know that they need to create a .env file and add a value in it.

## .gitignore

a file that's used to keep things you don't want to include in a repo from being tacked by git.