# Portfolio Module

## Module Overview

The Portfolio module provides research-only workflows: discover `Model Portfolio`, maintain `My Portfolio`, generate `AI Portfolio Recommendation`, analyze portfolio drafts, and review saved `My Portfolio` against historical `Baseline Snapshot`.

The module is organized by three tabs: `Recommended` is used to browse administrator-maintained Model Portfolios and start the recommendation quiz; `My portfolios` is used to create, view, edit, delete, analyze and review user-saved portfolios; `Watchlist` is used to view and remove Model Portfolios saved for future reference.

> Scope: The forecasts, analysis, recommendations and `Suggested actions` in this module are for research only, do not guarantee returns, and do not trigger brokerage orders or trade execution.

## User Story Index

| Story | User story | Core path |
| --- | --- | --- |
| [US-PORT-01](#us-port-01) | Explore and save Model Portfolio | `Recommended` -> `Model Portfolio` -> `Watchlist` / `My Portfolio` |
| [US-PORT-02](#us-port-02) | Create, edit and maintain My Portfolio | `My portfolios` -> `Edit` / `Baseline snapshots` |
| [US-PORT-03](#us-port-03) | Generate AI Portfolio Recommendation | `Find Your Ideal Portfolio` -> `Portfolio recommendation` |
| [US-PORT-04](#us-port-04) | Analyze Portfolio and review AI suggestions | `Draft Portfolio` -> `Analysis` -> `Suggestions` |
| [US-PORT-05](#us-port-05) | Review based on Baseline Snapshot | `Portfolio Review` -> `Baseline` -> `Analysis` -> `Suggestions` |

## Shared Terminology

| UI original text | Document meaning |
| --- | --- |
| `Model Portfolio` | A portfolio template maintained and published by the administrator, not a user-persistent configuration |
| `My Portfolio` / `My portfolios` | Research portfolios created and saved by users, and their list tags |
| `Watchlist` | A list of Model Portfolios saved by the user for future reference |
| `Add to My Portfolio` | Convert a Model Portfolio or Recommendation to a new one or merge it into an existing My Portfolio |
| `Baseline Snapshot` | A reference configuration of holdings, quantities, values and weights saved by a My Portfolio at a specific time |
| `Baseline History` / `Baseline snapshots` | Manage the history drawer/page of Baseline Snapshots |
| `Analysis Workspace` | A workspace that performs the Holdings, Analysis, Diagnosis, and Suggestions processes on portfolio work drafts |
| `Suggested actions` | Preview of algorithmically generated quantitative adjustments; whether it can be edited or applied depends on the source |
| `Portfolio Review` | Workflow to compare the current My Portfolio with the selected Baseline Snapshot |
| `Recommendation Build` | Displays Recommendation risk profiling, screening, optimization, candidate scope and warnings |
| `Data coverage` / `Unavailable` / `Partial` | Explicit boundary states when data is incomplete or metrics are unavailable |

---

<a id="us-port-01"></a>

## User Story 1 - Explore and save Model Portfolio

**Story ID:** `US-PORT-01`  
**User story:** As a user, I would like to examine a selected Model Portfolio, understand its configuration and illustrative forecasts, save it for later reference, and use Add to My Portfolio.  

### Walkthrough

1. Open `Portfolio > Recommended` and browse the Model Portfolio cards and their `Reference` descriptions.

**Screenshot** — PORT-US1-01: `Recommended` catalogue, recommendation quiz entry, Model Portfolio cards, allocation mix and `Reference`.

<img src="source/assets/screenshots/portfolio/port-us1-01-model-portfolio-catalogue.png" alt="Recommended Model Portfolio catalogue" width="420" />

2. Open a Model Portfolio and view return, risk, duration, allocation, and ETF allocations.

**Screenshot** — PORT-US1-02: `Anchor Income` Model Portfolio details, including return/risk/horizon, `Reference`, allocation map and projection entries.

<img src="source/assets/screenshots/portfolio/port-us1-02-model-portfolio-detail.png" alt="Anchor Income Model Portfolio detail" width="420" />

**Screenshot** — `Anchor Income`’s `ETF allocation` list, ETF metadata, target weights and `Total 100%`.

<img src="source/assets/screenshots/portfolio/port-us1-extra-etf-allocation.png" alt="Model Portfolio ETF allocation" width="420" />

3. Browse `Projected Asset Growth`, manipulate time ranges and historical data points, and view available backtest and data coverage.

**Screenshot** — PORT-US1-03: `Projected Asset Growth` completed state, including history, P50, P25-P75, P2.5-P97.5, Today crosshair, summary and `Partial` data warning.

<img src="source/assets/screenshots/portfolio/port-us1-03-projection-backtest.png" alt="Projected Asset Growth completed state" width="420" />

4. Save the Model Portfolio to `Watchlist` and confirm that it can be reopened or removed from Watchlist.

**Screenshot** — PORT-US1-04: Saved `Anchor Income` Model Portfolio in `Watchlist`, including saved count, key facts, allocation and `Reference`.

<img src="source/assets/screenshots/portfolio/port-us1-04-watchlist-saved.png" alt="Saved Model Portfolio in Watchlist" width="420" />

5. Select `Add to My Portfolio` to review or adjust amounts, weights and shares in `Visual` and `ETF list` modes.

**Screenshot** — PORT-US1-05: Visual editor for `Add to My Portfolio`, including allocation overview, total portfolio value, sector weights and two save targets.

<img src="source/assets/screenshots/portfolio/port-us1-05-add-to-portfolio-editor.png" alt="Add to My Portfolio visual editor" width="420" />

**Screenshot** — The same configuration switched to the direct-share editor after switching to `ETF list`, showing industry groups, ETF rows and share steppers.

<img src="source/assets/screenshots/portfolio/port-us1-extra-list-editor.png" alt="Add to My Portfolio ETF list editor" width="420" />

6. Create a new My Portfolio using `Add as new` and open it from `My portfolios` to confirm.
7. Use `Add to existing` to add the configuration to the existing My Portfolio, and confirm that the position results are updated.
8. Select `Start analysis` from the Model Portfolio to view the read-only analysis and recommendation process.

### Acceptance Criteria

| ID | Requirement | Reference | Ownership | Priority |
| --- | --- | --- | --- | --- |
| US1-AC01 | The Portfolio title and three tabs - Recommended, My portfolios, Watchlist - are visible, with Recommended selected. | US-PORT-01 | Integration | Must |
| US1-AC02 | Each loaded Model Portfolio card uses back-end data to display the title, return range, risk level label, duration, number of asset classes, and asset allocation visualization. | US-PORT-01 | Integration | Must |
| US1-AC03 | Each Model Portfolio card displays the Reference description corresponding to the Model Portfolio. | US-PORT-01 | Integration | Must |
| US1-AC04 | `View details` opens the selected Model Portfolio rather than another catalogue item. | US-PORT-01 | Integration | Must |
| US1-AC05 | Display the loading status when opening or refreshing the Model Portfolio directory for the first time; after completion, replace the placeholder with the currently returned Model Portfolio. | US-PORT-01 | Integration | Must |
| US1-AC06 | The details header displays the title, return, risk, term, and summary of the selected Model Portfolio. | US-PORT-01 | Integration | Must |
| US1-AC07 | The detail fact values are consistent with the catalog card and current Model Portfolio data, and do not inherit the contents of the previously opened Model Portfolio. | US-PORT-01 | Integration | Must |
| US1-AC08 | Reference descriptions are displayed in a dedicated source/reference style and are consistent with the description on the catalog card. | US-PORT-01 | Integration | Must |
| US1-AC09 | The configuration card shows the asset class groupings and their ETF codes; the number of ETFs and number of asset classes shown are consistent with the details returned. | US-PORT-01 | Integration | Must |
| US1-AC10 | The ETF configuration area shows Total 100%, with each row displaying the ticker, name, asset class label, target weight, and available issuer/last price/1-year return metadata. | US-PORT-01 | Integration | Must |
| US1-AC11 | Selecting an ETF row opens the matching ETF details; returning closes only the detail overlay without losing the Model Portfolio state. | US-PORT-01 | Integration | Must |
| US1-AC12 | After returning from ETF details, the current Model Portfolio details remain, and the configuration content and loaded status remain unchanged. | US-PORT-01 | Integration | Must |
| US1-AC13 | The loading status clearly indicates that a Monte Carlo simulation is running; the graph must not be displayed with made-up points until data is available. | US-PORT-01 | Integration | Must |
| US1-AC14 | Charts differentiate between historical, P50 forecast, P25–P75 and P2.5–P97.5 intervals, Today, initial value, axis labels, and forecast labels. | US-PORT-01 | Integration | Must |
| US1-AC15 | The summary values below the chart are consistent with the chart's starting value, allocation period, P50 endpoint, and P2.5–P97.5 range. | US-PORT-01 | Integration | Must |
| US1-AC16 | Horizontal dragging changes the visible timeline while keeping the view within the available historical/forecast range. | US-PORT-01 | Integration | Must |
| US1-AC17 | Pinch changes the visible time window; zooming to the boundaries does not display data outside the available date range, and axis labels and plotted values do not extend beyond the chart area. | US-PORT-01 | Integration | Must |
| US1-AC18 | Selecting a valid historical point displays a crosshair for its time and value. Backtesting is available only for historical data points, not future forecast points. | US-PORT-01 | Integration | Must |
| US1-AC19 | Generate backtest shows the loading status and then adds the backtest percentile range/median and actual series with updated legend. | US-PORT-01 | Integration | Must |
| US1-AC20 | Hide backtest removes the generated backtest, but does not remove the original history or forecast. | US-PORT-01 | Integration | Must |
| US1-AC21 | When the forecast status is Partial, the corresponding Data coverage is displayed and the current Model Portfolio's available data continues to be used; chart results from other Model Portfolios are not reused. | US-PORT-01 | Integration | Must |
| US1-AC22 | Forecasts are expressly described as indicative/research only and are not to be represented as guaranteed forecasts. | US-PORT-01 | Integration | Must |
| US1-AC23 | The details control changes from a hollow star to a solid star only after the save request is successful. | US-PORT-01 | Integration | Must |
| US1-AC24 | The Watchlist count is incremented and the Model Portfolio appears in the Watchlist with the same title, facts, configuration, and Reference. | US-PORT-01 | Integration | Must |
| US1-AC25 | A saved Model Portfolio can be opened from the Watchlist. | US-PORT-01 | Integration | Must |
| US1-AC26 | Removing a saved Model Portfolio causes it to disappear from the Watchlist and decrement the count; when there are no more saved Model Portfolios, an explicit No portfolios saved status is displayed. | US-PORT-01 | Integration | Must |
| US1-AC27 | After returning to Recommended and opening the same Model Portfolio again, its star status will be consistent with the final saved status in the Watchlist. | US-PORT-01 | Integration | Must |
| US1-AC28 | The Add to My Portfolio page opens for the selected Model Portfolio and displays the configuration overview, Model Portfolio title, risk/reward context, and default modeling amounts. | US-PORT-01 | Integration | Must |
| US1-AC29 | Modifying the total value will recalculate the ETF amount and quantity while maintaining the current normalized allocation weight. | US-PORT-01 | Integration | Must |
| US1-AC30 | Dragging the industry boundary only changes two adjacent groups; continuing to drag after reaching the draggable boundary will no longer reduce the grouping, and each grouping will not have negative weight, and the sum will remain 100%. | US-PORT-01 | Integration | Must |
| US1-AC31 | Dragging an ETF to split changes the ETFs within that group, keeping the group sum unchanged, and updating the within-group and overall allocation percentages. | US-PORT-01 | Integration | Must |
| US1-AC32 | When switching from Visual to List mode, the current amount and weight will be converted into ETF shares according to the latest price displayed on the interface; modifying the share will recalculate the total value, group weight, ETF weight and configuration visualization. | US-PORT-01 | Integration | Must |
| US1-AC33 | When switching back to Visual mode from List, the current share will be converted into the corresponding total amount and normalized weight; repeated switching will not lose the latest edits, and neither mode allows negative shares or negative weights. | US-PORT-01 | Integration | Must |
| US1-AC34 | When entering the confirmation step, the summary uses the amount, weight and share after the last Visual/List edit and does not revert to the initial configuration. | US-PORT-01 | Integration | Must |
| US1-AC35 | The confirmation step displays the target name, total amount added, ETF count, weight/amount/quantity added per ETF, and resulting quantity. | US-PORT-01 | Integration | Must |
| US1-AC36 | Confirm is disabled when the My Portfolio name is empty or a create request is in progress. | US-PORT-01 | Integration | Must |
| US1-AC37 | After successful creation, the new name appears in My portfolios; the number of positions is consistent with the confirmation summary, and the base currency is consistent with the selection when creating. | US-PORT-01 | Integration | Must |
| US1-AC38 | After reopening or refreshing, the position, quantity, configuration and value are still consistent with the confirmation results. | US-PORT-01 | Integration | Must |
| US1-AC39 | The UI states that a research-only My Portfolio was created and that no order, trade or execution occurred. | US-PORT-01 | Integration | Must |
| US1-AC40 | Confirm cannot be triggered repeatedly while the creation request is in progress; only one corresponding new My Portfolio will appear in the list after completion. | US-PORT-01 | Integration | Must |
| US1-AC41 | The target selector lists the current My Portfolio and displays each item's name, value, number of positions, and allocation summary. | US-PORT-01 | Integration | Must |
| US1-AC42 | Confirm is not available until the preview is loaded. | US-PORT-01 | Integration | Must |
| US1-AC43 | Preview showing existing value, ETF rows to be added, Model Portfolio weights, amounts, latest price, added quantity and resultant quantity. | US-PORT-01 | Integration | Must |
| US1-AC44 | Update the selected existing My Portfolio after confirmation; the new position results will be displayed after the list and details are refreshed. | US-PORT-01 | Integration | Must |
| US1-AC45 | After reopening the target, the existing codes in the preview show the combined quantity, and the new codes in the preview are shown as new positions. | US-PORT-01 | Integration | Must |
| US1-AC46 | When returning from the target selection or confirmation page, the current editing configuration remains unchanged; the final added result is consistent with the last confirmed preview. | US-PORT-01 | Integration | Must |
| US1-AC47 | Analysis Workspace opens in Holdings with the source title consistent with the selected Model Portfolio and preloaded with ticker, shares, value, and normalized weights configured by the Model Portfolio ETF. | US-PORT-01 | Integration | Must |
| US1-AC48 | Editing the Model Portfolio draft affects only the working copy and does not create or modify My Portfolio; because the source is not My Portfolio, recommendation results do not display the Apply to My Portfolio control. | US-PORT-01 | Integration | Must |
| US1-AC49 | `Analyze draft portfolio` uses the current edited draft of the Model Portfolio; the common behavior of analysis, diagnosis, and recommendations is consistent with User Story 4, and old results from other sources are not reused. | US-PORT-01 | Integration | Must |
---

<a id="us-port-02"></a>

## User Story 2 - Create, edit and maintain My Portfolio

**Story ID:** `US-PORT-02`  
**User story:** As a user, I would like to create and maintain a saved My Portfolio of ETFs, including their holdings and Baseline Snapshot history.  

### Walkthrough

1. Open `Portfolio > My portfolios`, view saved portfolios, and enter `New Portfolio`.

**Screenshot** — PORT-US2-01: `My portfolios` list, `New` entry, saved portfolios, value, holdings count, asset mix and drift.

<img src="source/assets/screenshots/portfolio/port-us2-01-my-portfolios-list.png" alt="My portfolios list" width="420" />

**Screenshot** — PORT-US2-02: `New Portfolio` initial state, containing name, base currency, `Initial holdings`, Add ETF entry and research-only boundaries.

<img src="source/assets/screenshots/portfolio/port-us2-02-create-initial-holdings.png" alt="New Portfolio initial holdings state" width="420" />

2. Enter a name and base currency, add initial ETF holdings, then create and open a new My Portfolio.
3. View My Portfolio's overview, allocations, forecasts and positions and save a `Baseline Snapshot`.
4. Enter `Edit`, adjust the position quantity, and use `Add ETF` or remove operation to update the portfolio.

**Screenshot** — PORT-US2-03: My Portfolio `Editing` page, containing value/holdings/status, weights, share steppers, remove controls and `Add ETF`.

<img src="source/assets/screenshots/portfolio/port-us2-03-edit-holdings.png" alt="My Portfolio holdings editor" width="420" />

5. Return to `Baseline snapshots` to view and manage historical snapshots before and after editing.

**Screenshot** — PORT-US2-04: `Baseline snapshots` history, save entry, search, two saved snapshots and ETF details of the selected snapshot.

<img src="source/assets/screenshots/portfolio/port-us2-04-baseline-history.png" alt="Baseline snapshots history" width="420" />

6. Remove a My Portfolio that is no longer needed from the list and make sure that other portfolios are not affected.

### Acceptance Criteria

| ID | Requirement | Reference | Ownership | Priority |
| --- | --- | --- | --- | --- |
| US2-AC01 | Shows loading status when opening or refreshing for the first time; when completed the list reflects the currently saved My Portfolio. | US-PORT-02 | Integration | Must |
| US2-AC02 | The new My Portfolio form provides HKD, USD, CNY, EUR and GBP as base currencies. | US-PORT-02 | Integration | Must |
| US2-AC03 | The create check button in the upper-right corner is disabled when the name is empty, an initial holding has a non-positive quantity, or a creation request is in progress. | US-PORT-02 | Integration | Must |
| US2-AC04 | The ETF selector supports code/name/issuer search, sorting indicators, applicable periods/dimensions, direction and reset; valid ETFs are added with the default values provided by the interface, and temporary ETFs are displayed as Added and cannot be selected repeatedly. | US-PORT-02 | Integration | Must |
| US2-AC05 | No matching search shows no results status; clear the search to restore the ETF ranking list and number of results. | US-PORT-02 | Integration | Must |
| US2-AC06 | Initial holdings supports +, −, direct input and deletion; these operations only modify the creation draft, and the final effective quantity is reflected in the creation result. | US-PORT-02 | Integration | Must |
| US2-AC07 | After creation, My Portfolio appears in the list with its name, total value, holding count, asset allocation, prior-day return when available, and Baseline Snapshot deviation when available. | US-PORT-02 | Integration | Must |
| US2-AC08 | After opening a new My Portfolio from the list, its name, base currency, initial holding quantities and values match the creation draft. | US-PORT-02 | Integration | Must |
| US2-AC09 | The creation process clearly states that it is creating a research-based My Portfolio and will not place orders. | US-PORT-02 | Integration | Must |
| US2-AC10 | The header displays the name, number of positions, total value and type of the selected My Portfolio; when the valuation data is incomplete, the corresponding Partial or Unavailable status is displayed. | US-PORT-02 | Integration | Must |
| US2-AC11 | The configured grouping, ETF quantity and position weight are consistent with the currently saved positions. | US-PORT-02 | Integration | Must |
| US2-AC12 | Shared prediction behavior matches User Story 1 and uses the saved value of this My Portfolio instead of the previously opened Model Portfolio. | US-PORT-02 | Integration | Must |
| US2-AC13 | Position rows display ticker, name, weight, shares, market cap, cost, and available ETF metadata; selecting a row opens the matching ETF overlay. | US-PORT-02 | Integration | Must |
| US2-AC14 | Saving creates a Baseline Snapshot of the current holdings, quantities, values and weights. | US-PORT-02 | Integration | Must |
| US2-AC15 | A success Toast appears and UAT Before Edit is added to Baseline History with its timestamp, value and top-weight context. | US-PORT-02 | Integration | Must |
| US2-AC16 | Opening a saved Baseline Snapshot displays its holding count, total value, status, and saved ETF quantities and weights. | US-PORT-02 | Integration | Must |
| US2-AC17 | The Edit page identifies the selected My Portfolio and displays the current value, number of positions, status and editable position lines. | US-PORT-02 | Integration | Must |
| US2-AC18 | +, −, valid positive quantity input and checkmark Submit will update and persist the selected ETF quantity; attempts to generate non-positive quantities will not commit the value. | US-PORT-02 | Integration | Must |
| US2-AC19 | After successful submission, refreshing or reopening will still display the updated quantity, value, weight and configuration. | US-PORT-02 | Integration | Must |
| US2-AC20 | Add ETF Search by symbol, name or issuer, and adjust sorting indicators, applicable dimensions and direction; number of results and no-result status are both visible. | US-PORT-02 | Integration | Must |
| US2-AC21 | ETFs already held are marked Added, disabled, and cannot be added again via the selector. | US-PORT-02 | Integration | Must |
| US2-AC22 | After selecting a valid ETF, the selector is closed and the ETF is added to the Edit list with default values; it still exists after reopening the details. | US-PORT-02 | Integration | Must |
| US2-AC23 | Removing an ETF removes only the ticker and refreshes the list, values, weights, and allocations. | US-PORT-02 | Integration | Must |
| US2-AC24 | Quantity editing, addition and removal only affect the corresponding ETF; unoperated positions retain the original quantity and cost information. | US-PORT-02 | Integration | Must |
| US2-AC25 | Edit can be closed directly when there are no modifications to be submitted, and no additional changes will be made to the saved positions. | US-PORT-02 | Integration | Must |
| US2-AC26 | Adds only one Baseline Snapshot per creation, selects and loads its details, and updates the save count. | US-PORT-02 | Integration | Must |
| US2-AC27 | Searches can be filtered by Baseline Snapshot tag, date, or top weight ETF symbol, and can be cleared. | US-PORT-02 | Integration | Must |
| US2-AC28 | Rename rejects empty names, persists valid new tags, and updates history and selected details. | US-PORT-02 | Integration | Must |
| US2-AC29 | Delete only removes the selected Baseline Snapshot and reduces the count; if the currently selected item is deleted, the page will no longer display its details, and the remaining valid items will be selected or display an empty status. | US-PORT-02 | Integration | Must |
| US2-AC30 | UAT Before Edit retains the positions before operation 2.4, and UAT Current State is consistent with the current My Portfolio after operation 2.4. | US-PORT-02 | Integration | Must |
| US2-AC31 | After reopening Baseline snapshots, the retained Baseline Snapshot and rename results still exist, and the deleted temporary Baseline Snapshot no longer appears. | US-PORT-02 | Integration | Must |
| US2-AC32 | A My Portfolio with no holdings can still be opened; its details clearly show no holdings, unavailable allocation and unavailable forecast states, without presenting zero values or sample allocations as valid results. | US-PORT-02 | Integration | Must |
| US2-AC33 | Removal requires naming My Portfolio and stating irrevocable destructive confirmation; My Portfolio remains unchanged after cancellation. | US-PORT-02 | Integration | Must |
| US2-AC34 | Remove this My Portfolio from the list after confirmation without deleting other My Portfolios. | US-PORT-02 | Integration | Must |
---

<a id="us-port-03"></a>

## User Story 3 - Generate AI Portfolio Recommendation

**Story ID:** `US-PORT-03`  
**User story:** As a user, I want to answer the fit questionnaire, get interpretable ETF recommendations, check the generated results and save to My portfolios.  

### Walkthrough

1. Open `Find Your Ideal Portfolio` from `Portfolio > Recommended`, complete the four-question questionnaire and check the response progress.

**Screenshot** — `Find my portfolio` The starting state of the questionnaire, showing the four-step structure, `0/4 answered`, Goal options and `Next` that has not been enabled.

<img src="source/assets/screenshots/portfolio/port-us3-extra-quiz-start.png" alt="Recommendation quiz initial state" width="420" />

**Screenshot** — PORT-US3-01: The progress status after the questionnaire enters Question 2, showing the completed Goal, current Time step, `1/4 answered` and horizon options.

<img src="source/assets/screenshots/portfolio/port-us3-01-recommendation-quiz.png" alt="Recommendation quiz progress" width="420" />

2. Submit the answer and observe the generation progress and pending states of the Recommendation.

**Screenshot** — PORT-US3-02: Step 4 of Recommendation being generated, showing progress, pending header/holdings, loading projection, and pending metrics.

<img src="source/assets/screenshots/portfolio/port-us3-02-generation-progress.png" alt="Recommendation generation progress" width="420" />

3. View the resulting risk profile, projection, portfolio metrics, recommendation build, and ETF holdings.

**Screenshot** — PORT-US3-03: Generates the completed `Growth Focus ETF Portfolio`, including AI-assisted/risk/currency/holdings headers, projection and `Add to My Portfolio`.

<img src="source/assets/screenshots/portfolio/port-us3-03-recommendation-result.png" alt="Generated Portfolio recommendation" width="420" />

**Screenshot** — Recommendation’s expected return, volatility, Sharpe, asset mix, generated weights and `Recommendation build`.

<img src="source/assets/screenshots/portfolio/port-us3-extra-recommendation-build.png" alt="Recommendation metrics and build" width="420" />

**Screenshot** — `How this was built` screening process, holdings table, portfolio characteristics and constraint notes.

<img src="source/assets/screenshots/portfolio/port-us3-extra-recommendation-build-holdings.png" alt="Recommendation build holdings table" width="420" />

**Screenshot** — Generates the full set of `ETF holdings`, target weights, deterministic-engine disclosure and `Back to adjust answers`.

<img src="source/assets/screenshots/portfolio/port-us3-extra-recommendation-etf-holdings.png" alt="Recommendation ETF holdings" width="420" />

4. Return to the questionnaire to adjust an answer, regenerate and confirm that the results are updated with the new answer.
5. Select `Add to My Portfolio`, review the configuration, and select `Add as new` or `Add to existing`.

**Screenshot** — PORT-US3-04: Recommendation's `Add to existing` target selection page, showing the optional My Portfolio, value, holdings count, asset mix and drift.

<img src="source/assets/screenshots/portfolio/port-us3-04-save-recommendation.png" alt="Recommendation Add to existing target selection" width="420" />

**Screenshot** — Recommendation After entering the Visual editor after `Add to My Portfolio`, you can choose `Add to existing` or `Add as new` in the next step.

<img src="source/assets/screenshots/portfolio/port-us3-extra-add-to-portfolio-editor.png" alt="Recommendation Add to My Portfolio editor" width="420" />

6. Open the target portfolio from `My portfolios` and confirm that the Recommendation has been saved as selected.

### Acceptance Criteria

| ID | Requirement | Reference | Ownership | Priority |
| --- | --- | --- | --- | --- |
| US3-AC01 | The questionnaire shows exactly four progress steps and the current number of questions/answered. | US-PORT-03 | Integration | Must |
| US3-AC02 | Each question displays supporting text and selectable options with labels, details, icons and risk/benefit context. | US-PORT-03 | Integration | Must |
| US3-AC03 | Next/See recommendation is always disabled until the current question has an answer. | US-PORT-03 | Integration | Must |
| US3-AC04 | Only one option can be selected per question, and Back/Next navigation retains all previous answers. | US-PORT-03 | Integration | Must |
| US3-AC05 | After completing the questionnaire, the results page displays the risk level derived from the combination of answers—Conservative, Moderate, Growth, or Opportunistic—and enters the recommendation generation state corresponding to that level. | US-PORT-03 | Integration | Must |
| US3-AC06 | The page immediately enters a visible generation state; stale recommendations from a previous run must not appear, even briefly. | US-PORT-03 | Integration | Must |
| US3-AC07 | Progress communicates four stages: Screen ETF universe, Optimize allocation, Draft AI explanation, and Check wording. | US-PORT-03 | Integration | Must |
| US3-AC08 | Pending header, forecast, build, explanation and ETF rows are clearly marked as generating/pending rather than populated with fabricated final values. | US-PORT-03 | Integration | Must |
| US3-AC09 | The save operation is not available until there is a clear Recommendation result. | US-PORT-03 | Integration | Must |
| US3-AC10 | The header displays the title of the generated results, risk level, base currency, number of positions and AI-assisted/research summary only. | US-PORT-03 | Integration | Must |
| US3-AC11 | Expected annualized returns, volatility, Sharpe ratio, asset class allocation, number of ETFs, and generated weights are derived from returned recommendations. | US-PORT-03 | Integration | Must |
| US3-AC12 | Forecasts are calculated based on the generated ETF weights and modeled amounts and meet the interaction criteria established in User Story 1. | US-PORT-03 | Integration | Must |
| US3-AC13 | Recommendation Build displays this run's risk profile, screening and optimization summary, as-of date, candidate scope, exclusion reasons and warnings, and corresponds to the final ETF holdings. | US-PORT-03 | Integration | Must |
| US3-AC14 | Description markup is AI-generated and renders paragraphs, emphasis, bullets, quotes, and tables without displaying the original Markdown markup. | US-PORT-03 | Integration | Must |
| US3-AC15 | The explanation matches this Recommendation Build and its generated holdings, and clearly states the historical-data, research-use and no-return-guarantee boundaries. | US-PORT-03 | Integration | Must |
| US3-AC16 | ETF row shows ticker, name, asset class, generated target weight, and progress; shows weights totaling 100% within rounding tolerance. | US-PORT-03 | Integration | Must |
| US3-AC17 | Return to the questionnaire and keep the current answers. Regenerating clears previous suggestions and displays the build status before new results. | US-PORT-03 | Integration | Must |
| US3-AC18 | Recommendation is marked throughout as AI-assisted and for research only; it will not be saved to My portfolios until the user explicitly selects Add to My Portfolio and completes the confirmation. | US-PORT-03 | Integration | Must |
| US3-AC19 | The add page uses the generated recommendation, modeled amount, base currency and latest available ETF prices. | US-PORT-03 | Integration | Must |
| US3-AC20 | Visual/List editing and both target options are compliant with Operations 1.5–1.7. | US-PORT-03 | Integration | Must |
| US3-AC21 | Confirmation is displayed when using Add as new and the new My Portfolio appears in My portfolios with the expected name, base currency and number of positions. | US-PORT-03 | Integration | Must |
| US3-AC22 | Use Add to existing to merge quantities: new codes are added and existing codes get the added quantity and weighted cost. | US-PORT-03 | Integration | Must |
| US3-AC23 | Only opening the add page or returning to Recommendation will not write to My portfolios; the corresponding save result will only be generated after the target selection and confirmation are completed. | US-PORT-03 | Integration | Must |
---

<a id="us-port-04"></a>

## User Story 4 - Analyze Portfolio and review AI recommendations

**Story ID:** `US-PORT-04`  
**User story:** As a user, I wish to analyze a working draft for My Portfolio or Model Portfolio, select important diagnostic issues, and review AI-assisted considerations and quantitative `Suggested actions`; when the source is My Portfolio, I can also edit and apply these actions.  

### Walkthrough

1. Select `Start analysis` from a My Portfolio to view and adjust draft positions as necessary.

**Screenshot** — PORT-US4-01: Pre-analysis editable draft of `Draft Portfolio > Holdings`, including shares input and step controls, delete operations, `Add ETF`, not yet unlocked `Analysis / Suggestions`, and `Analyze draft portfolio`.

<img src="source/assets/screenshots/portfolio/port-us4-01-analysis-holdings.png" alt="Draft Portfolio editable holdings" width="420" />

2. Select `Analyze draft portfolio` to view Analysis overview, Holdings, Exposure breakdown and Data coverage.

**Screenshot** — PORT-US4-02: `Draft Portfolio > Analysis`, contains `Data coverage`, `Analysis overview`, score, value/positions, HHI, Effective N and multidimensional diagnostics.

<img src="source/assets/screenshots/portfolio/port-us4-02-analysis-overview.png" alt="Draft Portfolio Analysis overview" width="420" />

**Screenshot** — read-only Holdings table and `Exposure breakdown` in Analysis results; the table is not an editable Holdings draft before running the analysis.

<img src="source/assets/screenshots/portfolio/port-us4-extra-analysis-holdings-exposure.png" alt="Analysis holdings table and exposure breakdown" width="420" />

3. Review and select the diagnoses you want the recommendations to cover, and then generate recommendations.

**Screenshot** — PORT-US4-03: Sector/Region/Currency of `Exposure breakdown`, and Found/Selected/Hidden counts, selected finding and generate action of `Diagnosis`.

<img src="source/assets/screenshots/portfolio/port-us4-03-diagnosis-selection.png" alt="Exposure breakdown and Diagnosis selection" width="420" />

4. Review the selected diagnostic scope, AI considerations, candidate pool, and quantitative `Suggested actions`.

**Screenshot** — PORT-US4-04: selected diagnosis scope, `AI drafted` boundary, research consideration, candidate pool and quantitative `Suggested actions` preview in `Suggestions`.

<img src="source/assets/screenshots/portfolio/port-us4-04-suggested-actions.png" alt="AI considerations and Suggested actions" width="420" />

5. Review or adjust target shares for My Portfolio sources, apply scenarios and confirm portfolio updates.
6. Start Analysis Workflow again from the Model Portfolio and confirm that `Suggested actions` is a read-only result.

### Acceptance Criteria

| ID | Requirement | Reference | Ownership | Priority |
| --- | --- | --- | --- | --- |
| US4-AC01 | Analysis Workspace opens in Holdings, identifies the source My Portfolio, and preloads its saved ETF holdings, quantities, costs, values and weights. | US-PORT-04 | Integration | Must |
| US4-AC02 | Analysis remains locked until an analysis exists; Suggestions remains locked until a suggestion exists. | US-PORT-04 | Integration | Must |
| US4-AC03 | +/− will update the draft immediately; direct input only displays a check mark when the value changes. After confirmation, values and weights are recalculated, old analysis/recommendations are cleared, and the saved My Portfolio is not modified. | US-PORT-04 | Integration | Must |
| US4-AC04 | Add ETF supports catalog search and sorting controls; duplicates are marked Added and cannot be added again, valid new ETFs can be added to the current draft. | US-PORT-04 | Integration | Must |
| US4-AC05 | Removing ETFs or Clear all only affects working drafts until you explicitly execute Apply to My Portfolio. | US-PORT-04 | Integration | Must |
| US4-AC06 | `Analyze draft portfolio` is disabled when the draft is empty; only progress is displayed during the analysis run and no second analysis operation is provided. | US-PORT-04 | Integration | Must |
| US4-AC07 | `Analyze draft portfolio` switches to the `Analysis` tab and continues to display progress until analysis of the current draft completes or fails. | US-PORT-04 | Integration | Must |
| US4-AC08 | The completed overview shows the total value/base currency, number of positions, HHI, Effective N, diversification, concentration, geography, FX, fee efficiency and liquidity information available for the current draft. | US-PORT-04 | Integration | Must |
| US4-AC09 | Unavailable indicators are displayed as Unavailable/—; if the available data is insufficient to form an overall score, the score is also displayed as Unavailable and must not be replaced by a zero value. | US-PORT-04 | Integration | Must |
| US4-AC10 | The Holdings table displays Symbol, QTY, COST/UNIT, MKT VALUE, WEIGHT and CCY and supports horizontal scrolling; unavailable values display —, and no placeholder return is shown. | US-PORT-04 | Integration | Must |
| US4-AC11 | `Exposure breakdown` displays Sector, Region and Currency and consistently switches between `Pie` and `List` using the same data. | US-PORT-04 | Integration | Must |
| US4-AC12 | Analytics disclaimers are always visible; when a response contains partial/unavailable metrics or warnings, the page displays a blue Data coverage indicating the affected data range without calling it an AI fallback. | US-PORT-04 | Integration | Must |
| US4-AC13 | The current result applies only to this draft; returning to Holdings and changing a quantity clears and relocks the old Analysis and Suggestions. | US-PORT-04 | Integration | Must |
| US4-AC14 | Diagnostic items display severity, title, metric/threshold and selection state; all returned items are selected by default. | US-PORT-04 | Integration | Must |
| US4-AC15 | The number, severity, and selection status of diagnostic items returned by the current analysis are consistent with the page count. | US-PORT-04 | Integration | Must |
| US4-AC16 | After switching diagnostic items, the Found/Selected/Hidden count is updated immediately; the diagnostic scope listed in the generated results only includes the items selected when submitting. | US-PORT-04 | Integration | Must |
| US4-AC17 | When zero items are selected, the UI instructs the user to select at least one item and `Generate Recommendations from <n> Selected` is disabled. | US-PORT-04 | Integration | Must |
| US4-AC18 | Recommendation generation is disabled until analysis completes; while generation is running, only progress is shown and no second generation action is available. | US-PORT-04 | Integration | Must |
| US4-AC19 | The generation switches to Suggestions and displays four progress stages: Read selected diagnosis, Draft considerations, Apply safety guard, Prepare preview. | US-PORT-04 | Integration | Must |
| US4-AC20 | The results indicate the diagnostic items used to generate recommendations. | US-PORT-04 | Integration | Must |
| US4-AC21 | AI-generated considerations appear AI drafted, with hints about research use and what can go wrong with the AI. | US-PORT-04 | Integration | Must |
| US4-AC22 | Considerations only cover diagnostic items selected during submission; unselected diagnoses will not appear in the scope of this recommendation and corresponding considerations. | US-PORT-04 | Integration | Must |
| US4-AC23 | Each consideration presents observations, rationale, expected impact, confidence level, relevant questions, and wording for research purposes only, without order execution language. | US-PORT-04 | Integration | Must |
| US4-AC24 | `Suggested actions` displays feasibility, row count, turnover, new candidate count/symbols and risk level. | US-PORT-04 | Integration | Must |
| US4-AC25 | Each Suggested Action row displays the code/name, Held/New status, current share/weight, target share/weight, quantity and value difference, and Model target comparison. | US-PORT-04 | Integration | Must |
| US4-AC26 | `Suggested actions` supports scrolling through all Held/New rows and updates the corresponding quantity and value difference immediately after editing the target. | US-PORT-04 | Integration | Must |
| US4-AC27 | Recommendation candidate pool displays only ETF symbols that are allowed to be considered in the current recommendation process and corresponds to new candidates in `Suggested actions`. | US-PORT-04 | Integration | Must |
| US4-AC28 | Target share only accepts non-negative values and recalculates target weight, share difference, weight difference and value difference. | US-PORT-04 | Integration | Must |
| US4-AC29 | Reset clears user overrides and restores the target scenario originally provided by the preview. | US-PORT-04 | Integration | Must |
| US4-AC30 | Apply to My Portfolio is only enabled if the source is My Portfolio, the scenario is feasible, there are displayable action lines, the price query is completed and all positive targets have available prices; remains disabled if the conditions are not met. | US-PORT-04 | Integration | Must |
| US4-AC31 | Applying updates the saved holdings with the edited positive targets, preserves unaffected valid holdings, closes the workspace and refreshes the details. | US-PORT-04 | Integration | Must |
| US4-AC32 | Reopening proves that quantities and weights/values were updated; previous analysis/recommendations are no longer considered valid for the revised holdings. | US-PORT-04 | Integration | Must |
| US4-AC33 | Apply to My Portfolio cannot be triggered repeatedly while the request is in progress; after success, only one position update will be generated and the refreshed details will be returned. | US-PORT-04 | Integration | Must |
| US4-AC34 | Model Portfolio can be used as a draft source to complete the same Analysis Workflow for Holdings, Analysis, Diagnosis and Suggestions. | US-PORT-04 | Integration | Must |
| US4-AC35 | `Suggestions` displays the selected diagnostic scope, AI considerations and quantitative `Suggested actions`, and will not skip the results just because the source is Model Portfolio. | US-PORT-04 | Integration | Must |
| US4-AC36 | The Model Portfolio's `Suggested actions` are displayed as a read-only list with Current, Target, Change, and Value Difference viewable per row, but no Target shares input or step controls are provided. | US-PORT-04 | Integration | Must |
| US4-AC37 | Model Portfolio results do not display Reset or Apply to My Portfolio; closing the workspace does not modify the Model Portfolio, nor does it create or update the My Portfolio. | US-PORT-04 | Integration | Must |
---

<a id="us-port-05"></a>

## User Story 5 - Review based on Baseline Snapshot

**Story ID:** `US-PORT-05`  
**User story:** As a user, I want to compare today's My Portfolio with a valid historical Baseline Snapshot, understand configuration deviations, edit adjustments based on the Baseline Snapshot and apply them.  

### Walkthrough

1. Open `Portfolio Review` from a My Portfolio, browse the available Baseline Snapshots, and differentiate between `No changes` and Reviewable status.

**Screenshot** — PORT-US5-01: `Portfolio Review > Baseline`, showing also `No changes` snapshot, selected snapshot, ETF summary and `Review allocation changes`.

<img src="source/assets/screenshots/portfolio/port-us5-01-baseline-selection.png" alt="Portfolio Review baseline selection" width="420" />

2. Select a Baseline Snapshot with changes to view the portfolio summary and holdings drift.

**Screenshot** — PORT-US5-02: Current/baseline value, absolute drift and `Holding drift` table of the selected Baseline Snapshot, comparing Now, Baseline and Drift row by row.

<img src="source/assets/screenshots/portfolio/port-us5-02-baseline-deviation.png" alt="Baseline Snapshot holding drift" width="420" />

3. Enter `Analysis` and read drift status, driver summary, allocation changes and ETF quantity changes.

**Screenshot** — PORT-US5-03: `Analysis` of Baseline comparison, including status, allocation drift, current/baseline values, largest move and driver summary.

<img src="source/assets/screenshots/portfolio/port-us5-03-review-analysis.png" alt="Baseline review analysis" width="420" />

**Screenshot** — `Industry allocation changes`, `ETF movement detail` and quantity-difference summary.

<img src="source/assets/screenshots/portfolio/port-us5-extra-allocation-movements.png" alt="Baseline allocation and ETF movements" width="420" />

**Screenshot** — baseline/current/target quantities and value differences for each ETF in `Quantity changes`.

<img src="source/assets/screenshots/portfolio/port-us5-extra-quantity-changes.png" alt="Baseline quantity changes" width="420" />

4. Open `Suggestions`, review and adjust Baseline-based target shares as needed.

**Screenshot** — PORT-US5-04: Editable baseline-based `Recommended ETF changes`, including target-share controls, `Reset suggestion` and `Apply to My Portfolio`.

<img src="source/assets/screenshots/portfolio/port-us5-04-adjustment-suggestions.png" alt="Editable baseline adjustment suggestions" width="420" />

5. Select `Apply to My Portfolio`, return to the portfolio and confirm that the adjustment results have been updated.

### Acceptance Criteria

| ID | Requirement | Reference | Ownership | Priority |
| --- | --- | --- | --- | --- |
| US5-AC01 | Portfolio Review opens in the Baseline tab and lists only the snapshots saved by this My Portfolio. | US-PORT-05 | Integration | Must |
| US5-AC02 | The UI explains that a Baseline Snapshot is a saved reference configuration, not a manually configured target. | US-PORT-05 | Integration | Must |
| US5-AC03 | UAT Current State is visibly disabled/dimmed, marked No changes, and states that the current position is the same as the Baseline Snapshot. | US-PORT-05 | Integration | Must |
| US5-AC04 | When selecting UAT Before Edit first and then clicking on the unchanged Baseline Snapshot, UAT Current State will not be selected and the original selection will remain unchanged. | US-PORT-05 | Integration | Must |
| US5-AC05 | A Baseline Snapshot marked No changes does not provide access to Analysis, and the page states that its positions are consistent with the current status. | US-PORT-05 | Integration | Must |
| US5-AC06 | Even if Baseline Snapshot cannot be selected for review, Show ETF details can still be used for inspection. | US-PORT-05 | Integration | Must |
| US5-AC07 | Baseline Snapshot with changes becomes Selected and gets selected style. | US-PORT-05 | Integration | Must |
| US5-AC08 | Expanded details show saved ETF quantities and weights; collapsed only hides the details panel. | US-PORT-05 | Integration | Must |
| US5-AC09 | Deviation results list both new and removed ETFs, and cannot be omitted because a symbol only exists in the current position or Baseline Snapshot. | US-PORT-05 | Integration | Must |
| US5-AC10 | The deviation table, sorted by significant change, shows each code's Baseline Snapshot weight, current weight, quantity difference, and signed weight deviation. | US-PORT-05 | Integration | Must |
| US5-AC11 | The summary indicates the name, date, and total absolute deviation of the selected Baseline Snapshot; Review allocation changes is now enabled. | US-PORT-05 | Integration | Must |
| US5-AC12 | Analysis clearly indicates that the current position is being compared to the selected Baseline Snapshot. | US-PORT-05 | Integration | Must |
| US5-AC13 | Analysis displays the Within range, Monitor drift, or Review recommended status and displays the current value, Baseline Snapshot value, maximum change, and percentage point deviation. | US-PORT-05 | Integration | Must |
| US5-AC14 | `Driver summary` identifies the largest exposure increase/decrease and indicates whether price and/or quantity changes contributed. | US-PORT-05 | Integration | Must |
| US5-AC15 | `Industry allocation changes` summarizes Baseline Snapshot weights and current weights by ETF asset class and shows signed deviations. | US-PORT-05 | Integration | Must |
| US5-AC16 | `ETF movement detail` shows Baseline Snapshot weights, current weights and quantities, with a plain-language reason for each material movement. | US-PORT-05 | Integration | Must |
| US5-AC17 | `Quantity changes` displays the Baseline Snapshot quantity, current quantity, target quantity, unit difference and value difference for key rows. | US-PORT-05 | Integration | Must |
| US5-AC18 | Baseline Snapshot comparisons must not show AI flags such as AI-generated, AI drafted, etc., and are explicitly presented as configuration comparisons based on the selected snapshot. | US-PORT-05 | Integration | Must |
| US5-AC19 | Suggestions displays the target scenario only after the selected Baseline Snapshot preview finishes loading; a stale preview is not shown while loading or switching scope. | US-PORT-05 | Integration | Must |
| US5-AC20 | The scope card takes the Baseline Snapshot and reports the number of changed rows and the total number of rows. | US-PORT-05 | Integration | Must |
| US5-AC21 | The target row shows the current share/weight, Baseline Snapshot weight, calculated target share/weight, signed change, value difference, and Hold/Adjust status. | US-PORT-05 | Integration | Must |
| US5-AC22 | The default scenario generates reviewable target shares by the selected Baseline Snapshot; ETFs that do not exist in the Baseline Snapshot can appear as zero targets. | US-PORT-05 | Integration | Must |
| US5-AC23 | Target values are editable and non-negative, and displayed weights and differences recalculate immediately. | US-PORT-05 | Integration | Must |
| US5-AC24 | Reset suggestion removes overrides and restores the calculated default targets. | US-PORT-05 | Integration | Must |
| US5-AC25 | Apply to My Portfolio is disabled until target calculation completes and is enabled only when the target scenario is available. | US-PORT-05 | Integration | Must |
| US5-AC26 | After Apply to My Portfolio succeeds, the review closes and My Portfolio details refresh to show the updated saved holdings. | US-PORT-05 | Integration | Must |
| US5-AC27 | Reopening proves that target shares were applied and the previously selected Baseline Snapshot shows the updated comparison results. | US-PORT-05 | Integration | Must |
| US5-AC28 | Apply to My Portfolio cannot be triggered repeatedly while the request is in progress; only one position update will be generated after completion, and the same final status will be displayed when reopening the details and Portfolio Review. | US-PORT-05 | Integration | Must |
