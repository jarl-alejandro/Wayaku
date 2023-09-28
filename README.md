http://localhost:9090/realms/wayaku/.well-known/openid-configuration
docker run -p 9090:8080 -e KEYCLOAK_ADMIN=admin -e KEYCLOAK_ADMIN_PASSWORD=admin quay.io/keycloak/keycloak:22.0.3 start-dev

# Aplicación wayaku "Tu asistente financiero”

## Diseño de sistema

### Visión general del sistema
> Propósito: La aplicación tiene como objetivo permitir a los usuarios registrar y hacer un seguimiento de sus gastos personales para tener un mejor control de sus finanzas.

### Características principales:
> **Crear presupuesto**:
> El usuario podra crear un presupuesto o multiples presupuesto, editar y eliminar presupuestos

>**Registro de ingresos y egreso**
> El usuario podra registrar sus ingresos(CRUD) y estos ingresos se agruparan por mes sera el indicador del monto que podemos gastar por mes

> El usuario podra registrar sus egresos(CRUD) esos deberan estar relacionados al presupuesto y este debera hacer una condicion para comprobar si se puede hacer el gasto caso contrario

> se le mostrara una alerta

> Los usuarios podran registrarse e inicar sesion para realizar el proceso

> Estadisiticas y reportes de ingresos y egresos

# Arquitectura del sistema
> Capas del sistema:
>  -	Capa de presentación: Se encarga de la interfaz de usuario y la interacción con el usuario.
>  -	Capa de aplicación: Contiene la lógica de negocio y coordina las operaciones del sistema.
>  -	Capa de dominio: Define el modelo de dominio y contiene las reglas de negocio.
>  -	Capa de infraestructura: Implementa la comunicación con servicios externos.
        
