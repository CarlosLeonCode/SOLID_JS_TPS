/* 
    Interface segregation 
    
    Define que ninguna clase debería depender de métodos que no usa.

    Ejemplo: Sin aplicar.
*/

interface Animales{
    caminar()
    nadar()
    volar()
    arrastrarse()
}

class Gato implements Animales{
    caminar(){}
    nadar(){}
    volar(){}
    arrastrarse(){}
}

/* Ejemplo: Aplicando segregación de interfaces */

interface Terrestre{
    caminar()
}

interface Acuatico{
    nadar()
}

class Tiburon implements Acuatico{
    nadar(){
        // code 
    }
}

class Perro implements Terrestre{
    caminar(){
        // code
    }
}