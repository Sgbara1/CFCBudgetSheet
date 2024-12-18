# CFCBudgetSheet

## Overview
CFCBudgetSheet is a tool designed to help students estimate their cost of attendance at the University of New Mexico. It scrapes data from the university's financial pages and calculates costs based on user inputs such as residency status, housing preference, and meal plan.

## Prerequisites
- Python 3.x
- pip (Python package installer)

## Installation

1. **Clone the Repository**
   Clone the repository to your local machine using the following command:
   ```bash
   git clone https://github.com/Sgbara1/CFCBudgetSheet.git
   cd CFCBudgetSheet
   ```

2. **Install Dependencies**
   Use pip to install the required Python packages listed in `requirements.txt`:
   ```bash
   pip install -r requirements.txt
   ```

## Running the Tool

### Running the Scraper
The scraper fetches and parses cost data from the University of New Mexico's website. Run the scraper using:
```bash
python data_scraper.py
```

### Running the Budget Calculator
The budget calculator uses the scraped data to estimate the total cost of attendance. Start the Flask application with:
```bash
python app.py
```

Once the server is running, open your web browser and navigate to `http://127.0.0.1:5000/` to access the tool.

## Usage Example

1. **Input:**
   - Residency Status: 'in-state'
   - Housing Preference: 'on-campus'
   - Meal Plan: 'standard'

2. **Expected Output:**
   - Total Estimated Cost of Attendance: $XX,XXX

## Troubleshooting
- If the scraper fails, ensure that the HTML structure of the UNM pages matches the assumptions in `data_scraper.py`. Adjust the parsing logic if necessary.
- The application runs in debug mode by default for easier troubleshooting. If you encounter issues, check the console output for error messages.