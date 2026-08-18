#!/bin/sh
set -e

python manage.py migrate --noinput
python manage.py createsuperuser --noinput || true
python manage.py loaddata blog/fixtures/data.json

exec "$@"
