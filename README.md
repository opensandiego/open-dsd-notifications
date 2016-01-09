[![Join the chat at https://gitter.im/opensandiego/open-dsd-notifications](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/opensandiego/open-dsd-notifications?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

# Open DSD Notifications

A node.js app providing San Diego data to http://citygram.org, allowing anyone to stay informed about nearby events:
* building development permits
* code enforcement activity

Docs about the San Diego Development Services Department (DSD), the data available, and access points, can be [found here](https://github.com/opensandiego/open-dsd-notifications/blob/master/dsdDescriptions.md).

### Installation

1. Install <a href="https://nodejs.org/en/download/">Node and npm</a>
2. Clone this repository.
3. Enter the local repository directory, and run `npm install`


### Running the server locally

1. From the local repo, run `node app.js`
2. In your browser, browse to http://127.0.0.1:8080/dsd/code-enforcement

### Deploying the server

1. Install [Heroku CLI](https://devcenter.heroku.com/articles/heroku-command).
2. Run `heroku git:clone -a sd-notifications`
3. Enter the `sd-notifications` directory. This is a git repository, with remote `heroku`.
4. Run `git clone -f upstream git@github.com:opensandiego/open-dsd-notifications` to add your remote
5. Run `git merge upstream/master`, to merge the latest open-dsd code to the heroku master branch.
6. Run `git push` to update the heroku remote.
7. Browse to https://sd-notifications.herokuapp.com/dsd/code-enforcement to verify the server.


### <a name="section_participate"></a>How to Participate

- Chat with us on the project channel: [![Join the chat at https://gitter.im/opensandiego/open-dsd-notifications](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/opensandiego/open-dsd-notifications?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
- Email us at [opensandiego@googlegroups.com](opensandiego@googlegroups.com)
- Join our [meetups](http://www.meetup.com/Open-San-Diego)
- Review [issues](http://github.com/opensandiego/open-dsd-notifications/issues) and contribute!


### Team

- [Ben Cipollini](https://github.com/bcipolli "bcipolli") - Project leader
- [Maksim Pecherskiy](https://github.com/MrMaksimize "MrMaksimize")
- [Xavier Leonard](https://github.com/merelyanode "merelyanode")
- [Charles Baakel](https://github.com/cbaakel "cbaakel")
- [Alex Hempton](https://github.com/ahempton "ahempton")


### <a name="section_similar"></a>Related projects & Documentation

- [Citygram](https://github.com/codeforamerica/citygram/) - Front-end where users register for events. We have to add a pull request for San Diego when ready (see [sample for San Fransisco](https://github.com/codeforamerica/citygram/pull/165/files) and [guide to going live](https://github.com/codeforamerica/citygram/wiki/Going-Live))
- [Citygram services](https://github.com/citygram/citygram-services/) - Back-end list of data feeds; [we have requested they add our feed](https://github.com/citygram/citygram-services/issues/33) (Node.js application hosted on Heroku)
