# Open DSD Notifications

A node.js app providing San Diego data to http://citygram.org, allowing anyone to stay informed about nearby events:
* building development permits
* code enforcement activity

[![Join the chat at https://gitter.im/opensandiego/open-dsd-notifications](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/opensandiego/open-dsd-notifications?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

### <a name="section_pitch"></a>Pitch

Via a phone app, users can see building/development permit and code enforcement activity happening around them.

* Can subscribe to permit activity occurring within a certain proximity to chosen location.
* Can help increase community involvement/awareness.

### <a name="section_data"></a>Data

Raw data are scraped from The City of San Diego:

- http://opendsd.sandiego.gov/api/codeenforcement/122556
- http://www.sandiego.gov/development-services/opendsd/pdf/opendsdapiv20141031.pdf

### <a name="section_stack"></a>Stack

- Node.js
- Heroku


### <a name="section_team"></a>Team

- [Ben Cipollini](https://github.com/bcipolli "bcipolli") - Project leader
- [Maksim Pecherskiy](https://github.com/MrMaksimize "MrMaksimize")
- [Xavier Leonard](https://github.com/merelyanode "merelyanode")
- [Charles Baakel](https://github.com/cbaakel "cbaakel")
- [Alex Hempton](https://github.com/ahempton "ahempton")

### <a name="section_similar"></a>Related projects & Documentation

- [Citygram](https://github.com/codeforamerica/citygram/) - Front-end where users register for events. We have to add a pull request for San Diego when ready (see [sample for San Fransisco](https://github.com/codeforamerica/citygram/pull/165/files) and [guide to going live](https://github.com/codeforamerica/citygram/wiki/Going-Live))
- [Citygram services](https://github.com/citygram/citygram-services/) - Back-end list of data feeds; [we have requested they add our feed](https://github.com/citygram/citygram-services/issues/33) (Node.js application hosted on Heroku)


### <a name="section_participate"></a>How to Participate

- Chat with us on the project channel: [![Join the chat at https://gitter.im/opensandiego/open-dsd-notifications](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/opensandiego/open-dsd-notifications?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
- Email us at [opensandiego@googlegroups.com](opensandiego@googlegroups.com)
- Join our [meetups](http://www.meetup.com/Open-San-Diego)
- Review [issues](http://github.com/opensandiego/open-dsd-notifications/issues) and contribute!
