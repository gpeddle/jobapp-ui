# Assignment

Managers want to be able to browse, sort, and filter job applications they receive on a web
dashboard that they can use across a variety of devices. They would like to be able to inspect
an individual application to see more details, as well as flag applications to look at later or
revisit. When the manager comes back to the application, this list should still be available to
them.

The task is to build a prototype for the dashboard of this application in JavaScript. It will use a
JSON-formatted data file as the list of job applications. What you deliver should be everything
we need to run the application. Please upload your code somewhere that is publicly accessible
(we love GitHub!) by 4pm the day before the interview. Either bring a laptop with you to the
interview with your working code on it, or host it somewhere that is publicly accessible so we
can discuss in real time.

## Requirements

Dashboard should show a list of all applications with the ability to sort and filter
Manager should have the ability to fave or bookmark an application for later viewing
Details of a specific application should be accessible
Use JSON data as the input for your program in place of a REST API (see below)

## Example Data

You can assume that the data file will always be valid JSON. For experience, you can assume
number of years, months, etc. Ideally you will package your own data file with your code for
examination.

```json
[
  {
    "id": 1,
    "name": "John Smith",
    "position": "Server",
    "applied": "03/15/16",
    "experience": 2,
    "availability": {
      "M": 2,
      "T": 2,
      "W": 1,
      "Th": 2,
      "F": 1,
      "S": 0,
      "Su": 0
    },
    "questions": [
      {
        "text": "Have you ever been convicted of a felony?",
        "answer": "No"
      }
    ]
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "position": "Cook",
    "applied": "02/08/16",
    "experience": 4,
    "availability": {
      "M": 1,
      "T": 1,
      "W": 1,
      "Th": 1,
      "F": 0,
      "S": 0,
      "Su": 0
    },
    "questions": [
      {
        "text": "Have you ever been convicted of a felony?",
        "answer": "Yes"
      }
    ]
  },
  {
    "id": 3,
    "name": "David Jessup",
    "position": "Chef",
    "applied": "03/08/16",
    "experience": 2,
    "availability": {
      "M": 2,
      "T": 2,
      "W": 2,
      "Th": 2,
      "F": 2,
      "S": 0,
      "Su": 0
    },
    "questions": [
      {
        "text": "Are you authorized to work in the United States?",
        "answer": "Yes"
      }
    ]
  },
  {
    "id": 4,
    "name": "Clay vanSchalkwijk",
    "position": "Cook",
    "applied": "03/08/16",
    "experience": 1,
    "availability": {
      "M": 1,
      "T": 0,
      "W": 1,
      "Th": 0,
      "F": 1,
      "S": 0,
      "Su": 0
    },
    "questions": [
      {
        "text": "Are you authorized to work in the United States?",
        "answer": "Yes"
      }
    ]
  }
]
```
