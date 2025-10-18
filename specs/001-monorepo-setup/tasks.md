# Tasks: Monorepo Setup

**Input**: Design documents from `/specs/001-monorepo-setup/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: No test tasks included - this is infrastructure setup

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`
- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions
- **Monorepo root**: Configuration files at repository root
- **Apps**: `apps/` directory for deployable applications
- **Packages**: `packages/` directory for shared libraries

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic monorepo structure

- [x] T001 Create `apps/` directory with `.gitkeep` file
- [x] T002 Create `packages/` directory with `.gitkeep` file
- [x] T003 [P] Copy `package.json` from `specs/001-monorepo-setup/contracts/package.json` to repository root
- [x] T004 [P] Copy `pnpm-workspace.yaml` from `specs/001-monorepo-setup/contracts/pnpm-workspace.yaml` to repository root
- [x] T005 [P] Copy `turbo.json` from `specs/001-monorepo-setup/contracts/turbo.json` to repository root
- [x] T006 [P] Copy `pyproject.toml` from `specs/001-monorepo-setup/contracts/pyproject.toml` to repository root
- [x] T007 [P] Copy `.npmrc` from `specs/001-monorepo-setup/contracts/.npmrc` to repository root
- [x] T008 [P] Copy `.gitignore` from `specs/001-monorepo-setup/contracts/.gitignore` to repository root (merge with existing if present)
- [x] T009 [P] Copy `justfile` from `specs/001-monorepo-setup/contracts/justfile` to repository root
- [x] T010 Install pnpm dependencies by running `pnpm install` at repository root
- [x] T011 Install Turborepo globally or verify it's available via `turbo --version`

---

## Phase 2: User Story 1 - Initialize Monorepo Structure (Priority: P1) 🎯 MVP

**Goal**: Establish a monorepo workspace that can manage multiple related packages and applications in a single repository, enabling shared dependencies and coordinated builds.

**Independent Test**: Verify that the workspace root is properly configured, package manager recognizes the workspace structure, and a simple test package can be created and referenced by another package.

### Implementation for User Story 1

- [x] T012 [P] [US1] Create `packages/core/` directory for shared TypeScript utilities
- [x] T013 [US1] Initialize `packages/core/package.json` with name `@dsfr-kit/core`, version `0.1.0`, and basic TypeScript configuration
- [x] T014 [US1] Create `packages/core/tsconfig.json` with TypeScript compiler options
- [x] T015 [US1] Create `packages/core/src/index.ts` with a simple exported function (e.g., `export const hello = () => "Hello from core"`)
- [x] T016 [P] [US1] Create `packages/test-lib/` directory for testing workspace dependencies
- [x] T017 [US1] Initialize `packages/test-lib/package.json` with dependency on `@dsfr-kit/core` using `workspace:*` protocol
- [x] T018 [US1] Create `packages/test-lib/src/index.ts` that imports and uses the function from `@dsfr-kit/core`
- [x] T019 [US1] Run `pnpm install` to link workspace packages
- [x] T020 [US1] Verify workspace packages are recognized by running `pnpm list --depth 0`
- [x] T021 [US1] Verify local package resolution by checking that `packages/test-lib` can import from `@dsfr-kit/core` without errors

**Checkpoint**: At this point, the monorepo structure is functional with workspace package linking working correctly.

**Acceptance Criteria**:
- ✅ Workspace configuration files exist at repository root
- ✅ Package manager identifies all workspace members (`pnpm list --depth 0` shows packages)
- ✅ Local package dependencies resolve without requiring publication

---

## Phase 3: User Story 2 - Configure Build Orchestration (Priority: P2)

**Goal**: Implement automated build orchestration system that understands package dependencies and can execute builds in the correct order, with caching to avoid redundant work.

**Independent Test**: Create packages with interdependencies, trigger a build, and verify that packages build in dependency order and subsequent builds use cached results.

### Implementation for User Story 2

