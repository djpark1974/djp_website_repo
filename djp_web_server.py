#!/usr/bin/env python

import sys
from flask import Flask, render_template
from flask_frozen import Freezer
from flask import request, redirect

"""

To run the web server managed by Flask:
python djp_web_server.py

To build a static web app that doesn't need Flask:
python djp_web_server.py build

"""


app = Flask(__name__)
freezer = Freezer(app)

def get_file_lines(filepath):
    line_items = []
    file_handle = open(filepath, "r") 
    for line in file_handle:
        line_items.append(line)
    file_handle.close()
    return line_items

@app.route('/')
def djp_site():
    articles = get_file_lines("static/text/articles.txt")
    chapters = get_file_lines("static/text/chapters.txt")
    books = get_file_lines("static/text/books.txt")
    patents = get_file_lines("static/text/patents.txt")
    conferences = get_file_lines("static/text/conferences.txt")
    phd_students = get_file_lines("static/text/phd_students.txt")
    masters_students = get_file_lines("static/text/masters_students.txt")
    honours_students = get_file_lines("static/text/honours_students.txt")
    return render_template('index.html', articles=articles, chapters=chapters, books=books, patents=patents, conferences=conferences, phd_students=phd_students, masters_students=masters_students, honours_students=honours_students)


if __name__ == '__main__':
    if len(sys.argv) > 1 and sys.argv[1] == "build":
        freezer.freeze()
    else:
        app.run()
