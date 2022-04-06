# Step 2: Generate Test Data 

## Overview

The sample data provided in the assignment document is not enough to adequately test the assignment. This step generates fake/test data to match the content and spririt of the sample data.

See [Analysis](../analysis.md) for  more details.

## Prerequisites

 - nodejs (v14+)

## Generate the Data

```
cd data
node generate-data.js
```

The output data file is written to [`data/data.json`](../../data/data.json). 

## Approach

The data generation script uses `fakerjs` and creates records with semi-random information to match the sample data. 

Fields like *name* are trivial, while fields like *availability* and *questions* are generated suing custom methods. 

Where possible, I modeled the generation to create plausible/average data, while still including some outliers. The script can be tuned to produce more or fewer outliers as needed.

 - *application* date is a random date within the past 45 days

 - The *Felony?* question is asked 50% of the time and contains a "Yes" answer in 15% of records
 
 - The *Authorized?* question is asked 50% of the time and contains a "No" answer in 15% of reccords

 - *availability* is skewed towards first shift, and no third shifts are requested.
