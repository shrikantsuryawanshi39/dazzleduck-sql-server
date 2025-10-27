---
sidebar_label: "Installation"
sidebar_position: 3
---
# Installation

## Installing Dazzle Duck SQL Server

Dazzle Duck can be installed globally or built from source — depending on your workflow.

---

## Option 1 — Install via npm

The easiest way to get started is through **npm**:

```bash
npm install -g dazzleduck
```

Verify the installation:

```bash
dazzleduck --version
```

---

## Option 2 — Build from Source

Clone the repository:

```bash
git clone https://github.com/dazzleduck/sql-server
cd sql-server
```

Build the project:

```bash
make build
```

Run the server:

```bash
./dazzleduck start
```

---

## Configuration File (Optional)

You can create a simple configuration file to customize Dazzle Duck behavior.

Create `duck.config.json`:

```json
{
  "port": 8080,
  "storage": "memory",
  "logLevel": "info"
}
```

Start with config:

```bash
dazzleduck start --config duck.config.json
```

---

## Supported Platforms

Dazzle Duck works seamlessly across:

- macOS (Intel & Apple Silicon)
- Linux (x64 / ARM)
- Windows 10/11

---

## What’s Next?

- [Quick Start Guide](./quickstart.md)  
- [Configuration & Setup](./configuration.md)  
- [Architecture Overview](./architecture.md)
