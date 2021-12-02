from flask import Flask, render_template, request
from tensorflow import keras
from PIL import Image
import io
import cv2
import numpy as np
import json

app = Flask(__name__)
model = keras.models.load_model('./model1')

def class_to_tumor(num):
    
    num = np.argmax(num[0], axis=0)
    LABELS = ['glioma tumor', 'meningioma tumor', 'no tumor', 'pituitary tumor']

    return LABELS[num]

def transform_img(req):
    img = Image.open(io.BytesIO(request.data)).convert("RGB")
    img = img.resize((150,150))

    img = np.array(img)

    return np.expand_dims(img, axis=0)

@app.route('/')
def hello_world():
    return 'hello'

@app.route("/data", methods=['GET'])
def data():
    my_dict = { 'data': 1 + 1}
    return my_dict

@app.route('/members')
def members():
    return {"members": ["Member1", "Member2", "Member3"]}

@app.route('/LandingPage')
def landing():
    return "Landing page to backend?"

@app.route("/ModelDescription")
def model_description():
    return "Model descr. to backed?"

@app.route('/Game', methods=["POST"])
def game():
    img = transform_img(request.data)
    pred = class_to_tumor(model.predict(img))
    return json.dumps(pred)
    
    
if __name__ == '__name__':
    app.run(debug=True)