- [x] T022 [P] [US2] Add `build` script to `packages/core/package.json` (e.g., `"build": "tsc"` or `"build": "tsup"`)
- [x] T023 [P] [US2] Add `build` script to `packages/test-lib/package.json`
- [x] T024 [US2] Install build tools in `packages/core` (e.g., `typescript`, `tsup`, or similar)
- [x] T025 [US2] Install build tools in `packages/test-lib`
- [x] T026 [US2] Configure `packages/core/tsconfig.json` with output directory (`dist/`)
- [x] T027 [US2] Configure `packages/test-lib/tsconfig.json` with output directory (`dist/`)
- [x] T028 [US2] Run `turbo run build` and verify packages build in topological order (core before test-lib)
- [x] T029 [US2] Run `turbo run build` again without changes and verify cached results are used (should complete in <5 seconds)
- [x] T030 [US2] Modify a file in `packages/core/src/`, run `turbo run build`, and verify only `core` and `test-lib` (dependent) are rebuilt
- [x] T031 [US2] Verify `.turbo/cache/` directory contains cached build artifacts
- [x] T032 [US2] Add `clean` script to both packages to remove `dist/` and verify `turbo run clean` works

**Checkpoint**: At this point, build orchestration is functional with caching, incremental builds, and dependency-aware execution.

**Acceptance Criteria**:
- ✅ Packages build in topological order (dependencies before dependents)
- ✅ Cached builds complete in under 5 seconds
- ✅ Only changed packages and their dependents are rebuilt
- ✅ Build cache is stored in `.turbo/cache/`

---

## Phase 4: User Story 3 - Manage Multiple Language Ecosystems (Priority: P3)

**Goal**: Support both JavaScript/TypeScript and Python packages in the monorepo with their respective package managers working harmoniously.

**Independent Test**: Create both JavaScript and Python packages in the workspace, install dependencies for each, and verify that both ecosystems function independently without conflicts.

### Implementation for User Story 3

- [x] T033 [P] [US3] Create `packages/python-core/` directory for Python utilities
- [x] T034 [US3] Create `packages/python-core/pyproject.toml` with project name `dsfr-kit-python-core`, version `0.1.0`, and Python 3.12+ requirement
- [x] T035 [US3] Create `packages/python-core/package.json` with scripts for Turborepo integration (e.g., `"build": "uv run python -m build"`)
- [x] T036 [US3] Create `packages/python-core/src/dsfr_kit_python_core/__init__.py` with a simple function
- [x] T037 [P] [US3] Create `packages/python-test/` directory for testing Python workspace dependencies
- [x] T038 [US3] Create `packages/python-test/pyproject.toml` with workspace dependency on `dsfr-kit-python-core`
- [x] T039 [US3] Add `[tool.uv.sources]` section to `packages/python-test/pyproject.toml` to reference workspace package
- [x] T040 [US3] Create `packages/python-test/package.json` with scripts for Turborepo integration
- [x] T041 [US3] Run `uv sync` at repository root to install Python workspace dependencies
- [x] T042 [US3] Verify Python packages are recognized by running `uv tree`
- [x] T043 [US3] Verify both JavaScript and Python packages coexist by running `pnpm list --depth 0` and `uv tree`
- [x] T044 [US3] Run `turbo run build` and verify both JavaScript and Python packages build correctly
- [x] T045 [US3] Verify `just install` command installs dependencies for both ecosystems
- [x] T046 [US3] Verify `just build` command builds packages in both ecosystems

**Checkpoint**: At this point, both JavaScript/TypeScript and Python ecosystems coexist and function independently in the monorepo.

**Acceptance Criteria**:
- ✅ pnpm workspace features work correctly for JavaScript packages
- ✅ uv manages Python packages without interfering with JavaScript packages
- ✅ Both ecosystems use their appropriate tooling
- ✅ `just` commands orchestrate both ecosystems

---

## Phase 5: Polish & Cross-Cutting Concerns

**Purpose**: Documentation, validation, and cleanup

