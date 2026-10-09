---

root: true
targets: ["*"]
description: "Context efficiency, repository exploration, and token-saving guidelines"
---

# Context Efficiency and Token Saving

## 1. Repository Exploration

* Do not read, enumerate, or search inside `node_modules/` during routine exploration.
* Exclude generated files, build outputs, coverage reports, and dependency directories from broad searches whenever supported by the available tools.
* Inspect project configuration, source files, and relevant documentation before exploring dependency internals.
* Read only files relevant to the current task. Expand the investigation when evidence shows that more context is necessary.

## 2. Tool Usage

* Prefer targeted file searches over dumping entire directory trees or large files.
* Use focused commands and limit output to the information needed.
* Avoid repeating searches or rereading unchanged files when previous results remain available and reliable.
* Batch independent, related inspection operations when supported by the tool.

## 3. Context Management

* Do not load every rule, document, or source file for every task without a clear reason.
* Consult task-specific rules and Skills when relevant and supported by the active AI tool.
* Summarize large findings and retain important file paths, decisions, and unresolved issues instead of repeating raw output.

## 4. Quality and Safety

* Do not skip necessary investigation, tests, or verification solely to save tokens.
* Do not assume a file, dependency, or behavior without checking relevant evidence.
* Expand the investigation when the current evidence is insufficient to make a reliable change.
