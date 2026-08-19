#!/bin/bash
set -e

export DJANGO_SUPERUSER_USERNAME=admin
export DJANGO_SUPERUSER_EMAIL=admin@admin.com
export DJANGO_SUPERUSER_PASSWORD=admin


python manage.py migrate --noinput
python manage.py createsuperuser --noinput || true
python manage.py loaddata blog/fixtures/data.json

exec "$@"
