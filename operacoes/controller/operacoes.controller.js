const resp = [];
module.exports = {
    adicao: (req, res) => {
        const calc = {
            a: req.body.a,
            b: req.body.b
        };
        resp.push(calc.a + calc.b);
        res.send(resp);
    },
    subtracao: (req, res) => {
        const calc = {
            a: req.body.a,
            b: req.body.b
        };
        resp.push(calc.a - calc.b);
        res.send(resp);
    },
    multiplicacao: (req, res) => {
        const calc = {
            a: req.body.a,
            b: req.body.b
        };
        resp.push(calc.a * calc.b);
        res.send(resp);
    },
    divisao: (req, res) => {
        const calc = {
            a: req.body.a,
            b: req.body.b
        };
        resp.push(calc.a / calc.b);
        res.send(resp);
    }
}