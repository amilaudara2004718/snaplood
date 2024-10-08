# app.py
from flask import Flask, render_template, request, redirect, url_for, flash, jsonify
import yt_dlp
import json

app = Flask(__name__)
app.secret_key = '000718'


@app.route('/')
def index():
    return render_template('home.html')

@app.route('/get_thumbnail', methods=['POST'])
def get_thumbnail():
    video_url = request.form.get('video_url')
    
    if not video_url:
        flash('Please enter a video URL!', 'error')
        return redirect(url_for('index'))

    ydl_opts = {
        'cookiefile': './www.youtube.com.txt',  # Path to the cookie file
        'extract_flat': True,  # Only extract metadata
        'skip_download': True,  # Don't download video, just get info
        }
    with yt_dlp.YoutubeDL(ydl_opts) as ydl:
        info = ydl.extract_info(video_url, download=False)


    if not json.dumps(ydl.sanitize_info(info)):
            flash(f'Error: {str(e)}', 'error')
            return redirect(url_for('index'))
        
    try:
        video_data = json.loads(json.dumps(ydl.sanitize_info(info)))
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

