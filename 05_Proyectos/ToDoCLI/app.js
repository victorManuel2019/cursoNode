// Sección para dependencias 
import { createInterface } from "readline";
import chalk from "chalk";
import { stdin } from "process";

//Array para las tareas agregadas en la ToDo List (task.push() = linea 33)
const tasks = [];

//creación del proceso de entrada y salida de datos 
const rl = createInterface({
    //parametros 
    input: process.stdin,
    output: process.stdout,
});

//mostrar menu
function displayMenu(){
    console.log(chalk.magenta("____________________________"))
    console.log(chalk.yellow.bold("  TO DO App ('nameApp')   ")),
    console.log(chalk.blueBright("\n-Opciones:")),
    console.log("1. Agregar tarea"),
    console.log("2. Lista de tareas"),
    console.log("3. Completar tarea"),
    console.log("4. Salir")
}

//Porgramación de opciones del menu 
 
//Opción 1
function addTask(){
    /* En este redline se obtiene como paramtero la task escrita por el usuario y la misma 
    tendra su acción de ser agregada al array task */
    console.log(chalk.greenBright("\n--------|Agregar tarea|--------"))
    rl.question("Escríbe la tarea: ", (task) => {
        //Cada tarea será un objeto con el elemento Complete: false, indicando que es nueva y sin completar
        tasks.push( {task, completada: false} );
        console.log(chalk.green.bold("¡Trea agregada!"));
        //despues de agrgar se regresa al menu para hacer otra acción
        displayMenu();
        choiceOption();
    });
}

//opción 2 
function listTasks() {
    console.log(chalk.greenBright("\n--------|Lista de tareas|--------"))

    if (tasks.length === 0) {
        console.log(chalk.yellow("No hay tareas por hacer :)"));
    } else{
        tasks.forEach( (task, index) =>{
            //operador ternario para indicar si su estatus está o no completado (true o false)
            let estado = task.completada ? "10" : "X";
            console.log(chalk.bgGray(`${index + 1}. ${estado} - ${task.task}`));
        }) 
    }
    displayMenu();
    choiceOption();
}

function choiceOption (){
    rl.question("Digita numero de una opción: ", (choice)=>{
        switch (choice) {
            case "1":
                console.log("Crear tarea")
                addTask(); //Opción 1 (linea 30)
                break;
            case "2":
                console.log("Listar tarea")
                listTasks(); //Opción 2 (linea 45)
                break;
            case "3":
                console.log("Completar tarea")
                breack;
            case "4":
                console.log(chalk.yellow("Salir ->"))
                rl.close();
                break;

            default:
                console.log(chalk.red("Opción invalible :(, intentalo de nuevo. \n"))
                //Realizamos recursividad al volver a llamar la función del menu y el choiceOption
                displayMenu();
                choiceOption();
                break;
        }
    })
}

displayMenu()
choiceOption();
