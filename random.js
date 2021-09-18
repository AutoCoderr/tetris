function Random() {
    this.n = Date.now()/10**3;
    this.n = Math.round((this.n-Math.floor(this.n))*10**3)*19999999;

    this.randBasic = function() {
        const a = 3,
              b = 3,
              m = 10**10;
        this.n = (this.n*a + b) % m;
        return this.n/10**10;
    }

    this.rand = function (a,b) {
        return a+Math.floor(this.randBasic()*(b-a+1));
    }
}

function testRandom() {
        let R = new Random();
        let nb = {0: 0, 1: 0, 2: 0, 3: 0, 4: 0};
        for (let i=0;i<1000;i++) {
            nb[R.rand(0,4)] += 1;
        }
        return nb;
    }

function testRandomB() {
    let R = new Random();
    for (let i=0;i<10;i++) {
        console.log(R.randBasic());
    }
}
