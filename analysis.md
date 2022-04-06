# Analysis - Snagajob Assignment

## Overview

This document analyzes the details of the web app described by [Web Code Assigment](web-code-assignment.md). 

See also: [Requirements](requirements.md)


### Authentication

The requirements omit any authentication. 

*Assumption: A manager role exists, and access has already been authorized for the user. No authentication is providedin this code.*

### Context

The requirements omit any context beyond the `job-applications` for a single `job-order`.

*Assumption: A single `job-order` exists, all actions are in the context of this `job-order`.*

### No Mutability

The requirements propose only read-only actions with the sample data, so there is no need to edit or delete records.   

*Assumption: The dataset is a static JSON file. This file could be larger than the example provided by `Web-Code-Assignment.pdf`.*

The sample data provided combines the job applicant info with the job being applied for into a single record. 

*Assumption: This is a UI centric data set and does not reflect the actual structure of the underlying data store.* 

The assignment allows for, but does not require, the generation of additional data (*Ideally you will package your own data file...*)

*Consider: a script could generate additional 'fake' job-applicant records for the UI to display.*


### Dataset Fields

The requirements propose sorting and filtering a static dataset. Managers may favorite a record, and filter or sort the list, but they do not have the ability to refresh or receive additional data records.

The *availability* field contains the value 0, 1 or 2 for each day of the week. 

*Assumption: this represents the worker's willingness to work a shift on specific day. Zero means not available that day, and 1, 2 or 3 mean first, second or third shift respectively.*

The sample *questions* field contains a single question for each applicant, but the data structure allows for multiple questions. The sample data is not consistent about which questions the person is asked - for example, applicants for the *Cook* position have been asked different questions from each other. All questions have Yes/No answers.

*Assumption: The questions field will contain question text with Yes/No answers, and an answer for a given question may not be present in an applcation. The UI should provide a placeholder if a question has not been answered yet.*

*Consider: Future questions could be other than Yes/No.*

## Favorites/Flagging

Managers are allowed to 'flag' a record, to allow reviewing it later. This flag is NOT part of the static dataset since it is personal to the manager - different managers may want to flag dirrerent applicants.

*Assumption: The Flag/Favorite action will store this value in a separate dataset that is unique to the current manager.*

*Consider: This application could attempt to persist the flagged records as a future feature.*


### Sequential IDs should not be exposed by a web application

The sample data provided uses sequential integers as ids for the individual applicants. A real application must be cautious about such exposure.

### Routes

/ - see all `job-applications` for the `job-order`




## Aspirations

- Match the Snagajob look and feel
- Match the exmaple UI shown in the Snagajob 'Employers' section

## Decisions

1. Use version 12 of Angular w Angular Routing
2. Setup PWA as part of initial design (mobile-first)
2. Use plain CSS (small app, reuse or abstraction not needed)
2. Use an interceptor to mock the backend service needed (static data only))
3. Copy the basic basic look and feel of the Snagajob website
4. Separate the static JSON data into `job-order` and `job-applicant` sets











