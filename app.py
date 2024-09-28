# app.py
from flask import Flask, render_template, request, redirect, url_for, flash, jsonify
import os
import json

app = Flask(__name__)
app.secret_key = 'your_secret_key'  # Set a secret key for session management

@app.route('/')
def index():
    return render_template('home.html')

@app.route('/get_thumbnail', methods=['POST'])
def get_thumbnail():
    video_url = request.form.get('video_url')
    
    if not video_url:
        flash('Please enter a video URL!', 'error')
        return redirect(url_for('index'))

    command = f'yt-dlp {video_url} -j' 
    output = os.popen(command).read()

    if not output:
            flash(f'Error: {str(e)}', 'error')
            return redirect(url_for('index'))
        
    try:
        video_data = json.loads(output)
        title = video_data.get('title')
        thumbnail = video_data.get('thumbnail')


        return jsonify({
            'thumbnail_url': thumbnail,
            'video_title': title
         })
    except  json.JSONDecodeError as e:
        flash(f'Error: {str(e)}', 'error')
        return redirect(url_for('index'))
    



if __name__ == '__main__':
    app.run(debug=True)

