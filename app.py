from flask import Flask, jsonify, render_template, request
import random
app = Flask(__name__)


quotes = [
    "Code is like humor. When you have to explain it, it’s bad.",
    "First, solve the problem. Then, write the code.",
    "Experience is the name everyone gives to their mistakes.",
    "In order to be irreplaceable, one must always be different.",
    "Java is to JavaScript what car is to Carpet."
]

@app.route('/api/quote', methods=["GET", "POST"])
def get_quote():
    if request.method == "POST":
        data = request.get_json()
        new_quote = data.get("Quote")
        print("Received data:", data)
        if new_quote:
            quotes.append(new_quote)
            return jsonify({"message": "Quote added successfully!"}), 201
        return jsonify({"error": "No quote provided"}), 400

    if request.method == "GET":
        if not quotes:
            return jsonify({"error": "No quotes available"}), 404
        return jsonify({"Quote": random.choice(quotes)}), 200


@app.route('/')
def home():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)