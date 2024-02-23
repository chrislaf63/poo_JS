export class Warrior {
    /**
     *
     * @param {string} name
     * @param {number} power
     * @param {number} life
     */
    constructor(name, power, life) {
        this.name = name;
        this.power = power;
        this.life = life;
    }

    /**
     *
     * @param {Warrior} opponent
     * @returns number
     */
    attack(opponent) {
        this.opponent = opponent;
        this.opponent.life = this.opponent.life - this.power;
        return this.opponent.life;
    }

    /**
     *
     * @returns boolean
     */
    isAlive() {
        if (this.life > 0) {
            return true;
        } else {
            return false;
        }
    }
}

export class WarriorAxe extends Warrior {
    constructor(name, power, life) {
        super(name, power, life);
    }
    /**
     *
     * @param {Warrior} opponent
     */
    attack(opponent) {
        if (opponent instanceof WarriorSword) {
            this.power = this.power * 2;
        }
        return super.attack(opponent);
    }
}

export class WarriorSword extends Warrior {
    constructor(name, power, life) {
        super(name, power, life);
    }

    /**
     *
     * @param {Warrior} opponent
     */
    attack(opponent) {
        if (opponent instanceof WarriorSpear) {
            this.power = this.power * 2;
        }
        return super.attack(opponent);
    }
}

export class WarriorSpear extends Warrior {
    constructor(name, power, life) {
        super(name, power, life);
    }

    /**
     *
     * @param {Warrior} opponent
     */
    attack(opponent) {
        if (opponent instanceof WarriorAxe) {
            this.power = this.power * 2;
        }
        return super.attack(opponent);
    }
}
