# Blog personal

Blog personal desarrollado con Django 6.1, PostgreSQL y Bootstrap 5.

## Funcionalidades

- Gestión de posts desde el admin de Django
- Soporte Markdown para el contenido de los posts
- Sistema de tags
- Búsqueda de posts por título, descripción y contenido
- Subida de imágenes
- Modo oscuro

## Requisitos

- Python 3.10+
- Docker y Docker Compose (para la base de datos)

## Instalación

### 1. Clonar el repositorio

```bash
git clone <url-del-repositorio>
cd blog
```

### 2. Crear entorno virtual e instalar dependencias

```bash
python -m venv env
source env/bin/activate
pip install -r requirements.txt
```

### 3. Levantar PostgreSQL con Docker

```bash
docker compose up -d
```

Esto inicia:
- PostgreSQL en el puerto `5432`
- pgAdmin en `http://localhost:5050` (credenciales: `admin@admin.com` / `admin`)

### 4. Ejecutar el entrypoint

```bash
./entrypoint.sh
```

Eso hara:
- Ejecutara las migraciones
- Creara un superusuario
- Cargara los fixtures 

Puedes modificar el entrypoint para cambiar la configuración del superusuario


### 5. Ejecutar el servidor de desarrollo

```bash
python manage.py runserver
```

## Uso del Admin

1. Accede a `/admin/` con el superusuario creado, username:  `admin`, password: `admin`
2. Crea posts con título, descripción, contenido (Markdown), imagen y tags

## Licencia

MIT
