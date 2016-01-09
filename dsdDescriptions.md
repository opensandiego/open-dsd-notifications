
# OpenDSD Notifications

## Development Services Department, City of San Diego

For the first time, the City of San Diego’s Development Services Department (DSD) has released to the public its Project Tracking System (PTS) in web-based format. PTS is an in-house software system used to both manage and track the City's land development permit processing functions.

There are essentially three parts of the system: Code Enforcement, Ministerial Permits, and Discretionary Permits. Code enforcements are primarily complaint-driven, while permits relate to different city projects. Projects can be either Ministerial (i.e. "over the counter" permits like building permits, electrical, and mechanical permits). Discretionary projects require a higher level of review (e.g. neighborhood use/development permit, conditional use permit).


### Code Enforcement

Code Enforcement ([map search](http://opendsd.sandiego.gov/web/maps/cecase)) is primarily complaint driven and consists of complaints, which are entered in the system as `Cases` and assigned a `Case Number` and an `Investigator`. The investigator takes a series of steps, such as sending out an initial notice, investigating the site/research, etc. Various timelines and reminder/follow-up dates are provided for follow-up and action toward correcting the complaint before the case is eventually closed.

#### Dataset ([Information](http://www.sandiego.gov/development-services/opendsd/codenforcement.shtml))

* _CaseId_ -- this would be the Code Enforcement Case ID number
* _CaseDepiction_ -- I'm not sure what this stands for. I'm checking with Jim Myers to see if there is a document that describes all of the field labels.
* _SortableStreetAddress_ -- it looks like this puts the Street Name first, and the street number after so that it can be sorted in a list
* _APN_ -- this is the Assessors Parcel Number
* _Mapreference_ -- I believe this is the Thomas Bros. Map Code

### Ministerial Permits
Ministerial permits ([map search](http://opendsd.sandiego.gov/web/maps/approvalsministerial)) are generally construction permits which are obtained via a staff-level/other-the-counter type decision. These can include things like building permits, right-of-way permits, etc.

### Discretionary Permits
Discretionary permits ([map search](http://opendsd.sandiego.gov/web/maps/approvalsdiscretionary)) consist of projects where a Process 2 or higher decision is required before a construction permit/ministerial permit can be issued.


## API Endpoints

* Documented here: http://www.sandiego.gov/development-services/opendsd/pdf/opendsdapiv20141031.pdf
* Undocumented API endpoints are used by the map searches above; open the webpage and view source :)

## Other links

* [OpenDSD Website](http://www.sandiego.gov/development-services/opendsd/index.shtml)
* [Search by Data Tips](http://www.sandiego.gov/development-services/opendsd/pdf/datatips.pdf) 



