# Local Business Service Portal

A responsive website where customers can discover local services, send an enquiry, and track the status of their request. Built for a simulated service company called **ServiceHub** as part of the Arrowstack Web Development Internship (Project 1).

**Live site:** https://mishramanu4656-tech.github.io/local-business-service-portal/
**Demo video:** https://drive.google.com/file/d/11OkCkkI9_fGUGDbpNMjp-kguJkxdzdNA/view?usp=sharing

## Project Overview

Customers often do not know which service they need or whether their request was received. This portal solves that in three steps:

1. The customer looks at the available services.
2. The customer fills in a short enquiry form and gets a **request ID**.
3. The customer types the request ID in the Status section to see the current status.

## Target Users and Stakeholder

- **Primary user:** a customer who wants a local service and wants to know if the request was received.
- **Stakeholder:** the (simulated) service company, which gets a clear, complete enquiry instead of a vague message.

## Main Features

- Responsive layout for mobile, tablet and desktop
- Service section with reusable service cards
- Enquiry form with client-side validation and a separate error message under each field
- Request ID created for every enquiry (SH1001, SH1002, ...)
- Request status checker (works with saved IDs, not case sensitive)
- Accessibility: semantic HTML, form labels, skip link, keyboard focus outline, screen-reader friendly messages

## Technology Used

- HTML5, CSS3, JavaScript (no framework)
- Browser `localStorage` to save requests
- VS Code, Git and GitHub
- Chrome Lighthouse for performance and accessibility review

## Design Decision: Why localStorage?

The internship handbook recommends a backend and database, but allows reasonable alternatives if they are documented. As a beginner project I used plain JavaScript and `localStorage` so that:

- the whole project runs without a server,
- I could focus on layout, validation and accessibility first,
- the logic can be moved to a real REST API and database later.

The trade-off is that data stays only in one browser (see Limitations).

## Project Structure

```
local-business-service-portal/
├── index.html
├── style.css
├── script.js
├── README.md
├── docs/
│   ├── requirements.md
│   ├── work-log.md
│   ├── decision-log.md
│   └── test-cases.md
└── screenshots/
```

## How to Run

1. Download or clone the repository.
2. Open `index.html` in any modern browser (Chrome, Edge, Firefox).
3. No installation is needed.

To try the status feature, use the sample ID `SH1001`, or submit an enquiry and use the ID you receive.

## Project Scope

### Included

- Service information
- Enquiry form with validation
- Request ID creation and status checking
- Responsive, accessible design

### Not Included Yet

- Real customer database or backend API
- User login and authentication
- Real email notifications
- Online payment
- Admin dashboard to update statuses

## Success Criteria

The project is successful when:

1. Users can view the available services.
2. Users can submit an enquiry only after filling all required fields correctly.
3. Empty or invalid input shows a clear message next to the wrong field.
4. Users get a request ID and can check the status with it.
5. The website works on desktop and mobile screen sizes.
6. Files are organized and a mentor can run the project without extra help.

## Validation Rules and Edge Cases

| Field | Rule |
|-------|------|
| Full Name | At least 2 characters |
| Email | Must look like `name@example.com` |
| Service | One option must be selected |
| Requirement | At least 10 characters |
| Request ID | Empty ID and unknown ID both show a clear message; lowercase IDs also work |

If the browser blocks `localStorage`, the site shows an error message instead of crashing.

## Testing

Full test cases are listed in `docs/test-cases.md`. Lighthouse screenshots are in the `screenshots/` folder.

| # | Test | Expected result | Result |
|---|------|-----------------|--------|
| 1 | Submit an empty form | Errors under all four fields | Pass |
| 2 | Enter email `abc` | Email error is shown | Pass |
| 3 | Submit a correct form | Success message with a request ID | Pass |
| 4 | Check that new ID in Status | Shows "Received" | Pass |
| 5 | Check `SH1001` | Shows "In Progress" | Pass |
| 6 | Check `SH9999` | "No request found" message | Pass |
| 7 | Check with empty ID | "Please enter your request ID" | Pass |
| 8 | Open on mobile width (about 375px) | Layout fits, no sideways scroll | Not checked yet |
| 9 | Use only the keyboard (Tab key) | All links and fields reachable, focus visible | Not checked yet |

## Performance and Accessibility Review

The live site was tested on 30 Sep 2026 using Google PageSpeed Insights (which runs Lighthouse). Screenshots are in the `screenshots/` folder (`08-lighthouse-desktop.png` and `08-lighthouse-mobile.png`).

| Category | Desktop | Mobile |
|----------|---------|--------|
| Performance | 100 | 100 |
| Accessibility | 100 | 100 |
| Best Practices | 100 | 100 |
| SEO | 100 | 100 |

The site is small (plain HTML, CSS and JavaScript, no images or libraries), which helps the performance score. Semantic HTML, form labels, a skip link and visible keyboard focus helped the accessibility score.

## Known Limitations

- Requests are saved only in the browser that was used, so they disappear if browser data is cleared.
- New requests always start as "Received" because there is no admin panel to change the status.
- No email confirmation is sent.
- Only 3 example services are listed.

## Future Improvements

- Add a Node.js backend with a REST API and a PostgreSQL/MySQL database
- Add an admin dashboard to update request statuses
- Send email notifications when the status changes
- Add customer login so users can see all their requests
- Add a service search or filter

## What I Learned

- How to write a webpage with semantic HTML, and why labels and headings in the right order matter for accessibility.
- How to check a form with JavaScript and show a clear error under each wrong field.
- How to make a page work on mobile, tablet and desktop using CSS Grid and media queries.
- How to save data in the browser with localStorage and create a request ID for each enquiry.
- How to upload a project to GitHub, publish it with GitHub Pages, and test it with Google PageSpeed (Lighthouse).
- When my Submit button did nothing, I learned that all project files must match each other. My index.html was an old version and did not match the new script.js.
- I used an AI assistant to help write and review the code. I tested the project myself and worked to understand how each part works.

## Author

Manu Mishra
