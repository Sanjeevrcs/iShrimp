FROM python:3.11

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY requirements.txt /usr/src/app/

RUN rm db.sqlite3

RUN pip install --default-timeout=100 --no-cache-dir -r requirements.txt
COPY . /usr/src/app/
