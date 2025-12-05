// ================================
// 1) Clase básica: Campeón genérico
// ================================
// Piensa en esto como el "diseño base" de un campeón que haría Riot.

class Champion {
  constructor(name, role, damage) {
    // Stats base del campeón
    this.name = name;   // Nombre del campeón
    this.role = role;   // Rol (Mid, Top, ADC, Support, Jungle)
    this.damage = damage; // Daño base en autoataque
  }

  // Habilidad básica: auto ataque
  attack() {
    console.log(`${this.name} ataca y hace ${this.damage} de daño básico.`);
  }

  // Método para mostrar info del campeón
  showInfo() {
    console.log(`Campeón: ${this.name} | Rol: ${this.role} | Daño: ${this.damage}`);
  }
}

// ================================
// 2) Instancias: campeones en la grieta
// ================================
// Cada 'new Champion(...)' es como entrar a una partida con ese campeón.

const ashe = new Champion("Ashe", "ADC", 95);
const garen = new Champion("Garen", "Top", 120);

ashe.showInfo();   // Ashe en partida
ashe.attack();

garen.showInfo();  // Garen en partida
garen.attack();

console.log("====================================");

// ================================
// 3) Herencia: Mago que hereda de Champion
// ================================
// Como Lux/Veigar que comparten lógica de "magos" pero con cosas extra.

class Mage extends Champion {
  constructor(name, role, damage, mana) {
    // Llamamos al constructor de Champion (campeón base)
    super(name, role, damage);
    this.mana = mana; // Recurso extra para magos
  }

  castSpell() {
    console.log(`${this.name} lanza un hechizo y gasta mana. Mana actual: ${this.mana}`);
  }
}

const lux = new Mage("Lux", "Mid", 110, 400);
lux.showInfo();
lux.attack();
lux.castSpell();

console.log("====================================");

// ================================
// 4) Ejemplo NO META #1:
//    Clase de Ítems usando array en lugar de propiedades con nombre
// ================================
// Esto es como hacer una build troll: funciona, pero no es la forma estándar.
// En lugar de this.name y this.price, usamos this.data[0] y this.data[1].

class Item {
  constructor(name, price) {
    // Guardamos todo en un solo array
    this.data = [name, price];
  }

  show() {
    // data[0] = nombre, data[1] = precio
    console.log(`Ítem: ${this.data[0]} | Costo: ${this.data[1]} de oro`);
  }

  // Podemos incluso simular "actualizar precio"
  updatePrice(newPrice) {
    this.data[1] = newPrice;
    console.log(`Nuevo precio de ${this.data[0]}: ${this.data[1]} de oro`);
  }
}

const potion = new Item("Poción de Vida", 50);
potion.show();
potion.updatePrice(60);

console.log("====================================");

// ================================
// 5) Ejemplo NO META #2:
//    Crear habilidades dinámicas dentro del constructor (Q, W, E, R)
// ================================
// Esto es como si crearas las skills del campeón "al vuelo".

class DynamicChampion {
  constructor(name) {
    this.name = name;

    // Habilidad Q creada dinámicamente
    this.Q = () => {
      console.log(`${this.name} lanza su Q improvisada.`);
    };

    // Habilidad W creada dinámicamente
    this.W = () => {
      console.log(`${this.name} activa su W defensiva.`);
    };
  }
}

const teemo = new DynamicChampion("Teemo");
teemo.Q();
teemo.W();

console.log("====================================");

// ================================
// 6) Ejemplo NO META #3:
//    Clase sin constructor (como jugar sin jungla pero aún hay juego)
// ================================

class Camp {
  shout() {
    console.log("Soy un campamento neutral y existo sin constructor.");
  }
}

const blueBuff = new Camp();
blueBuff.shout();

console.log("====================================");

// ================================
// 7) Ejemplo NO META #4:
//    Clase casi vacía + prototype (estilo URF descontrolado)
// ================================
// Creamos la clase sin nada especial...

class ChampURF {}

// ...y luego le agregamos habilidades usando prototype:
ChampURF.prototype.Q = function () {
  console.log("Q spameada con 80% de CDR en URF.");
};

ChampURF.prototype.R = function () {
  console.log("R global sin cooldown aparente.");
};

const sonaURF = new ChampURF();
sonaURF.Q();
sonaURF.R();

console.log("====================================");

// ================================
// 8) Pequeña demo final: "equipo completo"
// ================================

const team = [
  new Champion("Yasuo", "Mid", 130),
  new Champion("Jinx", "ADC", 100),
  new Champion("Leona", "Support", 60),
  new Mage("Veigar", "Mid", 105, 500),
];

console.log("Equipo entrando a la Grieta:");
team.forEach((champ) => {
  champ.showInfo();
  champ.attack();

  // Si el campeón también es mago, que lance un hechizo
  if (champ instanceof Mage) {
    champ.castSpell();
  }
});
