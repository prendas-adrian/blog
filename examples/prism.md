# Prism test

Este README sirve para probar que Prism resalta cada lenguaje instalado.

## HTML

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <title>Hola</title>
  </head>
  <body>
    <button class="btn">Enviar</button>
  </body>
</html>
```

## CSS

```css
body {
  margin: 0;
  background: #111827;
  color: #f9fafb;
}

.button {
  padding: 0.75rem 1rem;
  border-radius: 8px;
}
```

## JavaScript

```javascript
const sumar = (a, b) => a + b;

console.log(sumar(2, 3));

for (let i = 0; i < 3; i++) {
  console.log(i);
}
```

## TypeScript

```typescript
type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 1,
  name: 'Ana'
};

console.log(user.name.toUpperCase());
```

## Python

```python
def fibonacci(n):
    a, b = 0, 1
    for _ in range(n):
        a, b = b, a + b
    return a

print(fibonacci(10))
```

## Bash

```bash
#!/bin/bash
name="Ana"
echo "Hola $name"
ls -la
```

## JSON

```json
{
  "name": "blog",
  "version": "1.0.0",
  "scripts": {
    "dev": "python manage.py runserver"
  }
}
```

## SQL

```sql
SELECT id, title, created_at
FROM posts
WHERE published = 1
ORDER BY created_at DESC
LIMIT 10;
```

## Java

```java
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, Java!");
    }
}
```

## C

```c
#include <stdio.h>

int main(void) {
    printf("Hola desde C\\n");
    return 0;
}
```

## C++

```cpp
#include <iostream>
using namespace std;

int main() {
    cout << "Hola desde C++" << endl;
    return 0;
}
```

## C#

```csharp
using System;

class Program {
    static void Main() {
        Console.WriteLine("Hola desde C#");
    }
}
```

## PHP

```php
<?php
$mensaje = "Hola desde PHP";
echo $mensaje;
```

## Ruby

```ruby
def saludo(nombre)
  "Hola, #{nombre}!"
end

puts saludo("Ruby")
```

## Go

```go
package main

import "fmt"

func main() {
    fmt.Println("Hola desde Go")
}
```

## Rust

```rust
fn main() {
    println!("Hola desde Rust");
}
```

## Swift

```swift
let mensaje = "Hola desde Swift"
print(mensaje)
```

## YAML

```yaml
name: blog
version: 1.0.0
scripts:
  dev: python manage.py runserver
```

## Markdown

```markdown
# Titulo

- item 1
- item 2

```javascript
console.log('hola');
```
```
