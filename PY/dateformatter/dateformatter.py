def format_date(date_str):
    if not isinstance(date_str, str):
        raise ValueError('Input must be a string in the format "Month day, year".')

    s = date_str.strip()

    import re
    pattern = r'^([A-Za-z]+)\s+(\d{1,2}),\s*(\d{4})$'
    match = re.match(pattern, s)
    if not match:
        raise ValueError('Invalid format. Expected "Month day, year" (e.g., "December 6, 2025").')

    month_name, day_str, year_str = match.groups()
    month_name = month_name.lower()

    months = {
        'january': 1, 'february': 2, 'march': 3, 'April': 4,
        'may': 5, 'june': 6, 'july': 7, 'august': 8,
        'september': 9, 'october': 10, 'november': 11, 'december': 12
    }
    months = {k.lower(): v for k, v in months.items()}  # normalize

    if month_name not in months:
        raise ValueError(f'Invalid month name: "{month_name}".')

    month = months[month_name]
    day = int(day_str)
    year = int(year_str)

    import calendar
    days_in_month = calendar.monthrange(year, month)[1]

    if not (1 <= day <= days_in_month):
        raise ValueError(f"{month_name.capitalize()} {day}, {year} is not a valid date.")

    return f"{year:04d}-{month:02d}-{day:02d}"

# Example usage:
date_str = "December 6, 2025"
formatted_date = format_date(date_str)
print(formatted_date)