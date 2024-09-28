Version control System
 - version refers to the perticular state of the software.

 - A piece of the software or tool to manage versions and changes in a software.
 
 - helps us to track changes.
 - manages version and their rollback.
 
 - compare changes in version.
 - log the changes.
 - collaboration.

Git is one of the version control system. Git is different from github.

GIT :- 
    - It is open source.
    - easily maintains code integrity.
    - secure.
    - flexibility.

mkdir <directory name> to create a new folder in system.

git init :- use to create a new folder in git.

cls :- to clear command prompt.

# Important git command
1. `git init` :- It initialises git repository. A git repository is the folder managed by git where we can track all the changes we are making in the project.

`touch <filename>` :-  to create the new file.

a new version in git means a new commit

`git add <filename>` :- starts tracking new changes for the next commit in the project. 

`git commit -m <add a message> :- this creates a new version based on your prev changes.

### How exactly internally git stores data.
    - internally git is a <key, value> data store.
    key - hash of the data we wnat to store.
    value - actual data.
    - key is the 40 hexadecimal value for 

    value - git stores the compressed data into the blob and some more metadata in the header.

    blob(it is the type of the data which stores big amount of data) is big large object(full form).

    - If we have the two fils with same piece of content or data git will not replicate that.
    - Inside git content is only stored once.


How git handles the directories?
 - git had tree
tree - stores information about directories and their content.

-- git internally do a lot of optimisation the objects stored in compressed form.
-- it mainly stores data about the change and algorithemically shows us the file content with that change.

# git cat-file <flag> <hash> :- use to see type of the file and its content;
    - <flag> == -t give us the type of the file.
    - <flag> == -p print the content of the file.

head in .git folder points to the latest commit.

-- When we code it can lies in one of the following area working, staging and repo.

# Working Area :-
    The files/changes which are not in your staginf area and may be currently not handled by git are in working area. These files are also called as untracked files.

# Staging area :-
    files and changes which are surely going to be part of the next commit are in staging area(i.e. on files/changes when we do git add).
    - staging area is the place where git knows what will change between the currentt and next commit.

# Repo area :- 
    all commits.

# git rm --cashed <file_name> :- it helps to bring a file from staged to working area.

# git restore <file_name>