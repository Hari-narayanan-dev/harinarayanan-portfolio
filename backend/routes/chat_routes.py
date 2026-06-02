from flask import Blueprint, request, jsonify
from services.groq_service import get_groq_reply

chat_bp = Blueprint("chat_bp", __name__)

@chat_bp.route("/", methods=["POST"])
def chat():
    try:
        print("Received chat request")
        data = request.get_json()
        message = data.get("message", "").strip()

        if not message:
            return jsonify({
                "success": False,
                "error": "Message cannot be empty"
            }), 400

        if len(message) > 2000:
            return jsonify({
                "success": False,
                "error": "Message too long"
            }), 400

        reply = get_groq_reply(message)

        return jsonify({
            "success": True,
            "reply": reply
        })

    except Exception as e:
        print(f"Chat error: {e}")
        return jsonify({
            "success": False,
            "error": "Failed to get a response. Please try again."
        }), 500
