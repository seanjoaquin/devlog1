# devlog1

## Overview:

devlog1 is a personal profile testing repository for Sean Joaquin. It will focus on serving as the version control of the website "devlog1" for constant updates of this repository.
Mainly built for girlfriend to keep up with what Sean is working on and what he has progressed on.

## Team members:

Sean Joaquin - Team leader / Developer

## How to setup:

To get started with development, run those command in your system: 

```
git clone https://github.com/seanjoaquin/devlog1.git
cd devlog1
```

## Guidelines:

To add a feature, create a new `feature/{name}` branch and commit.
Next step, open a Pull Request on `develop` branch, and after finalising features in the `develop` branch, open finallized version Pull Request on `main` branch.

## Projects Workflow Policies for Kanban:

- **Product Backlog**: Holds all upcoming user stories. Stories have a list of tasks attached to them.
- **Sprint Backlog**: Contains tasks that are selected for the upcoming sprint.
- **In Progress**: A team member moves a task here only after assigning it to themselves and creating a feature branch for it. Respect the WIP limit.
- **Review**: A task is moved to this column only when it is locally tested and a PR has been created for merging the feature branch dedicated to this task. PRs must reference the related issue (e.g., “Closes #5”).
- **Done**: Tasks are moved to this column only when the PR is approved and the dedicated feature branch is merged with the develop branch

## License

> This project is under MIT License
