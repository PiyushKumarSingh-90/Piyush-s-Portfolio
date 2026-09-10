import google.generativeai as genai
import os

genai.configure(api_key=os.environ.get("GEMINI_API_KEY"))
model = genai.GenerativeModel('gemini-1.5-pro-latest')

img_path = "/Users/piyushkumarsingh/Desktop/folio/ChatGPT Image Sep 7, 2026, 05_04_30 PM.png"
sample_file = genai.upload_file(path=img_path)

response = model.generate_content([sample_file, "Describe the layout, visual style, typography, and UI elements of this homepage design in extreme detail. Where are the texts located? What are the fonts like? What colors are used? Are there buttons or borders?"])
print(response.text)
