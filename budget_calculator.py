def calculate_tuition(residency_status, cost_data):
    """
    Calculate tuition based on residency status.

    Parameters:
    residency_status (str): The residency status of the student ('in-state' or 'out-of-state').
    cost_data (dict): A dictionary containing the cost data.

    Returns:
    float: The calculated tuition cost.
    """
    if residency_status == 'in-state':
        return float(cost_data.get('tuition_fee_in_state', 0))
    elif residency_status == 'out-of-state':
        return float(cost_data.get('tuition_fee_out_of_state', 0))
    else:
        raise ValueError("Invalid residency status. Choose 'in-state' or 'out-of-state'.")

def calculate_housing_cost(housing_preference, cost_data):
    """
    Calculate housing cost based on housing preference.

    Parameters:
    housing_preference (str): The housing preference of the student ('on-campus' or 'off-campus').
    cost_data (dict): A dictionary containing the cost data.

    Returns:
    float: The calculated housing cost.
    """
    if housing_preference == 'on-campus':
        return float(cost_data.get('room_and_board_on_campus', 0))
    elif housing_preference == 'off-campus':
        return float(cost_data.get('room_and_board_off_campus', 0))
    else:
        raise ValueError("Invalid housing preference. Choose 'on-campus' or 'off-campus'.")

def calculate_meal_plan_cost(meal_plan, cost_data):
    """
    Calculate meal plan cost.

    Parameters:
    meal_plan (str): The meal plan chosen by the student ('standard', 'premium', etc.).
    cost_data (dict): A dictionary containing the cost data.

    Returns:
    float: The calculated meal plan cost.
    """
    return float(cost_data.get(f'meal_plan_{meal_plan}', 0))

def calculate_total_cost(residency_status, housing_preference, meal_plan, cost_data):
    """
    Calculate the total estimated cost of attendance.

    Parameters:
    residency_status (str): The residency status of the student ('in-state' or 'out-of-state').
    housing_preference (str): The housing preference of the student ('on-campus' or 'off-campus').
    meal_plan (str): The meal plan chosen by the student ('standard', 'premium', etc.).
    cost_data (dict): A dictionary containing the cost data.

    Returns:
    float: The total estimated cost of attendance.
    """
    tuition = calculate_tuition(residency_status, cost_data)
    housing = calculate_housing_cost(housing_preference, cost_data)
    meal_plan_cost = calculate_meal_plan_cost(meal_plan, cost_data)
    books_and_supplies = float(cost_data.get('books_and_supplies', 0))
    other_expenses = float(cost_data.get('other_expenses', 0))

    total_cost = tuition + housing + meal_plan_cost + books_and_supplies + other_expenses
    return total_cost

# Example usage:
# cost_data = {
#     'tuition_fee_in_state': '5000',
#     'tuition_fee_out_of_state': '15000',
#     'room_and_board_on_campus': '8000',
#     'room_and_board_off_campus': '6000',
#     'meal_plan_standard': '3000',
#     'meal_plan_premium': '4000',
#     'books_and_supplies': '1000',
#     'other_expenses': '2000'
# }
# total_cost = calculate_total_cost('in-state', 'on-campus', 'standard', cost_data)
# print(f"Total Estimated Cost of Attendance: ${total_cost}")