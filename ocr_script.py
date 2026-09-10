import subprocess
import sys

def run_tesseract(image_path):
    try:
        result = subprocess.run(['tesseract', image_path, 'stdout'], capture_output=True, text=True)
        print(f"--- Text in {image_path} ---")
        print(result.stdout)
    except Exception as e:
        print(f"Tesseract failed: {e}")

run_tesseract("/Users/piyushkumarsingh/Desktop/folio/ChatGPT Image Sep 7, 2026, 05_04_30 PM.png")
