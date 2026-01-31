import express from "express";

const app = express();
const port = process.env.PORT;

app.use(express.urlencoded({extended: true}));

app.get("/prottoyrafi235_gmail_com", (req, res) =>
{
    const x = Number(req.query.x);
    const y = Number(req.query.y);
    res.type("text/plain");
    if(!isNatural(x) || !isNatural(y))
        return res.send("NaN");
    return res.send(String(lcm(x, y)));
});

app.listen(port);

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