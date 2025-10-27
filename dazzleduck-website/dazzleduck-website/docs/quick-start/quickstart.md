---
sidebar_label: "Quick Start"
sidebar_position: 2
---
# Quickstart

## Get Up and Running with Dazzle Duck

Welcome to **Dazzle Duck SQL Server** 🦆 — a fast, extensible, and modern SQL engine for analytics.  
This guide will help you set up and run your **first query** in minutes.

---

## [Installation](/docs/quick-start/installation)  

You can install Dazzle Duck using one of the following methods:

### Option 1: Install via npm

```bash
npm install -g dazzleduck
```

### Option 2: Build from Source

```bash
git clone https://github.com/dazzleduck/sql-server
cd sql-server
make build
```

> 💡 See the [Installation Guide](./installation.md) for advanced setup options.

---

## Run Your First Query

Start the server:

```bash
dazzleduck start
```

Then open the CLI or connect via your favorite SQL client:

```sql
SELECT name, revenue
FROM customers
WHERE region = 'Asia'
ORDER BY revenue DESC
LIMIT 10;
```

That’s it! You’ve successfully executed your first query with **Dazzle Duck SQL Server**.

---

## Next Steps

-  [Configuration Basics](/docs/quick-start/configuration)  
-  [SQL Reference](./sql-reference.md)  
-  [Extending Dazzle Duck](./extensions.md)

---

## Need Help?

- GitHub Discussions: [dazzleduck/sql-server](https://github.com/dazzleduck/sql-server/discussions)  
- Twitter: [@dazzleduckdb](https://twitter.com/dazzleduckdb)

Happy Querying! 
