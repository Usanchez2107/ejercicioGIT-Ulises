/* Ejercicio5 */

classGrupo {

    profesor;

    promedio;

    estudiantes=[];



    constructor(profesor,estudiantes) {

        this.profesor= profesor;



        for(let i = 0; i < estudiantes.length;i++){

            this.estudiantes.push(estudiantes[i]);

        }

    }



    calcularPromedio(){

        lettemp = 0;

        for(let i = 0; i < this.estudiantes.length;i++){

            temp= temp + this.estudiantes[i].calificacion;

        }

        this.promedio= temp / this.estudiantes.length;



        returnthis.promedio;

    }



    obtDetalles(){

        this.profesor.obtDetalles();

        for(let i = 0; i < this.estudiantes.length;i++){

            this.estudiantes[i].obtDetalles();

        }

    }

}