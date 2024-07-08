import json
from bs4 import BeautifulSoup

# Read the content of prompt.txt file
with open('src/backend/video1_1.html', 'r', encoding='utf-8') as file:
    content = file.read()

# Parse the content with BeautifulSoup
soup = BeautifulSoup(content, 'html.parser')

# Find all div elements with the specified class
divs = soup.find_all('div', class_='a-section a-spacing-base a-text-center')

# List to store the extracted data
data_list = []

for index, div in enumerate(divs[:10]):
    data = {}
    
    # Extract image link
    img = div.find('img', class_='s-image')
    data['link'] = img['src'] if img else ''
    
    # Extract title
    span_title = div.find('span', class_='a-size-base-plus a-color-base a-text-normal')
    data['title'] = span_title.text if span_title else ''
    
    # Extract rating
    span_rating = div.find('span', class_='a-icon-alt')
    data['rating'] = span_rating.text if span_rating else ''
    
    
    span_price = div.find('span', class_='a-price')
    if span_price:
        price_text = span_price.get_text(strip=True)
        # Remove digits after the second '$'
        parts = price_text.split('$')
        if len(parts) > 2:
            data['price'] = '$' + parts[1]  # Keep only the part before the second '$'
        else:
            data['price'] = price_text  # Keep original if no second '$' found
    else:
        data['price'] = ''
    
    data_list.append(data)

# Write the data to data.json file
with open('src/backend/data1_1.jsx', 'w', encoding='utf-8') as json_file:
    json.dump(data_list, json_file, ensure_ascii=False, indent=4)