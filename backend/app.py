from flask import Flask, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
from pymongo import MongoClient
import os
from pathlib import Path
from routes.chat_routes import chat_bp
from routes.contact_routes import contact_bp
from config import MONGO_URI, CONTACT_DATABASE_NAME


app = Flask(__name__)

CORS(app, supports_credentials=True)

try:
    client = MongoClient(MONGO_URI)
    db = client.get_database(CONTACT_DATABASE_NAME)
    app.config["DB"] = db
    print("MongoDB Connected")
except Exception as e:
    print(f"MongoDB Connection Error: {e}")

@app.route("/")
def home():
    return "API Running"

@app.route("/api/health")
def health():
    return jsonify({"status": "ok"})

app.register_blueprint(contact_bp, url_prefix="/api/contact")
app.register_blueprint(chat_bp, url_prefix="/api/chat")

if __name__ == "__main__":
    PORT = int(os.getenv("PORT", 5000))
    app.run(host="0.0.0.0", port=PORT, debug=True)
