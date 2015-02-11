RiftSketch - DevOps
====

### Build
This is a fork of Brian Peiris' RiftSketch for DevOps class.

RiftSketch is an AngularJS webapp. I configured Jenkins for a build server.

npm must be installed on the target system. Then install bower using npm.
Run `bower install` at the location of the code to install dependencies.
This should create a `bower_components/` directory if successful.

#### Requirements
- The ability to trigger a build in response to a git commit via a git hook.
    + I added a webhook on GitHub and made Jenkins listen on that URL

![hook](images/hook.png)

- The ability to setup dependencies for the project and restore to a clean state.
    + I execute a shell command to run `bower install` to setup dependencies.
    + I added an 'Additional Behaviour' to wipe the repository before every build to restore to a clean state.
    
![dependencies](images/dependencies.png)


- The ability to execute a build script (e.g., shell, maven)
    + I execute a shell command to run `bower install` to setup dependencies.
    + see above screenshot
- The ability to run a build on multiple nodes (e.g. jenkins slaves, go agents, or a spawned droplet/AWS.).
    + NOT IMPLEMENTED
- The ability to retrieve the status of the build via http.
    + The status of the most recent build can be retrived by executing a GET request to `http://devops-jenkins.cloudapp.net:8080/job/RiftSketch/lastBuild/api/json`

![build status](images/buildStatus.png)
