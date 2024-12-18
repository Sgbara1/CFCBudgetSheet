# CFCBudgetSheet

## Overview
CFCBudgetSheet is a tool designed to help students estimate their cost of attendance at the University of New Mexico. It scrapes data from the university's financial pages and calculates costs based on user inputs such as residency status, housing preference, and meal plan.

## Prerequisites
- Python 3.x
- pip (Python package installer)

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Sgbara1/CFCBudgetSheet.git
   cd CFCBudgetSheet
   ```

2. **Install Dependencies**
   Install the required Python packages using pip:
   ```bash
   pip install -r requirements.txt
   ```

## Running the Tool

### Running the Scraper
The scraper fetches and parses cost data from the University of New Mexico's website.

```bash
python data_scraper.py
```

### Running the Budget Calculator
The budget calculator uses the scraped data to estimate the total cost of attendance.

```bash
python app.py
```

Visit `http://127.0.0.1:5000/` in your web browser to access the tool.

## Usage Example

1. **Input:**
   - Residency Status: 'in-state'
   - Housing Preference: 'on-campus'
   - Meal Plan: 'standard'

2. **Expected Output:**
   - Total Estimated Cost of Attendance: $XX,XXX

## Additional Notes
- Ensure that the HTML structure of the UNM pages matches the assumptions in `data_scraper.py`. Adjust the parsing logic if necessary.
- The application runs in debug mode by default for easier troubleshooting.