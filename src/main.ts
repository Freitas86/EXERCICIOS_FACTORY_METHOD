/*--------------------------------- EXERCICIO 01 ---------------------------------*/

// Interface para os brinquedos
interface Toy {
    play(): void;
}

// Implementações concretas dos brinquedos
class PlasticCar implements Toy {
    play(): void {
        console.log("Brincando com um carrinho de plástico!");
    }
}

class WoodenCar implements Toy {
    play(): void {
        console.log("Brincando com um carrinho de madeira!");
    }
}

class PlasticDoll implements Toy {
    play(): void {
        console.log("Brincando com uma boneca de plástico!");
    }
}

class WoodenDoll implements Toy {
    play(): void {
        console.log("Brincando com uma boneca de madeira!");
    }
}

// Abstract Factory para a criação dos brinquedos
interface ToyFactory {
    createCar(): Toy;
    createDoll(): Toy;
}

// Implementação das fábricas concretas
class PlasticToyFactory implements ToyFactory {
    createCar(): Toy {
        return new PlasticCar();
    }
    createDoll(): Toy {
        return new PlasticDoll();
    }
}

class WoodenToyFactory implements ToyFactory {
    createCar(): Toy {
        return new WoodenCar();
    }
    createDoll(): Toy {
        return new WoodenDoll();
    }
}

// Código cliente
function testToyFactory(factory: ToyFactory) {
    const car = factory.createCar();
    const doll = factory.createDoll();
    
    car.play();
    doll.play();
}

console.log("Testando a fábrica de plástico:");
testToyFactory(new PlasticToyFactory());

console.log("\nTestando a fábrica de madeira:");
testToyFactory(new WoodenToyFactory());

 

/*--------------------------------- EXERCICIO 02 ---------------------------------*/

/*

// Interface para as criaturas mágicas
interface MagicalCreature {
    attack(): void;
}

// Implementações concretas das criaturas do Reino do Fogo
class Dragon implements MagicalCreature {
    attack(): void {
        console.log("O Dragão cospe uma rajada de fogo!");
    }
}

class Salamander implements MagicalCreature {
    attack(): void {
        console.log("A Salamandra lança chamas ardentes!");
    }
}

// Implementações concretas das criaturas do Reino da Água
class SeaSerpent implements MagicalCreature {
    attack(): void {
        console.log("A Serpente Marinha cria uma enorme onda!");
    }
}

class Triton implements MagicalCreature {
    attack(): void {
        console.log("O Tritão invoca uma tempestade aquática!");
    }
}

// Abstract Factory para a criação das criaturas mágicas
interface MagicalCreatureFactory {
    createBigCreature(): MagicalCreature;
    createSmallCreature(): MagicalCreature;
}

// Implementação das fábricas concretas
class FireRealmFactory implements MagicalCreatureFactory {
    createBigCreature(): MagicalCreature {
        return new Dragon();
    }
    createSmallCreature(): MagicalCreature {
        return new Salamander();
    }
}

class WaterRealmFactory implements MagicalCreatureFactory {
    createBigCreature(): MagicalCreature {
        return new SeaSerpent();
    }
    createSmallCreature(): MagicalCreature {
        return new Triton();
    }
}

// Código cliente
function testMagicalCreatureFactory(factory: MagicalCreatureFactory) {
    const bigCreature = factory.createBigCreature();
    const smallCreature = factory.createSmallCreature();
    
    bigCreature.attack();
    smallCreature.attack();
}

console.log("Testando o Reino do Fogo:");
testMagicalCreatureFactory(new FireRealmFactory());

console.log("\nTestando o Reino da Água:");
testMagicalCreatureFactory(new WaterRealmFactory());

*/

/*--------------------------------- EXERCICIO 03 ---------------------------------*/

/*

// Interface para o modo de propulsão
interface Propulsion {
    type(): string;
}

// Implementações concretas de propulsão
class JetEngine implements Propulsion {
    type(): string {
        return "Motor a Jato";
    }
}

class PlasmaEngine implements Propulsion {
    type(): string {
        return "Motor a Plasma";
    }
}

// Interface para o sistema de controle
interface ControlSystem {
    mode(): string;
}

// Implementações concretas de sistemas de controle
class AIControl implements ControlSystem {
    mode(): string {
        return "Controle por Inteligência Artificial";
    }
}

class ManualControl implements ControlSystem {
    mode(): string {
        return "Controle Manual";
    }
}

// Interface para os veículos futuristas
interface FuturisticVehicle {
    propulsion: Propulsion;
    controlSystem: ControlSystem;
    describe(): void;
}

// Implementações concretas dos veículos para Terra
class FlyingCar implements FuturisticVehicle {
    constructor(public propulsion: Propulsion, public controlSystem: ControlSystem) {}
    describe(): void {
        console.log(`Carro Voador com ${this.propulsion.type()} e ${this.controlSystem.mode()}`);
    }
}

class AutonomousMotorcycle implements FuturisticVehicle {
    constructor(public propulsion: Propulsion, public controlSystem: ControlSystem) {}
    describe(): void {
        console.log(`Moto Autônoma com ${this.propulsion.type()} e ${this.controlSystem.mode()}`);
    }
}

// Implementações concretas dos veículos para Espaço
class Spaceship implements FuturisticVehicle {
    constructor(public propulsion: Propulsion, public controlSystem: ControlSystem) {}
    describe(): void {
        console.log(`Nave Espacial com ${this.propulsion.type()} e ${this.controlSystem.mode()}`);
    }
}

class RoboticExplorer implements FuturisticVehicle {
    constructor(public propulsion: Propulsion, public controlSystem: ControlSystem) {}
    describe(): void {
        console.log(`Explorador Robótico com ${this.propulsion.type()} e ${this.controlSystem.mode()}`);
    }
}

// Abstract Factory para criar veículos futuristas
interface FuturisticVehicleFactory {
    createVehicle(type: string): FuturisticVehicle;
}

// Implementação da fábrica de veículos para Terra
class LandVehicleFactory implements FuturisticVehicleFactory {
    createVehicle(type: string): FuturisticVehicle {
        if (type === "Carro Voador") {
            return new FlyingCar(new JetEngine(), new AIControl());
        } else if (type === "Moto Autônoma") {
            return new AutonomousMotorcycle(new JetEngine(), new ManualControl());
        }
        throw new Error("Tipo de veículo terrestre desconhecido");
    }
}

// Implementação da fábrica de veículos para Espaço
class SpaceVehicleFactory implements FuturisticVehicleFactory {
    createVehicle(type: string): FuturisticVehicle {
        if (type === "Nave") {
            return new Spaceship(new PlasmaEngine(), new AIControl());
        } else if (type === "Explorador Robótico") {
            return new RoboticExplorer(new PlasmaEngine(), new ManualControl());
        }
        throw new Error("Tipo de veículo espacial desconhecido");
    }
}

// Código cliente
function configureFuturisticVehicle(factory: FuturisticVehicleFactory, type: string) {
    const vehicle = factory.createVehicle(type);
    vehicle.describe();
}

console.log("Testando a fábrica de veículos terrestres:");
configureFuturisticVehicle(new LandVehicleFactory(), "Carro Voador");
configureFuturisticVehicle(new LandVehicleFactory(), "Moto Autônoma");

console.log("\nTestando a fábrica de veículos espaciais:");
configureFuturisticVehicle(new SpaceVehicleFactory(), "Nave");
configureFuturisticVehicle(new SpaceVehicleFactory(), "Explorador Robótico");

*/