- [ ] T047 [P] Create `README.md` at repository root with monorepo setup instructions
- [ ] T048 [P] Document `just` commands in README (run `just --list` output)
- [ ] T049 [P] Add prerequisites section to README (Node.js 22+, pnpm 10+, Python 3.12+, uv, just) and verify `just` is installed with installation instructions
- [ ] T050 [P] Create `CONTRIBUTING.md` with guidelines for adding new packages
- [ ] T051 Verify all success criteria from spec.md are met
- [ ] T052 Run `just verify` to validate workspace configuration
- [ ] T053 Test circular dependency detection by temporarily creating a cycle and verifying error message
- [ ] T054 Test version conflict detection by temporarily adding conflicting versions and verifying error message
- [ ] T055 Decide on test packages: Keep `packages/test-lib/` and `packages/python-test/` as examples for documentation, or remove if they were only for validation (recommended: keep as working examples)
- [ ] T056 Update `.specify/memory/constitution.md` if any constitutional insights were gained during implementation

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **User Story 1 (Phase 2)**: Depends on Setup completion
- **User Story 2 (Phase 3)**: Depends on User Story 1 completion (needs packages to build)
- **User Story 3 (Phase 4)**: Depends on Setup completion, can run in parallel with US1/US2 if desired
- **Polish (Phase 5)**: Depends on all user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Depends on Setup (Phase 1) - No dependencies on other stories
- **User Story 2 (P2)**: Depends on User Story 1 (needs packages to build)
- **User Story 3 (P3)**: Depends on Setup (Phase 1) - Can start in parallel with US1/US2

### Within Each User Story

- Package creation before dependency configuration
- Dependency installation before build configuration
- Build configuration before build execution
- Validation after implementation

### Parallel Opportunities

- All Setup tasks marked [P] can run in parallel (T003-T009)
- Within User Story 1: T012 and T016 can run in parallel (creating different package directories)
- Within User Story 2: T022-T023, T024-T025, T026-T027 can run in parallel (configuring different packages)
- Within User Story 3: T033 and T037 can run in parallel (creating different package directories)
- Polish tasks marked [P] can run in parallel (T047-T050)

---

## Parallel Example: Setup Phase

```bash
# Launch all configuration file copies together:
Task: "Copy package.json from specs/001-monorepo-setup/contracts/package.json to repository root"
Task: "Copy pnpm-workspace.yaml from specs/001-monorepo-setup/contracts/pnpm-workspace.yaml to repository root"
Task: "Copy turbo.json from specs/001-monorepo-setup/contracts/turbo.json to repository root"
Task: "Copy pyproject.toml from specs/001-monorepo-setup/contracts/pyproject.toml to repository root"
Task: "Copy .npmrc from specs/001-monorepo-setup/contracts/.npmrc to repository root"
Task: "Copy .gitignore from specs/001-monorepo-setup/contracts/.gitignore to repository root"
Task: "Copy justfile from specs/001-monorepo-setup/contracts/justfile to repository root"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: User Story 1 (Initialize Monorepo Structure)
3. **STOP and VALIDATE**: Test workspace package linking independently
4. Verify acceptance criteria are met

### Incremental Delivery

1. Complete Setup → Foundation ready
2. Add User Story 1 → Test independently → Workspace structure functional (MVP!)
3. Add User Story 2 → Test independently → Build orchestration functional
4. Add User Story 3 → Test independently → Multi-language support functional
5. Each story adds value without breaking previous stories

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup together
2. Once Setup is done:
   - Developer A: User Story 1 (workspace structure)
   - Developer B: User Story 3 (Python ecosystem) - can start in parallel
3. Once US1 is complete:
   - Developer A or C: User Story 2 (build orchestration)
4. Stories complete and integrate independently

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- Use `just` commands for common operations
- Verify workspace configuration with `just verify`
- Test packages can be removed after validation if not needed long-term

---

## Summary

**Total Tasks**: 56 tasks
- **Setup**: 11 tasks
- **User Story 1**: 10 tasks
- **User Story 2**: 11 tasks
- **User Story 3**: 14 tasks
- **Polish**: 10 tasks

**Parallel Opportunities**: 16 tasks marked [P] can run in parallel within their phases

**Independent Test Criteria**:
- **US1**: Workspace packages link correctly without publication
- **US2**: Builds execute in dependency order with caching
- **US3**: Both JavaScript and Python ecosystems function independently

**Suggested MVP Scope**: Setup + User Story 1 (22 tasks total)
