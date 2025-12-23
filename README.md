# Node FS Practice

Practice project for Node.js **File System** (`fs/promises`).  
This project demonstrates reading JSON data, filtering, mapping, and writing to text files asynchronously.

---

## Project Structure

project-03/
├── data/
│ └── users.json # Sample user data
├── output/
│ ├── summary.txt # Users whose names start with 'A'
│ ├── countB.txt # Users whose names start with 'B'
│ └── allCaps.txt # All names in uppercase
├── index.js # Contains all three async functions
└── README.md

yaml
Copy code

---

## Functions Overview

| Function | Description | Output File |
|----------|-------------|-------------|
| `processUsers()` | Filters users whose names start with 'A' | `summary.txt` |
| `countUsers()` | Filters users whose names start with 'B' | `countB.txt` |
| `uppercaseUsers()` | Converts all user names to uppercase | `allCaps.txt` |

---

## How to Run

1. Make sure you have **Node.js** installed.
2. Clone the repository:

```bash
git clone https://github.com/MilosMicun/node-fs-practice.git
cd node-fs-practice
Run the project:

bash
Copy code
node index.js
This will generate/update the files in the output/ folder.

Output Preview
yaml
Copy code
output/
├── summary.txt
│   Total users: 5
│   User names: Alice, Anna, Amanda
├── countB.txt
│   Total users: 5
│   User names: Bob
└── allCaps.txt
    Total users: 5
    User names: ALICE, BOB, ANNA, CHARLIE, AMANDA
Notes
Each function can be run independently.

Demonstrates async/await, error handling, and fs/promises in Node.js.

The project is organized with data/ for input, output/ for generated files, and a single index.js for all logic.