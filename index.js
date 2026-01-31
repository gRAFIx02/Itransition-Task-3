import express from "express";

const app = express();
const port = process.env.PORT;

app.use(express.urlencoded({extended: true}));

app.get("/prottoyrafi235_gmail_com", (req, res) =>
{
    const x = parseNatural(req.query.x);
    const y = parseNatural(req.query.y);
    res.type("text/plain");
    if(!x || !y)
        res.send("NaN");
    else
        res.send(lcm(x, y).toString());
});

app.listen(port);

function hcf(x, y)
{
    while(y !== 0n)
    {
        [x, y] = [y, x % y];
    }
    return x;
}

function lcm(x, y)
{
    return (x * y) / hcf(x, y);
}

function parseNatural(num)
{
  if (!/^[1-9]\d*$/.test(num))
    return null;
  return BigInt(num);
}