from groq import Groq
from config import GROQ_API_KEY, GROQ_MODEL, SYSTEM_PROMPT, TEMPERATURE, MAX_TOKENS

client = Groq(api_key= GROQ_API_KEY)

def get_groq_reply(message):
    if not GROQ_API_KEY:
        raise Exception("GROQ_API_KEY is not configured")

    response = client.chat.completions.create(
        model = GROQ_MODEL,
        messages=[
            {"role": "system", "content": SYSTEM_PROMPT},
            {"role": "user", "content": message}
        ],
        max_tokens= MAX_TOKENS,
        temperature=TEMPERATURE
    )

    return response.choices[0].message.content.strip()
