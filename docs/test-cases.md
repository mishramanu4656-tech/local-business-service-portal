# Test Cases

Browser used: Chrome
Date tested: 2026-09-30 (rows without a result are still to be tested)

| # | Requirement | Test steps | Expected result | Actual result | Pass/Fail | Screenshot |
|---|-------------|------------|-----------------|---------------|-----------|------------|
| 1 | FR3, FR4 | Click Submit with an empty form | Error under name, email, service and requirement | | | |
| 2 | FR3, FR4 | Type name "A" and submit | Name error is shown | | | |
| 3 | FR3, FR4 | Type email "abc" and submit | Email error is shown | | | |
| 4 | FR3, FR4 | Leave service on "Choose a service" and submit | Service error is shown | | | |
| 5 | FR3, FR4 | Type "help" as requirement and submit | Requirement error (too short) | | | |
| 6 | FR5 | Fill all fields correctly and submit | Green message with a request ID, form is cleared | Request ID was shown after submit | Pass | |
| 7 | FR5 | Submit a second valid enquiry | A different, new request ID | | | |
| 8 | FR6 | Enter the ID from test 6 in Status | Shows status "Received" | Status "Received" was shown (also on the live site) | Pass | |
| 9 | FR6 | Enter SH1001 | Shows "In Progress" | "Request SH1001 (Website Development) - Status: In Progress" | Pass | |
| 10 | FR6 | Enter sh1001 in small letters | Same result as SH1001 | | | |
| 11 | FR7 | Enter SH9999 | "No request found" message | | | |
| 12 | FR7 | Leave Request ID empty and click Check Status | "Please enter your request ID" | | | |
| 13 | NFR1 | Open on 375px width (DevTools phone view) | Layout fits, no sideways scroll | | | |
| 14 | NFR1 | Open on tablet width (about 800px) | Services show in 2 columns | | | |
| 15 | NFR2 | Use only the Tab key through the page | Every link, field and button is reachable and focus is visible | | | |
| 16 | NFR3 | Run Lighthouse | Scores added to README | Desktop and Mobile: Performance, Accessibility, Best Practices, SEO all 100 | Pass | 08-lighthouse-desktop.png, 08-lighthouse-mobile.png |

## Known Issues Found

_List any bug you found and whether you fixed it._
