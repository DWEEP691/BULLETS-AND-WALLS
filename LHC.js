function HC(bullet,wall) {
    BRE = bullet.x + bullet.width;
    WLE = wall.x;

    if(BRE>=WLE) {
        return true;
    }
        return false;
    }
