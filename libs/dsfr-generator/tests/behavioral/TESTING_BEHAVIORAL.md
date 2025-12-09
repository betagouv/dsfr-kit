# Behavioral Testing Strategy

This document outlines the testing strategy for the Behavior Analyzer component of the DSFR Generator.

## Overview

The Behavior Analyzer (`packages/dsfr-js-analyzer`) is a TypeScript-based tool that parses DSFR JavaScript files to extract component behaviors, including:
- Event listeners (events, targets, handlers)
- State variables (scope, initial values)
- DOM manipulations (class toggles, attribute changes)
- State transitions (triggers, conditions)

The `libs/dsfr-generator` Python package interacts with this tool via subprocess and parses its JSON output.

## Testing Approach

We use a **fixture-based integration testing** approach:

1.  **Fixtures**: Create representative JavaScript files in `libs/dsfr-generator/tests/fixtures/` that MIMIC the structure of real DSFR components but are simplified for testing.
    *   Example: `behavior_sample.js` contains a mock class with `addEventListener`, `this.state = ...`, and DOM operations.
2.  **Test Runner**: Use `pytest` in `libs/dsfr-generator/tests/behavioral/` to run the analyzer against these fixtures.
3.  **Validation**: Assert that the analyzer output matches the expected patterns in the fixture.

## Scaling to New Components

To support new DSFR components (e.g., Accordion, Modal, Tabs):

1.  **Analyze Source**: Examine the real DSFR source code for the component to understand its patterns (e.g. how it handles state, class names used).
2.  **Create/Update Fixture**:
    *   Add a class to `libs/dsfr-generator/tests/fixtures/behavior_[component].js` (or a consolidated fixture) that implements the key behavior patterns.
    *   Ensure it covers edge cases like:
        *   Complex state logic (nested properties)
        *   Multiple event listeners
        *   Dynamic attribute updates
3.  **Add Test Cases**: Add a new test function in `libs/dsfr-generator/tests/behavioral/test_behavior_analyzer.py` (or a component-specific test file) that:
    *   Runs `analyze_javascript_file` on the new fixture.
    *   Asserts specific behaviors are found.

## Running Tests

Tests are integrated into the project's test suite:

```bash
uv run pytest libs/dsfr-generator/tests/behavioral/
```

Note: The `dsfr-js-analyzer` package must be built (`pnpm build`) for tests to pass. The tests skip automatically if the analyzer is missing.
