import express from "express";

const app = express();
const port = 3000;

app.use(express.urlencoded({extended: true}));

app.get("/test", (req, res) =>
{
    const x = Number(req.query.x);
    const y = Number(req.query.y);
    res.type("text/plain");
    if(!isNatural(x) || !isNatural(y))
        return res.send("NaN");
    return res.send(String(lcm(x, y)));
});

app.listen(port, () =>
{
    console.log(`Server started on port ${port}`);
});

function hcf(x, y)
{
    while(y)
    {
        [x, y] = [y, x % y];
    }
    return x;
}

function lcm(x, y)
{
    return (x * y) / hcf(x, y);
}

function isNatural(num)
{
    return Number.isInteger(num) && num > 0;
}