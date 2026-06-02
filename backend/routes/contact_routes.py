from flask import Blueprint, request, jsonify, current_app
from config import CONTACT_COLLECTION_NAME
import traceback

contact_bp = Blueprint("contact_bp", __name__)

@contact_bp.route("/", methods=["POST"])
def save_contact():
    try:
        data = request.get_json()

        contact = {
            "name": data.get("name"),
            "email": data.get("email"),
            "message": data.get("message")
        }

        db = current_app.config.get("DB")
        collection = db.get_collection(CONTACT_COLLECTION_NAME) if db is not None else None

        if db is not None:
            collection.insert_one(contact)

        return jsonify({
            "success": True,
            "message": "Message saved successfully"
        }), 201

    except Exception as e:
        traceback.print_exc()
        return jsonify({
            "success": False,
            "error": str(e)
        }), 500
