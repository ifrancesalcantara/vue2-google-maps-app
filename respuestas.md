# Ejercicio 1

## Qué problemas detectas en la operación y razona la respuesta

1) El constructor admite un array de servicios, pero según el nombre es un usuario, por lo que este constructor debería recibir un objeto con los campos email, password, registration y adult. Como se trata de una función referente a un listado de servicios y no es intrínsecamente relativa a un RegisteredUser ni a un Service, debería encontrarse en una archivo de funciones. Yo la ubicaría en lib/Services.js siendo este un archivo de funciones relativas a entidades Service, ya que es posible que en algún lugar de la aplicación queramos mostrar el precio total de varios servicios sin que se relacione necesariamente con un usuario.

2) El forEach debe incluir service e index entre paréntesis, pues el segundo argumento del método el el bind a this para el scope del iterador.

3) Siendo service un objeto, typeof devolverá la string 'object' para los tres casos contemplados. Debería comprobarse el tipo mediante una propiedad en la entidad StreamingService y DownloadService, por convención en macro case. Entendiendo que PremiumContent sería una extensión de la clase MultimediaContent, la comprobación se haría a partir de la propiedad additionalPrice.


### Propuesta de código

- En config/index.js
```
const serviceTypeData = {
    streamingService: {
        key: 'STREAMING_SERVICE'
    },
    downloadingService: {
        key: 'DOWNLOAD_SERVICE'
    }
}
```

- En /lib/Service.js

```
function getTotalByServices (services) {
    return services.reduce((acc, service) => {
        const multimediaContent = service.getMultimediaContent()
        
        let price = 0

        if (service.type === serviceTypes.streamingService.key) price += service.streamingPrice
        else if (service.type === serviceTypes.downloadingService.key) price += service.downloadPrice

        price += (multimediaContent.additionalPrice || 0)

        return acc + price
    }, 0)
}
```