import requests
from bs4 import BeautifulSoup

def scrape_books_from_toscrape():
    url = "https://books.toscrape.com/catalogue/page-1.html"
    response = requests.get(url)
    response.raise_for_status()

    soup = BeautifulSoup(response.text, 'html.parser')
    books = []

    for article in soup.select('article.product_pod'):
        title = article.h3.a['title']
        price = article.select_one('.price_color').text.strip()
        books.append({'title': title, 'price': price})

    return books