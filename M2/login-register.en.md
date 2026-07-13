# Login / Register Module

## Module Overview

The Login / Register module covers the two available authentication paths for non-logged-in users: registering a new account and completing email verification, and logging in using an existing account/email and password. The current source material records the two paths in the same video, so this module remains as a User Story.

> Scope: Although `Google`, `Microsoft` and `Sign in with Apple` are displayed on the `Login` page, they are outside this acceptance scope. The accepted paths are `Register New Account` and standard email/password `Sign In`.

## User Story / Video Index

| Story | Video theme | Core path | Video |
| --- | --- | --- | --- |
| [US-AUTH-01](#us-auth-01) | Authentication Flow | `Register New Account` + email/password `Sign In` | [Video](https://jjpvro70sief.jp.larksuite.com/wiki/CDmcwSmsNinDn8kb92Nj980Epne) |

## Shared Terminology

| UI original text | Document meaning |
| --- | --- |
| `Login` | Authentication start page for users who are not logged in |
| `Sign In` | Use existing account/email and password to log in |
| `Register New Account` | Entry point from `Login` to the registration flow |
| `Create Account` | Registration page and submission action for display name, email and password |
| `Verify Email` | Page to enter the six-digit email verification code |
| `Verify and Continue` | Verify the six-digit code and complete the registration operation |
| `Markets` | The default landing page after successful registration or login |

---

<a id="us-auth-01"></a>

## User Story 1 - Register a new account and log in using an existing account

**Story ID:** `US-AUTH-01`  
**User story:** As an unauthenticated user, I want to register a new account and verify my email, or sign in with an existing account/email and password, so that I can enter the application's `Markets` page.  
**Video:** [US-AUTH-01 Acceptance Video](https://jjpvro70sief.jp.larksuite.com/wiki/CDmcwSmsNinDn8kb92Nj980Epne)

### Walkthrough

#### A. `Login` page and scope description

1. Open the application and stay on the `Login` page.
2. Display the account/email and password fields. After entering the password, tap the eye icon and confirm that the password can be shown and hidden.
3. Confirm that `Sign In` is disabled when either required field is empty and enabled after both fields are completed.
4. Briefly display `Google`, `Microsoft`, and `Sign in with Apple` to explain that they do not belong to the current acceptance path.

**Screenshot** — AUTH-US1-01: The default state of the `Login` page, including account/email and password input boxes, `Sign In`, `Register New Account` and three other login entries.

<img src="source/assets/screenshots/login-register/auth-us1-01-login-page.png" alt="Login page default state" width="420" />

#### B. Register a new account and verify email

5. Click `Register New Account` to enter `Create Account`.
6. Enter display name, email and password. First use a password shorter than 8 characters to show the disabled state, then enter a valid password.

**Screenshot** — AUTH-US1-02: Valid `Create Account` form, including display name, redacted demo email, hidden password, and enabled `Create Account`.

<img src="source/assets/screenshots/login-register/auth-us1-02-create-account.png" alt="Create Account valid form" width="420" />

7. Click `Create Account`. Confirm that the application creates a pending registration, sends a six-digit verification code by email, and opens `Verify Email`.
8. Confirm that `Verify and Continue` is disabled when the code has fewer than six digits and enabled after a complete six-digit code is entered.

**Screenshot** — AUTH-US1-03: Initial `Verify Email` state, showing the redacted recipient email, empty code field, and disabled `Verify and Continue`. The video shows the completed six-digit code and submission continuously.

<img src="source/assets/screenshots/login-register/auth-us1-03-verify-email.png" alt="Verify Email initial verification status" width="420" />

9. Click `Verify and Continue`. After successful verification, confirm that the account creation is completed, the user automatically logs in, and enters `Markets`.

**Screenshot** — AUTH-US1-04: After the new account is successfully verified, you will enter the `Markets` landing page; the bottom navigation remains in the screen to prove that you have left the authentication process.

<img src="source/assets/screenshots/login-register/auth-us1-04-registration-success.png" alt="Markets landing page after successful registration" width="420" />

#### C. Sign in with an existing account

10. Exit or reset to the `Login` page.
11. Enter the existing account/email and password; click `Sign In` after both fields are valid.
12. Display signing-in state; after successful authentication, confirm again and enter `Markets` by default.

### Acceptance Criteria

| ID | Requirement | Reference | Ownership | Priority |
| --- | --- | --- | --- | --- |
| AUTH-US1-AC01 | Unauthenticated users first see the `Login` page after opening the application. | US-AUTH-01 | Integration | Must |
| AUTH-US1-AC02 | `Login` provides two required fields: account/email and password. Password is hidden by default. | US-AUTH-01 | Integration | Must |
| AUTH-US1-AC03 | The eye icon can show or hide the password without clearing the entered value. | US-AUTH-01 | Integration | Must |
| AUTH-US1-AC04 | `Sign In` is not available when any required field is empty; the button is available after both fields are filled in. | US-AUTH-01 | Integration | Must |
| AUTH-US1-AC05 | `Google`, `Microsoft` and `Sign in with Apple` are not among the accepted working paths for this version. | US-AUTH-01 | Integration | Must |
| AUTH-US1-AC06 | Click `Register New Account` to open `Create Account` and provide the display name, email and password fields. | US-AUTH-01 | Integration | Must |
| AUTH-US1-AC07 | `Create Account` is not available when the registration form is missing any required field or the password is less than 8 characters. | US-AUTH-01 | Integration | Must |
| AUTH-US1-AC08 | Submitting a valid registration form creates one pending registration, sends a six-digit verification code, and opens `Verify Email`. | US-AUTH-01 | Integration | Must |
| AUTH-US1-AC09 | `Verify and Continue` is not available when the verification code is less than six digits; the button is available after six digits are entered. | US-AUTH-01 | Integration | Must |
| AUTH-US1-AC10 | A correct code completes account creation and signs the user in automatically; only one new account is created. | US-AUTH-01 | Integration | Must |
| AUTH-US1-AC11 | Newly registered users will enter the default `Markets` landing page. | US-AUTH-01 | Integration | Must |
| AUTH-US1-AC12 | Existing users can use account/email and password to submit `Sign In`. | US-AUTH-01 | Integration | Must |
| AUTH-US1-AC13 | The signing-in state is displayed when the login request is in progress, and the same login request will not be submitted repeatedly. | US-AUTH-01 | Integration | Must |
| AUTH-US1-AC14 | Enter the default `Markets` landing page after successful user authentication. | US-AUTH-01 | Integration | Must |
| AUTH-US1-AC15 | Videos and screenshots do not reveal real passwords, reusable verification codes, or personal information of non-test accounts. | US-AUTH-01 | Integration | Must |
