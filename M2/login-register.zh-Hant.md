# Login / Register Module

## 模組說明

Login / Register 模組覆蓋未登入用戶的兩個可用認證路徑：註冊新賬號並完成 email verification，以及使用已有 account/email 與 password 登入。當前源材料將兩條路徑錄在同一支視頻中，因此本模組保留為一個 User Story。

> 範圍說明：`Google`、`Microsoft` 和 `Sign in with Apple` 雖然顯示在 `Login` 頁面，但不屬於本次驗收範圍。當前驗收路徑僅包括 `Register New Account` 和標準 email/password `Sign In`。

## User Story / Video 索引

| Story | 視頻主題 | 核心路徑 | Video |
| --- | --- | --- | --- |
| [US-AUTH-01](#us-auth-01) | Authentication Flow | `Register New Account` + email/password `Sign In` | [視頻](https://jjpvro70sief.jp.larksuite.com/wiki/CDmcwSmsNinDn8kb92Nj980Epne) |

## 統一術語

| UI 原文 | 文檔含義 |
| --- | --- |
| `Login` | 未登入用戶的認證起始頁面 |
| `Sign In` | 使用已有 account/email 與 password 登入 |
| `Register New Account` | 從 `Login` 進入註冊流程的入口 |
| `Create Account` | 輸入 display name、email 和 password 的註冊頁面/提交操作 |
| `Verify Email` | 輸入六位 email verification code 的頁面 |
| `Verify and Continue` | 驗證六位 code 並完成註冊的操作 |
| `Markets` | 成功註冊或登入後的默認 landing page |

---

<a id="us-auth-01"></a>

## User Story 1 - 註冊新賬號並使用已有賬號登入

**Story ID:** `US-AUTH-01`  
**用戶故事：** 作為未登入用戶，我希望註冊新賬號並驗證 email，或使用已有 account/email 和 password 登入，從而進入應用的 `Markets` 頁面。  
**Video:** [US-AUTH-01 驗收視頻](https://jjpvro70sief.jp.larksuite.com/wiki/CDmcwSmsNinDn8kb92Nj980Epne)

### Walkthrough

#### A. `Login` 頁面與範圍說明

1. 打開應用並停留在 `Login` 頁面。
2. 展示 account/email 與 password 輸入框。輸入 password 後操作 eye icon，確認 password 可顯示和隱藏。
3. 在任一必填字段為空時展示 `Sign In` 不可用；兩個字段均填寫後展示 `Sign In` 可用。
4. 簡短展示 `Google`、`Microsoft`、`Sign in with Apple`，說明它們不屬於當前驗收路徑。

**Screenshot** — AUTH-US1-01：`Login` 頁面默認態，包含 account/email 與 password 輸入框、`Sign In`、`Register New Account` 和三種其他登入入口。

<img src="source/assets/screenshots/login-register/auth-us1-01-login-page.png" alt="Login 頁面默認態" width="420" />

#### B. 註冊新賬號並驗證 email

5. 點擊 `Register New Account`，進入 `Create Account`。
6. 依次輸入 display name、email 和 password。先用少於 8 個字符的 password 展示按鈕不可用，再補足為有效 password。

**Screenshot** — AUTH-US1-02：`Create Account` 有效表單完成態，包含 display name、已脫敏的 demo email、隱藏的 password，以及已啟用的 `Create Account`。

<img src="source/assets/screenshots/login-register/auth-us1-02-create-account.png" alt="Create Account 有效表單" width="420" />

7. 點擊 `Create Account`。確認應用創建 pending registration、向 email 發送六位 verification code，並進入 `Verify Email`。
8. 在 code 未滿六位時展示 `Verify and Continue` 不可用；輸入完整六位 code 後按鈕可用。

**Screenshot** — AUTH-US1-03：`Verify Email` 初始態，顯示已脫敏的收件 email、空 code 輸入框，以及 code 未滿六位時不可用的 `Verify and Continue`。六位 code 完成態及提交操作由視頻連續展示。

<img src="source/assets/screenshots/login-register/auth-us1-03-verify-email.png" alt="Verify Email 初始驗證狀態" width="420" />

9. 點擊 `Verify and Continue`。驗證成功後，確認賬號創建完成、用戶自動登入，並進入 `Markets`。

**Screenshot** — AUTH-US1-04：新賬號驗證成功後進入 `Markets` landing page；底部導航保留在畫面中，用於證明已離開認證流程。

<img src="source/assets/screenshots/login-register/auth-us1-04-registration-success.png" alt="註冊成功後的 Markets landing page" width="420" />

#### C. 已有賬號登入

10. 退出或重置到 `Login` 頁面。
11. 輸入已有 account/email 和 password；兩個字段都有效後點擊 `Sign In`。
12. 展示 signing-in state；認證成功後再次確認默認進入 `Markets`。

### Acceptance Criteria

| ID | Requirement | Reference | Ownership | Priority |
| --- | --- | --- | --- | --- |
| AUTH-US1-AC01 | 未認證用戶打開應用後首先看到 `Login` 頁面。 | US-AUTH-01 | Integration | Must |
| AUTH-US1-AC02 | `Login` 提供 account/email 與 password 兩個必填字段，password 默認隱藏。 | US-AUTH-01 | Integration | Must |
| AUTH-US1-AC03 | eye icon 可以顯示或隱藏 password，且不會清除已輸入內容。 | US-AUTH-01 | Integration | Must |
| AUTH-US1-AC04 | 任一必填字段為空時 `Sign In` 不可用；兩個字段填寫後按鈕可用。 | US-AUTH-01 | Integration | Must |
| AUTH-US1-AC05 | `Google`、`Microsoft` 和 `Sign in with Apple` 不屬於本版本已驗收的工作路徑。 | US-AUTH-01 | Integration | Must |
| AUTH-US1-AC06 | 點擊 `Register New Account` 打開 `Create Account`，並提供 display name、email 和 password 字段。 | US-AUTH-01 | Integration | Must |
| AUTH-US1-AC07 | 註冊表單缺少任一必填字段或 password 少於 8 個字符時，`Create Account` 不可用。 | US-AUTH-01 | Integration | Must |
| AUTH-US1-AC08 | 有效註冊表單提交後創建 pending registration、發送六位 verification code，並進入 `Verify Email`。 | US-AUTH-01 | Integration | Must |
| AUTH-US1-AC09 | verification code 少於六位時 `Verify and Continue` 不可用；六位輸入完成後按鈕可用。 | US-AUTH-01 | Integration | Must |
| AUTH-US1-AC10 | 正確 code 驗證成功後完成賬號創建並自動登入，只產生一個新賬號。 | US-AUTH-01 | Integration | Must |
| AUTH-US1-AC11 | 新註冊用戶成功後進入默認 `Markets` landing page。 | US-AUTH-01 | Integration | Must |
| AUTH-US1-AC12 | 已有用戶可以使用 account/email 與 password 提交 `Sign In`。 | US-AUTH-01 | Integration | Must |
| AUTH-US1-AC13 | 登入請求進行中顯示 signing-in state，且不會重複提交同一次登入請求。 | US-AUTH-01 | Integration | Must |
| AUTH-US1-AC14 | 已有用戶認證成功後進入默認 `Markets` landing page。 | US-AUTH-01 | Integration | Must |
| AUTH-US1-AC15 | 視頻和截圖不暴露真實 password、可複用 verification code 或非測試賬號的個人資料。 | US-AUTH-01 | Integration | Must |
