from flask import Flask, jsonify, render_template, request
from flask_sqlalchemy import SQLAlchemy

import random


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///quotes.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

class Quote(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.String(500), nullable=False)

    def __repr__(self):
        return f"Quote({self.id}, '{self.content}')"

@app.route('/api/quote', methods=["GET"])
def get_quote():
    quote = Quote.query.order_by(db.func.random()).first()  # Fetch a random quote
    if not quote:
        return jsonify({"error": "No quotes available"}), 404
    return jsonify({"Quote": quote.content}), 200

@app.route('/api/quote', methods=["POST"])
def add_quote():
    data = request.get_json()
    new_quote = data.get("Quote")
    if new_quote:
        quote = Quote(content=new_quote)
        db.session.add(quote)
        db.session.commit()
        return jsonify({"message": "Quote added successfully!"}), 201
    return jsonify({"error": "No quote provided"}), 400


@app.route('/api/quote/<int:id>', methods=["DELETE"])
def delete_quote(id):
    quote = Quote.query.get(id)
    if not quote:
        return jsonify({"error": "Quote not found"}), 404
    db.session.delete(quote)
    db.session.commit()
    return jsonify({"message": "Quote deleted successfully!"}), 200

@app.route('/api/quotes', methods=["GET"])
def get_all_quotes():
    quotes = Quote.query.all()
    return jsonify([{"id": quote.id, "quote": quote.content} for quote in quotes]), 200


@app.route('/')
def home():
    return render_template('index.html')

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)