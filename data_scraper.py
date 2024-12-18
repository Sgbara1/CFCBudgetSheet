import requests
from bs4 import BeautifulSoup

def fetch_html_content(url):
    """
    Fetches the HTML content of a given URL.
    
    Parameters:
    url (str): The URL of the webpage to fetch.
    
    Returns:
    str: The HTML content of the page.
    """
    try:
        response = requests.get(url)
        response.raise_for_status()  # Raise an HTTPError for bad responses
        return response.text
    except requests.exceptions.RequestException as e:
        print(f"Error fetching data from {url}: {e}")
        return None

def parse_unm_cost_data(html_content):
    """
    Parses the HTML content to extract cost data from the University of New Mexico's cost of attendance page.
    
    Parameters:
    html_content (str): The HTML content of the UNM cost of attendance page.
    
    Returns:
    dict: A dictionary containing the extracted cost data.
    """
    try:
        soup = BeautifulSoup(html_content, 'html.parser')
        cost_data = {}

        # Example extraction logic (this will need to be adapted to the actual HTML structure)
        tuition_fee = soup.find('div', class_='tuition-fee').text.strip()
        room_and_board = soup.find('div', class_='room-board').text.strip()
        books_and_supplies = soup.find('div', class_='books-supplies').text.strip()
        other_expenses = soup.find('div', class_='other-expenses').text.strip()

        cost_data['tuition_fee'] = tuition_fee
        cost_data['room_and_board'] = room_and_board
        cost_data['books_and_supplies'] = books_and_supplies
        cost_data['other_expenses'] = other_expenses

        return cost_data
    except Exception as e:
        print(f"Error parsing HTML content: {e}")
        return None

def main():
    urls = [
        "https://finaid.unm.edu/coa/coa.html",
        "https://admissions.unm.edu/costs-financial-aid/"
    ]

    for url in urls:
        html_content = fetch_html_content(url)
        if html_content:
            cost_data = parse_unm_cost_data(html_content)
            if cost_data:
                print(f"Cost data from {url}:")
                for key, value in cost_data.items():
                    print(f"{key}: {value}")
            else:
                print(f"Failed to extract cost data from {url}")

if __name__ == "__main__":
    main()
