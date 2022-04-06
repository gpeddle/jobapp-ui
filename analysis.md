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


### Static Dataset

The requirements propose sorting and filtering a static dataset. Managers may filter and/or sort, but they do not have the ability to refresh or receive additional data records.

### Denormalized Data

The sample data provided combines the job applicant info with the job being applied for into a single record. 

*Assumption: This is a UI centric data set and does not reflect the actual structure of the underlying data store.* 

### Backend IDs should not be exposed by the web application


The sample data provided uses sequential integers as ids for the individual applicants. 

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











