//Array de productos - simulacion de base de datos: Manejo una Asyncronia.

const producto = [
    {
        id:'01',
        nombre:'CAMA MOISES ARTESANAL',
        descripcion:'CAMA MOISES ARTESANAL - PARA PERROS & GATOS - VARIOS TAMAÑOS',
        stock:'50',
        categoria:'ofertas',
        img:'https://i.postimg.cc/wTQC7cfV/Card-Home1.jpg',
        precio:120000,
        pagoTransferencia: true,
        pargoCuotas:true,
        envioGratis:true,
        descuento:true,
        porcentajeDescuento:'10',
        color:'Gris Claro',
        tamaño:'S',
    },

        {
        id:'02',
        nombre:'CAMA PUFF',
        descripcion:'CAMA PUFF - PELO DE MONO - ANTIESTRES',
        stock:'10',
        categoria:'ofertas',
        img:'https://i.postimg.cc/GH97fY1T/Card-Home2.jpg',
        precio:9450,
        pagoTransferencia: true,
        pargoCuotas:'Si',
        envioGratis:'Si',
        descuento:'Si',
        porcentajeDescuento:'15',
        color:'Azul Nevado',
        tamaño:'60cm',
    },

        {
        id:'03',
        nombre:'COMEDERO',
        descripcion:'COMEDERO NET SIMPLE - PERROS MEDIANOS',
        stock:'25',
        categoria:'ofertas',
        img:'https://i.postimg.cc/ykWQG9zD/Card-Home3.jpg',
        precio:85000,
        pagoTransferencia:'Si',
        pargoCuotas:'Si',
        envioGratis:'Si',
        descuento:'Si',
        porcentajeDescuento:'10',
        color:'Negro',
        tamaño:'20cm',
    },

    {
        id:'04',
        nombre:'CUBRE SILLON',
        descripcion:'CUBRE SILLON - PELO DE MONO Y TUSSOR REVERSIBLE',
        stock:'5',
        categoria:'ofertas',
        img:'https://i.postimg.cc/XpXHPF0Z/Card-Home4.jpg',
        precio:110000,
        pagoTransferencia: 'Si',
        pargoCuotas:'Si',
        envioGratis:'Si',
        descuento:'Si',
        porcentajeDescuento:'5',
        color:'Gris',
        tamaño:'80cm',
    },


]

// Simular la promesa - funciona que devuelve una promesa
let error = false; // en true genero el error que daria una API al no poder, por ej. trear los productos.
export const getProducts = () => {
    return new Promise ((resolve, reject) => {
        setTimeout (()=>{
            if (error) {
                //rechazar la promesa
                reject ('Se produjo un error al traer los productos');
            }else {
                // Se devuelve el array de productos
                resolve (producto);
            }
        }, 2000);
    })
}

//Para obtener un producto
export const getOneProduct = (id) => {
    return new Promise ((resolve, reject) => {
        setTimeout (()=>{
            if (error) {
                //rechazar la promesa
                reject ('Se produjo un error al traer los productos');
            }else {
                let product = producto.find ((prod) => prod.id === id)
                resolve (product)
            }
        }, 2000);
    })
}