# Local Business Service Portal

A responsive website where customers can discover local services, send an enquiry, and track the status of their request. Built for a simulated service company called **ServiceHub** as part of the Arrowstack Web Development Internship (Project 1).

**Live site:** _add your GitHub Pages link here_
**Demo video:** _add your video link here_

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

Test cases are listed in `docs/test-cases.md`. Screenshots are in the `screenshots/` folder.

| # | Test | Expected result | Result |
|---|------|-----------------|--------|
| 1 | Submit an empty form | Errors under all four fields | _fill after testing_ |
| 2 | Enter email `abc` | Email error is shown | _fill after testing_ |
| 3 | Submit a correct form | Success message with a request ID | _fill after testing_ |
| 4 | Check that new ID in Status | Shows "Received" | _fill after testing_ |
| 5 | Check `SH1001` | Shows "In Progress" | _fill after testing_ |
| 6 | Check `SH9999` | "No request found" message | _fill after testing_ |
| 7 | Check with empty ID | "Please enter your request ID" | _fill after testing_ |
| 8 | Open on mobile width (about 375px) | Layout fits, no sideways scroll | _fill after testing_ |
| 9 | Use only the keyboard (Tab key) | All links and fields reachable, focus visible | _fill after testing_ |

## Performance and Accessibility Review

Lighthouse (Chrome DevTools) was used to check the site.

| Category | Score |
|----------|-------|
| Performance | _add score_ |
| Accessibility | _add score_ |
| Best Practices | _add score_ |
| SEO | _add score_ |

_Add one or two lines about what you improved after the first run._

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

- Writing semantic and accessible HTML
- Validating forms in JavaScript and showing helpful errors
- Making a layout responsive with CSS Grid and media queries
- Using Git and GitHub to track a project step by step

_Change this section to your own words._

## Author

Manu Mishra