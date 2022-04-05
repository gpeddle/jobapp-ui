# Implementation - Snagajob Assignment

## Overview

This document outlines the implementation fof the web app described by [Web Code Assigment] (web-code-assignment.md). See also: [Requirements](requirements.md)

# Technology

This is a list of the technical choices made in support of the assignment. 

### Authentication

The requirements omit any authentication. 

**Assumption:** A manager role exists, and acess has already been authorized for the user.

### Context

The requirements omit any context beyond the `job-applications` for a single `job-order`.

**Assumption:** A single `job-order` exists, all actions are in the context of this `job-order`.

### No Mutability

The requirements propose ony read-only actions against the sample data, so there is no need to edit or delete records.   

> Although interceptors are capable of mutating requests and responses, 
> the HttpRequest and HttpResponse instance properties are read-only, 
> rendering them largely immutables

### Static Dataset

The requirements propose sorting and filtering a static dataset. Managers may filter and/or sort, but they do not have the ability to refresh or receive additionla data.
