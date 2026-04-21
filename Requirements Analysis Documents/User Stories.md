<table border="1" cellspacing="0" cellpadding="10">
<tr>
<th>User ID</th>
<th>User Story</th>
<th>Affected Stakeholders</th>
<th>Acceptance Criteria</th>
<th>Parent Use Case(s)</th>
<th>State</th>
<th colspan="2">Related Test Cases</th>
</tr>
<tr>
<th></th>
<th></th>
<th></th>
<th></th>
<th></th>
<th></th>
<th>Test-Case ID</th>
<th>Status</th>
</tr>

<tr>
<td>US-01</td>
<td>
As a Student,


I want to create an account


so that I can save my tasks securely.
</td>
<td>User</td>
<td>Given the registration page, when the user provides valid credentials, then a profile is created and access is granted.</td>
<td>UC-01</td>
<td>Queued</td>
<td>TC-01</td>
<td>Not Started</td>
</tr>

<tr>
<td>US-02</td>
<td>
As a Student, I want to see a Dashboard of my upcoming deadlines so that I can plan my study schedule.
</td>
<td>User</td>
<td>Given a user is logged in, when they view the dashboard, then a list of current and future tasks is displayed.</td>
<td>UC-02</td>
<td>Queued</td>
<td>TC-02</td>
<td>Not Started</td>
</tr>

<tr>
<td>US-03</td>
<td>
As an Admin, I want to review new student registration requests so that only verified students can use the platform.
</td>
<td>Admin</td>
<td>Given an admin is logged in, when a new account is pending, then the admin can approve or deny the request.</td>
<td>UC-03</td>
<td>Queued</td>
<td>TC-03</td>
<td>Not Started</td>
</tr>

<tr>
<td>US-04</td>
<td>
As a Student, I want to receive alerts for approaching deadlines so that I don't miss assignment submissions.
</td>
<td>User</td>
<td>Given a task has a due date, when the deadline is near, then the system sends a notification to the user.</td>
<td>UC-04</td>
<td>Queued</td>
<td>TC-04</td>
<td>Not Started</td>
</tr>

<tr>
<td>US-05</td>
<td>
As a Student, I want to break down big assignments into sub-steps so that they are easier to manage.
</td>
<td>User</td>
<td>Given an existing task, when a user adds a sub-task, then it is nested within the parent task.</td>
<td>UC-05</td>
<td>Queued</td>
<td>TC-05</td>
<td>Not Started</td>
</tr>

<tr>
<td>US-06</td>
<td>
As a Student, I want to see my verification badge so that I know my student status has been confirmed by the Admin.
</td>
<td>User, Admin</td>
<td>Given the user profile, when the Admin has approved the account, then a "Verified Student" badge is visible.</td>
<td>UC-06</td>
<td>Queued</td>
<td>TC-06</td>
<td>Not Started</td>
</tr>

<tr>
<td>US-07</td>
<td>
As a Student, I want to filter my list by subject (e.g., Math, CS) so that I can focus on one course at a time.
</td>
<td>User</td>
<td>Given the task list, when a user selects a specific subject, then only tasks tagged with that subject are shown.</td>
<td>UC-07</td>
<td>Queued</td>
<td>TC-07</td>
<td>Not Started</td>
</tr>

<tr>
<td>US-08</td>
<td>
As a Student, I want a "Quick Add" priority button so that urgent tasks are automatically moved to the top of my list.
</td>
<td>User</td>
<td>Given the task creation bar, when a task is marked "High Priority," then it is pinned to the top of the list.</td>
<td>UC-08</td>
<td>Queued</td>
<td>TC-08</td>
<td>Not Started</td>
</tr>

<tr>
<td>US-09</td>
<td>
As a Student, I want to move completed tasks to a "Done" section so that I can keep my current view clean while tracking progress.
</td>
<td>User</td>
<td>Given a task is marked as finished, when the user checks it off, then it moves from the active list to the finished area.</td>
<td>UC-09</td>
<td>Queued</td>
<td>TC-09</td>
<td>Not Started</td>
</tr>

<tr>
<td>US-10</td>
<td>
As an Admin, I want to be notified when new accounts are waiting for approval so that I can process them quickly.
</td>
<td>Admin</td>
<td>Given the admin dashboard, when a new user registers, then a system notification appears for the admin.</td>
<td>UC-04</td>
<td>Queued</td>
<td>TC-10</td>
<td>Not Started</td>
</tr>
</table>
