---
sidebar_label: "Configuration"
sidebar_position: 4
---
# Configuration Basics

## Customize Your Dazzle Duck Setup

Once Dazzle Duck is installed, you can control its behavior with a simple JSON config file or command-line flags.

---

## Basic Configuration

Create a file named `duck.config.json`:

```json
{
  "port": 8080,
  "storage": "memory",
  "logLevel": "info"
}
```

Start Dazzle Duck with your config:

```bash
dazzleduck start --config duck.config.json
```

> Default values will be used if no config file is provided.

---

## Connecting to External Data

Dazzle Duck supports native connectors for multiple formats and databases.

### Supported Connectors

- CSV files  
- Parquet datasets  
- PostgreSQL  
- MySQL  
- DuckDB and SQLite  

### Example: Load CSV Data

```sql
CREATE TABLE sales FROM 'data/sales.csv' WITH (format = 'csv');
```

### Example: Query External Database

```sql
ATTACH 'postgres://user:pass@localhost:5432/mydb' AS postgres;
SELECT * FROM postgres.orders LIMIT 10;
```

---

## Advanced Options

| Setting | Description | Default |
|----------|--------------|----------|
| `port` | Port for the Dazzle Duck server | `8080` |
| `storage` | Storage backend (`memory`, `disk`, or custom) | `memory` |
| `logLevel` | Logging verbosity (`error`, `info`, `debug`) | `info` |

---

## Next Steps

-  [Installation Guide](./installation.md)  
-  [SQL Reference](./sql-reference.md)  
-  [Extending Dazzle Duck](./extensions.md)
