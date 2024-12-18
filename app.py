from flask import Flask, render_template, request, redirect, url_for
from data_scraper import fetch_html_content, parse_unm_cost_data
from budget_calculator import calculate_total_cost

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        # Get user input from the form
        residency_status = request.form.get('residency_status')
        housing_preference = request.form.get('housing_preference')
        meal_plan = request.form.get('meal_plan')

        # Fetch and parse cost data
        url = "https://finaid.unm.edu/coa/coa.html"
        html_content = fetch_html_content(url)
        if html_content:
            cost_data = parse_unm_cost_data(html_content)
            if cost_data:
                # Calculate total cost
                total_cost = calculate_total_cost(residency_status, housing_preference, meal_plan, cost_data)
                return render_template('result.html', total_cost=total_cost)
            else:
                return "Failed to extract cost data.", 500
        else:
            return "Failed to fetch data from the URL.", 500

    return render_template('index.html')

@app.route('/result')
def result():
    return render_template('result.html')

if __name__ == '__main__':
    app.run(debug=True)
