from flask import Flask, render_template, jsonify
import mysql.connector
import requests

app = Flask(__name__)




# MySQL connection
def connect_db():
    return mysql.connector.connect(
        host="localhost",
        user="root",  # your MySQL username
        password="password",  # your MySQL password
        database="budgetblast"
    )

# Mock API for Nykaa and Tira
def fetch_data_from_mock_api():
    nykaa_data = [
        {"name": "Nykaa Product 1", "price": 500.0},
        {"name": "Nykaa Product 2", "price": 700.0},
    ]
    tira_data = [
        {"name": "Tira Product 1", "price": 450.0},
        {"name": "Tira Product 2", "price": 650.0},
    ]
    return nykaa_data, tira_data

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/search', methods=['GET', 'POST'])
def search():
    if request.method == 'POST':
        query = request.form.get('query')  # Get the search input
        # Implement your search logic here
        # For demonstration, we'll just print the query
        print(f"Search query: {query}")
        # Redirect or render the search results page
        return render_template('search_results.html', query=query)
    return redirect(url_for('home'))

# Route for the wishlist functionality
@app.route('/wishlist')
def wishlist():
    # Implement your wishlist logic here
    # For demonstration, we'll render a sample wishlist page
    return render_template('wishlist.html')

#@app.route('/search.html')
#def search():
    #return render_template('search.html')

#@app.route('/wishlist.html')
#def wishlist():
    #return render_template('wishlist.html')




@app.route('/api/products')
def get_products():
    nykaa_data, tira_data = fetch_data_from_mock_api()
    return jsonify({"nykaa": nykaa_data, "tira": tira_data})

if __name__ == '__main__':
    app.run(debug=True)
